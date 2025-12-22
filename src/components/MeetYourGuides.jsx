"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react';

const MeetYourGuides = () => {
  const guides = [
    { id: 1, img: "https://framerusercontent.com/images/ODJhWRk5wCb5cybdLgcKObVbwk.png" }, 
    { id: 2, img: "https://framerusercontent.com/images/O8kqDvhJzW7n3I7u4UE4VTZIEas.png" }, 
    { id: 3, img: "https://framerusercontent.com/images/JOqvhPEZu18F6qYfiLZFYW4RiBo.png" }, 
    { id: 4, img: "https://framerusercontent.com/images/k64jd9JZg2STpec9ROq9XmXmzrs.png" }, 
    { id: 5, img: "https://framerusercontent.com/images/unPTlAup0AJPIvdR2osrG3Qnb0.png" }, 
    { id: 6, img: "https://framerusercontent.com/images/OAI2GR5QfVyXe6tLG5H5I7BfgDU.png?scale-down-to=1024" }, 
    { id: 7, img: "https://framerusercontent.com/images/Bwa3k5FBSpRuh5NvcduC8WFKrL0.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(3);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % guides.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + guides.length) % guides.length);

  // --- Animation Variants ---
  const cardVariants = {
    // ১. যখন স্ক্রিনের বাইরে থাকবে (Stack/Pile Mode)
    offscreen: (index) => ({
      y: 200,             // অনেক নিচে থাকবে
      x: 0,               // সব মাঝখানে থাকবে
      rotate: (index - 3) * 10, // হালকা বাঁকা হয়ে স্তূপ আকারে থাকবে
      scale: 0.5,         // ছোট থাকবে
      opacity: 0,         // দেখা যাবে না
      transition: { 
        duration: 0.4, 
        ease: "easeInOut" 
      }
    }),

    // ২. যখন স্ক্রিনে আসবে (Spread/Arch Mode)
    onscreen: (index) => {
      // আর্চ ক্যালকুলেশন
      const diff = index - currentIndex;
      let displayDiff = diff;
      if (diff > guides.length / 2) displayDiff -= guides.length;
      if (diff < -guides.length / 2) displayDiff += guides.length;

      const absDiff = Math.abs(displayDiff);
      const isVisible = absDiff <= 2.8; 
      const opacity = isVisible ? (absDiff > 2 ? 1 - (absDiff - 2) * 2 : 1) : 0;

      const angleStep = 14; 
      const xOffset = 190;
      const yCurve = 45;

      const rotate = displayDiff * angleStep;
      const x = displayDiff * xOffset;
      const y = absDiff * yCurve + (Math.pow(absDiff, 2) * 12); // আর্চ কার্ভ

      return {
        x: x,
        y: y,
        rotate: rotate,
        scale: 1 - (absDiff * 0.06),
        opacity: opacity,
        zIndex: 50 - Math.round(absDiff * 10),
        transition: { 
          type: "spring", 
          stiffness: 60, 
          damping: 15, 
          delay: index * 0.05 // স্ট্যাগার এফেক্ট (একটার পর একটা আসবে)
        }
      };
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#111] flex flex-col items-center overflow-hidden font-sans pt-16 py-20 pb-20 rounded-b-[70px] z-10">
      
      {/* Header with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // বারবার অ্যানিমেশন হবে
        transition={{ duration: 0.6 }}
        className="text-center z-10 px-4 mb-6 max-w-2xl mx-auto"
      >
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 italic">
          NOT JUST ANOTHER AI
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-medium text-[#fff] mb-5">
          Meet your AI guide
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
          Every guide brings a unique style and is here to listen, lift you up, and help you grow.
        </p>
      </motion.div>

      {/* Slider Section */}
      <div className="relative w-full h-[480px] flex justify-center items-start mt-4">
        <div className="relative w-full max-w-5xl flex justify-center items-center">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              custom={index}
              
              // ✅ অ্যানিমেশন স্টেট কনফিগারেশন
              initial="offscreen"      // শুরুতে স্তূপ হয়ে থাকবে
              whileInView="onscreen"   // স্ক্রিনে আসলে ছড়িয়ে যাবে
              viewport={{ once: false, amount: 0.3 }} // 30% দেখা গেলেই ট্রিগার হবে, বারবার হবে
              variants={cardVariants}  // ভেরিয়েন্ট ব্যবহার করা হয়েছে
              
              className="absolute top-5 origin-bottom shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] bg-white overflow-hidden border-[2px] border-white rounded-[32px]"
              style={{
                width: '235px',
                height: '345px',
              }}
            >
              <img
                src={guide.img}
                alt={`Guide ${guide.id}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              
            
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="relative z-50 flex gap-4 mt-[-50px] mb-12"
      >
        <button onClick={handlePrev} className="w-11 h-11 bg-white text-orange-500 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <ChevronLeft size={22} />
        </button>
        <button onClick={handleNext} className="w-11 h-11 bg-white text-orange-500 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <ChevronRight size={22} />
        </button>
      </motion.div>

      {/* Footer Content */}
      {/* <div className="max-w-6xl px-8 text-center z-10 pt-5">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-12">Empathy on demand</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-left">
          <FeatureItem title="Always remembers" desc="Every insight and breakthrough is saved, so your guide can track your progress." />
          <FeatureItem title="Always there for you, 24/7" desc="Your guides work around the clock, spotting patterns and stepping in exactly when needed." />
          <FeatureItem title="Reads you instantly" desc="With advanced emotional tracking, your guide responds with empathy and care." />
        </div>
      </div> */}
    </section>
  );
};

const FeatureItem = ({ title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    className="flex flex-col gap-2"
  >
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-orange-400 fill-current" />
      <h3 className="font-bold text-[16px] text-gray-900 leading-tight">{title}</h3>
    </div>
    <p className="text-gray-500 text-[13.5px] leading-relaxed pl-6">{desc}</p>
  </motion.div>
);

export default MeetYourGuides;