'use client';
import React, { useRef } from 'react';
import { Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const yWatermark = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <footer 
      ref={containerRef} 
      className="relative bg-[#050505] text-white -mt-10 pt-40 pb-30 overflow-hidden font-sans"
    >
      
      {/* --- BACKGROUND WATERMARK --- */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none z-0 "
      >
        <h1 className="text-[20vw] font-bold text-white opacity-[0.03] leading-[0.75] text-center tracking-tighter select-none whitespace-nowrap">
          Folioblox®
        </h1>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        style={{ y: yContent }}
        className=" mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Folioblox®</h2>
            <h3 className="text-[18px] md:text-[20px] font-bold leading-tight">
              Great design should feel invisible.
            </h3>
            <p className="text-[#757575] text-[16px] max-w-md leading-relaxed">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>

            <div className="pt-2">
              <button className="group relative bg-[#242424] p-1 rounded-full flex items-center overflow-hidden min-w-[160px] h-[44px] transition-all duration-700 ease-in-out cursor-pointer">
                <span className="absolute right-1 top-1 bottom-1 w-[36px] bg-[#ff5500] group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                  <div className="absolute right-0 w-[36px] h-[36px] flex items-center justify-center text-black bg-[#ff5500] group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[120px]">
                    <ArrowRight size={16} strokeWidth={3} />
                  </div>
                  <span className="text-white group-hover:text-black font-bold text-[16px] transition-all duration-700 ease-in-out transform translate-x-[-2px] group-hover:translate-x-4 whitespace-nowrap tracking-tight mr-7">
                    Get in touch
                  </span>
                </div>
              </button>
            </div>

            <div className="pt-8 text-gray-500 text-sm">© 2025 Copyright</div>
          </div>

          <div className="lg:col-span-2"></div>

          {/* --- Right Columns: Links --- */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            
            {/* Menu Links - Move সরিয়ে শুধু Color Hover যোগ করা হয়েছে */}
            <div>
              <h4 className="text-[#ff5500] font-bold text-lg mb-6">Menu</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'About', 'Projects', 'Pricing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors duration-300 text-base font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links - Move সরিয়ে শুধু Color Hover যোগ করা হয়েছে */}
            <div>
              <h4 className="text-[#ff5500] font-bold text-lg mb-6">Social</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Facebook', icon: <Facebook size={20} /> },
                  { name: 'Instagram', icon: <Instagram size={20} /> },
                  { name: 'YouTube', icon: <Youtube size={20} /> }
                ].map((social) => (
                  <li key={social.name}>
                    <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#ff5500] transition-colors duration-300 group">
                      <span className="stroke-1 transition-all">
                        {social.icon}
                      </span>
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </motion.div>

   
    </footer>
  );
};

export default Footer;