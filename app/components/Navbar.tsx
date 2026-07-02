"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Product", href: "#product" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1f3c]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0d1f3c]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/swiat-logo-white.svg" alt="SWIAT" width={120} height={72} priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Contact Us <span>→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1f3c] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-zinc-400">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-teal-500 text-white font-semibold px-4 py-2.5 rounded-lg text-center">
            Contact Us
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
