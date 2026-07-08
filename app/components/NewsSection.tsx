"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { top3Articles, categoryColors } from "../lib/newsData";

export default function NewsSection() {
  return (
    <section id="resources" className="bg-[#050e1d] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold text-[#7AC0CD] uppercase tracking-widest mb-2">Latest News</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Press & Announcements</h2>
          </div>
          <Link href="/news" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {top3Articles.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                href={n.external ? n.href : "/news"}
                target={n.external ? "_blank" : undefined}
                rel={n.external ? "noopener noreferrer" : undefined}
                className="group bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col gap-4 hover:border-[#7AC0CD]/40 hover:bg-white/5 transition-all h-full"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500">{n.date}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[n.category]}`}>
                    {n.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-[#7AC0CD] transition-colors flex-1">
                  {n.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{n.description}</p>
                <span className="text-[#7AC0CD] text-sm font-medium">Read more →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
