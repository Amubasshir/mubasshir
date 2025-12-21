'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


import AnimatedButton from '@/components/AnimatedButton';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// --- Reusable Button Component (Matches your design) ---


const ProjectDetailHero3 = () => {
  const containerRef = useRef(null);

  // --- Scroll Parallax Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background Image Scale (Zoom in slightly on scroll)
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.9]);
  // Text Parallax (Moves up slightly)
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#111] font-sans z-10 rounded-b-[70px]">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ scale: scaleImage }}
          className="w-full h-full relative"
        >
          {/* Image: White Sweatshirt with Shadow (Unsplash match) */}
          <img 
            src="https://framerusercontent.com/images/JOqvhPEZu18F6qYfiLZFYW4RiBo.png?scale-down-to=1024" 
            alt="Orange Blox Project" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay (for text readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </motion.div>
      </div>

      {/* --- NAVBAR --- */}
      <Navbar></Navbar>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        style={{ y: yText }}
        className="absolute bottom-0 w-full z-20 px-6 md:px-12  md:pb-16 text-white"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col justify-end h-full">
          
          {/* Title Section */}
          <div className=" md:mb-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff5500] font-bold text-xl mb-2"
            >
              2023
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-none tracking-tighter"
            >
              Orange Blox
            </motion.h1>
          </div>

          {/* Bottom Grid: Details & CTA */}
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8">
            
            {/* Project Details */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 w-full md:w-auto mb-8 md:mb-0">
              
              {/* Col 1 */}
              <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              >
                <h4 className="text-[#ff5500] font-bold text-sm mb-1"># Client</h4>
                <p className="text-lg font-medium">Supablox</p>
              </motion.div>

              {/* Col 2 */}
              <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <h4 className="text-[#ff5500] font-bold text-sm mb-1"># Category</h4>
                <p className="text-lg font-medium">UI</p>
              </motion.div>

              {/* Col 3 */}
              <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              >
                <h4 className="text-[#ff5500] font-bold text-sm mb-1"># Year</h4>
                <p className="text-lg font-medium">2023</p>
              </motion.div>

            </div>

            {/* Bottom Right CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.7 }}
            >
              <Link href="/Contacts">
               <AnimatedButton 
            text="Get in touch" 
            width="160px"
            />
              </Link>
            </motion.div>

          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default ProjectDetailHero3;