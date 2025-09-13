'use client';

import { personalInfo } from '@/data/personalData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">创造数字世界的魔法师</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{personalInfo.about}</p>
              <p>
                我始终相信，好的代码不仅仅是功能实现，更是一种艺术表达。
                每一行代码都承载着对完美的追求，每一个像素都体现着对美的理解。
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💻</div>
                <h4 className="text-2xl font-bold mb-2">代码即艺术</h4>
                <p className="text-blue-100">每一行代码都是创造</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
