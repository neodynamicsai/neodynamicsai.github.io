import { AttackLifecycle } from "@/components/AttackLifecycle";
import { AuditDeliverables } from "@/components/AuditDeliverables";
import { Comparison } from "@/components/Comparison";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";
import { Situation } from "@/components/Situation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Situation />
        <AuditDeliverables />
        <HowItWorks />
        <div className="hidden md:block">
          <AttackLifecycle />
        </div>
        <Comparison />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
