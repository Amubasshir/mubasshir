import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnimatedButton = ({ text = "See more Projects", width = "220px", onClick }) => {
  return (
    <div className="relative z-50 pointer-events-auto ">
      {/* মেইন বাটন */}
      <button 
        onClick={onClick}
        style={{ width: width }}
        className="group relative bg-white p-1  rounded-full flex items-center overflow-hidden h-[46px] transition-all duration-700 ease-in-out cursor-pointer shadow-sm border border-gray-100"
      >
        
        {/* ১. স্লাইডিং অরেঞ্জ ব্যাকগ্রাউন্ড: transition-all নিশ্চিত করে এটি দুই দিকেই স্মুথলি চলবে */}
        <span className="absolute right-1 top-1 bottom-1 w-[38px] bg-[#ff5500] group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
        
        {/* ২. কন্টেন্ট কন্টেইনার */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          
          {/* ৩. অ্যারো আইকন: এটি হোভার করলে বামে যাবে এবং আউট করলে স্মুথলি ডানে ফিরে আসবে */}
          <div className="absolute right-0 w-[38px] h-[38px] flex items-center justify-center text-white bg-[#ff5500] group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[calc(var(--btn-width)-46px)]"
               style={{
                 '--btn-width': width,
                 // নিশ্চিত করা হয়েছে যেন মাউস সরালে এটি আগের পজিশনে (translateX-0) ফিরে আসে
               }}>
            <ArrowRight size={18} strokeWidth={3} />
          </div>

          {/* ৪. টেক্সট: এটিও দুই দিকেই সমানভাবে অ্যানিমেটেড হবে */}
          <span className="text-black group-hover:text-white font-bold text-[16px]  transition-all duration-700 ease-in-out transform translate-x-[-12px] group-hover:translate-x-4 whitespace-nowrap tracking-tight ">
            {text}
          </span>

        </div>
      </button>
    </div>
  );
};

export default AnimatedButton;