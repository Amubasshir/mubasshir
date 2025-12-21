'use client';
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-[#111] text-white py-40 px-6 md:px-12 font-sans min-h-screen flex items-center relative -mt-20 rounded-b-[70px] z-10">
      <div className=" mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT COLUMN: Text & Socials --- */}
        <div className="flex flex-col items-start">
          
          <h4 className="text-[#ff5500] font-bold text-lg md:text-[30px] mb-6 tracking-wide">
            Contact me
          </h4>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Let’s Create  Something  Meaningful
          </h1>

          <h3 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">
            Whether you're starting from scratch or need a brand refresh, I'm here to help bring your vision to life.
          </h3>

          <p className="text-[#757575] text-base md:text-lg mb-12 max-w-lg">
            Ready to talk? Fill out the form or drop me a message—let’s see how we can work together.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialButton icon={<Facebook size={20} />} />
            <SocialButton icon={<Instagram size={20} />} />
            {/* Custom TikTok SVG as it's not standard in all libraries */}
            <SocialButton icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            } />
            <SocialButton icon={<Youtube size={20} />} />
          </div>
        </div>

        {/* --- RIGHT COLUMN: Form --- */}
        <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-[2.5rem] shadow-2xl w-full">
          <form className="flex flex-col gap-6">
            
            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <InputLabel label="First name" />
                <input 
                  type="text" 
                  placeholder="Jane" 
                  className="w-full bg-[#1a1a1a] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-all"
                />
              </div>
              <div className="flex-1">
                <InputLabel label="Last name" />
                <input 
                  type="text" 
                  placeholder="Smith" 
                  className="w-full bg-[#1a1a1a] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <InputLabel label="Email" />
              <input 
                type="email" 
                placeholder="jane@email.com" 
                className="w-full bg-[#1a1a1a] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <InputLabel label="Message" />
              <textarea 
                rows="5"
                placeholder="Type your message..." 
                className="w-full bg-[#1a1a1a] text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold py-4 rounded-full mt-2 transition-colors shadow-lg cursor-pointer">
              Submit
            </button>

          </form>
        </div>

      </div>

    
    </section>
  );
};

// --- Helper Components ---

const InputLabel = ({ label }) => (
  <label className="block text-[#757575] text-sm font-medium mb-2">
    {label} <span className="text-[#ff5500]">*</span>
  </label>
);

const SocialButton = ({ icon }) => (
  <a 
    href="#" 
    className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-[#757575] hover:text-white hover:bg-[#ff5500] transition-all duration-300"
  >
    {icon}
  </a>
);

export default ContactSection;