
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    type: string;
    size: string;
    lastUpdate: string;
    image: string;
    interventions: number;
    sharedWith: number;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white border border-izimmo-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 h-full">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-40 md:h-full object-cover"
          />
        </div>
        
        <div className="flex-1 p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="border-izimmo-blue-200 text-izimmo-blue-600 font-normal text-xs">
                  {property.type}
                </Badge>
                <Badge variant="outline" className="border-izimmo-gray-200 text-izimmo-gray-600 font-normal text-xs">
                  {property.size}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-izimmo-gray-800">{property.title}</h3>
              
              <div className="flex items-center gap-1 text-izimmo-gray-600 text-sm mt-1">
                <MapPin size={14} />
                <span>{property.address}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
              <div className="flex items-center gap-4 text-izimmo-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>Mise à jour le {property.lastUpdate}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-izimmo-gray-600 text-sm mt-1">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>Partagé avec {property.sharedWith} utilisateurs</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-izimmo-gray-200">
            <div className="text-izimmo-gray-600 flex items-center gap-1">
              <span className="text-2xl font-semibold text-izimmo-blue-600">{property.interventions}</span>
              <span>interventions</span>
            </div>
            
            <div className="flex gap-3">
              <Link to={`/property/${property.id}`}>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <span>Voir la fiche</span>
                  <ChevronRight size={16} />
                </Button>
              </Link>
              <Link to={`/property/${property.id}/add-intervention`}>
                <Button size="sm" className="bg-izimmo-blue-500 hover:bg-izimmo-blue-600">
                  Ajouter une intervention
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
