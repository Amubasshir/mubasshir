import React from 'react';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Understanding your vision, audience, and goals.', img: 'https://framerusercontent.com/images/FNSaiq4luEEqmIRAQZSQazYd8Bo.webp?scale-down-to=1024' },
  { id: '02', title: 'Strategy', desc: 'Defining your unique positioning and messaging.', img: 'https://framerusercontent.com/images/JEq0RKaEAd63bBZdjzTcG0LZaM.png' },
  { id: '03', title: 'Design', desc: 'Creating your visual identity system and touchpoints.', img: 'https://framerusercontent.com/images/du95C2rwpCVgnWYG0ZAXlX804Rg.png' },
  { id: '04', title: 'Delivery', desc: 'Providing all assets, brand guidelines, and support.', img: 'https://framerusercontent.com/images/WLvvrdYeI0Vxl27KQ8J7EYjCLw.png' },
  { id: '05', title: 'Support', desc: 'I stay available for updates, extensions, and evolution.', img: 'https://framerusercontent.com/images/wqOww1yZAXcCwfondiWHsD3XA.png' },
];

const ProcessComponent = () => {
  return (
    <div className=" bg-[#111] min-h-screen text-white py-12 md:py-20 px-4 font-sans relative rounded-t-[40px]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-6 md:gap-10">
          <div className="space-y-4">
            <p className="text-[#ff5c00] font-bold text-sm tracking-widest uppercase">Step-by-Step</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter italic">My Process, Step by Step</h2>
          </div>
          <p className="text-zinc-400 max-w-xs text-base md:text-lg leading-snug">
            From first ideas to final assets, I follow a clear, collaborative process.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-6 md:gap-4">
          {steps.map((step, index) => {
            const hasBg = index % 2 === 0;
            
            return (
              <div 
                key={step.id} 
                className={`group relative h-auto md:h-[160px] w-full overflow-hidden rounded-4xl cursor-pointer transition-all duration-300 
                  ${hasBg ? 'bg-[#0a0a0a]' : 'bg-transparent'}`}
              >
                
                {/* --- Layer 1: Normal View --- */}
                <div className="relative md:absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-500 ease-in-out group-hover:md:-translate-y-full group-hover:md:opacity-0">
                  
                  {/* Mobile Orange Border (Full Width) */}
                  <div className="w-full h-1.5 md:w-1.5 md:h-12 bg-[#ff5c00] md:rounded-full md:ml-10 md:mr-0"></div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 md:py-0 md:px-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
                      <span className="text-2xl md:text-5xl font-bold text-white">{step.id}</span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 md:mt-0 text-zinc-500 text-sm md:text-base font-medium max-w-full lg:mr-40 md:text-center">
                      {step.desc}
                    </p>

                    {/* Mobile Image */}
                    <div className="mt-5 w-full h-48 md:hidden overflow-hidden rounded-xl ">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* --- Layer 2: Hover View (Orange - Desktop Only) --- */}
                <div className="absolute inset-0 bg-[#ff5c00] hidden md:flex items-center justify-between px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="flex items-center gap-10 text-white">
                    <div className="w-1.5 h-12 bg-black/20 rounded-full"></div>
                    <div className="flex items-center gap-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="text-2xl md:text-5xl font-bold text-white">{step.id}</span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="h-35 w-130 overflow-hidden rounded-4xl shadow-2xl">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessComponent;