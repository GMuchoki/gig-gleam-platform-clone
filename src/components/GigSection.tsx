
import React from 'react';
import GigCard from './GigCard';

interface GigSectionProps {
  title: string;
  isNew?: boolean;
  gigs: {
    logo: string;
    company: string;
    description: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
  }[];
}

const GigSection: React.FC<GigSectionProps> = ({ title, isNew = false, gigs }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        {isNew && (
          <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded uppercase">
            NEW
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gigs.map((gig, idx) => (
          <GigCard key={idx} {...gig} />
        ))}
      </div>
    </div>
  );
};

export default GigSection;
