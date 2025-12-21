'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  // ১. মেনু কন্টেইনারের জন্য অ্যানিমেশন ভেরিয়েন্ট
  const menuVariants = {
    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)", // ওপরের কোণা থেকে শুরু হবে
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      clipPath: `circle(1500px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }
  };

  // ২. লিঙ্কের জন্য একের পর এক আসার অ্যানিমেশন (Stagger)
  const navListVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
      
      {/* --- LOGO --- */}
      <Link href='/' className="text-2xl font-bold tracking-tight z-50 relative group">
        Folioblox
        <span className="text-[#ff5500] ml-1">®</span>
      </Link>

      {/* --- DESKTOP MENU --- */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-8 text-[16px] font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#ff5500] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-2">
            <AnimatedButton text="Get in touch" width="160px" />
        </div>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="lg:hidden z-50 p-2 text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-8 h-6 flex flex-col justify-between items-end">
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white block origin-center transition-all"
          />
          <motion.span 
            animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            className="w-3/4 h-0.5 bg-white block transition-all"
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -11, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
            className="h-0.5 bg-white block origin-center transition-all"
          />
        </div>
      </button>

      {/* --- ADVANCED MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <motion.div 
              variants={navListVariants}
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  whileHover={{ scale: 1.1, color: "#ff5500" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                variants={linkVariants}
                className="pt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                <AnimatedButton text="Get in touch" width="200px" />
              </motion.div>
            </motion.div>

            {/* Background Decor (Optional) */}
            <div className="absolute bottom-10 text-white/10 text-8xl font-black -z-10 select-none">
              MENU
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;