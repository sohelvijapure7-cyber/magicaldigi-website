"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart2, LineChart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const auditPoints = [
  { icon: Search, text: "Complete website, SEO & conversion performance audit" },
  { icon: BarChart2, text: "Google and Meta ads performance and ROI evaluation" },
  { icon: LineChart, text: "Social media branding and competitor analysis" },
];

export default function AuditCTA() {
  return (
    <section className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/30 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#f05a28]/8 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <AnimatedSection direction="left">
            <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Free Audit</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading mb-6">
              Claim Your <span className="gradient-text">Free Digital Audit</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We analyze your website performance, Google Ads campaigns, SEO health, and social media presence to identify growth opportunities and areas that need improvement.
            </p>
            <div className="space-y-4 mb-10">
              {auditPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f05a28]/10 border border-[#f05a28]/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#f05a28]" />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex group">
              <span>Claim Your Free Audit</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Right — Image */}
          <AnimatedSection direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a14]/80 via-transparent to-[#f05a28]/10" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                    <BarChart2 size={18} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Avg. ROAS Improvement</p>
                    <p className="text-white font-bold font-heading">3.5× After Audit</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
