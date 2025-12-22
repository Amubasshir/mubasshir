'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';
import Link from 'next/link';
// --- Data ---
const projects = [
  {
    id: 1,
    slug: "Project1",
    title: "Orange Blox",
    description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
    image: "https://framerusercontent.com/images/ODJhWRk5wCb5cybdLgcKObVbwk.png"
  },
  {
    id: 2,
    slug: "Project2",
    title: "Nova Scene",
    description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
    image: "https://framerusercontent.com/images/O8kqDvhJzW7n3I7u4UE4VTZIEas.png"
  },
  // {
  //   id: 3,
  //   slug: "Project3",
  //   title: "Abstract Flow",
  //   description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
  //   image: "https://framerusercontent.com/images/JOqvhPEZu18F6qYfiLZFYW4RiBo.png"
  // },
  {
    id: 4,
    slug: "Project4",
    title: "Golden Hour",
    description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
    image: "https://framerusercontent.com/images/k64jd9JZg2STpec9ROq9XmXmzrs.png"
  },
  {
    id: 5,
    slug: "Project5",
    title: "Fluid Shapes",
    description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
    image: "https://framerusercontent.com/images/unPTlAup0AJPIvdR2osrG3Qnb0.png"
  }
];

// --- Reusable Button Component ---

const ViewButton = ({ href = '#' }) => (
  <Link 
    href={href} 
    className="group relative bg-[#242424] p-1 rounded-full flex items-center overflow-hidden min-w-[120px] h-[44px] transition-all duration-700 ease-in-out cursor-pointer inline-flex"
  >
    <span className="absolute right-1 top-1 bottom-1 w-[36px] bg-[#ff5500] group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
    
    <div className="relative z-20 w-full h-full flex items-center justify-center">
      <div className="absolute right-0 w-[36px] h-[36px] flex items-center justify-center text-black bg-[#ff5500] group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[80px]">
        <ArrowRight size={16} strokeWidth={3} />
      </div>

      <span className="text-white group-hover:text-black font-bold text-[16px] transition-all duration-700 ease-in-out transform translate-x-[-2px] group-hover:translate-x-4 whitespace-nowrap tracking-tight mr-7">
        view
      </span>
    </div>
  </Link>
);
const ProjectsDetails3 = () => {
  return (
    <section className="bg-[#111] rounded-b-[80px] text-white min-h-screen px-6 md:px-12 font-sans pb-20 relative z-[1] py-40 -mt-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Header Section --- */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
          
          {/* Left Side: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#ff5500] font-bold text-[30px] mb-4 tracking-wide">
              Selected Work
            </h4>
            <h1 className="text-[40px] lg:text-[60px] font-bold leading-[1.1] tracking-tight">
              Bringing Brands to Life Through Design
            </h1>
          </motion.div>

          {/* Right Side: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            <p className="text-xl md:text-[30px] font-medium text-white leading-relaxed mb-8 lg:mb-0">
              A curated collection of visual identities, packaging, and creative systems built for impact.
            </p>

            <div className="flex flex-col lg:flex-row items-start sm:items-center justify-between pt-8 sm:pt-12 gap-6">
              <span className="text-gray-500 text-[16px] font-normal">
                Let's Build Something Meaningful Together
              </span>
              
               <Link href="/Contacts" className="group relative bg-[#ff5500] p-1 rounded-full flex items-center overflow-hidden lg:min-w-[180px] min-w-full h-[44px] transition-all duration-700 ease-in-out cursor-pointer">
                      
                      {/* অরেঞ্জ বিজি স্লাইডার */}
                      <span className="absolute right-1 top-1 bottom-1 w-[36px] bg-white group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
                      
                      {/* কন্টেন্ট কন্টেইনার */}
                      <div className="relative z-20 w-full h-full flex items-center justify-center">
                        
                        {/* অ্যারো আইকন: মুভমেন্ট ডিস্ট্যান্স এবং সাইজ ছোট করা হয়েছে */}
                        <div className="absolute right-0 w-[36px] h-[36px] flex items-center justify-center text-[#ff5500] bg-white group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[140px]">
                          <ArrowRight 
                            size={16} 
                            strokeWidth={3} 
                          />
                        </div>
              
                        {/* টেক্সট: translate-x এর মাধ্যমে আইকনের একদম কাছে নিয়ে আসা হয়েছে */}
                        <span className="text-white group-hover:text-[#ff5500] font-bold text-[16px] transition-all duration-700 ease-in-out transform translate-x-[-2px] group-hover:translate-x-4 whitespace-nowrap tracking-tight mr-7">
                          Get in touch
                        </span>
              
                      </div>
                    </Link>
            </div>
          </motion.div>
        </div>


        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-16">
          {projects.map((item) => (
            <div key={item.id} className="cursor-pointer">
              
              {/* Image Card */}
              <div className="overflow-hidden rounded-[2.5rem] mb-8 bg-[#111] aspect-[4/3] md:aspect-video relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 pr-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{item.title}</h2>
                <p className="text-[#757575] text-sm md:text-[16px] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                
                <div className="pt-2">
               <ViewButton href={`/${item.slug}`} />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsDetails3;