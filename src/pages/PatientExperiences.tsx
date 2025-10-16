import React, { useEffect, useState } from 'react';
import { Star, Calendar, Award, ChevronRight } from 'lucide-react';
import { supabase, Testimonial, BeforeAfterPhoto } from '../lib/supabase';
import { useLanguage } from '../hooks/useLanguage';

const PatientExperiences = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [photos, setPhotos] = useState<BeforeAfterPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [testimonialsResponse, photosResponse] = await Promise.all([
        supabase
          .from('testimonials')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false }),
        supabase
          .from('before_after_photos')
          .select('*')
          .eq('is_published', true)
          .order('display_order', { ascending: true })
      ]);

      if (testimonialsResponse.error) throw testimonialsResponse.error;
      if (photosResponse.error) throw photosResponse.error;

      setTestimonials(testimonialsResponse.data || []);
      setPhotos(photosResponse.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getContent = (testimonial: Testimonial) => {
    if (currentLanguage === 'tr') return testimonial.content_tr;
    if (currentLanguage === 'en') return testimonial.content_en || testimonial.content_tr;
    return testimonial.content_de || testimonial.content_tr;
  };

  const getDescription = (photo: BeforeAfterPhoto) => {
    if (currentLanguage === 'tr') return photo.description_tr;
    if (currentLanguage === 'en') return photo.description_en;
    return photo.description_de;
  };

  const filteredPhotos = selectedFilter === 'all'
    ? photos
    : photos.filter(p => p.treatment_type === selectedFilter);

  const treatmentTypes = ['all', ...Array.from(new Set(photos.map(p => p.treatment_type)))];

  const getFilterLabel = (filter: string) => {
    if (filter === 'all') {
      return currentLanguage === 'tr' ? 'Tümü' : currentLanguage === 'en' ? 'All' : 'Alle';
    }
    return filter;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === 'tr' && 'Hasta Deneyimleri'}
            {currentLanguage === 'en' && 'Patient Experiences'}
            {currentLanguage === 'de' && 'Patientenerfahrungen'}
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            {currentLanguage === 'tr' && 'Gerçek hastalarımızın hikayelerini ve sonuçlarını keşfedin'}
            {currentLanguage === 'en' && 'Discover stories and results from our real patients'}
            {currentLanguage === 'de' && 'Entdecken Sie Geschichten und Ergebnisse unserer echten Patienten'}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{testimonials.length}+</div>
              <div className="text-gray-600">
                {currentLanguage === 'tr' && 'Mutlu Hasta'}
                {currentLanguage === 'en' && 'Happy Patients'}
                {currentLanguage === 'de' && 'Glückliche Patienten'}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">
                {currentLanguage === 'tr' && 'Ortalama Puan'}
                {currentLanguage === 'en' && 'Average Rating'}
                {currentLanguage === 'de' && 'Durchschnittsbewertung'}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">
                {currentLanguage === 'tr' && 'Yıl Deneyim'}
                {currentLanguage === 'en' && 'Years Experience'}
                {currentLanguage === 'de' && 'Jahre Erfahrung'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'tr' && 'Önce & Sonra Galerimiz'}
              {currentLanguage === 'en' && 'Before & After Gallery'}
              {currentLanguage === 'de' && 'Vorher & Nachher Galerie'}
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {treatmentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === type
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {getFilterLabel(type)}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={photo.before_photo_url}
                    alt="Before"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {currentLanguage === 'tr' && 'Önce'}
                    {currentLanguage === 'en' && 'Before'}
                    {currentLanguage === 'de' && 'Vorher'}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={photo.after_photo_url}
                    alt="After"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {currentLanguage === 'tr' && 'Sonra'}
                    {currentLanguage === 'en' && 'After'}
                    {currentLanguage === 'de' && 'Nachher'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {photo.treatment_type}
                    </span>
                    {photo.graft_count && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {photo.graft_count} Greft
                      </span>
                    )}
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {photo.months_after} {currentLanguage === 'tr' ? 'Ay' : currentLanguage === 'en' ? 'Mo' : 'Mon'}
                    </span>
                  </div>
                  {getDescription(photo) && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {getDescription(photo)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'tr' && 'Hasta Yorumları'}
              {currentLanguage === 'en' && 'Patient Reviews'}
              {currentLanguage === 'de' && 'Patientenbewertungen'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-emerald-600 font-medium">{testimonial.treatment_type}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{getContent(testimonial)}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.patient_name}</p>
                  {testimonial.patient_role && (
                    <p className="text-sm text-gray-600">{testimonial.patient_role}</p>
                  )}
                  {testimonial.google_review_url && (
                    <a
                      href={testimonial.google_review_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      Google'da Gör <ChevronRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentLanguage === 'tr' && 'Siz de Hikayenizin Parçası Olun'}
            {currentLanguage === 'en' && 'Be Part of Your Own Story'}
            {currentLanguage === 'de' && 'Werden Sie Teil Ihrer eigenen Geschichte'}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {currentLanguage === 'tr' && 'Ücretsiz konsültasyon için hemen iletişime geçin'}
            {currentLanguage === 'en' && 'Contact us now for a free consultation'}
            {currentLanguage === 'de' && 'Kontaktieren Sie uns jetzt für eine kostenlose Beratung'}
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
            className="bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-colors duration-300"
          >
            {currentLanguage === 'tr' && 'İletişime Geç'}
            {currentLanguage === 'en' && 'Contact Us'}
            {currentLanguage === 'de' && 'Kontaktieren Sie uns'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PatientExperiences;
