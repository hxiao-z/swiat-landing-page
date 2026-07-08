import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamContent from "../components/TeamContent";
import TeamGlobe from "../components/TeamGlobe";
import TeamDiversity from "../components/TeamDiversity";

export const metadata = {
  title: "Team — SWIAT",
  description: "Meet the team behind SWIAT's blockchain infrastructure for financial markets.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <TeamContent />
        <TeamGlobe />
        <TeamDiversity />
      </main>
      <Footer />
    </div>
  );
}
