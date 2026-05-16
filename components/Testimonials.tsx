"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechFlow India",
    content: "MagicalDigi transformed our online presence. Within 3 months, our organic traffic increased by 150% and lead quality improved significantly.",
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Priya Patel",
    role: "Marketing Director, LuxeMalls",
    content: "The performance marketing team is top-notch. They treated our budget like their own and delivered results that exceeded our expectations.",
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Verma",
    role: "Founder, GreenRoot Organics",
    content: "Excellent communication and brilliant execution. They helped us build a brand story that truly resonates with our local community.",
    image: "https://i.pravatar.cc/150?u=amit"
  },
  {
    name: "Sneha Reddy",
    role: "Operations Manager, SwiftLogistics",
    content: "Their SEO expertise is unmatched. We are now ranking on the first page for all our primary keywords. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=sneha"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Trusted by Leaders <br /> Across Industries
          </h3>
        </AnimatedSection>

        {/* Draggable Carousel */}
        <div className="cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="flex gap-8 pb-12"
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center gap-2">
          <p className="text-slate-400 text-sm font-medium italic">Drag to explore more success stories</p>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="min-w-[350px] md:min-w-[450px] bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col relative"
    >
      <Quote className="absolute top-8 right-8 text-slate-100 w-16 h-16" />
      
      <div className="flex text-yellow-400 mb-6">
        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
      </div>
      
      <p className="text-lg text-slate-700 leading-relaxed mb-8 relative z-10 italic">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-brand-accent)]/20">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
