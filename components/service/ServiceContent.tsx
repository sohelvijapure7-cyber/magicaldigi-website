"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, Search, Share2, Code2, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    tagline: "High-ROI Paid Ad Campaigns",
    desc: "We run conversion-focused Google & Meta ads to generate quality leads, sales, and measurable growth. Every rupee spent is tracked, tested, and optimized for maximum return.",
    points: [
      "Google Search & Display Ads",
      "Meta (Facebook & Instagram) Ads",
      "YouTube Video Ads",
      "Remarketing Campaigns",
      "Landing Page Optimization",
      "Full Campaign Setup & Management",
    ],
    gradient: "from-orange-500/20 to-red-500/5",
    border: "border-orange-500/20",
    iconBg: "from-orange-500/30 to-red-500/20",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank Higher on Google",
    desc: "We optimize your website to improve organic rankings, traffic, and long-term visibility. Our data-driven SEO strategies build sustainable growth that compounds over time.",
    points: [
      "On-Page SEO Optimization",
      "Off-Page SEO & Link Building",
      "Technical SEO Audit & Fixes",
      "Keyword Research & Strategy",
      "Content Marketing",
      "SEO Performance Reporting",
    ],
    gradient: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/20",
    iconBg: "from-blue-500/30 to-cyan-500/20",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    tagline: "Build a Powerful Online Presence",
    desc: "We grow your brand on Instagram, Facebook & LinkedIn with engaging content and consistent branding. Build community, drive engagement, and turn followers into customers.",
    points: [
      "Content Calendar & Strategy",
      "Graphic Design & Reels Creation",
      "Brand Voice & Visual Identity",
      "Instagram / Facebook / LinkedIn Management",
      "Community Engagement",
      "Monthly Performance Reports",
    ],
    gradient: "from-purple-500/20 to-pink-500/5",
    border: "border-purple-500/20",
    iconBg: "from-purple-500/30 to-pink-500/20",
  },
  {
    icon: Code2,
    title: "Website Development",
    tagline: "Responsive, High-Performing Websites",
    desc: "We build fast, modern, mobile-first websites that convert visitors into customers and reinforce your brand identity. From landing pages to full business websites.",
    points: [
      "Custom Website Design",
      "Mobile-Responsive Development",
      "Performance Optimization",
      "CMS Integration",
      "E-Commerce Solutions",
      "Website Maintenance & Support",
    ],
    gradient: "from-green-500/20 to-emerald-500/5",
    border: "border-green-500/20",
    iconBg: "from-green-500/30 to-emerald-500/20",
  },
];

export default function ServiceContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 md:pt-48 pb-24 page-hero-bg overflow-hidden">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#f05a28]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#f05a28] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Services</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white section-heading mb-6"
          >
            Services We&apos;re <span className="gradient-text">Offering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl leading-relaxed"
          >
            Data-driven, conversion-focused digital marketing services designed to scale your brand and deliver real, measurable results.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 space-y-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className={`glass-card border ${svc.border} p-8 md:p-10`}>
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left */}
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.iconBg} flex items-center justify-center mb-6`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <p className="text-[#f05a28] text-xs font-bold uppercase tracking-widest mb-2">{svc.tagline}</p>
                      <h2 className="text-3xl font-extrabold text-white section-heading mb-4">{svc.title}</h2>
                      <p className="text-slate-400 leading-relaxed mb-6">{svc.desc}</p>
                      <Link href="/contact" className="btn-primary inline-flex group">
                        <span>Get Started</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    {/* Right */}
                    <div className={`rounded-2xl bg-gradient-to-br ${svc.gradient} p-7 border border-white/5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">What&apos;s Included</h4>
                      <ul className="space-y-3">
                        {svc.points.map((p) => (
                          <li key={p} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-[#f05a28] shrink-0" />
                            <span className="text-slate-300 text-sm">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d1a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white section-heading mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-8">
              Talk to our experts — we&apos;ll build a custom plan for your business goals.
            </p>
            <Link href="/contact" className="btn-primary inline-flex group">
              <span>Book a Free Consultation</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
