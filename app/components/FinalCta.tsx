"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-[#050e1d] border-t border-white/5 py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-5">Get Started</p>
        <h2
          className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Ready to bring your institution on-chain?
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you are exploring digital securities, collateral mobility, or building your own application — our team will help you find the right path.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-8 py-4 rounded-xl transition-colors"
          >
            Talk to an expert
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/partnership"
            className="inline-flex items-center gap-2 border border-[#7AC0CD]/40 text-[#7AC0CD] hover:bg-[#7AC0CD]/10 font-semibold text-sm px-8 py-4 rounded-xl transition-colors"
          >
            Explore partnership
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
