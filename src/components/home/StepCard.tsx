import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const StepCard = ({ id, title, description, icon: Icon, color }: StepCardProps) => {
  return (
    <div className="bg-white rounded-lg p-5 md:p-6 border border-izimmo-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <div className={`${color} h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-white touch-target`}>
          <Icon size={20} className="md:size-5" />
        </div>
        <span className="text-4xl md:text-5xl font-bold text-izimmo-gray-200">{id}</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-izimmo-gray-800">{title}</h3>
      <p className="text-sm md:text-base text-izimmo-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;
