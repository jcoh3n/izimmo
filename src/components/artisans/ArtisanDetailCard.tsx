import React from 'react';
import { Star, MapPin, BriefcaseBusiness, Clock, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ArtisanDetailCardProps {
  artisan: {
    id: number;
    name: string;
    specialty: string;
    location: string;
    rating: number;
    completedJobs: number;
    description: string;
    certifications: string[];
    imgSrc: string;
  };
}

const ArtisanDetailCard = ({ artisan }: ArtisanDetailCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-izimmo-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex justify-center md:justify-start md:w-40 flex-shrink-0">
          <img 
            src={artisan.imgSrc} 
            alt={artisan.name}
            className="w-32 h-32 md:w-full md:h-40 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-3 md:mb-4">
            <div>
              <h2 className="text-xl font-semibold text-izimmo-gray-800 text-center md:text-left">{artisan.name}</h2>
              <div className="flex flex-col sm:flex-row items-center sm:gap-4 mt-1 justify-center md:justify-start">
                <div className="text-izimmo-blue-600 font-medium">{artisan.specialty}</div>
                <div className="flex items-center gap-1 text-izimmo-gray-600 mt-1 sm:mt-0">
                  <MapPin size={16} />
                  <span>{artisan.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-2 md:mt-0 justify-center md:justify-start">
              <div className="bg-izimmo-blue-50 text-izimmo-blue-700 font-semibold rounded-md px-3 py-1 flex items-center gap-1">
                <Star className="fill-izimmo-blue-500" size={16} />
                <span>{artisan.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <p className="text-izimmo-gray-600 mb-4 text-sm md:text-base">
            {artisan.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4 md:mb-5 justify-center md:justify-start">
            {artisan.certifications.map((certification, index) => (
              <Badge key={index} variant="outline" className="border-izimmo-blue-200 text-izimmo-blue-700">
                <Award size={14} className="mr-1" />
                {certification}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-izimmo-gray-100 pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-izimmo-gray-600 mb-4 md:mb-0">
              <div className="flex items-center gap-1">
                <BriefcaseBusiness size={18} />
                <span>{artisan.completedJobs} projets réalisés</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={18} />
                <span>Depuis 2019</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link to={`/artisans/${artisan.id}`} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full touch-target h-10 flex items-center justify-center gap-2">
                  <span>Voir le profil</span>
                  <ChevronRight size={16} />
                </Button>
              </Link>
              <Link to={`/contact/${artisan.id}`} className="w-full sm:w-auto">
                <Button className="w-full touch-target h-10 bg-izimmo-blue-500 hover:bg-izimmo-blue-600">
                  Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDetailCard;
