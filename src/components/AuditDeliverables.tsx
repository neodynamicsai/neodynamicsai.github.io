import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, FileText, Network, Wrench } from "lucide-react";

const screenshotCards = [
  {
    icon: FileText,
    title: "Executive Summary",
    description: "A clear snapshot of scope, top risks, and priorities.",
    image: "/screenshots/executive_summary.png",
    alt: "Executive summary report preview",
  },
  {
    icon: BadgeCheck,
    title: "Findings & Evidence",
    description: "Structured findings with evidence and plain-language impact.",
    image: "/screenshots/findings_evidence.png",
    alt: "Findings and evidence preview",
  },
  {
    icon: Wrench,
    title: "Prioritized Fixes",
    description: "Actionable remediation guidance ordered by impact.",
    image: "/screenshots/fix_suggestions.png",
    alt: "Fix suggestions and prioritization preview",
  },
  {
    icon: Network,
    title: "Attack Paths",
    description: "Privilege escalation paths you can show, explain, and track.",
    image: "/screenshots/attack_path_management.png",
    alt: "Attack path management preview",
  },
];

export const AuditDeliverables = () => {
  return (
    <section id="deliverables" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-[90rem]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What You <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A consistent report pack for AD and Entra assessments: findings, evidence, prioritized fixes, and stakeholder-ready narrative.
          </p>
        </div>

        <div className="md:hidden space-y-8">
          {screenshotCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/25">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="-mx-4 rounded-2xl border border-border bg-secondary/40 overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden md:grid gap-8 2xl:grid-cols-2">
          {screenshotCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="bg-gradient-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/25">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="aspect-[16/9] rounded-xl border border-border bg-secondary/40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-border hidden md:block">
            <CardHeader>
              <CardTitle className="text-2xl">Report Pack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                NeoDynamics compiles findings with evidence, impact, and fix guidance, ready for engineering teams and decision makers.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Hygiene and misconfiguration findings
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Attack paths and privilege escalation narratives
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Prioritized fix suggestions with rationale
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Stakeholder-friendly “why it matters” context
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hidden md:block">
            <CardHeader>
              <CardTitle className="text-2xl">Common Checks (Examples)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Too many admins / over-privileged groups
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Inactive users and stale accounts
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Weak credential hygiene indicators
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  Privileged role sprawl in Entra
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  High-risk relationships that form attack paths
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 md:hidden space-y-4 text-sm text-muted-foreground">
          <p>
            Each engagement includes findings, attack paths, prioritized fixes, and stakeholder-ready explanations.
          </p>
          <p>
            Common checks cover privilege sprawl, stale accounts, credential hygiene, and risky relationships.
          </p>
        </div>
      </div>
    </section>
  );
};
