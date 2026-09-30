"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#7AC0CD" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#7AC0CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "BaFin Licensed",
    sub: "Supervised financial infrastructure",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#7AC0CD" strokeWidth="1.5" />
        <path d="M7 12h10M7 8h6M7 16h8" stroke="#7AC0CD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "eWpG Registry",
    sub: "Crypto securities under German law",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#7AC0CD" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#7AC0CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "ISO 27001:2022",
    sub: "Certified by TÜV Austria",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="5" cy="12" r="2" stroke="#7AC0CD" strokeWidth="1.5" />
        <circle cx="19" cy="6" r="2" stroke="#7AC0CD" strokeWidth="1.5" />
        <circle cx="19" cy="18" r="2" stroke="#7AC0CD" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" stroke="#7AC0CD" strokeWidth="1.5" />
        <path d="M7 12h3M13.5 10.3l3-2.6M13.5 13.7l3 2.6" stroke="#7AC0CD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Built on RL1",
    sub: "Europe's regulated blockchain network",
  },
];

export default function CredentialsBar() {
  return (
    <section className="bg-[#07111f] border-y border-white/8 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-zinc-500 uppercase tracking-widest mb-7">
          Regulated · Certified · Production-Ready
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-white/3 border border-white/8 rounded-xl px-5 py-4 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all"
            >
              <div className="mt-0.5 shrink-0">{c.icon}</div>
              <div>
                <p className="text-white text-sm font-semibold leading-snug">{c.label}</p>
                <p className="text-zinc-500 text-xs mt-0.5 leading-snug">{c.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
