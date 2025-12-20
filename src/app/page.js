import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import PortfolioProcess from "@/components/PortfolioProcess";
import ProcessSection from "@/components/ProcessSection";
import Image from "next/image";


export default function Home() {
  return (
    <>
      
      <HeroSection />

      <ProcessSection></ProcessSection>
      <PortfolioProcess></PortfolioProcess>

        <About></About>
     
    </>
  );
}
