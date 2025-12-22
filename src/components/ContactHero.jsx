'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import Link from 'next/link';
import Navbar from './Navbar';

const ContactHero = () => {
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
      className="relative w-full h-screen overflow-hidden  z-20"
    >
      
      {/* --- BACKGROUND IMAGE WITH ZOOM ANIMATION --- */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden rounded-b-[70px]">
        <motion.div 
          style={{ scale }}
          className="w-full h-full "
        >
          <img 
            src="https://framerusercontent.com/images/biQoRVvtse3PPRVfJ6WKcQiDyg.png?scale-down-to=1024" 
            alt="Motocross Rider" 
            className="w-full h-full object-cover "
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-teal-500/20 mix-blend-overlay" />
        </motion.div>
      </div>


      {/* --- HERO CONTENT (FIXED POSITION, NO SCROLL MOVEMENT) --- */}
     <div className="absolute bottom-0 w-full z-10 px-6 md:px-12 pb-12 md:pb-20 text-white">
  <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
    
    {/* Left Side: Big Title */}
    <div className="w-full lg:w-1/2">
      <h4 className="text-[#ff5500] font-bold text-xl md:text-[30px] mb-2 tracking-wide">
        Get in touch
      </h4>
      <h1 className="text-6xl sm:text-8xl md:text-[120px] leading-[0.9] font-bold tracking-tighter">
        Contact
      </h1>
    </div>

    {/* Right Side: Description */}
    <div className="w-full lg:w-1/2 flex flex-col lg:items-end">
      <div className="max-w-md">
        <h3 className="text-xl md:text-[30px] font-semibold mb-4 md:mb-6 leading-tight">
          Let’s build something great together—start the conversation today.
        </h3>
        
      </div>
    </div>

  </div>
</div>
    </motion.div>
  );
};



export default ContactHero;