import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CollateralManagementPage from "../../components/CollateralManagementPage";

export const metadata = {
  title: "Collateral Management — SWIAT",
  description: "Real-time collateral allocation across the SWIAT network with programmable rules, intraday liquidity, and automated margining.",
};

export default function CollateralManagementRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <CollateralManagementPage />
      </main>
      <Footer />
    </div>
  );
}
