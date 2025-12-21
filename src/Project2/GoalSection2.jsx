'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GoalSection2 = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-24">
          
          {/* 1. Orange Line (Spans 4 columns) */}
          <div className="lg:col-span-4 hidden lg:flex items-center h-full pt-2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1.5 bg-[#ff5500] rounded-full w-full"
            />
          </div>

          {/* 2. Title "Goal" (Spans 2 columns - Centered visually) */}
          <div className="lg:col-span-2 lg:text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Goal
            </h2>
            {/* Mobile-only line */}
            <div className="h-1.5 w-24 bg-[#ff5500] rounded-full  lg:hidden"></div>
          </div>

          {/* 3. Description (Spans 6 columns) */}
          <div className="lg:col-span-6">
            <p className="text-[#757575] text-lg leading-relaxed">
              We aimed to create a modern, visually appealing website that reflected the client's brand and provided a seamless user experience. The site needed to be responsive, easy to navigate, and optimized for search engines to enhance online visibility.
            </p>
          </div>

        </div>

        {/* --- IMAGES STAGGERED GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Image (Bucket Hat) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-[50vh] md:h-screen rounded-[2.5rem] overflow-hidden relative"
          >
            <img 
              // Placeholder for the Bucket Hat image
              src="https://framerusercontent.com/images/jK8tAh3AqQJ2cydfA9irFFKf54.jpg?scale-down-to=2048" 
              alt="Brand Hat" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Image (Tote Bag) - Pushed down for staggered look */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full h-[50vh] md:h-screen rounded-[2.5rem] overflow-hidden relative lg:mt-32"
          >
            <img 
              // Placeholder for the Tote Bag image
              src="https://framerusercontent.com/images/TSi1Ir46nDdKGLdIZDFty9eQA8Q.png?scale-down-to=1024" 
              alt="Brand Tote" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GoalSection2;