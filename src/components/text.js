import React from 'react'

const Text = () => {
  return (
    <div className="h-screen w-full bg-[#ff5200] flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-6xl font-bold mb-4">
        Build. Learn. Create.
      </h1>
      <p className="text-xl max-w-xl font-medium">
        Turning ideas into clean, scalable web experiences with React.
      </p>
    </div>
  )
}

export default Text

// 'use client'
// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const guides = [
//   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
//   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
//   'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
//   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
//   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
//   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
//   'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400',
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
  
// ];

// const PremiumArchSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVibrating, setIsVibrating] = useState(false);

//   const handleAction = (type) => {
//     setIsVibrating(true);
//     if (type === 'next') {
//       setCurrentIndex((prev) => (prev + 1) % guides.length);
//     } else {
//       setCurrentIndex((prev) => (prev - 1 + guides.length) % guides.length);
//     }
//     setTimeout(() => setIsVibrating(false), 300);
//   };

//   // শুধুমাত্র বর্তমান ইনডেক্সের আশেপাশের কার্ডগুলো প্রসেস করার লজিক
//   const visibleCards = useMemo(() => {
//     const range = 3; // মাঝখানের কার্ডসহ দুইপাশে কয়টি কার্ড দেখাবে
//     const cards = [];
//     for (let i = -range; i <= range; i++) {
//       let index = (currentIndex + i + guides.length) % guides.length;
//       cards.push({
//         url: guides[index],
//         offset: i,
//         id: `card-${index}` // ইউনিক আইডি যাতে রিঅ্যাক্ট স্লাইডিং ট্র্যাকিং করতে পারে
//       });
//     }
//     return cards;
//   }, [currentIndex]);

//   return (
//     <div className="bg-[#050505] min-h-screen flex flex-col items-center pt-20 overflow-hidden select-none font-sans text-white">
      
//       <style jsx>{`
//         @keyframes subtleVibration {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.03); }
//           100% { transform: scale(1); }
//         }
//         .vibrate-effect {
//           animation: subtleVibration 0.3s ease-in-out;
//         }
//       `}</style>

//       <div className="text-center z-[110] mb-30">
//         <p className="text-[#FF5C00] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Hybrid Gaming Engine</p>
//         <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">All Heroes</h2>
//       </div>

//       <div className="relative w-full h-[-600px] flex items-center justify-center -mt-56">
        
//         <div className="absolute bottom-[-1150px] flex items-center justify-center w-full pb-36">
//           {visibleCards.map((card) => {
//             const isCenter = card.offset === 0;
//             const angle = card.offset * 25; 
            
//             return (
//               <div
//                 key={card.id} // আইডি ব্যবহারের ফলে রিঅ্যাক্ট জানে কোন কার্ডটি কোথায় সরছে
//                 className="absolute"
//                 style={{
//                   transform: `rotate(${angle}deg) translateY(-740px)`,
//                   transformOrigin: 'center center',
//                   zIndex: 50 - Math.abs(card.offset),
//                   opacity: Math.abs(card.offset) > 2 ? 0 : 1, // ধারের কার্ডগুলো ফেড আউট হবে
//                   transition: 'all 800ms cubic-bezier(0.25, 1, 0.5, 1)',
//                 }}
//               >
//                 <div 
//                   className={`relative w-[260px] h-[420px] rounded-[15px] overflow-hidden shadow-2xl border-2 transition-all duration-500 
//                 `}
//                 >
//                   <img 
//                     src={card.url} 
//                     alt="Hero" 
//                     className="w-full h-full object-cover" 
//                   />
                 
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* নেভিগেশন কন্ট্রোল */}
//         <div className="absolute bottom-[-710px] flex gap-14 z-[120]">
//           <button 
//             onClick={() => handleAction('prev')} 
//             className="w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-75 transition-all hover:bg-[#FF5C00]"
//           >
//             <ChevronLeft size={35} />
//           </button>
          
//           <button 
//             onClick={() => handleAction('next')} 
//             className="w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-75 transition-all hover:bg-[#FF5C00]"
//           >
//             <ChevronRight size={35} />
//           </button>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default PremiumArchSlider;

