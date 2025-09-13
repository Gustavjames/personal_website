'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/personalData';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
            &gt; INITIALIZING CONTACT_PROTOCOL...
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 terminal-text">CONTACT_ME</h2>
          <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 terminal-text">
              &gt; LET'S_START_COLLABORATING
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I firmly believe that the best projects come from good communication and collaboration.
              Whatever ideas or needs you have, I'm willing to listen and provide professional technical support.
            </p>

            <div className="space-y-6 mb-8">
              <div className="p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <h4 className="font-semibold text-green-400 terminal-text mb-2">&gt; EMAIL</h4>
                <p className="text-green-300 terminal-text">{contactInfo.email}</p>
              </div>
              
              <div className="p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <h4 className="font-semibold text-green-400 terminal-text mb-2">&gt; PHONE</h4>
                <p className="text-green-300 terminal-text">{contactInfo.phone}</p>
              </div>
              
              <div className="p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <h4 className="font-semibold text-green-400 terminal-text mb-2">&gt; LOCATION</h4>
                <p className="text-green-300 terminal-text">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hacker-glow">
            <h3 className="text-xl font-bold text-white mb-6 terminal-text">
              &gt; SEND_MESSAGE
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-400 rounded-lg flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-green-400 terminal-text">MESSAGE_SENT_SUCCESSFULLY</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-400 rounded-lg flex items-center space-x-2">
                <AlertCircle className="text-red-400" size={20} />
                <span className="text-red-400 terminal-text">ERROR_SENDING_MESSAGE</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2 terminal-text">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2 terminal-text">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2 terminal-text">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                  placeholder="Project collaboration / Technical consultation / Other"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2 terminal-text">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 resize-none text-white terminal-text"
                  placeholder="Please describe your requirements or ideas in detail..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-black font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 terminal-text disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>&gt; SEND_MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
