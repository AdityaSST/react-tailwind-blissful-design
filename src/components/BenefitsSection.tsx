
import React from 'react';

type BenefitCardProps = {
  iconColor: string;
  title: string;
  description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ iconColor, title, description }) => {
  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center mb-4`}>
        <span className="font-bold">01</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Insurance Benefits</p>
          <h2 className="text-3xl font-bold">We Inspire And Help Our Customers</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            Erisline Pirio Velot, Env Er, Detersit Rat One Gesferred Mer Par Cursive Er, Per Desenlae, Extendet Per Commo, Tera Et Bingan Kale Tap, Is Consivus Tro, One Sig Im.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <BenefitCard 
            iconColor="bg-orange-500"
            title="100% Secure Services" 
            description="Lerinqua Adimen Libor Foste Pretium Amit Congve Trene Purus Sit Nunc Sig Im"
          />
          <BenefitCard 
            iconColor="bg-orange-500"
            title="Lorem Ipsum Adimenen" 
            description="Lokin Ipsum Ultrice Enim Ucves Porttitor Orci Weron Neque Vivalis Amet Sit"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
