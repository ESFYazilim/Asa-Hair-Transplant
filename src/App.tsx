import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PatientExperiences from './pages/PatientExperiences';
import NotFound from './pages/NotFound';
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
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/patient-experiences" element={<PatientExperiences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;