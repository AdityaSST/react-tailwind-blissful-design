
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <Hero />
        <BenefitsSection />
        <AboutSection />
        <ServicesSection />
        <QuoteSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
