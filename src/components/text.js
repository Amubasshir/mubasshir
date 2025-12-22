'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ১. সরাসরি data-theme চেক করা
            const theme = entry.target.getAttribute('data-theme');
            if (theme === 'dark') {
              setIsDarkBg(true);
              return;
            }

            // ২. কালার ডিটেকশন (যদি data-theme না থাকে)
            const style = window.getComputedStyle(entry.target);
            const bgColor = style.backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            
            if (rgb) {
              const r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);
              // Brightness ক্যালকুলেশন
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              setIsDarkBg(brightness < 50); 
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // সব সেকশন এবং ডার্ক থিম এলিমেন্ট অবজার্ভ করা
    document.querySelectorAll('section, [data-theme="dark"], header').forEach((el) => {
      observer.observe(el);
    });
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  // --- কালার লজিক ---
  const navBgColor = isDarkBg ? 'bg-white' : 'bg-[#1a1a1a]';
  const textColor = isDarkBg ? 'text-black' : 'text-white';
  const eyeBg = isDarkBg ? 'bg-black' : 'bg-white';
  const pupilColor = isDarkBg ? 'bg-white' : 'bg-black';
  const topLogoTextColor = isDarkBg ? 'text-white' : 'text-[#1a1a1a]';

  return (
    // ✅ z-[9999] নিশ্চিত করে যে এটি সবার উপরে থাকবে
    <nav 
      onMouseMove={handleMouseMove}
      className="fixed top-6 left-6  z-[9999] transition-all duration-500"
    >
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center transition-all duration-700 ease-in-out ${
          isScrolled 
            ? `rounded-full shadow-2xl h-14 px-4 ${navBgColor}` 
            : 'bg-transparent h-14'
        }`}
        style={{ 
          width: isScrolled ? (isHovered ? '480px' : '90px') : 'auto',
          justifyContent: 'flex-start'
        }}
      >
        <div className="flex items-center relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div 
                key="logo"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={`flex items-end font-black italic text-5xl tracking-tighter ${topLogoTextColor} transition-colors duration-500`}
              >
                <span>r</span>
                <div className="relative flex flex-col items-center mx-[1px]">
                  <div className="absolute -top-3">
                    <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="small" />
                  </div>
                  <span>i</span>
                </div>
                <span>bb</span>
                <div className="relative flex flex-col items-center mx-[1px]">
                  <div className="absolute -top-3">
                    <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="small" />
                  </div>
                  <span>i</span>
                </div>
                <span>t</span>

                <div className="flex gap-8 ml-12 mb-2 font-bold text-[12px] tracking-widest uppercase opacity-80">
                  <Link href="/" className="hover:text-[#ff5500] transition-colors">Home</Link>
                  <Link href="/projects" className="hover:text-[#ff5500] transition-colors">Projects</Link>
                  <Link href="/about" className="hover:text-[#ff5500] transition-colors">About</Link>
                  <Link href="/Contacts" className="hover:text-[#ff5500] transition-colors">Contacts</Link>
                </div>
              </motion.div>
            ) : (
              <motion.div key="pill" layout className="flex items-center justify-between w-full">
                <div className="shrink-0">
                  <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isHovered ? 'left' : null} />
                </div>
                <motion.div 
                  layout
                  className={`flex items-center justify-center gap-8 font-bold text-[11px] tracking-[0.2em] uppercase overflow-hidden whitespace-nowrap ${textColor}`}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: isHovered ? 'auto' : 0, 
                    opacity: isHovered ? 1 : 0,
                    marginRight: isHovered ? '20px' : '0px',
                    marginLeft: isHovered ? '20px' : '0px'
                  }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  <Link href="/" className="hover:text-[#ff5500] transition-colors">Home</Link>
                  <Link href="/projects" className="hover:text-[#ff5500] transition-colors">Projects</Link>
                  <Link href="/about" className="hover:text-[#ff5500] transition-colors">About</Link>
                  <Link href="/Contacts" className="hover:text-[#ff5500] transition-colors">Contacts</Link>
                </motion.div>
                <div className="shrink-0">
                  <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isHovered ? 'right' : null} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
};

// Eye Component
const Eye = ({ mousePos, eyeBg, pupilColor, size, forceSide }) => {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);
  const dimensions = size === 'small' ? 'w-5 h-5' : 'w-7 h-7';

  useEffect(() => {
    if (forceSide === 'left') setPupil({ x: -4, y: 0 });
    else if (forceSide === 'right') setPupil({ x: 4, y: 0 });
    else if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
      const distance = size === 'small' ? 2.5 : 4.5;
      setPupil({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    }
  }, [mousePos, forceSide, size]);

  return (
    <div ref={eyeRef} className={`relative ${dimensions} ${eyeBg} rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500 shadow-inner`} style={{ transform: 'rotate(-10deg)' }}>
      <motion.div className={`absolute top-0 left-0 w-full z-20 ${pupilColor}`} animate={{ height: ["0%", "0%", "100%", "0%"] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }} />
      <motion.div animate={{ x: pupil.x, y: pupil.y }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className={`${size === 'small' ? 'w-2.5 h-3.5' : 'w-4 h-5'} rounded-full ${pupilColor}`} />
    </div>
  );
};

export default Navbar;