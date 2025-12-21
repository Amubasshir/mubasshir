import React from 'react';

import ProjectHeroSection from '@/components/ProjectHeroSection';
import ProjectSelectedWork from '@/components/ProjectSelectedWork';
import DreamArea from '@/components/DreamArea';
import BrandHero from '@/components/BrandHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <main>
    
      <ProjectHeroSection />
      <ProjectSelectedWork />
      <DreamArea/>
      <BrandHero />
      <FAQSection />
      <Footer></Footer>
    </main>
  );
};


export default ProjectsPage;