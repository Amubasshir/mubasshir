'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative w-full h-screen bg-[#0f0f0f] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-gray-300 font-oswald">
      {/* 1. GRAIN / NOISE OVERLAY (Matches Hero Style) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-10 contrast-150 brightness-150" 
        style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
      ></div>

      {/* 2. DECORATIVE BACKGROUND LINE */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-20"></div>

      {/* 3. CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#00aaff] mb-4 block">
          Section 02
        </span>
        <h2 className="text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter">
          About
        </h2>
        <div className="w-12 h-[2px] bg-[#00aaff] mx-auto mt-6"></div>
      </motion.div>

      {/* 4. SIDE DECORATION */}
      <div className="absolute left-8 bottom-12 hidden md:block">
        <p className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
          Scroll to explore — 2025
        </p>
      </div>
    </div>
  );
};

export default About;