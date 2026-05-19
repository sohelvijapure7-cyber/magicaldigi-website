"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import AiHeroVisual from "./AiHeroVisual";

export default function Hero() {
  const words = ["Full-Service", "Digital", "Marketing", "Agency", "in", "India"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a14] pt-20">

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#f05a28]/20 to-purple-600/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/10 to-[#f05a28]/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#f05a28]/5 blur-3xl"
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center w-full py-20">

        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f05a28]/10 border border-[#f05a28]/20 text-[#f05a28] text-sm font-medium mb-8"
          >
            <Sparkles size={14} />
            <span>Premium Digital Agency in India</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 font-heading">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as [number,number,number,number] }}
                className={`inline-block mr-3 ${i >= 3 ? "gradient-text" : "text-white"}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            At MagicalDigi, we help startups, brands, malls, and local shops scale faster with powerful <span className="text-slate-200">Performance Marketing</span>, <span className="text-slate-200">SEO</span>, and <span className="text-slate-200">Social Media Branding</span> strategies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link href="/contact" className="btn-primary group">
              <span>Get Started</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[11, 12, 13, 14].map((n) => (
                <div key={n} className="relative w-10 h-10 rounded-full border-2 border-[#0a0a14] overflow-hidden bg-slate-700">
                  <Image
                    src={`https://i.pravatar.cc/80?img=${n}`}
                    alt="Client partner - Digital marketing agency in India"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-yellow-400 text-sm">★★★★★</div>
              <p className="text-slate-400 text-sm">Trusted by <span className="text-white font-semibold">100+ Brands</span></p>
            </div>
          </motion.div>
        </div>

        {/* Right — Premium Futuristic AI Animated Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as [number,number,number,number] }}
          className="relative flex w-full items-center justify-center mt-12 lg:mt-0"
        >
          <AiHeroVisual />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a14] to-transparent pointer-events-none" />
    </section>
  );
}
