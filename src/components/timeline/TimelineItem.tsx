
import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  ChevronDown,
  FileText,
  Image,
  MessageSquare,
  Star,
  Check,
  CircleDollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TimelineItemType } from '@/types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
  isLast: boolean;
}

const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Rénovation':
        return 'bg-blue-100 text-blue-800';
      case 'Plomberie':
        return 'bg-cyan-100 text-cyan-800';
      case 'Électricité':
        return 'bg-amber-100 text-amber-800';
      case 'Peinture':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={cn("timeline-item", { "border-transparent": isLast })}>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <span className="text-izimmo-gray-500 text-sm block md:hidden">
            {format(new Date(item.date), 'dd MMMM yyyy', { locale: fr })}
          </span>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-izimmo-gray-800">{item.title}</h3>
            <Badge className={cn("text-xs font-medium", getCategoryColor(item.category))}>
              {item.category}
            </Badge>
          </div>
          <p className="text-izimmo-gray-600 mb-3">{item.description}</p>
          
          {/* Actions row */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-izimmo-gray-600">
              <FileText size={16} />
              <span>{item.documents} documents</span>
            </div>
            
            {item.photos > 0 && (
              <div className="flex items-center gap-1 text-izimmo-gray-600">
                <Image size={16} />
                <span>{item.photos} photos</span>
              </div>
            )}
            
            {item.comments > 0 && (
              <div className="flex items-center gap-1 text-izimmo-gray-600">
                <MessageSquare size={16} />
                <span>{item.comments} commentaires</span>
              </div>
            )}
            
            {item.price && (
              <div className="flex items-center gap-1 text-izimmo-gray-600">
                <CircleDollarSign size={16} />
                <span>{item.price} €</span>
              </div>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-auto text-izimmo-blue-600 flex items-center gap-1 hover:bg-izimmo-blue-50"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? 'Réduire' : 'Détails'}</span>
              <ChevronDown size={16} className={cn("transition-transform", { "rotate-180": isExpanded })} />
            </Button>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-center text-right min-w-32">
          <span className="text-izimmo-gray-500 text-sm">
            {format(new Date(item.date), 'dd MMMM yyyy', { locale: fr })}
          </span>
          {item.warranty && (
            <div className="flex items-center gap-1 text-green-600 mt-1 text-sm">
              <Check size={14} />
              <span>Garantie {item.warranty} ans</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Expanded details */}
      {isExpanded && (
        <div className="mt-4 bg-izimmo-gray-50 p-4 rounded-lg border border-izimmo-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={item.artisan.avatar} 
              alt={item.artisan.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-izimmo-gray-800">{item.artisan.name}</p>
              <p className="text-izimmo-gray-600 text-sm">{item.artisan.specialty}</p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Star className="fill-yellow-400 stroke-yellow-400" size={16} />
              <span className="font-medium">{item.artisan.rating}</span>
            </div>
          </div>
          
          {item.additionalDetails && (
            <div className="mb-4">
              <h4 className="font-medium text-izimmo-gray-800 mb-2">Détails supplémentaires</h4>
              <p className="text-izimmo-gray-600">{item.additionalDetails}</p>
            </div>
          )}
          
          {item.materials && item.materials.length > 0 && (
            <div>
              <h4 className="font-medium text-izimmo-gray-800 mb-2">Matériaux utilisés</h4>
              <ul className="list-disc pl-5 text-izimmo-gray-600">
                {item.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
