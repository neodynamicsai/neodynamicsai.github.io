import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, Gauge, Link2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Connect Once",
      description: "Ingest identity data from Active Directory and Entra ID.",
    },
    {
      icon: Gauge,
      title: "Find Misconfigs + Attack Paths",
      description: "Surface posture issues and risky relationships that enable escalation.",
    },
    {
      icon: ClipboardList,
      title: "Prioritize Fixes",
      description: "Turn findings into a prioritized remediation plan with concrete fixes.",
    },
    {
      icon: CheckCircle,
      title: "Deliver Client-Ready Output",
      description: "Export report-ready findings, evidence, and stakeholder-friendly explanations.",
    },
  ];

  return (
    <section id="platform" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Fits Your <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spend less time triaging and writing reports. Spend more time validating risk and driving remediation.
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
            Repeatable audits deserve a repeatable delivery workflow, without sacrificing depth or clarity.
          </p>
        </div>
      </div>
    </section>
  );
};
