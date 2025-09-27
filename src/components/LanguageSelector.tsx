import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

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

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">
        <Globe size={20} />
        <span className="hidden md:inline">{languageFlags[currentLanguage]} {languageNames[currentLanguage]}</span>
        <span className="md:hidden">{languageFlags[currentLanguage]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`w-full text-left px-4 py-2 hover:bg-emerald-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
              currentLanguage === lang ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
            }`}
          >
            <span className="mr-2">{languageFlags[lang]}</span>
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;