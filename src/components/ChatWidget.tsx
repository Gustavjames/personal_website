'use client';

import { useState, useEffect } from 'react';
import { Terminal, X, Send, Shield, Zap, Lock } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "> SYSTEM INITIALIZED\n> Welcome to Gustav's secure terminal\n> Type 'help' for available commands",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  const quickReplies = [
    "> whoami",
    "> projects --list",
    "> skills --show",
    "> contact --info",
    "> dating-app --status"
  ];

  const hackerResponses: { [key: string]: string } = {
    "whoami": "> USER: Gustav James\n> ROLE: Full Stack Developer & Cybersecurity Specialist\n> LOCATION: Edmonton, Canada\n> STATUS: Online & Ready",
    "projects --list": "> LOADING PROJECTS...\n> [1] Secure Dating App (IN DEVELOPMENT)\n> [2] Network Security Tool (ACTIVE)\n> [3] Cybersecurity Dashboard (DEPLOYED)\n> Type 'projects --details [ID]' for more info",
    "skills --show": "> SKILL MATRIX LOADED:\n> Frontend: React.js, Next.js, TypeScript\n> Backend: Node.js, Express.js, Python\n> Security: Kali Linux, Penetration Testing\n> Network: Wireshark, Network Security",
    "contact --info": "> CONTACT PROTOCOL:\n> Email: gustav.james@example.com\n> Phone: +1 825-963-1088\n> Location: Edmonton, Canada\n> GitHub: github.com/Gustavjames",
    "dating-app --status": "> PROJECT STATUS: Secure Dating App\n> Phase: Development\n> Security Level: MAXIMUM\n> Features: Real-time verification, encrypted communication\n> ETA: Q2 2024",
    "help": "> AVAILABLE COMMANDS:\n> whoami - Display user info\n> projects --list - Show projects\n> skills --show - Display skills\n> contact --info - Contact details\n> dating-app --status - Project status\n> clear - Clear terminal\n> exit - Close terminal"
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const cleanMessage = message.replace('> ', '').toLowerCase();
    
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setTerminalHistory(prev => [...prev, message]);
    setInputValue('');
    setIsTyping(true);

    // Simulate terminal processing
    setTimeout(() => {
      const response = hackerResponses[cleanMessage] || 
        `> ERROR: Command '${cleanMessage}' not found\n> Type 'help' for available commands`;
      
      if (cleanMessage === 'clear') {
        setMessages([{
          id: 1,
          text: "> TERMINAL CLEARED\n> Welcome to Gustav's secure terminal\n> Type 'help' for available commands",
          sender: 'bot',
          timestamp: new Date()
        }]);
        setIsTyping(false);
        return;
      }
      
      if (cleanMessage === 'exit') {
        setIsOpen(false);
        setIsTyping(false);
        return;
      }
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: response,
        sender: 'bot' as const,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Terminal Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-float border-2 border-green-400"
      >
        {isOpen ? <X size={24} /> : <Terminal size={24} />}
      </button>

      {/* Terminal Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-black rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-green-400">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-black p-3 flex items-center justify-between border-b border-green-400">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-black/20 rounded flex items-center justify-center">
                <Terminal size={14} />
              </div>
              <div>
                <h3 className="font-bold text-sm">GUSTAV_TERMINAL</h3>
                <p className="text-xs text-black/70">SECURE CONNECTION</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-green-400 text-sm">
            {messages.map((message) => (
              <div key={message.id} className="whitespace-pre-wrap">
                {message.sender === 'user' ? (
                  <div className="text-cyan-400">
                    <span className="text-green-400">guest@terminal:~$</span> {message.text}
                  </div>
                ) : (
                  <div className="text-green-400">
                    {message.text}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-center space-x-1 text-green-400">
                <span>Processing</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Commands */}
          <div className="p-4 border-t border-green-400 bg-black/50">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-green-900/50 hover:bg-green-800/50 text-green-400 px-3 py-1 rounded border border-green-600 transition-colors font-mono"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Terminal Input */}
            <div className="flex items-center space-x-2">
              <span className="text-green-400 font-mono text-sm">guest@terminal:~$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Enter command..."
                className="flex-1 bg-transparent text-green-400 font-mono text-sm focus:outline-none border-none"
                autoFocus
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="w-8 h-8 bg-green-600 hover:bg-green-700 text-black rounded flex items-center justify-center transition-all duration-300"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;