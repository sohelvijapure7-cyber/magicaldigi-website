"use client";

import { Award, Zap, Target, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const items = [
  {
    icon: Award,
    title: "Expert Team",
    desc: "Certified digital marketers with strong industry experience in performance marketing and branding.",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: Zap,
    title: "Fast & Responsive Support",
    desc: "We respond quickly and act faster to keep your business ahead of competitors.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Target,
    title: "Customized Growth Strategy",
    desc: "We don't believe in one-size-fits-all — every client gets a tailored marketing plan.",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Drive leads and sales with high-ROI paid campaigns on Google & Meta.",
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    desc: "Get clear monthly or weekly performance reports — no smoke and mirrors, just results.",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnerships",
    desc: "We build lasting relationships based on trust, communication, and shared success.",
    color: "from-pink-500/20 to-rose-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f05a28]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <AnimatedSection>
            <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading">
              The MagicalDigi<br />
              <span className="gradient-text">Difference</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="text-slate-400 text-lg leading-relaxed">
              We don't just run campaigns — we build growth systems. Every strategy we craft is data-driven, conversion-focused, and tailored specifically to your business goals.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover p-7 h-full flex gap-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 font-heading">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
