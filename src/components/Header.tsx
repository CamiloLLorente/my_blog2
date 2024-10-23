import { Link } from 'react-router-dom';
import image from "../../public/image/logo.png";

const Header = () => {
  return (
    <header className="bg-[#004694] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={image} alt="Logo" className="w-12 h-12" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li className='align-center'><Link to="/" className="hover:text-gray-300 transition-colors">Inicio</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition-colors">Sobre mi</Link></li>
            <li><Link to="/contact"> <span className="bg-[#FFA400] text-white px-3 py-1 rounded-md">Contacto</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;