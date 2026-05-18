"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "Platform Integration",
    category: "Performance Marketing",
    desc: "Full Google & Meta ads integration driving 3× ROAS for a retail brand.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tag: "Paid Ads",
  },
  {
    title: "Social Engagement",
    category: "Social Media Branding",
    desc: "Instagram & Facebook growth campaign achieving 10K+ followers in 90 days.",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    tag: "Social Media",
  },
  {
    title: "Landing Page Redesign",
    category: "Website Development",
    desc: "High-converting landing page redesign that boosted lead generation by 145%.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    tag: "Web Dev",
  },
  {
    title: "Content Strategy",
    category: "SEO & Content",
    desc: "Full content and SEO strategy that ranked 50+ keywords on Google page 1.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    tag: "SEO",
  },
  {
    title: "Online Media Management",
    category: "Social Media Branding",
    desc: "End-to-end social media management for a Mumbai-based mall brand.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    tag: "Social Media",
  },
  {
    title: "Brand Strategy",
    category: "Performance Marketing",
    desc: "Brand awareness campaign across Google Display, YouTube, and Meta.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    tag: "Branding",
  },
];

export default function PortfolioContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 md:pt-48 pb-24 page-hero-bg overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#f05a28] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Portfolio</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white section-heading mb-6"
          >
            Our Digital Marketing <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl leading-relaxed"
          >
            Real campaigns, real results. Explore how we&apos;ve helped brands across India grow faster with data-driven digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title + i} delay={i * 0.1}>
                <div className="group glass-card overflow-hidden cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={`${project.title} – ${project.category} by MagicalDigi`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/90 via-[#0a0a14]/20 to-transparent" />
                    <div className="absolute inset-0 bg-[#f05a28]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#f05a28] text-white text-xs font-bold rounded-full">{project.tag}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#f05a28] text-xs font-semibold uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-white font-bold text-xl mb-2 font-heading group-hover:text-[#f05a28] transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.desc}</p>
                    <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-[#f05a28] text-sm font-semibold hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white section-heading mb-4">
              Want Results Like These?
            </h2>
            <p className="text-slate-400 mb-8">Let&apos;s build your success story. Contact us for a free strategy session.</p>
            <Link href="/contact" className="btn-primary inline-flex group">
              <span>Start Your Project</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
