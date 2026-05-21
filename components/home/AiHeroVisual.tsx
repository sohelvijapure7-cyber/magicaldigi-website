"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Percent,
  Search,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function AiHeroVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Floating animation presets
  const floatAnim = (delay = 0, duration = 6) => ({
    animate: {
      y: [0, -12, 0],
      rotate: [0, 0.5, 0],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  return (
    <div className="relative w-full max-w-[620px] aspect-[4/4] flex items-center justify-center select-none overflow-visible px-4 md:px-0">

      {/* ── BACKGROUND VOLUMETRIC GLOWS ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Intense cinematic orange glow in the center */}
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#f05a28]/18 to-amber-500/10 blur-[85px] animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Cyber blue accent highlight on the right side */}
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/8 blur-[95px]" />
      </div>

      {/* ── MAIN CENTRAL CYBORG VISUAL ──────────────────────── */}
      <div className="relative w-[75%] md:w-[80%] aspect-square flex items-center justify-center pointer-events-none z-10 transition-transform duration-700">

        {/* Soft elegant slow breathing motion for the head image */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Subtle surrounding orange outline rings */}
          <div className="absolute w-[95%] h-[95%] rounded-full border border-[#f05a28]/10 animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#f05a28]/5 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />

          {/* Golden AI Cyborg Head Silhouette */}
          <img
            src="/ai-cyborg-hero.png"
            alt="Futuristic Digital AI Cyborg"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(240,90,40,0.25)] rounded-full"
          />

          {/* Embedded glowing core points (Neural hotspots overlay) */}
          <div className="absolute top-[28%] left-[45%] w-3 h-3 rounded-full bg-amber-400 blur-[2px] animate-ping opacity-60" />
          <div className="absolute top-[28%] left-[45%] w-2 h-2 rounded-full bg-[#f05a28] shadow-[0_0_10px_#f05a28]" />

          <div className="absolute top-[42%] left-[34%] w-2.5 h-2.5 rounded-full bg-amber-400 blur-[2px] animate-ping opacity-60" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[42%] left-[34%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

          <div className="absolute top-[64%] left-[36%] w-2 h-2 rounded-full bg-amber-400 blur-[2px] animate-ping opacity-60" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[64%] left-[36%] w-1.5 h-1.5 rounded-full bg-[#f05a28] shadow-[0_0_8px_#f05a28]" />

          <div className="absolute top-[52%] left-[58%] w-2 h-2 rounded-full bg-amber-400 blur-[1px]" />

          <div className="absolute top-[75%] left-[54%] w-2.5 h-2.5 rounded-full bg-amber-400 blur-[2px] animate-ping opacity-60" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-[75%] left-[54%] w-1.5 h-1.5 rounded-full bg-[#f05a28] shadow-[0_0_10px_#f05a28]" />
        </motion.div>
      </div>

      {/* ── SVG CONNECTION LINES LAYER (Desktop Only) ───────── */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-20"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f05a28" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ff8c42" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f05a28" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Card 1 Connection: Growth Rate (Top Left) -> Forehead Node */}
        <path d="M 160 110 L 220 135 L 270 170" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="270" cy="170" r="3" fill="#f05a28" className="animate-pulse" />

        {/* Card 2 Connection: Total Leads (Top Right) -> Crown Node */}
        <path d="M 440 100 L 390 120 L 350 170" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="350" cy="170" r="3" fill="#f05a28" />

        {/* Card 3 Connection: Campaign Perf (Mid Left) -> Eye/Nose Node */}
        <path d="M 170 280 L 210 255" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="210" cy="255" r="3" fill="#22d3ee" className="animate-pulse" />

        {/* Card 4 Connection: SEO Score (Mid Right) -> Back Head Node */}
        <path d="M 430 310 L 375 310" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="375" cy="310" r="3" fill="#f05a28" />

        {/* Card 5 Connection: Services (Bottom Left) -> Chin/Jaw Node */}
        <path d="M 230 435 L 230 380" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="230" cy="380" r="3" fill="#f05a28" />

        {/* Card 6 Connection: ROI Increase (Bottom Right) -> Neck Node */}
        <path d="M 430 480 L 350 480 L 330 450" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="330" cy="450" r="3" fill="#f05a28" />
      </svg>

      {/* ── FLOATING ANALYTICS CARDS ────────────────────────── */}

      {/* CARD 1: Growth Rate +145% (Top Left) */}
      <div className="absolute top-[2%] left-[-4%] md:left-[-6%] z-30 scale-[0.70] sm:scale-100 origin-top-left transition-transform">
        <motion.div
          variants={floatAnim(0, 5.8)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex flex-col gap-2 w-36 md:w-[170px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-[#f05a28]/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-wider uppercase font-semibold text-slate-400">
              <Sparkles size={11} className="text-amber-500" />
              <span>Growth Rate</span>
            </div>
            <MoreHorizontal size={12} className="text-slate-500 cursor-pointer" />
          </div>
          <div>
            <h4 className="text-white font-black text-base md:text-xl leading-none font-heading mt-0.5">+145%</h4>
          </div>
          {/* SVG Sparkline */}
          <div className="h-6 w-full mt-0.5 overflow-visible">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="growthGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f05a28" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ff8c42" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 25 Q15 28 25 15 T50 10 T75 22 T100 5"
                fill="none"
                stroke="url(#growthGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <circle cx="100" cy="5" r="2" fill="#ff8c42" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* CARD 2: Total Leads 2,400+ (Top Right) */}
      <div className="absolute top-[4%] right-[-4%] md:right-[-6%] z-30 scale-[0.70] sm:scale-100 origin-top-right transition-transform">
        <motion.div
          variants={floatAnim(0.8, 6.2)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 md:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex items-center gap-2.5 w-36 md:w-[170px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-amber-500/30"
        >
          <div className="w-8 h-8 rounded-lg bg-[#f05a28]/15 border border-[#f05a28]/20 flex items-center justify-center shrink-0">
            <Users size={15} className="text-[#f05a28]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[8px] md:text-[9px] tracking-wider uppercase font-semibold text-slate-400">Total Leads</span>
              <MoreHorizontal size={10} className="text-slate-500 cursor-pointer" />
            </div>
            <h4 className="text-white font-black text-sm md:text-lg leading-none font-heading mt-0.5">2,400+</h4>
          </div>
        </motion.div>
      </div>

      {/* CARD 3: Campaign Performance 98% (Middle Left) */}
      <div className="absolute top-[35%] left-[-8%] md:left-[-12%] z-30 scale-[0.70] sm:scale-100 origin-left transition-transform">
        <motion.div
          variants={floatAnim(1.5, 6.4)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex flex-col gap-2.5 w-36 md:w-[160px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-cyan-500/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] md:text-[9px] tracking-wider uppercase font-semibold text-slate-400">Campaign Performance</span>
            <MoreHorizontal size={11} className="text-slate-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            {/* Radial progress ring */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#f05a28"
                  strokeWidth="2.5"
                  strokeDasharray="98, 100"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "98, 100" }}
                  transition={{ duration: 1.8, delay: 0.5 }}
                />
              </svg>
              <span className="absolute text-[9px] font-bold text-white leading-none">98%</span>
            </div>
            <div className="h-6 flex-1 overflow-visible">
              <svg viewBox="0 0 60 20" className="w-full h-full overflow-visible">
                <motion.path
                  d="M0 15 Q10 8 20 12 T40 4 T60 8"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CARD 4: SEO Score 92/100 (Middle Right) */}
      <div className="absolute top-[40%] right-[-8%] md:right-[-12%] z-30 scale-[0.70] sm:scale-100 origin-right transition-transform">
        <motion.div
          variants={floatAnim(2.2, 5.6)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex flex-col gap-2 w-36 md:w-[160px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-[#f05a28]/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[8px] md:text-[9px] tracking-wider uppercase font-semibold text-slate-400">
              <Search size={10} className="text-cyan-400" />
              <span>SEO Score</span>
            </div>
            <MoreHorizontal size={11} className="text-slate-500 cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            {/* Radial progress ring */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#ff8c42"
                  strokeWidth="2.5"
                  strokeDasharray="92, 100"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "92, 100" }}
                  transition={{ duration: 1.8, delay: 0.6 }}
                />
              </svg>
              <span className="absolute text-[8px] font-bold text-white leading-none">92<span className="text-[6px] text-slate-400">/100</span></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 leading-none">Status</span>
              <span className="text-[11px] text-emerald-400 font-bold leading-tight mt-0.5 flex items-center gap-0.5">
                Optimized <ArrowUpRight size={10} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CARD 5: Services (Bottom Left/Center) */}
      <div className="absolute bottom-[-2%] left-[-4%] md:left-[-6%] z-30 scale-[0.70] sm:scale-100 origin-bottom-left transition-transform">
        <motion.div
          variants={floatAnim(3, 6.6)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 md:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex flex-col gap-2 w-44 md:w-[190px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-[#f05a28]/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] tracking-wider uppercase font-semibold text-slate-400">
              <Layers size={10} className="text-[#f05a28]" />
              <span>Services</span>
            </div>
            <MoreHorizontal size={11} className="text-slate-500 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1.5 mt-0.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] shadow-[0_0_6px_#f05a28]" />
              <span className="text-[9px] md:text-[10px] text-slate-300 font-medium">Performance Marketing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_6px_#ec4899]" />
              <span className="text-[9px] md:text-[10px] text-slate-300 font-medium">Social Media Marketing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
              <span className="text-[9px] md:text-[10px] text-slate-300 font-medium">SEO Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
              <span className="text-[9px] md:text-[10px] text-slate-300 font-medium">Branding & Design</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CARD 6: ROI Increase +275% (Bottom Right) */}
      <div className="absolute bottom-[-4%] right-[-4%] md:right-[-6%] z-30 scale-[0.70] sm:scale-100 origin-bottom-right transition-transform">
        <motion.div
          variants={floatAnim(3.5, 6)}
          animate="animate"
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-3 md:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.08] flex flex-col gap-1.5 w-36 md:w-[160px] backdrop-blur-md bg-[#0a0a14]/75 transition-all duration-300 hover:border-[#f05a28]/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] md:text-[9px] tracking-wider uppercase font-semibold text-slate-400">ROI Increase</span>
            <MoreHorizontal size={11} className="text-slate-500 cursor-pointer" />
          </div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <h4 className="text-white font-black text-sm md:text-lg leading-none font-heading">275%</h4>
          </div>
          {/* Custom Orange Bar Chart */}
          <div className="flex items-end justify-between h-8 mt-1.5 gap-[3px] overflow-visible">
            {[20, 45, 30, 60, 50, 85, 75, 100].map((h, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-[#f05a28] to-[#ff8c42] rounded-t-[1px] w-full"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
