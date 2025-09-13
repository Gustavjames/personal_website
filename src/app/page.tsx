'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpamBlocked from '@/components/SpamBlocked';
import CPUMonitor from '@/components/CPUMonitor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpamBlocked, setIsSpamBlocked] = useState(false);
  const refreshTimesRef = useRef<number[]>([]);
  const lastRefreshRef = useRef<number>(0);

  // 检查是否在10秒内刷新超过5次
  const checkSpamRefresh = () => {
    const now = Date.now();
    const tenSecondsAgo = now - 10000;
    
    // 清理10秒前的刷新记录
    refreshTimesRef.current = refreshTimesRef.current.filter(time => time > tenSecondsAgo);
    
    // 添加当前刷新时间
    refreshTimesRef.current.push(now);
    
    // 检查是否超过5次
    if (refreshTimesRef.current.length >= 5) {
      setIsSpamBlocked(true);
      return true;
    }
    
    return false;
  };

  // 重置防刷屏状态
  const resetSpamBlock = () => {
    setIsSpamBlocked(false);
    refreshTimesRef.current = [];
  };

  useEffect(() => {
    // 设置加载超时
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // 页面刷新保护
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isSpamBlocked) {
        e.preventDefault();
        e.returnValue = '检测到异常刷新行为，请等待冷却时间结束。';
        return '检测到异常刷新行为，请等待冷却时间结束。';
      }
      
      if (checkSpamRefresh()) {
        e.preventDefault();
        e.returnValue = '刷新太频繁了！请等待冷却时间结束。';
        return '刷新太频繁了！请等待冷却时间结束。';
      }
    };

    // 键盘刷新保护
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSpamBlocked) {
        e.preventDefault();
        return false;
      }
      
      // 阻止 F5 和 Ctrl+R
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        if (checkSpamRefresh()) {
          e.preventDefault();
          return false;
        }
      }
    };

    // 鼠标右键刷新保护
    const handleContextMenu = (e: MouseEvent) => {
      if (isSpamBlocked) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      clearTimeout(loadingTimeout);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isSpamBlocked]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="terminal-text text-green-400 text-xl mb-4">
            &gt; LOADING SYSTEM...
          </div>
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isSpamBlocked) {
    return <SpamBlocked onReset={resetSpamBlock} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <CPUMonitor />
    </main>
  );
}