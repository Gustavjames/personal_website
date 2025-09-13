'use client';

import { personalInfo } from '@/data/personalData';
import { useState, useRef, useEffect } from 'react';
import BashTerminal from './BashTerminal';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [isTypingDescription, setIsTypingDescription] = useState(false);

  // Display name letter by letter
  useEffect(() => {
    const fullName = 'Gustav James';
    let currentIndex = 0;
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        // After name display is complete, start displaying description
        setTimeout(() => {
          const description = "I'm a Java developer specializing in cybersecurity, cryptography, and AI model training. I build secure applications, develop cryptographic solutions, and train machine learning models using Java and related technologies.";
          let descIndex = 0;
          setIsTypingDescription(true);
          
          const descInterval = setInterval(() => {
            if (descIndex < description.length) {
              setDisplayedDescription(description.substring(0, descIndex + 1));
              descIndex++;
            } else {
              setIsTypingDescription(false);
              clearInterval(descInterval);
            }
          }, 30); // Display one letter every 30ms, faster
        }, 1000); // Delay 1 second before starting to display description
      }
    }, 150); // Display one letter every 150ms
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black py-20">
      {/* Kali-style terminal background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bash Terminal */}
        <BashTerminal />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white font-mono">
              <span className="block text-green-400">
                {displayedName}
                {isTyping && <span className="animate-pulse text-green-400">█</span>}
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-green-400 font-mono font-semibold">
              {personalInfo.title}
            </p>
            
            <p className="text-lg text-green-300 leading-relaxed max-w-2xl font-mono">
              {displayedDescription}
              {isTypingDescription && <span className="animate-pulse text-green-400">█</span>}
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-4 bg-green-400 text-black font-bold font-mono rounded-none hover:bg-green-300 transition-all duration-300 hover:scale-105 border-2 border-green-400"
              >
                ./view_projects.sh
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-400 text-green-400 font-bold font-mono rounded-none hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                ./contact.sh
              </a>
            </div>
          </div>

          {/* Right side - Profile Card */}
          <div className="flex justify-center lg:justify-end relative z-20">
            <div className="relative w-96 h-64 perspective-1000 group">
              {/* Card Container */}
              <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d hover:rotate-y-180 hover:scale-105">
                {/* Front Card - Profile */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-green-400 shadow-2xl backface-hidden group-hover:shadow-green-500/50 rounded-xl">
                  {/* Matrix background effect */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  <div className="p-6 h-full flex flex-col justify-center text-center relative z-10">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-green-400 shadow-lg">
                        {personalInfo.image ? (
                          <img 
                            src={personalInfo.image} 
                            alt={personalInfo.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-green-400/20 flex items-center justify-center">
                            <span className="text-green-400 text-3xl font-bold font-mono">G</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-green-400 mb-2 font-mono gradient-text">
                      {personalInfo.name}
                    </h3>
                    <p className="text-green-300 text-lg mb-4 font-mono">
                      {personalInfo.title}
                    </p>
                    
                    <div className="text-sm text-green-400 terminal-text">
                      Hover to view projects →
                    </div>
                  </div>
                </div>

                {/* Back Card - Projects */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-green-400 shadow-2xl backface-hidden rotate-y-180 group-hover:shadow-green-500/50 rounded-xl">
                  {/* Matrix background effect */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  <div className="p-6 h-full flex flex-col justify-center relative z-10">
                    <div className="bg-black/50 border-2 border-green-400/60 p-6 text-sm rounded-xl glass">
                      <div className="text-green-300 mb-4 text-center font-bold text-lg terminal-text">
                        &gt; PROJECTS_DATABASE
                      </div>
                      <div className="text-green-400 space-y-3">
                        <div className="flex items-center justify-between hover:text-green-300 transition-colors duration-200">
                          <span>• AI Security Model</span>
                          <span className="text-green-500 text-xs">[ACTIVE]</span>
                        </div>
                        <div className="flex items-center justify-between hover:text-green-300 transition-colors duration-200">
                          <span>• Cryptographic Protocol</span>
                          <span className="text-green-500 text-xs">[ACTIVE]</span>
                        </div>
                        <div className="flex items-center justify-between hover:text-green-300 transition-colors duration-200">
                          <span>• Penetration Testing Framework</span>
                          <span className="text-yellow-400 text-xs">[DEV]</span>
                        </div>
                        <div className="flex items-center justify-between hover:text-green-300 transition-colors duration-200">
                          <span>• Network Security Scanner</span>
                          <span className="text-green-500 text-xs">[ACTIVE]</span>
                        </div>
                        <div className="flex items-center justify-between hover:text-green-300 transition-colors duration-200">
                          <span>• Blockchain Security Tool</span>
                          <span className="text-cyan-400 text-xs">[NEW]</span>
                        </div>
                        <div className="border-t border-green-400/30 mt-4 pt-3">
                          <div className="text-green-300 text-center text-sm font-bold">
                            Total: 25+ projects completed
                          </div>
                          <div className="text-green-500 text-center text-xs mt-1">
                            Success Rate: 98.5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
