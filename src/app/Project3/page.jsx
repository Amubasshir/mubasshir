

import Footer from '@/components/Footer';
import BrandHeroDetails3 from '@/Project3/BrandHeroDetails3';
import ChallengeSection3 from '@/Project3/ChallengeSection3';
import DescriptionSection3 from '@/Project3/DescriptionSection3';
import FAQSection3 from '@/Project3/FAQSection3';
import GoalSection3 from '@/Project3/GoalSection3';
import ProjectDetailHero3 from '@/Project3/ProjectDetailHero3';
import ProjectsDetails3 from '@/Project3/ProjectsDetails3';
import ResultSection3 from '@/Project3/ResultSection3';
import React from 'react';


const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailHero3 />
      <DescriptionSection3/>
      <ChallengeSection3 />
      <GoalSection3/>
      <ResultSection3 />
      <ProjectsDetails3 />
      <BrandHeroDetails3 />
      <FAQSection3 />
      <Footer/>
     
    </main>
  );
};


export default ProjectDetailsPage;