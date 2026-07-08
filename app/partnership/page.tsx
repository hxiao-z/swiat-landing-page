import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnershipPage from "../components/PartnershipPage";

export const metadata = {
  title: "Partnership — SWIAT",
  description: "SWIAT partners with financial institutions, technology providers, and market infrastructure players building the future of regulated digital capital markets.",
};

export default function PartnershipRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <PartnershipPage />
      </main>
      <Footer />
    </div>
  );
}
