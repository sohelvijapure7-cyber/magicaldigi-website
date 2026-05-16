"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f05a28]/10 via-transparent to-purple-900/10 pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f05a28]/10 blur-3xl rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap size={14} />
            Get Started Instantly
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white section-heading mb-6 leading-tight">
            Ready to Scale Your<br />
            <span className="gradient-text">Brand to New Heights?</span>
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 100+ brands that trust MagicalDigi for performance marketing, SEO, and social media growth. Let's build something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
              <span>Start Your Growth Journey</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/service" className="btn-outline text-base px-8 py-4">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
