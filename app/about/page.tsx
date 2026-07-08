import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";

export const metadata = {
  title: "About SWIAT — Building the Financial Infrastructure of the Future",
  description: "SWIAT is a Frankfurt-based financial technology company developing blockchain software for the financial industry. Backed by DekaBank, LBBW, SC Ventures, and Comyno.",
};

export default function AboutRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
