"use client";

import Link from "next/link";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "Contact Us",
    badge: null,
    description: "Perfect for local businesses just getting started with digital marketing.",
    features: [
      "Social Media (Instagram / Facebook)",
      "6 Creative Posts (Graphics + Captions)",
      "4 Reels (Short videos per month)",
      "Google Business Setup / Optimization",
      "Monthly Growth Report",
    ],
    excluded: [
      "LinkedIn & Twitter",
      "SEO Optimization",
      "Paid Ads Management",
      "Website Maintenance",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "Contact Us",
    badge: "Most Popular",
    description: "Our best-selling plan for brands serious about scaling their digital presence.",
    features: [
      "Social Media (Instagram, Facebook, LinkedIn)",
      "10+ Premium Posts + 1 Carousel",
      "6 Reels (Video edits per month)",
      "Google Business Setup / Optimization",
      "Standard SEO (On-page, Off-page, Technical + Backlinks)",
      "Paid Ads (Google, Meta, YouTube) — Full Setup & Optimization",
      "Website Maintenance / Redesign",
      "Monthly Performance Report",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Pro",
    price: "Contact Us",
    badge: null,
    description: "Enterprise-level marketing for high-growth brands that demand the best.",
    features: [
      "Social Media (Instagram, Facebook, LinkedIn, Twitter)",
      "12+ Premium Posts + 2 Carousels",
      "9 Reels (Video edits per month)",
      "Google Business Setup / Optimization",
      "Advanced SEO (On-page, Off-page, Technical + Backlinks)",
      "Paid Ads (Google, Meta, YouTube) — Full Setup & Optimization",
      "Website Maintenance / Redesign",
      "Weekly Performance Report",
    ],
    excluded: [],
    cta: "Get Started",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#f05a28]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading mb-4">
            Our Best <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Transparent, result-driven plans tailored to every stage of your business growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.12} className="h-full">
              <div className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#f05a28]/15 to-[#13131f] border-2 border-[#f05a28]/40 shadow-2xl shadow-[#f05a28]/10"
                  : "glass-card border border-white/8 hover:border-[#f05a28]/20"
              }`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-[#f05a28] text-white text-xs font-bold rounded-full shadow-lg">
                    <Star size={11} fill="white" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6 text-center flex flex-col items-center">
                  <p className="text-[#f05a28] text-xs font-bold uppercase tracking-widest mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-3 justify-center">
                    <span className="text-white text-3xl font-extrabold font-heading">Get Quote</span>
                  </div>
                  <p className="text-slate-400 text-sm max-w-[240px]">{plan.description}</p>
                </div>

                <div className="space-y-3 flex-1 mb-8 flex flex-col items-center justify-center">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#f05a28]/20 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#f05a28]" />
                      </div>
                      <span className="text-slate-300 text-sm">{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-center justify-center opacity-35">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <span className="text-slate-600 text-xs font-bold">—</span>
                      </div>
                      <span className="text-slate-500 text-sm line-through">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                    plan.highlight
                      ? "bg-[#f05a28] text-white hover:shadow-lg hover:shadow-[#f05a28]/30 hover:-translate-y-0.5"
                      : "border border-white/10 text-slate-300 hover:border-[#f05a28]/40 hover:text-[#f05a28] hover:bg-[#f05a28]/5"
                  }`}
                >
                  <Zap size={14} />
                  {plan.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
