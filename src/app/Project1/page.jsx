
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BrandHeroDetails from '@/Project1/BrandHeroDetails';
import ChallengeSection from '@/Project1/ChallengeSection';
import DescriptionSection from '@/Project1/DescriptionSection';
import GoalSection from '@/Project1/GoalSection';
import ProjectDetailHero from '@/Project1/ProjectDetailHero';
import ProjectsDetails from '@/Project1/ProjectsDetails';
import ResultSection from '@/Project1/ResultSection';
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