'use client';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Matrix background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 terminal-text">GUSTAV_JAMES</h3>
            <p className="text-cyan-400 terminal-text">FULL_STACK_DEV | CYBERSECURITY_SPECIALIST | NETWORK_ENGINEER</p>
          </div>

          <div className="mb-8">
            <div className="terminal-text text-sm text-green-400 mb-4">
              &gt; SYSTEM_STATUS: ONLINE<br />
              &gt; SECURITY_LEVEL: MAXIMUM<br />
              &gt; READY_FOR_COLLABORATION
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-gray-400 terminal-text">© 2024 GUSTAV_JAMES. ALL_RIGHTS_RESERVED.</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 flex items-center space-x-1 terminal-text">
              <span>MADE_WITH</span>
              <span className="text-green-400">❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
