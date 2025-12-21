
import Footer from '@/components/Footer';
import DreamBrandHeroDetails from '@/DreamArea/DreamBrandHeroDetails';
import DreamChallengeSection from '@/DreamArea/DreamChallengeSection';
import DreamDescriptionSection from '@/DreamArea/DreamDescriptionSection';
import DreamFAQSection from '@/DreamArea/DreamFAQSection';
import DreamGoalSection from '@/DreamArea/DreamGoalSection';
import DreamProjectDetailHero from '@/DreamArea/DreamProjectDetailHero';
import DreamProjectsDetails from '@/DreamArea/DreamProjectsDetails';
import DreamResultSection from '@/DreamArea/DreamResultSection';
import React from 'react';


const DreamProjectDetailsPage = () => {
  return (
    <main>
      <DreamProjectDetailHero />
      <DreamDescriptionSection/>
      <DreamChallengeSection />
      <DreamGoalSection/>
      <DreamResultSection />
      <DreamProjectsDetails />
      <DreamBrandHeroDetails />
      <DreamFAQSection />
      <Footer/>
     
    </main>
  );
};


export default DreamProjectDetailsPage;