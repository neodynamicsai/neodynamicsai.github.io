import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, Gauge, Link2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Connect Once",
      description: "Ingest identity data from Active Directory and Entra ID to establish a baseline for the engagement.",
    },
    {
      icon: Gauge,
      title: "Find Misconfigs + Attack Paths",
      description: "Detect posture issues and map exploitable relationships that lead to privilege escalation.",
    },
    {
      icon: ClipboardList,
      title: "Prioritize Fixes",
      description: "Turn findings into a remediation plan with impact-based prioritization and concrete fix suggestions.",
    },
    {
      icon: CheckCircle,
      title: "Deliver Client-Ready Output",
      description: "Generate report-ready findings, evidence, and explanations tailored for both engineers and stakeholders.",
    },
  ];

  return (
    <section id="platform" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-gradient">NeoDynamics</span> Fits Your Audit Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Less spreadsheet work. More billable output. NeoDynamics automates the analysis so your team can focus on the parts that require human judgment.
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
            Identity audits are repeatable, and so is your process.
            <span className="text-foreground font-semibold"> NeoDynamics helps small teams deliver more engagements</span> without sacrificing depth or quality.
          </p>
        </div>
      </div>
    </section>
  );
};
