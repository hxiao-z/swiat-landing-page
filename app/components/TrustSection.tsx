"use client";

import { motion } from "framer-motion";

const logos = [
  "Deutsche Bank", "BNP Paribas", "Commerzbank", "DZ Bank",
  "Helaba", "LBBW", "DekaBank", "BayernLB", "Nord/LB", "Societe Generale",
];

const quotes = [
  {
    text: "SWIAT has fundamentally changed how we approach digital asset settlement — real-time, compliant, and at scale.",
    author: "Head of Digital Assets",
    company: "Deutsche Bank",
    initials: "AK",
    gradient: "from-[#1a4a6b] to-[#003946]",
  },
  {
    text: "The interoperability SWIAT provides between traditional and tokenised securities is unlike anything else in the market.",
    author: "Chief Innovation Officer",
    company: "Helaba",
    initials: "MR",
    gradient: "from-[#1a3a5c] to-[#0d2b42]",
  },
  {
    text: "We reduced our settlement costs significantly and gained full auditability from day one. A game-changer for our operations.",
    author: "Managing Director",
    company: "DekaBank",
    initials: "SL",
    gradient: "from-[#1e4a52] to-[#0a2e35]",
  },
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
              className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl px-8 py-5 min-w-[180px] text-zinc-400 font-medium text-sm whitespace-nowrap hover:border-[#7AC0CD]/40 hover:text-white transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050e1d] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050e1d] to-transparent pointer-events-none" />
      </div>

      {/* Partner quotes */}
      <div className="max-w-6xl mx-auto mt-12 grid sm:grid-cols-3 gap-5">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#7AC0CD]/30 transition-colors"
          >
            <span className="text-[#7AC0CD] text-2xl leading-none">&ldquo;</span>
            <p className="text-zinc-300 text-sm leading-relaxed flex-1">{q.text}</p>
            <div className="border-t border-white/8 pt-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${q.gradient} border border-[#7AC0CD]/30 flex items-center justify-center shrink-0`}>
                <span className="text-[#7AC0CD] text-xs font-bold tracking-wide">{q.initials}</span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{q.author}</p>
                <p className="text-[#7AC0CD] text-xs mt-0.5">{q.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
