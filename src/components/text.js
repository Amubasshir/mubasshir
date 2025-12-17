// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useSpring, useTransform, useMotionValue, animate, AnimatePresence, useScroll } from 'framer-motion';

// const HeroSection = () => {
//   const containerRef = useRef(null);
  
//   // --- SCROLL PARALLAX LOGIC ---
//   const { scrollY } = useScroll();
//   const textParallaxY = useTransform(scrollY, [0, 500], [0, -300]);
  
//   // ✅ NEW: Image and Foreground Text move DOWN slightly (Positive Y) on scroll
//   const imageParallaxY = useTransform(scrollY, [0, 500], [0, 50]);
  
//   const opacity = useTransform(scrollY, [0, 800], [1, 0]);

//   // --- MOUSE & EYE TRACKING ---
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

//   const eyeX = useTransform(springX, [-0.5, 0.5], [-4, 4]);
//   const eyeY = useTransform(springY, [-0.5, 0.5], [-1, 1]);
//   const textX = useTransform(springX, [-0.5, 0.5], [30, -30]);

//   const handleMouseMove = (e) => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const xPct = (e.clientX - width / 2) / width;
//     const yPct = (e.clientY - height / 2) / height;
//     mouseX.set(xPct);
//     mouseY.set(yPct);
//   };

//   // --- LIGHT SHIMMER EFFECT ---
//   const shimmer = useMotionValue(0);
//   useEffect(() => {
//     const animation = animate(shimmer, [0, 1], {
//       duration: 4,
//       repeat: Infinity,
//       ease: "linear",
//       repeatDelay: 1,
//     });
//     return () => animation.stop();
//   }, []);

//   const maskImage = useTransform(shimmer, (val) => `linear-gradient(110deg, transparent ${val * 100 - 25}%, black ${val * 100}%, transparent ${val * 100 + 25}%)`);

//   return (
//     <>
//       <div className="h-screen w-full"></div>

//       <motion.div
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         style={{ opacity }}
//         className="fixed top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start text-gray-300 font-oswald bg-[#0a0a0a] z-0"
//       >
//         <style jsx global>{`
//           @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
//           .font-oswald { font-family: 'Oswald', sans-serif; }
//         `}</style>

//         {/* --- LAYER 1: BACKGROUND IMAGE --- */}
//         <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80">
//            <img src="https://framerusercontent.com/images/S0WuutzwwVpJ702VbwusD6PS8.jpg?scale-down-to=1024" alt="" className="w-full h-full object-cover object-center" />
//         </div>

//         {/* --- LAYER 2: BIG BG TEXT (Moves UP) --- */}
//         <motion.div
//           style={{ x: textX, y: textParallaxY }}
//           className="absolute top-[40%] md:top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none"
//         >
//          <h1 className="text-[20vw] lg:text-[25vw] font-medium font-oswald text-white leading-[0.8] tracking-[-0.05em] opacity-[0.03] uppercase whitespace-nowrap hidden md:block">
//             SANI MANI
//                  </h1>
//         </motion.div>

//         {/* --- LAYER 3: MOBILE/TABLET SLIDER --- */}
//         <div className="lg:hidden absolute top-[10%] md:top-0 left-0 w-full z-50 flex justify-center">
//           <TestimonialSlider />
//         </div>

//          {/* --- LAYER 4: DESKTOP TESTIMONIAL GRID (LIGHT INSIDE TEXT ONLY) --- */}
//                 <div className="absolute inset-0 z-10 w-full h-full pointer-events-none hidden lg:block">
                    
//                     {/* 1. Base Layer: Dark Text (Always Visible) */}
//                     <div className="absolute inset-0 w-full h-full z-10">
//                         <DesktopGrid className="text-[#333]" />
//                     </div>
                    
