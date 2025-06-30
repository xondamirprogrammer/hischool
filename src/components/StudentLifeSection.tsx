import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Music, Trophy, Heart, Globe, Palette, Users, Calendar, Star } from 'lucide-react';

const StudentLifeSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const activities = [
    {
      icon: Trophy,
      title: 'Sports Excellence',
      description: 'Championship-winning teams in 15+ sports including basketball, soccer, tennis, and swimming.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
      stats: { participants: '800+', achievements: '25 Championships', facilities: '10 Courts' },
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Music,
      title: 'Performing Arts',
      description: 'World-class music, theater, and dance programs with regular performances and competitions.',
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg',
      stats: { participants: '500+', achievements: '15 Awards', facilities: '3 Theaters' },
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Creative studios for painting, sculpture, digital art, and regular exhibitions.',
      image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg',
      stats: { participants: '400+', achievements: '50 Exhibitions', facilities: '5 Studios' },
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Globe,
      title: 'Global Exchange',
      description: 'International partnerships and cultural immersion programs across 6 continents.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      stats: { participants: '300+', achievements: '25 Countries', facilities: 'Global Network' },
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Volunteer initiatives and social impact projects that make a real difference.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
      stats: { participants: '1000+', achievements: '50 Projects', facilities: 'Community Center' },
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Camera,
      title: 'Media & Tech',
      description: 'Student journalism, yearbook, photography, broadcasting, and digital media production.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
      stats: { participants: '250+', achievements: '10 Publications', facilities: 'Media Lab' },
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  const highlights = [
    { icon: Users, label: 'Student Clubs', value: '75+' },
    { icon: Calendar, label: 'Annual Events', value: '200+' },
    { icon: Star, label: 'Leadership Opportunities', value: '500+' },
    { icon: Trophy, label: 'Awards & Recognition', value: '150+' },
  ];

  return (
    <section id="student-life" ref={ref} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Student Life
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Beyond the
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Classroom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in a vibrant community where passions flourish, 
            friendships bloom, and lifelong memories are created through extraordinary experiences.
          </p>
        </motion.div>

        {/* Highlights Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => (
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
                <highlight.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{highlight.value}</div>
              <div className="text-gray-600 font-medium">{highlight.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60`} />
                
                {/* Icon Overlay */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <activity.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-gray-900">{activity.stats.participants}</div>
                  <div className="text-xs text-gray-600">Participants</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Achievements:</span>
                    <span className="text-sm font-semibold text-gray-900">{activity.stats.achievements}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Facilities:</span>
                    <span className="text-sm font-semibold text-gray-900">{activity.stats.facilities}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${activity.color} text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Join Activity
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-4xl font-bold mb-6">A Day in Student Life</h3>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                From morning assemblies filled with energy to evening activities that spark creativity, 
                every day at Hi School LC is an adventure in learning, growing, and connecting with an 
                extraordinary community of peers and mentors.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">7:30 AM</div>
                  <div className="text-white/80">Morning Assembly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3:30 PM</div>
                  <div className="text-white/80">Activities Begin</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">6:00 PM</div>
                  <div className="text-white/80">Study Groups</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">8:00 PM</div>
                  <div className="text-white/80">Social Time</div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Experience Student Life
              </motion.button>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
                alt="Student life"
                className="rounded-2xl w-full h-80 object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentLifeSection;