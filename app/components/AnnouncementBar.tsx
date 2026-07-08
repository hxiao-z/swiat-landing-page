"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { latestArticle } from "../lib/newsData";

const NetworkVisual = dynamic(() => import("./NetworkVisual"), { ssr: false });

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-black text-white text-sm overflow-hidden"
        >
          <NetworkVisual blockCount={5} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 justify-center">
              <span className="text-[#7AC0CD] font-semibold shrink-0">🗞</span>
              <span className="text-zinc-200 truncate max-w-md sm:max-w-none">
                {latestArticle.title}
              </span>
              <Link
                href="/news"
                className="shrink-0 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full transition-colors"
              >
                Read more →
              </Link>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 text-white/50 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
