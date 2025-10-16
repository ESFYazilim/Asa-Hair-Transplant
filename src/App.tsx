import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PatientExperiences from './pages/PatientExperiences';
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
    <BrowserRouter>
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient-experiences" element={<PatientExperiences />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;