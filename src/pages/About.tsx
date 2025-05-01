
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <div className="bg-blue-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
