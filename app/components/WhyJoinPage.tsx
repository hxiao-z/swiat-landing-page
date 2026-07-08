"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function AvatarPlaceholder({ size = "md", label }: { size?: "sm" | "md" | "lg"; label: string }) {
  const dim = size === "lg" ? "w-20 h-20" : size === "md" ? "w-14 h-14" : "w-10 h-10";
  return (
    <div className={`${dim} rounded-full bg-[#003946]/60 border-2 border-[#7AC0CD]/20 flex items-center justify-center shrink-0 overflow-hidden`}>
      <svg className="w-1/2 h-1/2 text-[#7AC0CD]/30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
  );
}

function PhotoBox({ label, tall }: { label: string; tall?: boolean }) {
  return (
    <div className={`w-full ${tall ? "aspect-[3/4]" : "aspect-[4/3]"} bg-[#0a1e30] border border-white/8 rounded-2xl flex items-center justify-center overflow-hidden`}>
      <div className="text-center p-4">
        <svg className="w-6 h-6 text-[#7AC0CD]/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-zinc-700 text-xs">{label}</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Team member name",
    role: "Role / Department",
    quote: "Add a genuine quote from this person about what makes working at SWIAT special — the mission, the team, the pace, or the impact.",
    tenure: "X years at SWIAT",
  },
  {
    name: "Team member name",
    role: "Role / Department",
    quote: "What does this person value most about being here? A short, honest reflection works better than anything polished.",
    tenure: "X years at SWIAT",
  },
  {
    name: "Team member name",
    role: "Role / Department",
    quote: "A great quote touches on culture, growth, or the unique feeling of building something that genuinely matters to the financial world.",
    tenure: "X years at SWIAT",
  },
  {
    name: "Team member name",
    role: "Role / Department",
    quote: "Replace this with a real voice from the team — the more specific and personal the better.",
    tenure: "X years at SWIAT",
  },
];

const values = [
  {
    emoji: "🏗️",
    title: "Build what matters",
    desc: "We are not building features — we are building infrastructure that changes how European capital markets work. That weight is motivating, not intimidating.",
  },
  {
    emoji: "🤝",
    title: "Small team, big trust",
    desc: "Everyone owns something real here. There is no layer of middle management between your idea and its impact on the product or the network.",
  },
  {
    emoji: "🌍",
    title: "Frankfurt & beyond",
    desc: "Our home is Frankfurt — the heart of European finance. Our network stretches across the continent and grows every quarter.",
  },
  {
    emoji: "📚",
    title: "Learn at the frontier",
    desc: "Blockchain, regulation, capital markets — the intersection is genuinely hard. You will learn things here that you cannot learn anywhere else.",
  },
  {
    emoji: "⚖️",
    title: "Regulated by design",
    desc: "We take compliance seriously — not as a constraint but as a competitive advantage. Working in a regulated environment teaches discipline that lasts a career.",
  },
  {
    emoji: "🎉",
    title: "A team that enjoys itself",
    desc: "Replace this with something real — a ritual, a tradition, an inside joke. Something that shows what it actually feels like to be here.",
  },
];

const activityPhotos = [
  { label: "Team event photo 1", tall: false },
  { label: "Office / working atmosphere", tall: true },
  { label: "Conference or offsite", tall: false },
  { label: "Team event photo 2", tall: false },
  { label: "Team celebration or lunch", tall: true },
  { label: "Team photo or outing", tall: false },
];

export default function WhyJoinPage() {
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <div className="bg-[#050e1d] text-white">

      {/* Page header */}
      <section className="relative px-6 pt-14 pb-10 overflow-hidden border-b border-white/8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Company</span>
            <span className="mx-2 text-zinc-700">/</span>
            Why Join Us
          </p>
          <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-5 sr-only">Careers at SWIAT</p>
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              Come build the future of finance with us
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              We are a small, focused team working on something genuinely hard and genuinely important. If you want to see your work matter — and learn faster than anywhere else — this might be your place.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://swiat.kenjo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                See open positions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Meet the team
              </Link>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#003946]/20 border-b border-[#7AC0CD]/10 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "34", label: "People on the team" },
            { value: "Frankfurt", label: "Home base" },
            { value: "10+", label: "Nationalities" },
            { value: "2019", label: "Founded" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-xl">{s.value}</p>
              <p className="text-zinc-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we value */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Culture</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              What it&apos;s like to work here
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/25 hover:bg-white/5 transition-all"
              >
                <span className="text-2xl mb-4 block">{v.emoji}</span>
                <h3 className="text-white font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee voices — interactive carousel */}
      <section className="py-24 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Our people</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              In their own words
            </h2>
          </div>

          {/* Quote display */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8 sm:p-10 mb-6 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuote}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-[family-name:var(--font-playfair)] italic">
                  &ldquo;{testimonials[activeQuote].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <AvatarPlaceholder size="md" label={testimonials[activeQuote].name} />
                  <div>
                    <p className="text-white font-bold text-sm">{testimonials[activeQuote].name}</p>
                    <p className="text-zinc-500 text-xs">{testimonials[activeQuote].role}</p>
                    <p className="text-[#7AC0CD]/60 text-xs mt-0.5">{testimonials[activeQuote].tenure}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector dots */}
          <div className="flex items-center gap-3 justify-center">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveQuote(i)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                  activeQuote === i
                    ? "bg-[#7AC0CD]/15 border-[#7AC0CD]/40 text-[#7AC0CD]"
                    : "bg-white/3 border-white/8 text-zinc-600 hover:text-zinc-400 hover:border-white/15"
                }`}
              >
                <AvatarPlaceholder size="sm" label={t.name} />
                <span className="hidden sm:block">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Life at SWIAT — photo wall */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Life at SWIAT</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              Beyond the work
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">Add photos from team events, office moments, and celebrations here.</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {activityPhotos.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <PhotoBox label={p.label} tall={p.tall} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white text-2xl">
              What we offer
            </h2>
            <p className="text-zinc-600 text-xs mt-2">Update these with your real benefits.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🏠", perk: "Flexible / hybrid working" },
              { emoji: "📈", perk: "Meaningful equity participation" },
              { emoji: "🧠", perk: "Learning & development budget" },
              { emoji: "🌴", perk: "Generous holiday allowance" },
              { emoji: "🍕", perk: "Regular team events & lunches" },
              { emoji: "🎓", perk: "Conference & training access" },
            ].map(p => (
              <div key={p.perk} className="flex items-center gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-3.5">
                <span className="text-lg">{p.emoji}</span>
                <span className="text-zinc-300 text-sm font-medium">{p.perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-4xl mb-6 block">👋</span>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Sound like your kind of place?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We are always open to hearing from exceptional people — even if the right role is not listed yet. Drop us a line.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://swiat.kenjo.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                View open roles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
