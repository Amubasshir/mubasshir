

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
// import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PortfolioGrid/>  */}
      <About></About>
    </>
  );
}
