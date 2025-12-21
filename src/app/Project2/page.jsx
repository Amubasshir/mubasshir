
import Footer from '@/components/Footer';
import BrandHeroDetails2 from '@/Project2/BrandHeroDetails2';
import ChallengeSection2 from '@/Project2/ChallengeSection2';
import DescriptionSection2 from '@/Project2/DescriptionSection2';
import FAQSection2 from '@/Project2/FAQSection2';

import GoalSection2 from '@/Project2/GoalSection2';
import ProjectDetailHero2 from '@/Project2/ProjectDetailHero2';
import ProjectsDetails2 from '@/Project2/ProjectsDetails2';
import ResultSection2 from '@/Project2/ResultSection2';
import React from 'react';


const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailHero2 />
      <DescriptionSection2/>
      <ChallengeSection2 />
      <GoalSection2/>
      <ResultSection2 />
      <ProjectsDetails2 />
      <BrandHeroDetails2 />
      <FAQSection2 />
      <Footer/>
     
    </main>
  );
};


export default ProjectDetailsPage;