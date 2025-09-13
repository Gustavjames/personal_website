'use client';

import { useState } from 'react';
import { X, User, Mail, Shield, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, name: string) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState('gustavjames382@gmail.com');
  const [name, setName] = useState('Gustav James');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        onLogin(email, name);
        onClose();
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 w-full max-w-md hacker-glow relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center hacker-glow">
            <Shield className="text-black" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white terminal-text mb-2">
            SECURE_ACCESS
          </h2>
          <p className="text-cyan-400 terminal-text text-sm">
            &gt; ENTER_CREDENTIALS_TO_CONTINUE
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-green-400 mb-2 terminal-text">
              EMAIL_ADDRESS
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-400 mb-2 terminal-text">
              FULL_NAME
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" size={20} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !email || !name}
            className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 terminal-text hacker-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>PROCESSING...</span>
              </div>
            ) : (
              '&gt; ACCESS_GRANTED'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 terminal-text">
            &gt; DATA_WILL_BE_STORED_SECURELY<br />
            &gt; NO_PASSWORDS_REQUIRED
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
