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

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-20 transition-all duration-300    ${
      isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className={`mx-auto transition-all duration-300 ${
        isScrolled ? 'max-w-4xl' : 'max-w-7xl'
      }`}>
        <div className={`mx-auto transition-all duration-300 ${
          isScrolled ? 'bg-black/80' : 'bg-transparent'
        } backdrop-blur-[5px] m-2 rounded-3xl border border-white/10`}>
          <nav className="px-6 py-3">
            <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
                <img 
                  src={Image} 
                  alt="Aurevia.io Logo" 
                  className="h-8 w-auto"
                />
              </button>
              
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
                <li><button onClick={() => scrollToSection('features')} className="text-gray-500 hover:text-white transition-colors font-inter">Features</button></li>
                <li><button onClick={() => scrollToSection('product')} className="text-gray-500 hover:text-white transition-colors font-inter">Product</button></li>
                <li><button onClick={() => scrollToSection('action')} className="text-gray-500 hover:text-white transition-colors font-inter">Action</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-500 hover:text-white transition-colors font-inter">Pricing</button></li>
                <li>
                  <button 
                    onClick={() => scrollToSection('book')}
                    className="bg-gradient-to-r from-[#FFA861]/20 via-[#C78BC1]/20 to-[#7B6BE6]/20 text-gray-200 font-inter px-6 py-2 rounded-full hover:bg-orange/20 font-inter transition-colors backdrop-blur-sm border border-white/25"
                  >
                    Book a Call
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="pt-4 pb-3 space-y-3">
                <li><button onClick={() => scrollToSection('features')} className="block py-2 text-gray-300 hover:text-white">Features</button></li>
                <li><button onClick={() => scrollToSection('product')} className="block py-2 text-gray-300 hover:text-white">Product</button></li>
                <li><button onClick={() => scrollToSection('action')} className="block py-2 text-gray-300 hover:text-white">Action</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="block py-2 text-gray-300 hover:text-white">Pricing</button></li>
                <li>
                  <button 
                    onClick={() => scrollToSection('book')}
                    className="inline-block bg-black/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/90"
                  >
                    Book a Call
                  </button>
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