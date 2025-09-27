import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Premium Danışmanlık',
      description: 'Uzman ekibimizle kapsamlı değerlendirme ve kişiye özel tedavi planlaması.',
      image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Award,
      title: 'İleri Düzey Prosedürler',
      description: 'En son teknoloji ve kanıtlanmış yöntemlerle uygulanan ileri düzey teknikler.',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Kişiye Özel Bakım',
      description: 'Benzersiz ihtiyaç ve hedeflerinize özel olarak tasarlanmış tedavi planları.',
      image: 'https://images.pexels.com/photos/4173626/pexels-photo-4173626.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Clock,
      title: 'Sürekli Destek',
      description: 'En iyi sonuçlar için kapsamlı takip ve uzun vadeli destek.',
      image: 'https://images.pexels.com/photos/4173530/pexels-photo-4173530.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-bold text-emerald-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hassasiyet ve özenle sunulan kapsamlı premium hizmetlerimizle mükemmelliği yaşayın.
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