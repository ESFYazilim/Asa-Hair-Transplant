import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const WhatsAppButton = () => {
  const { content, currentLanguage } = useLanguage();
  
  const handleWhatsAppClick = () => {
    const messages = {
      tr: 'Merhaba! 👋 ASA Saç Ekim hakkında bilgi almak istiyorum. Saç ekimi, PRP tedavisi ve diğer hizmetleriniz hakkında detaylı bilgi alabilir miyim? 🌟',
      en: 'Hello! 👋 I would like to get information about ASA Hair Transplant. Can I get detailed information about hair transplant, PRP treatment and your other services? 🌟',
      de: 'Hallo! 👋 Ich möchte Informationen über ASA Haartransplantation erhalten. Kann ich detaillierte Informationen über Haartransplantation, PRP-Behandlung und Ihre anderen Dienstleistungen erhalten? 🌟'
    };
    
    const currentLang = currentLanguage;
    const message = encodeURIComponent(messages[currentLang] || messages.tr);
    const whatsappUrl = `https://wa.me/${content.contact.whatsapp.number.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label={content.contact.whatsapp.title}
    >
      <MessageCircle size={28} />
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {content.contact.whatsapp.title}
      </div>
    </button>
  );
};

export default WhatsAppButton;