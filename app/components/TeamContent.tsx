"use client";

import { motion } from "framer-motion";

const leadership = [
  {
    name: "Dr. Timo Reinschmidt",
    title: "CEO & Chief Commercial Officer",
    exp: "20+ years",
    detail: "Leadership across major international banks with deep customer and digital expertise.",
    initials: "TR",
    gradient: "from-[#003946] to-[#1a4a5c]",
  },
  {
    name: "Felix Miederer",
    title: "Co-CEO & Chief Operating Officer",
    exp: "20+ years",
    detail: "Digital transformation, operational excellence and regulatory compliance in financial services.",
    initials: "FM",
    gradient: "from-[#0d2b42] to-[#1a3a5c]",
  },
  {
    name: "Jonathan Leßmann",
    title: "Chief Marketing Officer & Head of Platform Strategy",
    exp: "8+ years",
    detail: "Digital finance and platform strategy specialist and keynote speaker in the DLT space.",
    initials: "JL",
    gradient: "from-[#1a2a46] to-[#0d2035]",
  },
  {
    name: "Ivica Aračić",
    title: "Chief Technology Officer",
    exp: "20+ years",
    detail: "Software engineering leader with 10+ years in blockchain and distributed ledger technology.",
    initials: "IA",
    gradient: "from-[#003946] to-[#0a2535]",
  },
  {
    name: "Johannes von Selle",
    title: "Chief Legal Officer",
    exp: "20+ years",
    detail: "Capital markets law expert overseeing legal, regulatory, compliance and HR matters.",
    initials: "JS",
    gradient: "from-[#1a3060] to-[#0d2048]",
  },
  {
    name: "Pragya Mohan",
    title: "Chief Product Officer",
    exp: "15+ years",
    detail: "Capital markets product lifecycle specialist with cross-stage delivery expertise.",
    initials: "PM",
    gradient: "from-[#0a2e35] to-[#1e4a52]",
  },
];

const advisory = [
  { name: "Dirk Kipp",      role: "Board of Managing Directors",              org: "LBBW" },
  { name: "Martin Müller",  role: "Board Member",                              org: "DekaBank Deutsche Girozentrale" },
  { name: "Henrik Raber",   role: "Global Head of Credit Markets",             org: "Standard Chartered Bank" },
  { name: "Jens Siebert",   role: "Partner, Future of Financial Services",     org: "KPMG Germany" },
  { name: "Markus Büttner", role: "CEO",                                       org: "Comyno" },
];


function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamContent() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#050e1d] border-b border-white/8 pt-14 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/teams-photo.jpeg')" }} />
        <div className="absolute inset-0 bg-[#050e1d]/75" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-400 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Company</span>
            <span className="mx-2 text-zinc-600">/</span>
            Team
          </p>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              The Team Behind SWIAT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-sm max-w-xl mx-auto"
            >
              A diverse group of capital markets veterans, engineers, and legal minds unified by one mission — making financial infrastructure smarter.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#0a1628] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-2">Leadership</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Executive Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/6 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${person.gradient} border border-[#7AC0CD]/25 flex items-center justify-center`}>
                    <span className="text-[#7AC0CD] font-bold text-lg tracking-tight">{person.initials}</span>
                  </div>
                  <a
                    href="#"
                    className="text-white/50 hover:text-[#7AC0CD] transition-colors mt-1"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>

                <h3 className="text-white font-bold text-base leading-snug mb-1 group-hover:text-[#7AC0CD] transition-colors">
                  {person.name}
                </h3>
                <p className="text-[#7AC0CD] text-xs font-bold mb-3">{person.title}</p>
                <p className="text-white font-semibold text-xs leading-relaxed mb-4">{person.detail}</p>

                <span className="inline-block text-[10px] font-bold text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {person.exp} experience
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-[#07111f] border-t border-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-2">Governance</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Advisory Board
            </h2>
            <p className="text-white font-semibold text-sm mt-2 max-w-lg">
              Industry leaders from Europe&apos;s most respected financial institutions guiding SWIAT&apos;s strategic direction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisory.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white/3 border border-white/8 rounded-2xl px-5 py-4 hover:border-[#7AC0CD]/25 hover:bg-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003946]/60 border border-[#7AC0CD]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#7AC0CD] text-xs font-bold">
                    {person.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{person.name}</p>
                  <p className="text-white font-semibold text-xs mt-0.5 leading-relaxed">{person.role}</p>
                  <p className="text-[#7AC0CD] text-xs mt-1 font-bold">{person.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
