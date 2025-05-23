import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Iconos de hamburguesa y cerrar

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
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
      } `}
    >
      <div className="container mx-auto px-6 py-4 flex justify-end items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* <span className="text-lg font-bold">MiLogo</span> */}
        </Link>

      
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación */}
        <nav>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-gray-800 md:static md:flex md:space-x-6 md:bg-transparent ${currentUrl === "/" ? "text-white" : "text-[#003674]"}`}
          >
            <li className="font-bold">
              <Link to="/" className="block px-4 py-2 md:inline hover:text-gray-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/blog" className="block px-4 py-2 md:inline hover:text-gray-300 transition-colors">
                Blog
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/discover-and-learn" className="block px-4 py-2 md:inline hover:text-gray-300 transition-colors">
                Descubre y Aprende
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/about" className="block px-4 py-2 md:inline hover:text-gray-300 transition-colors">
                Sobre mí
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/contact" className="block px-4 py-2 md:inline">
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
