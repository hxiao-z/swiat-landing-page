import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlockchainAsAServicePage from "../../components/BlockchainAsAServicePage";

export const metadata = {
  title: "Blockchain-as-a-Service — SWIAT",
  description: "EVM-compatible, regulatory-compliant Layer 1 blockchain infrastructure tailored for financial institutions.",
};

export default function BaaSRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <BlockchainAsAServicePage />
      </main>
      <Footer />
    </div>
  );
}
