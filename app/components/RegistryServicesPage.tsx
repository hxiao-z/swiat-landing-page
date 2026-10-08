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
    title: "Same Legal Quality as Bearer Bonds",
    desc: "Crypto-securities under eWpG carry identical legal standing to paper bearer bonds — fully recognised under German securities law.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Faster Issuance Process",
    desc: "Replace days of manual paperwork with a fully digital issuance workflow — from setup to on-chain registration in hours, not weeks.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Global Accessibility",
    desc: "Securities issued on SWIAT are accessible 24/7 to any connected participant in the network — no central depository bottleneck.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "24/7 On-Chain Traceability",
    desc: "Every ownership transfer and lifecycle event is recorded immutably on-chain — a full audit trail available at any time, to any authorised party.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "100% Digital Issuance",
    desc: "No paper certificates, no physical processes. The entire issuance lifecycle — from origination to redemption — is managed digitally on blockchain.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Reshaped Post-Trade Infrastructure",
    desc: "SWIAT acts as registrar, eliminating traditional post-trade intermediaries and enabling atomic DvP settlement directly between counterparties.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function RegistryServicesPage() {
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
              Registry Services<br />(eWpG)
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-medium">
              Issue bearer bonds directly on-chain — with the same legal standing as traditional securities, and none of the paper.
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
            { value: "BaFin", label: "Approved & licensed" },
            { value: "eWpG", label: "Regulated under German law" },
            { value: "24/7", label: "On-chain traceability" },
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Overview</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              SWIAT for Registry Services
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              The German Electronic Securities Act (eWpG) introduced the crypto-security — a bearer bond issued and maintained entirely on a blockchain, carrying identical legal quality to a traditional paper-based security. SWIAT holds the BaFin licence to maintain a crypto-securities registry, acting as registrar for institutional issuers.
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
              {[
                "BaFin-licensed crypto-securities registry",
                "Legally equivalent to traditional bearer bonds",
                "Issued, transferred and settled on-chain",
                "Full lifecycle managed digitally — issuance to redemption",
              ].map(item => (
                <div key={item} className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-[#7AC0CD]/25 transition-all">
                  <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Why crypto-securities with SWIAT?
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

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-[#7AC0CD]/30 transition-all flex flex-col gap-4 max-w-lg w-full"
            >
              <span className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest">ABN AMRO</span>
              <h3 className="text-white font-bold text-base leading-snug">Digital bond registered on SWIAT's eWpG crypto-securities registry</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Fully digital end-to-end issuance — on-chain registration, atomic DvP settlement, no paper certificates.</p>
              <div className="flex flex-wrap gap-2">
                {["eWpG · Digital Bond", "BaFin Registry", "Atomic DvP"].map(t => (
                  <span key={t} className="text-[10px] font-medium text-zinc-400 border border-white/10 rounded-full px-2.5 py-1">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
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
                <marker id="reg-teal-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 Z" fill="#7AC0CD" opacity="0.7"/>
                </marker>
                <marker id="reg-teal-arr-rev" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto">
                  <path d="M7,0 L0,3.5 L7,7 Z" fill="#7AC0CD" opacity="0.7"/>
                </marker>
              </defs>

              <rect x="8" y="80" width="28" height="290" rx="4" fill="#ffffff04" stroke="#ffffff0a" strokeWidth="1"/>
              <text transform="rotate(-90, 22, 225)" x="22" y="225" fill="#6b7280" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif" letterSpacing="1">ASSET SETTLEMENT CHAIN &amp; SOFTWARE</text>

              <text x="900" y="22" fill="#9ca3af" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="Poppins,sans-serif">Offchain</text>

              <rect x="120" y="10" width="150" height="50" rx="6" fill="rgba(217,119,6,0.12)" stroke="rgba(217,119,6,0.5)" strokeWidth="1.2"/>
              <text x="195" y="32" fill="#fcd34d" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuers</text>
              <text x="195" y="48" fill="rgba(252,211,77,0.6)" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Financial Institutions</text>

              <rect x="650" y="10" width="150" height="50" rx="6" fill="rgba(217,119,6,0.12)" stroke="rgba(217,119,6,0.5)" strokeWidth="1.2"/>
              <text x="725" y="32" fill="#fcd34d" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Investors</text>
              <text x="725" y="48" fill="rgba(252,211,77,0.6)" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Banks · Asset Managers</text>

              <rect x="42" y="80" width="836" height="230" rx="10" fill="#003946" fillOpacity="0.08" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 4"/>
              <text x="862" y="97" fill="#7AC0CD" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="Poppins,sans-serif" opacity="0.7">Onchain</text>

              <path d="M 195 60 L 195 75 L 148 75 L 148 120" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#reg-teal-arr)"/>
              <path d="M 725 60 L 725 75 L 728 75 L 728 120" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#reg-teal-arr)"/>

              <text x="148" y="113" fill="#9ca3af" fontSize="7" textAnchor="middle" fontFamily="Poppins,sans-serif" fontStyle="italic">Issuance on behalf of offchain issuer</text>
              <rect x="58" y="120" width="180" height="60" rx="8" fill="#0d1f35" stroke="#ffffff20" strokeWidth="1.2"/>
              <text x="148" y="147" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuer / Custodian</text>
              <text x="148" y="163" fill="#6b7280" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">Onboarded Institution</text>
              <text x="148" y="200" fill="#6b7280" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif" fontStyle="italic">...or own issuance</text>

              <line x1="238" y1="150" x2="316" y2="150" fill="none" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5" markerEnd="url(#reg-teal-arr)"/>

              <rect x="320" y="110" width="280" height="80" rx="8" fill="#003946" stroke="#7AC0CD" strokeWidth="2"/>
              <text x="420" y="144" fill="white" fontSize="13" fontWeight="700" fontFamily="Poppins,sans-serif">swiat</text>
              <text x="420" y="162" fill="#7AC0CD" fontSize="11" fontWeight="600" fontFamily="Poppins,sans-serif">Token Engine</text>
              <rect x="490" y="118" width="96" height="64" rx="6" fill="#003946" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5"/>
              <text x="538" y="146" fill="#7AC0CD" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600">Registry</text>
              <text x="538" y="161" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">eWpG</text>

              <line x1="460" y1="190" x2="460" y2="215" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#reg-teal-arr)"/>

              <rect x="320" y="215" width="280" height="56" rx="8" fill="#0d1f35" stroke="#ffffff18" strokeWidth="1.2"/>
              <text x="460" y="240" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Issuer / Custodian</text>
              <text x="460" y="256" fill="#6b7280" fontSize="8.5" textAnchor="middle" fontFamily="Poppins,sans-serif">ERIR · Control Agent</text>

              <line x1="600" y1="148" x2="646" y2="148" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#reg-teal-arr)"/>
              <line x1="600" y1="243" x2="646" y2="243" fill="none" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.4" markerEnd="url(#reg-teal-arr)"/>

              <rect x="650" y="120" width="170" height="56" rx="7" fill="#0d1f35" stroke="#ffffff28" strokeWidth="1.2"/>
              <text x="735" y="146" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Custodians</text>
              <text x="735" y="162" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Multiple institutions via RL1</text>

              <rect x="650" y="215" width="170" height="56" rx="7" fill="#0d1f35" stroke="#ffffff20" strokeWidth="1.2"/>
              <text x="735" y="241" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Investor</text>
              <text x="735" y="257" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Asset Manager · Bank</text>

              {[0,1,2,3,4,5].map(i => (
                <circle key={i} cx={58 + i * 14} cy={298} r="3.5" fill="#7AC0CD" opacity={0.12 + i * 0.05}/>
              ))}
              <text x="58" y="312" fill="#7AC0CD" fontSize="7.5" fontFamily="Poppins,sans-serif" opacity="0.5">Regulated Layer One</text>

              <rect x="350" y="330" width="220" height="54" rx="10" fill="#003946" stroke="#7AC0CD" strokeWidth="2"/>
              <text x="460" y="353" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">swiat Synchronizer*</text>
              <text x="460" y="370" fill="#7AC0CD" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">Atomic DvP · Cross-chain</text>

              <line x1="460" y1="310" x2="460" y2="330" stroke="#7AC0CD" strokeWidth="1.6" strokeOpacity="0.6" markerStart="url(#reg-teal-arr-rev)" markerEnd="url(#reg-teal-arr)"/>
              <line x1="460" y1="384" x2="460" y2="400" stroke="#7AC0CD" strokeWidth="1.6" strokeOpacity="0.6" markerStart="url(#reg-teal-arr-rev)" markerEnd="url(#reg-teal-arr)"/>
              <line x1="30" y1="295" x2="30" y2="400" stroke="#7AC0CD" strokeWidth="1.4" strokeOpacity="0.45" strokeDasharray="4 3" markerStart="url(#reg-teal-arr-rev)" markerEnd="url(#reg-teal-arr)"/>

              <rect x="42" y="400" width="836" height="58" rx="8" fill="#ffffff03" stroke="#ffffff10" strokeWidth="1" strokeDasharray="5 4"/>
              <text x="52" y="416" fill="#6b7280" fontSize="7.5" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1">PAYMENT</text>

              <rect x="56" y="408" width="126" height="40" rx="6" fill="#0d1f35" stroke="#ffffff18" strokeWidth="1"/>
              <text x="119" y="424" fill="#d1d5db" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Free of Payment</text>
              <text x="119" y="438" fill="#6b7280" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif">No money movement</text>

              <line x1="190" y1="404" x2="190" y2="454" stroke="#ffffff10" strokeWidth="1"/>

              <rect x="198" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.5"/>
              <text x="287" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Pontes</text>
              <text x="287" y="438" fill="#7AC0CD" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Central Bank Money (ECB)</text>

              <rect x="384" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#ffffff15" strokeWidth="1"/>
              <text x="473" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">kinexys</text>
              <text x="473" y="438" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">by J.P. Morgan</text>

              <rect x="570" y="408" width="178" height="40" rx="6" fill="#0d1f35" stroke="#ffffff15" strokeWidth="1"/>
              <text x="659" y="424" fill="white" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">Stablecoins</text>
              <text x="659" y="438" fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">Regulated · On-chain</text>

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
              Ready to issue on-chain?
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Get in touch with our team to explore how SWIAT Registry Services fit your institution&apos;s issuance strategy.
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
