import { useState, useEffect } from 'react';
import { content, ContentData } from '../data/content';

export type Language = 'tr' | 'en' | 'de';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return (savedLanguage && content[savedLanguage]) ? savedLanguage : 'tr';
  });

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    content: content[currentLanguage] as ContentData,
    availableLanguages: Object.keys(content) as Language[],
    getCurrentLanguage: () => currentLanguage
  };
};