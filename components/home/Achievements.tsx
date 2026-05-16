"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Achievements() {
  return (
    <section className="py-24 bg-[#070710] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f05a28]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f05a28]/10 border border-[#f05a28]/20 text-[#f05a28] text-sm font-medium mb-6"
          >
            <span>Our Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white section-heading mb-6"
          >
            Our <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Delivering excellence and scaling brands to new heights with data-driven strategies and creative brilliance.
          </motion.p>
        </div>

        <AnimatedSection delay={0.3} className="relative max-w-5xl mx-auto">
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2 md:p-4 hover:border-[#f05a28]/30 transition-colors duration-500">
            <div className="relative rounded-2xl overflow-hidden bg-[#0d0d1a] flex justify-center items-center min-h-[300px]">
              {/* Fallback pattern while image is missing */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
              
              {/* Fallback text while image is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-40 z-0">
                <p className="text-white font-medium text-lg">Add achievements.jpg in public folder</p>
              </div>
              
              <img
                src="/achievements.jpg"
                alt="Our Achievements"
                className="w-full h-auto max-h-[85vh] object-contain transform group-hover:scale-105 transition-transform duration-700 ease-in-out z-10 relative"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070710]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
            </div>
            
            {/* Glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f05a28]/0 via-[#f05a28]/20 to-[#f05a28]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