//                     {/* 2. Highlight Layer: Moving Light (Visible ONLY inside Text) */}
//                     <motion.div
//                       className="absolute inset-0 w-full h-full z-20"
//                       animate={{
//                         maskPosition: ["0% 0%", "100% 100%"]
//                       }}
//                       transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: "linear"
//                       }}
//                       style={{
                       
                        
//                         maskImage: "repeating-linear-gradient(110deg, transparent, transparent 10%, black 10%, black 11%, transparent 11%)",
//                         WebkitMaskImage: "repeating-linear-gradient(110deg, transparent, transparent 10%, black 10%, black 11%, transparent 11%)",
                        
//                         maskSize: "200% 200%",
//                         WebkitMaskSize: "200% 200%",
                        
                        
//                         maskComposite: "source-in",
//                         WebkitMaskComposite: "source-in"
//                       }}
//                     >
                      
//                       <DesktopGrid className="text-gray-400 opacity-50" />
//                     </motion.div>
//                 </div>
        

//         {/* --- LAYER 5: CHARACTER IMAGE (Moves DOWN Slightly) --- */}
       
//         <motion.div
//           style={{ y: imageParallaxY }}
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-30 flex justify-center items-end h-[85vh] md:h-[95vh] lg:h-[100vh]"
//         >
          
//           <div className="absolute w-80 h-80 rounded-full bg-white blur-[100px] top-40 opacity-70 pointer-events-none z-0"></div>

//           <div className="relative h-full w-auto aspect-[0.88] flex justify-center items-end scale-110 md:scale-125 origin-bottom">
//             <img
//               src="https://framerusercontent.com/images/pt1ZVx9DoJcuYYktDON1hD7WU.png"
//               alt="Sahil"
//               className="h-full w-auto object-contain object-bottom pointer-events-none hidden lg:block"
//             />
//             <img
//               src="https://framerusercontent.com/images/vqwIIxHT82GnCjsfNs4GJhNcjo.png?scale-down-to=1024"
//               alt="Sahil Mobile"
//               className="w-full h-full object-contain object-bottom pointer-events-none lg:hidden block"
//             />
            
//             {/* Eye Tracking */}
//             <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
//               <div className="absolute top-[42.7%] left-[42.7%] w-[18px] flex items-center justify-center">
//                   <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/PNvq0DmS4PLV65XRbZYfxEvB4hg.png" className="w-full" />
//               </div>
//               <div className="absolute top-[42.7%] right-[43.2%] w-[18px] flex items-center justify-center">
//                   <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/RPggzesnBIiZhEFIt1RBijR3oQ.png" className="w-full" />
//               </div>
//               <div className="absolute top-[40.5%] left-[49.5%] -translate-x-1/2 w-[29.5%] opacity-90">
//                   <img src="https://framerusercontent.com/images/XdiR5SlQ8wxyaKg8JVgW7kOVTw.png" alt="" className="w-full" />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* --- LAYER 6: BOTTOM TITLES (Moves DOWN Slightly with Image) --- */}
//         {/* ✅ ADDED: style={{ y: imageParallaxY }} */}
//         <motion.div
//           style={{ y: imageParallaxY }}
//           className="absolute bottom-24 md:-bottom-4 z-50 text-center w-full px-4 pointer-events-none"
//         >
//           <h2 className=" text-white uppercase opacity-40  mb-2">
//           <span className='text-[12px] md:text-5xl font-normal'>I do UX</span><br /><span className='text-[12px] md:text-5xl font-normal'>That Drives</span>
//           </h2>
//           <h2 className="text-4xl  md:text-5xl font-medium text-white uppercase leading-[0.8] tracking-tighter drop-shadow-2xl opacity-55">
//             Business Growth
//       </h2>
      



//          {/* Rotating Star Animation (Perfect Center) */}
// <div className="mt-6 w-full flex justify-center items-center z-50 relative">
  
//   {/* Container Wrapper (Bigger Size for Bigger Triangles) */}
//   <div className="relative w-16 h-16 flex items-center justify-center">
    
