import React from 'react';
import { Scissors, Zap, Droplets, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Services = () => {
  const { content } = useLanguage();
  
  const serviceIcons = [Scissors, Zap, Droplets, Sparkles];
  
  const serviceImages = [
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  ];

  const services = content.services.items.map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
    image: serviceImages[index]
  }));

  /*const services = [
    {
      icon: Scissors,
      title: 'DHI Saç Ekimi',
      description: 'Direct Hair Implantation tekniği ile kanal açmadan direkt saç ekimi. Daha hızlı iyileşme ve doğal sonuçlar.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Zap,
      title: 'FUE Hair Transplant',
      description: 'Follicular Unit Extraction yöntemi ile tek tek folikül alımı. Iz bırakmayan modern saç ekim tekniği.',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'PRP Tedavisi',
      description: 'Platelet Rich Plasma ile saç köklerinin güçlendirilmesi. Saç dökülmesini durduran doğal tedavi yöntemi.',
      image: 'https://images.pexels.com/photos/4173626/pexels-photo-4173626.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Sparkles,
      title: 'Kök Hücre ve Eksozom',
      description: 'Yenilikçi kök hücre ve eksozom tedavileri ile saç foliküllerinin rejenerasyonu ve yoğunlaştırılması.',
      image: 'https://images.pexels.com/photos/4173530/pexels-photo-4173530.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];*/

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-bold text-emerald-600">{content.services.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;