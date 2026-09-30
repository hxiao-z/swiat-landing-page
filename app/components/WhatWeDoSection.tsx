"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Digital Securities Registry",
    subtitle: "Issue on-chain, under German law",
    description:
      "SWIAT operates a BaFin-supervised digital securities registry under the eWpG framework. Financial institutions can issue digital bonds and other crypto securities — legally equivalent to traditional instruments, with full lifecycle management on-chain.",
    tags: ["eWpG Compliant", "BaFin Licensed", "Digital Bond Issuance"],
    href: "/solutions/registry-services",
  },
  {
    number: "02",
    title: "T+0 Settlement",
    subtitle: "Atomic DvP, zero counterparty risk",
    description:
      "The SWIAT Synchronizer enables atomic Delivery versus Payment (DvP) across existing payment rails and digital assets — eliminating settlement risk, reducing operational overhead, and enabling same-day finality for the first time in European capital markets.",
    tags: ["Atomic DvP", "T+0 Finality", "Cross-Platform"],
    href: "/solutions/tokenization",
  },
  {
    number: "03",
    title: "Collateral & Access",
    subtitle: "Connect to the network, mobilise assets",
    description:
      "SWIAT's platform connects custodians, trading venues, and asset managers to the digital asset ecosystem. Collateral ConneX (CCX) enables efficient cross-border collateral mobilisation, while SWIAT Access provides direct on-ramp to the RL1 network.",
    tags: ["Collateral Management", "Cross-Border", "Network Access"],
    href: "/solutions/collateral-management",
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
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-zinc-400 border border-white/10 rounded-full px-2.5 py-1 group-hover:border-[#7AC0CD]/20 group-hover:text-zinc-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
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
