'use client';

import { skills } from '@/data/personalData';

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">
                  {category === 'frontend' ? '🎨' : category === 'backend' ? '⚙️' : '🛠️'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category === 'frontend' ? 'Frontend Development' : category === 'backend' ? 'Backend Development' : 'Cybersecurity & Tools'}
                </h3>
              </div>

              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
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
