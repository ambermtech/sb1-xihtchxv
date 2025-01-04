import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl tracking-tight hover:text-[#0ff] transition-colors duration-300">
            amberm<span className="text-[#0ff]/80">.tech</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link
              to="/"
              className="relative text-gray-300 hover:text-[#0ff] transition-colors duration-300 text-sm font-medium
                        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px]
                        after:bg-[#0ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative text-gray-300 hover:text-[#0ff] transition-colors duration-300 text-sm font-medium
                        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px]
                        after:bg-[#0ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="relative text-gray-300 hover:text-[#0ff] transition-colors duration-300 text-sm font-medium
                        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px]
                        after:bg-[#0ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-300 hover:text-[#0ff] transition-colors duration-300 text-sm font-medium
                        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px]
                        after:bg-[#0ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </div>
          
          <button className="sm:hidden text-gray-300 hover:text-[#0ff] transition-colors duration-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;