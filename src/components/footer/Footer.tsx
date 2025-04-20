import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/Logo';

const Footer = () => {
  return (
    <footer className="bg-izimmo-gray-800 text-izimmo-gray-200 pt-8 md:pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="mb-3 md:mb-4">
              <Logo />
            </div>
            <p className="text-izimmo-gray-400 text-sm md:text-base mb-4">
              La transparence au service de l'immobilier. Centralisez, suivez et partagez l'historique de vos biens.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-base md:text-lg mb-3 md:mb-4">Plateforme</h3>
            <ul className="space-y-2">
              <li><Link to="/fonctionnement" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Comment ça marche</Link></li>
              <li><Link to="/artisans" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Artisans certifiés</Link></li>
              <li><Link to="/tarifs" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Tarifs</Link></li>
              <li><Link to="/faq" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-base md:text-lg mb-3 md:mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Blog</Link></li>
              <li><Link to="/guide" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Guide d'utilisation</Link></li>
              <li><Link to="/webinars" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Webinars</Link></li>
              <li><Link to="/partenaires" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Partenaires</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-base md:text-lg mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Nous contacter</Link></li>
              <li><Link to="/support" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">Support</Link></li>
              <li><a href="mailto:contact@izimmo.fr" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base">contact@izimmo.fr</a></li>
              <li><a href="tel:+33123456789" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm md:text-base touch-target inline-flex items-center">+33 1 23 45 67 89</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-izimmo-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-izimmo-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Iz'Immo. Tous droits réservés.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/cgu" className="text-izimmo-gray-400 hover:text-white transition-colors text-xs md:text-sm">CGU</Link>
            <Link to="/privacy" className="text-izimmo-gray-400 hover:text-white transition-colors text-xs md:text-sm">Confidentialité</Link>
            <Link to="/legal" className="text-izimmo-gray-400 hover:text-white transition-colors text-xs md:text-sm">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
