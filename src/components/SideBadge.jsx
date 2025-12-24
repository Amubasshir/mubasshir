// components/SideBadge.jsx
import React from 'react';

const SideBadge = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] transition-all duration-300">
      {/* Mobile: w-8, Gap-8, Text-sm 
        Desktop (md): w-12, Gap-16, Text-2xl 
      */}
      <div className="w-8 md:w-12 py-4 md:py-6 flex flex-col items-center gap-8 md:gap-16 rounded-l-xl md:rounded-l-2xl border border-white/10 bg-black/40 md:bg-black/50 backdrop-blur-md shadow-2xl">
        
        {/* Logo/Letter */}
        <span className="font-bold text-lg md:text-2xl text-white font-serif">
          W.
        </span>

        {/* Vertical Text */}
        <span 
          className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-widest font-bold text-white/90"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Nominee
        </span>
      </div>
    </div>
  );
};

export default SideBadge;