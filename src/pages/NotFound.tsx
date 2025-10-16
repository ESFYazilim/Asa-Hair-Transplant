import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const NotFound = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'tr' && 'Sayfa Bulunamadı'}
            {currentLanguage === 'en' && 'Page Not Found'}
            {currentLanguage === 'de' && 'Seite nicht gefunden'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentLanguage === 'tr' && 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'}
            {currentLanguage === 'en' && 'The page you are looking for does not exist or may have been moved.'}
            {currentLanguage === 'de' && 'Die gesuchte Seite existiert nicht oder wurde verschoben.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            <Home size={20} />
            {currentLanguage === 'tr' && 'Ana Sayfaya Dön'}
            {currentLanguage === 'en' && 'Go to Homepage'}
            {currentLanguage === 'de' && 'Zur Startseite'}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg font-medium transition-all duration-300"
          >
            <ArrowLeft size={20} />
            {currentLanguage === 'tr' && 'Geri Dön'}
            {currentLanguage === 'en' && 'Go Back'}
            {currentLanguage === 'de' && 'Zurück'}
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            {currentLanguage === 'tr' && 'Yardıma mı ihtiyacınız var?'}
            {currentLanguage === 'en' && 'Need help?'}
            {currentLanguage === 'de' && 'Brauchen Sie Hilfe?'}
          </p>
          <Link
            to="/contact"
            className="text-emerald-600 hover:text-emerald-700 font-medium inline-block mt-2"
          >
            {currentLanguage === 'tr' && 'Bizimle İletişime Geçin'}
            {currentLanguage === 'en' && 'Contact Us'}
            {currentLanguage === 'de' && 'Kontaktieren Sie uns'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
