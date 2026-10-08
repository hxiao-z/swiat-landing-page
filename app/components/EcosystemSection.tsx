"use client";

import { motion } from "framer-motion";

const BANK = "M4 21h16M4 10h16M6 6l6-3 6 3M5 10v11M19 10v11M9 10v11M12 10v11M15 10v11";

function hex(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

function BankIcon({ x, y, size = 24, color = "#9ca3af" }: { x: number; y: number; size?: number; color?: string }) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d={BANK} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AP({ x, y, sub }: { x: number; y: number; sub?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={110} height={60} rx={6} fill="#003946" stroke="#7AC0CD" strokeWidth="1.8" />
      <BankIcon x={x + 37} y={y + 9} size={36} color="#7AC0CD" />
      {sub && (
        <text x={x + 55} y={y + 74} fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">{sub}</text>
      )}
    </g>
  );
}

function Product({ x, y, w = 96, h = 48, title, sub }: { x: number; y: number; w?: number; h?: number; title: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill="#003946" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.6" />
      <text x={x + w / 2} y={y + h / 2 - 4} fill="white" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">{title}</text>
      <text x={x + w / 2} y={y + h / 2 + 10} fill="#7AC0CD" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif" opacity="0.8">{sub}</text>
    </g>
  );
}

function Hex({ cx, cy, r = 32, role, anchor = "middle" }: { cx: number; cy: number; r?: number; role: string; anchor?: "middle" | "start" | "end" }) {
  const ty = cy + r + 12;
  const tx = anchor === "end" ? cx - r - 4 : anchor === "start" ? cx + r + 4 : cx;
  return (
    <g>
      <polygon points={hex(cx, cy, r)} fill="#0d1f35" stroke="#ffffff22" strokeWidth="1.2" />
      <BankIcon x={cx - 12} y={cy - 12} size={24} color="#9ca3af" />
      <text x={tx} y={ty} fill="#6b7280" fontSize="8" textAnchor={anchor} fontFamily="Poppins,sans-serif">{role}</text>
    </g>
  );
}

function Offchain({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={66} height={26} rx={4} fill="rgba(146,64,14,0.12)" stroke="rgba(217,119,6,0.4)" strokeWidth="1" />
      <text x={x + 33} y={y + 17} fill="#fcd34d" fontSize="9.5" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">{label}</text>
    </g>
  );
}

/* Only orthogonal (horizontal + vertical) paths */
function Conn({ d, teal = false, opacity = 0.18, dash = false }: { d: string; teal?: boolean; opacity?: number; dash?: boolean }) {
  return (
    <path d={d} fill="none" stroke={teal ? "#7AC0CD" : "#ffffff"}
      strokeWidth="1" strokeOpacity={opacity} strokeDasharray={dash ? "3 3" : undefined} />
  );
}

export default function EcosystemSection() {
  return (
    <section className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#7AC0CD] text-xs font-semibold uppercase tracking-widest mb-4">
            SWIAT Ecosystem
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            One network.{" "}
            <span style={{ color: "#7AC0CD" }}>Every participant</span> connected.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full overflow-x-auto rounded-2xl border border-white/8"
        >
          <svg viewBox="0 0 980 610" className="w-full min-w-[720px]" style={{ background: "#07111f", display: "block" }}>

            {/* ── Background zones ── */}
            <rect x="8"   y="8" width="178" height="522" rx="8" fill="#ffffff05" stroke="#ffffff14" strokeWidth="1" strokeDasharray="4 3" />
            <rect x="192" y="8" width="594" height="522" rx="8" fill="#003946"  fillOpacity="0.10" stroke="#7AC0CD"  strokeWidth="1.2" strokeOpacity="0.35" />
            <rect x="792" y="8" width="180" height="522" rx="8" fill="#ffffff03" stroke="#ffffff10" strokeWidth="1" strokeDasharray="4 3" />
            {/* RL1 strip */}
            <rect x="0" y="538" width="980" height="72" fill="#003946" fillOpacity="0.22" />
            <line x1="0" y1="538" x2="980" y2="538" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.28" />

            {/* ── Zone labels ── */}
            <text x="18"  y="26" fill="#7AC0CD" fontSize="9" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1.5">PAYMENT SOLUTIONS</text>
            <text x="202" y="518" fill="#7AC0CD" fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">SWIAT Ecosystem</text>
            <text x="862" y="24"  fill="#6b7280" fontSize="9" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1.5">OFFCHAIN</text>
            <text x="12"  y="554" fill="#6b7280" fontSize="9" fontFamily="Poppins,sans-serif">DLT Infrastructure & Tech</text>
            <text x="852" y="554" fill="#6b7280" fontSize="9" fontFamily="Poppins,sans-serif">Platform</text>

            {/* RL1 dots */}
            {[[548,574],[560,585],[572,574],[584,585],[596,574],[608,585],[620,574],[536,585],[632,585]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill="#7AC0CD" opacity={0.22 + i * 0.055} />
            ))}
            <text x="646" y="583" fill="#7AC0CD" fontSize="11.5" fontWeight="600" fontFamily="Poppins,sans-serif">Regulated Layer One</text>

            {/* ── LEFT: Payment Solutions ── */}
            <rect x="16" y="42" width="162" height="32" rx="16" fill="#1e3a5f" stroke="#3b6fa0" strokeWidth="1" />
            <circle cx="36" cy="58" r="9" fill="#1d4ed8" />
            <text x="36" y="62" fill="white" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="700">€</text>
            <text x="106" y="62" fill="#93c5fd" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">Pontes & Appia</text>

            <rect x="16" y="84" width="162" height="32" rx="16" fill="#2d1f45" stroke="#7c3aed" strokeWidth="1" />
            <text x="98" y="104" fill="#c4b5fd" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">kinexys · J.P. Morgan</text>

            <rect x="16" y="126" width="162" height="32" rx="16" fill="#1c1f2e" stroke="#374151" strokeWidth="1" />
            <circle cx="36" cy="142" r="9" fill="#374151" />
            <text x="36" y="146" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">◎</text>
            <text x="106" y="146" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="Poppins,sans-serif">Other Stablecoins</text>

            {/* SWIAT Sync box */}
            <rect x="86" y="76" width="90" height="62" rx="8" fill="#003946" stroke="#7AC0CD" strokeWidth="1.5" />
            <text x="131" y="99"  fill="white"   fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="Poppins,sans-serif">swiat</text>
            <text x="131" y="113" fill="#7AC0CD" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="Poppins,sans-serif">Sync®</text>
            <text x="131" y="127" fill="#7AC0CD" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif" opacity="0.75">Atomic DvP</text>

            <line x1="18" y1="178" x2="182" y2="178" stroke="#ffffff12" strokeWidth="1" strokeDasharray="3 3" />

            <rect x="16" y="190" width="162" height="30" rx="5" fill="#ffffff06" stroke="#ffffff14" strokeWidth="1" />
            <text x="97" y="210" fill="#d1d5db" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">DLT-TSS</text>

            <rect x="16" y="230" width="162" height="30" rx="5" fill="#ffffff06" stroke="#ffffff14" strokeWidth="1" />
            <text x="97" y="250" fill="#d1d5db" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Stablecoins on RL1</text>

            <text x="97" y="285" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">... Other Solutions &</text>
            <text x="97" y="298" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">Ecosystems in RL1</text>

            {/* ── OFFCHAIN TOP ── */}
            <Offchain x={310} y={18} label="Seller" />
            <Offchain x={446} y={18} label="MTF" />
            <Offchain x={582} y={18} label="Buyer" />

            {/* Top horizontal connectors */}
            <Conn d="M 376 31 L 446 31" />
            <Conn d="M 512 31 L 582 31" />
            {/* Drop from Seller → Access Point left (vertical) */}
            <Conn d="M 343 44 L 343 70 L 313 70 L 313 88" />
            {/* Drop from Buyer → Access Point left (elbow) */}
            <Conn d="M 615 44 L 615 70 L 495 70 L 495 88" />

            {/* ── ACCESS POINT LEFT ── */}
            <AP x={258} y={88} />
            <text x="216" y="124" fill="#6b7280" fontSize="8" textAnchor="end" fontFamily="Poppins,sans-serif">Custodian</text>
            <text x="374" y="113" fill="#6b7280" fontSize="8" fontFamily="Poppins,sans-serif">Registrar &</text>
            <text x="374" y="124" fill="#6b7280" fontSize="8" fontFamily="Poppins,sans-serif">operator</text>

            {/* AP left → eWpG (teal, L-shaped) */}
            <Conn d="M 313 148 L 313 168 L 397 168 L 397 208" teal opacity={0.35} />
            {/* AP left → Lender (orthogonal: right then down) */}
            <Conn d="M 368 108 L 510 108 L 510 113" />

            {/* ── SWIAT PRODUCTS ── */}
            <Product x={349} y={208} title="eWpG" sub="SWIAT Registry" />
            <Product x={305} y={328} w={124} title="Tokenization" sub="Engine" />
            <Product x={648} y={212} w={96} title="CCX" sub="Collateral ConneX" />
            <Product x={656} y={330} w={84} h={44} title="eWpG" sub="Registry" />
            <Product x={754} y={330} w={76} h={44} title="wCBM" sub="Wholesale CBDC" />
            <Product x={590} y={432} w={76} h={40} title="dApp" sub="Applications" />

            {/* ── INSTITUTION HEXAGONS ── */}
            <Hex cx={510} cy={148} r={32} role="Lender"           anchor="start" />
            <Hex cx={592} cy={235} r={30} role="Investor"         anchor="start" />
            <Hex cx={468} cy={308} r={40} role="Issuer / Investor" anchor="end" />
            <Hex cx={400} cy={408} r={30} role="Investor"         anchor="end" />
            <Hex cx={555} cy={418} r={30} role="Investor"         anchor="middle" />
            <Hex cx={648} cy={418} r={30} role="Issuer"           anchor="middle" />
            <Hex cx={718} cy={468} r={28} role="User"             anchor="end" />

            {/* ── CLEAN CONNECTIONS (orthogonal only) ── */}

            {/* eWpG → Tokenization Engine (vertical drop) */}
            <Conn d="M 397 256 L 397 328" teal opacity={0.28} />
            {/* eWpG → Center large hex (L: down then right) */}
            <Conn d="M 397 256 L 397 280 L 428 280" />
            {/* eWpG → Investor A (horizontal) */}
            <Conn d="M 445 234 L 562 234" />
            {/* Tokenization Engine → Center hex (vertical up) */}
            <Conn d="M 429 328 L 429 308" />
            {/* Tokenization Engine → Investor C (L: down then right) */}
            <Conn d="M 367 376 L 367 408 L 370 408" />
            {/* Center hex → CCX (orthogonal: up then right) */}
            <Conn d="M 508 280 L 508 234 L 648 234" />
            {/* Center hex → Investor B (horizontal) */}
            <Conn d="M 508 295 L 562 295" />
            {/* eWpG 2 → wCBM (horizontal) */}
            <Conn d="M 740 352 L 754 352" />
            {/* CCX → right Access Point (orthogonal: right then up) */}
            <Conn d="M 744 234 L 786 234 L 786 148 L 800 148" teal opacity={0.28} />
            {/* wCBM → Central Bank AP (orthogonal: down then right) */}
            <Conn d="M 792 374 L 792 415 L 800 415" teal opacity={0.28} />

            {/* ── RIGHT OFFCHAIN ── */}
            <Offchain x={808} y={48} label="Buyer" />
            <AP x={800} y={88} sub="Access Point" />
            <Offchain x={920} y={112} label="Clients" />
            <Offchain x={920} y={228} label="Borrower" />
            <AP x={800} y={288} sub="Access Point" />
            <AP x={800} y={394} sub="Central Bank" />
            <text x="796" y="400" fill="#6b7280" fontSize="7.5" textAnchor="end" fontFamily="Poppins,sans-serif">Operator</text>
            <text x="796" y="410" fill="#6b7280" fontSize="7.5" textAnchor="end" fontFamily="Poppins,sans-serif">& Issuer</text>

            {/* Right side: clean orthogonal only */}
            {/* Buyer → AP right (L: right then down) */}
            <Conn d="M 841 61 L 855 61 L 855 88" />
            {/* AP right → Clients (horizontal) */}
            <Conn d="M 910 119 L 920 119" />
            {/* Borrower → AP center-right (L: left then down) */}
            <Conn d="M 920 241 L 910 241 L 910 288 L 910 288" />
            {/* AP center-right → AP Central Bank (vertical, dashed) */}
            <Conn d="M 855 348 L 855 394" dash opacity={0.14} />

            {/* ── LEGEND ── */}
            <g>
              <rect x="16" y="335" width="130" height="90" rx="6" fill="#ffffff04" stroke="#ffffff0e" strokeWidth="1" />
              <text x="24" y="350" fill="#6b7280" fontSize="8" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="0.5">LEGEND</text>
              <rect x="24" y="358" width="18" height="14" rx="3" fill="#003946" stroke="#7AC0CD" strokeWidth="1.5" />
              <text x="47" y="369" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">Access Point</text>
              <rect x="24" y="378" width="18" height="14" rx="3" fill="#003946" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.6" />
              <text x="47" y="389" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">SWIAT Product</text>
              <polygon points={hex(33, 410, 9)} fill="#0d1f35" stroke="#ffffff22" strokeWidth="1" />
              <text x="47" y="413" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">Institution</text>
            </g>

          </svg>
        </motion.div>
      </div>
    </section>
  );
}
