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
    title: "Seamless collateral mobility",
    desc: "On-chain securities transferred between participants in near real time — cross-border, with no cut-off times or operating-hours constraints. Built for T+1 and beyond.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Legal certainty. Minimal change.",
    desc: "Legal title stays within traditional custody infrastructure. Existing Global Custody Agreements can largely be reused — reducing legal complexity and onboarding effort for existing clients.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "One standard. Seamless connectivity.",
    desc: "A single standardised instruction model eliminates fragmented messaging and processing breaks — seamlessly interoperable with custodians, tri-party agents, and agent lenders.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  },
  {
    title: "Full transparency. Always reconciled.",
    desc: "Single unified view of all collateral positions, automatically reconciled — significantly reducing operational overhead and enabling better decision-making and asset allocation.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-9v2m0 14v2m9-9h-2M5 12H3" /></svg>,
  },
  {
    title: "Lower PFE / CCR / RWA",
    desc: "Instant settlement minimises potential future exposure and counterparty credit risk — reducing capital charges and unlocking trapped liquidity across your book.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Internal efficiency without market adoption",
    desc: "Intra-group collateral optimisation delivers real value immediately — real-time transfers across entities and jurisdictions, even before external counterparties join.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
];

const useCases = [
  {
    num: "01",
    title: "Repo / Intraday Repo",
    driver: "Tier-1 banks estimate >$100m annual savings from intraday repo optimisation",
    points: ["Atomic real-time DvP and instant confirmations", "Reduce settlement risk, funding buffers, and intraday credit fails", "Ready for CB money today + ECB PONTES (end 2026)"],
  },
  {
    num: "02",
    title: "Securities Lending",
    driver: "T+1 creates higher operational pressure across the lending chain",
    points: ["DvP substitutions with no 'one-leg-fails'", "Instant exposure visibility and faster recalls & reallocations", "Materially lower CSDR penalties with low-friction adoption"],
  },
  {
    num: "03",
    title: "Real-Time Collateral Mobility",
    driver: "24/7 mobility across all products and time zones",
    points: ["Unified collateral pool: Repo, Sec Lending, OTC IM/VM, Treasury & intra-group", "Real-time visibility and faster global response", "Lower PFE/CCR/RWA, fully reconciled to custodian books"],
  },
  {
    num: "04",
    title: "Intra-Group Optimisation",
    driver: "Delivers internal efficiency even without external market adoption",
    points: ["Real-time intra-group transfers across entities and jurisdictions", "Immediate liquidity and buffer reduction", "Enhanced efficiency without requiring counterparty onboarding"],
  },
  {
    num: "05",
    title: "Tri-party Agent Access",
    driver: "Real-time re-use of assets with third-party TPAs",
    points: ["Real-time tri-party re-use with dynamic cross-location optimisation", "Fast go-live with one TPA, delivering immediate operational uplift", "Optimise assets across TPAs and enhance yield"],
  },
  {
    num: "06",
    title: "Agency Lending",
    driver: "Real-time collateralisation of lending and guarantees",
    points: ["Access to more participants and lending flows with broader market connectivity", "Higher collateral utilisation with fewer settlement breaks", "Instant settlement via on-chain CB money, with Target2 (end 2026)"],
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
            <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
              Collateral ConneX (CCX) — SWIAT&apos;s real-time collateral mobility engine. Programmable rules, intraday liquidity, and zero manual reconciliation across a globally connected network.
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

      {/* Market Stats */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: "52%", label: "of firms plan to go live with tokenised collateral by end of 2026", sub: "Nasdaq 2026" },
            { value: "80%", label: "of North American firms expect tokenized collateral to have major impact", sub: "ValueExchange 2026" },
            { value: "CDM-Aligned", label: "Interoperable and regulation-ready from day one", sub: null },
          ].map(s => (
            <div key={s.value} className="flex flex-col gap-1">
              <p className="text-[#7AC0CD] font-bold text-xl leading-tight">{s.value}</p>
              <p className="text-white text-xs leading-relaxed mt-1">{s.label}</p>
              {s.sub && <p className="text-zinc-600 text-[10px] mt-1">{s.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Collateral that moves as fast as markets
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Traditional collateral management relies on overnight settlement cycles, manual reconciliation, and fragmented custody arrangements. The result: trapped liquidity, operational risk, and slow responses to margin calls.
            </p>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors">
              Talk to an expert →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {["Real-time allocation across the SWIAT network", "Programmable eligibility, haircuts and substitution rules", "Intraday liquidity freed from overnight settlement windows", "Automated margin calls and collateral returns"].map(item => (
                <div key={item} className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-[#7AC0CD]/25 transition-all">
                  <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Why manage collateral on SWIAT CCX?
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
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
              See how CCX fits your institution →
            </Link>
          </div>
        </div>
      </section>

      {/* CCX Use Cases */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">CCX Use Cases</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Mobilise collateral globally — across every product and time zone
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <motion.div key={uc.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 transition-all flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#7AC0CD]/30 font-bold text-2xl leading-none shrink-0">{uc.num}</span>
                  <h3 className="text-white font-bold text-sm leading-snug">{uc.title}</h3>
                </div>
                <p className="text-[#7AC0CD] text-xs font-medium leading-snug">{uc.driver}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors">
              Discuss your use case
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CCX Architecture */}
      <section className="bg-[#07111f] border-t border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">CCX Architecture</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Collateral ConneX — how it moves
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 3-step flow */}
            <div className="grid grid-cols-3 gap-0 relative mb-6">
              {/* connector line behind steps */}
              <div className="absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#7AC0CD]/25 z-0" />

              {[
                {
                  num: "01",
                  label: "Onramp",
                  sub: "Bring assets onto CCX",
                  detail: "Securities held in traditional custody are tokenised and made available on the SWIAT network — without leaving their legal custody framework.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />,
                },
                {
                  num: "02",
                  label: "Transfer",
                  sub: "Transfer collateral",
                  detail: "Assets move between CCX participants in real time — FoP, DvD, or DvP — with automated eligibility checks and haircut application.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,
                },
                {
                  num: "03",
                  label: "Offramp",
                  sub: "Return assets to custody",
                  detail: "When collateral is no longer required, assets are unlocked and returned seamlessly to the originating custodian — fully reconciled, no manual steps.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 16v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1m4-4l4 4m0 0l4-4m-4 4V4" />,
                },
              ].map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center px-4 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#003946] border-2 border-[#7AC0CD]/50 flex items-center justify-center text-[#7AC0CD] mb-4 shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{step.icon}</svg>
                  </div>
                  <span className="text-[#7AC0CD]/40 font-bold text-xs tracking-widest uppercase mb-1">{step.num}</span>
                  <h3 className="text-white font-bold text-base mb-1">{step.label}</h3>
                  <p className="text-[#7AC0CD] text-xs font-medium mb-3">{step.sub}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>

          </motion.div>
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
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Talk to an expert
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
