import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyJoinPage from "../../components/WhyJoinPage";

export const metadata = {
  title: "Why Join Us — SWIAT",
  description: "Come build the future of regulated capital markets infrastructure with a small, focused team in Frankfurt.",
};

export default function WhyJoinRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <WhyJoinPage />
      </main>
      <Footer />
    </div>
  );
}
