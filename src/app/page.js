import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import MissionsSection from "@/components/MissionsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Values />
      <AboutSection />
      <MissionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
