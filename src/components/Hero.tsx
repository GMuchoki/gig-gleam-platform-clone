
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gigblue to-gigblue-light text-white min-h-[500px] py-20 px-6">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Earn On Your Terms</h1>
          <p className="text-lg mb-8 opacity-90">
            Discover hundreds of <span className="text-orange-400 font-semibold">flexible gigs</span> and start earning whenever and wherever you want. We've curated a list of the best companies offering gig work opportunities, so you can start making money today. No more waiting...
          </p>
          
          <div className="flex max-w-xl mx-auto mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search for your next gig..." 
                className="pl-10 py-6 rounded-l-lg bg-white text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
              />
            </div>
            <Button className="rounded-r-lg bg-orange-500 hover:bg-orange-600 px-6">SEARCH</Button>
          </div>
          
          <div className="text-sm opacity-80 flex justify-center items-center gap-2">
            Or explore our categories <span className="text-xl">→</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <div className="hero-wave"></div>
      </div>
      
      <div className="hidden sm:block absolute top-24 left-10 w-3 h-3 bg-yellow-300 rounded-full animate-wave"></div>
      <div className="hidden sm:block absolute top-40 right-24 w-2 h-2 bg-yellow-300 rounded-full animate-wave" style={{animationDelay: '0.5s'}}></div>
      <div className="hidden sm:block absolute bottom-48 left-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-wave" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
