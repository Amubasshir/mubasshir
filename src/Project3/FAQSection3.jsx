'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import Link from 'next/link';


const faqs = [
  {
    question: "How long does a brand identity project take?",
    answer: "Typically, a full brand identity project takes between 4 to 8 weeks, depending on the scope of work, feedback loops, and the complexity of the deliverables."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically structure payments in installments: a deposit to secure your slot, a mid-point payment, and a final payment upon project completion."
  },
  {
    question: "Can you also design my website?",
    answer: "Absolutely. We specialize in both brand identity and digital design, ensuring your website perfectly aligns with your new brand voice and visual style."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. All meetings and presentations are conducted virtually to accommodate different time zones."
  },
  {
    question: "What do I need to get started?",
    answer: "Just fill out our inquiry form! We'll schedule a discovery call to discuss your goals, timeline, and how we can help elevate your business."
  }
];

const FAQItem3 = ({ question, answer, isOpen, toggle }) => {
  return (
    <div 
      onClick={toggle}
      className={`
        bg-[#0f0f0f] rounded-[60px] mb-4 overflow-hidden cursor-pointer group 
        hover:bg-[#141414] transition-all duration-300
        border-2 border-transparent hover:border-[#ff5500]
      `}
    >
      <div className="flex items-center justify-start p-6 md:p-8 gap-6">
        {/* Icon */}
        <span className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#ff5500]' : 'text-gray-500'}`}>
          <Plus 
            size={24} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
          />
        </span>
        
        {/* Question */}
        <h3 className="text-[16px] font-bold text-white group-hover:text-gray-200 transition-colors">
          {question}
        </h3>
      </div>

      {/* Answer Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 pt-0 pl-[4.5rem]">
              <p className="text-[#757575] text-[16px] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111] text-white py-24 px-6 md:px-12 font-sans rounded-b-[70px] relative z-10">
      
      {/* 
         ✅ CHANGE: grid-cols-1 (Mobile) | lg:grid-cols-2 (Desktop Equal Split)
         ✅ GAP: gap-12 (Mobile) | lg:gap-20 (Desktop Space)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* --- Left Column: Text & CTA (50% Width) --- */}
        <div className="flex flex-col justify-start w-full">
          <h4 className="text-[#ff5500] font-bold text-[16px] md:text-[30px] mb-4 tracking-wide">
            Frequently Asked Questions
          </h4>
          
          <h2 className="text-[16px] md:text-[40px] lg:text-[59px] font-bold leading-tight mb-6">
            Answers to Common Questions
          </h2>
          
          <p className="text-[#757575] text-[16px] leading-relaxed mb-10 max-w-full">
            From timelines to process details, here are quick answers to the most frequent questions I get.
          </p>

          {/* Button */}
          <Link href="/Contacts">
         <AnimatedButton
        text="Contact Me" 
        width="180px" 
        className="mt-4">
        
            </AnimatedButton>
            </Link>
        </div>

        {/* --- Right Column: Accordion (50% Width) --- */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem3 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection3;