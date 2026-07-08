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

const benefits = [
  {
    title: "Real-time collateral allocation",
    desc: "Allocate collateral to any counterparty in the SWIAT network instantly — no overnight batch processes, no manual reconciliation.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Intraday liquidity optimisation",
    desc: "Free up capital locked in the settlement cycle by moving collateral in real time — reducing the cost of intraday liquidity across your book.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Programmable collateral rules",
    desc: "Define eligibility criteria, haircut schedules, and substitution logic as smart contract rules that execute automatically — no manual override required.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Cross-border collateral mobility",
    desc: "Move tokenized assets as collateral across jurisdictions without the operational friction of traditional cross-border transfer mechanisms.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  },
  {
    title: "Automated margining",
    desc: "Margin calls triggered automatically when thresholds are breached — collateral substitutions executed on-chain without manual intervention.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    title: "Transparent collateral pool",
    desc: "All participants see a consistent, real-time view of collateral positions — eliminating reconciliation disputes and operational overhead.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-9v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05L5.636 5.636" /></svg>,
  },
];

const steps = [
  { step: "01", title: "Connect your asset inventory", desc: "Onboard tokenized assets — bonds, equities, or other securities — onto the SWIAT network to make them available as collateral." },
  { step: "02", title: "Define collateral agreements", desc: "Configure eligibility rules, haircuts, and margin thresholds as programmable smart contract parameters with your counterparties." },
  { step: "03", title: "Allocate in real time", desc: "Post or receive collateral instantly across the SWIAT network — intraday, cross-border, without batch windows or manual steps." },
  { step: "04", title: "Automate the lifecycle", desc: "Margin calls, substitutions, and returns are handled automatically based on your rules — freeing up your operations team entirely." },
];

export default function CollateralManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050e1d] border-b border-white/5 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#003946_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Solutions</p>
            <h1 className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              Collateral Management
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              Real-time collateral allocation across the SWIAT network — programmable rules, intraday liquidity, and zero manual reconciliation.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Legacy collateral management is slow, expensive and fragmented across custodians and systems. SWIAT puts collateral on-chain, making it instantly moveable, transparently tracked, and fully automated — releasing trapped liquidity and reducing operational overhead.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors">
                Get started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors">
                Talk to an expert
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <PhotoFrame label="Upload hero image" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "Real-time", label: "Collateral allocation" },
            { value: "Intraday", label: "Liquidity optimisation" },
            { value: "Automated", label: "Margin & substitution" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <PhotoFrame label="Upload image — collateral / liquidity visual" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Collateral that moves as fast as markets
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Traditional collateral management relies on overnight settlement cycles, manual reconciliation, and fragmented custody arrangements. The result: trapped liquidity, operational risk, and slow responses to margin calls.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              SWIAT replaces this with a single on-chain collateral layer — where tokenized assets can be posted, reallocated, or substituted in real time across all connected network participants.
            </p>
            <ul className="flex flex-col gap-3">
              {["Real-time allocation across the SWIAT network", "Programmable eligibility, haircuts and substitution rules", "Intraday liquidity freed from overnight settlement windows", "Automated margin calls and collateral returns"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-[#7AC0CD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors">
              Learn more →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Why manage collateral on SWIAT?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mb-4">{b.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{b.desc}</p>
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
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              From inventory to automated lifecycle
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/25 transition-all">
                <span className="text-[#7AC0CD]/40 font-bold text-3xl leading-none block mb-3">{s.step}</span>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
              Unlock your collateral&apos;s potential
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Get in touch to explore how SWIAT can transform your collateral operations — freeing capital, eliminating manual processes, and connecting you to the network.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Talk to an expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
