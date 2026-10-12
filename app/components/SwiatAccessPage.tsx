"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Low entry barrier",
    desc: "No IT resources required. Get connected to the SWIAT blockchain without internal development overhead.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Regulatory compliance",
    desc: "Built for regulated financial institutions — meeting the highest standards for data integrity and auditability.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Confidential data management",
    desc: "Your data stays yours. Confidential handling of sensitive financial information at every step.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "API integration",
    desc: "Integrable with existing crypto-custody and banking systems via REST API — no vendor lock-in.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Workflow & privilege management",
    desc: "Fine-grained access controls and workflow automation tailored for institutional operations.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "DeFi & digital asset exploration",
    desc: "Explore blockchain opportunities, digital assets, and DeFi applications from a compliant, institutional foundation.",
  },
];

const steps = [
  { step: "01", title: "Get in touch", desc: "Contact the SWIAT team to discuss your institution's needs and use case." },
  { step: "02", title: "Onboarding", desc: "Our team guides you through the regulatory and technical onboarding process — no heavy IT lift required." },
  { step: "03", title: "Configuration", desc: "We configure your access, workflow rules, and privilege management to match your organisation's structure." },
  { step: "04", title: "Go live", desc: "Start accessing the SWIAT blockchain in production. Quick setup, immediate value." },
];

let _frameCount = 0;

