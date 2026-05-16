"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Search, 
  Share2, 
  Globe, 
  BarChart3, 
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven strategies designed to scale your ROI through targeted campaigns and precise analytics.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "SEO Optimization",
    description: "Dominating search results and driving organic traffic with our advanced keyword strategies and technical SEO.",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Social Media Branding",
    description: "Building powerful brand identities that resonate with your audience across all social platforms.",
    icon: <Share2 className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    description: "Creating high-performance, responsive websites that convert visitors into loyal customers.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Analytics & Insights",
    description: "Deep-dive data analysis to understand customer behavior and optimize every touchpoint of your funnel.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Content Strategy",
    description: "Compelling storytelling and content creation that establishes authority and engages your community.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Services() {
  return (
    <section id="service" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection className="max-w-2xl" direction="left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Transforming Ideas Into <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]">Digital Success</span>
            </h3>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-lg text-slate-600 max-w-sm">
              We provide end-to-end digital solutions tailored to your unique business goals and market challenges.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1} direction="up" className="h-full">
      <motion.div
        whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col"
      >
        <div className={cn(
          "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500",
          service.color
        )}>
          {service.icon}
        </div>
        
        <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-brand-accent)] transition-colors">
          {service.title}
        </h4>
        
        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)] transition-colors mt-auto">
          Learn More <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100%] -z-10 group-hover:bg-gradient-to-br transition-colors duration-500 opacity-50" />
      </motion.div>
    </AnimatedSection>
  );
}
