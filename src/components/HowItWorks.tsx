import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, Gauge, Link2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Ingest (Read-only)",
      description: "Query identity providers with no agents and no write access.",
    },
    {
      icon: Gauge,
      title: "Map (Ground truth)",
      description: "Build the identity relationship graph in under an hour.",
    },
    {
      icon: ClipboardList,
      title: "Analyze (At scale)",
      description: "Map paths to crown jewels and summarize risk with AI-assisted context.",
    },
    {
      icon: CheckCircle,
      title: "Dead-end Attackers",
      description: "See which roads to close for maximum protection and validate impact before you cut.",
    },
  ];

  return (
    <section id="platform" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How Neo <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated. Agentless. Fast. Turn identity relationships into a map of the roads attackers use — and the fastest way to cut them.
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
            Manual red teams take months to find one path. NeoDynamics maps millions of paths in under one hour.
          </p>
        </div>
      </div>
    </section>
  );
};
