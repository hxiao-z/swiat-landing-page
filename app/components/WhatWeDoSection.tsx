"use client";

import { motion } from "framer-motion";

type Pillar = {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  tags: string[];
  note: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Digital Asset Solutions",
    subtitle: "Issue, trade and settle digital securities",
    intro: "End-to-end software for regulated digital securities:",
    bullets: [
      "BaFin-supervised eWpG crypto securities registry",
      "Tokenisation & settlement software for digital bonds",
      "Atomic DvP settlement with T+0 finality via SWIAT Synchronizer",
      "Full lifecycle management — from issuance to maturity",
    ],
    tags: ["eWpG Compliant", "BaFin Licensed", "T+0 Settlement"],
    note: "eWpG — Germany's Electronic Securities Act, enabling legally equivalent digital bonds.",
    href: "/solutions/tokenization",
  },
  {
    number: "02",
    title: "Digital Collateral Solutions",
    subtitle: "Mobilise assets across borders, in real time",
    intro: "Collateral ConneX (CCX) for on-chain collateral mobility:",
    bullets: [
      "Cross-border collateral mobilisation between institutions",
      "Eliminates intraday liquidity gaps",
      "On-chain transparency and real-time settlement",
      "Reduces operational burden of traditional collateral management",
    ],
    tags: ["Cross-Border Collateral", "Intraday Liquidity", "On-Chain"],
    note: "",
    href: "/solutions/collateral-management",
  },
  {
    number: "03",
    title: "SWIAT Services",
    subtitle: "Connect, comply and get expert support",
    intro: "Supporting institutions across the digital asset lifecycle:",
    bullets: [
      "SWIAT Access — direct on-ramp to the RL1 network",
      "Trade Guardian — pre-trade and on-chain compliance screening",
      "Professional services & advisory for digital asset strategy",
    ],
    tags: ["SWIAT Access", "Trade Guardian", "Advisory"],
    note: "",
    href: "/services/trade-guardian",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#050e1d] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7AC0CD] text-xs font-semibold uppercase tracking-widest mb-4">
            What SWIAT Does
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              One platform. <span style={{ color: "#7AC0CD" }}>Every stage</span>
              <br className="hidden sm:block" /> of the digital capital market.
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed md:text-right">
              From legal issuance to on-chain settlement — SWIAT connects the regulated
              financial system to digital asset infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.a
              key={p.number}
              href={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#7AC0CD]/40 hover:bg-white/5 transition-all"
            >
              {/* Number */}
              <span className="text-[#7AC0CD]/30 text-5xl font-bold font-[family-name:var(--font-playfair)] leading-none mb-5 select-none">
                {p.number}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg leading-snug mb-1">
                {p.title}
              </h3>
              <p className="text-[#7AC0CD] text-xs font-medium mb-4">{p.subtitle}</p>

              {/* Description */}
              <div className="flex-1 mb-6">
                <p className="text-zinc-500 text-xs mb-3">{p.intro}</p>
                <ul className="flex flex-col gap-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-zinc-300 text-sm leading-snug">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#7AC0CD]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-zinc-400 border border-white/10 rounded-full px-2.5 py-1 group-hover:border-[#7AC0CD]/20 group-hover:text-zinc-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* eWpG note */}
              {p.note && (
                <div className="border-t border-white/8 pt-4">
                  <p className="text-[11px] text-zinc-600 leading-relaxed italic">{p.note}</p>
                </div>
              )}

              {/* Arrow */}
              <div className="absolute top-7 right-7 text-zinc-700 group-hover:text-[#7AC0CD] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
