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
    title: "Enormous cost advantages",
    desc: "Eliminating intermediaries through 100% digital processes dramatically reduces issuance and settlement costs.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Faster processes",
    desc: "Atomic settlement and programmable lifecycle events replace T+2 with near-instant finality — reducing counterparty risk.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "New trading opportunities",
    desc: "Tokenized assets unlock fractional ownership, 24/7 trading, and programmable secondary market functionality.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Ready-to-use frontends & UI",
    desc: "Pre-built interfaces for issuance, trading, and settlement — no need to build from scratch. Integrate or white-label.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Legacy system integration",
    desc: "A dedicated API and integration layer ensures interoperability with your existing banking infrastructure — no rip and replace.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Identity & workflow management",
    desc: "Built-in KYC/AML-aligned identity management and configurable workflow automation for the full asset lifecycle.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Choose your token form", desc: "Select between security token, digitally registered bond, or bearer bond depending on your legal and operational requirements." },
  { step: "02", title: "Issue on SWIAT", desc: "Use the ready-to-use frontend or integrate via API to issue your tokenized asset directly on the SWIAT blockchain." },
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
            <p className="text-zinc-400 leading-relaxed mb-8">
              SWIAT offers full tokenization capabilities to issue, trade, and settle securitized assets. Manage everything in the same environment as your crypto-securities and digital assets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Get started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Talk to an expert
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
            { value: "3", label: "Token form options" },
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <PhotoFrame label="Upload image — tokenization / assets visual" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              SWIAT for Tokenization
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              SWIAT provides the full stack to tokenize, issue, trade, and settle securitized assets on a permissioned, regulatory-compliant blockchain — eliminating intermediaries through 100% digital processes.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Whether you need a security token, a digitally registered bond under eWpG, or a bearer bond — SWIAT gives you the flexibility to choose, all managed in a unified environment alongside your other digital assets.
            </p>
            <ul className="flex flex-col gap-3">
              {["Issue any token form on one platform", "Unified environment with crypto-securities", "Ready-to-use UI or integrate via API", "Full lifecycle management: issuance to redemption"].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-[#7AC0CD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Contact us to learn more
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Token forms */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Token Forms</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Choose your token form
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              Three securitization options — all issued, traded, and settled on the same SWIAT infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {tokenForms.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mx-auto mb-5">
                  {t.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{t.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
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
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              The full platform stack — from issuance to settlement — built for regulated financial institutions.
            </p>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Get Started</p>
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
                Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Talk to an expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
