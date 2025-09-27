import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Testimonials = () => {
  const { content } = useLanguage();
  
  const testimonialImages = [
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  ];
  
  const testimonials = content.testimonials.items.map((testimonial, index) => ({
    ...testimonial,
    rating: 5,
    image: testimonialImages[index]
  }));

  /*const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      role: 'Mühendis',
      content: 'DHI saç ekimi sonrasında beklediğimden çok daha doğal sonuçlar aldım. PRP tedavisi ile desteklenen süreç mükemmeldi.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'John Smith',
      role: 'Business Manager',
      content: 'Hair transplant Turkey experience was exceptional. FUE technique and aftercare service exceeded my expectations completely.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Hans Mueller',
      role: 'Architekt',
      content: 'Die Haartransplantation in der Türkei war perfekt organisiert. DHI-Technik und Nachsorge waren erstklassig.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];*/

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-bold text-emerald-600">{content.testimonials.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="text-emerald-200 absolute top-4 right-4" size={32} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;