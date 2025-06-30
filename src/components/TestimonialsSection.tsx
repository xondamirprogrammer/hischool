import React, { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Williams',
      role: 'Alumni, Class of 2022',
      content: 'Hi School LC provided me with not just academic excellence, but also the confidence and critical thinking skills I needed to succeed in university. The supportive environment and dedicated teachers made all the difference.',
      image: 'https://images.pexels.com/photos/3762870/pexels-photo-3762870.jpeg',
      rating: 5
    },
    {
      name: 'Michael Anderson',
      role: 'Current Student',
      content: 'The diverse range of courses and extracurricular activities at Hi School LC has allowed me to explore my interests and discover my passion for both science and arts. The faculty genuinely cares about our success.',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      role: 'Parent',
      content: 'As a parent, I couldn\'t be happier with our choice. The school\'s commitment to holistic education and individual attention has helped my daughter flourish both academically and personally.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students, alumni, and parents about their experiences 
            and success stories at Hi School LC.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white animate-on-scroll">
          <h3 className="text-3xl font-bold text-center mb-12">Our Success Stories</h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">University Acceptance Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Scholarship Recipients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-200">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Successful Alumni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;