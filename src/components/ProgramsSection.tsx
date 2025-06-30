import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock, Users, ChevronRight, Star, Award, Brain, Globe } from 'lucide-react';

const ProgramsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('academic');

  const categories = [
    { id: 'academic', name: 'Academic Excellence', icon: BookOpen },
    { id: 'innovation', name: 'Innovation Labs', icon: Brain },
    { id: 'global', name: 'Global Programs', icon: Globe },
    { id: 'leadership', name: 'Leadership', icon: Award },
  ];

  const programs = {
    academic: [
      {
        id: 1,
        title: 'Advanced STEM Program',
        description: 'Comprehensive science, technology, engineering, and mathematics curriculum with cutting-edge laboratory facilities.',
        duration: '2 Years',
        students: '120',
        level: 'Advanced',
        rating: 4.9,
        features: ['AI & Machine Learning', 'Robotics Lab', 'Research Projects', '3D Printing'],
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 2,
        title: 'Liberal Arts & Humanities',
        description: 'Comprehensive humanities program fostering critical thinking, creativity, and cultural understanding.',
        duration: '2 Years',
        students: '95',
        level: 'All Levels',
        rating: 4.8,
        features: ['Creative Writing', 'Philosophy', 'Art History', 'Debate Club'],
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 3,
        title: 'Business & Entrepreneurship',
        description: 'Future-focused business education combining traditional principles with startup innovation.',
        duration: '2 Years',
        students: '110',
        level: 'Intermediate',
        rating: 4.9,
        features: ['Startup Incubator', 'Financial Literacy', 'Market Analysis', 'Pitch Competitions'],
        image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    innovation: [
      {
        id: 4,
        title: 'AI & Data Science Lab',
        description: 'Hands-on experience with artificial intelligence, machine learning, and big data analytics.',
        duration: '1 Year',
        students: '60',
        level: 'Advanced',
        rating: 5.0,
        features: ['Neural Networks', 'Data Visualization', 'Python Programming', 'Cloud Computing'],
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        id: 5,
        title: 'Digital Innovation Studio',
        description: 'Creative technology space for app development, game design, and digital media production.',
        duration: '1 Year',
        students: '75',
        level: 'Intermediate',
        rating: 4.8,
        features: ['App Development', 'VR/AR Design', 'Digital Art', 'Video Production'],
        image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
        color: 'from-orange-500 to-red-500'
      }
    ],
    global: [
      {
        id: 6,
        title: 'International Exchange',
        description: 'Study abroad opportunities with partner schools across 25+ countries worldwide.',
        duration: '1 Semester',
        students: '150',
        level: 'All Levels',
        rating: 4.9,
        features: ['Cultural Immersion', 'Language Learning', 'Global Networking', 'Research Projects'],
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        id: 7,
        title: 'Model United Nations',
        description: 'Develop diplomacy and international relations skills through simulated UN sessions.',
        duration: 'Ongoing',
        students: '80',
        level: 'Intermediate',
        rating: 4.7,
        features: ['Diplomatic Skills', 'Public Speaking', 'Global Issues', 'Negotiation'],
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        color: 'from-teal-500 to-cyan-500'
      }
    ],
    leadership: [
      {
        id: 8,
        title: 'Student Government',
        description: 'Lead school initiatives and represent student voices in institutional decision-making.',
        duration: '1 Year',
        students: '40',
        level: 'Advanced',
        rating: 4.8,
        features: ['Leadership Skills', 'Project Management', 'Public Policy', 'Team Building'],
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  };

  return (
    <section id="programs" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360] 
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0] 
          }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"
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
            Our Programs
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Exceptional 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of world-class academic programs designed to 
            challenge, inspire, and prepare students for extraordinary futures.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16"
          >
            {programs[activeCategory as keyof typeof programs].map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{program.rating}</span>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-700">{program.level}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students} students</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>Explore Program</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;