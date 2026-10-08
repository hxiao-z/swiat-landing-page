"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function PhotoFrame({ label, src }: { label: string; src?: string }) {
  const id = useId().replace(/:/g, "-");
  const clipPath = "M 240 0 A 240 240 0 0 0 0 240 L 0 360 L 480 360 L 480 0 Z";
  return (
    <div className="w-full">
      <svg viewBox="0 0 480 360" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,57,70,0.5)]" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id={id}><path d={clipPath} /></clipPath></defs>
        <rect width="480" height="360" fill="#003946" rx="18" />
        <g clipPath={`url(#${id})`}>
          {src ? (
            <image href={src} width="480" height="360" preserveAspectRatio="xMidYMid slice" />
          ) : (
            <>
              <defs>
                <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d2035" /><stop offset="100%" stopColor="#1a3a5c" />
                </linearGradient>
              </defs>
              <rect width="480" height="360" fill={`url(#${id}-g)`} />
              <path d={clipPath} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="8 6" />
              <g transform="translate(240,168)">
                <circle r="28" fill="rgba(122,192,205,0.1)" />
                <path d="M -10 4 L -2 12 L 10 -4" fill="none" stroke="rgba(122,192,205,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <text x="240" y="220" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="sans-serif">{label}</text>
            </>
          )}
        </g>
        <path d={clipPath} fill="none" stroke="rgba(122,192,205,0.15)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

const tokenForms = [
  {
    title: "Security Token",
    desc: "Digitally represent traditional securities on-chain — equities, bonds, and funds — with full regulatory compliance built in.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Digitally Registered Bond",
    desc: "Issue bonds under the German eWpG framework — registered digitally with no paper certificate required. Faster, cheaper, fully compliant.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Bearer Bond",
    desc: "Tokenize bearer bonds on the SWIAT blockchain — maintaining familiar legal structures while unlocking the efficiency of digital settlement.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Settlement in Seconds",
    desc: "Atomic DvP on-chain cuts settlement from T+2 to near-instant — as demonstrated in Siemens' 93-second transaction on the SWIAT network.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Reduced Capital Requirements",
    desc: "Infrastructure aligned with Basel III SCO60 enables lower risk-weighting on digital asset exposures, freeing up capital for institutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "eWpG-Compliant Registry",
    desc: "Issue legally equivalent digital securities under Germany's Electronic Securities Act — with SWIAT acting as BaFin-supervised registrar.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "On-Chain Payment Flexibility",
    desc: "Settle with JPM Coin, Central Bank Money, or regulated stablecoins — interoperability proven in live transactions with Siemens and major banks.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Automated Lifecycle Events",
    desc: "Coupon payments, corporate actions, and redemptions execute automatically via smart contracts — eliminating manual coordination and operational risk.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Market-Leading Scalable Platform",
    desc: "Built on Regulated Layer One — a purpose-built institutional blockchain — with API-first connectivity to existing banking infrastructure.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Choose your token form", desc: "Select between security token, digitally registered bond, or bearer bond depending on your legal and operational requirements." },
  { step: "02", title: "Issue on SWIAT", desc: "Use the ready-to-use frontend or integrate via API to issue your tokenized asset directly on the SWIAT platform." },
  { step: "03", title: "Trade & settle", desc: "Enable secondary market trading with atomic DvP settlement — no intermediaries, no T+2 delay." },
  { step: "04", title: "Manage the full lifecycle", desc: "Handle coupon payments, corporate actions, and redemption in the same environment as your other digital assets." },
];

