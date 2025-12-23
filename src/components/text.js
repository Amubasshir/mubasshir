'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // মোবাইলের জন্য ওপেন স্টেট
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // উইন্ডো সাইজ চেক করার জন্য (মোবাইল নাকি ডেস্কটপ)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ব্যাকগ্রাউন্ড কালার ডিটেকশন (আগের মতোই)
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

  // ইন্টারেকশন হ্যান্ডলার (মোবাইল ও ডেস্কটপ আলাদা)
  const handleInteractionStart = () => {
    if (!isMobile) setIsHovered(true);
  };
  
  const handleInteractionEnd = () => {
    if (!isMobile) setIsHovered(false);
  };

  const toggleMenu = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  // কালার লজিক
  const navBgColor = isDarkBg ? 'bg-white' : 'bg-[#1a1a1a]';
  const textColor = isDarkBg ? 'text-black' : 'text-white';
  const eyeBg = isDarkBg ? 'bg-black' : 'bg-white';
  const pupilColor = isDarkBg ? 'bg-white' : 'bg-black';

  // স্টেট লজিক (মোবাইল হলে isOpen, ডেস্কটপ হলে isHovered)
  const isActive = isMobile ? isOpen : isHovered;

  return (
    <nav 
      onMouseMove={handleMouseMove}
      // মোবাইলে মাঝখানে, ডেস্কটপে বামে
      className={`fixed z-[9999] transition-all duration-500 ${isMobile ? 'top-6 left-1/2 -translate-x-1/2' : 'top-8 left-6'}`}
    >
      <motion.div
        layout
        onClick={toggleMenu}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        className={`flex flex-col md:flex-row items-center transition-colors duration-700 ease-in-out shadow-2xl ${navBgColor} rounded-[30px] cursor-pointer overflow-hidden`}
        // সাইজ অ্যানিমেশন
        animate={{
          width: isActive ? (isMobile ? '90vw' : '480px') : '94px',
          height: isActive && isMobile ? 'auto' : '56px', // 14 * 4 = 56px
          borderRadius: isActive && isMobile ? '24px' : '9999px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ padding: isActive && isMobile ? '16px' : '0' }}
      >
        {/* টপ রো: চোখ এবং (মোবাইল টাইটেল বা স্পেসার) */}
        <div className={`flex items-center justify-between w-full ${!isMobile ? 'h-14 px-4' : ''}`}>
          
          {/* Left Eye */}
          <div className="shrink-0">
            <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isActive ? 'left' : null} />
          </div>

          {/* ডেস্কটপ লিংক (পাশাপাশি দেখাবে) */}
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

           {/* মোবাইল মেনু ইন্ডিকেটর (অপশনাল, শুধু মাঝখানের স্পেস ফিল করার জন্য) */}
           {isMobile && isActive && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`text-[10px] uppercase tracking-widest font-bold ${textColor}`}
            >
              Menu
            </motion.span>
           )}

          {/* Right Eye */}
          <div className="shrink-0">
            <Eye mousePos={mousePos} eyeBg={eyeBg} pupilColor={pupilColor} size="large" forceSide={isActive ? 'right' : null} />
          </div>
        </div>

        {/* মোবাইল ড্রপডাউন লিংক (নিচে নিচে দেখাবে) */}
        <AnimatePresence>
          {isMobile && isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`flex flex-col items-center gap-6 mt-6 mb-2 font-bold text-[14px] tracking-[0.2em] uppercase w-full ${textColor}`}
            >
               <NavLinks mobile />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

// লিংক কম্পোনেন্ট রিইউজ করার জন্য আলাদা করা হলো
const NavLinks = ({ mobile }) => (
  <>
    <Link href="/" className="hover:text-[#ff5500] transition-colors w-full text-center">Home</Link>
    <Link href="/projects" className="hover:text-[#ff5500] transition-colors w-full text-center">Projects</Link>
    <Link href="/about" className="hover:text-[#ff5500] transition-colors w-full text-center">About</Link>
    <Link href="/Contacts" className="hover:text-[#ff5500] transition-colors w-full text-center">Contacts</Link>
  </>
);

const Eye = ({ mousePos, eyeBg, pupilColor, size, forceSide }) => {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);
  const dimensions = size === 'small' ? 'w-5 h-5' : 'w-8 h-8';

  // পিউপিল কালার ক্লাস ঠিক করা (বাগ ফিক্স)
  const pupilBgClass = pupilColor.includes('white') ? 'bg-white' : 'bg-black';

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
    <div ref={eyeRef} className={`relative ${dimensions} ${eyeBg} rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500 shadow-inner`} style={{ transform: 'rotate(-10deg)' }}>
      <motion.div className={`absolute top-0 left-0 w-full z-20 ${pupilColor}`} animate={{ height: ["0%", "0%", "100%", "0%"] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }} />
      <motion.div 
        animate={{ x: pupil.x, y: pupil.y }} 
        transition={{ type: 'spring', stiffness: 200, damping: 15 }} 
        className={`w-4 h-5 rounded-full ${pupilBgClass}`} 
      />
    </div>
  );
};

export default Navbar;