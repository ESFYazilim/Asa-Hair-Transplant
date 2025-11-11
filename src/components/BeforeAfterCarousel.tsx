import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { beforeAfterPhotos, BeforeAfterPhoto } from '../data/beforeAfterData';
import { useLanguage } from '../hooks/useLanguage';

const BeforeAfterCarousel = () => {
  const [photos] = useState<BeforeAfterPhoto[]>(beforeAfterPhotos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentLanguage } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (photos.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const getDescription = (photo: BeforeAfterPhoto) => {
    if (currentLanguage === 'tr') return photo.description_tr;
    if (currentLanguage === 'en') return photo.description_en;
    return photo.description_de;
  };

  if (photos.length === 0) {
    return null;
  }

  const currentPhoto = photos[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'tr' && 'Önce & Sonra'}
            {currentLanguage === 'en' && 'Before & After'}
            {currentLanguage === 'de' && 'Vorher & Nachher'}
          </h2>
          <p className="text-lg text-gray-600">
            {currentLanguage === 'tr' && 'Hastalarımızın gerçek sonuçları'}
            {currentLanguage === 'en' && 'Real results from our patients'}
            {currentLanguage === 'de' && 'Echte Ergebnisse unserer Patienten'}
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4 bg-white p-6">
              {/* Before Photo */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                  {currentLanguage === 'tr' && 'Önce'}
                  {currentLanguage === 'en' && 'Before'}
                  {currentLanguage === 'de' && 'Vorher'}
                </div>
                <img
                  src={currentPhoto.before_photo}
                  alt="Before"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* After Photo */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
                  {currentLanguage === 'tr' && `Sonra (${currentPhoto.months_after} Ay)`}
                  {currentLanguage === 'en' && `After (${currentPhoto.months_after} Months)`}
                  {currentLanguage === 'de' && `Nachher (${currentPhoto.months_after} Monate)`}
                </div>
                <img
                  src={currentPhoto.after_photo}
                  alt="After"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Info */}
            <div className="bg-white p-6 border-t">
              <div className="flex flex-wrap gap-4 items-center justify-center text-sm text-gray-600">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
                  {currentPhoto.treatment_type}
                </span>
                {currentPhoto.graft_count && (
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    {currentPhoto.graft_count} Greft
                  </span>
                )}
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                  {currentPhoto.months_after} {currentLanguage === 'tr' ? 'Ay' : currentLanguage === 'en' ? 'Months' : 'Monate'}
                </span>
              </div>
              {getDescription(currentPhoto) && (
                <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto">
                  {getDescription(currentPhoto)}
                </p>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-600 w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
