"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Choose your token form", desc: "Select between security token, digitally registered bond, or bearer bond depending on your legal and operational requirements." },
  { step: "02", title: "Issue on SWIAT", desc: "Use the ready-to-use frontend or integrate via API to issue your tokenized asset directly on the SWIAT platform." },
  { step: "03", title: "Trade & settle", desc: "Enable secondary market trading with atomic DvP settlement — no intermediaries, no T+2 delay." },
  { step: "04", title: "Manage the full lifecycle", desc: "Handle coupon payments, corporate actions, and redemption in the same environment as your other digital assets." },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#050e1d] border-t border-white/5 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-3">How it works</p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            From issuance to redemption
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
            The complete asset lifecycle — managed in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/25 transition-all"
            >
              <span className="text-[#7AC0CD]/40 font-bold text-3xl leading-none block mb-3">{s.step}</span>
              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
