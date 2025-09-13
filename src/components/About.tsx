'use client';

import { personalInfo } from '@/data/personalData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Matrix background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-text text-sm mb-4">
            &gt; LOADING PROFILE_DATA...
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 terminal-text">ABOUT_ME</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full hacker-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 terminal-text">
              &gt; CRAFTING_DIGITAL_SOLUTIONS_WITH_SECURITY_IN_MIND
            </h3>
            <div className="space-y-4 text-white leading-relaxed">
              <p className="text-gray-300">{personalInfo.about}</p>
              <p className="text-gray-400">
                I firmly believe that good code is not just about functionality, but also about security and elegance.
                Every line of code carries the pursuit of perfection, and every pixel reflects an understanding of both beauty and security.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 glass rounded-2xl flex items-center justify-center hacker-glow">
              <div className="text-center text-white">
                <div className="text-6xl mb-4 terminal-text">💻</div>
                <h4 className="text-2xl font-bold mb-2 terminal-text">CODE_AS_ART</h4>
                <p className="text-gray-400 terminal-text">Every line of code is creation</p>
                <div className="mt-4 text-sm text-gray-500 terminal-text">
                  &gt; STATUS: ONLINE<br />
                  &gt; SECURITY_LEVEL: MAXIMUM<br />
                  &gt; READY_FOR_COLLABORATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
