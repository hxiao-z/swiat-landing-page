export type Category = "Regulatory" | "Product" | "Partnership" | "Transaction" | "Personnel" | "Research";

export interface Article {
  title: string;
  date: string;
  year: number;
  category: Category;
  description: string;
  href: string;
  external?: boolean;
}

export const articles: Article[] = [
  // 2026
  {
    title: "SWIAT Appoints Felix Miederer as Co-CEO",
    date: "01 Jul 2026",
    year: 2026,
    category: "Personnel",
    description: "Felix will co-lead alongside Dr. Timo Reinschmidt as the company scales regulated DLT infrastructure across European capital markets.",
    href: "#",
  },
  {
    title: "SWIAT Access Report Published",
    date: "16 Jun 2026",
    year: 2026,
    category: "Product",
    description: "SWIAT Access is a fully managed access solution enabling institutions to join the ecosystem without requiring blockchain expertise.",
    href: "#",
  },
  {
    title: "SWIAT Joins Association of German Banks",
    date: "24 Feb 2026",
    year: 2026,
    category: "Partnership",
    description: "Membership strengthens collaboration with private commercial banks on secure, scalable digital capital markets.",
    href: "#",
    external: true,
  },
  {
    title: "Project Sovereign Published",
    date: "17 Feb 2026",
    year: 2026,
    category: "Transaction",
    description: "Multi-participant initiative with Bank of Greece simulating DLT-based digital bond issuance and settlement.",
    href: "#",
  },
  {
    title: "L-Bank Joins RL1 Network",
    date: "09 Feb 2026",
    year: 2026,
    category: "Partnership",
    description: "L-Bank joins Regulated Layer One, enabling secure DLT solutions across Europe.",
    href: "#",
    external: true,
  },
  // 2025
  {
    title: "BaFin Grants Crypto-Securities Register Permission",
    date: "20 Nov 2025",
    year: 2025,
    category: "Regulatory",
    description: "Approval to operate registers under eWpG marks expansion from software provider to regulated financial services partner.",
    href: "#",
  },
  {
    title: "Regulated Layer One (RL1) Launches",
    date: "29 Sep 2025",
    year: 2025,
    category: "Product",
    description: "RL1 is a global, open and interoperable network with 10 European financial institutions participating at launch.",
    href: "#",
  },
  {
    title: "Siemens Digital Bond Secondary Market Trade",
    date: "11 Aug 2025",
    year: 2025,
    category: "Transaction",
    description: "Multi-million euro trade between DekaBank and Union Investment on 360X, settled via SWIAT.",
    href: "#",
    external: true,
  },
  {
    title: "Berliner Volksbank First Blockchain Investment",
    date: "06 Jun 2025",
    year: 2025,
    category: "Transaction",
    description: "Acquired digital covered bond issued by Berlin Hyp; DZ BANK's first blockchain custodian role.",
    href: "#",
    external: true,
  },
  {
    title: "KfW First Blockchain Investment",
    date: "29 Apr 2025",
    year: 2025,
    category: "Transaction",
    description: "€10 million investment in Berlin Hyp covered bonds under eWpG framework on SWIAT platform.",
    href: "#",
    external: true,
  },
  {
    title: "Felix Miederer Joins as COO",
    date: "01 Apr 2025",
    year: 2025,
    category: "Personnel",
    description: "Brings 20 years of banking experience in digital transformation and IT strategy to SWIAT.",
    href: "#",
  },
  {
    title: "Dr. Timo Reinschmidt Interview — Bankmagazin",
    date: "20 Feb 2025",
    year: 2025,
    category: "Research",
    description: "Insights on blockchain's future in financial markets and SWIAT's role in driving institutional innovation.",
    href: "#",
    external: true,
  },
  // 2024
  {
    title: "8 Successful ECB Trial Transactions",
    date: "22 Nov 2024",
    year: 2024,
    category: "Transaction",
    description: "DekaBank and NatWest conducted intraday repos with same-day settlement via Bundesbank Trigger Solution.",
    href: "#",
    external: true,
  },
  {
    title: "First Digital Bilateral Repo",
    date: "15 Nov 2024",
    year: 2024,
    category: "Transaction",
    description: "DekaBank and LBBW settled bilateral DvP repo by tokenizing a traditional security on the SWIAT blockchain.",
    href: "#",
    external: true,
  },
  {
    title: "LBBW and DekaBank Two DvP Transactions",
    date: "24 Oct 2024",
    year: 2024,
    category: "Transaction",
    description: "Digital bearer bond investment and first digital registered bond issuance within ECB Trials.",
    href: "#",
    external: true,
  },
  {
    title: "First Digital Bond Redemption",
    date: "17 Oct 2024",
    year: 2024,
    category: "Transaction",
    description: "BayernLB and Stadtsparkasse München successfully completed the entire digital asset lifecycle transaction.",
    href: "#",
    external: true,
  },
  {
    title: "Siemens 93-Second Cross-Ledger DvP",
    date: "23 Sep 2024",
    year: 2024,
    category: "Transaction",
    description: "Achieved interoperable blockchain integration synchronizing assets with JPMorgan's coin system.",
    href: "#",
    external: true,
  },
  {
    title: "Siemens €300M Crypto Securities Issuance",
    date: "04 Sep 2024",
    year: 2024,
    category: "Transaction",
    description: "Siemens issues EUR 300 million in crypto securities (eWpG) with automated DvP using digital wholesale euro.",
    href: "#",
    external: true,
  },
  {
    title: "SWIAT Access Product Launch",
    date: "27 Jun 2024",
    year: 2024,
    category: "Product",
    description: "SWIAT Access allows organizations to access the SWIAT blockchain ecosystem without requiring any IT resources.",
    href: "#",
  },
  {
    title: "ISO 27001:2022 Certification",
    date: "2024",
    year: 2024,
    category: "Regulatory",
    description: "SWIAT's Information Security Management System is now certified in accordance with ISO 27001:2022 standards.",
    href: "#",
  },
  {
    title: "NTT DATA Joins as Validator",
    date: "27 Feb 2024",
    year: 2024,
    category: "Partnership",
    description: "NTT DATA joins SWIAT's permissioned blockchain network as a validator node operator.",
    href: "#",
  },
  // 2023
  {
    title: "Four Strategic Validator Partnerships",
    date: "13 Sep 2023",
    year: 2023,
    category: "Partnership",
    description: "GFT, adesso, Sopra Steria, and Business Solutions join as validators and node operators on the SWIAT network.",
    href: "#",
    external: true,
  },
  {
    title: "New Strategic Investors Announced",
    date: "26 Jan 2023",
    year: 2023,
    category: "Partnership",
    description: "LBBW, SC Ventures, and Comyno become strategic shareholders of SWIAT.",
    href: "#",
    external: true,
  },
  {
    title: "Dr. Timo Reinschmidt Appointed CCO & Co-CEO",
    date: "08 Jan 2023",
    year: 2023,
    category: "Personnel",
    description: "Brings 20 years of international banking leadership in financial markets and transaction banking.",
    href: "#",
  },
  // 2022
  {
    title: "SWIAT Becomes Independent Limited Company",
    date: "02 Feb 2022",
    year: 2022,
    category: "Regulatory",
    description: "Spun off as an independent subsidiary of Deka Group since February 1, 2022.",
    href: "#",
    external: true,
  },
  // 2021
  {
    title: "DekaBank's SWIAT Aims to Be 'SWIFT for Digital Assets'",
    date: "14 Dec 2021",
    year: 2021,
    category: "Product",
    description: "Platform designed to bring global financial institutions together on a shared digital asset infrastructure.",
    href: "#",
    external: true,
  },
  {
    title: "First Real-Time Securities Lending on Blockchain",
    date: "17 Nov 2021",
    year: 2021,
    category: "Transaction",
    description: "Metzler Capital Markets and DekaBank processed securities lending without advance collateralization.",
    href: "#",
    external: true,
  },
];

export const categoryColors: Record<Category, string> = {
  Regulatory:  "bg-blue-900/40 text-blue-300 border-blue-700/40",
  Product:     "bg-[#003946]/60 text-[#7AC0CD] border-[#7AC0CD]/30",
  Partnership: "bg-purple-900/40 text-purple-300 border-purple-700/40",
  Transaction: "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
  Personnel:   "bg-amber-900/40 text-amber-300 border-amber-700/40",
  Research:    "bg-rose-900/40 text-rose-300 border-rose-700/40",
};

export const latestArticle = articles[0];
export const top3Articles = articles.slice(0, 3);
