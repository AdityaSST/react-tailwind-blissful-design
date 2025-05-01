
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <div className="bg-blue-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
          </div>
        </div>
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
