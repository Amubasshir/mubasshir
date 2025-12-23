import React from 'react';

const CarouselCard = ({ item, isActive, offset }) => {
  // A larger radius (850px) creates the gentle shallow arc seen in your UI
  const radius = 850; 
  const rotation = offset * 12; // Controls how spread out the cards are

  // Stacking and visual depth
  const zIndex = 100 - Math.floor(Math.abs(offset) * 10);
  const opacity = Math.max(0, 1 - Math.abs(offset) * 0.3);
  const scale = 1 - Math.abs(offset) * 0.08;

  return (
    <div
      className="absolute transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] select-none"
      style={{
        transformOrigin: `center ${radius}px`,
        transform: `translateX(-50%) rotate(${rotation}deg) scale(${scale})`,
        zIndex,
        opacity,
        left: '50%',
        top: '40px',
      }}
    >
      {/* Thick white border and heavy rounded corners to match screenshot */}
      <div className="relative group w-[220px] h-[320px] md:w-[300px] md:h-[440px] overflow-hidden rounded-[2.5rem] md:rounded-[3.2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[12px] border-white bg-zinc-200">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* The Black Pill/Button UI */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
          <button className={`flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white border border-white/20 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0 group-hover:opacity-100'}`}>
            <span className="text-[11px] md:text-[14px] font-bold tracking-tight">
              {item.name}
            </span>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-2 md:w-3 h-2 md:h-3 text-black fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;