import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { ArrowRight } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
                  <a
        href="/"
        className="flex text-gray-100 transition duration-1000 ease-in-out"
      >
        <img
          src="/neod_logo.svg"
          className="w-52 transition-opacity hover:opacity-50 focus:opacity-70"
        />
      </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#deliverables" className="text-sm font-medium hover:text-primary transition-colors">
              Deliverables
            </a>
            <a href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">
              Comparison
            </a>
            <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">
              Workflow
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <ScheduleDemoButton variant="hero">Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </ScheduleDemoButton>
        </div>
      </div>
    </nav>
  );
};
