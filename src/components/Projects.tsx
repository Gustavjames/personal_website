'use client';

import Interactive3DCardGrid from './Interactive3DCard';

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
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
        </div>

        <Interactive3DCardGrid />
      </div>
    </section>
  );
};

export default Projects;
