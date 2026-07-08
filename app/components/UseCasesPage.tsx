"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Category = "All" | "Settlement" | "Tokenization" | "Collateral" | "Sandbox";

const categories: Category[] = ["All", "Settlement", "Tokenization", "Collateral", "Sandbox"];

const useCases: {
  title: string;
  category: Exclude<Category, "All">;
  institution: string;
  summary: string;
  tag: string;
  coming?: boolean;
}[] = [
  {
    title: "Atomic DvP Settlement between LBBW and DekaBank",
    category: "Settlement",
    institution: "LBBW × DekaBank",
    summary: "First live atomic delivery-versus-payment settlement of a digital bond between two major German banks on the SWIAT network — T+0 finality, no CCP.",
    tag: "Settlement",
  },
  {
    title: "Digital Bond Issuance under eWpG",
    category: "Tokenization",
    institution: "SWIAT Registry",
    summary: "End-to-end issuance of a digitally registered bond under the German Electronic Securities Act — from origination through on-chain registration to investor allocation.",
    tag: "Tokenization",
  },
  {
    title: "ECB DLT Trials — Project Sovereign",
    category: "Settlement",
    institution: "ECB × SWIAT",
    summary: "SWIAT participated in the European Central Bank's DLT trials for wholesale CBDC settlement, demonstrating interoperability between central bank money and blockchain-based securities.",
    tag: "Settlement",
  },
  {
    title: "Real-Time Collateral Allocation",
    category: "Collateral",
    institution: "Pilot — undisclosed",
    summary: "Intraday collateral movement between two network participants using programmable eligibility rules — replacing overnight batch processes with real-time on-chain transfers.",
    tag: "Collateral",
    coming: true,
  },
  {
    title: "Crypto-Securities Sandbox Issuance",
    category: "Sandbox",
    institution: "SWIAT Sandbox",
    summary: "A controlled sandbox environment for institutions to test end-to-end crypto-security issuance, trading, and settlement before going live on the mainnet.",
    tag: "Sandbox",
    coming: true,
  },
  {
    title: "Cross-Institution Repo on SWIAT",
    category: "Collateral",
    institution: "Coming soon",
    summary: "Bilateral repo agreement executed and settled atomically on-chain — with automated margin monitoring and collateral substitution triggered by smart contract rules.",
    tag: "Collateral",
    coming: true,
  },
];

const categoryIcons: Record<Exclude<Category, "All">, React.ReactNode> = {
  Settlement: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Tokenization: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  Collateral: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Sandbox: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
};

const tagColors: Record<Exclude<Category, "All">, string> = {
  Settlement: "bg-[#7AC0CD]/10 text-[#7AC0CD] border-[#7AC0CD]/20",
  Tokenization: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  Collateral: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Sandbox: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

export default function UseCasesPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useCases.filter(u => active === "All" || u.category === active);

  return (
    <div className="bg-[#050e1d] min-h-screen">

      {/* Page header */}
      <section className="relative px-6 pt-14 pb-10 border-b border-white/8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Resources</span>
            <span className="mx-2 text-zinc-700">/</span>
            Use Cases
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-4 text-center"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Use Cases
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto text-center">
            Short reports on real transactions, product implementations, and sandbox experiments across the SWIAT network — showing how regulated blockchain infrastructure works in practice.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-6 py-8 border-b border-white/5 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === cat
                  ? "bg-[#7AC0CD] text-[#050e1d] border-[#7AC0CD]"
                  : "bg-white/3 text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat !== "All" && <span className={active === cat ? "text-[#050e1d]" : "text-zinc-500"}>{categoryIcons[cat as Exclude<Category, "All">]}</span>}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {filtered.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`relative bg-white/3 border rounded-2xl p-6 flex flex-col transition-all ${
                  uc.coming
                    ? "border-white/6 opacity-60"
                    : "border-white/8 hover:border-[#7AC0CD]/30 hover:bg-white/5 cursor-pointer"
                }`}
              >
                {uc.coming && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 border border-zinc-700 px-2 py-0.5 rounded-full">
                    Coming soon
                  </span>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${tagColors[uc.category]}`}>
                    {uc.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm leading-snug mb-2">{uc.title}</h3>
                <p className="text-zinc-500 text-xs font-semibold mb-3">{uc.institution}</p>
                <p className="text-zinc-400 text-xs leading-relaxed flex-1">{uc.summary}</p>
                {!uc.coming && (
                  <div className="mt-5">
                    <span className="text-[#7AC0CD] text-xs font-semibold hover:underline">Read report →</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Submit CTA */}
          <div className="mt-16 bg-[#003946]/30 border border-[#7AC0CD]/15 rounded-2xl p-8 text-center">
            <h3 className="font-[family-name:var(--font-playfair)] font-bold text-white text-xl mb-3">
              Have a use case to share?
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto mb-6">
              If you are a network participant with a live transaction or pilot you would like to document, we would love to work with you on a use case report.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
