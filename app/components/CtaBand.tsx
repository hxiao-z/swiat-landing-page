"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-[#003946]/25 border-y border-[#7AC0CD]/15 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8"
      >
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-white text-2xl sm:text-3xl leading-snug mb-2">
            Ready to go digital?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md">
            Talk to our team and find out how SWIAT fits your institution's digital asset strategy.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
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
    </section>
  );
}
