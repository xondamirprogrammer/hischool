import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Globe, Users, Target, Building, Star } from 'lucide-react';

const PartnershipsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const partners = [
    {
      name: 'Cambridge University',
      type: 'Academic Partner',
      logo: '🎓',
      description: 'Official IELTS preparation center',
      country: 'United Kingdom',
      since: '2019'
    },
    {
      name: 'Confucius Institute',
      type: 'Cultural Partner',
      logo: '🏛️',
      description: 'HSK examination center',
      country: 'China',
      since: '2020'
    },
    {
      name: 'King Sejong Institute',
      type: 'Language Partner',
      logo: '🏫',
      description: 'TOPIK testing center',
      country: 'South Korea',
      since: '2021'
    },
    {
      name: 'Al-Azhar University',
      type: 'Academic Partner',
      logo: '🕌',
      description: 'Arabic language certification',
      country: 'Egypt',
      since: '2020'
    },
    {
      name: 'British Council',
      type: 'Educational Partner',
      logo: '🇬🇧',
      description: 'English language standards',
      country: 'United Kingdom',
      since: '2018'
    },
    {
      name: 'Goethe Institut',
      type: 'Cultural Partner',
      logo: '🇩🇪',
      description: 'German language programs',
      country: 'Germany',
      since: '2022'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Accredited Center',
      description: 'Official testing center for major language exams'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Certificates recognized worldwide'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Native speakers and certified instructors'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: '98% pass rate in international exams'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Global Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with prestigious international institutions to provide 
            world-class education and globally recognized certifications.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {partner.type}
                </span>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 text-center">{partner.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>📍 {partner.country}</span>
                  <span>📅 Since {partner.since}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Globally Recognized Certificates</h3>
          <p className="text-xl mb-8 opacity-90">
            Earn certificates that open doors to universities and careers worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Learn About Certifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;