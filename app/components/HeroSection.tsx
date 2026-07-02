"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const NetworkVisual = dynamic(() => import("./NetworkVisual"), { ssr: false });

const stats = [
  { value: 700, prefix: "", suffix: "+", label: "Million EUR in Settlement Volume" },
  { value: 50,  prefix: ">", suffix: "",  label: "Financial Entities Onboarded" },
  { value: 20,  prefix: "", suffix: "+",  label: "Digital Landmark Transactions" },
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
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Animated cube network background */}
      <NetworkVisual />

      {/* Teal radial glow at bottom (matches screenshot) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[radial-gradient(ellipse_at_bottom,_#0d4a45_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/swiat-logo-white.svg" alt="SWIAT" width={140} height={84} priority />
        </motion.div>

        {/* Headline — serif, matches screenshot */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
        >
          The <span className="text-teal-400">Largest</span> Blockchain Ecosystem
          <br />for Financial Services
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          A blockchain-based financial market infrastructure for digital and traditional assets from and for regulated financial entities.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-12 sm:gap-20 mt-2"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-zinc-500 text-center max-w-[120px] leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="/contact"
            className="flex items-center gap-2 bg-transparent border border-white/30 hover:border-teal-400 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-base"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  );
}
