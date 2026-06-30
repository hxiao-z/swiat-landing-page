import Navbar from "./components/Navbar";
import GlobeWrapper from "./components/GlobeWrapper";

const useCases = [
  { icon: "🏦", title: "Digital Bonds", desc: "Issue and settle digital bonds on a shared infrastructure with full regulatory compliance." },
  { icon: "🪙", title: "Asset Tokenization", desc: "Tokenize real-world assets and enable fractionalized ownership at institutional scale." },
  { icon: "🔄", title: "Collateral Management", desc: "Automate collateral movements with real-time settlement and reduced counterparty risk." },
  { icon: "💵", title: "Stablecoins", desc: "Operate euro-denominated stablecoins within a regulated, interoperable framework." },
  { icon: "🏛️", title: "Central Bank Money", desc: "Integrate wholesale CBDC flows directly into existing payment infrastructure." },
  { icon: "📂", title: "Digital Funds", desc: "Streamline fund issuance, transfer, and redemption on programmable rails." },
];

const news = [
  {
    date: "Jun 2025",
    tag: "Partnership",
    title: "Swiat joins forces with leading European custodians to expand settlement reach",
  },
  {
    date: "Apr 2025",
    tag: "Milestone",
    title: "First live digital bond issuance completed on the Swiat network",
  },
  {
    date: "Feb 2025",
    tag: "Announcement",
    title: "Swiat network goes into public beta with 12 founding member institutions",
  },
];

const participants = [
  "Deutsche Bank", "BNP Paribas", "Societe Generale", "Commerzbank",
  "DZ Bank", "Helaba", "LBBW", "Nord/LB", "DekaBank", "BayernLB",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-0 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-6 px-3 py-1 rounded-full border border-blue-200 bg-blue-50">
            Now in public beta
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
            An open, neutral network for the{" "}
            <span className="text-blue-600">financial industry.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
            Swiat provides shared blockchain infrastructure for financial institutions — enabling digital asset settlement, tokenization, and programmable finance at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base text-center"
            >
              Express Interest
            </a>
            <a
              href="#usecases"
              className="border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-colors text-base text-center"
            >
              Explore Use Cases
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center -mb-16 lg:-mb-24">
          <GlobeWrapper />
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-100 py-12 px-6 mt-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "12+", label: "Member institutions" },
            { value: "150+", label: "Countries connected" },
            { value: "€2.4B+", label: "Settled on-chain" },
            { value: "99.99%", label: "Network uptime" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Use Cases</p>
          <h2 className="text-4xl font-bold mb-4">Built for institutional workflows</h2>
          <p className="text-gray-500 mb-16 max-w-xl">
            From issuance to settlement, Swiat powers the full lifecycle of digital financial instruments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="border border-gray-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-base font-semibold mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participants */}
      <section id="participants" className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Participants</p>
          <h2 className="text-4xl font-bold mb-4">Trusted by leading institutions</h2>
          <p className="text-gray-500 mb-16 max-w-xl">
            Swiat is co-owned and operated by a consortium of major European financial institutions.
          </p>
          <div className="flex flex-wrap gap-3">
            {participants.map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">News</p>
          <h2 className="text-4xl font-bold mb-16">Latest updates</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {news.map((n) => (
              <a
                key={n.title}
                href="#"
                className="py-8 flex flex-col sm:flex-row sm:items-center gap-4 group"
              >
                <div className="flex gap-3 items-center sm:w-48 shrink-0">
                  <span className="text-xs text-gray-400">{n.date}</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{n.tag}</span>
                </div>
                <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">{n.title}</p>
                <svg className="ml-auto shrink-0 w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to join the network?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Connect with our team to learn how Swiat can integrate with your institution.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold px-10 py-4 rounded-xl transition-colors text-base"
          >
            Express Interest
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto gap-4">
        <span className="font-bold text-gray-900 text-base">Swiat<span className="text-blue-600">.</span></span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Imprint</a>
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">LinkedIn</a>
        </div>
        <span>© {new Date().getFullYear()} Swiat. All rights reserved.</span>
      </footer>
    </div>
  );
}
