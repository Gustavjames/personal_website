'use client';

import { personalInfo } from '@/data/personalData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-6 font-medium">
              {personalInfo.subtitle}
            </p>
            
            <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">Y</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                <p className="text-blue-100 mb-6">{personalInfo.title}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{personalInfo.stats.projects}+</div>
                    <div className="text-sm text-blue-100">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{personalInfo.stats.experience}</div>
                    <div className="text-sm text-blue-100">Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{personalInfo.stats.satisfaction}%</div>
                    <div className="text-sm text-blue-100">Satisfaction</div>
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