// 'use client'
// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// const guides = [
//   { id: 1, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
//   { id: 2, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
//   { id: 3,  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
//   { id: 4, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
//   { id: 5,  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400' },
//   { id: 6, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
//   { id: 7,  img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400' },
//   { id: 8,img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
// ];

// const PremiumArchSlider = () => {
//   const [index, setIndex] = useState(0);
//   const [isShaking, setIsShaking] = useState(false);

//   const triggerVibration = () => {
//     setIsShaking(true);
//     setTimeout(() => setIsShaking(false), 800); 
//   };

//   const handleAction = (type) => {
//     if (type === 'next') setIndex((prev) => (prev + 1) % guides.length);
//     else setIndex((prev) => (prev - 1 + guides.length) % guides.length);
//     triggerVibration();
//   };

//   const visibleItems = useMemo(() => {
//     const len = guides.length;
//     return Array.from({ length: 9 }, (_, i) => {
//       const targetIndex = (index + i - 4 + len) % len;
//       return { ...guides[targetIndex], offset: i - 4 };
//     });
//   }, [index]);

//   return (
//     <div className="bg-[#111] min-h-screen flex flex-col items-center pt-10 pb-20 overflow-hidden select-none font-sans -z-20">
      
//       {/* ১. হেডার */}
//       <div className="text-center z-20 px-4 mb-4">
//         <p className="text-[#FF5C00] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Not just another AI</p>
//         <h2 className="text-4xl font-extrabold text-white tracking-tight italic">Meet your AI guide</h2>
//       </div>

//       {/* ২. মেইন স্লাইডার কন্টেইনার */}
//       <div className="relative w-full h-[300px] flex items-center justify-center -mt-10">
        
//         {/* বাঁকানো (Arch) কার্ড সেকশন */}
//         <div className="absolute bottom-[-720px] flex items-center justify-center w-full">
//           {visibleItems.map((item, i) => {
//             const pos = item.offset;
//             const angle = pos * 22; // বাঁকানো ভাব বজায় রাখা হয়েছে
//             const isActive = pos === 0;

//             return (
//               <div
//                 key={`${item.id}-${i}`}
//                 className={`absolute transition-all duration-[1400ms] 
//                 ${isActive && isShaking ? 'animate-slowSubtleShake' : ''}`}
//                 style={{
//                   transform: `rotate(${angle}deg) translateY(-740px)`,
//                   transformOrigin: 'center center',
//                   transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
//                   zIndex: 50 - Math.abs(pos),
//                   opacity: Math.abs(pos) > 4 ? 0 : 1, // সব দৃশ্যমান কার্ডের অপাসিটি ফুল
//                 }}
//               >
//                 {/* ৩. বড় সাইজের কার্ড (বর্ডার রিমুভড) */}
//                 <div 
//                   className={`relative w-[240px] h-[380px] rounded-[5px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-[1200ms] 
//                   bg-gray-100 opacity-100 scale-100`}
//                 >
//                   <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  
               
               
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ৪. নেভিগেশন বাটন */}
//         <div className="absolute bottom-[-260px] flex gap-6 z-[100]">
//           <button 
//             onClick={() => handleAction('prev')} 
//             className="w-12 h-12 rounded-full bg-white text-[#111] flex items-center justify-center shadow-2xl active:scale-90 transition-all hover:text-[#ff5500]"
//           >
//             <ChevronLeft size={24} strokeWidth={3} />
//           </button>
//           <button 
//             onClick={() => handleAction('next')} 
//             className="w-12 h-12 rounded-full bg-white text-[#111] flex items-center justify-center shadow-2xl active:scale-90 transition-all hover:text-[#ff5500]"
//           >
//             <ChevronRight size={24} strokeWidth={3} />
//           </button>
//         </div>
//       </div>

//       {/* কাস্টম এনিমেশন */}
//       <style jsx global>{`
//         @keyframes slowSubtleShake {
//           0% { transform: rotate(0deg) translateY(-740px); }
//           30% { transform: rotate(0.4deg) translateY(-741px); }
//           70% { transform: rotate(-0.4deg) translateY(-740px); }
//           100% { transform: rotate(0deg) translateY(-740px); }
//         }
//         .animate-slowSubtleShake {
//           animation: slowSubtleShake 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PremiumArchSlider;
