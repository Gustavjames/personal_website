'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Gustav James</h3>
            <p className="text-gray-400">Full Stack Developer | Cybersecurity Specialist | Network Engineer</p>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-gray-400">© 2024 Gustav James. All rights reserved.</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 flex items-center space-x-1">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
