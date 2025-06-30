import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Gift,
  CreditCard,
  Phone,
  Mail
} from 'lucide-react';

const EnrollmentSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = {
    english: { name: 'English', flag: '🇺🇸', color: 'from-blue-500 to-indigo-600' },
    chinese: { name: 'Chinese', flag: '🇨🇳', color: 'from-red-500 to-orange-600' },
    korean: { name: 'Korean', flag: '🇰🇷', color: 'from-purple-500 to-pink-600' },
    arabic: { name: 'Arabic', flag: '🇸🇦', color: 'from-green-500 to-teal-600' },
    math: { name: 'Mathematics', flag: '🔢', color: 'from-yellow-500 to-amber-600' }
  };

  const plans = {
    basic: {
      name: 'Basic Plan',
      price: 150,
      duration: '1 Month',
      features: [
        '8 Group Classes per Month',
        'Basic Study Materials',
        'Progress Tracking',
        'Online Support'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    standard: {
      name: 'Standard Plan',
      price: 280,
      duration: '2 Months',
      features: [
        '16 Group Classes',
        'Premium Study Materials',
        '4 One-on-One Sessions',
        'Mock Exams & Practice Tests',
        'Progress Reports',
        '24/7 Online Support'
      ],
      popular: true,
      color: 'from-blue-500 to-purple-600',
      discount: 20
    },
    premium: {
      name: 'Premium Plan',
      price: 600,
      duration: '4 Months',
      features: [
        '32 Group Classes',
        'All Study Materials Included',
        '12 One-on-One Sessions',
        'Unlimited Practice Tests',
        'Personal Study Coordinator',
        'Certificate of Completion',
        'Job Placement Assistance',
        'Lifetime Alumni Access'
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-600',
      discount: 30
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currentLanguage = languages[selectedLanguage as keyof typeof languages];

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Select your language and preferred plan',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Schedule Assessment',
      description: 'Book your free placement test',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Make Payment',
      description: 'Secure your spot with flexible payment options',
      icon: CreditCard
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Begin your journey to language mastery',
      icon: Star
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Free Placement Test',
      description: 'Worth $50 - Completely Free'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Start learning immediately after enrollment'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Maximum 8 students per class'
    },
    {
      icon: CheckCircle,
      title: 'Money-Back Guarantee',
      description: '30-day satisfaction guarantee'
    }
  ];

  return (
    <section id="enrollment" ref={ref} className="py-32 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
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
            Start Your Journey
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Enroll
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful students. Choose your course, select your plan, 
            and start your journey to language mastery today.
          </p>
        </motion.div>

        {/* Language Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Choose Your Language</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(languages).map(([key, language]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedLanguage(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedLanguage === key
                    ? `bg-gradient-to-r ${language.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="text-2xl">{language.flag}</span>
                <span>{language.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Select Your Plan</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(plans).map(([key, plan]) => (
              <motion.div
                key={key}
                onClick={() => setSelectedPlan(key)}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative cursor-pointer transition-all duration-500 ${
                  selectedPlan === key ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  plan.popular ? 'border-2 border-blue-500' : 'border border-gray-200'
                }`}>
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <div className="text-left">
                        <div className="text-gray-500 text-sm">per</div>
                        <div className="text-gray-500 text-sm">{plan.duration}</div>
                      </div>
                    </div>
                    {plan.discount && (
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Save {plan.discount}%
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      selectedPlan === key
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPlan === key ? 'Selected' : 'Select Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enrollment Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4"
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enrollment Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl mb-16"
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Enroll
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {/* Connector Arrow */}
                {index < enrollmentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className={`bg-gradient-to-r ${currentLanguage.color} rounded-3xl p-12 text-white text-center`}
          data-aos="fade-up" 
          data-aos-delay="1000"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl">{currentLanguage.flag}</span>
            <h3 className="text-4xl font-bold">Ready to Learn {currentLanguage.name}?</h3>
          </div>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the {currentPlan.name} and start your {currentLanguage.name} journey today. 
            Limited spots available for this month!
          </p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-3xl font-bold mb-2">
              {currentLanguage.name} - {currentPlan.name}
            </div>
            <div className="text-2xl">${currentPlan.price} / {currentPlan.duration}</div>
            {currentPlan.discount && (
              <div className="text-sm opacity-80">Save {currentPlan.discount}%</div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Info</span>
            </motion.button>
          </div>
          
          <div className="mt-8 text-center opacity-80">
            <p className="text-sm">Questions? Call us at +998 90 123 45 67 or email info@hischool.uz</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnrollmentSection;