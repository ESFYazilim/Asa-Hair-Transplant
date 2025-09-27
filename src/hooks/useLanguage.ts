import { useState, useEffect } from 'react';
import { content, ContentData } from '../data/content';

export type Language = 'tr' | 'en' | 'de';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && content[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Reload the page to apply language changes
    window.location.reload();
  };

  return {
    currentLanguage,
    changeLanguage,
    content: content[currentLanguage] as ContentData,
    availableLanguages: Object.keys(content) as Language[],
    getCurrentLanguage: () => currentLanguage
  };
};