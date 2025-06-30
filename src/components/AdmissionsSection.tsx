import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, FileText, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

const AdmissionsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with required documents.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Entrance Assessment',
      description: 'Participate in our comprehensive evaluation process.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Interview Process',
      description: 'Meet with our admissions team and faculty members.',
      icon: Users
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Receive your admission decision within 2 weeks.',
      icon: Calendar
    }
  ];

  const admissionInfo = [
    {
      icon: Calendar,
      title: 'Application Deadline',
      value: 'March 31, 2025',
      description: 'Early applications encouraged'
    },
    {
      icon: DollarSign,
      title: 'Tuition Fee',
      value: '$12,000/year',
      description: 'Financial aid available'
    },
    {
      icon: Clock,
      title: 'Program Duration',
      value: '2 Years',
      description: 'Full-time comprehensive program'
    }
  ];

  return (
    <section id="admissions" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Admissions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners and leaders. We welcome students who are 
            passionate about learning and ready to make a positive impact.
          </p>
        </motion.div>

        {/* Admission Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {admissionInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <info.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">{info.value}</div>
              <p className="text-gray-600">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Application Process
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
            <div className="space-y-4">
              {[
                'Completed application form with personal statement',
                'Official transcripts from previous schools',
                'Two letters of recommendation',
                'Standardized test scores (if applicable)',
                'Portfolio or creative work samples (for arts programs)',
                'Proof of English proficiency (for international students)'
              ].map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Aid</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that financial circumstances should never be a barrier to quality education. 
              Hi School LC offers various financial aid options to help make education accessible to all deserving students.
            </p>
            <div className="space-y-3">
              {[
                'Merit-based scholarships',
                'Need-based financial assistance',
                'Payment plans available',
                'Work-study opportunities'
              ].map((aid, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{aid}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-xl mb-8 opacity-90">
              Start your journey with Hi School LC today and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                Apply Online
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">
                Schedule Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;