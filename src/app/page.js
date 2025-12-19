// import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import PortfolioProcess from "@/components/PortfolioProcess";
import ProcessSection from "@/components/ProcessSection";
import Image from "next/image";
// import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PortfolioGrid/>  */}
      {/* <About></About> */}
      <ProcessSection></ProcessSection>
      <PortfolioProcess></PortfolioProcess>
    </>
  );
}
