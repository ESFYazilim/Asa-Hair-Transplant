import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languageNames = {
    tr: 'Türkçe',
    en: 'English',
    de: 'Deutsch'
  };

  const languageFlags = {
    tr: '🇹🇷',
    en: '🇬🇧',
    de: '🇩🇪'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
        type="button"
      >
        <Globe size={20} />
        <span className="hidden md:inline">{languageFlags[currentLanguage]} {languageNames[currentLanguage]}</span>
        <span className="md:hidden">{languageFlags[currentLanguage]}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors duration-200 flex items-center space-x-3 ${
                currentLanguage === lang ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-700'
              }`}
              type="button"
            >
              <span className="text-lg">{languageFlags[lang]}</span>
              <span>{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;