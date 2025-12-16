import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Search, Shield } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Continuous Red Teaming",
      description: "Automatically scans your entire environment, Active Directory, Entra ID, and AI-driven accounts, 24/7.",
    },
    {
      icon: AlertCircle,
      title: "Automated Exploitation Simulation",
      description: "Simulates real attack scenarios to identify exploitable relationships and privilege escalation paths.",
    },
    {
      icon: Shield,
      title: "Instant Remediation",
      description: "Provides clear, actionable steps to close security gaps before they can be exploited.",
    },
    {
      icon: CheckCircle,
      title: "Compliance & Board Reporting",
      description: "Transforms inevitable human mistakes into continuous, automated security improvements.",
    },
  ];

  return (
    <section id="platform" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-gradient">NeoDynamics</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No manual analysis required. NeoDynamics continuously monitors, simulates attacks, 
            and guides your team to secure configurations, automatically.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardContent className="p-6 space-y-4">
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-muted/10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identity misconfigurations now outpace human capacity to manage them. 
            <span className="text-foreground font-semibold"> NeoDynamics scales with your enterprise</span>, 
            continuously protecting your most critical assets.
          </p>
        </div>
      </div>
    </section>
  );
};
