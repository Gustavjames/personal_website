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

  // Check if refreshed more than 5 times in 10 seconds
  const checkSpamRefresh = () => {
    const now = Date.now();
    const tenSecondsAgo = now - 10000;
    
    // Clean refresh records from more than 10 seconds ago
    refreshTimesRef.current = refreshTimesRef.current.filter(time => time > tenSecondsAgo);
    
    // Add current refresh time
    refreshTimesRef.current.push(now);
    
    // Check if more than 5 times
    if (refreshTimesRef.current.length >= 5) {
      setIsSpamBlocked(true);
      return true;
    }
    
    return false;
  };

  // Reset spam block status
  const resetSpamBlock = () => {
    setIsSpamBlocked(false);
    refreshTimesRef.current = [];
  };

  useEffect(() => {
    // Set loading timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Page refresh protection
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isSpamBlocked) {
        e.preventDefault();
        e.returnValue = 'Abnormal refresh behavior detected, please wait for cooldown to end.';
        return 'Abnormal refresh behavior detected, please wait for cooldown to end.';
      }
      
      if (checkSpamRefresh()) {
        e.preventDefault();
        e.returnValue = 'Refreshing too frequently! Please wait for cooldown to end.';
        return 'Refreshing too frequently! Please wait for cooldown to end.';
      }
    };

    // Keyboard refresh protection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSpamBlocked) {
        e.preventDefault();
        return false;
      }
      
      // Block F5 and Ctrl+R
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        if (checkSpamRefresh()) {
          e.preventDefault();
          return false;
        }
      }
    };

    // Mouse right-click refresh protection
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