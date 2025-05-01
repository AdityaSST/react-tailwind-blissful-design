
import React from 'react';

type StatItemProps = {
  number: string;
  text: string;
};

const StatItem: React.FC<StatItemProps> = ({ number, text }) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="rounded-full overflow-hidden border-8 border-orange-500 max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professional with laptop" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <p className="text-orange-500 font-medium mb-2">About Us</p>
            <h2 className="text-3xl font-bold mb-4">
              Lorem Ipsum Dolor Sit Amet Consectetur. Integer Porta In Nunc Volutpat. Tempus Sagittis Aliquam Ut
            </h2>
            <p className="text-gray-600 mb-6">
              Magna Etiam Nullam Vel Accusam Risus. Duis Id Nulla Augue Interdum Pulvum In Sed Lare, Vitae Sed Su, Dorem, Liturgem Quodar Eqot, Dic Nolo Curratic Ultro, Des Matque, Tegnt San Augulo Slb.
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <StatItem number="30+" text="Awards Win" />
              <StatItem number="10+" text="Experience Members" />
              <StatItem number="15+" text="Years of Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
