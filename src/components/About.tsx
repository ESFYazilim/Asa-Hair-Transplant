import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    '15 yılı aşkın profesyonel mükemmellik',
    'Kurul onaylı uzmanlar',
    'Son teknoloji tesisler',
    'Kişiye özel hasta bakımı',
    'Uluslararası tanınırlık',
    'Sürekli yenilik'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              <span className="font-bold text-emerald-600">Kurumumuz</span> Hakkında
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En yüksek standartta profesyonel bakım sunmaya kendimizi adadık. 
              En son teknolojiyi şefkatli hizmetle birleştiriyoruz. Uzman ekibimiz, 
              sektörde bizi öne çıkaran onlarca yıllık deneyim ve mükemmellik taahhüdü ile hizmet vermektedir.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Her hastamız, en iyi deneyim ve sonuçları sağlamak için tasarlanmış lüks ve konforlu ortamımızda kişiye özel ilgi görmektedir.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4173525/pexels-photo-4173525.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profesyonel tıbbi danışma"
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