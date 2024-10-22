import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#004694] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 MyBlog. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;