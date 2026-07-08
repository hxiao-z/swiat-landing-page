import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdvisoryPage from "../../components/AdvisoryPage";

export const metadata = {
  title: "Professional Services & Advisory — SWIAT",
  description: "Hands-on expertise to take your institution from digital asset strategy to live network participation.",
};

export default function AdvisoryRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <AdvisoryPage />
      </main>
      <Footer />
    </div>
  );
}
