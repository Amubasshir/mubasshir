'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DescriptionSection5 = () => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-60 pb-20 px-6 md:px-12 font-sans border-t border-white/5 -mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
        
        {/* --- Left Column: Headline --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] tracking-tight">
            The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.
          </h2>
        </motion.div>

        {/* --- Right Column: Body Text --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-gray-300 text-base md:text-lg leading-relaxed space-y-8 font-light"
        >
          <p>
            The picture showcases an artistic medley of undulating shapes, strikingly portrayed in a palette of shimmering tints that span from rich blues and purples to electrifying pinks and oranges, crafting a dreamlike visual spectacle. These sleek, ribbon-like figures twist and weave amongst one another, conveying a sense of kinetic energy and smooth fluidity.
          </p>
          <p>
            Set against a minimalist, softly gradient light peach backdrop, the intricate, glossy shapes take center stage. Their polished finish implies a three-dimensional aspect, making them resemble objects fashioned from a gleaming, liquid-like substance. This piece might conjure various interpretations, from themes of harmony and interconnectivity to a sense of digital or avant-garde aesthetics, thanks to its silken texture and flawless color transitions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default DescriptionSection5;