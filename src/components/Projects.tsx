'use client';

import { projects } from '@/data/personalData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
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
            &gt; LOADING PROJECT_DATABASE...
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 terminal-text">FEATURED_PROJECTS</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full hacker-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hacker-glow">
              <div className="h-48 bg-gradient-to-br from-green-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-black">
                  <div className="text-6xl terminal-text">💻</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 terminal-text">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-900/50 text-green-400 text-sm font-medium rounded-full hover:bg-green-800/50 transition-colors duration-300 terminal-text border border-green-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-xs text-cyan-400 terminal-text">
                  &gt; STATUS: {project.id === '1' ? 'IN_DEVELOPMENT' : 'ACTIVE'}<br />
                  &gt; SECURITY_LEVEL: MAXIMUM
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
