"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const benefits = [
  "Comprehensive SEO Audit",
  "Competitor Market Analysis",
  "Performance Scoring",
  "Social Media Presence Review",
  "Conversion Rate Optimization Tips",
  "Custom Scaling Roadmap"
];

export default function ValueProp() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side with parallax */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <motion.div style={{ y: imageY }} className="h-[600px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Digital Strategy Analysis" 
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[280px] z-20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-slate-900 leading-tight">100% Free Consultation</h4>
              </div>
              <p className="text-sm text-slate-600">
                Get a detailed breakdown of your digital presence without any upfront commitment.
              </p>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <AnimatedSection direction="right">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">
                Grow Your Business
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                Get a Professional <br />
                <span className="text-[var(--color-brand-primary)]">Digital Analysis</span> For Free
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Stop guessing and start growing. Our team of experts will analyze your current performance and identify the biggest opportunities for immediate growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-brand-primary)] text-white rounded-full font-bold hover:bg-[var(--color-brand-accent)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-brand-accent)]/30 group"
              >
                Claim Your Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
