'use client';

import { contactInfo } from '@/data/personalData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">联系我</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">让我们开始合作</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我始终相信，最好的项目来自于良好的沟通和合作。
              无论您有什么想法或需求，我都愿意倾听并为您提供专业的技术支持。
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">邮箱</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">电话</h4>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">位置</h4>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">发送消息</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="项目合作 / 技术咨询 / 其他"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="请详细描述您的需求或想法..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
