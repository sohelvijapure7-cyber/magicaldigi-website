"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const goals = [
  "Become a leading performance-driven digital marketing agency in India",
  "Empower startups, brands, and retail businesses with scalable digital growth",
  "Deliver measurable results through data-backed marketing strategies",
  "Build long-term partnerships based on trust and transparency",
  "Continuously innovate and stay ahead in the digital marketing ecosystem",
];

const skills = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & Content Strategy", pct: 90 },
  { label: "Social Media Branding", pct: 92 },
  { label: "Paid Ads (Google / Meta)", pct: 88 },
  { label: "Website Development", pct: 82 },
];

const highlights = [
  { icon: Target, label: "Mission", value: "Performance-Driven Results" },
  { icon: Lightbulb, label: "Vision", value: "India's Top Digital Agency" },
  { icon: Users, label: "Team Size", value: "10+ Experts" },
  { icon: Globe, label: "Clients Served", value: "100+ Brands" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 md:pt-48 pb-24 page-hero-bg overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#f05a28]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#f05a28] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white section-heading mb-6"
          >
            About <span className="gradient-text">MagicalDigi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl leading-relaxed"
          >
            A results-driven digital marketing agency focused on helping startups, growing brands, and large retail businesses achieve consistent, scalable online growth.
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#0d0d1a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <AnimatedSection key={h.label} delay={i * 0.08}>
                  <div className="glass-card p-8 flex flex-col items-center text-center justify-center gap-4 h-full min-h-[180px]">
                    <div className="w-14 h-14 rounded-2xl bg-[#f05a28]/10 border border-[#f05a28]/20 flex items-center justify-center mb-1 shrink-0 shadow-lg shadow-[#f05a28]/5">
                      <Icon size={24} className="text-[#f05a28]" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-slate-500 text-[10px] uppercase tracking-[0.15em] font-medium">{h.label}</p>
                      <p className="text-white font-bold text-base md:text-lg font-heading leading-tight">{h.value}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading mb-6">
                Built on <span className="gradient-text">Results & Trust</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  MagicalDigi is a results-driven digital marketing agency focused on helping startups, growing brands, and large retail businesses achieve consistent, scalable online growth.
                </p>
                <p>
                  We specialize in Performance Marketing, Search Engine Optimization (SEO), and Social Media Branding — all powered by data, creativity, and conversion-focused strategies.
                </p>
                <p>
                  We don&apos;t believe in &quot;one-size-fits-all&quot; marketing. Every business is unique, and so is our approach. Whether you need a full digital growth system or a single high-impact service, we design custom solutions that deliver real business outcomes.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/portfolio" className="btn-primary group inline-flex">
                  <span>View Our Cases</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-outline inline-flex">Get In Touch</Link>
              </div>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection direction="right">
              <div className="glass-card p-8">
                <h3 className="text-white font-bold text-xl mb-8 font-heading">Our Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, i) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">{skill.label}</span>
                        <span className="text-[#f05a28] font-semibold">{skill.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
                          className="h-full bg-gradient-to-r from-[#f05a28] to-[#ff8c42] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading">
              Where We&apos;re <span className="gradient-text">Headed</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {goals.map((goal, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <div className="glass-card glass-card-hover p-6 flex flex-col items-center text-center justify-center gap-3 h-full min-h-[140px]">
                  <CheckCircle2 size={20} className="text-[#f05a28] shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">{goal}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d1a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white section-heading mb-4">Ready to Work Together?</h2>
            <p className="text-slate-400 mb-8">Let&apos;s build a customized growth strategy for your business.</p>
            <Link href="/contact" className="btn-primary inline-flex group">
              <span>Get Started</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
