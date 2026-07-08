import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TradeGuardianPage from "../../components/TradeGuardianPage";

export const metadata = {
  title: "Trade Guardian Compliance Solution — SWIAT",
  description: "Automated pre-trade compliance screening and real-time monitoring built into the SWIAT network.",
};

export default function TradeGuardianRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <TradeGuardianPage />
      </main>
      <Footer />
    </div>
  );
}
