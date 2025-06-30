import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Trophy, 
  Star, 
  Award, 
  Target, 
  TrendingUp, 
  Users, 
  Globe,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote
} from 'lucide-react';
import CountUp from 'react-countup';

const StudentSuccessSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const successStories = [
    {
      id: 1,
      name: 'Shahzod Karimov',
      age: 22,
      course: 'IELTS Preparation',
      achievement: 'IELTS Band 8.5',
      story: 'Thanks to Hi School LC, I achieved my dream IELTS score and got accepted to Cambridge University. The teachers here are exceptional!',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg',
      flag: '🇬🇧',
      university: 'Cambridge University',
      duration: '4 months',
      initialScore: '6.0',
      finalScore: '8.5'
    },
    {
      id: 2,
      name: 'Malika Abdullayeva',
      age: 19,
      course: 'Chinese HSK',
      achievement: 'HSK Level 6',
      story: 'Learning Chinese seemed impossible, but Hi School LC made it achievable. Now I work for a Chinese company in Beijing!',
      image: 'https://images.pexels.com/photos/3762870/pexels-photo-3762870.jpeg',
      flag: '🇨🇳',
      university: 'Beijing Language University',
      duration: '8 months',
      initialScore: 'Beginner',
      finalScore: 'HSK 6'
    },
    {
      id: 3,
      name: 'Javohir Toshev',
      age: 24,
      course: 'Korean TOPIK',
      achievement: 'TOPIK Level 5',
      story: 'From zero Korean to TOPIK 5 in just 10 months! Hi School LC opened doors to my career in Seoul.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      flag: '🇰🇷',
      university: 'Seoul National University',
      duration: '10 months',
      initialScore: 'Beginner',
      finalScore: 'TOPIK 5'
    },
    {
      id: 4,
      name: 'Nilufar Rashidova',
      age: 20,
      course: 'Arabic Language',
      achievement: 'Advanced Proficiency',
      story: 'Hi School LC helped me master Arabic beautifully. Now I work as a translator for international organizations.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      flag: '🇸🇦',
      university: 'Al-Azhar University',
      duration: '12 months',
      initialScore: 'Beginner',
      finalScore: 'Advanced'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      count: 150,
      description: 'Students achieved top scores',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'International Admissions',
      count: 85,
      description: 'Students studying abroad',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Scholarships Won',
      count: 65,
      description: 'Full scholarships awarded',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      count: 200,
      description: 'Students got promotions',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    { label: 'Success Rate', value: 98, suffix: '%', icon: Target },
    { label: 'Average Score Improvement', value: 85, suffix: '%', icon: TrendingUp },
    { label: 'International Placements', value: 150, suffix: '+', icon: Globe },
    { label: 'Happy Graduates', value: 2000, suffix: '+', icon: Users },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % successStories.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeTestimonial];

  return (
    <section id="success" ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-lg font-semibold mb-4">
            Student Success Stories
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Dreams
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Achieved</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet our incredible students who have transformed their lives through language mastery 
            and achieved their global ambitions.
          </p>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          data-aos="fade-up" 
          data-aos-delay="200"
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
              <div className="text-3xl font-bold text-white mb-2">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                />
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 mb-20"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  
                  {/* Success Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
                    {currentStory.achievement}
                  </div>

                  {/* Flag */}
                  <div className="absolute top-4 left-4 text-4xl">{currentStory.flag}</div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/30"
                  >
                    <Play className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <Quote className="w-12 h-12 text-yellow-400 mb-6" />
                  
                  <blockquote className="text-2xl text-white mb-8 leading-relaxed italic">
                    "{currentStory.story}"
                  </blockquote>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentStory.name}</h3>
                      <p className="text-yellow-400 font-medium">Age: {currentStory.age}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-sm text-gray-300">Course</div>
                        <div className="font-bold text-white">{currentStory.course}</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-sm text-gray-300">Duration</div>
                        <div className="font-bold text-white">{currentStory.duration}</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-sm text-gray-300">Initial Score</div>
                        <div className="font-bold text-white">{currentStory.initialScore}</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-sm text-gray-300">Final Score</div>
                        <div className="font-bold text-yellow-400">{currentStory.finalScore}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-sm text-gray-300">Now Studying At</div>
                      <div className="font-bold text-white">{currentStory.university}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 text-center"
              data-aos="fade-up" 
              data-aos-delay={600 + index * 100}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl mb-6 shadow-xl`}
              >
                <achievement.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring" }}
              >
                <CountUp
                  end={achievement.count}
                  duration={2}
                  suffix="+"
                  enableScrollSpy
                />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Your Success Story Starts Here
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who have achieved their dreams. 
            Start your journey to global opportunities today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Begin Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentSuccessSection;