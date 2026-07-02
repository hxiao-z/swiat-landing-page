"use client";

import { motion } from "framer-motion";

const shareholders = [
  {
    name: "LBBW",
    display: (
      <span className="font-black text-2xl tracking-tight text-white">
        LB<span className="inline-block border-l-2 border-r-2 border-white mx-0.5 px-0.5">≡</span>BW
      </span>
    ),
  },
  {
    name: "SC Ventures",
    display: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white font-bold text-xs">V</div>
        <div className="leading-tight">
          <div className="font-bold text-white text-base tracking-wide">scventures</div>
          <div className="text-zinc-500 text-[10px]">by Standard Chartered</div>
        </div>
      </div>
    ),
  },
  {
    name: "COMYNO",
    display: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 border-2 border-orange-500 rounded flex items-center justify-center">
          <div className="w-3.5 h-3.5 border border-orange-500 rounded-sm" />
        </div>
        <span className="font-bold text-xl tracking-widest text-white">COMYNO</span>
      </div>
    ),
  },
  {
    name: "DekaBank",
    display: (
      <div className="leading-tight">
        <span className="font-bold text-xl text-white tracking-tight">Deka</span>
        <span className="font-bold text-xl text-teal-400 tracking-tight">Bank</span>
      </div>
    ),
  },
];

export default function ShareholdersSection() {
  return (
    <section className="relative bg-[#0a1628] pt-0 pb-24 px-6 overflow-hidden">
      {/* Gradient bridge from hero's teal glow */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0d2f2a] to-[#0a1628] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto pt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-teal-400 mb-5"
        >
          Our Shareholders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-400 text-sm sm:text-base max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Our esteemed shareholders who have joined our journey and are committed towards our goals and our shared vision in unlocking new opportunities in the landscape of digital assets.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shareholders.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center bg-white/4 border border-white/8 rounded-2xl px-6 py-8 hover:border-teal-500/30 hover:bg-white/6 transition-all"
            >
              {s.display}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
