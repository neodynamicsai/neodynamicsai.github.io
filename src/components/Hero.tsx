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
      <div className="container relative z-10 px-4 md:px-6 pt-24 pb-16 md:py-16 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Ship AD & Entra Audits{" "}
            <span className="text-gradient">Faster</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NeoDynamics is built for cybersecurity consultants and auditors who assess Active Directory and Entra ID on repeat. Automate posture analysis, attack paths, and remediation prioritization so your team delivers clearer findings with less manual work.
          </p>

          <div className="hidden sm:flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground pt-2">
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
          <div className="sm:hidden text-sm text-muted-foreground">
            Report-ready findings · Attack paths · Prioritized fixes
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ScheduleDemoButton variant="hero" size="xl" className="group w-full sm:w-auto px-4 sm:px-6 text-sm sm:text-base">
              <span className="sm:hidden">Schedule Demo</span>
              <span className="hidden sm:inline">See It For Your Next Engagement</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </ScheduleDemoButton>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
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
