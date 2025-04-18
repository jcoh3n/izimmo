
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="w-full py-4 border-b border-izimmo-gray-100 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/dashboard" className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors">
              Tableau de bord
            </Link>
            <Link to="/artisans" className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors">
              Artisans
            </Link>
            <Link to="/fonctionnement" className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors">
              Comment ça marche
            </Link>
            <Link to="/contact" className="text-izimmo-gray-700 hover:text-izimmo-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button className="bg-izimmo-blue-500 hover:bg-izimmo-blue-600">
              Accéder au dashboard
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
