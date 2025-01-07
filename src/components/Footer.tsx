import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:contact@amberm.dev" className="flex items-center gap-2 text-gray-400 hover:text-[#0ff] transition-colors">
                <Mail size={16} />
                contact@amberm.dev
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                San Francisco, CA
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-[#0ff] transition-colors">Home</Link>
              <Link to="/projects" className="block text-gray-400 hover:text-[#0ff] transition-colors">Projects</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-[#0ff] transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-4">
              Have a project in mind? Let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 border border-[#0ff]/30 text-[#0ff] rounded-full
                       hover:bg-[#0ff]/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} amberm.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;