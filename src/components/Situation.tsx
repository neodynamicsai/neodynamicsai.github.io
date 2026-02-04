import { Card, CardContent } from "@/components/ui/card";
import { FileText, ListChecks, Timer } from "lucide-react";

export const Situation = () => {
  const items = [
    {
      icon: Timer,
      title: "Situation",
      description:
        "Attackers will get in. What matters next is whether they can move through identity relationships to reach your crown jewels.",
    },
    {
      icon: ListChecks,
      title: "Complication",
      description:
        "Most orgs don’t have a complete, ground-truth map of permissions, groups, and admin rights — so the roads attackers use stay hidden.",
    },
    {
      icon: FileText,
      title: "Resolution",
      description:
        "NeoDynamics builds your identity graph and maps paths to critical infrastructure, then recommends the smallest changes that create dead ends for attackers.",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Attackers Will Get In.<br className="hidden md:block" />{" "}
            The Question Is: <span className="text-gradient">Can They Move?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perimeter security isn’t enough. Once inside, identity relationships become highways for lateral movement — unless you map them and cut the roads.
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
            Total internal visibility · Paths to crown jewels · Minimal-change hardening
          </p>
        </div>
      </div>
    </section>
  );
};
