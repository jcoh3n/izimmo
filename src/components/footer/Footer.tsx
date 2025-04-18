
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/Logo';

const Footer = () => {
  return (
    <footer className="bg-izimmo-gray-800 text-izimmo-gray-200 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-izimmo-gray-400 mb-4">
              La transparence au service de l'immobilier. Centralisez, suivez et partagez l'historique de vos biens.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Plateforme</h3>
            <ul className="space-y-2">
              <li><Link to="/fonctionnement" className="text-izimmo-gray-400 hover:text-white transition-colors">Comment ça marche</Link></li>
              <li><Link to="/artisans" className="text-izimmo-gray-400 hover:text-white transition-colors">Artisans certifiés</Link></li>
              <li><Link to="/tarifs" className="text-izimmo-gray-400 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link to="/faq" className="text-izimmo-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-izimmo-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/guide" className="text-izimmo-gray-400 hover:text-white transition-colors">Guide d'utilisation</Link></li>
              <li><Link to="/webinars" className="text-izimmo-gray-400 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link to="/partenaires" className="text-izimmo-gray-400 hover:text-white transition-colors">Partenaires</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-izimmo-gray-400 hover:text-white transition-colors">Nous contacter</Link></li>
              <li><Link to="/support" className="text-izimmo-gray-400 hover:text-white transition-colors">Support</Link></li>
              <li><a href="mailto:contact@izimmo.fr" className="text-izimmo-gray-400 hover:text-white transition-colors">contact@izimmo.fr</a></li>
              <li><a href="tel:+33123456789" className="text-izimmo-gray-400 hover:text-white transition-colors">+33 1 23 45 67 89</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-izimmo-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-izimmo-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Iz'Immo. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/cgu" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm">CGU</Link>
            <Link to="/privacy" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm">Confidentialité</Link>
            <Link to="/legal" className="text-izimmo-gray-400 hover:text-white transition-colors text-sm">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
