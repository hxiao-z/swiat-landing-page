"use client";

import { motion } from "framer-motion";

type Pillar = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  note: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Digital Asset Solutions",
    subtitle: "Issue, trade and settle digital securities",
    description:
      "SWIAT's tokenisation and settlement software enables financial institutions to issue and manage digital securities end-to-end. Our BaFin-supervised eWpG registry provides the legal foundation for crypto securities issuance, while the SWIAT Synchronizer delivers atomic DvP settlement with T+0 finality.",
    tags: ["eWpG Compliant", "BaFin Licensed", "T+0 Settlement"],
    note: "eWpG — Germany's Electronic Securities Act, enabling legally equivalent digital bonds.",
    href: "/solutions/tokenization",
  },
  {
    number: "02",
    title: "Digital Collateral Solutions",
    subtitle: "Mobilise assets across borders, in real time",
    description:
      "Collateral ConneX (CCX) enables financial institutions to mobilise collateral efficiently across borders and counterparties. By moving collateral on-chain, CCX eliminates intraday liquidity gaps and reduces the operational burden of traditional collateral management.",
    tags: ["Cross-Border Collateral", "Intraday Liquidity", "On-Chain"],
    note: "eWpG — Crypto securities held as collateral retain their legal standing under German law.",
    href: "/solutions/collateral-management",
  },
  {
    number: "03",
    title: "SWIAT Services",
    subtitle: "Connect, comply and get expert support",
    description:
      "SWIAT Access provides direct connectivity to the RL1 network for participants who want a streamlined on-ramp. Trade Guardian offers real-time pre-trade and on-chain compliance screening. Our professional services and advisory team supports institutions at every stage of their digital asset journey.",
    tags: ["SWIAT Access", "Trade Guardian", "Advisory"],
    note: "eWpG — All services are designed to operate within the regulated eWpG framework.",
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
              <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                {p.description}
              </p>

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
              <div className="border-t border-white/8 pt-4">
                <p className="text-[11px] text-zinc-600 leading-relaxed italic">{p.note}</p>
              </div>

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