function PhotoFrame({ label, src }: { label: string; src?: string }) {
  // unique clip id per instance
  const id = `pf-${++_frameCount}`;
  // viewBox: 480 x 360
  // Circular arc cuts top-left corner: arc of r=240 from (240,0) to (0,240)
  // teal background shows in the top-left; image sits in the remaining area
  const clipPath = "M 240 0 A 240 240 0 0 0 0 240 L 0 360 L 480 360 L 480 0 Z";

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 480 360"
        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,57,70,0.5)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={id}>
            <path d={clipPath} />
          </clipPath>
        </defs>

        {/* Teal background fills the whole card including the arch corner */}
        <rect width="480" height="360" fill="#003946" rx="18" />

        {/* Image (or placeholder) clipped to arch shape */}
        <g clipPath={`url(#${id})`}>
          {src ? (
            <image href={src} width="480" height="360" preserveAspectRatio="xMidYMid slice" />
          ) : (
            <>
              {/* Placeholder gradient */}
              <defs>
                <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d2035" />
                  <stop offset="100%" stopColor="#1a3a5c" />
                </linearGradient>
              </defs>
              <rect width="480" height="360" fill={`url(#${id}-grad)`} />
              {/* Dashed border hint */}
              <path d={clipPath} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="8 6" />
              {/* Icon */}
              <g transform="translate(240,168)">
                <circle r="28" fill="rgba(122,192,205,0.1)" />
                <path
                  d="M -10 4 L -2 12 L 10 -4"
                  fill="none" stroke="rgba(122,192,205,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                />
                <path
                  d="M -14 -6 Q -14 -14 -6 -14 L 6 -14 Q 14 -14 14 -6 L 14 6 Q 14 14 6 14 L -6 14 Q -14 14 -14 6 Z"
                  fill="none" stroke="rgba(122,192,205,0.2)" strokeWidth="1.5"
                />
              </g>
              {/* Label */}
              <text
                x="240" y="220"
                textAnchor="middle"
                fill="rgba(255,255,255,0.25)"
                fontSize="11"
                fontFamily="sans-serif"
              >
                {label}
              </text>
            </>
          )}
        </g>

        {/* Subtle inner glow on arch edge */}
        <path
          d={clipPath}
          fill="none"
          stroke="rgba(122,192,205,0.15)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default function SwiatAccessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050e1d] border-b border-white/5 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#003946_0%,_transparent_55%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Solutions</p>
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              SWIAT Access
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              Quick, easy, regulatory-compliant — access to the SWIAT Blockchain.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              A Plug&apos;n&apos;Play access service that lets you focus on your business, while SWIAT takes care of the rest. No IT resources required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#report"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read SWIAT Access Report
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <PhotoFrame label="Upload hero image" />
          </motion.div>
        </div>
      </section>

      {/* Read Report banner */}
      <section id="report" className="bg-[#003946]/40 border-y border-[#7AC0CD]/20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7AC0CD]/15 border border-[#7AC0CD]/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#7AC0CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">SWIAT Access — Product Report</p>
              <p className="text-zinc-400 text-xs mt-0.5">Deep-dive into architecture, compliance framework, and integration patterns</p>
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Report
          </a>
        </div>
      </section>

      {/* What is SWIAT Access */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              What is SWIAT Access?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-8">
              A managed Plug&apos;n&apos;Play connectivity service — direct access to the SWIAT Blockchain for banks, fintechs, and asset managers, with no IT development or infrastructure investment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Learn more — Contact us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Zero software overhead", desc: "No additional software required on your side" },
                { title: "No IT resources needed", desc: "Fully managed — SWIAT handles the infrastructure" },
                { title: "Fast to production", desc: "Quick and easy setup, ready for live transactions" },
                { title: "Explore digital assets", desc: "Access blockchain, digital assets & DeFi from day one" },
              ].map(item => (
                <div key={item.title} className="bg-white/3 border border-white/8 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why SWIAT Access — benefits grid */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Why SWIAT Access?
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              Everything you need to participate in the tokenised financial ecosystem — none of the complexity.
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

      {/* Proven Use Cases */}
      <section className="bg-[#050e1d] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Proven Use Cases</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Live institutions. Real operations.
            </h2>
          </div>

          <div className="flex justify-center">
            {[
              {
                logo: "adesso",
                headline: "SWIAT Access delivered in partnership with adesso",
                desc: "SWIAT has partnered with adesso — one of Europe's leading IT service companies — to deliver SWIAT Access with the engineering rigour and institutional reliability that financial markets demand.",
                tag: "Technology Partnership · Managed Onboarding",
              },
            ].map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-[#7AC0CD]/30 transition-all flex flex-col gap-5 max-w-lg w-full"
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

      {/* Technical Setup */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Technical Setup</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              How SWIAT Access connects your institution
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              No blockchain engineers. No infrastructure to manage. Your team logs in, SWIAT handles everything underneath — nodes, compliance, uptime, and upgrades.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-stretch gap-4"
          >
            {/* Left: Financial Institution */}
            <div className="flex-1 bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Your Institution</p>
              <div className="flex flex-col gap-3 flex-1 justify-center">
                {["Compliance Team", "Front Office", "Operations"].map(u => (
                  <div key={u} className="flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{u}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:flex-col lg:justify-center px-2">
              <svg className="w-6 h-6 text-[#7AC0CD]/50 rotate-0 lg:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Middle: SWIAT Access Layer */}
            <div className="flex-[1.4] bg-[#003946]/40 border border-[#7AC0CD]/25 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#7AC0CD]" />
                <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest">SWIAT Access Layer</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Browser / GUI", sub: "Ready-to-use web interface" },
                  { label: "Managed Node", sub: "Operated and maintained by SWIAT" },
                  { label: "Private Database", sub: "Institution-side data storage" },
                ].map(item => (
                  <div key={item.label} className="bg-[#050e1d]/60 border border-white/8 rounded-xl px-4 py-3">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-2">
              <svg className="w-6 h-6 text-[#7AC0CD]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Right: Blockchain Network */}
            <div className="flex-1 bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">RL1 Network</p>
              <div className="flex flex-col gap-3 flex-1 justify-center">
                {[
                  { label: "dApp", sub: "Smart contract layer" },
                  { label: "Validator Nodes", sub: "Distributed network" },
                  { label: "SWIAT Infrastructure", sub: "Regulated Layer One" },
                ].map(item => (
                  <div key={item.label} className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to get SWIAT Access — steps */}
      {/* Final CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Get Started</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
            >
              Interested in SWIAT Access?
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Get in touch with our team and we&apos;ll walk you through how SWIAT Access fits your institution&apos;s needs.
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
              <a
                href="#report"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read the Report
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
