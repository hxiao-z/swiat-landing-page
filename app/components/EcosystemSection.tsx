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

function AccessPoint({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={110} height={60} rx={6} fill="#003946" stroke="#7AC0CD" strokeWidth="1.8" />
      <BankIcon x={x + 37} y={y + 9} size={36} color="#7AC0CD" />
      {label && (
        <text x={x + 55} y={y + 74} fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">
          {label}
        </text>
      )}
    </g>
  );
}

function Product({ x, y, w = 96, h = 48, title, sub }: { x: number; y: number; w?: number; h?: number; title: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill="#003946" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.65" />
      <text x={x + w / 2} y={y + h / 2 - 4} fill="white" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="Poppins,sans-serif">{title}</text>
      <text x={x + w / 2} y={y + h / 2 + 10} fill="#7AC0CD" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif" opacity="0.8">{sub}</text>
    </g>
  );
}

function HexNode({ cx, cy, r = 32, role, rolePos = "below" }: { cx: number; cy: number; r?: number; role: string; rolePos?: "above" | "below" | "left" | "right" }) {
  const offset = r + 12;
  const [rx2, ry2] = rolePos === "above" ? [cx, cy - offset] :
    rolePos === "left" ? [cx - offset, cy + 4] :
    rolePos === "right" ? [cx + offset, cy + 4] :
    [cx, cy + offset];
  return (
    <g>
      <polygon points={hex(cx, cy, r)} fill="#0d1f35" stroke="#ffffff22" strokeWidth="1.2" />
      <BankIcon x={cx - 12} y={cy - 12} size={24} color="#9ca3af" />
      <text x={rx2} y={ry2} fill="#6b7280" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">{role}</text>
    </g>
  );
}

function OffchainBox({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={70} height={28} rx={4} fill="rgba(146,64,14,0.12)" stroke="rgba(217,119,6,0.45)" strokeWidth="1" />
      <text x={x + 35} y={y + 18} fill="#fcd34d" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">{label}</text>
    </g>
  );
}

function Line({ d, opacity = 0.18, teal = false, dash = false }: { d: string; opacity?: number; teal?: boolean; dash?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={teal ? "#7AC0CD" : "#ffffff"}
      strokeWidth="1"
      strokeOpacity={opacity}
      strokeDasharray={dash ? "3 3" : undefined}
    />
  );
}

