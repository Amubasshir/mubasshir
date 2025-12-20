'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const SPEED = 0.005; 
  const CARD_COUNT = 15; 
  
  const CIRCLE_RADIUS = 1200; 
  const DEPTH_STRENGTH = 3000; 
  const GAP_ANGLE = 0.13; 

  // ✅ Y-AXIS CONFIGURATION (এখানে পরিবর্তন করুন)
  // ১. ARCH_STRENGTH: এটা বাড়ালে দুই পাশের কার্ড বেশি নিচে নেমে যাবে (বাঁকানো হবে)। ০ দিলে সোজা থাকবে।
  const ARCH_STRENGTH = 2; 
  
  // ২. VERTICAL_OFFSET: এটা দিয়ে পুরো স্লাইডারকে উপরে (-) বা নিচে (+) নামাতে পারবেন।
  const VERTICAL_OFFSET = -9; 

  const [progress, setProgress] = useState(0);
  const requestRef = useRef();

  // Cards Data...
   const cards = [
    { id: 1, image: "https://framerusercontent.com/images/yvhQLfcVfRDA4M8BE59k74bo.png?scale-down-to=512" },
    { id: 2, image: "https://framerusercontent.com/images/dAio0KHRY7lHrZi8wg3eNt62sQk.png?scale-down-to=512" },
    { id: 3, image: "https://framerusercontent.com/images/e0FkdiSOGxltpb5MtRn4baq1apw.png?scale-down-to=1024" },
    { id: 4, image: "https://framerusercontent.com/images/Z1Nmm1vGXXn1hP8KdHamuJ3DQ8U.png?scale-down-to=512" },
    { id: 5, image: "https://framerusercontent.com/images/fOekqWbHEGdI4xWeC1u2BievpAA.png?scale-down-to=512" },
    { id: 6, image: "https://framerusercontent.com/images/rBhlRqKtaT1HJXWYXIk0blfFQ.png?scale-down-to=512" },
    { id: 7, image: "https://framerusercontent.com/images/BEeoXePZVGmIOSGR0fFyBM25tzQ.png?scale-down-to=512" },
    { id: 8, image: "https://framerusercontent.com/images/9aPHcu4RyjGXugW5qJpz6MupeE.webp" },
    { id: 9, image: "https://framerusercontent.com/images/4wxNhMbTyt1WpsjzbsWngqY.png?scale-down-to=1024" },
    { id: 10, image: "https://framerusercontent.com/images/yvhQLfcVfRDA4M8BE59k74bo.png?scale-down-to=512" },
    { id: 11, image: "https://framerusercontent.com/images/dAio0KHRY7lHrZi8wg3eNt62sQk.png?scale-down-to=512" },
    { id: 12, image: "https://framerusercontent.com/images/e0FkdiSOGxltpb5MtRn4baq1apw.png?scale-down-to=1024" },
    { id: 13, image: "https://framerusercontent.com/images/Z1Nmm1vGXXn1hP8KdHamuJ3DQ8U.png?scale-down-to=512" },
    { id: 14, image: "https://framerusercontent.com/images/fOekqWbHEGdI4xWeC1u2BievpAA.png?scale-down-to=512" },
    { id: 15, image: "https://framerusercontent.com/images/rBhlRqKtaT1HJXWYXIk0blfFQ.png?scale-down-to=512" },
  ];



  const animate = () => {
    setProgress((prev) => (prev + SPEED) % CARD_COUNT);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="min-h-screen bg-[#111]  text-white overflow-hidden flex flex-col items-center justify-center py-20 relative font-sans">
      
      <div className="text-center z-50 mb-4 max-w-3xl px-4">
             <h4 className="text-[#ff5500] font-bold text-sm md:text-base uppercase tracking-widest mb-4">
               Behind the Designs
             </h4>
             <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
               Curious What Else I’ve <br className="hidden md:block" /> Created?
             </h2>
             <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
               Explore more brand identities, packaging, and digital design work in my extended portfolio.
             </p>
           </div>
           {/* TOP BUTTON */}
           <div className="z-50 -mb-12">
             <button className="group bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold text-sm flex items-center gap-4 hover:scale-105 transition shadow-lg">
               <span>See more Projects</span>
               <div className="bg-[#ff5500] text-white p-2 rounded-full group-hover:rotate-45 transition">
                 <ArrowRight size={18} strokeWidth={3} />
               </div>
             </button>
           </div>

      <div className="relative w-full max-w-[100vw] h-[550px] md:h-[650px] flex items-center justify-center perspective-[700px]">
        
        {/* ... Fade Masks ... */}

        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
          {cards.map((card, index) => {
            
            let offset = (index - progress) % CARD_COUNT;
            if (offset < -CARD_COUNT / 2) offset += CARD_COUNT;
            if (offset > CARD_COUNT / 2) offset -= CARD_COUNT;

            const dist = Math.abs(offset);
            const theta = offset * GAP_ANGLE; 

            // X Position
            const x = Math.sin(theta) * CIRCLE_RADIUS;
            
            // ✅ Y Position Calculation (Updated)
            // Math.pow(dist, 2) মানে দূরত্ব বাড়লে Y ভ্যালু দ্রুত বাড়বে (প্যারাবোলিক কার্ভ)
            const y = (Math.pow(dist, 2) * ARCH_STRENGTH) + VERTICAL_OFFSET;

            // Z Position
            const z = (1 - Math.cos(theta)) * DEPTH_STRENGTH; 

            // Rotation
            const rotateY = -theta * (180 / Math.PI) * 3.2; 

            // Scale
            const scale = 0.5 + (Math.pow(dist, 1.5) * 0.05);

            const opacity = dist < 5.7 ? 5 :5;
            const zIndex = 100 + Math.floor(z); 

            return (
              <div 
                key={card.id}
                className="absolute will-change-transform"
                style={{
                  // ✅ Y ভ্যালু এখানে অ্যাপ্লাই হচ্ছে
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  transformOrigin: "center center",
                  transition: 'opacity 0.2s ease-out'
                }}
              >
                {/* Card Design */}
                <div 
                  className="w-[200px] h-[300px] md:w-[280px] md:h-[450px] rounded-[30px] overflow-hidden shadow-2xl bg-[#121212] border border-white/5"
                  style={{
                    filter: `brightness(${Math.min(120, 60 + (dist * 15))}%)`, 
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.9)'
                  }}
                >
                  <img src={card.image} alt="Project" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ... Footer ... */}
         <div className="w-full max-w-7xl  px-4 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-cente ">
          <Step number="01" label="Strategy & Planning" />
          <Step number="02" label="Design & Development" />
          <Step number="03" label="Launch & Growth" />
          <Step number="04" label="Ongoing Support" />
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-[#ff5500] font-extrabold text-sm mb-1">#{number}</span>
    <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap uppercase tracking-wider font-semibold">
      {label}
    </span>
  </div>
);


 
export default PortfolioSection;