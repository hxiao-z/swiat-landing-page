import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TokenizationPage from "../../components/TokenizationPage";

export const metadata = {
  title: "Tokenization — SWIAT",
  description: "Issue, trade, and settle securitized assets on the SWIAT blockchain. Security tokens, digitally registered bonds, and bearer bonds — all in one platform.",
};

export default function TokenizationRoute() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1">
        <TokenizationPage />
      </main>
      <Footer />
    </div>
  );
}