export default function EcosystemSection() {
  return (
    <section className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full overflow-x-auto rounded-2xl border border-white/8"
        >
          <svg
            viewBox="0 0 1000 640"
            className="w-full min-w-[720px]"
            style={{ background: "#07111f", display: "block" }}
          >
            {/* ── Background zones ── */}
            {/* Left: Payment Solutions */}
            <rect x="8" y="8" width="182" height="540" rx="8" fill="#ffffff05" stroke="#ffffff14" strokeWidth="1" strokeDasharray="4 3" />
            {/* Center: SWIAT Ecosystem */}
            <rect x="196" y="8" width="590" height="540" rx="8" fill="#003946" fillOpacity="0.10" stroke="#7AC0CD" strokeWidth="1.2" strokeOpacity="0.35" />
            {/* Right: Offchain */}
            <rect x="792" y="8" width="200" height="540" rx="8" fill="#ffffff03" stroke="#ffffff10" strokeWidth="1" strokeDasharray="4 3" />
            {/* Bottom: RL1 strip */}
            <rect x="0" y="554" width="1000" height="86" rx="0" fill="#003946" fillOpacity="0.22" />
            <line x1="0" y1="554" x2="1000" y2="554" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.28" />

            {/* ── Zone labels ── */}
            <text x="18" y="27" fill="#7AC0CD" fontSize="9" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1.5">PAYMENT SOLUTIONS</text>
            <text x="206" y="536" fill="#7AC0CD" fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">SWIAT Ecosystem</text>
            <text x="870" y="24" fill="#6b7280" fontSize="9" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="1.5">OFFCHAIN</text>
            <text x="12" y="570" fill="#6b7280" fontSize="9" fontFamily="Poppins,sans-serif">DLT Infrastructure & Tech</text>
            <text x="862" y="570" fill="#6b7280" fontSize="9" fontFamily="Poppins,sans-serif">Platform</text>

            {/* RL1 dots */}
            {[[558,597],[570,608],[582,597],[594,608],[606,597],[618,608],[630,597],[546,608],[642,608]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill="#7AC0CD" opacity={0.25 + i * 0.055} />
            ))}
            <text x="654" y="606" fill="#7AC0CD" fontSize="12" fontWeight="600" fontFamily="Poppins,sans-serif">Regulated Layer One</text>

            {/* ── LEFT: Payment Solutions ── */}

            {/* Pontes & Appia */}
            <rect x="16" y="42" width="162" height="32" rx="16" fill="#1e3a5f" stroke="#3b6fa0" strokeWidth="1" />
            <circle cx="36" cy="58" r="9" fill="#1d4ed8" />
            <text x="36" y="62" fill="white" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="700">€</text>
            <text x="106" y="62" fill="#93c5fd" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">Pontes & Appia</text>

            {/* Kinexys */}
            <rect x="16" y="84" width="162" height="32" rx="16" fill="#2d1f45" stroke="#7c3aed" strokeWidth="1" />
            <text x="98" y="104" fill="#c4b5fd" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Poppins,sans-serif">kinexys · J.P. Morgan</text>

            {/* Other Stablecoins */}
            <rect x="16" y="126" width="162" height="32" rx="16" fill="#1c1f2e" stroke="#374151" strokeWidth="1" />
            <circle cx="36" cy="142" r="9" fill="#374151" />
            <text x="36" y="146" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="Poppins,sans-serif">◎</text>
            <text x="106" y="146" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="Poppins,sans-serif">Other Stablecoins</text>

            {/* SWIAT Sync box */}
            <rect x="86" y="75" width="90" height="62" rx="8" fill="#003946" stroke="#7AC0CD" strokeWidth="1.5" />
            <text x="131" y="98" fill="white" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="Poppins,sans-serif">swiat</text>
            <text x="131" y="113" fill="#7AC0CD" fontSize="10" textAnchor="middle" fontWeight="600" fontFamily="Poppins,sans-serif">Sync®</text>
            <text x="131" y="128" fill="#7AC0CD" fontSize="7.5" textAnchor="middle" fontFamily="Poppins,sans-serif" opacity="0.75">Atomic DvP</text>

            {/* Divider */}
            <line x1="18" y1="178" x2="182" y2="178" stroke="#ffffff14" strokeWidth="1" strokeDasharray="3 3" />

            {/* DLT-TSS */}
            <rect x="16" y="190" width="162" height="30" rx="5" fill="#ffffff06" stroke="#ffffff14" strokeWidth="1" />
            <text x="97" y="210" fill="#d1d5db" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">DLT-TSS</text>

            {/* Stablecoins on RL1 */}
            <rect x="16" y="230" width="162" height="30" rx="5" fill="#ffffff06" stroke="#ffffff14" strokeWidth="1" />
            <text x="97" y="250" fill="#d1d5db" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="Poppins,sans-serif">Stablecoins on RL1</text>

            <text x="97" y="285" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">... Other Solutions &</text>
            <text x="97" y="298" fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="Poppins,sans-serif">Ecosystems in RL1</text>

            {/* ── OFFCHAIN TOP (above/inside ecosystem top) ── */}
            <OffchainBox x={315} y={18} label="Seller" />
            <OffchainBox x={449} y={18} label="MTF" />
            <OffchainBox x={583} y={18} label="Buyer" />

            {/* Seller–MTF–Buyer connector */}
            <Line d="M 385 32 L 449 32" />
            <Line d="M 519 32 L 583 32" />
            {/* Buyer down to ecosystem */}
            <Line d="M 618 46 L 618 70 L 500 70 L 500 88" />
            {/* Seller down */}
            <Line d="M 350 46 L 350 70 L 350 88" />

            {/* ── ACCESS POINT LEFT (Custodian / Registrar) ── */}
            <AccessPoint x={258} y={88} />
            <text x={215} y={125} fill="#6b7280" fontSize="8" textAnchor="end" fontFamily="Poppins,sans-serif">Custodian</text>
            <text x={375} y={115} fill="#6b7280" fontSize="8" fontFamily="Poppins,sans-serif">Registrar &</text>
            <text x={375} y={126} fill="#6b7280" fontSize="8" fontFamily="Poppins,sans-serif">operator</text>

            {/* Access Point left → products */}
            <Line d="M 313 148 L 313 170 L 397 170 L 397 208" teal opacity={0.3} />
            {/* Access Point left → Lender */}
            <Line d="M 368 108 L 515 115" />

            {/* ── SWIAT PRODUCTS ── */}
            <Product x={349} y={208} title="eWpG" sub="SWIAT Registry" />
            <Product x={305} y={328} w={124} title="Tokenization" sub="Engine" />
            <Product x={648} y={212} w={96} title="CCX" sub="Collateral ConneX" />
            <Product x={656} y={330} w={84} h={44} title="eWpG" sub="Registry" />
            <Product x={756} y={330} w={76} h={44} title="wCBM" sub="Wholesale CBDC" />
            <Product x={590} y={432} w={76} h={40} title="dApp" sub="Applications" />

            {/* CCX Borrower label */}
            <text x={660} y={265} fill="#6b7280" fontSize="8" fontFamily="Poppins,sans-serif">Borrower</text>

            {/* ── INSTITUTION HEXAGONS ── */}
            <HexNode cx={510} cy={148} r={32} role="Lender" rolePos="right" />
            <HexNode cx={592} cy={235} r={30} role="Investor" rolePos="right" />
            <HexNode cx={468} cy={308} r={40} role="Issuer / Investor" rolePos="left" />
            <HexNode cx={400} cy={405} r={30} role="Investor" rolePos="left" />
            <HexNode cx={555} cy={415} r={30} role="Investor" rolePos="below" />
            <HexNode cx={648} cy={415} r={30} role="Issuer" rolePos="below" />
            <HexNode cx={718} cy={468} r={28} role="User" rolePos="left" />

            {/* ── CONNECTIONS inside ecosystem ── */}
            {/* eWpG → Investor A */}
            <Line d="M 445 232 L 562 235" />
            {/* eWpG → Center large */}
            <Line d="M 397 256 L 397 278 L 428 278" />
            {/* Tokenization Engine → Center large */}
            <Line d="M 429 328 L 429 308 L 428 308" />
            {/* Tokenization Engine → Investor C */}
            <Line d="M 367 376 L 367 405 L 370 405" />
            {/* Center large → CCX (Borrower path) */}
            <Line d="M 508 308 L 550 265 L 648 240" />
            {/* Center large → Investor B */}
            <Line d="M 508 295 L 525 295" />
            {/* Center large → bottom investors */}
            <Line d="M 468 348 L 468 375 L 430 405" />
            <Line d="M 490 348 L 540 390" />
            {/* Investor B → Issuer */}
            <Line d="M 555 445 L 555 460 L 570 460 L 610 448" />
            {/* Issuer B → dApp */}
            <Line d="M 648 445 L 648 470 L 640 470 L 640 452" />
            {/* eWpG 2 → wCBM */}
            <Line d="M 740 352 L 756 352" />
            {/* CCX → right Access Point */}
            <Line d="M 744 236 L 870 175" teal opacity={0.28} />
            {/* wCBM → Central Bank Access Point */}
            <Line d="M 796 374 L 796 398 L 870 415" teal opacity={0.22} />

            {/* ── RIGHT OFFCHAIN ── */}

            <OffchainBox x={806} y={48} label="Buyer" />
            <AccessPoint x={870} y={90} label="Access Point" />
            <OffchainBox x={946} y={110} label="Clients" />
            <OffchainBox x={938} y={228} label="Borrower" />
            <AccessPoint x={870} y={288} label="Access Point" />
            <AccessPoint x={870} y={394} label="Central Bank" />
            <text x={802} y={398} fill="#6b7280" fontSize="8" textAnchor="end" fontFamily="Poppins,sans-serif">Operator</text>
            <text x={802} y={408} fill="#6b7280" fontSize="8" textAnchor="end" fontFamily="Poppins,sans-serif">& Issuer</text>

            {/* Right offchain connections */}
            <Line d="M 840 76 L 870 120" />
            <Line d="M 978 110 L 978 90 L 980 90 L 924 90" />
            <Line d="M 964 228 L 924 280" />
            <Line d="M 924 150 L 924 288" dash opacity={0.12} />
            <Line d="M 924 346 L 924 394" dash opacity={0.12} />

            {/* ── LEGEND ── */}
            <g transform="translate(16, 335)">
              <rect x="0" y="0" width="130" height="88" rx="6" fill="#ffffff04" stroke="#ffffff0e" strokeWidth="1" />
              <text x="8" y="14" fill="#6b7280" fontSize="8" fontWeight="600" fontFamily="Poppins,sans-serif" letterSpacing="0.5">LEGEND</text>
              {/* Access Point */}
              <rect x="8" y="22" width="18" height="14" rx="3" fill="#003946" stroke="#7AC0CD" strokeWidth="1.2" />
              <text x="30" y="32" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">Access Point</text>
              {/* Product */}
              <rect x="8" y="42" width="18" height="14" rx="3" fill="#003946" stroke="#7AC0CD" strokeWidth="1" strokeOpacity="0.6" />
              <text x="30" y="52" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">SWIAT Product</text>
              {/* Hex node */}
              <polygon points={hex(17, 70, 9)} fill="#0d1f35" stroke="#ffffff22" strokeWidth="1" />
              <text x="30" y="73" fill="#9ca3af" fontSize="8" fontFamily="Poppins,sans-serif">Institution</text>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
