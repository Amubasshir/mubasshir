'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import Link from 'next/link';

const ProjectHeroSection = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Scroll Animation Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Zoom Effect for Background Image only
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.9]);

  return (
    // FADE IN ANIMATION FOR FULL SECTION
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-[#111] "
    >
      
      {/* --- BACKGROUND IMAGE WITH ZOOM ANIMATION --- */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden rounded-b-[70px]">
        <motion.div 
          style={{ scale }}
          className="w-full h-full "
        >
          <img 
            src="https://framerusercontent.com/images/c9bQrXGGanXaAH6XnZU2N16W5N0.webp?scale-down-to=2048" 
            alt="Motocross Rider" 
            className="w-full h-full object-cover "
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-teal-500/20 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
        
        {/* Logo (Left Side) */}
        <Link href='/' className="text-2xl font-bold tracking-tight z-50">Folioblox

          <span className="text-black ml-2 ">®</span>
        </Link>

        {/* Right Side Container (Links + CTA) - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Links */}
          <div className="flex gap-8 text-[16px] font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
          </div>

          {/* CTA Button */}
           <AnimatedButton
        text="Get in touch" 
        width="180px" 
        className="mt-4">
        
        </AnimatedButton>
        </div>

        {/* --- MOBILE MENU BUTTON (HAMBURGER TO X ANIMATION) --- */}
        <button 
          className="lg:hidden z-50 p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-6 flex flex-col justify-between items-end">
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white block origin-center transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-3/4 h-0.5 bg-white block transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -10, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
              className="h-0.5 bg-white block origin-center transition-all"
            />
          </div>
        </button>

        {/* --- MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
            >
              <a href="#" className="text-2xl font-bold hover:text-orange-500">Home</a>
              <a href="#" className="text-2xl font-bold hover:text-orange-500">About</a>
              <a href="#" className="text-2xl font-bold hover:text-orange-500">Projects</a>
              <div className=" flex items-center gap-3 mt-4">
                <AnimatedButton
        text="Get in tuoch" 
        width="180px" 
        className="mt-4">
        
        </AnimatedButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO CONTENT (FIXED POSITION, NO SCROLL MOVEMENT) --- */}
     <div className="absolute bottom-0 w-full z-10 px-6 md:px-12 pb-12 md:pb-20 text-white">
  <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
    
    {/* Left Side: Big Title */}
    <div className="w-full lg:w-1/2">
      <h4 className="text-[#ff5500] font-bold text-xl md:text-[30px] mb-2 tracking-wide">
        Selected Work
      </h4>
      <h1 className="text-6xl sm:text-8xl md:text-[120px] leading-[0.9] font-bold tracking-tighter">
        Projects
      </h1>
    </div>

    {/* Right Side: Description */}
    <div className="w-full lg:w-1/2 flex flex-col lg:items-end">
      <div className="max-w-md">
        <h3 className="text-xl md:text-[30px] font-semibold mb-4 md:mb-6 leading-tight">
          Real brands, real results
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Take a closer look at how strategy and design come together to build brands that connect and endure.
        </p>
      </div>
    </div>

  </div>
</div>
    </motion.div>
  );
};

export default ProjectHeroSection;