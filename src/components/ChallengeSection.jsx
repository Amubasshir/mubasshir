'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ChallengeSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* 1. Orange Line (Spans 4 columns) */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1.5 bg-[#ff5500] rounded-full"
            />
          </div>

          {/* 2. Title (Spans 2 columns - Centered visually) */}
          <div className="lg:col-span-2 lg:text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Challenge
            </h2>
            {/* Mobile-only line */}
            <div className="h-1.5 w-40 bg-[#ff5500] rounded-full mt-4 lg:hidden"></div>
          </div>

          {/* 3. Description (Spans 6 columns) */}
          <div className="lg:col-span-6">
            <p className="text-[#757575] text-lg leading-relaxed">
              Our client struggled to attract and retain customers because their outdated, non-responsive website didn't align with their brand identity.
            </p>
          </div>

        </div>

        {/* --- IMAGE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[50vh] md:h-screen overflow-hidden rounded-[2.5rem]"
        >
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2600&auto=format&fit=crop" 
            alt="Tote Bag Challenge" 
            className="w-full h-full object-cover"
          />
          
          {/* Optional: Subtle Overlay if image is too bright */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default ChallengeSection;