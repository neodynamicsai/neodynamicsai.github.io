import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-primary/30 p-12 md:p-16 text-center space-y-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))/0.15,_transparent_70%)]" />
          
          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure Your Future. <br className="hidden md:block" /> <span className="text-gradient">Secure Everything.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how NeoDynamics closes security gaps across users, workloads, and autonomous agents.
            </p>

            <div className="pt-4">
              <ScheduleDemoButton variant="hero" size="xl" className="min-w-[200px]">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ScheduleDemoButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
