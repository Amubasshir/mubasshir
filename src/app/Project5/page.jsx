
import Footer from '@/components/Footer';
import BrandHeroDetails5 from '@/Project5/BrandHeroDetails5';
import ChallengeSection5 from '@/Project5/ChallengeSection5';
import DescriptionSection5 from '@/Project5/DescriptionSection5';
import FAQSection5 from '@/Project5/FAQSection5';
import GoalSection5 from '@/Project5/GoalSection5';
import ProjectDetailHero5 from '@/Project5/ProjectDetailHero5';
import ProjectsDetails5 from '@/Project5/ProjectsDetails5';
import ResultSection5 from '@/Project5/ResultSection5';
import React from 'react';


const ProjectDetailsPage = () => {
  return (
    <main>
      <ProjectDetailHero5 />
      <DescriptionSection5/>
      <ChallengeSection5 />
      <GoalSection5/>
      <ResultSection5 />
      <ProjectsDetails5 />
      <BrandHeroDetails5 />
      <FAQSection5 />
      <Footer/>
     
    </main>
  );
};


export default ProjectDetailsPage;