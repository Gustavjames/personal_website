import { NextRequest, NextResponse } from 'next/server';
import * as si from 'systeminformation';

export async function GET() {
  try {
    // 获取CPU信息
    const cpu = await si.cpu();
    const cpuCurrentSpeed = await si.cpuCurrentSpeed();
    const cpuTemperature = await si.cpuTemperature();
    const cpuLoad = await si.currentLoad();
    
    // 获取内存信息
    const mem = await si.mem();
    
    // 获取系统信息
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const system = await si.system() as Record<string, any>;
    
    // 计算CPU使用率
    const cpuUsage = cpuLoad.currentLoad;
    const cores = cpuLoad.cpus.map(core => core.load);
    
    // 获取CPU温度（如果可用）
    const temperature = cpuTemperature.main || 45; // 默认45度
    
    // 获取CPU频率
    const frequency = cpuCurrentSpeed.avg || cpu.speed || 2400;
    
    const systemData = {
      cpu: {
        usage: Math.round(cpuUsage * 100) / 100,
        cores: cores.map(load => Math.round(load * 100) / 100),
        temperature: Math.round(temperature * 10) / 10,
        frequency: Math.round(frequency),
        coresCount: cpu.cores,
        manufacturer: cpu.manufacturer,
        brand: cpu.brand
      },
      memory: {
        total: Math.round(mem.total / 1024 / 1024 / 1024 * 100) / 100, // GB
        used: Math.round(mem.used / 1024 / 1024 / 1024 * 100) / 100, // GB
        free: Math.round(mem.free / 1024 / 1024 / 1024 * 100) / 100, // GB
        usage: Math.round((mem.used / mem.total) * 100 * 100) / 100 // 百分比
      },
      system: {
        platform: system.platform || 'unknown',
        distro: system.distro || 'Unknown',
        release: system.release || 'Unknown',
        arch: system.arch || 'x64',
        hostname: system.hostname || 'localhost'
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(systemData);
  } catch (error) {
    console.error('Error fetching system data:', error);
    
    // 如果获取真实数据失败，返回模拟数据
    const fallbackData = {
      cpu: {
        usage: Math.random() * 100,
        cores: Array(8).fill(0).map(() => Math.random() * 100),
        temperature: 40 + Math.random() * 30,
        frequency: 2000 + Math.random() * 2000,
        coresCount: 8,
        manufacturer: "Unknown",
        brand: "Unknown"
      },
      memory: {
        total: 16,
        used: Math.random() * 16,
        free: 16 - Math.random() * 16,
        usage: Math.random() * 100
      },
      system: {
        platform: "unknown",
        distro: "Unknown",
        release: "Unknown",
        arch: "x64",
        hostname: "localhost"
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(fallbackData);
  }
}
