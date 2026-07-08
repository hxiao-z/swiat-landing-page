"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const editions = [
  {
    year: "2024",
    title: "SWIAT Conference 2024",
    location: "Frankfurt am Main",
    desc: "Our third annual gathering brought together over 80 participants from leading European financial institutions, regulators, and digital asset innovators. A day of closed-door sessions on the future of regulated blockchain infrastructure.",
    highlights: ["Keynote on eWpG implementation at scale", "Regulator roundtable with BaFin representatives", "Live demo of atomic DvP settlement"],
    tag: "Most recent",
  },
  {
    year: "2023",
    title: "SWIAT Conference 2023",
    location: "Frankfurt am Main",
    desc: "Building on the momentum of our first year, the 2023 edition deepened conversations on tokenization standards and cross-border settlement — with a growing room of founding members and new network participants.",
    highlights: ["Panel: Tokenization standards across jurisdictions", "First live issuance of a digital bond on SWIAT", "Working group formation on collateral mobility"],
    tag: null,
  },
  {
    year: "2022",
    title: "SWIAT Conference 2022",
    location: "Frankfurt am Main",
    desc: "The inaugural SWIAT Conference marked the beginning of an annual tradition — a small, deliberate gathering of the founding members and early institutional partners who shaped the SWIAT network from the ground up.",
    highlights: ["Founding member network launch", "Introduction of the SWIAT blockchain architecture", "First cross-institution settlement demo"],
    tag: "Inaugural",
  },
];

function PhotoPlaceholder({ label, aspect = "landscape" }: { label: string; aspect?: "landscape" | "square" }) {
  return (
    <div className={`w-full bg-[#0a1e30] border border-white/8 rounded-2xl overflow-hidden flex items-center justify-center ${aspect === "square" ? "aspect-square" : "aspect-[4/3]"}`}>
      <div className="text-center p-6">
        <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD]/40 mx-auto mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-zinc-600 text-xs">{label}</p>
      </div>
    </div>
  );
}

export default function ConferencePage() {
  return (
    <div className="bg-[#050e1d] text-white">

      {/* Page header */}
      <section className="relative px-6 pt-14 pb-10 overflow-hidden border-b border-white/8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Resources</span>
            <span className="mx-2 text-zinc-700">/</span>
            SWIAT Conference
          </p>
          <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-5 sr-only">Annual Event</p>
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              The SWIAT Conference
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Our annual conference brings together founding members, regulators, and capital market leaders — by invitation.
            </p>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-10">
              Three years in, it remains a small room on purpose. The conversations that happen here shape the direction of regulated blockchain infrastructure in Europe.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              Request an invitation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#003946]/30 border-y border-[#7AC0CD]/15 py-8 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "3", label: "Annual editions" },
            { value: "Invite only", label: "Every year" },
            { value: "Frankfurt", label: "Home city" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-white font-semibold text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past editions */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Past Editions</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Three years, one growing network
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {editions.map((ed, i) => (
              <motion.div
                key={ed.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Photo gallery — 2 placeholders per edition */}
                <div className="grid grid-cols-2 gap-3">
                  <PhotoPlaceholder label={`${ed.year} — photo 1`} />
                  <PhotoPlaceholder label={`${ed.year} — photo 2`} aspect="square" />
                  <PhotoPlaceholder label={`${ed.year} — photo 3`} aspect="square" />
                  <PhotoPlaceholder label={`${ed.year} — photo 4`} />
                </div>

                {/* Text */}
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#7AC0CD] font-black text-4xl leading-none font-[family-name:var(--font-playfair)]">{ed.year}</span>
                    {ed.tag && (
                      <span className="text-xs font-bold text-[#7AC0CD] border border-[#7AC0CD]/30 bg-[#7AC0CD]/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                        {ed.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {ed.location}
                  </p>
                  <p className="text-zinc-300 leading-relaxed mb-6 text-sm">{ed.desc}</p>
                  <div className="flex flex-col gap-2.5">
                    {ed.highlights.map(h => (
                      <div key={h} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7AC0CD] shrink-0 mt-1.5" />
                        <span className="text-zinc-400 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the format */}
      <section className="bg-[#0a1628] border-t border-white/5 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-5">The Format</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Intentionally small. Genuinely useful.
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We keep the guest list short because the conversations matter more than the headcount. Each edition is a single day — no keynote theatre, no vendor stands. Just the people building and regulating the future of digital capital markets, in one room.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">
              Attendance is by invitation only. If you are a financial institution, regulator, or infrastructure provider interested in joining the network, reach out and we will be in touch ahead of the next edition.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              Express interest in attending →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
