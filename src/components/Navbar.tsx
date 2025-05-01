
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 w-full">
      <div className="flex items-center">
        <Link to="/" className="text-white">
          <img src="/lovable-uploads/348d96b6-2c97-4ade-9ac4-62e09f9dad3c.png" alt="Insurance Logo" className="h-10" />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-blue-200 font-medium">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-200 font-medium">About us</Link>
        <Link to="/services" className="text-white hover:text-blue-200 font-medium">Services</Link>
        <Link to="/contact" className="text-white hover:text-blue-200 font-medium">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900">
          Sign up
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
