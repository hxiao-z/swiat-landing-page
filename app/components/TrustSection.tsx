"use client";

import { motion } from "framer-motion";

const logos = [
  "Deutsche Bank", "BNP Paribas", "Commerzbank", "DZ Bank",
  "Helaba", "LBBW", "DekaBank", "BayernLB", "Nord/LB", "Societe Generale",
];

export default function TrustSection() {
  return (
    <section className="bg-[#050e1d] py-20 px-6">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl font-semibold text-white mb-3"
      >
        Used by Banks, Financial Institutions,
        <br className="hidden sm:block" /> Corporates, and more
      </motion.p>
      <p className="text-center text-zinc-500 mb-14 text-sm">Trusted by the most regulated institutions in Europe</p>

      {/* Scrolling logo strip */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl px-8 py-5 min-w-[180px] text-zinc-400 font-medium text-sm whitespace-nowrap hover:border-teal-500/40 hover:text-white transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050e1d] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050e1d] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
