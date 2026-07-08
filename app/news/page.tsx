"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles, categoryColors } from "../lib/newsData";

const years = [...new Set(articles.map(a => a.year))].sort((a, b) => b - a);

export default function NewsPage() {
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const filtered = articles.filter(a => activeYear === "all" || a.year === activeYear);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Page header */}
      <section className="relative bg-[#050e1d] border-b border-white/8 pt-14 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AC0CD]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs text-zinc-500 mb-5 tracking-wide">
            <span className="text-[#7AC0CD]">Company</span>
            <span className="mx-2 text-zinc-700">/</span>
            Press Release
          </p>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Press Release
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 text-sm max-w-xl mx-auto"
            >
              Stay up to date with SWIAT&apos;s milestones, partnerships, and product launches shaping the future of digital capital markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#07111f] border-b border-white/5 px-6 py-5 sticky top-[var(--nav-height,112px)] z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 items-center">
          {/* Year filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveYear("all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${activeYear === "all" ? "bg-[#7AC0CD] text-[#050e1d] border-[#7AC0CD]" : "text-zinc-400 border-white/10 hover:border-[#7AC0CD]/40 hover:text-white"}`}
            >
              All years
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${activeYear === y ? "bg-[#7AC0CD] text-[#050e1d] border-[#7AC0CD]" : "text-zinc-400 border-white/10 hover:border-[#7AC0CD]/40 hover:text-white"}`}
              >
                {y}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Articles grid */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 mb-4">No articles match this filter.</p>
            <button
              onClick={() => setActiveYear("all")}
              className="text-[#7AC0CD] text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              >
                <Link
                  href={article.href}
                  target={article.external ? "_blank" : undefined}
                  rel={article.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col h-full bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#7AC0CD]/30 hover:bg-white/6 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    {article.external && (
                      <span className="text-[10px] text-zinc-600 font-medium">External</span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-[#7AC0CD] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-5">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/6">
                    <span className="text-zinc-600 text-xs">{article.date}</span>
                    <span className="text-[#7AC0CD] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
