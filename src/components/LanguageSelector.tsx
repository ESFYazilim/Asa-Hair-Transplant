import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 bg-white/10 rounded-lg backdrop-blur-sm"
      >
        <Globe size={20} />
        <span className="hidden md:inline">{languageFlags[currentLanguage]} {languageNames[currentLanguage]}</span>
        <span className="md:hidden">{languageFlags[currentLanguage]}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === lang ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
              }`}
            >
              <span className="mr-3">{languageFlags[lang]}</span>
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;