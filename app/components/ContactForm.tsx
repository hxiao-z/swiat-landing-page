"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-teal-500/60 focus:bg-white/8 transition-all";

const labelClass = "block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2";

export default function ContactForm() {
  const [newsletter, setNewsletter] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Message sent</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Thank you for reaching out. A member of the SWIAT team will be in touch with you shortly.
          </p>
          <a href="/" className="inline-block mt-8 text-sm text-teal-400 hover:text-teal-300 transition-colors">
            ← Back to home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3">Get in touch</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Whether you're a financial institution looking to join the network, a potential partner, or a member of the press — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First name <span className="text-teal-400">*</span></label>
                <input required type="text" placeholder="Jane" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last name <span className="text-teal-400">*</span></label>
                <input required type="text" placeholder="Smith" className={inputClass} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Work email <span className="text-teal-400">*</span></label>
              <input required type="email" placeholder="jane.smith@institution.com" className={inputClass} />
            </div>

            {/* Company & Role */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Company</label>
                <input type="text" placeholder="Institution name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Role</label>
                <input type="text" placeholder="e.g. Head of Digital Assets" className={inputClass} />
              </div>
            </div>

            {/* Topic */}
            <div>
              <label className={labelClass}>Topic <span className="text-teal-400">*</span></label>
              <select required defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select a topic</option>
                <option value="network">Joining the SWIAT network</option>
                <option value="partnership">Partnership inquiry</option>
                <option value="press">Press & media</option>
                <option value="technical">Technical question</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message <span className="text-teal-400">*</span></label>
              <textarea
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Privacy consent */}
            <label className="flex gap-3 cursor-pointer group">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  required
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded border transition-all ${privacy ? "bg-teal-500 border-teal-500" : "bg-white/5 border-white/20 group-hover:border-teal-500/50"}`}>
                  {privacy && (
                    <svg className="w-2.5 h-2.5 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-xs text-zinc-400 leading-relaxed">
                I have read and accept the{" "}
                <a href="#" className="text-teal-400 hover:underline">Privacy Policy</a>.
                The information I provide will be processed by SWIAT GmbH to respond to my enquiry. <span className="text-teal-400">*</span>
              </span>
            </label>

            <button
              type="submit"
              className="mt-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm self-start"
            >
              Send message →
            </button>
          </motion.form>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact info */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-7">
              <h3 className="text-white font-semibold mb-5">SWIAT GmbH</h3>
              <div className="flex flex-col gap-4 text-sm text-zinc-400">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Frankfurt am Main, Germany</span>
                </div>
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@swiat.io" className="hover:text-teal-400 transition-colors">info@swiat.io</a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Fraud warning */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-7">
              <div className="flex gap-3 items-start mb-4">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h4 className="text-amber-400 font-semibold text-sm">Fraud Warning / Betrugswarnung</h4>
              </div>

              <div className="flex flex-col gap-4 text-xs text-zinc-400 leading-relaxed">
                {/* English */}
                <div>
                  <p className="text-zinc-300 font-medium mb-1.5">English</p>
                  <p className="mb-2">
                    SWIAT GmbH has received indications that unauthorised third parties are misusing our name and the SWIAT brand to contact private individuals, apparently with the intent of inducing them to share personal data or place orders in cryptocurrencies or other assets.
                  </p>
                  <p className="mb-1">Please be aware that:</p>
                  <ul className="list-disc list-inside space-y-1 mb-2 text-zinc-500">
                    <li>SWIAT GmbH does not serve private individuals or retail clients.</li>
                    <li>SWIAT GmbH does not operate a marketplace or trading platform for cryptocurrencies.</li>
                    <li>SWIAT GmbH does not process payouts or transactions in cryptocurrencies.</li>
                  </ul>
                  <p>
                    If you have been approached by someone claiming to represent SWIAT in this capacity, do not share personal data, do not transfer funds, and contact your local law enforcement if necessary.
                  </p>
                </div>

                <div className="border-t border-amber-500/10 pt-4">
                  <p className="text-zinc-300 font-medium mb-1.5">Deutsch</p>
                  <p className="mb-2">
                    Die SWIAT GmbH hat Hinweise darauf, dass unbefugte Dritte unter missbräuchlicher Verwendung unseres Namens oder der Marke SWIAT Kontakt zu Privatpersonen aufnehmen, um diese offenbar zur Weitergabe persönlicher Daten oder der Erteilung von Aufträgen in Kryptowerten o.a. zu veranlassen.
                  </p>
                  <p className="mb-1">Bitte beachten Sie:</p>
                  <ul className="list-disc list-inside space-y-1 mb-2 text-zinc-500">
                    <li>Die SWIAT GmbH betreut keine Privatpersonen oder Privatkunden.</li>
                    <li>Die SWIAT GmbH betreibt keinen Marktplatz oder Handelsplattform für Kryptowerte.</li>
                    <li>Die SWIAT GmbH verarbeitet keine Auszahlungen oder Transaktionen in Kryptowährungen.</li>
                  </ul>
                  <p>
                    Wenn Sie von jemandem kontaktiert wurden, der behauptet, SWIAT in dieser Eigenschaft zu vertreten, geben Sie bitte keine persönlichen Daten weiter, überweisen Sie kein Geld und wenden Sie sich bei Bedarf an die zuständigen Strafverfolgungsbehörden.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
