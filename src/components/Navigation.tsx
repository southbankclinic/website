
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-green-600 text-xl font-medium">
            the clinic<br />@ southbank
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === "/" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`${location.pathname === "/contact" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
            >
              Contact
            </Link>
            <Link 
              to="/practitioners" 
              className={`${location.pathname === "/practitioners" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
            >
              Practitioners
            </Link>
            <Link 
              to="/fees" 
              className={`${location.pathname === "/fees" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
            >
              Fees
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 z-50">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={`${location.pathname === "/" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`${location.pathname === "/contact" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/practitioners" 
              className={`${location.pathname === "/practitioners" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Practitioners
            </Link>
            <Link 
              to="/fees" 
              className={`${location.pathname === "/fees" ? "text-green-500" : "text-gray-600"} hover:text-green-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fees
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
