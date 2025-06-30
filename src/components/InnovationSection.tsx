import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Rocket, Brain, Atom, Code } from 'lucide-react';

const InnovationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const innovations = [
    {
      icon: Brain,
      title: 'AI Learning Assistant',
      description: 'Personalized AI tutors that adapt to each student\'s learning style and pace.',
      color: 'from-purple-500 to-indigo-600',
      delay: 0
    },
    {
      icon: Atom,
      title: 'Quantum Lab',
      description: 'Access to quantum computing simulators and advanced physics experiments.',
      color: 'from-blue-500 to-cyan-600',
      delay: 0.1
    },
    {
      icon: Code,
      title: 'Coding Bootcamp',
      description: 'Intensive programming courses in cutting-edge languages and frameworks.',
      color: 'from-green-500 to-teal-600',
      delay: 0.2
    },
    {
      icon: Rocket,
      title: 'Space Program',
      description: 'Satellite building, rocket design, and collaboration with space agencies.',
      color: 'from-orange-500 to-red-600',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Clean Energy Lab',
      description: 'Research in renewable energy, battery technology, and sustainability.',
      color: 'from-yellow-500 to-orange-600',
      delay: 0.4
    },
    {
      icon: Cpu,
      title: 'Robotics Workshop',
      description: 'Build, program, and compete with advanced robotic systems.',
      color: 'from-pink-500 to-purple-600',
      delay: 0.5
    }
  ];

  return (
    <section id="innovation" ref={ref} className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
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
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-400/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-purple-400/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-lg font-semibold mb-4">
            Innovation Hub
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Future-Ready
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in cutting-edge technology and groundbreaking research that 
            shapes tomorrow's innovations at our state-of-the-art facilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: innovation.delay }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${innovation.color} rounded-2xl mb-6 shadow-xl relative z-10`}
                >
                  <innovation.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {innovation.description}
                </p>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Innovation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Virtual Reality Learning
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Step into immersive virtual environments where students can explore 
                ancient civilizations, dive into molecular structures, or walk on 
                the surface of Mars - all from our VR learning center.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-300">VR Experiences</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Students Engaged</div>
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8866792/pexels-photo-8866792.jpeg"
                  alt="VR Learning"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                
                {/* Floating VR Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-xl p-3"
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;