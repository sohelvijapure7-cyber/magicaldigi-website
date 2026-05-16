"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--color-brand-light)] pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[var(--color-brand-accent)]/5 to-purple-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sm font-medium text-[var(--color-brand-primary)] mb-6">
            <Sparkles size={16} className="text-[var(--color-brand-accent)]" />
            <span>Premium Digital Agency in India</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Marketing That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]">
              Delivers Real Results
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
          >
            At MagicalDigi, we help startups, brands, malls, and local shops
            scale faster with powerful Performance Marketing, SEO, and Social
            Media Branding strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-brand-primary)] text-white rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-white text-[var(--color-brand-primary)] border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400">
                {"★★★★★"}
              </div>
              <span className="font-medium text-slate-700">Trusted by 100+ Brands</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square rounded-[2rem] bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] p-1 overflow-hidden shadow-2xl shadow-[var(--color-brand-primary)]/20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             
             {/* Floating UI Elements */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 backdrop-blur-md bg-white/90"
             >
               <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                 <ArrowRight size={24} className="-rotate-45" />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-medium">Growth Rate</p>
                 <p className="text-xl font-bold text-slate-900">+145%</p>
               </div>
             </motion.div>
             
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 backdrop-blur-md bg-white/90"
             >
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-[var(--color-brand-accent)]" />
                 <div>
                   <p className="text-sm font-bold">New Leads</p>
                 </div>
               </div>
               <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "80%" }} 
                   transition={{ duration: 1.5, delay: 1 }}
                   className="h-full bg-[var(--color-brand-accent)]" 
                 />
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
