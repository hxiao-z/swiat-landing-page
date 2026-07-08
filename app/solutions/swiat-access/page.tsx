import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SwiatAccessPage from "../../components/SwiatAccessPage";

export const metadata = {
  title: "SWIAT Access — SWIAT",
  description: "Quick, easy, regulatory-compliant access to the SWIAT Blockchain. No IT resources required.",
};

export default function SwiatAccessRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <SwiatAccessPage />
      </main>
      <Footer />
    </div>
  );
}
