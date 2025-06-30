import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Camera, Play, ChevronLeft, ChevronRight, Building, Users, Wifi, Shield } from 'lucide-react';

const CampusSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const campusImages = [
    {
      url: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
      title: 'Modern Learning Spaces',
      description: 'State-of-the-art classrooms with smart technology'
    },
    {
      url: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
      title: 'Advanced Science Labs',
      description: 'Fully equipped laboratories for hands-on experiments'
    },
    {
      url: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
      title: 'Library & Study Areas',
      description: 'Quiet spaces for focused learning and research'
    },
    {
      url: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg',
      title: 'Sports & Recreation',
      description: 'World-class athletic facilities and courts'
    },
    {
      url: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg',
      title: 'Student Commons',
      description: 'Collaborative spaces for social interaction'
    }
  ];

  const facilities = [
    {
      icon: Building,
      title: 'Smart Classrooms',
      description: 'Interactive whiteboards, VR capabilities, and climate control',
      number: '45+'
    },
    {
      icon: Users,
      title: 'Collaboration Spaces',
      description: 'Flexible learning environments for group projects',
      number: '20+'
    },
    {
      icon: Wifi,
      title: 'Campus-Wide WiFi',
      description: 'High-speed internet access throughout the campus',
      number: '100%'
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: '24/7 monitoring and safety protocols',
      number: '24/7'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section id="campus" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
            Our Campus
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Where Learning
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Thrives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our state-of-the-art campus designed to inspire creativity, 
            collaboration, and academic excellence in every corner.
          </p>
        </motion.div>

        {/* Interactive Campus Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={campusImages[currentSlide].url}
                  alt={campusImages[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    {campusImages[currentSlide].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-white/90"
                  >
                    {campusImages[currentSlide].description}
                  </motion.p>
                </div>
                
                {/* Virtual Tour Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {campusImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:shadow-lg"
              >
                <facility.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="text-3xl font-bold text-blue-600 mb-2">{facility.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Campus Map & Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Experience Our Campus</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our facilities or schedule an in-person visit to 
            see where your educational journey will unfold.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Camera className="w-5 h-5" />
              <span>Virtual Tour</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              <span>Schedule Visit</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;