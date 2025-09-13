'use client';

import { personalInfo } from '@/data/personalData';

interface HeroProps {
  user: { email: string; name: string } | null;
  onLogin: () => void;
}

const Hero = ({ user, onLogin }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Matrix-style background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="terminal-text text-sm mb-4 animate-fadeInUp">
              &gt; SYSTEM INITIALIZED<br />
              &gt; LOADING USER PROFILE...
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Hello, I'm{' '}
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-cyan-400 mb-6 font-medium terminal-text">
              {personalInfo.subtitle}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 hacker-glow"
              >
                &gt; VIEW_PROJECTS
              </a>
              {user ? (
                <div className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg terminal-text">
                  &gt; WELCOME_BACK_{user.name.toUpperCase()}
                </div>
              ) : (
                <button
                  onClick={onLogin}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 terminal-text"
                >
                  &gt; LOGIN_TO_CONTINUE
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 glass rounded-3xl p-8 hacker-glow">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center hacker-glow">
                  <span className="text-6xl font-bold text-black terminal-text">G</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 terminal-text">{personalInfo.name}</h3>
                <p className="text-gray-400 mb-6 terminal-text">{personalInfo.title}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white terminal-text">{personalInfo.stats.projects}+</div>
                    <div className="text-sm text-gray-400 terminal-text">PROJECTS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white terminal-text">{personalInfo.stats.experience}</div>
                    <div className="text-sm text-gray-400 terminal-text">EXPERIENCE</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white terminal-text">{personalInfo.stats.satisfaction}%</div>
                    <div className="text-sm text-gray-400 terminal-text">SUCCESS</div>
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
