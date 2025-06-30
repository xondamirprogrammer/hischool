import React, { useEffect, useRef } from 'react';
import { Calendar, FileText, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

const AdmissionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <section id="admissions" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Admissions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners and leaders. We welcome students who are 
            passionate about learning and ready to make a positive impact.
          </p>
        </div>

        {/* Admission Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {admissionInfo.map((info, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <info.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">{info.value}</div>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl animate-on-scroll">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Application Process
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
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
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="animate-on-scroll">
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
          </div>
          
          <div className="animate-on-scroll">
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
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
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
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;