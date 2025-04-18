
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GigSection from '@/components/GigSection';

// Mock data for gig categories
const gigSections = [
  {
    title: "Train the next generation of AI",
    isNew: true,
    gigs: [
      {
        logo: "https://placehold.co/100x50/333/fff?text=Scale+AI",
        company: "Scale AI",
        description: "Help train AI models with high-quality data annotation",
        rating: 4.7,
        reviews: 1254,
        isNew: true
      },
      {
        logo: "https://placehold.co/100x50/333/fff?text=DataAnno",
        company: "Data Annotation Inc",
        description: "Work from the comfort of your home",
        rating: 4.2,
        reviews: 875
      },
      {
        logo: "https://placehold.co/100x50/333/fff?text=Mighty+AI",
        company: "Mighty AI",
        description: "Flexible hours, competitive pay, remote opportunities",
        rating: 4.5,
        reviews: 632
      }
    ]
  },
  {
    title: "Deliver food, groceries and more",
    gigs: [
      {
        logo: "https://placehold.co/100x50/fff/f00?text=DoorDash",
        company: "DoorDash",
        description: "Deliver food from local restaurants to hungry customers",
        rating: 4.0,
        reviews: 2489
      },
      {
        logo: "https://placehold.co/100x50/fff/00f?text=Postmates",
        company: "Postmates",
        description: "Deliver anything from anywhere anytime",
        rating: 3.9,
        reviews: 1879
      },
      {
        logo: "https://placehold.co/100x50/0f0/fff?text=Uber+Eats",
        company: "Uber Eats",
        description: "Partner with the largest food delivery network",
        rating: 4.1,
        reviews: 3562
      }
    ]
  },
  {
    title: "Complete small tasks for pay",
    gigs: [
      {
        logo: "https://placehold.co/100x50/f80/fff?text=Swagbly",
        company: "Swagbly",
        description: "Earn cash & gift cards for activities you already do online",
        rating: 4.5,
        reviews: 5238,
        isNew: true
      },
      {
        logo: "https://placehold.co/100x50/fff/000?text=Clickworker",
        company: "Clickworker",
        description: "Complete microtasks whenever it's convenient for you",
        rating: 4.2,
        reviews: 1976
      },
      {
        logo: "https://placehold.co/100x50/000/f90?text=Amazon+Mech",
        company: "Amazon Mech",
        description: "Complete simple tasks that require human intelligence",
        rating: 3.8,
        reviews: 8742
      }
    ]
  },
  {
    title: "Contribute to research studies & focus groups",
    gigs: [
      {
        logo: "https://placehold.co/100x50/06f/fff?text=Respondent",
        company: "Respondent",
        description: "Participate in high-paying research interviews",
        rating: 4.8,
        reviews: 724
      },
      {
        logo: "https://placehold.co/100x50/06f/fff?text=TestableMinds",
        company: "Testable Minds",
        description: "Contribute to academic research and get compensated",
        rating: 4.3,
        reviews: 512
      },
      {
        logo: "https://placehold.co/100x50/06f/fff?text=Prolific",
        company: "Prolific",
        description: "Connect researchers with reliable participants worldwide",
        rating: 4.7,
        reviews: 1891
      }
    ]
  },
  {
    title: "Offer your skills to help others",
    gigs: [
      {
        logo: "https://placehold.co/100x50/fff/06f?text=FlexJobs",
        company: "FlexJobs",
        description: "Find legitimate flexible and remote job opportunities",
        rating: 4.6,
        reviews: 2341
      },
      {
        logo: "https://placehold.co/100x50/28a745/fff?text=Fiverr",
        company: "Fiverr",
        description: "Offer services starting at $5 to clients worldwide",
        rating: 4.2,
        reviews: 9876
      },
      {
        logo: "https://placehold.co/100x50/17a2b8/fff?text=Quack",
        company: "Quack",
        description: "Find quick gig work that fits your schedule",
        rating: 4.0,
        reviews: 587
      }
    ]
  },
  {
    title: "Get paid to share your opinion",
    gigs: [
      {
        logo: "https://placehold.co/100x50/0f9/000?text=FreeCash",
        company: "FreeCash",
        description: "Take surveys and offers for cash and gift cards",
        rating: 4.4,
        reviews: 3254
      },
      {
        logo: "https://placehold.co/100x50/09f/fff?text=Earnably",
        company: "Earnably",
        description: "Complete surveys, offers, and videos for rewards",
        rating: 4.1,
        reviews: 1834
      },
      {
        logo: "https://placehold.co/100x50/09f/fff?text=SurveyJunkie",
        company: "SurveyJunkie",
        description: "Get paid for every survey you complete",
        rating: 4.3,
        reviews: 7621
      }
    ]
  },
  {
    title: "Test websites and apps",
    gigs: [
      {
        logo: "https://placehold.co/100x50/000/fff?text=UserBrain",
        company: "UserBrain",
        description: "Test websites and apps and share your thoughts",
        rating: 4.6,
        reviews: 743
      },
      {
        logo: "https://placehold.co/100x50/b300b3/fff?text=TryBer",
        company: "TryBer",
        description: "Test software and websites and get paid for your feedback",
        rating: 4.3,
        reviews: 895
      },
      {
        logo: "https://placehold.co/100x50/0dc/fff?text=Loop11",
        company: "Loop11",
        description: "Usability testing for websites and digital products",
        rating: 4.2,
        reviews: 461
      }
    ]
  },
  {
    title: "Teach & mentor students",
    gigs: [
      {
        logo: "https://placehold.co/100x50/ee0979/fff?text=iTutor",
        company: "iTutor",
        description: "Teach English online to students around the world",
        rating: 4.7,
        reviews: 1285
      },
      {
        logo: "https://placehold.co/100x50/ff8c00/fff?text=Cambly",
        company: "Cambly",
        description: "Casual English tutoring with flexible hours",
        rating: 4.5,
        reviews: 2164
      },
      {
        logo: "https://placehold.co/100x50/00ab66/fff?text=VIPTeacher",
        company: "VIPTeacher",
        description: "Become a VIP Teacher and earn premium rates",
        rating: 4.8,
        reviews: 753
      }
    ]
  },
  {
    title: "Get paid to write and edit content",
    gigs: [
      {
        logo: "https://placehold.co/100x50/ff6347/fff?text=TextBroker",
        company: "TextBroker",
        description: "Write quality content for websites and businesses",
        rating: 4.2,
        reviews: 1976
      },
      {
        logo: "https://placehold.co/100x50/ffcc00/fff?text=GoTranscript",
        company: "GoTranscript",
        description: "Transcribe audio and video files for pay",
        rating: 3.9,
        reviews: 1246
      },
      {
        logo: "https://placehold.co/100x50/fff/000?text=Writer",
        company: "Writer.io",
        description: "Get paid to write high-quality articles and blog posts",
        rating: 4.6,
        reviews: 842
      }
    ]
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gigdark">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl font-bold mb-2">Latest Featured <span className="text-orange-400">Gigs</span></h2>
          <p className="text-gray-400">Check out the best gig opportunities from top flexible work companies. Find the perfect gig that fits your schedule.</p>
        </div>
        
        {gigSections.map((section, idx) => (
          <GigSection 
            key={idx}
            title={section.title} 
            isNew={section.isNew}
            gigs={section.gigs} 
          />
        ))}
      </div>
      
      <footer className="bg-black py-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} GigFish. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
