'use client';

import { useEffect, useState } from 'react';

interface SpamBlockedProps {
  onReset: () => void;
}

const SpamBlocked = ({ onReset }: SpamBlockedProps) => {
  const [countdown, setCountdown] = useState(60); // 60 second cooldown time
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsVisible(false);
          setTimeout(() => {
            onReset();
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onReset]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background animation effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="text-center glass rounded-3xl p-12 hacker-glow relative z-10 max-w-md mx-4">
        {/* Warning icon */}
        <div className="text-6xl mb-6 animate-bounce">
          ⚠️
        </div>
        
        {/* Main title */}
        <div className="terminal-text text-red-400 text-2xl mb-4 font-bold">
          &gt; Abnormal behavior detected
        </div>
        
        {/* Subtitle */}
        <div className="text-orange-300 text-lg mb-6">
          You're refreshing too frequently!
        </div>
        
        {/* Details */}
        <div className="text-gray-300 mb-8 space-y-2">
          <p className="text-sm">
            Detected 5 or more refresh operations within 10 seconds
          </p>
          <p className="text-sm">
            System has temporarily restricted your access
          </p>
        </div>
        
        {/* Countdown */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-red-400 mb-2">
            {countdown}s
          </div>
          <div className="text-sm text-gray-400">
            Please wait for cooldown to end
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((60 - countdown) / 60) * 100}%` }}
          ></div>
        </div>
        
        {/* Tips */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Please avoid frequent page refreshes</p>
          <p>• Contact administrator if you have issues</p>
          <p>• Access will be automatically restored after cooldown ends</p>
        </div>
        
        {/* Decorative border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-red-400/30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SpamBlocked;
