import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UseCasesPage from "../components/UseCasesPage";

export const metadata = {
  title: "Use Cases — SWIAT",
  description: "Real transaction reports, product implementations, and sandbox experiments across the SWIAT network.",
};

export default function UseCasesRoute() {
  return (
    <div className="min-h-screen bg-[#050e1d] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <UseCasesPage />
      </main>
      <Footer />
    </div>
  );
}
