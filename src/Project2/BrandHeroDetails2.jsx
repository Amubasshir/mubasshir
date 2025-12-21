'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import Link from 'next/link';


const BrandHeroDetails2 = () => {
  const containerRef = useRef(null);

  // --- Scroll Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  // ১. ইমেজ যখন নিচ থেকে আসবে তখন একটু জুম ইন থেকে জুম আউট হবে
  const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]); 
  
  // ২. টেক্সট নিচ থেকে ওপরে ভেসে উঠবে
  const yText = useTransform(scrollYProgress, [0, 0.5], [150, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    /* ১. এখানে 'sticky top-0' এবং '-z-10' দেওয়া হয়েছে। 
      ২. এর ফলে ওপরের সেকশনটি যখন শেষ হবে, তখন এটি নিচ থেকে স্থিরভাবে বেরিয়ে আসবে।
    */
    <div 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden -mt-20 bg-[#050505]"
    >
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <motion.div 
        style={{ 
          scale: scaleImage
        }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img 
          src="https://framerusercontent.com/images/elLOZyvvu6OMXXr3qe1u4DI5jn4.png?scale-down-to=1024" 
          alt="Brand Model" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pt-20"
      >
        {/* Orange Tag */}
        <h4 className="text-[#ff5500] text-lg md:text-[30px] font-bold tracking-wide mb-4">
          Start Your Brand
        </h4>

        {/* Main Headline */}
        <h1 className="text-[35px] md:text-[50px] lg:text-[70px] font-bold text-white mb-6 leading-tight select-text drop-shadow-2xl">
          Let’s Bring Your <br /> Brand to Life
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm md:text-lg max-w-xl mx-auto mb-10 select-text font-medium leading-relaxed">
          Ready to make something amazing together? Whether you're starting fresh or evolving your brand, I'm here to help.
        </p>

        {/* CTA Button */}
        <Link href="/Contacts" className="relative z-30">
          <AnimatedButton
            text="Get in touch" 
            width="180px" 
            className="cursor-pointer"
          />
        </Link>
      </motion.div>

    </div>
  );
};

export default BrandHeroDetails2;