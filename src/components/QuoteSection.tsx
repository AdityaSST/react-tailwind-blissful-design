
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "brightness(0.5)"
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get An Insurance Quote To Get Started!
            </h2>
          </div>
          
          <div className="md:w-5/12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form>
                <div className="space-y-4">
                  <Input placeholder="Your Name" className="w-full" />
                  <Input placeholder="Email ID" className="w-full" />
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected>Insurance Type</option>
                    <option value="life">Life Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="property">Property Insurance</option>
                  </select>
                  <Input placeholder="Your Message" className="w-full" />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Get A Quote Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
