"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function PhotoBox({ label, aspect = "landscape" }: { label: string; aspect?: "landscape" | "portrait" | "square" }) {
  const cls = aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-[16/9]";
  return (
    <div className={`w-full ${cls} bg-[#0a1e30] border border-white/8 rounded-2xl flex items-center justify-center overflow-hidden`}>
      <div className="text-center p-4">
        <svg className="w-6 h-6 text-[#7AC0CD]/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-zinc-700 text-xs">{label}</p>
      </div>
    </div>
  );
}

const pillars = [
  {
    title: "Europe's leading regulated platform",
    desc: "Neutral, trustworthy, and purpose-built for regulated financial institutions — connecting participants without vendor lock-in.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Built for financial institutions",
    desc: "Compliance, security, and operations are built in from day one — so institutions can participate without changing how they work.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Real transactions, real impact",
    desc: "€1B+ in settlement volume. 50+ institutions on the network. Live, regulated, and delivering results at scale.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const shareholders = [
  { name: "DekaBank", logo: "/deka-logo.svg", desc: "Germany's largest fund company, a founding shareholder and active network participant." },
  { name: "LBBW", logo: "/lbbw-logo.svg", desc: "Landesbank Baden-Württemberg — one of Germany's leading banks and a co-founder of SWIAT." },
  { name: "SC Ventures", logo: "/scventures-logo.svg", desc: "Standard Chartered's innovation and ventures unit, backing the future of financial infrastructure." },
  { name: "Comyno", logo: "/comyno-logo.svg", desc: "A leading capital markets technology firm and strategic partner in building the SWIAT platform." },
];

const timeline = [
  { year: "2022", event: "SWIAT founded in Frankfurt by a group of banking and technology veterans." },
  { year: "2023", event: "First live transaction on the SWIAT platform — a milestone for regulated digital asset settlement in Europe." },
  { year: "2023", event: "Inaugural SWIAT Conference. First annual gathering of founding members and network participants." },
  { year: "2024", event: "ECB DLT trials completed. SWIAT demonstrates wholesale settlement interoperability with central bank systems." },
  { year: "2025", event: "BaFin grants SWIAT the licence to operate a crypto-securities registry under eWpG. Network surpasses 50 financial entities." },
];

function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-[#7AC0CD] text-sm">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <div className="flex gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#7AC0CD]/60 transition-all"
        />
        <button
          type="submit"
          className="bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold px-6 py-3 rounded-xl transition-colors text-sm shrink-0"
        >
          Subscribe
        </button>
      </div>
      <label className="flex gap-3 cursor-pointer group text-left">
        <div className="relative mt-0.5 shrink-0">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
          <div className={`w-4 h-4 rounded border transition-all ${agreed ? "bg-[#7AC0CD] border-[#7AC0CD]" : "bg-white/5 border-white/20 group-hover:border-[#7AC0CD]/50"}`}>
            {agreed && (
              <svg className="w-2.5 h-2.5 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-xs text-zinc-400 leading-relaxed">
          I want to receive the SWIAT Newsletter and accept the{" "}
          <a href="#" className="text-[#7AC0CD] hover:underline">data privacy guidelines</a>.
          You can unsubscribe at any time.
        </span>
      </label>
    </form>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#050e1d] text-white">

      {/* Page header */}
      <section className="relative px-6 pt-14 pb-10 overflow-hidden border-b border-white/8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Company</span>
            <span className="mx-2 text-zinc-700">/</span>
            About SWIAT
          </p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-center max-w-3xl mx-auto">
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Europe&apos;s leading platform for digital capital markets
            </h1>
            <p className="text-zinc-300 text-base leading-relaxed mb-3 font-medium max-w-2xl mx-auto">
              SWIAT is a BaFin-regulated financial technology company headquartered in Frankfurt am Main — operating the most advanced platform for the issuance, trading, and settlement of digital assets in Europe.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              With over 50 financial institutions already on the network and €1B+ in settlement volume, we are setting the standard for how regulated capital markets move into the digital age.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Meet the team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Get in touch
              </Link>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#003946]/20 border-b border-[#7AC0CD]/10 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "€1B+", label: "EUR settlement volume" },
            { value: "50+", label: "Financial entities" },
            { value: "34", label: "People" },
            { value: "2022", label: "Founded" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[#7AC0CD] font-bold text-2xl">{s.value}</p>
              <p className="text-zinc-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Our Mission</p>
              <blockquote
                className="font-[family-name:var(--font-playfair)] text-white font-bold italic leading-snug mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                &ldquo;To build the leading platform for regulated digital assets — enabling secure, frictionless, real-time trading and settlement for every type of asset, for every institution, at global scale.&rdquo;
              </blockquote>
              <p className="text-zinc-400 leading-relaxed text-sm">
                That ambition has driven every product decision, every regulatory milestone, and every partnership since we were founded in 2022. We are not building for a niche — we are building for the future of capital markets.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <PhotoBox label="Upload image — Frankfurt / SWIAT office" aspect="portrait" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">What we do</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Pioneering digital finance in Europe
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">
              SWIAT is the neutral platform that brings institutions together — not a competitor, but the foundation they build on.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#7AC0CD]/25 hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center text-[#7AC0CD] mb-5">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Our Story</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              From idea to network
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7AC0CD]/40 via-[#7AC0CD]/20 to-transparent" />
            <div className="flex flex-col gap-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-full bg-[#003946] border-2 border-[#7AC0CD]/40 flex items-center justify-center">
                      <span className="text-[#7AC0CD] font-black text-[9px] leading-tight text-center">{t.year}</span>
                    </div>
                  </div>
                  <div className="pt-2.5 pb-2">
                    <p className="text-zinc-300 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shareholders */}
      <section className="py-24 px-6 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">Our Shareholders</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Backed by the institutions we serve
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">
              Our shareholders are not passive investors — they are active participants in the SWIAT network and co-builders of the standard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {shareholders.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center hover:border-[#7AC0CD]/20 transition-all flex flex-col items-center gap-4"
              >
                <div className="h-10 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg px-3 py-2 flex items-center justify-center w-24 h-10">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={80}
                      height={32}
                      className="object-contain max-h-7"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-zinc-800 font-bold text-xs">${s.name}</span>`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#003946]/30 border-t border-[#7AC0CD]/15 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Stay Informed</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
            >
              Follow our journey
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
              Get the latest updates from SWIAT — new milestones, research, and network developments delivered to your inbox.
            </p>
            <NewsletterInline />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
