
import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <div className="bg-blue-900 py-20">
          <div className="container mx-auto px-6 text-center pt-16">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
        <QuoteSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
