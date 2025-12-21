// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import AnimatedButton from './AnimatedButton';
// import Link from 'next/link';

// // --- Data ---
// const projects = [
//   {
//     id: 1,
//     slug: "Project1",
//     title: "Orange Blox",
//     description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "https://framerusercontent.com/images/ODJhWRk5wCb5cybdLgcKObVbwk.png"
//   },
//   {
//     id: 2,
//     slug: "Project2",
//     title: "Nova Scene",
//     description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "https://framerusercontent.com/images/O8kqDvhJzW7n3I7u4UE4VTZIEas.png"
//   },
//   {
//     id: 3,
//     slug: "Project3",
//     title: "Abstract Flow",
//     description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "https://framerusercontent.com/images/JOqvhPEZu18F6qYfiLZFYW4RiBo.png"
//   },
//   {
//     id: 4,
//     title: "Golden Hour",
//     description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "https://framerusercontent.com/images/k64jd9JZg2STpec9ROq9XmXmzrs.png"
//   },
//   {
//     id: 5,
//     title: "Fluid Shapes",
//     description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
//     image: "https://framerusercontent.com/images/unPTlAup0AJPIvdR2osrG3Qnb0.png"
//   }
// ];

// // --- Reusable Button Component ---



// const ViewButton = ({href ='#'}) => (
//   <Link
//     href={href}
//     className="group relative bg-[#242424] p-1 rounded-full flex items-center overflow-hidden min-w-[120px] h-[44px] transition-all duration-700 ease-in-out cursor-pointer">
                        
//                         {/* অরেঞ্জ বিজি স্লাইডার */}
//                         <span className="absolute right-1 top-1 bottom-1 w-[36px] bg-[#ff5500] group-hover:w-[calc(100%-8px)] transition-all duration-700 ease-in-out z-10 rounded-full"></span>
                        
//                         {/* কন্টেন্ট কন্টেইনার */}
//                         <div className="relative z-20 w-full h-full flex items-center justify-center">
                          
//                           {/* অ্যারো আইকন: মুভমেন্ট ডিস্ট্যান্স এবং সাইজ ছোট করা হয়েছে */}
//                           <div className="absolute right-0 w-[36px] h-[36px] flex items-center justify-center text-black bg-[#ff5500] group-hover:bg-transparent rounded-full transition-all duration-700 ease-in-out transform group-hover:-translate-x-[80px]">
//                             <ArrowRight
//                               size={16}
//                               strokeWidth={3}
//                             />
//                           </div>
                
//                           {/* টেক্সট: translate-x এর মাধ্যমে আইকনের একদম কাছে নিয়ে আসা হয়েছে */}
//                           <span className="text-white group-hover:text-black font-bold text-[16px] transition-all duration-700 ease-in-out transform translate-x-[-2px] group-hover:translate-x-4 whitespace-nowrap tracking-tight mr-7">
//                            view
//                           </span>
                
//                         </div>
//                       </Link>
// );

// const DreamArea = () => {
//   return (
//     <section className="bg-[#111] rounded-b-[80px] text-white min-h-screen px-6 md:px-12 font-sans pb-20 relative z-10">
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* --- Header Section --- */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/5 pb-12">
//           <div className="max-w-full">
//             <h1 className="text-5xl md:text-[40px] font-bold mb-6 tracking-tight">Dream Area</h1>
//             <p className="text-[#757575] text-base md:text-[16px] leading-relaxed text-wrap">
//               The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
//             </p>
//           </div>
          
//           {/* Header Button */}
//           <div className="shrink-0">
//              <ViewButton />
//           </div>
//         </div>

//         {/* --- Grid Section --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
//           {projects.map((item) => (
//             <div key={item.id} className="cursor-pointer">
              
//               {/* Image Card */}
//               <div className="overflow-hidden rounded-[2.5rem] mb-8 bg-[#111] aspect-[4/3] md:aspect-video relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="space-y-4 pr-4">
//                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{item.title}</h2>
//                 <p className="text-[#757575] text-sm md:text-[16px] leading-relaxed line-clamp-2">
//                   {item.description}
//                 </p>
                
//                 <div className="pt-2">
//                <ViewButton></ViewButton>
//                 </div>
//               </div>
              
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DreamArea;

import React from 'react';
import { ArrowRight } from 'lucide-react';
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
  {
    id: 3,
    slug: "Project3",
    title: "Abstract Flow",
    description: "The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.",
    image: "https://framerusercontent.com/images/JOqvhPEZu18F6qYfiLZFYW4RiBo.png"
  },
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

const DreamArea = () => {
  return (
    <section className="bg-[#111] rounded-b-[80px] text-white min-h-screen px-6 md:px-12 font-sans pb-20 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/5 pb-12">
          <div className="max-w-full">
            <h1 className="text-5xl md:text-[40px] font-bold mb-6 tracking-tight">Dream Area</h1>
            <p className="text-[#757575] text-base md:text-[16px] leading-relaxed">
              The image shows flowing shapes in iridescent hues...
            </p>
          </div>
          
          <div className="shrink-0">
             <ViewButton href="/DreamArea" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((item) => (
            <div key={item.id} className="group">
              
              {/* ফোল্ডার অনুযায়ী ডাইনামিক রুট (e.g., /Project1) */}
              <Link href={`/${item.slug}`}>
                <div className="overflow-hidden rounded-[2.5rem] mb-8 bg-[#111] aspect-[4/3] md:aspect-video relative cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="space-y-4 pr-4">
                <Link href={`/${item.slug}`}>
                   <h2 className="text-3xl md:text-4xl font-bold tracking-tight hover:text-[#ff5500] transition-colors cursor-pointer">
                     {item.title}
                   </h2>
                </Link>
                <p className="text-[#757575] text-sm md:text-[16px] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                
                <div className="pt-2">
                  {/* বাটনের জন্য স্লাগ পাস করা হয়েছে */}
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

export default DreamArea;