"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ── Icon library ─────────────────────────────────────────────────────────────

const icons = {
  tokenization: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  market: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  ),
  collateral: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  registry: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  build: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  access: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  baas: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  network: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  customers: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  // Products
  swiatRegistry: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  key: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  ccx: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  ecosystem: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  // Resources
  whitepaper: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  useCase: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  engage: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  conference: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  newsletter: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  // Company
  about: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  news: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  team: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  partners: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
    </svg>
  ),
  careers: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  contact: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  whyJoin: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  openPositions: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m6 8l-4 4-2-2" />
    </svg>
  ),
};

// ── Dropdown data ─────────────────────────────────────────────────────────────

type SubItem = { icon?: React.ReactNode; label: string; href: string };

type DropdownItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
  muted?: boolean;
  description?: string;
  subItems?: SubItem[];
};

type DropdownSection = {
  heading?: string;
  items: DropdownItem[];
};

type SimpleMenuConfig = {
  columns: { sections: DropdownSection[] }[];
  width: string;
};

type MegaMenuConfig = {
  columns: { heading: string; items: DropdownItem[] }[];
  width: string;
};

type NavItem = {
  label: string;
  href: string;
  mega?: MegaMenuConfig;
  simple?: SimpleMenuConfig;
};

const navItems: NavItem[] = [
  // 1 ── Solutions
  {
    label: "Solutions",
    href: "#solutions",
    mega: {
      width: "w-[540px]",
      columns: [
        {
          heading: "Digital Asset Solutions",
          items: [
            { icon: icons.tokenization, label: "Tokenisation & Settlement Software", href: "/solutions/tokenization" },
            { icon: icons.registry, label: "Registry Services", href: "/solutions/registry-services" },
          ],
        },
        {
          heading: "Digital Collateral Solutions",
          items: [
            { icon: icons.collateral, label: 'Collateral ConneX ("CCX")', href: "/solutions/collateral-management" },
          ],
        },
      ],
    },
  },

  // 2 ── SWIAT Services
  {
    label: "SWIAT Services",
    href: "#swiat-services",
    simple: {
      width: "w-[340px]",
      columns: [
        {
          sections: [
            {
              heading: "SWIAT Services",
              items: [
                {
                  icon: icons.access,
                  label: "Access & Connectivity",
                  href: "/solutions/swiat-access",
                  description: "Connect your institution to the SWIAT network.",
                },
                {
                  icon: icons.network,
                  label: "RL1 Network Operator",
                  href: "https://rl1.network/",
                  description: "The regulated layer 1 blockchain network powering SWIAT.",
                },
                {
                  icon: icons.baas,
                  label: "Trade Guardian Compliance Solution",
                  href: "/services/trade-guardian",
                  description: "Compliance and trade monitoring on regulated infrastructure.",
                },
                {
                  icon: icons.whitepaper,
                  label: "Prof. Services & Advisory",
                  href: "/services/advisory",
                  description: "Hands-on support for integration, architecture, and go-live.",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  // 3 ── Resources
  {
    label: "Resources",
    href: "#resources",
    simple: {
      width: "w-[380px]",
      columns: [
        {
          sections: [
            {
              heading: "Content",
              items: [
                { icon: icons.whitepaper, label: "Research & Whitepapers", href: "/solutions/research" },
                { icon: icons.useCase, label: "Use Cases", href: "/use-cases" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              heading: "Engage",
              items: [
                { icon: icons.conference, label: "SWIAT Conference", href: "/conference" },
                { icon: icons.partners, label: "Partnership", href: "/partnership" },
                { icon: icons.newsletter, label: "Newsletter", href: "/contact#newsletter" },
              ],
            },
          ],
        },
      ],
    },
  },

  // 4 ── Company
  {
    label: "Company",
    href: "#company",
    simple: {
      width: "w-[380px]",
      columns: [
        {
          sections: [
            {
              heading: "About Us",
              items: [
                { icon: icons.about, label: "About SWIAT", href: "/about" },
                { icon: icons.team, label: "Team", href: "/team" },
                { icon: icons.news, label: "Press Release", href: "/news" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              heading: "Careers",
              items: [
                { icon: icons.whyJoin, label: "Why join us", href: "/careers/why-join-us" },
                { icon: icons.openPositions, label: "Open Positions", href: "https://swiat.kenjo.io/" },
                { icon: icons.contact, label: "Contact Us", href: "/contact" },
              ],
            },
          ],
        },
      ],
    },
  },
];

// ── Dropdown panels ──────────────────────────────────────────────────────────

function MegaDropdownPanel({ config, onClose }: { config: MegaMenuConfig; onClose: () => void }) {
  return (
    <div className={`${config.width} bg-[#003946] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
      <div className="grid divide-x divide-white/8 p-6" style={{ gridTemplateColumns: `repeat(${config.columns.length}, minmax(0, 1fr))` }}>
        {config.columns.map((col, ci) => (
          <div key={ci} className={ci > 0 ? "pl-8" : ""}>
            {col.heading && <p className="text-xs font-semibold text-[#7AC0CD] uppercase tracking-widest mb-5">{col.heading}</p>}
            <ul className="flex flex-col gap-1">
              {col.items.map((item, ii) => (
                <li key={ii}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="mt-0.5 shrink-0 text-[#7AC0CD]/70 group-hover:text-[#7AC0CD] transition-colors">{item.icon}</span>
                    <span className={`text-sm leading-snug transition-colors ${item.muted ? "text-zinc-500 group-hover:text-zinc-300" : "text-zinc-300 group-hover:text-white"}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleDropdownPanel({ config, onClose }: { config: SimpleMenuConfig; onClose: () => void }) {
  return (
    <div className={`${config.width} bg-[#003946] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
      <div className={`grid divide-x divide-white/8 p-4 gap-0`} style={{ gridTemplateColumns: `repeat(${config.columns.length}, minmax(0, 1fr))` }}>
        {config.columns.map((col, ci) => (
          <div key={ci} className={ci > 0 ? "pl-4" : ""}>
            {col.sections.map((section, si) => (
              <div key={si}>
                {section.heading && (
                  <p className="text-xs font-semibold text-[#7AC0CD] uppercase tracking-widest px-3 pb-2 pt-1">{section.heading}</p>
                )}
                <ul className="flex flex-col gap-0.5">
                  {section.items.map((item, ii) => (
                    <li key={ii}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <span className="mt-0.5 shrink-0 text-[#7AC0CD]/70 group-hover:text-[#7AC0CD] transition-colors">{item.icon}</span>
                        <div>
                          <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors block">{item.label}</span>
                          {item.description && (
                            <span className="text-xs text-zinc-500 leading-relaxed mt-1 block">{item.description}</span>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`relative transition-all duration-300 ${
        scrolled ? "bg-[#003946]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-[#003946]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/swiat-logo-white.svg" alt="SWIAT" width={120} height={72} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const hasDropdown = !!(item.mega || item.simple);
            const isActive = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                onMouseLeave={() => hasDropdown && closeDropdown()}
              >
                {hasDropdown ? (
                  <button className={`flex items-center gap-1 font-[family-name:var(--font-poppins)] text-base font-semibold transition-colors ${isActive ? "text-[#7AC0CD]" : "text-white hover:text-[#7AC0CD]"}`}>
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="font-[family-name:var(--font-poppins)] text-base font-semibold text-white hover:text-[#7AC0CD] transition-colors">
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {isActive && hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      className={`absolute top-full mt-3 z-50 ${item.mega ? "left-1/2 -translate-x-1/2" : "left-0"}`}
                    >
                      {item.mega && <MegaDropdownPanel config={item.mega} onClose={() => setActiveDropdown(null)} />}
                      {item.simple && <SimpleDropdownPanel config={item.simple} onClose={() => setActiveDropdown(null)} />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="flex items-center gap-2 bg-[#7AC0CD] hover:bg-[#93cfd9] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#003946] border-t border-white/10 px-6 py-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-poppins)] text-base font-semibold text-white mb-2">{item.label}</p>
              {item.mega && (
                <div className="pl-2 flex flex-col gap-1">
                  {item.mega.columns.flatMap(col => col.items).map((i, idx) => (
                    <Link key={idx} href={i.href} className="flex items-center gap-2 py-1.5 text-sm text-zinc-400 hover:text-[#7AC0CD]" onClick={() => setMobileOpen(false)}>
                      <span className="text-[#7AC0CD]/60">{i.icon}</span>{i.label}
                    </Link>
                  ))}
                </div>
              )}
              {item.simple && (
                <div className="pl-2 flex flex-col gap-1">
                  {item.simple.columns.flatMap(col => col.sections.flatMap(s => s.items)).map((i, idx) => (
                    <div key={idx}>
                      <Link href={i.href} className="flex items-center gap-2 py-1.5 text-sm text-zinc-400 hover:text-[#7AC0CD]" onClick={() => setMobileOpen(false)}>
                        <span className="text-[#7AC0CD]/60">{i.icon}</span>{i.label}
                      </Link>
                      {i.subItems?.map((sub, si) => (
                        <Link key={si} href={sub.href} className="flex items-center gap-2 py-1 pl-6 text-xs text-zinc-500 hover:text-[#7AC0CD]" onClick={() => setMobileOpen(false)}>
                          {sub.icon && <span className="text-[#7AC0CD]/40">{sub.icon}</span>}{sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="bg-[#7AC0CD] text-white font-semibold px-4 py-2.5 rounded-lg text-center mt-2" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
