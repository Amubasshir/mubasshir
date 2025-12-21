import React from 'react';

// --- Data Section ---
const testimonials = [
  { 
    id: 1, 
    name: "Arif Ahmed", 
    location: "Bangladesh", 
    flag: "https://flagcdn.com/w40/bd.png",
    image: "https://i.pravatar.cc/150?u=arif",
    text: "The left column moves smoothly from bottom to top. Perfect for showcasing quick reviews." 
  },
  { 
    id: 2, 
    name: "Sarah Kabir", 
    location: "United Kingdom", 
    flag: "https://flagcdn.com/w40/gb.png",
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "Incredible attention to detail. This layout makes the website feel alive." 
  },
  { 
    id: 3, 
    name: "Tanvir Hossain", 
    location: "USA", 
    flag: "https://flagcdn.com/w40/us.png",
    image: "https://i.pravatar.cc/150?u=tanvir",
    text: "Seamless integration and fast performance. Highly recommended!" 
  },
  { 
    id: 4, 
    name: "Nabila Islam", 
    location: "Canada", 
    flag: "https://flagcdn.com/w40/ca.png",
    image: "https://i.pravatar.cc/150?u=nabila",
    text: "The middle column moves very slowly, making it super easy for users to read comfortably." 
  },
  { 
    id: 5, 
    name: "Rakib Khan", 
    location: "Germany", 
    flag: "https://flagcdn.com/w40/de.png",
    image: "https://i.pravatar.cc/150?u=rakib",
    text: "Love the glassmorphism effect on these cards. Looks very premium." 
  },
  { 
    id: 6, 
    name: "Jannatul Ferdous", 
    location: "Australia", 
    flag: "https://flagcdn.com/w40/au.png",
    image: "https://i.pravatar.cc/150?u=jannat",
    text: "This is the best testimonial section I've seen in a while. Very creative." 
  },
  { 
    id: 7, 
    name: "Siam Rahman", 
    location: "Japan", 
    flag: "https://flagcdn.com/w40/jp.png",
    image: "https://i.pravatar.cc/150?u=siam",
    text: "The right column scrolling top to bottom creates a nice visual balance." 
  },
  { 
    id: 8, 
    name: "Muna Aziz", 
    location: "France", 
    flag: "https://flagcdn.com/w40/fr.png",
    image: "https://i.pravatar.cc/150?u=muna",
    text: "Smooth animations and clean typography. Great job on the design!" 
  },
  { 
    id: 9, 
    name: "Zubayer Al-Mahmud", 
    location: "UAE", 
    flag: "https://flagcdn.com/w40/ae.png",
    image: "https://i.pravatar.cc/150?u=zubayer",
    text: "A unique way to present feedback. It really catches the eye." 
  },
];

// --- Single Column Component ---
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
            className="group relative bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#ff5500]/40 transition-all duration-500 shadow-2xl w-full h-[260px] flex flex-col justify-between"
          >
            {/* Top Section: Profile & Flag Badge */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="h-14 w-14 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#ff5500] transition-all duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                  {/* Country Flag Badge */}
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-black shadow-lg">
                    <img src={item.flag} alt={item.location} className="w-full h-full object-cover scale-125" />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <h4 className="text-white font-bold text-sm tracking-tight truncate">{item.name}</h4>
                  <p className="text-slate-400 text-[10px] font-bold truncate uppercase tracking-widest mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="opacity-20 group-hover:opacity-100 group-hover:text-[#ff5500] transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" /></svg>
              </div>
            </div>
            
            {/* Feedback Text */}
            <p className="text-slate-300 text-[14px] leading-relaxed line-clamp-4 font-medium italic mt-4">
              "{item.text}"
            </p>

            {/* Bottom Glow Accent */}
            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#ff5500] to-transparent transition-all duration-700 rounded-full mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Grid Section ---
const TestimonialGrid = () => {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff5500]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ff5500] font-bold tracking-[0.2em] uppercase text-xs bg-[#ff5500]/10 px-4 py-2 rounded-full">
            Global Feedback
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight">
            Reviews that <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffa500]">
              make me blush
            </span>
          </h2>
        </div>

        {/* The Scrolling Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[700px] overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <TestimonialColumn items={col1} speed={30} direction="up" />
          <TestimonialColumn items={col2} speed={95} direction="up" />
          <TestimonialColumn items={col3} speed={30} direction="down" />
        </div>
      </div>

      {/* Embedded CSS Animations */}
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