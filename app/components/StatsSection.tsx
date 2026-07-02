"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 700, suffix: "+", label: "Million EUR in Settlement Volume", prefix: "" },
  { value: 50, suffix: "+", label: "Years of Combined Experience", prefix: "" },
  { value: 20, suffix: "+", label: "Digital Landmark Transactions", prefix: "" },
];

function Counter({ to, suffix, prefix }: { to: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0a1628] py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="text-5xl font-bold text-white mb-3 tracking-tight">
              <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-14"
      >
        <a
          href="#contact"
          className="flex items-center gap-2 bg-[#0f2a50] border border-white/10 hover:border-teal-500/50 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          Contact Us →
        </a>
      </motion.div>
    </section>
  );
}
