"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── diagram constants ─────────────────────────────────────────────────────────
const Cx = 145, Cy = 270, Cr = 72;   // center circle
const Tx = 268;                        // trunk x (branching spine)
const Nr = 40;                         // node radius

const nodes = [
  { id: "n0", cy:  72, ncx: 385, l1: "Tokenised",          l2: "Assets"      },
  { id: "n1", cy: 178, ncx: 440, l1: "Crypto",             l2: "Assets"      },
  { id: "n2", cy: 270, ncx: 450, l1: "Crypto",             l2: "Securities"  },
  { id: "n3", cy: 363, ncx: 438, l1: "Digital Registered", l2: "Bonds"       },
  { id: "n4", cy: 460, ncx: 385, l1: "Traditional",        l2: "Securities"  },
];

// Heroicon 24×24 paths for each node
const iconPaths: Record<string, string> = {
  n0: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01",
  n1: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  n2: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  n3: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  n4: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

function elbowPath(n: { cy: number; ncx: number }): string {
  const x0 = Cx + Cr, y0 = Cy;
  const x2 = n.ncx - Nr;
  if (Math.abs(n.cy - y0) < 5) return `M ${x0},${y0} L ${x2},${n.cy}`;
  return `M ${x0},${y0} L ${Tx},${y0} L ${Tx},${n.cy} L ${x2},${n.cy}`;
}

// ── bullet content ────────────────────────────────────────────────────────────
const bullets = [
  "Issue, trade and settle all digital asset types on the same platform",
  "Reduce costs up to 80%",
  "Settle securities globally in real-time",
  "Manage intraday liquidity, and more!",
];

// ── component ─────────────────────────────────────────────────────────────────
export default function AssetsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0a1628] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: text ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-[#7AC0CD] uppercase tracking-widest mb-4">
            Platform Benefits
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Faster, cheaper,<br />
            more transparent<br />
            and more secure
          </h2>
          <p className="text-sm font-medium text-[#7AC0CD] mb-5">
            For assets on the SWIAT transaction platform:
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#7AC0CD]" />
                {b}
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="inline-block border border-white/30 hover:border-[#7AC0CD] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            Details
          </motion.a>
        </motion.div>

        {/* ── Right: animated SVG diagram ───────────────────────────────────── */}
        <div>
          <svg
            viewBox="0 0 640 540"
            className="w-full max-w-[560px] mx-auto lg:mx-0"
            style={{ overflow: "visible" }}
          >
            {/* Hidden path defs used by animateMotion */}
            <defs>
              {nodes.map(n => (
                <path key={n.id} id={`ap-${n.id}`} d={elbowPath(n)} />
              ))}
            </defs>

            {/* Connection paths — draw-in on scroll */}
            {nodes.map((n, i) => (
              <motion.path
                key={`line-${n.id}`}
                d={elbowPath(n)}
                stroke="#7AC0CD"
                strokeWidth="1.5"
                fill="none"
                strokeOpacity={0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.14, ease: "easeOut" }}
              />
            ))}

            {/* Junction dots at trunk x */}
            {nodes.filter(n => Math.abs(n.cy - Cy) > 5).map((n, i) => (
              <motion.circle
                key={`jdot-${n.id}`}
                cx={Tx} cy={n.cy} r={4}
                fill="#7AC0CD"
                style={{ transformOrigin: `${Tx}px ${n.cy}px` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.6 } : {}}
                transition={{ duration: 0.3, delay: 1.0 + i * 0.14 }}
              />
            ))}

            {/* Pulse dots sliding along each path */}
            {nodes.map((n, i) =>
              [0, 1].map(j => (
                <circle key={`pdot-${n.id}-${j}`} r="2.5" fill="#7AC0CD" opacity="0.9">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <animateMotion
                    dur={`${2.6 + i * 0.25}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.45 + j * 1.3}s`}
                  >
                    {/* @ts-ignore */}
                    <mpath href={`#ap-${n.id}`} />
                  </animateMotion>
                </circle>
              ))
            )}

            {/* Center pulse rings */}
            {[{ r: Cr + 22, dur: 3.6, del: 0 }, { r: Cr + 10, dur: 2.9, del: 0.5 }].map((ring, i) => (
              <motion.circle
                key={`ring-${i}`}
                cx={Cx} cy={Cy} r={ring.r}
                fill="none" stroke="#7AC0CD" strokeWidth="0.8"
                style={{ transformOrigin: `${Cx}px ${Cy}px` }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.04, 0.18] }}
                transition={{ duration: ring.dur, repeat: Infinity, delay: ring.del, ease: "easeInOut" }}
              />
            ))}

            {/* Center circle */}
            <motion.g
              style={{ transformOrigin: `${Cx}px ${Cy}px` }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", damping: 12 }}
            >
              <circle
                cx={Cx} cy={Cy} r={Cr}
                fill="#003946"
                stroke="#7AC0CD" strokeWidth="1.5" strokeOpacity="0.55"
              />
              <text
                x={Cx} y={Cy + 7}
                textAnchor="middle"
                fill="white"
                fontSize="17"
                fontWeight="bold"
                fontFamily="Poppins, sans-serif"
              >
                Assets
              </text>
            </motion.g>

            {/* Node circles + icons + labels */}
            {nodes.map((n, i) => (
              <g key={`node-${n.id}`}>
                <motion.g
                  style={{ transformOrigin: `${n.ncx}px ${n.cy}px` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.14, type: "spring", damping: 12 }}
                >
                  <circle
                    cx={n.ncx} cy={n.cy} r={Nr}
                    fill="#003946"
                    stroke="#7AC0CD" strokeWidth="1.4" strokeOpacity="0.55"
                  />
                  {/* Icon centered in node */}
                  <foreignObject
                    x={n.ncx - 12} y={n.cy - 12}
                    width="24" height="24"
                    style={{ overflow: "visible" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#7AC0CD"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ width: 24, height: 24, opacity: 0.85 }}
                    >
                      <path d={iconPaths[n.id]} />
                    </svg>
                  </foreignObject>
                </motion.g>

                {/* Text labels */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.14 }}
                >
                  <text
                    x={n.ncx + Nr + 10} y={n.cy - 3}
                    fill="white" fontSize="12" fontWeight="600"
                    fontFamily="Poppins, sans-serif"
                  >
                    {n.l1}
                  </text>
                  <text
                    x={n.ncx + Nr + 10} y={n.cy + 14}
                    fill="#7AC0CD" fontSize="12" fontWeight="600"
                    fontFamily="Poppins, sans-serif"
                  >
                    {n.l2}
                  </text>
                </motion.g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
