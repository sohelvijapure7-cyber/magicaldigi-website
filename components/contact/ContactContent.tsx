"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "9834097170",
    href: "tel:9834097170",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Phone,
    label: "Alternate Number",
    value: "7666648314",
    href: "tel:7666648314",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Mail,
    label: "Mail Us",
    value: "magicaldigi@gmail.com",
    href: "mailto:magicaldigi@gmail.com",
    color: "from-[#f05a28]/20 to-orange-500/10",
    iconColor: "text-[#f05a28]",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Ghatkopar East, Mumbai",
    href: "https://maps.google.com/?q=Ghatkopar+East+Mumbai",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584564725067", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magicaldigiofficial", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/110229309", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@magicaldigi", label: "YouTube" },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setStatus("sending");
  setErrorMsg("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    console.log(data);

    setStatus("sent");

  } catch (error) {
    console.error(error);

    setStatus("error");
    setErrorMsg(String(error));
  }
};
  

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 md:pt-48 pb-24 page-hero-bg overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f05a28]/8 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#f05a28] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Contact Us</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white section-heading mb-6"
          >
            Contact <span className="gradient-text">MagicalDigi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-xl leading-relaxed"
          >
            Ready to grow your brand? Let&apos;s talk. We&apos;ll build a custom strategy that delivers real results.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[#0d0d1a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid sm:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={info.label} delay={i * 0.1}>
                  <a
                    href={info.href}
                    target={info.label === "Address" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card glass-card-hover p-7 flex gap-5 items-start block"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0`}>
                      <Icon size={22} className={info.iconColor} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-white font-semibold text-base font-heading">{info.value}</p>
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Social */}
      <section className="py-24 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-3xl font-extrabold text-white section-heading mb-2">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-heading">Message Sent!</h3>
                    <p className="text-slate-400 text-center">Thank you for reaching out. We&apos;ll contact you within 24 hours.</p>
                    <button
                      onClick={() => { setStatus("idle"); setErrorMsg(""); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="btn-outline mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#f05a28]/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#f05a28]/50 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#f05a28]/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-[#13131f] border border-white/10 rounded-xl px-4 py-3.5 text-slate-300 text-sm focus:outline-none focus:border-[#f05a28]/50 transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="performance-marketing">Performance Marketing</option>
                          <option value="seo">Search Engine Optimization</option>
                          <option value="social-media">Social Media Branding</option>
                          <option value="website-development">Website Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Your Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your business and goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#f05a28]/50 transition-all resize-none"
                      />
                    </div>
                    {status === "error" && (
                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        {errorMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Right Panel */}
            <AnimatedSection direction="right" className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass-card p-8">
                <h3 className="text-white font-bold text-xl mb-6 font-heading">Connect With Us</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Follow us on social media for daily marketing tips, case studies, and agency updates.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-[#f05a28] hover:border-[#f05a28]/30 hover:bg-[#f05a28]/5 transition-all"
                    >
                      <Icon size={16} />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 flex-1">
                <h3 className="text-white font-bold text-xl mb-6 font-heading">Working Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-slate-400 text-sm">{day}</span>
                      <span className="text-white text-sm font-medium">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">We&apos;re currently online</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
