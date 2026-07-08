import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResearchPage from "../../components/ResearchPage";

export const metadata = {
  title: "Research & Whitepapers — SWIAT",
  description: "Deep-dive reports, whitepapers, and ECB trial findings from SWIAT's work at the frontier of digital capital markets infrastructure.",
};

export default function ResearchRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <ResearchPage />
      </main>
      <Footer />
    </div>
  );
}
