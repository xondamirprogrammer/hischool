import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LanguageCoursesSection from './components/LanguageCoursesSection';
import ProgramsSection from './components/ProgramsSection';
import InnovationSection from './components/InnovationSection';
import FacultySection from './components/FacultySection';
import BranchesSection from './components/BranchesSection';
import StudentSuccessSection from './components/StudentSuccessSection';
import TestimonialsSection from './components/TestimonialsSection';
import EnrollmentSection from './components/EnrollmentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';
import LanguageSelector from './components/LanguageSelector';
import ChatBot from './components/ChatBot';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <LoadingScreen />
        <ParticleBackground />
        <CursorEffect />
        <ScrollProgress />
        <LanguageSelector />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection />
          <AboutSection />
          <LanguageCoursesSection />
          <ProgramsSection />
          <InnovationSection />
          <FacultySection />
          <BranchesSection />
          <StudentSuccessSection />
          <TestimonialsSection />
          <EnrollmentSection />
          <ContactSection />
        </motion.main>
        <Footer />
        <ChatBot />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;