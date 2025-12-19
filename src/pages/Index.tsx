import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import MissionsSection from "@/components/MissionsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import brasilImage from "@/assets/mission-brasil.jpg";
import australiaImage from "@/assets/mission-australia.jpg";
import aboutImage from "@/assets/about-team.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Values />
      <AboutSection aboutImage={aboutImage} />
      <MissionsSection brasilImage={brasilImage} australiaImage={australiaImage} />
      <FAQSection image1={aboutImage} image2={brasilImage} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
