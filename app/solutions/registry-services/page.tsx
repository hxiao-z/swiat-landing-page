import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RegistryServicesPage from "../../components/RegistryServicesPage";

export const metadata = {
  title: "Registry Services (eWpG) — SWIAT",
  description: "SWIAT is BaFin-licensed to operate a crypto-securities registry under the German Electronic Securities Act (eWpG). Issue bearer bonds 100% digitally on blockchain.",
};

export default function RegistryServicesRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <RegistryServicesPage />
      </main>
      <Footer />
    </div>
  );
}
