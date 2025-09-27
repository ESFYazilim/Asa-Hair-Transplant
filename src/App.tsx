import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const { content } = useLanguage();
  
  // Update document title when language changes
  React.useEffect(() => {
    document.title = content.meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description);
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Achievements />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;