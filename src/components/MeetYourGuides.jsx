'use client'
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const guides = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
];

const PremiumArchSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStacked, setIsStacked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerOffset = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        setIsStacked(Math.abs(elementCenter - centerOffset) > 155);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAction = (type) => {
    if (type === 'next') {
      setCurrentIndex((prev) => (prev + 1) % guides.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + guides.length) % guides.length);
    }
  };

  const visibleCards = useMemo(() => {
    // রেঞ্জ ৩ করা হয়েছে যাতে অতিরিক্ত কার্ড স্ক্রিনের বাইরে মুভ না করে
    const range = 3; 
    const cards = [];
    for (let i = -range; i <= range; i++) {
      let index = (currentIndex + i + guides.length) % guides.length;
      cards.push({
        url: guides[index],
        offset: i,
        cardIndex: index 
      });
    }
    return cards;
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="bg-[#111] min-h-screen flex flex-col items-center pt-20 overflow-hidden select-none font-sans text-white relative">
      
      <div className={`text-center z-[110] mb-32 transition-all duration-1000 ${isStacked ? 'opacity-0 scale-90' : 'opacity-100'}`}>
        <p className="text-[#ff5500] font-bold text-sm md:text-2xl mb-4">Hybrid Gaming Engine</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">All Heroes</h2>
      </div>

      <div className="relative w-full h-[-600px] flex items-center justify-center -mt-56">
        
        <div className="absolute bottom-[-1150px] flex items-center justify-center w-full pb-36">
          {visibleCards.map((card) => {
            const isCenter = card.offset === 0;
            const isEdge = Math.abs(card.offset) === 3; // একদম ধারের কার্ড
            
            const angle = isStacked ? (card.offset * 8) : (card.offset * 26); 
            const translateY = isStacked ? (-940 + Math.abs(card.offset) * 8) : -720;
            const scale = isStacked ? (1 - Math.abs(card.offset) * 0.04) : 1;

            return (
              <div
                key={card.cardIndex} 
                className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.2, 1, 0.3, 1)]"
                style={{
                  transform: `rotate(${angle}deg) translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: 'center center',
                  zIndex: 100 - Math.abs(card.offset),
                  // ধারের কার্ডগুলো মুভ করার সময় যাতে হুট করে দেখা না যায়, সেজন্য অপাসিটি কন্ট্রোল
                  opacity: isEdge ? 0 : 1, 
                  visibility: isEdge ? 'hidden' : 'visible',
                  pointerEvents: isCenter ? 'auto' : 'none',
                }}
              >
                <div 
                  className="relative w-[260px] h-[420px] rounded-[5px] overflow-hidden shadow-2xl border border-white/10 bg-[#050505]"
                >
                  <img 
                    src={card.url} 
                    alt="Hero" 
                    className="w-full h-full object-cover" 
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isStacked && !isCenter ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`absolute bottom-[-580px] flex gap-14 z-[120] transition-all duration-700 ${isStacked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button onClick={() => handleAction('prev')} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-75 transition-all hover:bg-[#FF5C00]">
            <ChevronLeft size={35} />
          </button>
          
          <button onClick={() => handleAction('next')} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-75 transition-all hover:bg-[#FF5C00]">
            <ChevronRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumArchSlider;