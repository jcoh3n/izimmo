
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
    <div className="bg-white rounded-lg p-6 border border-izimmo-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${color} h-12 w-12 rounded-full flex items-center justify-center text-white`}>
          <Icon size={24} />
        </div>
        <span className="text-5xl font-bold text-izimmo-gray-200">{id}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-izimmo-gray-800">{title}</h3>
      <p className="text-izimmo-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;
