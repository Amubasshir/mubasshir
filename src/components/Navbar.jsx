'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleInteractionStart = () => {
    if (!isMobile) setIsHovered(true);
  };
  
  const handleInteractionEnd = () => {
    if (!isMobile) setIsHovered(false);
  };

  const toggleMenu = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  const navBgColor = isDarkBg ? 'bg-white' : 'bg-[#1a1a1a]';
  const textColor = isDarkBg ? 'text-black' : 'text-white';
  const eyeBg = isDarkBg ? 'bg-black' : 'bg-white';
  const pupilColor = isDarkBg ? 'bg-white' : 'bg-black';

  const isActive = isMobile ? isOpen : isHovered;

  return (
    <nav 
      onMouseMove={handleMouseMove}
      // CHANGE 1: মোবাইলে right-6 ব্যবহার করা হয়েছে
      className={`fixed z-[9999] transition-all duration-500 ${isMobile ? 'top-3 right-3' : 'top-8 left-6'}`}
    >
      <motion.div
        layout
        onClick={toggleMenu}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        className={`flex flex-col md:flex-row items-center transition-colors duration-700 ease-in-out shadow-2xl ${navBgColor} rounded-[30px] cursor-pointer overflow-hidden`}
        // CHANGE 2: হাইট এবং উইডথ কমানো হয়েছে
        animate={{
          width: isActive ? (isMobile ? '160px' : '480px') : (isMobile ? '80px' : '94px'), // মোবাইলে উইডথ কম
          height: isActive && isMobile ? 'auto' : (isMobile ? '45px' : '56px'), // মোবাইলে হাইট ৪৫ পিক্সেল
          borderRadius: isActive && isMobile ? '20px' : '9999px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ padding: isActive && isMobile ? '12px' : '0' }}
      >
        {/* Top Row */}
        <div className={`flex items-center justify-between w-full ${!isMobile ? 'h-14 px-4' : 'h-full px-3'}`}>
          
          {/* Left Eye */}
          <div className="shrink-0">
            {/* মোবাইলে চোখের সাইজ একটু ছোট করা হয়েছে 'size' প্রপ দিয়ে */}
            <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size={isMobile ? "medium" : "large"} forceSide={isActive ? 'left' : null} />
          </div>

          {!isMobile && (
            <motion.div 
              className={`flex items-center justify-center gap-8 font-bold text-[11px] tracking-[0.2em] uppercase overflow-hidden whitespace-nowrap ${textColor}`}
              initial={false}
              animate={{ 
                width: isActive ? 'auto' : 0, 
                opacity: isActive ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <NavLinks />
            </motion.div>
          )}

           {/* Mobile Menu Text (Optional) */}
           {isMobile && isActive && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`text-[9px] uppercase tracking-widest font-bold ${textColor}`}
            >
              Menu
            </motion.span>
           )}

          {/* Right Eye */}
          <div className="shrink-0">
            <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size={isMobile ? "medium" : "large"} forceSide={isActive ? 'right' : null} />
          </div>
        </div>

        {/* Mobile Dropdown Links */}
        <AnimatePresence>
          {isMobile && isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              // CHANGE 3: গ্যাপ এবং মার্জিন কমানো হয়েছে (Compact look)
              className={`flex flex-col items-center gap-3 mt-4 mb-1 font-bold text-[11px] tracking-[0.15em] uppercase w-full ${textColor}`}
            >
               <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link href="/" className="hover:text-[#ff5500] transition-colors w-full text-center py-1">Home</Link>
    <Link href="/projects" className="hover:text-[#ff5500] transition-colors w-full text-center py-1">Projects</Link>
    <Link href="/about" className="hover:text-[#ff5500] transition-colors w-full text-center py-1">About</Link>
    <Link href="/Contacts" className="hover:text-[#ff5500] transition-colors w-full text-center py-1">Contacts</Link>
  </>
);

const Eye = ({ mousePos, eyeBg, pupilColor, size, forceSide }) => {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);
  
  // সাইজিং লজিক আপডেট
  let dimensions = 'w-8 h-8'; // large (default)
  let pupilSize = 'w-4 h-5';
  
  if (size === 'medium') {
    dimensions = 'w-6 h-6'; // মোবাইলের জন্য মিডিয়াম সাইজ
    pupilSize = 'w-3 h-3.5';
  } else if (size === 'small') {
    dimensions = 'w-5 h-5';
    pupilSize = 'w-2 h-2.5';
  }

  const pupilBgClass = pupilColor.includes('white') ? 'bg-white' : 'bg-black';

  useEffect(() => {
    if (forceSide === 'left') setPupil({ x: -3, y: 0 });
    else if (forceSide === 'right') setPupil({ x: 3, y: 0 });
    else if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
      const distance = size === 'medium' ? 3 : 5; // সাইজ অনুযায়ী মুভমেন্ট রেঞ্জ
      setPupil({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    }
  }, [mousePos, forceSide, size]);

  return (
    <div ref={eyeRef} className={`relative ${dimensions} ${eyeBg} rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500 shadow-inner`} style={{ transform: 'rotate(-10deg)' }}>
      <motion.div className={`absolute top-0 left-0 w-full z-20 ${pupilColor}`} animate={{ height: ["0%", "0%", "100%", "0%"] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }} />
      <motion.div 
        animate={{ x: pupil.x, y: pupil.y }} 
        transition={{ type: 'spring', stiffness: 200, damping: 15 }} 
        className={`${pupilSize} rounded-full ${pupilBgClass}`} 
      />
    </div>
  );
};

export default Navbar;