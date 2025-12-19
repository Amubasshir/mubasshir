// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// const PortfolioSection = () => {
//   const SPEED = 0.003;
//   const SPACING = 250;

//   const [progress, setProgress] = useState(0);
//   const requestRef = useRef();

//   const cards = [
//     { id: 1, image: "https://framerusercontent.com/images/yvhQLfcVfRDA4M8BE59k74bo.png?scale-down-to=512" },
//     { id: 2, image: "https://framerusercontent.com/images/dAio0KHRY7lHrZi8wg3eNt62sQk.png?scale-down-to=512" },
//     { id: 3, image: "https://framerusercontent.com/images/e0FkdiSOGxltpb5MtRn4baq1apw.png?scale-down-to=1024" },
//     { id: 4, image: "https://framerusercontent.com/images/Z1Nmm1vGXXn1hP8KdHamuJ3DQ8U.png?scale-down-to=512" },
//     { id: 5, image: "https://framerusercontent.com/images/fOekqWbHEGdI4xWeC1u2BievpAA.png?scale-down-to=512" },
//     { id: 6, image: "https://framerusercontent.com/images/rBhlRqKtaT1HJXWYXIk0blfFQ.png?scale-down-to=512" },
//     { id: 7, image: "https://framerusercontent.com/images/BEeoXePZVGmIOSGR0fFyBM25tzQ.png?scale-down-to=512" },
//     { id: 8, image: "https://framerusercontent.com/images/9aPHcu4RyjGXugW5qJpz6MupeE.webp" },
//     { id: 9, image: "https://framerusercontent.com/images/4wxNhMbTyt1WpsjzbsWngqY.png?scale-down-to=1024" },
//     { id: 10, image: "https://framerusercontent.com/images/yvhQLfcVfRDA4M8BE59k74bo.png?scale-down-to=512" },
//     { id: 11, image: "https://framerusercontent.com/images/dAio0KHRY7lHrZi8wg3eNt62sQk.png?scale-down-to=512" },
//     { id: 12, image: "https://framerusercontent.com/images/e0FkdiSOGxltpb5MtRn4baq1apw.png?scale-down-to=1024" },
//     { id: 13, image: "https://framerusercontent.com/images/Z1Nmm1vGXXn1hP8KdHamuJ3DQ8U.png?scale-down-to=512" },
//     { id: 14, image: "https://framerusercontent.com/images/fOekqWbHEGdI4xWeC1u2BievpAA.png?scale-down-to=512" },
//     { id: 15, image: "https://framerusercontent.com/images/rBhlRqKtaT1HJXWYXIk0blfFQ.png?scale-down-to=512" },
//   ];

//   const CARD_COUNT = cards.length;

