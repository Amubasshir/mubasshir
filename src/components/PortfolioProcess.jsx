'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  // ===== CONFIG =====
  const SPEED = 0.003;
  const SPACING = 200;

  const [progress, setProgress] = useState(0);
  const requestRef = useRef();

  // ===== DATA =====
  const cards = [
    { id: 1, image: "https://images.unsplash.com/photo-1623944898147-384355b253c0?q=80&w=1974&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1550949826-b8c7e96b51c8?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1888&auto=format&fit=crop" },
    { id: 7, image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1887&auto=format&fit=crop" },
    { id: 8, image: "https://images.unsplash.com/photo-1623944898147-384355b253c0?q=80&w=1974&auto=format&fit=crop" },
    { id: 9, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" },
    { id: 10, image: "https://images.unsplash.com/photo-1550949826-b8c7e96b51c8?q=80&w=2070&auto=format&fit=crop" },
    { id: 11, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" },
    { id: 12, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" },
    { id: 13, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1888&auto=format&fit=crop" },
    { id: 14, image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1887&auto=format&fit=crop" },
  ];

  const CARD_COUNT = cards.length;

  // ===== ANIMATION LOOP =====
  const animate = () => {
    setProgress((prev) => (prev + SPEED) % CARD_COUNT);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center py-16 relative">

      {/* TOP BUTTON */}
      <div className="z-20 mb-12">
        <button className="group bg-white text-black pl-6 pr-1.5 py-2 rounded-full font-bold text-sm flex items-center gap-4 hover:scale-105 transition">
          <span>See more Projects</span>
          <div className="bg-[#ff5500] text-white p-2 rounded-full group-hover:rotate-45 transition">
            <ArrowRight size={18} strokeWidth={3} />
          </div>
        </button>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full h-[450px] md:h-[400px] flex items-center justify-center">

        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-50" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-50" />

        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, index) => {
            // ===== FIXED INFINITE OFFSET =====
            const rawOffset = index - progress;
            const offset =
              ((((rawOffset + CARD_COUNT / 2) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT) -
              CARD_COUNT / 2;

            const dist = Math.abs(offset);

            const translateX = offset * SPACING;
            const rotateY = offset * -16;
            const translateZ = -dist * 80;
            const scale = 0.68 + dist * 0.3;
            const zIndex = 100 - Math.floor(dist * 10);
            const opacity = dist > CARD_COUNT / 2 ? 0 : 1;

            return (
              <div
                key={card.id}
                className="absolute will-change-transform rounded-3xl"
                style={{
                  transform: `
                    translate3d(${translateX}px, 0, 0)
                    perspective(1400px)
                    rotateY(${rotateY}deg)
                    translateZ(${translateZ}px)
                    scale(${scale})
                  `,
                  zIndex,
                  opacity,
                }}
              >
                <div className="w-[200px] h-[280px] md:w-[250px] md:h-[350px] rounded-3xl overflow-hidden bg-[#121212] shadow-2xl">
                  <img
                    src={card.image}
                    alt="project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/20 opacity-40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-center w-full max-w-7xl mt-10 px-4 z-10">
        <div className="grid grid-cols-4 gap-12 md:gap-32 text-center w-full">
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
    <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default PortfolioSection;
