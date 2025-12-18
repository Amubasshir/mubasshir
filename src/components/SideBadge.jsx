// components/SideBadge.jsx
import React from 'react';

const SideBadge = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] ">
      <div className="w-12 py-6 flex flex-col items-center gap-16 rounded-l-2xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl">
        <span className="font-bold text-2xl text-white font-serif">W.</span>
        <span 
          className="text-[11px] uppercase tracking-widest font-bold text-white"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Nominee
        </span>
      </div>
    </div>
  );
};

export default SideBadge;