
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-green-600 text-xl font-medium">
            the clinic<br />@ southbank
          </Link>
          
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
        </div>
      </div>
    </header>
  );
};

export default Navigation;
