import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SecondaryMarketPage from "../../components/SecondaryMarketPage";

export const metadata = {
  title: "Secondary Market Solutions — SWIAT",
  description: "Trade tokenized securities with atomic DvP settlement, T+0 finality, and 24/7 market access on the SWIAT network.",
};

export default function SecondaryMarketRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <SecondaryMarketPage />
      </main>
      <Footer />
    </div>
  );
}
