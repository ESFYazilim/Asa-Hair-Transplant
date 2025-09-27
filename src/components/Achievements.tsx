import React from 'react';
import { TrendingUp, Users, Award, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Achievements = () => {
  const { content } = useLanguage();
  
  const statIcons = [Users, Award, Star, TrendingUp];
  
  const stats = content.achievements.stats.map((stat, index) => ({
    ...stat,
    icon: statIcons[index]
  }));

  /*const stats = [
    {
      icon: Users,
      number: '8,000+',
      label: 'Başarılı Saç Ekimi',
      description: 'DHI ve FUE ile'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Yıl Deneyim',
      description: 'Medikal estetik alanında'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Hasta Memnuniyeti',
      description: 'Saç ekimi sonuçları'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Ülkeden Hasta',
      description: 'Medikal turizm'
    }
  ];*/

  return (
    <section id="achievements" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-bold text-emerald-600">{content.achievements.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.achievements.subtitle}
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
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
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