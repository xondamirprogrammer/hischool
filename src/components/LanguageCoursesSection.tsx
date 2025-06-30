import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Users, 
  Clock, 
  Award, 
  ChevronRight, 
  Star, 
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Play,
  Calendar
} from 'lucide-react';
import CountUp from 'react-countup';

const LanguageCoursesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeLanguage, setActiveLanguage] = useState('english');
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const languages = {
    english: {
      name: 'English',
      flag: '🇺🇸',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      students: 850,
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Business English', 'IELTS Prep'],
      courses: [
        {
          id: 'general-english',
          title: 'General English',
          description: 'Comprehensive English course covering speaking, listening, reading, and writing skills.',
          duration: '3 months',
          students: 320,
          level: 'All Levels',
          rating: 4.9,
          price: 'From $150/month',
          features: ['Interactive Speaking Practice', 'Grammar Mastery', 'Vocabulary Building', 'Real-world Scenarios'],
          image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg',
          schedule: 'Mon, Wed, Fri - 18:00-20:00'
        },
        {
          id: 'business-english',
          title: 'Business English',
          description: 'Professional English for business communication, presentations, and international trade.',
          duration: '4 months',
          students: 180,
          level: 'Intermediate+',
          rating: 4.8,
          price: 'From $200/month',
          features: ['Presentation Skills', 'Email Writing', 'Meeting Management', 'Negotiation'],
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
          schedule: 'Tue, Thu - 19:00-21:00'
        },
        {
          id: 'ielts-prep',
          title: 'IELTS Preparation',
          description: 'Intensive IELTS exam preparation with proven strategies and practice tests.',
          duration: '2 months',
          students: 250,
          level: 'Intermediate+',
          rating: 4.9,
          price: 'From $250/month',
          features: ['Mock Exams', 'Speaking Practice', 'Writing Feedback', 'Score Guarantee'],
          image: 'https://images.pexels.com/photos/5427829/pexels-photo-5427829.jpeg',
          schedule: 'Daily - 17:00-19:00'
        }
      ]
    },
    chinese: {
      name: 'Chinese (Mandarin)',
      flag: '🇨🇳',
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      students: 420,
      levels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'],
      courses: [
        {
          id: 'mandarin-basics',
          title: 'Mandarin Basics',
          description: 'Start your Chinese journey with pinyin, basic characters, and essential conversations.',
          duration: '4 months',
          students: 180,
          level: 'Beginner',
          rating: 4.8,
          price: 'From $180/month',
          features: ['Pinyin Mastery', 'Character Writing', 'Tone Practice', 'Cultural Context'],
          image: 'https://images.pexels.com/photos/5428010/pexels-photo-5428010.jpeg',
          schedule: 'Mon, Wed, Fri - 18:30-20:30'
        },
        {
          id: 'hsk-preparation',
          title: 'HSK Preparation',
          description: 'Comprehensive HSK exam preparation for all levels with certified instructors.',
          duration: '3 months',
          students: 140,
          level: 'All HSK Levels',
          rating: 4.9,
          price: 'From $220/month',
          features: ['HSK Mock Tests', 'Vocabulary Training', 'Grammar Focus', 'Speaking Practice'],
          image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg',
          schedule: 'Tue, Thu, Sat - 19:00-21:00'
        },
        {
          id: 'business-chinese',
          title: 'Business Chinese',
          description: 'Professional Chinese for business meetings, negotiations, and trade communications.',
          duration: '5 months',
          students: 100,
          level: 'Advanced',
          rating: 4.7,
          price: 'From $280/month',
          features: ['Business Vocabulary', 'Meeting Chinese', 'Contract Language', 'Cultural Etiquette'],
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
          schedule: 'Mon, Wed - 19:30-21:30'
        }
      ]
    },
    korean: {
      name: 'Korean',
      flag: '🇰🇷',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      students: 380,
      levels: ['TOPIK 1', 'TOPIK 2', 'TOPIK 3', 'TOPIK 4', 'TOPIK 5', 'TOPIK 6'],
      courses: [
        {
          id: 'korean-fundamentals',
          title: 'Korean Fundamentals',
          description: 'Learn Hangul, basic grammar, and everyday Korean conversation skills.',
          duration: '4 months',
          students: 160,
          level: 'Beginner',
          rating: 4.8,
          price: 'From $170/month',
          features: ['Hangul Mastery', 'Basic Grammar', 'K-Culture Integration', 'Pronunciation'],
          image: 'https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg',
          schedule: 'Mon, Wed, Fri - 18:00-20:00'
        },
        {
          id: 'topik-preparation',
          title: 'TOPIK Preparation',
          description: 'Intensive TOPIK exam preparation with native Korean instructors.',
          duration: '3 months',
          students: 120,
          level: 'All TOPIK Levels',
          rating: 4.9,
          price: 'From $230/month',
          features: ['TOPIK Practice Tests', 'Writing Skills', 'Listening Comprehension', 'Reading Strategies'],
          image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg',
          schedule: 'Tue, Thu, Sat - 18:30-20:30'
        },
        {
          id: 'korean-culture',
          title: 'Korean Language & Culture',
          description: 'Immersive Korean learning through K-drama, music, and cultural activities.',
          duration: '6 months',
          students: 100,
          level: 'Intermediate',
          rating: 4.7,
          price: 'From $190/month',
          features: ['K-Drama Analysis', 'Cultural Activities', 'Modern Slang', 'Social Korean'],
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
          schedule: 'Sat, Sun - 14:00-17:00'
        }
      ]
    },
    arabic: {
      name: 'Arabic',
      flag: '🇸🇦',
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      students: 290,
      levels: ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Quranic Arabic'],
      courses: [
        {
          id: 'modern-arabic',
          title: 'Modern Standard Arabic',
          description: 'Learn Modern Standard Arabic for communication across the Arab world.',
          duration: '5 months',
          students: 130,
          level: 'All Levels',
          rating: 4.8,
          price: 'From $190/month',
          features: ['Arabic Script', 'Grammar Foundation', 'Vocabulary Building', 'Cultural Context'],
          image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg',
          schedule: 'Mon, Wed, Fri - 19:00-21:00'
        },
        {
          id: 'quranic-arabic',
          title: 'Quranic Arabic',
          description: 'Specialized course for understanding classical Arabic and Quranic texts.',
          duration: '6 months',
          students: 90,
          level: 'Intermediate+',
          rating: 4.9,
          price: 'From $210/month',
          features: ['Classical Grammar', 'Quranic Vocabulary', 'Text Analysis', 'Spiritual Context'],
          image: 'https://images.pexels.com/photos/5428010/pexels-photo-5428010.jpeg',
          schedule: 'Tue, Thu - 19:30-21:30'
        },
        {
          id: 'conversational-arabic',
          title: 'Conversational Arabic',
          description: 'Focus on practical Arabic conversation for travel and daily communication.',
          duration: '3 months',
          students: 70,
          level: 'Beginner+',
          rating: 4.7,
          price: 'From $160/month',
          features: ['Spoken Arabic', 'Travel Phrases', 'Daily Situations', 'Pronunciation'],
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
          schedule: 'Sat - 15:00-18:00'
        }
      ]
    }
  };

  const currentLanguage = languages[activeLanguage as keyof typeof languages];

  return (
    <section id="courses" ref={ref} className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Elements */}
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
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-4"
            data-aos="fade-up"
          >
            Language Mastery
          </motion.span>
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Master Global
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Languages</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Unlock international opportunities with our comprehensive language programs. 
            Expert instructors, proven methods, and immersive learning experiences.
          </motion.p>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          {Object.entries(languages).map(([key, language]) => (
            <motion.button
              key={key}
              onClick={() => setActiveLanguage(key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                activeLanguage === key
                  ? `bg-gradient-to-r ${language.color} text-white shadow-2xl`
                  : 'bg-white/80 backdrop-blur-md text-gray-600 hover:bg-white hover:shadow-lg border border-gray-200'
              }`}
            >
              <span className="text-2xl">{language.flag}</span>
              <div className="text-left">
                <div className="font-bold">{language.name}</div>
                <div className={`text-xs ${activeLanguage === key ? 'text-white/80' : 'text-gray-500'}`}>
                  <CountUp end={language.students} duration={2} />+ students
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Course Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLanguage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Language Header */}
            <motion.div
              className={`bg-gradient-to-r ${currentLanguage.bgColor} rounded-3xl p-12 mb-12 border border-gray-100`}
              data-aos="fade-up"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-6xl">{currentLanguage.flag}</span>
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900">{currentLanguage.name}</h3>
                      <p className="text-gray-600">Global Communication Excellence</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/70 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        <CountUp end={currentLanguage.students} duration={2} />+
                      </div>
                      <div className="text-sm text-gray-600">Active Students</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{currentLanguage.levels.length}</div>
                      <div className="text-sm text-gray-600">Skill Levels</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Available Levels:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentLanguage.levels.map((level, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/70 text-gray-700 text-sm rounded-full border"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="relative"
                >
                  <img
                    src={currentLanguage.courses[0].image}
                    alt={`${currentLanguage.name} learning`}
                    className="rounded-2xl w-full h-80 object-cover shadow-2xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full border border-white/30"
                  >
                    <Play className="w-8 h-8" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Courses Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {currentLanguage.courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredCourse(course.id)}
                  onHoverEnd={() => setHoveredCourse(null)}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-56 object-cover transition-transform duration-500"
                      animate={{ scale: hoveredCourse === course.id ? 1.1 : 1 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentLanguage.color} opacity-60`} />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                    
                    {/* Level Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-gray-700">{course.level}</span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2">
                      <div className="text-sm font-bold text-gray-900">{course.price}</div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} students</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{course.schedule}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <Zap className="w-3 h-3 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${currentLanguage.color} text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <span>Enroll Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Metrics */}
            <motion.div
              className={`bg-gradient-to-r ${currentLanguage.color} rounded-3xl p-12 text-white`}
              data-aos="fade-up"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">
                  Success in {currentLanguage.name}
                </h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Join thousands of successful students who have mastered {currentLanguage.name} 
                  and unlocked new opportunities worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: 'Success Rate', value: 96, suffix: '%' },
                  { label: 'Average Progress', value: 85, suffix: '%' },
                  { label: 'Certified Students', value: currentLanguage.students * 0.7, suffix: '+' },
                  { label: 'Job Placements', value: 78, suffix: '%' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-4xl lg:text-5xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.9 + index * 0.1, type: "spring" }}
                    >
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    </motion.div>
                    <div className="text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LanguageCoursesSection;