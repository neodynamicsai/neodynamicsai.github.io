import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AttackLifecycle } from "@/components/AttackLifecycle";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { MarketContext } from "@/components/MarketContext";
import { Integrations } from "@/components/Integrations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { EnterprisePerimeter } from "@/components/EnterprisePerimeter";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <EnterprisePerimeter />
        <AttackLifecycle />
        <HowItWorks />
        <Features />
        <MarketContext />
        <Integrations />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
