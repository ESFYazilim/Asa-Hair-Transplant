import React from 'react';
import { TrendingUp, Users, Award, Star } from 'lucide-react';

const Achievements = () => {
  const stats = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Satisfied Patients',
      description: 'Trust our expertise'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Proven excellence'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Success Rate',
      description: 'Outstanding results'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Awards Won',
      description: 'Industry recognition'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our <span className="font-bold text-emerald-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to excellence and the trust our patients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  <Icon className="text-emerald-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;