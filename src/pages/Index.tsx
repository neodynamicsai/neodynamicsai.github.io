import { AttackLifecycle } from "@/components/AttackLifecycle";
import { AuditDeliverables } from "@/components/AuditDeliverables";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AuditDeliverables />
        <Comparison />
        <HowItWorks />
        <div className="hidden md:block">
          <AttackLifecycle />
        </div>
        <div className="hidden md:block">
          <Features />
        </div>
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
