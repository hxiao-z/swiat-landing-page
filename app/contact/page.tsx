import ContactForm from "../components/ContactForm";
import NewsletterSection from "../components/NewsletterSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";

export const metadata = {
  title: "Contact Us — SWIAT",
  description: "Get in touch with the SWIAT team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <ContactForm />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
