
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src="/lovable-uploads/348d96b6-2c97-4ade-9ac4-62e09f9dad3c.png" alt="Insurance Logo" className="h-10 mb-4" />
            <p className="text-sm text-blue-200 mb-4 max-w-xs">
              Magna Mattis Fincidunt venette vitae blandit, duis fan ma tortor augue pharetra commodo nibh ullamcon sagittis non a ante sagittas Dalia ornare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.008 10.008 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.981c1.954-3.07 4.452-4.982 7.53-5.913a39.137 39.137 0 012.11 7.643 9.89 9.89 0 01-9.64-1.73zm12.527.714a41.066 41.066 0 00-1.929-7.3c1.922-.312 4.045-.267 6.334.14a9.923 9.923 0 01-4.405 7.16z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="text-blue-200 space-y-2">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Address</h5>
              <address className="text-blue-200 not-italic">
                <p>123 Street from here, USA</p>
                <p className="mt-4">
                  <a href="tel:+11234567890" className="hover:text-white">+ (1) 123 4567 890</a>
                </p>
                <p>
                  <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
                </p>
              </address>
            </div>
            
            <div className="col-span-2 md:col-span-2">
              <h5 className="font-bold mb-4">Never Miss Our Updates</h5>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter to get our latest news and updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l focus:outline-none text-gray-800"
                />
                <Button variant="default" className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-300">© Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
