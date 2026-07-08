"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const papers = [
  {
    tag: "Report",
    tagColor: "text-[#7AC0CD] border-[#7AC0CD]/30 bg-[#7AC0CD]/10",
    title: "SWIAT Access Report",
    desc: "A detailed overview of the SWIAT Access solution — including use cases with DZ Bank within the ECB Trials and Bank of Greece under Project Sovereign.",
    highlights: [
      "How SWIAT Access works end-to-end",
      "Use case: DZ Bank within ECB Trials",
      "Use case: Bank of Greece, Project Sovereign",
    ],
    href: "#",
  },
  {
    tag: "Report",
    tagColor: "text-[#7AC0CD] border-[#7AC0CD]/30 bg-[#7AC0CD]/10",
    title: "Project Sovereign Report",
    desc: "A comprehensive overview of Project Sovereign — powered by SWIAT's DLT infrastructure with full DvP settlement across an entire digital bond lifecycle.",
    highlights: [
      "Statements from Bank of Greece and partners",
      "Full lifecycle: issuance to redemption",
      "Technical insights into DvP settlement",
    ],
    href: "#",
  },
  {
    tag: "Report",
    tagColor: "text-[#7AC0CD] border-[#7AC0CD]/30 bg-[#7AC0CD]/10",
    title: "Bank of Greece Project Report",
    desc: "A detailed overview of the Digital Bond project by SWIAT & Bank of Greece — covering each project phase with visuals, diagrams, and target operating model.",
    highlights: [
      "Statement from Bank of Greece",
      "Phase breakdown: Set-Up, Execution, Analysis",
      "TOM design and technical diagrams",
    ],
    href: "#",
  },
  {
    tag: "ECB Trial",
    tagColor: "text-purple-300 border-purple-400/30 bg-purple-400/10",
    title: "ECB Trials Report",
    desc: "SWIAT participated in the ECB Trials in 2024, executing 8 settlements on the SWIAT blockchain. Includes transaction workflows, tech overviews, and institutional statements.",
    highlights: [
      "8 settlements executed on SWIAT blockchain",
      "Multiple bond issuance types covered",
      "Statements from participating institutions",
    ],
    href: "#",
  },
  {
    tag: "Whitepaper",
    tagColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    title: "SCO60 Whitepaper",
    desc: "Digital assets are soaring — and in scope of new Basel regulation. This paper introduces SCO60 on cryptoassets, the SWIAT Governance Model, and market implications.",
    highlights: [
      "Key aspects of Basel SCO60 on cryptoassets",
      "SWIAT Governance Model",
      "Market implications and SWIAT's role",
    ],
    href: "#",
  },
  {
    tag: "Whitepaper",
    tagColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    title: "Moody's Rating — Bits, Bytes and Basis Points",
    desc: "How digital assets fit within incoming Basel regulation and what it means for banks — options available, ecosystem impact, and how the SWIAT framework can help.",
    highlights: [
      "Digital assets under Basel regulation",
      "Options available to banks",
      "SWIAT framework as a solution",
    ],
    cta: "Receive Moody's Q&A and Newsletter",
    href: "#",
  },
  {
    tag: "Whitepaper",
    tagColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    title: "CYCROS Whitepaper — Enable DvP with CYCROS",
    desc: "Co-developed with DekaBank: a non-invasive trigger-based solution enabling delivery of digital assets versus payment with central bank money — using ISO 20022 and SWIFT PKI.",
    highlights: [
      "DvP with central bank money on DLT",
      "Non-invasive trigger-based approach",
      "ISO 20022 + SWIFT infrastructure",
    ],
    href: "#",
  },
];

const quotes = [
  {
    text: "The development of Digital Assets is currently hindered by the lack of digital central bank money. With trigger solutions like this, financial market participants such as banks can already benefit.",
    author: "Dirk Kipp",
    role: "Global Head of Financial Institutions & Markets, LBBW",
    initials: "DK",
  },
  {
    text: "Once assets go fully digital on DLT, we should expect a very steep ascendance of digital and decentralized finance. Delivery vs. Payment with central bank money would boost the adoption.",
    author: "Michael Cyrus",
    role: "Head of Collateral Trading and FX, DekaBank",
    initials: "MC",
  },
  {
    text: "The most interesting, innovative, and effective aspect of this proposal is to leverage the existing cash infrastructure to quickly bring DvP with central bank money to the DLT ecosystem.",
    author: "Dr. Timo Reinschmidt",
    role: "CEO & CCO, SWIAT",
    initials: "TR",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#050e1d] border-b border-white/8 pt-14 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Resources</span>
            <span className="mx-2 text-zinc-700">/</span>
            Research &amp; Whitepapers
          </p>
          <div className="text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="sr-only">
            Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Research & Whitepapers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Deep-dive reports, whitepapers, and ECB trial findings from SWIAT's work at the frontier of digital capital markets infrastructure.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors">
              Request a paper
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#papers"
              className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors">
              Browse all papers ↓
            </a>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "7", label: "Research documents" },
            { value: "8", label: "ECB trial settlements" },
            { value: "50+", label: "Financial entities onboarded" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Papers grid */}
      <section id="papers" className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-2">Publications</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Reports & Whitepapers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {papers.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex flex-col bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all"
              >
                {/* Tag + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.tagColor}`}>{p.tag}</span>
                  <div className="w-9 h-9 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-[#7AC0CD] transition-colors flex-1">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">{p.desc}</p>

                <ul className="flex flex-col gap-1.5 mb-5">
                  {p.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-xs text-zinc-400">
                      <svg className="w-3 h-3 text-[#7AC0CD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <a href={p.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-[#7AC0CD] text-xs font-bold hover:gap-2.5 transition-all">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {p.cta ?? "Download paper"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry quotes */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-2">Industry Voices</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              What the industry says
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {quotes.map((q, i) => (
              <motion.div
                key={q.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 flex flex-col gap-4"
              >
                <svg className="w-6 h-6 text-[#7AC0CD]/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-zinc-300 text-xs leading-relaxed flex-1 italic">{q.text}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                  <div className="w-9 h-9 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#7AC0CD] text-[10px] font-bold">{q.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">{q.author}</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5 leading-tight">{q.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Stay Informed</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
              Get the latest research
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-lg mx-auto">
              Request any of our papers or subscribe to receive new research directly from the SWIAT team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact#newsletter"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Subscribe to newsletter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
