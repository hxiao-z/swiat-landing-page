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
    title: "Atomic DvP settlement",
    desc: "Delivery-versus-payment is executed atomically on-chain — cash and security legs settle simultaneously, eliminating counterparty and settlement risk.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "T+0 finality",
    desc: "Replace T+2 with near-instant settlement finality. Reduce the window of exposure and free up capital that is currently locked in the settlement cycle.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Bilateral & multilateral trading",
    desc: "Support for both bilateral OTC trades and multilateral order-book matching — across all asset types issued on the SWIAT network.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  },
  {
    title: "Regulatory compliance built in",
    desc: "All secondary market activity occurs within the permissioned SWIAT network — KYC/AML checks enforced at the infrastructure layer, not bolted on afterwards.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "24/7 market access",
    desc: "On-chain markets never close. Participants can trade tokenized securities around the clock, across time zones, without depending on market hours.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  },
  {
    title: "Full audit trail",
    desc: "Every trade, transfer and settlement event is immutably recorded on the SWIAT blockchain — accessible to authorised parties in real time.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  },
];

const steps = [
  { step: "01", title: "Connect to the SWIAT network", desc: "Onboard via SWIAT Access or BaaS to gain access to the secondary market infrastructure and connected counterparties." },
  { step: "02", title: "List or discover securities", desc: "Browse tokenized securities available for trading within the network, or list your own holdings for secondary sale." },
  { step: "03", title: "Agree on terms", desc: "Execute bilateral OTC trades or interact with the on-chain order book — all within a permissioned, compliant environment." },
  { step: "04", title: "Atomic settlement", desc: "Cash and security legs settle simultaneously on-chain with T+0 finality — no settlement agent, no counterparty risk window." },
];

export default function SecondaryMarketPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050e1d] border-b border-white/5 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#003946_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Solutions</p>
            <h1 className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              Secondary Market Solutions
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              Trade tokenized securities with atomic DvP settlement, T+0 finality, and 24/7 market access — all within a regulated, permissioned network.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              SWIAT connects issuers, investors and intermediaries in a single network where secondary trading and settlement happen simultaneously on-chain. No settlement lag, no counterparty risk window, no intermediaries in the middle.
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
            { value: "T+0", label: "Settlement finality" },
            { value: "24/7", label: "Market access" },
            { value: "Atomic", label: "DvP execution" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <PhotoFrame label="Upload image — trading / settlement visual" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              A regulated secondary market, natively on-chain
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Traditional secondary markets rely on a chain of intermediaries — custodians, CCPs, settlement agents — each adding time, cost and risk. SWIAT collapses this stack onto a single blockchain layer, where every participant is connected and settlement is instantaneous.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Whether you are trading digital bonds, tokenized equities, or crypto-securities under eWpG, the SWIAT network provides the settlement infrastructure and compliance framework out of the box.
            </p>
            <ul className="flex flex-col gap-3">
              {["Atomic DvP — cash and security settle simultaneously", "Permissioned network with KYC/AML at infrastructure level", "Supports bilateral OTC and on-chain order book models", "Full immutable audit trail of all trades and transfers"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-[#7AC0CD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Why trade on SWIAT?
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
              From discovery to settlement
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
              Ready to trade on-chain?
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Get in touch to explore how SWIAT's secondary market infrastructure can eliminate settlement risk and unlock new trading opportunities for your institution.
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
