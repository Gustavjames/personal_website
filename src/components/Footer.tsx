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
            <h3 className="text-2xl font-bold mb-2">Gustav James</h3>
            <p className="text-cyan-400">Cybersecurity Specialist | Cryptography Expert | AI Model Trainer</p>
          </div>

          <div className="mb-8">
            <div className="text-sm text-green-400 mb-4">
              Cybersecurity expert<br />
              Cryptography specialist<br />
              AI model trainer
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-gray-400">© 2024 Gustav James. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
