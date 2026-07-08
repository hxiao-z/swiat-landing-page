"use client";

import { motion } from "framer-motion";

export default function TeamDiversity() {
  return (
    <>
      {/* Diversity pie charts */}
      <section className="bg-[#07111f] border-t border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-2">Diversity</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Our People
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Gender pie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 text-center">
                <p className="text-white font-bold text-base">Female – <span className="text-[#a8d44d]">10</span></p>
                <p className="text-white font-bold text-base">Male – <span className="text-[#7AC0CD]">24</span></p>
              </div>
              <svg viewBox="0 0 36 36" className="w-48 h-48 -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#7AC0CD" strokeWidth="3.5"
                  strokeDasharray="71 29" strokeDashoffset="25" />
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#a8d44d" strokeWidth="3.5"
                  strokeDasharray="29 71" strokeDashoffset="-46" />
              </svg>
              <div className="flex gap-5 mt-4">
                <span className="flex items-center gap-1.5 text-white font-semibold text-xs">
                  <span className="w-3 h-3 rounded-sm bg-[#7AC0CD] inline-block" />Male
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold text-xs">
                  <span className="w-3 h-3 rounded-sm bg-[#a8d44d] inline-block" />Female
                </span>
              </div>
            </motion.div>

            {/* Employment type pie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 text-center">
                <p className="text-white font-bold text-base">Part-time – <span className="text-[#a8d44d]">2</span></p>
                <p className="text-white font-bold text-base">Working students – <span className="text-[#a8d44d]">8</span></p>
                <p className="text-white font-bold text-base">Full time – <span className="text-[#7AC0CD]">24</span></p>
              </div>
              <svg viewBox="0 0 36 36" className="w-48 h-48 -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#7AC0CD" strokeWidth="3.5"
                  strokeDasharray="70 30" strokeDashoffset="25" />
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#a8d44d" strokeWidth="3.5"
                  strokeDasharray="6 94" strokeDashoffset="-45" />
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#8a9ba8" strokeWidth="3.5"
                  strokeDasharray="24 76" strokeDashoffset="-51" />
              </svg>
              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                <span className="flex items-center gap-1.5 text-white font-semibold text-xs">
                  <span className="w-3 h-3 rounded-sm bg-[#7AC0CD] inline-block" />Full time
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold text-xs">
                  <span className="w-3 h-3 rounded-sm bg-[#a8d44d] inline-block" />Part time
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold text-xs">
                  <span className="w-3 h-3 rounded-sm bg-[#8a9ba8] inline-block" />Working students
                </span>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-white/40 font-semibold text-xs mt-10">Data as of February 2026</p>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section className="bg-[#050e1d] border-t border-white/5 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold text-[#7AC0CD] uppercase tracking-widest mb-4">Join the Team</p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Are you interested?
            </h2>
            <p className="text-white font-semibold text-sm mb-8 max-w-md mx-auto">
              If you are interested in joining our team, take a look at the current open positions at SWIAT.
            </p>
            <a
              href="https://swiat.jobs.personio.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-[#050e1d] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              View Open Positions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
