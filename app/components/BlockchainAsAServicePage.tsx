"use client";

import { motion } from "framer-motion";
import Link from "next/link";

let _bframeCount = 0;

function PhotoFrame({ label, src }: { label: string; src?: string }) {
  const id = `bpf-${++_bframeCount}`;
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
        <rect width="480" height="360" fill="#003946" rx="18" />
        <g clipPath={`url(#${id})`}>
          {src ? (
            <image href={src} width="480" height="360" preserveAspectRatio="xMidYMid slice" />
          ) : (
            <>
              <defs>
                <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d2035" />
                  <stop offset="100%" stopColor="#1a3a5c" />
                </linearGradient>
              </defs>
              <rect width="480" height="360" fill={`url(#${id}-grad)`} />
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

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Permissioned & private blockchain",
    desc: "Only network participants can read data on the SWIAT network. Confidential and non-confidential data are separated — meeting the privacy standards required by financial institutions.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Known participants, trusted network",
    desc: "A level playing field with shared terms and conditions. All network participants are regulated and pass comprehensive KYC/AML checks — enhanced trust from day one.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Built for financial institutions",
    desc: "Compliant with MaRisk and outsourcing regulations. Risk management aligned with BIS Basel Standards for cryptoassets — set for implementation in 2026.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "ESG — low energy footprint",
    desc: "The SWIAT network consumes less energy than conventional credit card systems. Responsible infrastructure for institutions with sustainability commitments.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "No cryptocurrencies required",
    desc: "Use blockchain technology without exposure to volatile crypto assets. Fixed, predictable transaction costs with no dependency on cryptocurrency markets.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Easy integration",
    desc: "EVM-compatible and built for businesses of all sizes. No in-depth blockchain knowledge required — seamlessly integrates with existing banking and fintech systems.",
  },
];

const networkStats = [
  { value: "L1", label: "Layer 1 Solution" },
  { value: "EVM", label: "Compatible" },
  { value: "100%", label: "Regulatory Compliant" },
];

export default function BlockchainAsAServicePage() {
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
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Blockchain-as-a-Service
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              An EVM-compatible, regulatory-compliant Layer 1 solution — tailored for financial institutions.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Bring your solutions to a scalable and secure blockchain network. Deploy on SWIAT and connect to the future of financial market infrastructure.
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

      {/* Network stats strip */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {networkStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deploy on SWIAT */}
      <section className="bg-[#0a1628] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <PhotoFrame label="Upload image — network / infrastructure visual" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Deploy</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Deploy on SWIAT Blockchain
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              SWIAT provides a blockchain that enables you to connect and scale your financial solutions on a secure, permissioned network — without the complexity or risk of public cryptocurrencies.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Layer 1 Solution", "EVM-Compatible", "Regulatory-compliant", "No Cryptocurrencies", "Fixed predictable costs", "Tailored for finance"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7AC0CD] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Get started today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why BaaS — features grid */}
      <section className="bg-[#07111f] border-t border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Why Blockchain-as-a-Service?
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              A purpose-built network designed from the ground up for regulated financial institutions — not adapted from public chains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mb-4">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{f.desc}</p>
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
              Explore the possibilities
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Bring your solution into a scalable production environment. Register now and start building on the SWIAT Blockchain.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Register now
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
