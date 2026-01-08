import heroNetwork from "@/assets/hero-network.jpg";
import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroNetwork} 
          alt="Network security visualization" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ship AD & Entra Audits{" "}
            <span className="text-gradient">Faster</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NeoDynamics is built for cybersecurity consultants and auditors who assess Active Directory and Entra ID on repeat. Automate posture analysis, attack paths, and remediation prioritization so your team delivers clearer findings with less manual work.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Consultant-ready findings & report packs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              PingCastle-style misconfiguration coverage
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Attack path management, explained for clients
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ScheduleDemoButton variant="hero" size="xl" className="group">
              See It For Your Next Engagement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ScheduleDemoButton>
            <Button variant="outline" size="xl" asChild>
              <a href="#deliverables">See What You Get</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};
