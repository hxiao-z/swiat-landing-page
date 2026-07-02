"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function SendinblueBadge() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle with stars */}
      <circle cx="40" cy="40" r="38" fill="#003399" opacity="0.15" />
      <circle cx="40" cy="40" r="34" fill="#003399" opacity="0.2" />
      {/* EU stars around the ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const r = 30;
        const cx = 40 + r * Math.cos(angle);
        const cy = 40 + r * Math.sin(angle);
        return (
          <text key={i} x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="6" fill="#FFD700">
            ★
          </text>
        );
      })}
      {/* Shield */}
      <path
        d="M40 18 L54 24 L54 38 C54 47 47 54 40 57 C33 54 26 47 26 38 L26 24 Z"
        fill="#1E40AF"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      {/* Checkmark inside shield */}
      <path
        d="M33 38 L38 43 L48 33"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && email) setSubmitted(true);
  };

  return (
    <section className="bg-[#07111f] border-t border-white/5 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/3 border border-white/8 rounded-2xl p-8 sm:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — heading + form */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3">Stay informed</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">SWIAT Newsletter</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Sign up for the SWIAT Newsletter to stay up to date and keep track of all recent developments and upcoming events.
              </p>

              {submitted ? (
                <div className="flex items-center gap-3 text-teal-400 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-teal-500/60 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>

                  <label className="flex gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border transition-all ${agreed ? "bg-teal-500 border-teal-500" : "bg-white/5 border-white/20 group-hover:border-teal-500/50"}`}>
                        {agreed && (
                          <svg className="w-2.5 h-2.5 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-zinc-400 leading-relaxed">
                      I want to receive the SWIAT Newsletter and I accept the{" "}
                      <a href="#" className="text-teal-400 hover:underline">data privacy guidelines</a>.
                      You can unsubscribe from the newsletter at any time via the link in our newsletter.
                    </span>
                  </label>
                </form>
              )}
            </div>

            {/* Right — Sendinblue compliance */}
            <div className="lg:w-72 border-t lg:border-t-0 lg:border-l border-white/8 pt-8 lg:pt-0 lg:pl-10 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <SendinblueBadge />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Wir verwenden Sendinblue als unsere Marketing-Plattform. Wenn Sie das Formular ausfüllen und absenden, bestätigen Sie, dass die von Ihnen angegebenen Informationen an Sendinblue zur Bearbeitung gemäß den{" "}
                  <a href="https://www.sendinblue.com/legal/termsofuse/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Nutzungsbedingungen
                  </a>{" "}
                  übertragen werden.
                </p>
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                We use Sendinblue as our marketing platform. By submitting this form, you acknowledge that the information you provided will be transferred to Sendinblue for processing in accordance with their{" "}
                <a href="https://www.sendinblue.com/legal/termsofuse/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
                  terms of use
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
