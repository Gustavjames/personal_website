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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Securing digital systems through cryptography and AI
            </h3>
            <div className="space-y-4 text-green-300 leading-relaxed">
              <p>{personalInfo.about}</p>
              <p className="text-green-400">
                I focus on developing robust security solutions, implementing cryptographic protocols, and training AI models for threat detection.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 glass rounded-2xl flex items-center justify-center hacker-glow overflow-hidden">
              {personalInfo.image ? (
                <div className="w-full h-full relative">
                  <img 
                    src={personalInfo.image} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-green-400">
                      <h4 className="text-2xl font-bold mb-2">Security & AI</h4>
                      <p className="text-green-300">Protecting digital assets</p>
                      <div className="mt-4 text-sm text-green-500">
                        Cybersecurity expert<br />
                        Cryptography specialist<br />
                        AI model trainer
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-green-400">
                  <div className="text-6xl mb-4">[G]</div>
                  <h4 className="text-2xl font-bold mb-2">Security & AI</h4>
                  <p className="text-green-300">Protecting digital assets</p>
                  <div className="mt-4 text-sm text-green-500">
                    Cybersecurity expert<br />
                    Cryptography specialist<br />
                    AI model trainer
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
