"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Connect",
    description:
      "Onboard as an issuer, custodian, trading venue, or participant. SWIAT's platform integrates with your existing infrastructure — no rip-and-replace required.",
    detail: "API-first integration, standard financial messaging protocols",
  },
  {
    step: "2",
    title: "Issue or Trade",
    description:
      "Create digital securities on-chain under the eWpG framework, or connect to existing digital asset flows. Full lifecycle management from origination to maturity.",
    detail: "eWpG-compliant issuance, on-chain corporate actions, secondary market trading",
  },
  {
    step: "3",
    title: "Settle",
    description:
      "Transactions settle atomically on RL1 — simultaneous Delivery versus Payment with immediate finality. No custodian risk, no settlement fails, no delays.",
    detail: "T+0 atomic DvP, on-chain audit trail, cross-border settlement",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#07111f] py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#003946/20_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7AC0CD] text-xs font-semibold uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            From onboarding to settlement —{" "}
            <span style={{ color: "#7AC0CD" }}>in three steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="absolute top-14 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] hidden md:block"
            aria-hidden="true"
          >
            <div className="h-px bg-gradient-to-r from-[#7AC0CD]/30 via-[#7AC0CD]/60 to-[#7AC0CD]/30" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#7AC0CD]/50 bg-[#07111f] flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(122,192,205,0.15)]">
                <span className="text-[#7AC0CD] font-bold text-sm">{s.step}</span>
              </div>

              <div className="bg-white/3 border border-white/8 rounded-2xl px-6 py-6 hover:border-[#7AC0CD]/25 hover:bg-white/5 transition-all w-full">
                <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <p className="text-[#7AC0CD]/70 text-xs leading-relaxed">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7AC0CD]/10 border border-[#7AC0CD]/30 hover:bg-[#7AC0CD]/20 hover:border-[#7AC0CD]/60 text-[#7AC0CD] font-semibold px-8 py-3 rounded-lg transition-all text-sm"
          >
            Talk to our team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
