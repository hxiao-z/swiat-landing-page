import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Solutions: ["Digital Bonds", "Asset Tokenization", "Collateral Management", "Stablecoins", "CBDC"],
  Company: ["About", "News", "Careers", "Contact"],
  Legal: ["Imprint", "Privacy Policy", "Terms of Use"],
};

export default function Footer() {
  return (
    <footer className="bg-[#040c1a] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image src="/swiat-logo-white.svg" alt="SWIAT" width={110} height={66} />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Blockchain-based financial market infrastructure for regulated entities.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="LinkedIn" className="text-zinc-500 hover:text-teal-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} SWIAT GmbH. All rights reserved.</span>
          <span>Frankfurt am Main, Germany</span>
        </div>
      </div>
    </footer>
  );
}
