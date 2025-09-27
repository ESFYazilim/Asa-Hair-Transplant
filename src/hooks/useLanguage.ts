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
    
    // Update document title and meta description
    const selectedContent = content[lang];
    document.title = selectedContent.meta.title;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', selectedContent.meta.description);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', selectedContent.meta.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', selectedContent.meta.description);
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    content: content[currentLanguage] as ContentData,
    availableLanguages: Object.keys(content) as Language[]
  };
};