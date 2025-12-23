
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import PortfolioProcess from "@/components/PortfolioProcess";
import ProcessSection from "@/components/ProcessSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import MeetYourGuides from "@/components/MeetYourGuides";
import Image from "next/image";
import Text from "@/components/text";



export default function Home() {
  return (
    <>
     
      <HeroSection />
      <ProcessSection/>
      <PortfolioProcess/>
      <TestimonialGrid />
      <MeetYourGuides />
   
      <Footer/>
     
     
    </>
  );
}
