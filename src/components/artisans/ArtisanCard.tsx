
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArtisanCardProps {
  id: number;
  name: string;
  speciality: string;
  rating: number;
  completedJobs: number;
  imgSrc: string;
}

const ArtisanCard = ({ id, name, speciality, rating, completedJobs, imgSrc }: ArtisanCardProps) => {
  return (
    <Link to={`/artisans/${id}`}>
      <div className="bg-white rounded-lg border border-izimmo-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer hover:translate-y-[-4px]">
        <div className="relative">
          <img src={imgSrc} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center text-white gap-1">
              <Star className="fill-yellow-400 stroke-yellow-400" size={16} />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-izimmo-gray-800">{name}</h3>
          <p className="text-izimmo-blue-500 text-sm mb-2">{speciality}</p>
          <p className="text-izimmo-gray-500 text-sm">{completedJobs} interventions</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtisanCard;
