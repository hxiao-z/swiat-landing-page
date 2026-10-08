"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const partnerTypes = [
  {
    title: "Financial Institutions",
    desc: "Banks, asset managers, and insurers who want to issue, trade, or settle digital securities on regulated infrastructure — without building it themselves.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Technology Providers",
    desc: "Fintechs, core banking vendors, and infrastructure players who can extend SWIAT's reach or integrate their capabilities into the network via our API and BaaS layer.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Market Infrastructure",
    desc: "Central securities depositories, clearing houses, and exchanges looking to connect their systems to the SWIAT blockchain or explore DvP settlement with network participants.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Academic & Research",
    desc: "Universities, think tanks, and public institutions researching digital capital markets, CBDC design, or DLT governance who want to work alongside a live regulated network.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const swiatBrings = [
  "Dedicated professional team across tokenization use cases",
  "Coverage of current and future DLT initiatives around securities",
  "Priority access to new features and solutions",
  "Roadmap alignment on key features",
  "Joint marketing and thought leadership",
];

const partnerCommits = [
  "Long-term partnership commitment",
  "SWIAT as preferred DLT infrastructure for relevant use cases",
  "Joint pipeline planning",
  "Sharing learnings and feedback to improve the platform",
  "Joint marketing — permission to use logos in related materials",
];

const partnerBenefits = [
  { title: "Lower total cost", desc: "Package projects instead of totally independent setup" },
  { title: "Higher efficiency", desc: "Single onboarding for multiple projects" },
  { title: "One infrastructure", desc: "For all DLT-related projects on the roadmap" },
  { title: "Trusted long-term partnership", desc: "Reduced management overhead" },
  { title: "Locked in for new use cases", desc: "RL1 access and ecosystem benefits" },
];

export default function PartnershipPage() {
  return (
    <div className="bg-[#050e1d] min-h-screen">

      {/* Page header */}
      <section className="relative px-6 pt-14 pb-10 border-b border-white/8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Resources</span>
            <span className="mx-2 text-zinc-700">/</span>
            Partnership
          </p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center">
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Build the future of capital markets with us
            </h1>
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              SWIAT is built on the belief that regulated blockchain infrastructure works best as a shared network. We partner with financial institutions, technology providers, and market infrastructure players who are serious about making digital capital markets a reality.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Become a partner
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Talk to us first
              </Link>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-white/5 bg-[#07111f]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-3 gap-6">
          {[
            { value: "50+", label: "Financial entities onboarded" },
            { value: ">50", label: "Financial institutions connected" },
            { value: "€1B+", label: "Settlement volume processed" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-[#7AC0CD] font-bold text-2xl mb-1">{s.value}</p>
              <p className="text-zinc-400 text-xs leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Who we partner with */}
      <section className="py-24 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Partnership Types</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Who we work with
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {partnerTypes.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#7AC0CD]/30 hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mb-5">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we partner */}
      <section className="py-24 px-6 bg-[#07111f] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">How we partner</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              A long-term commitment to digital capital markets — together
            </h2>
          </div>

          <p className="text-center text-zinc-400 text-sm max-w-xl mx-auto mb-10">
            Every partnership is shaped around what your institution actually needs — no fixed template, no one-size-fits-all. We work with you to define the right scope, timeline, and engagement model.
          </p>

          {/* Two columns: what SWIAT brings / what partner commits */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-[#003946]/30 border border-[#7AC0CD]/20 rounded-2xl p-7">
              <h3 className="text-[#7AC0CD] font-bold text-sm uppercase tracking-widest mb-5">What SWIAT brings</h3>
              <ul className="flex flex-col gap-3">
                {swiatBrings.map(item => (
                  <li key={item} className="flex items-start gap-3 text-xs text-zinc-400">
                    <svg className="w-3 h-3 text-[#7AC0CD]/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-7">
              <h3 className="text-zinc-400 font-bold text-sm uppercase tracking-widest mb-5">What the partner commits</h3>
              <ul className="flex flex-col gap-3">
                {partnerCommits.map(item => (
                  <li key={item} className="flex items-start gap-3 text-xs text-zinc-500">
                    <svg className="w-3 h-3 text-zinc-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Benefits grid */}
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-5">The benefits for partners</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {partnerBenefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="bg-white/3 border border-white/8 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-1">{b.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Let&apos;s design your partnership
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing partners placeholder */}
      <section className="py-20 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Our Partners</p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Trusted by leading institutions
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-md mx-auto">Partner logos and profiles coming soon.</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-14 bg-white/3 border border-white/6 rounded-xl flex items-center justify-center">
                <span className="text-zinc-700 text-xs">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Work with us</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
            >
              Ready to join the network?
            </h2>
            <p className="text-zinc-300 font-medium text-base mb-8 max-w-xl mx-auto">
              Whether you are a bank, a fintech, or a market infrastructure provider — if you are serious about regulated digital capital markets, we want to hear from you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
