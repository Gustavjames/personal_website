'use client';

import { personalInfo } from '@/data/personalData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Crafting Digital Solutions with Security in Mind</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{personalInfo.about}</p>
              <p>
                I firmly believe that good code is not just about functionality, but also about security and elegance.
                Every line of code carries the pursuit of perfection, and every pixel reflects an understanding of both beauty and security.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💻</div>
                <h4 className="text-2xl font-bold mb-2">Code as Art</h4>
                <p className="text-blue-100">Every line of code is creation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
