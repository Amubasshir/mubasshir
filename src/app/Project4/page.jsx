
import Footer from '@/components/Footer';
import BrandHeroDetails4 from '@/Project4/BrandHeroDetails4';
import ChallengeSection4 from '@/Project4/ChallengeSection4';
import DescriptionSection4 from '@/Project4/DescriptionSection4';
import FAQSection4 from '@/Project4/FAQSection4';
import GoalSection4 from '@/Project4/GoalSection4';
import ProjectDetailHero4 from '@/Project4/ProjectDetailHero4';
import ProjectsDetails4 from '@/Project4/ProjectsDetails4';
import ResultSection4 from '@/Project4/ResultSection4';
import React from 'react';


const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailHero4 />
      <DescriptionSection4/>
      <ChallengeSection4 />
      <GoalSection4/>
      <ResultSection4 />
      <ProjectsDetails4 />
      <BrandHeroDetails4 />
      <FAQSection4 />
      <Footer/>
     
    </main>
  );
};


export default ProjectDetailsPage;