import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Play, Globe, BookOpen, Users, Award, Calendar, MapPin } from 'lucide-react';
import CountUp from 'react-countup';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const languages = [
    { name: 'English', flag: '🇺🇸', students: 850 },
    { name: 'Chinese', flag: '🇨🇳', students: 420 },
    { name: 'Korean', flag: '🇰🇷', students: 380 },
    { name: 'Arabic', flag: '🇸🇦', students: 290 },
    { name: 'Math', flag: '🔢', students: 650 }
  ];

  const stats = [
    { icon: Users, label: 'Active Students', value: 2500, suffix: '+' },
    { icon: Globe, label: 'Languages Taught', value: 4, suffix: '+' },
    { icon: Award, label: 'Success Rate', value: 98, suffix: '%' },
    { icon: BookOpen, label: 'Courses Available', value: 25, suffix: '+' },
  ];

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Video Background */}
      <motion.div 
        style={{ y: ySpring, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-purple-900/90 z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-students-in-a-library-reading-and-studying-4618-large.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 z-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Premium Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-3xl z-15"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-3xl z-15"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Language Cards Floating Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0.7],
                scale: [0, 1, 1],
                y: [0, -20, 0],
                x: [0, Math.sin(index) * 50, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              className="absolute bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 2) * 40}%`,
              }}
            >
              <div className="text-2xl mb-1">{lang.flag}</div>
              <div className="text-xs font-medium">{lang.name}</div>
              <div className="text-xs opacity-70">{lang.students}+ students</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Premium Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-white">H</span>
              </motion.div>
              <div className="text-left">
                <div className="text-xl font-bold">Hi School</div>
                <div className="text-sm opacity-80">Learning Center</div>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Master
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Languages
            </motion.span>
            <motion.span
              className="block text-4xl sm:text-5xl lg:text-6xl mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              & Mathematics
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Unlock your potential with expert-led courses in English, Chinese, Korean, Arabic, and Mathematics
            at Uzbekistan's premier learning center with branches in Nurafshon and Yangiyol.
          </motion.p>

          {/* Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {['Nurafshon City', 'Yangiyol'].map((location, index) => (
              <motion.div
                key={location}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{location}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('#enrollment')}
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 flex items-center space-x-3"
          >
            <span>Start Learning Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </motion.div>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('#courses')}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-white/50 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-3"
          >
            <Play className="w-5 h-5" />
            <span>Explore Courses</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl mb-4 group-hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1, type: "spring" }}
              >
                <CountUp
                  end={stat.value}
                  duration={2}
                  delay={2.2 + index * 0.1}
                  suffix={stat.suffix}
                />
              </motion.div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors z-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.3 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
          <ChevronDown size={24} />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;