export default function TokenizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050e1d] border-b border-white/5 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#003946_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Solutions</p>
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Tokenization
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              Securitized assets on a blockchain — enormous cost advantages, faster processes, and new trading opportunities.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Talk to an expert
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <PhotoFrame label="Upload hero image" />
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "Flexible", label: "Structuring & asset class coverage" },
            { value: "100%", label: "Digital processes" },
            { value: "T+0", label: "Settlement finality" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is tokenization */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              SWIAT for Tokenization
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              SWIAT provides the full stack to tokenize, issue, trade, and settle securitized assets on a permissioned, regulatory-compliant blockchain (RL1) — eliminating intermediaries through 100% digital processes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Contact us to learn more
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {["Issue any token form on one platform", "Unified environment with crypto-securities", "Ready-to-use UI or integrate via API", "Full lifecycle management: issuance to redemption"].map(item => (
                <div key={item} className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-[#7AC0CD]/25 transition-all">
                  <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Use Cases</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Choose your token form
            </h2>
          </div>
          <div className="flex flex-col gap-3 items-center">
            {[
              ["Registered Bond", "Bearer Bonds", "Security Tokens"],
              ["Commercial Paper", "Fund Units", "Real Estate Tokens"],
              ["Repo Instruments", "Bring your own use case →"],
            ].map((row, ri) => (
              <div key={ri} className="flex gap-3 justify-center flex-wrap">
                {row.map((label, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (ri * 3 + i) * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      label === "Bring your own use case →"
                        ? "border-[#7AC0CD]/60 text-[#7AC0CD] bg-[#003946]/40 cursor-default"
                        : "border-white/10 text-zinc-300 bg-white/3"
                    }`}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0a1628] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Why tokenize with SWIAT?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mb-4">
                  {b.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              Discuss your use case →
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Use Cases */}
      <section className="bg-[#050e1d] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Proven Use Cases</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Live transactions. Real institutions.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                logo: "JP Morgan · ONYX",
                headline: "JPM Coin used to settle digital commercial paper on SWIAT blockchain",
                desc: "J.P. Morgan's Kinexys (formerly Onyx) platform was used to execute on-chain payment settlement for digital commercial paper — demonstrating full interoperability between institutional payment rails and SWIAT's tokenization infrastructure.",
                tag: "Commercial Paper · DvP Settlement",
              },
              {
                logo: "Siemens",
                headline: "Siemens issues €300m digital bond settled in Central Bank Money",
                desc: "Siemens issued a €300 million digital bond on the SWIAT network, settled in central bank money via the ECB's Pontes solution. The transaction completed DvP in 93 seconds — a live proof of T+0 settlement at institutional scale.",
                tag: "Digital Bond · Central Bank Money · T+0",
              },
            ].map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-[#7AC0CD]/30 transition-all flex flex-col gap-5"
              >
                <span className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest">{uc.logo}</span>
                <h3 className="text-white font-bold text-base leading-snug">{uc.headline}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{uc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {uc.tag.split(" · ").map(t => (
                    <span key={t} className="text-[10px] font-medium text-zinc-400 border border-white/10 rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#050e1d] border-t border-white/5 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">How it works</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              From issuance to redemption
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
              The complete asset lifecycle — managed in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/25 transition-all"
              >
                <span className="text-[#7AC0CD]/40 font-bold text-3xl leading-none block mb-3">{s.step}</span>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              Talk to an expert
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Settlement Architecture */}
      <section className="bg-[#07111f] border-t border-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Settlement Architecture</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Tokenization &amp; Settlement Engines
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-x-auto rounded-2xl border border-white/8"
          >
            <svg viewBox="0 0 920 470" className="w-full min-w-[680px]" style={{ background: "#07111f", display: "block" }}>
              <defs>
                <marker id="teal-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 Z" fill="#7AC0CD" opacity="0.7"/>
                </marker>
                <marker id="teal-arr-rev" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto">
                  <path d="M7,0 L0,3.5 L7,7 Z" fill="#7AC0CD" opacity="0.7"/>
                </marker>
              </defs>

              {/* ── Left sidebar ── */}
              <rect x="8" y="80" width="28" height="290" rx="4" fill="#ffffff04" stroke="#ffffff0a" strokeWidth="1"/>
              <text transform="rotate(-90, 22, 225)" x="22" y="225" fill="#6b7280" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif" letterSpacing="1">ASSET SETTLEMENT CHAIN &amp; SOFTWARE</text>

              {/* ── Offchain label ── */}
              <text x="900" y="22" fill="#9ca3af" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="Poppins,sans-serif">Offchain</text>

              {/* ── Issuers box ── */}
              <rect x="120" y="10" width="150" height="50" rx="6" fill="rgba(217,119,6,0.12)" stroke="rgba(217,119,6,0.5)" strokeWidth="1.2"/>
              <text x="195" y="32" fill="#fcd34d" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuers</text>
              <text x="195" y="48" fill="rgba(252,211,77,0.6)" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Financial Institutions</text>

              {/* ── Investors box ── */}
              <rect x="650" y="10" width="150" height="50" rx="6" fill="rgba(217,119,6,0.12)" stroke="rgba(217,119,6,0.5)" strokeWidth="1.2"/>
              <text x="725" y="32" fill="#fcd34d" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Investors</text>
              <text x="725" y="48" fill="rgba(252,211,77,0.6)" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Banks · Asset Managers</text>

              {/* ── Onchain zone ── */}
              <rect x="42" y="80" width="836" height="230" rx="10" fill="#003946" fillOpacity="0.08" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 4"/>
              <text x="862" y="97" fill="#7AC0CD" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="Poppins,sans-serif" opacity="0.7">Onchain</text>

              {/* Arrow: Issuers → Issuer/Custodian (L-shaped) */}
              <path d="M 195 60 L 195 75 L 148 75 L 148 120" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#teal-arr)"/>

              {/* Arrow: Investors → Custodians (L-shaped) */}
              <path d="M 725 60 L 725 75 L 728 75 L 728 120" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#teal-arr)"/>

              {/* ── Issuer / Custodian (left) ── */}
              <text x="148" y="113" fill="#9ca3af" fontSize="7" textAnchor="middle" fontFamily="Poppins,sans-serif" fontStyle="italic">Issuance on behalf of offchain issuer</text>
              <rect x="58" y="120" width="180" height="60" rx="8" fill="#0d1f35" stroke="#ffffff20" strokeWidth="1.2"/>
              <text x="148" y="147" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuer / Custodian</text>
              <text x="148" y="163" fill="#6b7280" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Onboarded Institution</text>
              <text x="148" y="200" fill="#6b7280" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif" fontStyle="italic">...or own issuance</text>

              {/* Arrow: Issuer/Custodian → Token Engine */}
              <line x1="238" y1="150" x2="316" y2="150" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#teal-arr)"/>

              {/* ── SWIAT Token Engine (center) ── */}
              <rect x="320" y="110" width="280" height="80" rx="8" fill="#003946" stroke="#7AC0CD" strokeWidth="2"/>
              <text x="420" y="144" fill="white" fontSize="13" fontWeight="700" fontFamily="Poppins,sans-serif">swiat</text>
              <text x="420" y="162" fill="#7AC0CD" fontSize="11" fontWeight="600" fontFamily="Poppins,sans-serif">Token Engine</text>
              <rect x="490" y="118" width="96" height="64" rx="6" fill="#003946" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5"/>
              <text x="538" y="146" fill="#7AC0CD" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600">Registry</text>
              <text x="538" y="161" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">eWpG</text>

              {/* Arrow: Token Engine → ERIR/Control Agent */}
              <line x1="460" y1="190" x2="460" y2="215" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#teal-arr)"/>

              {/* ── ERIR / Control Agent (center-bottom) ── */}
              <rect x="320" y="215" width="280" height="56" rx="8" fill="#0d1f35" stroke="#ffffff18" strokeWidth="1.2"/>
              <text x="460" y="240" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuer / Custodian</text>
              <text x="460" y="256" fill="#6b7280" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">ERIR · Control Agent</text>

              {/* Arrows: Token Engine → Custodians, ERIR → Investor */}
              <line x1="600" y1="148" x2="646" y2="148" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#teal-arr)"/>
              <line x1="600" y1="243" x2="646" y2="243" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#teal-arr)"/>

              {/* ── Custodians (right-top) ── */}
              <rect x="650" y="120" width="170" height="56" rx="7" fill="#0d1f35" stroke="#ffffff28" strokeWidth="1.2"/>
              <text x="735" y="146" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Custodians</text>
              <text x="735" y="162" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Multiple institutions via RL1</text>

              {/* ── Investor (right-bottom) ── */}
              <rect x="650" y="215" width="170" height="56" rx="7" fill="#0d1f35" stroke="#ffffff20" strokeWidth="1.2"/>
              <text x="735" y="241" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Investor</text>
              <text x="735" y="257" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Asset Manager · Bank</text>

              {/* RL1 indicator */}
              {[0,1,2,3,4,5].map(i => (
                <circle key={i} cx={58 + i * 14} cy={298} r="3.5" fill="#7AC0CD" opacity={0.12 + i * 0.05}/>
              ))}
              <text x="58" y="312" fill="#7AC0CD" fontSize="7.5" fontFamily="Poppins,sans-serif" opacity="0.5">Regulated Layer One</text>

              {/* ── SWIAT Synchronizer ── */}
              <rect x="350" y="330" width="220" height="54" rx="10" fill="#003946" stroke="#7AC0CD" strokeWidth="2"/>
              <text x="460" y="353" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">swiat Synchronizer*</text>
              <text x="460" y="370" fill="#7AC0CD" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">Atomic DvP · Cross-chain</text>

              {/* Arrows: onchain ↔ Synchronizer ↔ payment (bidirectional) */}
              <line x1="460" y1="310" x2="460" y2="330" stroke="#7AC0CD" strokeWidth="1.6" strokeOpacity="0.6" markerStart="url(#teal-arr-rev)" markerEnd="url(#teal-arr)"/>
              <line x1="460" y1="384" x2="460" y2="400" stroke="#7AC0CD" strokeWidth="1.6" strokeOpacity="0.6" markerStart="url(#teal-arr-rev)" markerEnd="url(#teal-arr)"/>

              {/* RL1 ↔ Payment bidirectional arrow */}
              <line x1="30" y1="295" x2="30" y2="400" stroke="#7AC0CD" strokeWidth="1.4" strokeOpacity="0.45" strokeDasharray="4 3" markerStart="url(#teal-arr-rev)" markerEnd="url(#teal-arr)"/>

              {/* ── Payment zone ── */}
              <rect x="42" y="400" width="836" height="58" rx="8" fill="#ffffff03" stroke="#ffffff10" strokeWidth="1" strokeDasharray="5 4"/>
              <text x="52" y="416" fill="#6b7280" fontSize="7.5" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1">PAYMENT</text>

              {/* Free of Payment */}
              <rect x="56" y="408" width="126" height="40" rx="6" fill="#0d1f35" stroke="#ffffff18" strokeWidth="1"/>
              <text x="119" y="424" fill="#d1d5db" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Free of Payment</text>
              <text x="119" y="438" fill="#6b7280" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif">No money movement</text>

              <line x1="190" y1="404" x2="190" y2="454" stroke="#ffffff10" strokeWidth="1"/>

              {/* Pontes */}
              <rect x="198" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5"/>
              <text x="287" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Pontes</text>
              <text x="287" y="438" fill="#7AC0CD" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Central Bank Money (ECB)</text>

              {/* Kinexys */}
              <rect x="384" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#ffffff15" strokeWidth="1"/>
              <text x="473" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">kinexys</text>
              <text x="473" y="438" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">by J.P. Morgan</text>

              {/* Stablecoins */}
              <rect x="570" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#ffffff15" strokeWidth="1"/>
              <text x="659" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Stablecoins</text>
              <text x="659" y="438" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Regulated · On-chain</text>

              {/* Blockchain integration label */}
              <text x="790" y="424" fill="#6b7280" fontSize="7.5" fontStyle="italic" textAnchor="middle" fontFamily="Poppins,sans-serif">Blockchain integration</text>
              <text x="790" y="437" fill="#6b7280" fontSize="7.5" fontStyle="italic" textAnchor="middle" fontFamily="Poppins,sans-serif">into other payment chains</text>
            </svg>
          </motion.div>

          <p className="text-center text-zinc-600 text-xs mt-4">
            * Synchronizes value transfer across chains – DvP. Live with J.P. Morgan Kinexys · Central Bank Money in development.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
            >
              Ready to tokenize?
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Get in touch with our team to explore how SWIAT tokenization fits your institution&apos;s strategy and asset classes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Talk to an expert
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
