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

  const experiencesLabel = currentLanguage === 'tr' ? 'Hasta Deneyimleri' : currentLanguage === 'en' ? 'Patient Experiences' : 'Patientenerfahrungen';

  const navLinks = [
    { href: '#services', label: content.navigation.services },
    { href: '#treatments', label: content.navigation.treatments },
    { href: '#about', label: content.navigation.about },
    { href: '#achievements', label: content.navigation.achievements },
    { href: '#testimonials', label: content.navigation.testimonials },
    { href: '#contact', label: content.navigation.contact }
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-black/20 backdrop-blur-sm'
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
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-emerald-600'
                      : 'text-white/90 hover:text-emerald-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/patient-experiences"
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white/90 hover:text-emerald-300'
                }`}
              >
                {experiencesLabel}
              </Link>
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
                  isScrolled 
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
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/patient-experiences"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                {experiencesLabel}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;