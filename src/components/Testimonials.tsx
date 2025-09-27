import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Osman Fatih Demirhan',
      role: 'Yazılımcı',
      content: 'Profesyonellik ve ilgi düzeyi tüm beklentilerimi aştı. Sonuçlar kendini gösteriyor ve daha mutlu olamazdım.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Emre Yılmaz',
      role: 'Girişimci',
      content: 'Danışmanlıktan takip bakımına kadar olağanüstü hizmet. Ekibin uzmanlığı ve detaylara gösterdiği özen gerçekten etkileyici.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Arda Barhan',
      role: 'Aşçı',
      content: 'Kendime olan güvenimi büyük ölçüde artıran dönüştürücü bir deneyim. Bu hizmeti düşünen herkese kesinlikle tavsiye ederim.',
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/D4D35AQFy5afvhF3uJg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1659303262524?e=1757023200&v=beta&t=ncpXOZ76l-j2o4Y8SDj-uKOPYhbq3_3ZwRUn7QHqc1A'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-bold text-emerald-600">Hastalarımız</span> Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bakımımızı bize emanet eden değerli hastalarımızın gerçek deneyimleri.
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