'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ---------------- DATA ---------------- */

const slides = [
  {
    id: 1,
    image: "https://framerusercontent.com/images/GG3vnBNorTlhcQMh0aX1171DDsk.png",
    title: "Legacy Experience",
    subtitle: "users' needs,",
    text: "I’ve transformed complex workflows into clean, intuitive digital systems users adopt and love.",
  },
  {
    id: 2,
    image: "https://framerusercontent.com/images/Kj5rE5s6YwqcfHPN4y64jdfYE.png",
    title: "STRATEGY",
    subtitle: "DRIVES GROWTH.",
    text: "Building scalable design systems that empower teams to move faster.",
  },
  {
    id: 3,
    image: "https://framerusercontent.com/images/icwXYdjudKmHrt9Ae6NAvWp2s.png",
    title: "EMPATHY",
    subtitle: "BUILDS TRUST.",
    text: "User-centric design patterns that solve real problems.",
  },
  {
    id: 4,
    image: "https://framerusercontent.com/images/7BAUBLSuULsejYVCFXu2rHW5zqw.png",
    title: "EMPATHY",
    subtitle: "BUILDS TRUST.",
    text: "User-centric design patterns that solve real problems.",
  },
  {
    id: 5,
    image: "https://framerusercontent.com/images/CQ75mzavd1aH9MdMQQMalQ0.png",
    title: "EMPATHY",
    subtitle: "BUILDS TRUST.",
    text: "User-centric design patterns that solve real problems.",
  },
];

/* ---------------- CURSOR ---------------- */

const ArrowCursor = ({ direction }) => (
  <div className="w-12 h-12 rounded-full bg-[#00AEEF] flex items-center justify-center">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  </div>
);

/* ---------------- SLIDER CARD ---------------- */

const SliderCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    side: "center",
    visible: false,
  });

  const paginate = (dir) => {
    
    if (dir === -1 && currentSlide === 0) return;
    if (dir === 1 && currentSlide === slides.length - 1) return;

    setDirection(dir);
    setCurrentSlide((prev) => prev + dir);
  };

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div
        className="bg-[#F9F9F7] rounded-[2.5rem] w-[80%] h-full overflow-hidden shadow-sm relative cursor-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

          const third = rect.width / 3;
          let side = "center";

          if (x < third) side = "left";
          else if (x > third * 2) side = "right";

          // ❗ edge protection
          if (side === "left" && currentSlide === 0) side = "center";
          if (side === "right" && currentSlide === slides.length - 1)
            side = "center";

          setCursor({ x, y, side, visible: true });
        }}
        onMouseLeave={() =>
          setCursor((c) => ({ ...c, visible: false }))
        }
        onClick={() => {
          if (cursor.side === "left") paginate(-1);
          if (cursor.side === "right") paginate(1);
        }}
      >
        {/* CURSOR */}
        {cursor.visible && (
          <motion.div
            className="absolute z-50 pointer-events-none"
            style={{ left: cursor.x, top: cursor.y }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2">
              {cursor.side === "center" ? (
                <div className="w-3 h-3 bg-white rounded-full" />
              ) : (
                <ArrowCursor direction={cursor.side} />
              )}
            </div>
          </motion.div>
        )}

        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full items-center pointer-events-none"
          >
            <div className="w-full">
              <img
                src={slides[currentSlide].image}
                className="w-full h-[300px] object-cover"
                alt=""
              />
            </div>

            <div className="mt-auto text-center px-8 pb-12">
              <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {slides[currentSlide].title}
              </h3>
              <h2 className="text-2xl font-black uppercase text-[#757575]">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                {slides[currentSlide].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


/* ---------------- HOVER REVEAL CARD (FIXED) ---------------- */

const HoverRevealCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full min-h-[500px] perspective-[1200px] flex justify-center items-center">
      
      {/* CARD SIZE WRAPPER (single source of truth) */}
      <div className="relative w-[83%] h-full min-h-[420px]">
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => setFlipped(!flipped)}
        >

          {/* ================= FRONT ================= */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-[#F9F9F7] rounded-[2.5rem] flex flex-col items-center overflow-hidden shadow-sm cursor-pointer group"
            style={{ backfaceVisibility: "hidden" }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >

            {/* HEADER */}
            <div className="text-center z-20 w-full px-4 mt-20 group-hover:mt-8 relative transition-all duration-300">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">
                Snap, Tap...
              </p>
              <h2 className="text-2xl font-black uppercase text-[#1a1a1a] leading-none mb-3">
                And a Secret Tag.
              </h2>

              <motion.div
                variants={{
                  rest: { opacity: 0, height: 0, y: 10 },
                  hover: { opacity: 1, height: "auto", y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">
                  This splash is more than just pretty pixels.
                  Click to spot the sneaky.
                </p>
              </motion.div>
            </div>

            {/* PHONE */}
            <motion.div
              className="absolute bottom-0 left-1/2 w-[70%] h-[350px] origin-bottom z-10"
              style={{ x: "-50%" }}
              variants={{
                rest: { y: "40%" },
                hover: { y: "10%" },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="w-full h-full overflow-hidden relative bg-gray-100 shadow-2xl rounded-t-[2.5rem]">
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a1a] rounded-b-xl z-20" /> */}
                <img
                  src="https://framerusercontent.com/images/LFmZyVfYG1v7V7P048IHAfKwn4.png?scale-down-to=1024"
                  alt="Phone Screen"
                  className="absolute inset-0 w-full h-full "
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ================= BACK ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-black"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src="https://framerusercontent.com/images/iBaAWgrAbKLOmidCbhZgzgyDhSY.png"
              alt="Back Reveal"
              className="w-full h-full object-contain"
            />
          </div>

        </motion.div>
      </div>
    </div>
  );
};
/* ---------------- FLIP CARD ---------------- */

const FlipCard = ({ icon, title, subtitle, backImage, backImage2 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative flex-1 perspective-[1000px] h-[340px]">
      <motion.div
        className="relative w-full h-[240px] bg-[#F9F9F7] rounded-[2.5rem] shadow-sm cursor-pointer"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT */}
       <div
  className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] p-8 shadow-sm
             flex items-center gap-6 group"
  style={{ backfaceVisibility: "hidden" }}
>
          {/* LEFT IMAGE */}
          <img src="https://framerusercontent.com/images/hXGfj7QYzUxpGpYMeb3MfCxv6Y.png" alt=""  className='absolute w-40 -ml-7 -mb-15'/>
  <img src={icon} className="w-40 flex-shrink-0 -ml-7 -mb-15 z-20" />

  {/* RIGHT TEXT */}
  <div className="flex flex-col">
    <h3
  className="font-black uppercase mt-10
             transform transition-transform duration-300 ease-out
             group-hover:-translate-y-4"
>
  {title}
</h3>

    {/* SUBTITLE (hover only) */}
    <p
      className="text-xs text-gray-500 mt-2
                 opacity-0 translate-y-2
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-300"
    >
      {subtitle}
    </p>
  </div>
</div>


        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={backImage}
            className="w-[90%] h-[90%] object-contain mx-auto mt-10"
            alt=""
          />

          {backImage2 && (
            <motion.img
              key={isFlipped} // 🔥 reset animation on every flip
              src={backImage2}
              className="absolute w-24 z-10"
              initial={{
                bottom: "5%",
                left: "5%",
              }}
              animate={{
                bottom: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "50%",
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};
/* ---------------- MAIN GRID ---------------- */

const PortfolioGrid = () => (
  <div className="py-16 px-4 bg-white rounded-t-4xl relative">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <SliderCard />
        <HoverRevealCard />
        <div className="flex flex-col gap-6 h-[500px]">
          <FlipCard
            icon="https://framerusercontent.com/images/3X9btVzNfI5Zg5G2WxEFbPInQuc.png"
            title="Magic Starts Here"
            subtitle="Adobe Photoshop"
            backImage="https://framerusercontent.com/images/eqh2hNUH66oQTny2cU2xkpID09k.png"
            backImage2="https://framerusercontent.com/images/PKTPFfUfY9srbkuYPe733OkSw.png"
          />
          <FlipCard
            icon="https://framerusercontent.com/images/yGt5CAYQbVrChKRvLKskkVpdgA.png"
            title="Spot the Easter Egg"
            subtitle="Save Ink"
            backImage="https://framerusercontent.com/images/pHOFDKMXgfttvu6FVplhZ570A.png"
            backImage2="https://framerusercontent.com/images/lr16hVkvmZM6jC9tCe6moP9DpEw.png"
          />
        </div>

     
      </div>
         <div className="w-full overflow-hidden py-8">
          <motion.div
            className="flex items-center gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            }}
          >
            {[...["Jasubhai", "Adobe", "EY", "IDG", "Network18"],
              ...["Jasubhai", "Adobe", "EY", "IDG", "Network18"]
            ].map((name, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-xl shadow-sm min-w-[140px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 transition"
              >
                <span className="font-bold text-lg font-serif text-black">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
    </div>
  </div>
);

export default PortfolioGrid;


