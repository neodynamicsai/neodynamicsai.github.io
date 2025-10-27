import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";

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
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm animate-glow-pulse">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Enterprise Identity Threat Detection & Response</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Always Watching.
            <br />
            <span className="text-gradient">Always Defending.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NeoDynamics continuously detects, explains, and fixes identity misconfigurations 
            before attackers can exploit them. One admin click today can open a route to your crown jewels. 
            <span className="text-foreground font-semibold"> We close it before anyone else can find it.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 space-y-2">
            <p className="text-sm text-muted-foreground">Trusted by Fortune 500 companies and critical infrastructure</p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
              <div className="text-xl font-bold tracking-wider">ENTERPRISE</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="text-xl font-bold tracking-wider">SECURE</div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="text-xl font-bold tracking-wider">CONTINUOUS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};
