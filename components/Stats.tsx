"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
  { label: "Revenue Generated", value: 12, suffix: "M+" },
  { label: "Team Experts", value: 25, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--color-brand-primary)] relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="text-center">
      <AnimatedSection direction="none" delay={index * 0.1}>
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 flex items-center justify-center">
          {isInView ? (
            <Counter value={stat.value} />
          ) : (
            <span>0</span>
          )}
          <span className="text-[var(--color-brand-accent)]">{stat.suffix}</span>
        </div>
        <p className="text-slate-300 font-medium tracking-wide uppercase text-sm">
          {stat.label}
        </p>
      </AnimatedSection>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{displayValue}</span>;
}
