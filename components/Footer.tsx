"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const services = [
  "Performance Marketing",
  "Social Media Branding",
  "Search Engine Optimization",
  "Website Development",
];

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584564725067", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magicaldigiofficial", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/110229309", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@magicaldigi", label: "YouTube" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#070710] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#f05a28]/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f05a28]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6 group w-fit">
              <Image 
                src="/logo.png" 
                alt="MagicalDigi Logo" 
                width={400} 
                height={120} 
                className="h-32 w-auto object-contain transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full-service digital marketing agency helping startups, brands &amp; retail businesses grow faster with performance-driven strategies.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-[#f05a28] hover:border-[#f05a28]/30 hover:bg-[#f05a28]/5 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-heading">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/service" className="text-slate-400 text-sm hover:text-[#f05a28] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#f05a28] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 text-sm hover:text-[#f05a28] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#f05a28] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#f05a28] mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Ghatkopar East, Mumbai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#f05a28] shrink-0" />
                <a href="tel:9834097170" className="text-slate-400 text-sm hover:text-[#f05a28] transition-colors">9834097170</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#f05a28] shrink-0" />
                <a href="tel:7666648314" className="text-slate-400 text-sm hover:text-[#f05a28] transition-colors">7666648314</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#f05a28] shrink-0" />
                <a href="mailto:magicaldigi@gmail.com" className="text-slate-400 text-sm hover:text-[#f05a28] transition-colors">magicaldigi@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MagicalDigi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Terms of Service</Link>
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-lg bg-[#f05a28]/10 border border-[#f05a28]/20 flex items-center justify-center text-[#f05a28] hover:bg-[#f05a28] hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
