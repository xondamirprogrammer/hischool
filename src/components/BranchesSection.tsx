import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Users, Star, Navigation, Car } from 'lucide-react';

const BranchesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const branches = [
    {
      id: 'nurafshon',
      name: 'Nurafshon City Branch',
      address: 'Nurafshon City, Main Street 123',
      phone: '+998 90 123 45 67',
      email: 'nurafshon@hischool.uz',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
      students: 1500,
      rating: 4.9,
      established: '2018',
      features: [
        'Modern Smart Classrooms',
        'Language Lab with Latest Technology',
        'Student Lounge Area',
        'Free WiFi & Study Zones',
        'Parking Available',
        'Cafeteria & Refreshments'
      ],
      schedule: {
        weekdays: '08:00 - 22:00',
        weekends: '09:00 - 20:00'
      },
      coordinates: { lat: 41.6175, lng: 69.2945 },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'yangiyol',
      name: 'Yangiyol Branch',
      address: 'Yangiyol, Education District 456',
      phone: '+998 90 765 43 21',
      email: 'yangiyol@hischool.uz',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
      students: 1000,
      rating: 4.8,
      established: '2020',
      features: [
        'Interactive Digital Boards',
        'Multimedia Language Center',
        'Library & Resource Center',
        'Student Support Services',
        'Easy Public Transport Access',
        'Modern Facilities'
      ],
      schedule: {
        weekdays: '08:00 - 22:00',
        weekends: '09:00 - 20:00'
      },
      coordinates: { lat: 41.1127, lng: 69.1026 },
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const totalStats = [
    { label: 'Combined Students', value: 2500, icon: Users },
    { label: 'Average Rating', value: 4.85, icon: Star, suffix: '/5' },
    { label: 'Years of Excellence', value: 6, icon: Clock },
    { label: 'Languages Taught', value: 5, icon: MapPin },
  ];

  return (
    <section id="branches" ref={ref} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
            Our Locations
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Two Premier
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience world-class language education at our state-of-the-art facilities 
            in Nurafshon City and Yangiyol, designed for optimal learning.
          </p>
        </motion.div>

        {/* Combined Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {totalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}{stat.suffix || '+'}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Branches Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              {/* Branch Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${branch.color} opacity-60`} />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold">{branch.rating}</span>
                </div>

                {/* Established Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-sm font-semibold text-gray-700">Since {branch.established}</span>
                </div>

                {/* Students Count */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-lg font-bold text-gray-900">{branch.students}+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {branch.name}
                </h3>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{branch.email}</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Operating Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-700">Weekdays</div>
                      <div className="text-gray-600">{branch.schedule.weekdays}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700">Weekends</div>
                      <div className="text-gray-600">{branch.schedule.weekends}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Branch Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {branch.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${branch.color} rounded-full mr-3`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${branch.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          <h3 className="text-4xl font-bold mb-6">Visit Us Today</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience our world-class facilities and meet our expert instructors. 
            Schedule a campus tour and discover why thousands choose Hi School LC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Car className="w-5 h-5" />
              <span>Schedule Campus Tour</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BranchesSection;