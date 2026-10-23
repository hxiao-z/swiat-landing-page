import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CredentialsBar from "./components/CredentialsBar";
import WhatWeDoSection from "./components/WhatWeDoSection";
import TrustSection from "./components/TrustSection";
import AssetsSection from "./components/AssetsSection";
import CtaBand from "./components/CtaBand";
import NewsSection from "./components/NewsSection";
import ShareholdersSection from "./components/ShareholdersSection";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <HeroSection />
      <TrustSection />
      <WhatWeDoSection />
      <AssetsSection />
      <CtaBand />
      <NewsSection />
      <ShareholdersSection />
      <CredentialsBar />
      <FinalCta />
      <Footer />
    </div>
  );
}

