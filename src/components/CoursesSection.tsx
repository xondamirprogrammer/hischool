import React, { useEffect, useRef } from 'react';
import { BookOpen, Clock, Users, ChevronRight } from 'lucide-react';

const CoursesSection = () => {
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

  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Comprehensive mathematics program covering calculus, statistics, and advanced algebra.',
      duration: '2 Years',
      students: '120',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/6238113/pexels-photo-6238113.jpeg'
    },
    {
      id: 2,
      title: 'Science & Technology',
      description: 'Integrated STEM program focusing on physics, chemistry, biology, and computer science.',
      duration: '2 Years',
      students: '95',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
    },
    {
      id: 3,
      title: 'Liberal Arts',
      description: 'Comprehensive humanities program including literature, history, philosophy, and arts.',
      duration: '2 Years',
      students: '80',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      id: 4,
      title: 'Business Studies',
      description: 'Foundational business education covering economics, accounting, and entrepreneurship.',
      duration: '2 Years',
      students: '110',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg'
    },
    {
      id: 5,
      title: 'Creative Arts',
      description: 'Comprehensive arts program including visual arts, music, theater, and digital media.',
      duration: '2 Years',
      students: '65',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg'
    },
    {
      id: 6,
      title: 'Physical Education',
      description: 'Holistic approach to physical fitness, sports, and health sciences.',
      duration: '2 Years',
      students: '150',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg'
    }
  ];

  return (
    <section id="courses" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of academic programs designed to challenge, 
            inspire, and prepare students for their future endeavors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-on-scroll bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} students
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;