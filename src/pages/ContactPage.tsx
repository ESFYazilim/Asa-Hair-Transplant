import React from 'react';
import Contact from '../components/Contact';
import { useLanguage } from '../hooks/useLanguage';

const ContactPage = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentLanguage === 'tr' && 'İletişim'}
            {currentLanguage === 'en' && 'Contact Us'}
            {currentLanguage === 'de' && 'Kontakt'}
          </h1>
          <p className="text-xl text-emerald-100">
            {currentLanguage === 'tr' && 'Bizimle iletişime geçin, size yardımcı olalım'}
            {currentLanguage === 'en' && 'Get in touch with us, let us help you'}
            {currentLanguage === 'de' && 'Kontaktieren Sie uns, wir helfen Ihnen gerne'}
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
