import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center p-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 md:hidden shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button 
              onClick={toggleMenu} 
              className="p-2"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mb-auto">
            <Link 
              to="/" 
              className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors py-2 border-b border-izimmo-gray-100"
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/dashboard" 
              className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors py-2 border-b border-izimmo-gray-100"
              onClick={closeMenu}
            >
              Tableau de bord
            </Link>
            <Link 
              to="/artisans" 
              className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors py-2 border-b border-izimmo-gray-100"
              onClick={closeMenu}
            >
              Artisans
            </Link>
            <Link 
              to="/fonctionnement" 
              className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors py-2 border-b border-izimmo-gray-100"
              onClick={closeMenu}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/contact" 
              className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors py-2 border-b border-izimmo-gray-100"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-6">
            <Link to="/dashboard" onClick={closeMenu}>
              <Button className="w-full bg-izimmo-blue-500 hover:bg-izimmo-blue-600">
                Accéder au dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav; 