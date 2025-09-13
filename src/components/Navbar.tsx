'use client';

import { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';

interface NavbarProps {
  user: { email: string; name: string } | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar = ({ user, onLogin, onLogout }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-2xl font-bold text-white hover:text-gray-200 transition-colors terminal-text"
            >
              GUSTAV_JAMES
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10 terminal-text"
                >
                  {item.label}
                </a>
              ))}
              
              {/* User Section */}
              <div className="flex items-center space-x-4">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-green-400 terminal-text">
                      &gt; {user.name}
                    </div>
                    <button
                      onClick={onLogout}
                      className="flex items-center space-x-1 px-3 py-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-800/50 transition-colors terminal-text border border-green-600"
                    >
                      <span>LOGOUT</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onLogin}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-800/50 transition-colors terminal-text border border-green-600"
                  >
                    <span>LOGIN</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors rounded-lg hover:bg-white/10 terminal-text"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile User Section */}
              <div className="pt-2 border-t border-white/20">
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-green-400 terminal-text px-3 py-2">
                      &gt; {user.name}
                    </div>
                    <button
                      onClick={onLogout}
                      className="flex items-center space-x-2 w-full px-3 py-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-800/50 transition-colors terminal-text border border-green-600"
                    >
                      <span>LOGOUT</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onLogin}
                    className="flex items-center space-x-2 w-full px-3 py-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-800/50 transition-colors terminal-text border border-green-600"
                  >
                    <span>LOGIN</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
