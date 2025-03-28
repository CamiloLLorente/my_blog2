import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation(); // Hook para obtener la ubicación actual
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname); // Actualizar URL cuando cambie la ubicación
  }, [location]);

  const handleScroll = () => {
    setIsVisible(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-white fixed top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src={image} alt="Logo" className="w-12 h-12" /> */}
        </Link>
        <nav>
          <ul className={`flex space-x-6 ${currentUrl === "/" ? "text-white" : "text-[#003674]"}`}>
            <li className="font-bold"><Link to="/" className="hover:text-gray-300 transition-colors">
              Inicio
            </Link></li>
            <li className="font-bold">
              <Link to="/blog" className="hover:text-gray-300 transition-colors">
              Blog
              </Link>
            </li>
            <li className="font-bold">
              <Link
              to="/discover-and-learn"
              className="hover:text-gray-300 transition-colors"
              >
              Descubre y Aprende
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/about" className="hover:text-gray-300 transition-colors">
              Sobre mi
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/contact">
              <span className="bg-[#FFA400] text-white px-3 py-1 rounded-md">
                Contacto
              </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
