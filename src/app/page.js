
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetYourGuides from "@/components/MeetYourGuides";
import PortfolioProcess from "@/components/PortfolioProcess";
import ProcessSection from "@/components/ProcessSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import Image from "next/image";



export default function Home() {
  return (
    <>
     
      <HeroSection />
      <ProcessSection></ProcessSection>
      <PortfolioProcess></PortfolioProcess>
      <TestimonialGrid />
         <MeetYourGuides></MeetYourGuides>
      <Footer></Footer>
     
     
    </>
  );
}
