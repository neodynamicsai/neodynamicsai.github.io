import heroNetwork from "@/assets/hero-network.jpg";
import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { Button } from "@/components/ui/button";
import { AlarmClock, ArrowRight, Lock, ShieldCheck, Timer } from "lucide-react";

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
            Turn AD & Entra Audits Into{" "}
            <span className="text-gradient">Actionable Reports</span>
          </h1>

          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              NeoDynamics turns AD and Entra assessment data into prioritized findings, evidence, and a report pack you can ship fast.
            </p>

            <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-primary/10 p-3 sm:p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background/20 px-4 py-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15">
                    <AlarmClock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    Faster reporting turnaround
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background/20 px-4 py-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15">
                    <Timer className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    Hours saved on triage and writeups
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background/20 px-4 py-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    Fewer missed issues via consistent checks
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background/20 px-4 py-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    Privacy-preserving, data stays on your premises
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden text-sm text-muted-foreground">
            Faster reporting. Hours saved. Fewer missed issues.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ScheduleDemoButton variant="hero" size="xl" className="group w-full sm:w-auto px-4 sm:px-6 text-sm sm:text-base">
              <span className="sm:hidden">Schedule Demo</span>
              <span className="hidden sm:inline">See It For Your Next Assessment</span>
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
