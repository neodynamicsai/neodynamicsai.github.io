import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">NeoDynamics</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">
              Platform
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-sm font-medium hover:text-primary transition-colors">
              Integrations
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero">
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};