//     {/* 1. First Triangle (Rotates 180° to become Upward ▲) */}
//     <motion.div
//       className="absolute border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-[#00aaff] drop-shadow-[0_0_15px_#00aaff] mix-blend-screen origin-center"
//       animate={{
//         rotate: [0, 180, 180, 0],
//         y: [0, -7, -7, 0]
//       }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         times: [0, 0.4, 0.7, 1],
//         repeat: Infinity,
//         repeatDelay: 0.5
//       }}
//     ></motion.div>

//     {/* 2. Second Triangle (Rotates 360° to stay Downward ▼) */}
//     <motion.div
//       className="absolute border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-[#00aaff] drop-shadow-[0_0_15px_#00aaff] mix-blend-screen origin-center"
//       animate={{
//         rotate: [0, 360, 360, 0],
//         y: [0, 0, 0, 0]
//       }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         times: [0, 0.4, 0.7, 1],
//         repeat: Infinity,
//         repeatDelay: 0.5
//       }}
//     ></motion.div>

//   </div>
// </div>
//         </motion.div>

      
//       </motion.div>
//     </>
//   );
// };

// // --- DATA ---
// const testimonialData = [
//   { title: "VISIONARY", name: "HEMANT CHARYA", pos: "top-[15%] left-[8%]" },
//   { title: "PROACTIVE", name: "ADRIAN ORNIK", pos: "top-[48%] left-[5%]" },
//   { title: "VERSATILE", name: "ALOK ANAND", pos: "top-[22%] left-[28%]" },
//   { title: "ADAPTABLE", name: "ROHAN CHANDHOK", pos: "top-[42%] left-[26%]" },
//   { title: "DEDICATED", name: "ROBERT SMITH", pos: "top-[18%] right-[8%]" },
//   { title: "TRAILBLAZER", name: "KABIR MALKANI", pos: "top-[40%] right-[12%]" },
  
//   { title: "MASTERFULL", name: "PHIL CLEVENGER", pos: "top-[65%] right-[6%]" },
//   { title: "INNOVATIVE", name: "JAYAN K.", pos: "bottom-[10%] left-[5%]" },
//   { title: "RELIABLE", name: "DINESH KRISHNAN", pos: "bottom-[35%] right-[25%]" },
  
//   { title: "MASTERFULL", name: "PHIL CLEVENGER", pos: "top-[60%] left-[40%]" },
//   { title: "INNOVATIVE", name: "JAYAN K.", pos: "top-[15%] right-[25%]" },
// ];

// // --- MOBILE/TABLET SLIDER ---
// const TestimonialSlider = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonialData.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="h-32 flex flex-col items-center justify-center font-oswald w-full max-w-md px-4">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 10, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: -10, scale: 0.95 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="text-center"
//         >
//           <div className="flex justify-center gap-1 mb-2">
//             {[...Array(5)].map((_, i) => <span key={i} className="text-[#00aaff] text-[16px]">★</span>)}
//           </div>
//           <h3 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tighter leading-none drop-shadow-lg">
//             {testimonialData[index].title}
//           </h3>
//           <p className="text-[10px] md:text-xs font-medium mt-2 uppercase tracking-[0.25em] text-gray-400">
//             {testimonialData[index].name}
//           </p>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- DESKTOP GRID ---
// const DesktopGrid = ({ className }) => {
//   return (
//     <div className={`w-full h-full relative font-oswald ${className}`}>
//       {testimonialData.map((item, idx) => (
//         <div key={idx} className={`absolute ${item.pos} text-center w-60`}>
//           <div className="flex justify-center gap-1 mb-1 opacity-60">
//             {[...Array(5)].map((_, i) => <span key={i} className="text-gray-500 text-[20px]">★</span>)}
//           </div>
//           <h3 className="text-3xl xl:text-4xl font-bold uppercase leading-none tracking-tighter">{item.title}</h3>
//           <p className="text-[11px] font-medium mt-2 uppercase tracking-widest opacity-50">{item.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;


