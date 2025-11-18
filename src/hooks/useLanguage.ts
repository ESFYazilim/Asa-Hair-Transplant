import { useState, useEffect } from 'react';
import { content, ContentData } from '../data/content';

export type Language = 'tr' | 'en' | 'de';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      return (savedLanguage && content[savedLanguage]) ? savedLanguage : 'tr';
    } catch (error) {
      return 'tr';
    }
  });

  const changeLanguage = (lang: Language) => {
    try {
      localStorage.setItem('language', lang);
      window.location.reload();
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    content: content[currentLanguage] as ContentData,
    availableLanguages: Object.keys(content) as Language[],
    getCurrentLanguage: () => currentLanguage
  };
};