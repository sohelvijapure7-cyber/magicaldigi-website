"use client";

import { motion } from "framer-motion";

// Placeholder for client images. We duplicate the array to create a seamless loop.
const clients = Array.from({ length: 6 }).map((_, i) => `/clients/${i + 1}.png`);
const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-24 bg-[#0a0a14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white section-heading"
        >
          Our <span className="gradient-text">Clients</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 mt-4"
        >
          Trusted by growing brands and businesses everywhere.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center h-40 md:h-64">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#0a0a14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#0a0a14] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 md:gap-24 pr-10 md:pr-24 items-center w-max"
        >
          {duplicatedClients.map((src, idx) => (
            <div
              key={idx}
              className="relative w-48 h-32 md:w-72 md:h-44 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer flex shrink-0 items-center justify-center bg-white/5 rounded-2xl border border-white/10 group"
            >
              <img
                src={src}
                alt={`Client ${idx + 1}`}
                className="max-w-full max-h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=C&background=111&color=fff&size=200`;
                }}
              />
              <div className="absolute -inset-1 bg-[#f05a28]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
