
import React from 'react';
import { Star } from 'lucide-react';

interface GigCardProps {
  logo: string;
  company: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

const GigCard: React.FC<GigCardProps> = ({ logo, company, description, rating, reviews, isNew = false }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-xl overflow-hidden relative">
      {isNew && <span className="new-badge">NEW</span>}
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <img src={logo} alt={company} className="h-12 w-auto" />
        </div>
        <h3 className="text-white font-medium text-lg mb-1">{company}</h3>
        <p className="text-gray-400 text-sm mb-3 h-12 overflow-hidden">{description}</p>
        <div className="rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < Math.floor(rating) ? "currentColor" : "none"} 
              />
            ))}
          </div>
          <span className="text-yellow-400">{rating.toFixed(1)}</span>
          <span className="dot mx-1"></span>
          <span className="text-gray-400">{reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