//   const animate = () => {
//     setProgress((prev) => (prev + SPEED) % CARD_COUNT);
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   return (
//     <section className="min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center py-16 relative">
//       <div className="text-center z-50 mb-4 max-w-3xl px-4">
//         <h4 className="text-[#ff5500] font-bold text-sm md:text-base uppercase tracking-widest mb-4">
//           Behind the Designs
//         </h4>
//         <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//           Curious What Else I’ve <br className="hidden md:block" /> Created?
//         </h2>
//         <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
//           Explore more brand identities, packaging, and digital design work in my extended portfolio.
//         </p>
//       </div>
//       {/* TOP BUTTON */}
//       <div className="z-50 -mb-12">
//         <button className="group bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold text-sm flex items-center gap-4 hover:scale-105 transition shadow-lg">
//           <span>See more Projects</span>
//           <div className="bg-[#ff5500] text-white p-2 rounded-full group-hover:rotate-45 transition">
//             <ArrowRight size={18} strokeWidth={3} />
//           </div>
//         </button>
//       </div>

//       <div className="relative w-full h-[550px] flex items-center justify-center">
//         {/* Fade masks */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />

//         <div className="relative w-full h-full flex items-center justify-center">
//           {cards.map((card, index) => {
//             const rawOffset = index - progress;
//             const offset = ((((rawOffset + CARD_COUNT / 2) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT) - CARD_COUNT / 2;
//             const dist = Math.abs(offset);

//             // ১. স্মুথনেস কন্ট্রোল (Math.cos ব্যবহার করা হয়েছে ধাক্কা দূর করতে)
//             // এটি কার্ড যখন মাঝখানে আসে তখন ট্রানজিশনটাকে লিনিয়ার না রেখে কার্ভড করে দেয়।
//             const smoothFactor = Math.cos(Math.min(Math.max(offset * 0.4, -Math.PI/2), Math.PI/2));

//             // ২. ট্রান্সফর্ম ভ্যালুসমূহ
//             const translateX = offset * SPACING;
//             const rotateY = offset * -15; // বাঁকানো
            
//             // ৩. স্কেল এবং ডেপথ (মাঝখানের কার্ড ছোট, সাইডে বড় এবং সামনে)
//             // smoothFactor ব্যবহার করার কারণে ধাক্কা খাবে না
//             const scale = 1.2 - (smoothFactor * 0.5);
//             const translateZ = (1 - smoothFactor) * 150;
//             const zIndex = Math.round(100 - dist * 10);
//             const opacity = dist > 4 ? 0 : 1;

//             return (
//               <div
//                 key={`${card.id}-${index}`}
//                 className="absolute will-change-transform"
//                 style={{
//                   transform: `
//                     translate3d(${translateX}px, 0, ${translateZ}px)
//                     perspective(1200px)
//                     rotateY(${rotateY}deg)
//                     scale(${scale})
//                   `,
//                   zIndex,
//                   opacity,
//                   transition: 'opacity 0.3s ease-out'
//                 }}
//               >
//                 <div className="w-[220px] h-[320px] md:w-[320px] md:h-[480px] rounded-[2.5rem] overflow-hidden bg-[#121212] shadow-2xl  group relative">
//                   <img
//                     src={card.image}
//                     alt="portfolio"
//                     className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
//                   />
           
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="w-full max-w-7xl  px-4 z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-cente ">
//           <Step number="01" label="Strategy & Planning" />
//           <Step number="02" label="Design & Development" />
//           <Step number="03" label="Launch & Growth" />
//           <Step number="04" label="Ongoing Support" />
//         </div>
//       </div>
//     </section>
//   );
// };

// const Step = ({ number, label }) => (
//   <div className="flex flex-col items-center">
//     <span className="text-[#ff5500] font-extrabold text-sm mb-1">#{number}</span>
//     <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap uppercase tracking-wider font-semibold">
//       {label}
//     </span>
//   </div>
// );

// export default PortfolioSection;


'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const SPEED = 0.003;
  const SPACING = 250; 

  const [progress, setProgress] = useState(0);
  const requestRef = useRef();

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

  const CARD_COUNT = cards.length;

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

      <div className="relative w-full h-[550px] flex items-center justify-center">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, index) => {
            const rawOffset = index - progress;
            const offset = ((((rawOffset + CARD_COUNT / 2) % CARD_COUNT) + CARD_COUNT) % CARD_COUNT) - CARD_COUNT / 2;
            const dist = Math.abs(offset);

            // ১. স্মুথনেস কন্ট্রোল (Math.cos ব্যবহার করা হয়েছে ধাক্কা দূর করতে)
            // এটি কার্ড যখন মাঝখানে আসে তখন ট্রানজিশনটাকে লিনিয়ার না রেখে কার্ভড করে দেয়।
            const smoothFactor = Math.cos(Math.min(Math.max(offset * 0.4, -Math.PI/2), Math.PI/2));

            // ২. ট্রান্সফর্ম ভ্যালুসমূহ
            const translateX = offset * SPACING;
            const rotateY = offset * -18; // বাঁকানো
            
            // ৩. স্কেল এবং ডেপথ (মাঝখানের কার্ড ছোট, সাইডে বড় এবং সামনে)
            // smoothFactor ব্যবহার করার কারণে ধাক্কা খাবে না
            const scale = 0.9 - (smoothFactor * 0.5); 
            const translateZ = (1 - smoothFactor) * 150; 
            const zIndex = Math.round(100 - dist * 10);
            const opacity = dist > 10 ? 0 : 1;
            

            return (
              <div
                key={`${card.id}-${index}`}
                className="absolute will-change-transform"
                style={{
                  transform: `
                    translate3d(${translateX}px, 0, ${translateZ}px)
                    perspective(1600px)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  zIndex,
                  opacity,
                  transition: 'opacity 0.3s ease-out'
                }}
              >
                <div className="w-[220px] h-[320px] md:w-[520px] md:h-[700px] rounded-[2.5rem] overflow-hidden bg-[#121212] shadow-2xl  group relative">
                  <img
                    src={card.image}
                    alt="portfolio"
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
                  />
           
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
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