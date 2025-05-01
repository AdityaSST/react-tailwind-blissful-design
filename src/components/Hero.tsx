
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>
      
      {/* Custom overlay with the specific gradient - changed from "to bottom" to "to right" */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: "linear-gradient(to right, rgba(21,68,114,0) 0%, rgba(21,68,114,0.5672) 56.72%, rgba(21,68,114,0.99) 99%)"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insurance that protect your family
          </h1>
          <p className="text-white text-lg mb-8">
            Bisa enim qursus ut suaves et ut, sed dera terrom ut tellus nisi push roaming whitecrut amet offline et velim ut illicidion.
          </p>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
            More Details <ArrowRight size={16} />
          </Button>
          
          <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg inline-flex items-center">
            <div className="text-white mr-4">
              <p className="font-bold text-xl">2K+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
