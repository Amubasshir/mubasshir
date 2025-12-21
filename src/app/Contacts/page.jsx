
import React from 'react';


import BrandHeroContacts from '@/components/BrandHeroContacts';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactSection from '@/components/ContactSection';


const ContactsPage = () => {
  return (
    <main>
    
      <ContactHero/>
      <ContactSection/>
      <BrandHeroContacts />
      <FAQSection />
      <Footer/>
    </main>
  );
};


export default ContactsPage;