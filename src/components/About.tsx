import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight font-commuters">
              <span className="font-bold text-emerald-600 font-commuters">{content.about.title}</span>
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              {content.about.description1}
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              {content.about.description2}
            </p>
            
            <div className="space-y-4">
              {content.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Professional hair transplant consultation"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-emerald-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;