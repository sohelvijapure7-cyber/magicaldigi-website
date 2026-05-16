"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [hasFilled, setHasFilled] = useState(true);

  useEffect(() => {
    // Only run on client
    const filled = localStorage.getItem("magicaldigi_lead_filled") === "true";
    setHasFilled(filled);

    if (filled) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find closest a or button
      const clickable = target.closest("a, button");

      if (clickable && !clickable.closest("#lead-popup")) {
        const isAlreadyFilled = localStorage.getItem("magicaldigi_lead_filled") === "true";
        if (!isAlreadyFilled) {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
          
          if (clickable.tagName.toLowerCase() === "a") {
            setPendingUrl((clickable as HTMLAnchorElement).href);
          }
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (form.name.trim().length < 2) {
      setError("Please enter a valid name.");
      return;
    }
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!form.service) {
      setError("Please select a service.");
      return;
    }

    setStatus("sending");
    // Simulate delay
    await new Promise((r) => setTimeout(r, 1200));
    
    setStatus("sent");
    localStorage.setItem("magicaldigi_lead_filled", "true");
    setHasFilled(true);
    
    setTimeout(() => {
      setIsOpen(false);
      if (pendingUrl && pendingUrl !== window.location.href && !pendingUrl.startsWith("tel:") && !pendingUrl.startsWith("mailto:")) {
        window.location.href = pendingUrl;
      }
    }, 1500);
  };

  if (hasFilled && !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="lead-popup" className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative w-full max-w-lg glass-card overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f05a28]/20 blur-3xl rounded-full pointer-events-none" />
            
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              onPointerDown={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#f05a28] hover:border-[#f05a28] hover:scale-110 transition-all z-50 shadow-lg cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10 relative z-10">
              {status === "sent" ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 font-heading">Thank You!</h3>
                  <p className="text-slate-400 text-lg">You can now continue exploring our website.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-black text-white mb-3 font-heading">Wait! Don't Miss Out.</h2>
                    <p className="text-slate-400 text-base">Drop your details to unlock full access and let us help you scale your brand.</p>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f05a28]/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f05a28]/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#13131f] border border-white/10 rounded-xl px-4 py-4 text-slate-400 text-sm focus:outline-none focus:border-[#f05a28]/50 transition-all appearance-none"
                      >
                        <option value="">What are you looking for? *</option>
                        <option value="performance-marketing">Performance Marketing</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="social-media">Social Media Branding</option>
                        <option value="website-development">Website Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full justify-center py-4 mt-4 text-base shadow-xl shadow-[#f05a28]/20 hover:shadow-[#f05a28]/40"
                    >
                      {status === "sending" ? "Submitting..." : "Submit & Continue"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
