import { Card, CardContent } from "@/components/ui/card";
import { FileText, ListChecks, Timer } from "lucide-react";

export const Situation = () => {
  const items = [
    {
      icon: Timer,
      title: "Situation",
      description:
        "AD and Entra assessments generate a lot of signal. Turning that into a report is where most teams lose time.",
    },
    {
      icon: ListChecks,
      title: "Complication",
      description:
        "Manual triage, evidence gathering, and slide writing create inconsistency and make it easy to miss important issues.",
    },
    {
      icon: FileText,
      title: "Resolution",
      description:
        "NeoDynamics packages findings, evidence, and prioritized fixes into a report pack you can deliver and retest quickly.",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Where Audits <span className="text-gradient">Slow Down</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assessments are hard. The bottleneck is turning results into a clear, prioritized plan and a report stakeholders can act on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="bg-gradient-card border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Fewer hours spent on reporting · More consistent output · Less chance of missed issues
          </p>
        </div>
      </div>
    </section>
  );
};
