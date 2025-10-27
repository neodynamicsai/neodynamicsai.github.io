import { Button } from "@/components/ui/button";

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
            <a href="#enterprise" className="text-sm font-medium hover:text-primary transition-colors">
              Enterprise
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-sm font-medium hover:text-primary transition-colors">
              Integrations
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" asChild>
            <a href="#contact">Request a Demo</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
