import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShareholdersSection from "./components/ShareholdersSection";
import TrustSection from "./components/TrustSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ShareholdersSection />
      <TrustSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