'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue, animate, AnimatePresence, useScroll } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  
  // --- SCROLL PARALLAX LOGIC ---
  const { scrollY } = useScroll();
  const textParallaxY = useTransform(scrollY, [0, 500], [0, -300]); 
  
  // ✅ NEW: Image and Foreground Text move DOWN slightly (Positive Y) on scroll
  const imageParallaxY = useTransform(scrollY, [0, 500], [0, 50]); 
  
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  // --- MOUSE & EYE TRACKING ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const eyeX = useTransform(springX, [-0.5, 0.5], [-4, 4]); 
  const eyeY = useTransform(springY, [-0.5, 0.5], [-1, 1]);
  const textX = useTransform(springX, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e) => {
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
        className="fixed top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start text-gray-300 font-oswald bg-[#0a0a0a] z-0"
      >
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
          .font-oswald { font-family: 'Oswald', sans-serif; }
        `}</style>

        {/* --- LAYER 1: BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90">
           <img src="https://framerusercontent.com/images/S0WuutzwwVpJ702VbwusD6PS8.jpg?scale-down-to=1024" alt="" className="w-full h-full object-cover object-center" /> 
        </div>
   <div className="absolute w-96 h-96 rounded-full bg-red-100 blur-[200px] top-30 opacity-30 pointer-events-none z-30"></div>
      
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50 flex justify-center items-center ">
           <img src="https://framerusercontent.com/images/hXGfj7QYzUxpGpYMeb3MfCxv6Y.png" alt="" className="w-[800px] h-full object-cover object-center" /> 
        </div>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50 flex justify-center items-center ">
           <img src="https://framerusercontent.com/images/O1Y9JKiQNEXruAmXdiiHcq6LgzE.png" alt="" className="w-[800px] h-full object-cover object-center" /> 
        </div>

        

        {/* --- LAYER 2: BIG BG TEXT (Moves UP) --- */}
        <motion.div 
          style={{ x: textX, y: textParallaxY }} 
          className="absolute top-[40%] md:top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none"
        >
         <h1 className="text-[20vw] lg:text-[25vw] font-medium font-oswald text-black leading-[0.8] tracking-[-0.05em] opacity-25 uppercase whitespace-nowrap hidden md:block">
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
                        maskPosition: ["0% 0%", "100% 100%"] 
                      }}
                      transition={{
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                       
                        
                        maskImage: "repeating-linear-gradient(110deg, transparent, transparent 10%, black 10%, black 11%, transparent 11%)",
                        WebkitMaskImage: "repeating-linear-gradient(110deg, transparent, transparent 10%, black 10%, black 11%, transparent 11%)",
                        
                        maskSize: "200% 200%",
                        WebkitMaskSize: "200% 200%",
                        
                        
                        maskComposite: "source-in", 
                        WebkitMaskComposite: "source-in"
                      }}
                    >
                      
                      <DesktopGrid className="text-gray-400 opacity-50" />
                    </motion.div>
                </div>
        

        {/* --- LAYER 5: CHARACTER IMAGE (Moves DOWN Slightly) --- */}
       
        <motion.div 
          style={{ y: imageParallaxY }} 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-30 flex justify-center items-end h-[85vh] md:h-[95vh] lg:h-[100vh]"
        >
          
          

          <div className="relative h-full w-auto aspect-[0.88] flex justify-center items-end scale-110 md:scale-125 origin-bottom">
            <img 
              src="https://framerusercontent.com/images/pt1ZVx9DoJcuYYktDON1hD7WU.png" 
              alt="Sahil" 
              className="h-full w-auto object-contain object-bottom pointer-events-none hidden lg:block"
            />
            <img 
              src="https://framerusercontent.com/images/vqwIIxHT82GnCjsfNs4GJhNcjo.png?scale-down-to=1024" 
              alt="Sahil Mobile" 
              className="w-full h-full object-contain object-bottom pointer-events-none lg:hidden block"
            />
            
            {/* Eye Tracking */}
            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
              <div className="absolute top-[42.7%] left-[42.7%] w-[18px] flex items-center justify-center">
                  <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/PNvq0DmS4PLV65XRbZYfxEvB4hg.png" className="w-full" />
              </div>
              <div className="absolute top-[42.7%] right-[43.2%] w-[18px] flex items-center justify-center">
                  <motion.img style={{ x: eyeX, y: eyeY }} src="https://framerusercontent.com/images/RPggzesnBIiZhEFIt1RBijR3oQ.png" className="w-full" />
              </div>
              <div className="absolute top-[40.5%] left-[49.5%] -translate-x-1/2 w-[29.5%] opacity-90">
                  <img src="https://framerusercontent.com/images/XdiR5SlQ8wxyaKg8JVgW7kOVTw.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- LAYER 6: BOTTOM TITLES (Moves DOWN Slightly with Image) --- */}
        {/* ✅ ADDED: style={{ y: imageParallaxY }} */}
        <motion.div 
          style={{ y: imageParallaxY }}
          className="absolute bottom-24 md:-bottom-4 z-50 text-center w-full px-4 pointer-events-none"
        >
          <h2 className=" text-white uppercase opacity-40  mb-2">
          <span className='text-[12px] md:text-5xl font-normal'>I do UX</span><br /><span className='text-[12px] md:text-5xl font-normal'>That Drives</span>
          </h2>
          <h2 className="text-4xl  md:text-5xl font-medium text-white uppercase leading-[0.8] tracking-tighter drop-shadow-2xl opacity-55">
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
  { title: "VISIONARY", name: "HEMANT CHARYA", pos: "top-[15%] left-[8%]" },
  { title: "PROACTIVE", name: "ADRIAN ORNIK", pos: "top-[48%] left-[5%]" },
  { title: "VERSATILE", name: "ALOK ANAND", pos: "top-[22%] left-[28%]" },
  { title: "ADAPTABLE", name: "ROHAN CHANDHOK", pos: "top-[42%] left-[26%]" },
  { title: "DEDICATED", name: "ROBERT SMITH", pos: "top-[18%] right-[8%]" },
  { title: "TRAILBLAZER", name: "KABIR MALKANI", pos: "top-[40%] right-[12%]" },
  
  { title: "MASTERFULL", name: "PHIL CLEVENGER", pos: "top-[65%] right-[6%]" },
  { title: "INNOVATIVE", name: "JAYAN K.", pos: "bottom-[10%] left-[5%]" },
  { title: "RELIABLE", name: "DINESH KRISHNAN", pos: "bottom-[35%] right-[25%]" },
  
  { title: "MASTERFULL", name: "PHIL CLEVENGER", pos: "top-[60%] left-[40%]" },
  { title: "INNOVATIVE", name: "JAYAN K.", pos: "top-[15%] right-[25%]" },
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
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <span key={i} className="text-[#00aaff] text-[16px]">★</span>)}
          </div>
          <h3 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-tighter leading-none drop-shadow-lg">
            {testimonialData[index].title}
          </h3>
          <p className="text-[10px] md:text-xs font-medium mt-2 uppercase tracking-[0.25em] text-gray-400">
            {testimonialData[index].name}
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
          <div className="flex justify-center gap-1 mb-1 opacity-60">
            {[...Array(5)].map((_, i) => <span key={i} className="text-gray-500 text-[20px]">★</span>)}
          </div>
          <h3 className="text-3xl xl:text-4xl font-bold uppercase leading-none tracking-tighter">{item.title}</h3>
          <p className="text-[11px] font-medium mt-2 uppercase tracking-widest opacity-50">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;