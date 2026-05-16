"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, Search, Share2, Code2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    desc: "High-ROI paid ad campaigns on Google & Meta to generate quality leads, sales, and measurable growth.",
    color: "from-orange-500/20 to-red-500/10",
    border: "hover:border-orange-500/30",
    glow: "hover:shadow-orange-500/10",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Rank higher on Google. We optimize your website for better organic rankings, traffic, and long-term visibility.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/30",
    glow: "hover:shadow-blue-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    desc: "Build a powerful online presence on Instagram, Facebook & LinkedIn with engaging content and consistent branding.",
    color: "from-purple-500/20 to-pink-500/10",
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-purple-500/10",
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "Create responsive, high-performing websites that convert visitors into customers and reinforce your brand.",
    color: "from-green-500/20 to-emerald-500/10",
    border: "hover:border-green-500/30",
    glow: "hover:shadow-green-500/10",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a]/0 via-[#0d0d1a]/50 to-[#0a0a14]/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading mb-4">
            Services Built for <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every service we offer is designed to move the needle — more leads, more sales, more visibility.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <AnimatedSection key={svc.title} delay={i * 0.1} className="h-full">
                <div className={`h-full glass-card glass-card-hover p-7 flex flex-col gap-5 ${svc.border} hover:shadow-xl ${svc.glow} transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 font-heading">{svc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <Link href="/service" className="btn-outline inline-flex items-center gap-2 group">
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
