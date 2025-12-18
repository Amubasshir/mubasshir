'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue, animate, AnimatePresence, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  
  // --- SCROLL PARALLAX LOGIC ---
  const { scrollY } = useScroll();
  const textParallaxY = useTransform(scrollY, [0, 500], [0, -300]); 
  
  // Image moves DOWN slightly (Positive Y) on scroll
  const imageParallaxY = useTransform(scrollY, [0, 500], [0, 50]); 
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  // --- MOUSE & EYE TRACKING ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Custom Cursor Coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28 }; // Snappy but smooth cursor
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // const eyeX = useTransform(springX, [-0.5, 0.5], [-4, 4]); 
  // const eyeY = useTransform(springY, [-0.5, 0.5], [-1, 1]);
  const textX = useTransform(springX, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e) => {
    // 1. Update Custom Cursor Position (Pixel values)
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    // 2. Update Eye Tracking (Percentage values)
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xPct = (e.clientX - width / 2) / width;
    const yPct = (e.clientY - height / 2) / height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  // --- LIGHT SHIMMER EFFECT ---
  const shimmer = useMotionValue(0);
  useEffect(() => {
    const animation = animate(shimmer, [0, 1], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 1,
    });
    return () => animation.stop();
  }, []);

  const maskImage = useTransform(shimmer, (val) => `linear-gradient(110deg, transparent ${val * 100 - 25}%, black ${val * 100}%, transparent ${val * 100 + 25}%)`);

  return (
    <>
      <div className="h-screen w-full"></div>

      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ opacity }}
        // ✅ ADDED: 'cursor-none' to hide default cursor
        className="fixed top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start text-gray-300 font-oswald bg-[#0a0a0a] z-0"
      >
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
          .font-oswald { font-family: 'Oswald', sans-serif; }
        `}</style>

        {/* --- CUSTOM CURSOR (WHITE DOT) --- */}
        {/* <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        /> */}

        {/* --- LAYER 1: BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90">
           <img src="https://framerusercontent.com/images/S0WuutzwwVpJ702VbwusD6PS8.jpg?scale-down-to=1024" alt="" className="w-full h-full object-cover object-center" /> 
        </div>
 
        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[550px] h-[480px] pointer-events-none z-0">
            <div
              className="w-full h-full rounded-full blur-[100px] opacity-100 -mt-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 100%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0) 20%)',
            }}
          />
        </div>
        
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
           <img src="https://framerusercontent.com/images/S0WuutzwwVpJ702VbwusD6PS8.jpg?scale-down-to=1024" alt="" className="w-full h-full object-cover object-center" /> 
        </div>
      
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30 flex justify-center items-center -mt-10">
           <img src="https://framerusercontent.com/images/hXGfj7QYzUxpGpYMeb3MfCxv6Y.png" alt="" className="w-[800px] h-full object-cover object-center" /> 
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30 flex justify-center items-center mt-10">
           <img src="https://framerusercontent.com/images/O1Y9JKiQNEXruAmXdiiHcq6LgzE.png" alt="" className="w-[800px] h-full object-cover object-center" /> 
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-75">
           <img src="https://framerusercontent.com/images/S0WuutzwwVpJ702VbwusD6PS8.jpg" alt="" className="w-full h-full object-cover object-center" /> 
        </div>

        {/* --- LAYER 2: BIG BG TEXT (Moves UP) --- */}
        <motion.div 
          style={{ x: textX, y: textParallaxY }} 
          className="absolute top-[40%] md:top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none"
        >
         <h1 className="text-[20vw] lg:text-[25vw] font-medium font-oswald text-black leading-[0.2] tracking-tighter opacity-25 uppercase whitespace-nowrap hidden md:block">
            SANI MANI
                 </h1>
        </motion.div>

        {/* --- LAYER 3: MOBILE/TABLET SLIDER --- */}
        <div className="lg:hidden absolute top-[10%] md:top-0 left-0 w-full z-50 flex justify-center">
          <TestimonialSlider />
        </div>

         {/* --- LAYER 4: DESKTOP TESTIMONIAL GRID (LIGHT INSIDE TEXT ONLY) --- */}
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none hidden lg:block">
            
            {/* 1. Base Layer: Dark Text (Always Visible) */}
            <div className="absolute inset-0 w-full h-full z-10">
                <DesktopGrid className="text-[#333]" />
            </div>
            
            {/* 2. Highlight Layer: Moving Light (Visible ONLY inside Text) */}
           <motion.div 
  className="absolute inset-0 w-full h-full z-20"
  animate={{
    maskPosition: ["100% 100%", "0% 0%"] // reversed
  }}
  transition={{
    duration: 20, 
    repeat: Infinity,
    ease: "linear"
  }}
  style={{
    maskImage: "repeating-linear-gradient(130deg, transparent, transparent 15%, black 15%, black 16%, transparent 16%)",
    WebkitMaskImage: "repeating-linear-gradient(130deg, transparent, transparent 15%, black 15%, black 16%, transparent 16%)",
    
    maskSize: "200% 150%",      // reduced vertical size
    WebkitMaskSize: "200% 150%",
    
    maskComposite: "source-in", 
    WebkitMaskComposite: "source-in"
  }}
>
  <DesktopGrid className="text-gray-200 opacity-15" /> {/* reduce opacity for lighter effect */}
</motion.div>


        </div>
        

        {/* --- LAYER 5: CHARACTER IMAGE (Moves DOWN Slightly) --- */}
        <motion.div 
          style={{ y: imageParallaxY }} 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-30 flex justify-center items-end h-[85vh] md:h-[95vh] lg:h-[100vh]"
        >
          
          <div className="absolute w-60 h-60 rounded-full bg-white blur-[100px] top-40 opacity-40 pointer-events-none"></div>

          <div className="relative h-full w-auto aspect-[0.88] flex justify-center items-end scale-110 md:scale-125 origin-bottom">
            <img 
              src="https://framerusercontent.com/images/vqwIIxHT82GnCjsfNs4GJhNcjo.png?scale-down-to=1024" 
              alt="Sahil" 
              className="h-full w-auto object-contain object-bottom pointer-events-none hidden lg:block"
            />
            <img 
              src="https://framerusercontent.com/images/vqwIIxHT82GnCjsfNs4GJhNcjo.png?scale-down-to=1024" 
              alt="Sahil Mobile" 
              className="w-full h-full object-contain object-bottom pointer-events-none lg:hidden block"
            />
            
            {/* Eye Tracking */}
            {/* <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">

              <div className="absolute top-[42.7%] left-[42.4%] w-[16px] flex items-center justify-center">
                  <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/PNvq0DmS4PLV65XRbZYfxEvB4hg.png" className="w-full" />
              </div>

              <div className="absolute top-[42.7%] right-[43.3%] w-[16px] flex items-center justify-center">
                  <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/RPggzesnBIiZhEFIt1RBijR3oQ.png" className="w-full" />
              </div>

              <div className="absolute top-[40.5%] left-[49.5%] -translate-x-1/2 w-[29.5%] opacity-90">
                  <img src="https://framerusercontent.com/images/XdiR5SlQ8wxyaKg8JVgW7kOVTw.png" alt="" className="w-full" />
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* --- LAYER 6: BOTTOM TITLES (Moves DOWN Slightly with Image) --- */}
        <motion.div 
          style={{ y: imageParallaxY }}
          className="absolute bottom-24 md:-bottom-4 z-50 text-center w-full px-4 pointer-events-none"
        >
          <h2 className=" text-white uppercase opacity-40  mb-2">
          <span className='text-[12px] md:text-5xl font-normal'>I do UX</span><br /><span className='text-[12px] md:text-5xl font-light'>That Drives</span>
          </h2>
          <h2 className="text-4xl  md:text-5xl font-medium text-white uppercase leading-[0.8] tracking-tighter drop-shadow-2xl opacity-65">
            Business Growth
      </h2>

         {/* Rotating Star Animation (Perfect Center) */}
<div className="mt-6 w-full flex justify-center items-center z-50 relative">
  
  {/* Container Wrapper (Bigger Size for Bigger Triangles) */}
  <div className="relative w-16 h-16 flex items-center justify-center">
    
    {/* 1. First Triangle (Rotates 180° to become Upward ▲) */}
    <motion.div
      className="absolute border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-[#00aaff] drop-shadow-[0_0_15px_#00aaff] mix-blend-screen origin-center"
      animate={{
        rotate: [0, 180, 180, 0], 
        y: [0, -7, -7, 0] 
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.4, 0.7, 1],
        repeat: Infinity,
        repeatDelay: 0.5
      }}
    ></motion.div>

    {/* 2. Second Triangle (Rotates 360° to stay Downward ▼) */}
    <motion.div
      className="absolute border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-[#00aaff] drop-shadow-[0_0_15px_#00aaff] mix-blend-screen origin-center"
      animate={{
        rotate: [0, 360, 360, 0], 
        y: [0, 0, 0, 0] 
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.4, 0.7, 1],
        repeat: Infinity,
        repeatDelay: 0.5
      }}
    ></motion.div>

  </div>
</div>
        </motion.div>

       
      </motion.div>
    </>
  );
};

// --- DATA ---
const testimonialData = [
  {
    title: "VISIONARY",
    name: "HEMANT CHARYA",
    compony: "Google LLC\n1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
    pos: "top-[17%] left-[3%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[8px]",
  },
  {
    title: "PROACTIVE",
    name: "ADRIAN ORNIK",
    compony: "Facebook, Inc.\n1 Hacker Way, Menlo Park, CA 94025, USA",
    pos: "top-[40%] left-[6%]",
    titleSize: "text-[35px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "VERSATILE",
    name: "ALOK ANAND",
    compony: "Amazon.com, Inc.\n410 Terry Ave N, Seattle, WA 98109, USA",
    pos: "top-[12%] left-[20%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "ADAPTABLE",
    name: "ROHAN CHANDHOK",
    compony: "Microsoft Corporation\n1 Microsoft Way, Redmond, WA 98052, USA",
    pos: "top-[30%] left-[20%]",
    titleSize: "text-[24px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "DEDICATED",
    name: "ROBERT SMITH",
    compony: "Apple Inc.\nOne Apple Park Way, Cupertino, CA 95014, USA",
    pos: "top-[18%] right-[8%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "TRAILBLAZER",
    name: "KABIR MALKANI",
    compony: "Netflix, Inc.\n100 Winchester Circle, Los Gatos, CA 95032, USA",
    pos: "top-[40%] right-[5%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "MASTERFULL",
    name: "PHIL CLEVENGER",
    compony: "Spotify Technology S.A.\nRegeringsgatan 19, 111 53 Stockholm, Sweden",
    pos: "top-[45%] right-[25%]",
    titleSize: "text-[20px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "INNOVATIVE",
    name: "JAYAN K.",
    compony: "Tesla, Inc.\n3500 Deer Creek Road, Palo Alto, CA 94304, USA",
    pos: "bottom-[40%] left-[25%]",
    titleSize: "text-[20px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "RELIABLE",
    name: "DINESH KRISHNAN",
    compony: "SpaceX\n1 Rocket Road, Hawthorne, CA 90250, USA",
    pos: "top-[30%] right-[20%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
  {
    title: "RELIABLE",
    name: "DINESH KRISHNAN",
    compony: "SpaceX\n1 Rocket Road, Hawthorne, CA 90250, USA",
    pos: "top-[12%] right-[22%]",
    titleSize: "text-[30px]",
    nameSize: "text-[14px]",
    componySize: "text-[10px]",
  },
];

// --- MOBILE/TABLET SLIDER ---
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialData.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-32 flex flex-col items-center justify-center font-oswald w-full max-w-md px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 ">
            {[...Array(5)].map((_, i) => <span key={i} className="text-[#00aaff] text-[16px]">★</span>)}
          </div>
          
          {/* ✅ FIXED: Applying titleSize dynamically */}
          <h3 className={`${testimonialData[index].titleSize} tracking-[0.25em] font-medium text-gray-400 uppercase leading-none`}>
            {testimonialData[index].title}
          </h3>
          
          {/* ✅ FIXED: Applying nameSize dynamically */}
          <p className={`${testimonialData[index].nameSize} font-medium  uppercase tracking-[0.25em] text-gray-400`}>
            {testimonialData[index].name}
          </p>
          <p className={`${testimonialData[index].componySize} font-medium max-w-xs uppercase tracking-[0.25em] text-gray-400`}>
            {testimonialData[index].compony}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- DESKTOP GRID ---
const DesktopGrid = ({ className }) => {
  return (
    <div className={`w-full h-full relative font-oswald ${className}`}>
      {testimonialData.map((item, idx) => (
        <div key={idx} className={`absolute ${item.pos} text-center w-60`}>
          <div className="flex justify-center gap-1 opacity-60">
            {[...Array(5)].map((_, i) => <span key={i} className=" text-[20px]">★</span>)}
          </div>
          
          {/* ✅ FIXED: Applying titleSize dynamically */}
          <h3 className={`${item.titleSize} font-medium uppercase leading-none tracking-tighter`}>
            {item.title}
          </h3>
          
          {/* ✅ FIXED: Applying nameSize dynamically */}
          <p className={`${item.nameSize} font-medium uppercase tracking-widest opacity-50`}>
            {item.name}
          </p>
          <p className={`${item.componySize} font-medium  uppercase tracking-widest opacity-50`}>
            {item.compony}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;