"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: 100, suffix: "%", label: "Client-Focused Growth Approach", prefix: "" },
  { value: 100, suffix: "%", label: "Performance-Driven Approach", prefix: "" },
  { value: 10, suffix: "+", label: "Active Clients", prefix: "" },
  { value: 50, suffix: "+", label: "Successful Projects", prefix: "" },
];

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d1a]">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f05a28]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f05a28]/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#f05a28] text-sm font-semibold uppercase tracking-widest mb-4">By the Numbers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white section-heading">
            Results That <span className="gradient-text">Speak Volumes</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="glass-card p-8 h-full flex flex-col items-center justify-center border border-white/5 hover:border-[#f05a28]/20 transition-colors">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 font-heading gradient-text">
                  <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
