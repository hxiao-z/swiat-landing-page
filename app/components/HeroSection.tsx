"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const NetworkVisual = dynamic(() => import("./NetworkVisual"), { ssr: false });

const stats = [
  { value: 700, prefix: "", suffix: "+", label: "Million EUR in Settlement Volume" },
  { value: 50,  prefix: ">", suffix: "",  label: "Financial Entities Onboarded" },
  { value: 20,  prefix: "", suffix: "+",  label: "Digital Landmark Transactions" },
];

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
        <span className="font-bold text-xl text-[#7AC0CD] tracking-tight">Bank</span>
      </div>
    ),
  },
];

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, to]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 overflow-hidden bg-black pb-12">
      {/* Animated cube network background */}
      <NetworkVisual />

      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[radial-gradient(ellipse_at_bottom,_#1a4a52_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6 pt-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
        >
          The <span style={{ color: "#7AC0CD" }}>Largest</span> Blockchain Ecosystem
          <br />for Financial Services
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          A blockchain-based financial market infrastructure for digital and traditional assets from and for regulated financial entities.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 sm:gap-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-zinc-500 text-center max-w-[120px] leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="/contact"
            className="flex items-center gap-2 bg-transparent border border-white/30 hover:border-[#7AC0CD] text-white font-semibold px-10 py-3 rounded-lg transition-colors text-base"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-full border-t border-white/8"
        />

        {/* Shareholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="w-full"
        >
          <p className="text-sm font-semibold text-[#7AC0CD] uppercase tracking-widest mb-5">Our Shareholders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shareholders.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
                className="flex items-center justify-center bg-white/4 border border-white/8 rounded-2xl px-6 py-5 hover:border-[#7AC0CD]/30 hover:bg-white/6 transition-all"
              >
                {s.display}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  );
}
