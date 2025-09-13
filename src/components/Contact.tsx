'use client';

import { contactInfo } from '@/data/personalData';

const Contact = () => {
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
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full hacker-glow"></div>
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
              <div className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl terminal-text">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white terminal-text">EMAIL</h4>
                  <p className="text-cyan-400 terminal-text">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl terminal-text">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white terminal-text">PHONE</h4>
                  <p className="text-cyan-400 terminal-text">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-green-900/20 transition-colors duration-300 hacker-glow">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl terminal-text">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white terminal-text">LOCATION</h4>
                  <p className="text-cyan-400 terminal-text">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hacker-glow">
            <h3 className="text-xl font-bold text-white mb-6 terminal-text">
              &gt; SEND_MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2 terminal-text">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                    placeholder="Your name"
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
                    className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                    placeholder="your.email@example.com"
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
                  className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 text-white terminal-text"
                  placeholder="Project collaboration / Technical consultation / Other"
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
                  className="w-full px-4 py-3 bg-black border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 resize-none text-white terminal-text"
                  placeholder="Please describe your requirements or ideas in detail..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 terminal-text hacker-glow"
              >
                &gt; SEND_MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
