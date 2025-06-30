import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Award, Star, Users, BookOpen } from 'lucide-react';

const FacultySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const faculty = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Principal & Educational Innovation Director',
      specialization: 'AI in Education & Leadership Excellence',
      experience: '18 years',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg',
      achievements: ['Ph.D. in Educational Technology', 'UNESCO Innovation Award', 'Published 50+ Research Papers'],
      rating: 4.9,
      students: 2500,
      courses: 8,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'STEM Department Head & Research Director',
      specialization: 'Quantum Physics & Advanced Mathematics',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      achievements: ['Ph.D. in Quantum Physics', 'NASA Research Collaboration', 'International Science Award'],
      rating: 4.8,
      students: 450,
      courses: 6,
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Creative Arts & Digital Media Director',
      specialization: 'Digital Arts & Creative Technology',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      achievements: ['MFA in Digital Arts', 'TED Speaker', 'Creative Innovation Grant'],
      rating: 4.9,
      students: 320,
      courses: 5,
      color: 'from-pink-500 to-red-600'
    },
    {
      name: 'Prof. David Kim',
      role: 'Global Studies & Languages Director',
      specialization: 'International Relations & Cultural Studies',
      experience: '14 years',
      image: 'https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg',
      achievements: ['Ph.D. in International Relations', 'UN Advisory Panel', 'Polyglot (8 Languages)'],
      rating: 4.7,
      students: 380,
      courses: 7,
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const stats = [
    { label: 'Faculty Members', value: '150+', icon: Users },
    { label: 'Research Papers', value: '500+', icon: BookOpen },
    { label: 'Awards Won', value: '75+', icon: Award },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  return (
    <section id="faculty" ref={ref} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
            Meet Our Faculty
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            World-Class
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Educators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from distinguished educators, researchers, and industry leaders who bring 
            passion, expertise, and innovation to inspire the next generation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
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
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 lg:h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{member.rating}</span>
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-2`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-3">{member.specialization}</p>
                    <p className="text-sm text-gray-500">{member.experience} of experience</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{member.students}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{member.courses}</div>
                      <div className="text-xs text-gray-500">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{member.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            Meet All Faculty Members
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;