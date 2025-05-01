
import React from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-blue-200 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-blue-900 py-16 relative overflow-hidden">
      {/* Background circles/dots */}
      <div className="absolute left-0 top-20 w-24 h-24 bg-blue-800 rounded-full opacity-30"></div>
      <div className="absolute right-0 bottom-20 w-32 h-32 bg-blue-800 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-white font-medium mb-2">Our Services</p>
          <h2 className="text-3xl font-bold text-white">Types Of Insurance Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Life Insurance" 
            description="Family Management & Protection"
          />
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Health & Accident Insurance" 
            description="Coverage"
          />
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12H9M16 7l-4 5 4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Property" 
            description="Protection Against Hazards"
          />
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Business & Liability Insurance" 
            description="Coverage"
          />
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Contact Us For More Provider" 
            description="Provider"
          />
          <ServiceCard 
            icon={<svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            title="Backup Notifications" 
            description=""
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
