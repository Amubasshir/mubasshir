import React from 'react';

const testimonials = [
  { id: 1, name: "Arif Ahmed", role: "UI Designer", text: "The left column moves smoothly from bottom to top. Perfect for showcasing quick reviews." },
  { id: 2, name: "Sarah Kabir", role: "DevOps Engineer", text: "Incredible attention to detail. This layout makes the website feel alive." },
  { id: 3, name: "Tanvir Hossain", role: "Marketing Manager", text: "Seamless integration and fast performance. Highly recommended!" },
  { id: 4, name: "Nabila Islam", role: "Product Manager", text: "The middle column moves very slowly, making it super easy for users to read comfortably." },
  { id: 5, name: "Rakib Khan", role: "Full Stack Dev", text: "Love the glassmorphism effect on these cards. Looks very premium." },
  { id: 6, name: "Jannatul Ferdous", role: "CEO at TechBD", text: "This is the best testimonial section I've seen in a while. Very creative." },
  { id: 7, name: "Siam Rahman", role: "Software Architect", text: "The right column scrolling top to bottom creates a nice visual balance." },
  { id: 8, name: "Muna Aziz", role: "Content Creator", text: "Smooth animations and clean typography. Great job on the design!" },
  { id: 9, name: "Zubayer Al-Mahmud", role: "Freelancer", text: "A unique way to present feedback. It really catches the eye." },
];

const TestimonialColumn = ({ items, speed, direction = "up" }) => {
  const animationClass = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  
  return (
    <div className="relative h-full overflow-hidden">
      <div 
        className={`flex flex-col gap-6 ${animationClass} hover:[animation-play-state:paused] cursor-pointer`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, idx) => (
          <div 
            key={idx} 
            // h-[250px] নির্দিষ্ট হাইট এবং w-full উইডথ নিশ্চিত করে
            className="group relative bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl w-full h-[250px] flex flex-col gap-5"
         >
           <div className="flex items-center gap-4 mt-4">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {item.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <h4 className="text-white font-semibold text-sm truncate">{item.name}</h4>
                <p className="text-slate-500 text-xs truncate">{item.role}</p>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" /></svg>
            </div>
            
            <p className="text-slate-300 leading-relaxed overflow-hidden line-clamp-4">
              "{item.text}"
            </p>
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialGrid = () => {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="bg-[#111] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ff5500] font-semibold tracking-widest uppercase text-sm">What people say</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Reviews that 
make me blush </h2>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[650px] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <TestimonialColumn items={col1} speed={20} direction="up" />
          <TestimonialColumn items={col2} speed={90} direction="up" />
          <TestimonialColumn items={col3} speed={20} direction="down" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}} />
    </section>
  );
};

export default TestimonialGrid;