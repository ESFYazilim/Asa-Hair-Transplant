import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Treatments from './components/Treatments';
import About from './components/About';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const { content } = useLanguage();
  
  // Update document title and meta tags when language changes
  React.useEffect(() => {
    document.title = content.meta.title;
    document.documentElement.lang = content === content ? 'tr' : content === content ? 'en' : 'de';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', content.meta.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', content.meta.description);
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Treatments />
      <About />
      <Achievements />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;