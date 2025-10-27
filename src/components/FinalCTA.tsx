import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-card border border-primary/30 p-12 md:p-16 text-center space-y-8">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
          
          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure Identity. <span className="text-gradient">Secure Everything.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how NeoDynamics can transform your identity security posture. 
              Schedule a personalized demo with our security experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Contact Sales
              </Button>
            </div>

            {/* Trust Message */}
            <p className="text-sm text-muted-foreground pt-4">
              Join Fortune 500 companies protecting their most critical assets with NeoDynamics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
