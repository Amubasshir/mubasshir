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

// এই লাইনটি অবশ্যই থাকতে হবে, অন্যথায় "Default export not found" এরর আসবে
export default ProjectsPage;