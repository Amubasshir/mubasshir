'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const ProjectSelectedWork = () => {
  return (
    <section className="bg-[#111] text-white min-h-screen flex items-center justify-center py-10 px-6  font-sans">
      <div className="max-w-[1400px] w-full mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
          
          {/* Left Side: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#ff5500] font-bold text-[30px] mb-4 tracking-wide">
              Selected Work
            </h4>
            <h1 className="text-[40px] lg:text-[60px] font-bold leading-[1.1] tracking-tight">
              Bringing Brands to Life Through Design
            </h1>
          </motion.div>

          {/* Right Side: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            <p className="text-xl md:text-[30px] font-medium text-white leading-relaxed mb-8 lg:mb-0">
              A curated collection of visual identities, packaging, and creative systems built for impact.
            </p>

            <div className="flex flex-col lg:flex-row items-start sm:items-center justify-between pt-8 sm:pt-12 gap-6">
              <span className="text-gray-500 text-[16px] font-normal">
                Let's Build Something Meaningful Together
              </span>
              
               <button className="group relative bg-[#ff5500] p-1 rounded-full flex items-center overflow-hidden lg:min-w-[180px] min-w-full h-[44px] transition-all duration-700 ease-in-out cursor-pointer">
                      
                      {/* অরেঞ্জ বিজি স্লাইডার */}
                      <span className="absolute right-1 top-1 bottom-1 w-[36px] bg-white group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
                      
                      {/* কন্টেন্ট কন্টেইনার */}
                      <div className="relative z-20 w-full h-full flex items-center justify-center">
                        
                        {/* অ্যারো আইকন: মুভমেন্ট ডিস্ট্যান্স এবং সাইজ ছোট করা হয়েছে */}
                        <div className="absolute right-0 w-[36px] h-[36px] flex items-center justify-center text-[#ff5500] bg-white group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[140px]">
                          <ArrowRight 
                            size={16} 
                            strokeWidth={3} 
                          />
                        </div>
              
                        {/* টেক্সট: translate-x এর মাধ্যমে আইকনের একদম কাছে নিয়ে আসা হয়েছে */}
                        <span className="text-white group-hover:text-[#ff5500] font-bold text-[16px] transition-all duration-700 ease-in-out transform translate-x-[-2px] group-hover:translate-x-4 whitespace-nowrap tracking-tight mr-7">
                          Get in touch
                        </span>
              
                      </div>
                    </button>
            </div>
          </motion.div>
        </div>

        {/* --- HERO IMAGE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[50vh] md:h-[75vh] rounded-[2rem] overflow-hidden relative"
        >
          {/* Image */}
          <img 
            src="https://framerusercontent.com/images/Bwa3k5FBSpRuh5NvcduC8WFKrL0.png" 
            alt="Brand Cap Design" 
            className="w-full h-full object-cover"
          />
          
          {/* Optional: Dark Overlay Gradient for depth if image is too bright */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectSelectedWork;