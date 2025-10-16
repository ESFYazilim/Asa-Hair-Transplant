import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const { content, currentLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: content.navigation.home },
    { to: '/treatments', label: content.navigation.treatments },
    { to: '/about', label: content.navigation.about },
    { to: '/patient-experiences', label: currentLanguage === 'tr' ? 'Hasta Deneyimleri' : currentLanguage === 'en' ? 'Patient Experiences' : 'Patientenerfahrungen' },
    { to: '/contact', label: content.navigation.contact }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/Asa Hair Transplant-renkli.png"
                alt="ASA Hair Transplant Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Masaüstü Navigasyon */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-emerald-600 font-semibold'
                      : (isScrolled || !isHomePage)
                      ? 'text-gray-700 hover:text-emerald-600'
                      : 'text-white/90 hover:text-emerald-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSelector />
            </div>
          </div>

          {/* Mobil menü butonu */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-200 ${
                  (isScrolled || !isHomePage)
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Navigasyon */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-emerald-600 font-semibold bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;