import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { sendContactEmailSimple } from '../services/emailService';

const Contact = () => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmailSimple(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactIcons = [Phone, Mail, MapPin, Clock];
  
  const contactInfo = content.contact.info.map((info, index) => ({
    ...info,
    icon: contactIcons[index]
  }));

  /*const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: '+90 212 XXX XX XX',
      subtitle: '7/24 Destek Hattı'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@asasacekim.com',
      subtitle: 'Hızlı yanıt garantisi'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Nişantaşı, Medikal Plaza, İstanbul',
      subtitle: 'Türkiye'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: 'Pzt-Pzr: 09:00 - 19:00',
      subtitle: 'Randevu sistemi'
    }
  ];*/

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight font-commuters">
            <span className="font-bold text-emerald-400 font-commuters">{content.contact.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">{content.contact.form.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{content.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{content.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{content.contact.form.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{content.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700'
                } text-white`}
              >
                {isSubmitting ? 'Gönderiliyor...' : content.contact.form.submit}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Mesaj gönderilemedi. Lütfen tekrar deneyin veya WhatsApp üzerinden iletişime geçin.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-400 mb-1">{info.title}</h4>
                    <p className="text-base text-white mb-1">{info.details}</p>
                    <p className="text-gray-400">{info.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2025 ASA SAÇ EKİM. Tüm hakları saklıdır. | Gizlilik Politikası | Hizmet Şartları
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;