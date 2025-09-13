'use client';

import { skills } from '@/data/personalData';

const Skills = () => {
  const skillCategories = {
    java: skills.filter(skill => skill.category === 'java'),
    cybersecurity: skills.filter(skill => skill.category === 'cybersecurity'),
    cryptography: skills.filter(skill => skill.category === 'cryptography')
  };

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Matrix background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-white mb-3">Skills & Expertise</h2>
            <div className="w-12 h-0.5 bg-green-400 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="glass rounded-xl p-5 hacker-glow hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-5">
                <div className="inline-block px-3 py-1 bg-green-400/10 rounded-full mb-3">
                  <h3 className="text-sm font-bold text-green-400 uppercase tracking-wide">
                    {category === 'java' ? 'Java Dev' : category === 'cybersecurity' ? 'Security' : 'Crypto'}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="group relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-green-400 group-hover:text-green-300 transition-colors truncate pr-2">{skill.name}</span>
                      <span className="text-xs text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="relative w-full bg-gray-800/50 rounded-full h-1 overflow-hidden">
                      <div
                        className="h-full bg-green-400 rounded-full transition-all duration-1000 group-hover:bg-green-300 relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </div>
                    </div>
                    {skill.level >= 90 && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
