import { AttackLifecycle } from "@/components/AttackLifecycle";
import { EnterprisePerimeter } from "@/components/EnterprisePerimeter";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { MarketContext } from "@/components/MarketContext";
import { Navigation } from "@/components/Navigation";

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
