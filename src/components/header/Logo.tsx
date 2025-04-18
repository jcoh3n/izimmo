
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-izimmo-blue-700">
        Iz'<span className="text-izimmo-blue-500">Immo</span>
      </span>
    </Link>
  );
};

export default Logo;
