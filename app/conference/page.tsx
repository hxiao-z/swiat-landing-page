import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConferencePage from "../components/ConferencePage";

export const metadata = {
  title: "SWIAT Conference — Annual Invitation-Only Event",
  description: "Our annual conference brings together founding members, regulators, and capital market leaders by invitation. Three editions, one growing network.",
};

export default function ConferenceRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <ConferencePage />
      </main>
      <Footer />
    </div>
  );
}
