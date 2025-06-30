import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award, Target, Users, Globe, TrendingUp, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      awards: [
        'National School of Excellence Award 2024',
        'Top 10 Educational Institution Nationwide',
        'Innovation in Education Recognition'
      ],
      color: 'from-yellow-400 to-orange-500',
      number: '25+'
    },
    {
      icon: Star,
      title: 'Student Success',
      awards: [
        '98% University Acceptance Rate',
        '$2.5M in Scholarships Awarded',
        '85% Merit Scholarship Recipients'
      ],
      color: 'from-blue-400 to-blue-600',
      number: '98%'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      awards: [
        'UNESCO Associated School Status',
        'International Baccalaureate Accredited',
        'Global Education Partnership Awards'
      ],
      color: 'from-green-400 to-green-600',
      number: '15+'
    },
    {
      icon: Medal,
      title: 'Competition Victories',
      awards: [
        'National Science Olympiad Champions',
        'Debate Tournament State Winners',
        'Robotics Competition Gold Medal'
      ],
      color: 'from-purple-400 to-purple-600',
      number: '50+'
    }
  ];

  const stats = [
    { label: 'University Acceptance', value: '98%', icon: Target },
    { label: 'Alumni Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Student Satisfaction', value: '97%', icon: Users },
    { label: 'Faculty Excellence', value: '92%', icon: Award },
  ];

  const testimonialStats = [
    { number: '2,500+', label: 'Success Stories' },
    { number: '$10M+', label: 'Scholarships Earned' },
    { number: '45+', label: 'Countries Represented' },
    { number: '150+', label: 'Awards & Recognition' },
  ];

  return (
    <section id="achievements" ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-yellow-400/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-blue-400/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-lg font-semibold mb-4">
            Our Achievements
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Recognized</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our commitment to educational excellence has earned us prestigious recognition 
            and awards from institutions worldwide, reflecting our dedication to student success.
          </p>
        </motion.div>

        {/* Stats Overview */}
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
              className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative"
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl shadow-xl`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.number}
                    </div>
                    <div className="text-gray-300 text-sm">Awards</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{achievement.title}</h3>
                
                <div className="space-y-4">
                  {achievement.awards.map((award, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${achievement.color} rounded-full mr-4 flex-shrink-0`} />
                      <span className="leading-relaxed">{award}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Impact by Numbers
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our achievements translate into real success for our students and lasting impact on communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1, type: "spring" }}
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;