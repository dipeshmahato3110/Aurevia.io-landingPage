import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300    ${
      isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className={`mx-auto transition-all duration-300 ${
        isScrolled ? 'max-w-5xl' : 'max-w-7xl'
      }`}>
        <div className={`mx-auto transition-all duration-300 ${
          isScrolled ? 'bg-black/80' : 'bg-transparent'
        } backdrop-blur-[10px] m-5 rounded-3xl border border-white/10`}>
          <nav className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img 
                  src={Image} 
                  alt="Aurevia.io Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop menu */}
              <ul className="hidden md:flex items-center gap-8">
                <li><Link to="#features" className="text-gray-500 hover:text-white transition-colors font-inter">Features</Link></li>
                <li><Link to="#product" className="text-gray-500 hover:text-white transition-colors font-inter">Product</Link></li>
                <li><Link to="#action" className="text-gray-500 hover:text-white transition-colors font-inter">Action</Link></li>
                <li><Link to="#pricing" className="text-gray-500 hover:text-white transition-colors font-inter">Pricing</Link></li>
                <li>
                  <Link 
                    to="#book" 
                    className="bg-black/10 text-white font-inter px-6 py-2 rounded-full hover:bg-black/20 transition-colors backdrop-blur-sm border border-white/10"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="pt-4 pb-3 space-y-3">
                <li><Link to="#features" className="block py-2 text-gray-300 hover:text-white">Features</Link></li>
                <li><Link to="#product" className="block py-2 text-gray-300 hover:text-white">Product</Link></li>
                <li><Link to="#action" className="block py-2 text-gray-300 hover:text-white">Action</Link></li>
                <li><Link to="#pricing" className="block py-2 text-gray-300 hover:text-white">Pricing</Link></li>
                <li>
                  <Link 
                    to="#book" 
                    className="inline-block bg-black/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                  >
                    
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;