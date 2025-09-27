import React from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { content, currentLanguage } = useLanguage();

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Modern hair transplant clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight font-commuters">
            {content.hero.title}
            <span className="block font-bold text-emerald-300 font-commuters">{content.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            {content.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToServices}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.hero.cta1}
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.hero.cta2}
            </button>
            <button
              onClick={() => {
                const messages = {
                  tr: 'Merhaba! 👋 ASA Saç Ekim hakkında bilgi almak istiyorum. Saç ekimi, PRP tedavisi ve diğer hizmetleriniz hakkında detaylı bilgi alabilir miyim? 🌟',
                  en: 'Hello! 👋 I would like to get information about ASA Hair Transplant. Can I get detailed information about hair transplant, PRP treatment and your other services? 🌟',
                  de: 'Hallo! 👋 Ich möchte Informationen über ASA Haartransplantation erhalten. Kann ich detaillierte Informationen über Haartransplantation, PRP-Behandlung und Ihre anderen Dienstleistungen erhalten? 🌟'
                };
                
                const currentLang = currentLanguage;
                const message = encodeURIComponent(messages[currentLang] || messages.tr);
                const whatsappUrl = `https://wa.me/${content.contact.whatsapp.number.replace(/[^0-9]/g, '')}?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {content.hero.whatsapp}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToServices}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;