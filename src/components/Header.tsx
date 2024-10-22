import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#004694] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen size={32} />
          <span className="text-xl font-bold">MyBlog</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition-colors">Inicio</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;