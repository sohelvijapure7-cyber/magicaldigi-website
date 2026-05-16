"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Startup Founder",
    role: "Tech Startup, Mumbai",
    text: "MagicalDigi helped us generate quality leads within the first month itself. Their performance marketing strategy is outstanding.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    name: "Retail Business Owner",
    role: "Retail Chain, Mumbai",
    text: "Our brand visibility increased drastically on Instagram and Google after working with MagicalDigi. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "E-Commerce Brand",
    role: "Online Store Owner",
    text: "The SEO and paid ads team at MagicalDigi delivered 3x ROAS in just 60 days. Amazing results, professional team.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=56",
  },
  {
    name: "Local Business",
    role: "Restaurant Owner",
    text: "From zero social media presence to 10K+ followers in 3 months. MagicalDigi knows exactly what they're doing.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=25",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-80 shrink-0 mx-3 glass-card p-7 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Quote size={20} className="text-[#f05a28]/40" />
      </div>
      <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-white font-semibold text-sm font-heading">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0d0d1a] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 mb-14">
        <AnimatedSection className="text-center">
          <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d1a] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <div className="marquee-track py-4">
            {doubled.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
