'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme');
            if (theme === 'dark') {
              setIsDarkBg(true);
              return;
            }

            const style = window.getComputedStyle(entry.target);
            const bgColor = style.backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            
            if (rgb) {
              const r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              setIsDarkBg(brightness < 50); 
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section, [data-theme="dark"], header').forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  // কালার লজিক
  const navBgColor = isDarkBg ? 'bg-white' : 'bg-[#1a1a1a]';
  const textColor = isDarkBg ? 'text-black' : 'text-white';
  const eyeBg = isDarkBg ? 'bg-black' : 'bg-white';
  const pupilColor = isDarkBg ? 'bg-white' : 'bg-black';

  return (
    <nav 
      onMouseMove={handleMouseMove}
      className="fixed top-8 left-6 z-[9999]"
    >
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center transition-all duration-700 ease-in-out shadow-2xl h-14 px-4 ${navBgColor} rounded-full cursor-pointer`}
        style={{ 
          width: isHovered ? '480px' : '94px',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Eye */}
        <div className="shrink-0">
          <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isHovered ? 'left' : null} />
        </div>

        {/* Navigation Links (Visible on Hover) */}
        <motion.div 
          layout
          className={`flex items-center justify-center gap-8 font-bold text-[11px] tracking-[0.2em] uppercase overflow-hidden whitespace-nowrap ${textColor}`}
          initial={false}
          animate={{ 
            width: isHovered ? 'auto' : 0, 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          <Link href="/" className="hover:text-[#ff5500] transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-[#ff5500] transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-[#ff5500] transition-colors">About</Link>
          <Link href="/Contacts" className="hover:text-[#ff5500] transition-colors">Contacts</Link>
        </motion.div>

        {/* Right Eye */}
        <div className="shrink-0">
          <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isHovered ? 'right' : null} />
        </div>
      </motion.div>
    </nav>
  );
};

const Eye = ({ mousePos, eyeBg, pupilColor, size, forceSide }) => {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);
  const dimensions = size === 'small' ? 'w-5 h-5' : 'w-8 h-8';

  useEffect(() => {
    if (forceSide === 'left') setPupil({ x: -4, y: 0 });
    else if (forceSide === 'right') setPupil({ x: 4, y: 0 });
    else if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
      const distance = 5;
      setPupil({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    }
  }, [mousePos, forceSide, size]);

  return (
    <div ref={eyeRef} className={`relative ${dimensions} ${eyeBg} rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500`} style={{ transform: 'rotate(-10deg)' }}>
      <motion.div className={`absolute top-0 left-0 w-full z-20 ${pupilColor}`} animate={{ height: ["0%", "0%", "100%", "0%"] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }} />
      <motion.div animate={{ x: pupil.x, y: pupil.y }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="w-4 h-5 rounded-full pupilColor" style={{backgroundColor: pupilColor === 'bg-white' ? 'white' : 'black'}} />
    </div>
  );
};

export default Navbar;