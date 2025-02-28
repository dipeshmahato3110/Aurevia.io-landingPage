import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Aurevia.io</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white"
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
            <li><Link to="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
            <li><Link to="#product" className="text-gray-400 hover:text-white transition-colors">Product</Link></li>
            <li><Link to="#action" className="text-gray-400 hover:text-white transition-colors">Action</Link></li>
            <li><Link to="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            <li>
              <Link 
                to="#book" 
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 pb-3 space-y-3">
            <li><Link to="#features" className="block py-2 text-gray-400 hover:text-white">Features</Link></li>
            <li><Link to="#product" className="block py-2 text-gray-400 hover:text-white">Product</Link></li>
            <li><Link to="#action" className="block py-2 text-gray-400 hover:text-white">Action</Link></li>
            <li><Link to="#pricing" className="block py-2 text-gray-400 hover:text-white">Pricing</Link></li>
            <li>
              <Link 
                to="#book" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;