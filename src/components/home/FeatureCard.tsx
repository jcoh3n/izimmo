
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-izimmo-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-izimmo-blue-500 mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-izimmo-gray-800">{title}</h3>
      <p className="text-izimmo-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
