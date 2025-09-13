'use client';

import React, { useState, useEffect } from 'react';
import KaliWaveChart from './KaliWaveChart';

interface CPUData {
  usage: number;
  cores: number[];
  temperature: number;
  frequency: number;
  coresCount: number;
}

interface SystemData {
  cpu: CPUData;
  memory: {
    total: number;
    used: number;
    free: number;
    usage: number;
  };
  system: {
    platform: string;
    distro: string;
    release: string;
    arch: string;
    hostname: string;
  };
  timestamp: string;
}

const CPUMonitor: React.FC = () => {
  const [cpuData, setCpuData] = useState<CPUData>({
    usage: 0,
    cores: [0, 0, 0, 0, 0, 0, 0, 0],
    temperature: 45,
    frequency: 2400,
    coresCount: 8
  });

  const [memoryData, setMemoryData] = useState({
    total: 16,
    used: 8,
    free: 8,
    usage: 50
  });

  const [systemInfo, setSystemInfo] = useState({
    platform: 'Unknown',
    distro: 'Unknown',
    hostname: 'localhost'
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRealData, setIsRealData] = useState(false);

  // 获取真实系统数据
  const fetchSystemData = async () => {
    try {
      const response = await fetch('/api/system');
      const data: SystemData = await response.json();
      
      setCpuData({
        usage: data.cpu.usage,
        cores: data.cpu.cores,
        temperature: data.cpu.temperature,
        frequency: data.cpu.frequency,
        coresCount: data.cpu.coresCount
      });
      
      setMemoryData({
        total: data.memory.total,
        used: data.memory.used,
        free: data.memory.free,
        usage: data.memory.usage
      });
      
      setSystemInfo({
        platform: data.system.platform,
        distro: data.system.distro,
        hostname: data.system.hostname
      });
      
      setIsRealData(true);
    } catch (error) {
      console.error('Failed to fetch system data:', error);
      setIsRealData(false);
    }
  };

  // 获取真实CPU数据
  useEffect(() => {
    // 立即获取一次数据
    fetchSystemData();
    
    // 每2秒更新一次
    const interval = setInterval(fetchSystemData, 2000);

    return () => clearInterval(interval);
  }, []);

  // 显示/隐藏动画
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getUsageColor = (usage: number) => {
    if (usage < 30) return 'text-green-400';
    if (usage < 60) return 'text-yellow-400';
    if (usage < 80) return 'text-orange-400';
    return 'text-red-400';
  };

  const getBarColor = (usage: number) => {
    if (usage < 30) return 'bg-green-500';
    if (usage < 60) return 'bg-yellow-500';
    if (usage < 80) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className="bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 font-mono text-xs shadow-2xl w-64">
        {/* 标题 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isRealData ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-green-400 font-bold text-xs">SYS MONITOR</span>
            {isRealData && <span className="text-xs text-green-300">LIVE</span>}
          </div>
          <div className="text-gray-400 text-xs">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* 总体CPU使用率 */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-300 text-xs">CPU</span>
            <span className={`font-bold text-xs ${getUsageColor(cpuData.usage)}`}>
              {cpuData.usage.toFixed(1)}%
            </span>
          </div>
          <div className="relative">
            <KaliWaveChart 
              value={cpuData.usage} 
              height={20}
              color={cpuData.usage < 30 ? 'green' : cpuData.usage < 60 ? 'yellow' : cpuData.usage < 80 ? 'orange' : 'red'}
              animated={true}
            />
          </div>
        </div>

        {/* 内存使用率 */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-300 text-xs">RAM</span>
            <span className={`font-bold text-xs ${getUsageColor(memoryData.usage)}`}>
              {memoryData.usage.toFixed(1)}%
            </span>
          </div>
          <div className="relative">
            <KaliWaveChart 
              value={memoryData.usage} 
              height={20}
              color={memoryData.usage < 30 ? 'green' : memoryData.usage < 60 ? 'yellow' : memoryData.usage < 80 ? 'orange' : 'red'}
              animated={true}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{memoryData.used.toFixed(1)}G</span>
            <span>{memoryData.total.toFixed(1)}G</span>
          </div>
        </div>

        {/* 核心使用率 */}
        <div className="mb-3">
          <div className="text-gray-300 mb-1 text-xs">CORES</div>
          <div className="grid grid-cols-4 gap-1">
            {cpuData.cores.slice(0, 4).map((core, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-400 mb-1">C{index + 1}</div>
                <div className="relative">
                  <KaliWaveChart 
                    value={core} 
                    height={15}
                    color={core < 30 ? 'green' : core < 60 ? 'yellow' : core < 80 ? 'orange' : 'red'}
                    animated={true}
                  />
                </div>
                <div className={`text-xs mt-1 ${getUsageColor(core)}`}>
                  {core.toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 系统信息 */}
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">TEMP:</span>
            <span className="text-yellow-400">{cpuData.temperature.toFixed(1)}°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">FREQ:</span>
            <span className="text-blue-400">{(cpuData.frequency / 1000).toFixed(1)}G</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">CORES:</span>
            <span className="text-green-400">{cpuData.coresCount}</span>
          </div>
        </div>

        {/* 底部装饰线 */}
        <div className="mt-2 pt-1 border-t border-green-500/20">
          <div className="flex space-x-1">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-1 bg-green-500/30 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPUMonitor;
