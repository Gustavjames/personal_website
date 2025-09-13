'use client';

import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '@/data/personalData';

const BashTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim();
    setHistory(prev => [...prev, `kali@kali:~$ ${command}`]);
    
    if (command === 'whoami') {
      setHistory(prev => [...prev, 'Gustav James']);
    } else if (command === 'ls') {
      setHistory(prev => [...prev, 'drwxr-xr-x 3 kali kali 4096 Jan 15 10:30 <span class="text-blue-400">.</span>']);
      setHistory(prev => [...prev, 'drwxr-xr-x 3 root root 4096 Jan 15 10:25 <span class="text-blue-400">..</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  220 Jan 15 10:25 <span class="text-yellow-400">.bashrc</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  807 Jan 15 10:25 <span class="text-yellow-400">.profile</span>']);
      setHistory(prev => [...prev, 'drwxr-xr-x 2 kali kali 4096 Jan 15 10:30 <span class="text-blue-400">projects</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  512 Jan 15 10:30 <span class="text-green-400">about</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  256 Jan 15 10:30 <span class="text-green-400">contact</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  128 Jan 15 10:30 <span class="text-green-400">skills</span>']);
    } else if (command === 'ls -la') {
      setHistory(prev => [...prev, 'drwxr-xr-x 3 kali kali 4096 Jan 15 10:30 <span class="text-blue-400">.</span>']);
      setHistory(prev => [...prev, 'drwxr-xr-x 3 root root 4096 Jan 15 10:25 <span class="text-blue-400">..</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  220 Jan 15 10:25 <span class="text-yellow-400">.bashrc</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  807 Jan 15 10:25 <span class="text-yellow-400">.profile</span>']);
      setHistory(prev => [...prev, 'drwxr-xr-x 2 kali kali 4096 Jan 15 10:30 <span class="text-blue-400">projects</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  512 Jan 15 10:30 <span class="text-green-400">about</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  256 Jan 15 10:30 <span class="text-green-400">contact</span>']);
      setHistory(prev => [...prev, '-rw-r--r-- 1 kali kali  128 Jan 15 10:30 <span class="text-green-400">skills</span>']);
    } else if (command === './about') {
      setHistory(prev => [...prev, '']);
      setHistory(prev => [...prev, 'Securing digital systems through cryptography and AI']);
      setHistory(prev => [...prev, '']);
      setHistory(prev => [...prev, "I'm a Java developer and cybersecurity researcher focused on building secure applications and cryptographic solutions. I work on developing Java-based security tools, implementing cryptographic protocols, and training AI models for threat detection. My expertise spans Java development, penetration testing, cryptographic algorithm design, and machine learning model development."]);
      setHistory(prev => [...prev, '']);
      setHistory(prev => [...prev, 'I focus on developing robust security solutions, implementing cryptographic protocols, and training AI models for threat detection.']);
    } else if (command.startsWith('cd ')) {
      const target = command.substring(3).trim();
      if (target === 'about' || target === 'about/') {
        setHistory(prev => [...prev, '']);
        setHistory(prev => [...prev, 'Changing directory to about section...']);
        setTimeout(() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (target === 'projects' || target === 'projects/') {
        setHistory(prev => [...prev, '']);
        setHistory(prev => [...prev, 'Changing directory to projects section...']);
        setTimeout(() => {
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (target === 'skills' || target === 'skills/') {
        setHistory(prev => [...prev, '']);
        setHistory(prev => [...prev, 'Changing directory to skills section...']);
        setTimeout(() => {
          document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (target === 'contact' || target === 'contact/') {
        setHistory(prev => [...prev, '']);
        setHistory(prev => [...prev, 'Changing directory to contact section...']);
        setTimeout(() => {
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (target === 'home' || target === 'home/' || target === '~' || target === '') {
        setHistory(prev => [...prev, '']);
        setHistory(prev => [...prev, 'Changing directory to home section...']);
        setTimeout(() => {
          document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        setHistory(prev => [...prev, `cd: ${target}: No such file or directory`]);
      }
    } else if (command === 'help') {
      setHistory(prev => [...prev, 'Available commands: whoami, ls, ls -la, ./about, cd <section>, help, clear']);
      setHistory(prev => [...prev, '']);
      setHistory(prev => [...prev, 'Navigation commands:']);
      setHistory(prev => [...prev, '  cd about     - Navigate to about section']);
      setHistory(prev => [...prev, '  cd projects  - Navigate to projects section']);
      setHistory(prev => [...prev, '  cd skills    - Navigate to skills section']);
      setHistory(prev => [...prev, '  cd contact   - Navigate to contact section']);
      setHistory(prev => [...prev, '  cd home      - Navigate to home section']);
    } else if (command === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, `bash: ${command}: command not found`]);
    }
    
    setInput('');
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <div className="bg-gray-900 border-2 border-gray-700 rounded-t-lg overflow-hidden font-mono shadow-2xl relative">
        {/* Kali Linux decorative border */}
        <div className="absolute inset-0 border-2 border-gray-600 rounded-t-lg pointer-events-none"></div>
        <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
        {/* Kali Terminal Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 flex items-center justify-between border-b-2 border-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer shadow-lg border border-red-600"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer shadow-lg border border-yellow-600"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer shadow-lg border border-green-600"></div>
            </div>
            <div className="text-gray-200 text-sm font-bold">
              kali@kali: ~
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-gray-300 text-xs">
              Terminal
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="h-[500px] p-4 overflow-y-auto bg-black text-green-400 border-l-2 border-r-2 border-gray-700"
        >
          <div className="space-y-1">
            
            <div className="text-green-300 text-sm mb-2">
              <span className="text-green-400">kali@kali:~$</span> pwd
            </div>
            <div className="text-green-400 text-sm mb-4">
              /home/kali
            </div>
            
            {history.map((line, index) => (
              <div key={index} className="text-sm" dangerouslySetInnerHTML={{ __html: line }} />
            ))}
            
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-gradient-to-r from-gray-900 to-black border-t-2 border-gray-600 p-4 rounded-b-lg">
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 text-sm mr-2 font-bold">kali@kali:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 text-sm outline-none font-mono"
              placeholder=""
              autoComplete="off"
            />
            <span className="text-green-400 animate-pulse text-lg">█</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BashTerminal;
