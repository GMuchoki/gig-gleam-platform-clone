
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gigblue py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="text-white text-2xl font-bold">Gig<span className="text-orange-400">Fish</span></span>
        </a>
      </div>
      <div>
        <Button variant="outline" className="bg-white hover:bg-gray-100 text-gigblue border-none font-semibold">
          POST A JOBBOARD
        </Button>
      </div>
    </header>
  );
};

export default Header;
