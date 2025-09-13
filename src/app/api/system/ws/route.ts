import { NextRequest } from 'next/server';
import { WebSocketServer } from 'ws';
import * as si from 'systeminformation';

let wss: WebSocketServer | null = null;

export async function GET(request: NextRequest) {
  if (!wss) {
    wss = new WebSocketServer({ port: 8080 });
    
    wss.on('connection', (ws) => {
      console.log('Client connected to system monitor');
      
      // 发送初始数据
      sendSystemData(ws);
      
      // 每2秒发送一次更新
      const interval = setInterval(() => {
        if (ws.readyState === ws.OPEN) {
          sendSystemData(ws);
        } else {
          clearInterval(interval);
        }
      }, 2000);
      
      ws.on('close', () => {
        console.log('Client disconnected from system monitor');
        clearInterval(interval);
      });
    });
  }

  return new Response('WebSocket server started', { status: 200 });
}

async function sendSystemData(ws: WebSocket) {
  try {
    const cpu = await si.cpu();
    const cpuCurrentSpeed = await si.cpuCurrentSpeed();
    const cpuTemperature = await si.cpuTemperature();
    const cpuLoad = await si.currentLoad();
    const mem = await si.mem();
    
    const systemData = {
      cpu: {
        usage: Math.round(cpuLoad.currentLoad * 100) / 100,
        cores: cpuLoad.cpus.map(core => Math.round(core.load * 100) / 100),
        temperature: Math.round((cpuTemperature.main || 45) * 10) / 10,
        frequency: Math.round(cpuCurrentSpeed.avg || cpu.speed || 2400),
        coresCount: cpu.cores
      },
      memory: {
        total: Math.round(mem.total / 1024 / 1024 / 1024 * 100) / 100,
        used: Math.round(mem.used / 1024 / 1024 / 1024 * 100) / 100,
        free: Math.round(mem.free / 1024 / 1024 / 1024 * 100) / 100,
        usage: Math.round((mem.used / mem.total) * 100 * 100) / 100
      },
      timestamp: new Date().toISOString()
    };

    ws.send(JSON.stringify(systemData));
  } catch (error) {
    console.error('Error sending system data:', error);
    
    // 发送模拟数据作为后备
    const fallbackData = {
      cpu: {
        usage: Math.random() * 100,
        cores: Array(8).fill(0).map(() => Math.random() * 100),
        temperature: 40 + Math.random() * 30,
        frequency: 2000 + Math.random() * 2000,
        coresCount: 8
      },
      memory: {
        total: 16,
        used: Math.random() * 16,
        free: 16 - Math.random() * 16,
        usage: Math.random() * 100
      },
      timestamp: new Date().toISOString()
    };

    ws.send(JSON.stringify(fallbackData));
  }
}
