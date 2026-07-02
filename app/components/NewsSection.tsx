"use client";

import { motion } from "framer-motion";

const news = [
  {
    date: "Nov 2025",
    tag: "Press Release",
    title: "BaFin Grants SWIAT Permission for Crypto-Securities Registers",
    excerpt: "SWIAT receives regulatory approval from BaFin, paving the way for compliant digital securities issuance on its blockchain infrastructure.",
  },
  {
    date: "Sep 2025",
    tag: "Milestone",
    title: "SWIAT Completes First Live Digital Bond Issuance with Major European Bank",
    excerpt: "The live transaction marks a significant milestone for institutional-grade blockchain settlement in the European financial market.",
  },
  {
    date: "Jun 2025",
    tag: "Partnership",
    title: "SWIAT Expands Network with Three New Member Institutions",
    excerpt: "Three leading custodian banks join the SWIAT network, extending the reach of programmable settlement across the continent.",
  },
];

export default function NewsSection() {
  return (
    <section id="resources" className="bg-[#050e1d] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2">Latest News</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Press & Announcements</h2>
          </div>
          <a href="#" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.a
              key={n.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col gap-4 hover:border-teal-500/40 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">{n.date}</span>
                <span className="text-xs font-semibold text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-full">
                  {n.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base leading-snug group-hover:text-teal-300 transition-colors">
                {n.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1">{n.excerpt}</p>
              <span className="text-teal-400 text-sm font-medium group-hover:gap-2 transition-all">
                Read more →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
