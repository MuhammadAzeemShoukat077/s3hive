import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import CtaSection from "@/components/CtaSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <CtaSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
