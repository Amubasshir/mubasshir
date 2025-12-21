import BrandHeroDetails from '@/components/BrandHeroDetails';
import ChallengeSection from '@/components/ChallengeSection';
import DescriptionSection from '@/components/DescriptionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import GoalSection from '@/components/GoalSection';
import ProjectDetailHero from '@/components/ProjectDetailHero';
import ProjectsDetails from '@/components/ProjectsDetails';
import ResultSection from '@/components/ResultSection';
import React from 'react';


const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailHero />
      <DescriptionSection/>
      <ChallengeSection />
      <GoalSection/>
      <ResultSection />
      <ProjectsDetails />
      <BrandHeroDetails />
      <FAQSection />
      <Footer/>
     
    </main>
  );
};


export default ProjectDetailsPage;