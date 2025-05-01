
import React, { useState } from 'react';

type TestimonialProps = {
  name: string;
  title: string;
  quote: string;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    name: "James Adams",
    title: "CEO & Partner",
    quote: "Lorem Masum Fir Velot, Env Er, Detersit Rat One Gesferred Mer Par Cursive Er, Per Desenlae, Extendet Per Commo, Tera Et Bingan Kale Tap, Is Consivus Tro, One Sig Im.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    quote: "Extendet Per Commo, Tera Et Bingan Kale Tap, Is Consivus Tro, One Sig Im. Lorem Masum Fir Velot, Env Er, Detersit Rat One Gesferred Mer Par Cursive Er, Per Desenlae.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    title: "Insurance Expert",
    quote: "Per Desenlae, Extendet Per Commo, Tera Et Bingan Kale Tap, Is Consivus Tro, One Sig Im. Lorem Masum Fir Velot, Env Er, Detersit Rat One Gesferred Mer Par Cursive Er.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What They Say About Our Insurance</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <div className="relative mb-8">
              {/* Testimonial portrait circles */}
              <div className="flex justify-center">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 ${currentTestimonial === index ? 'border-orange-500 scale-125' : 'border-gray-300 opacity-70'} 
                              transition-all duration-300 mx-4 cursor-pointer`}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              
              {/* Additional portraits placed strategically */}
              <div className="absolute -top-10 left-6 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 right-10 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-500">{testimonials[currentTestimonial].title}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                onClick={prevTestimonial}
              >
                &larr;
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                onClick={nextTestimonial}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
