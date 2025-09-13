'use client';

import { skills } from '@/data/personalData';

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools')
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
        <div className="text-center mb-16">
          <div className="terminal-text text-sm mb-4">
            &gt; LOADING SKILL_MATRIX...
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 terminal-text">SKILLS_&_EXPERTISE</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full hacker-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="glass rounded-2xl p-8 hacker-glow">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 terminal-text">
                  {category === 'frontend' ? '🎨' : category === 'backend' ? '⚙️' : '🛠️'}
                </div>
                <h3 className="text-2xl font-bold text-white terminal-text">
                  {category === 'frontend' ? 'FRONTEND_DEV' : category === 'backend' ? 'BACKEND_DEV' : 'CYBERSECURITY_&_TOOLS'}
                </h3>
              </div>

              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-green-400 terminal-text">{skill.name}</span>
                      <span className="text-sm text-cyan-400 terminal-text">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-green-400/30">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-1000 hacker-glow"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
