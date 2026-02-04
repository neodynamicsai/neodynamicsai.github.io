import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { BadgeCheck, FileText, Network, PlugZap, Search, Wrench } from "lucide-react";

const screenshotCards = [
  {
    icon: FileText,
    title: "Crown Jewel Exposure",
    description: "See exactly how a low-privilege identity connects to critical infrastructure.",
    image: "/screenshots/executive_summary.png",
    alt: "Executive summary report preview",
  },
  {
    icon: BadgeCheck,
    title: "Path Evidence + Context",
    description: "Attack paths explained in plain language with supporting evidence.",
    image: "/screenshots/findings_evidence.png",
    alt: "Findings and evidence preview",
  },
  {
    icon: Wrench,
    title: "Surgical Fix Plan",
    description: "Prioritized changes that create dead ends for attackers (with rationale).",
    image: "/screenshots/fix_suggestions.png",
    alt: "Fix suggestions and prioritization preview",
  },
  {
    icon: Network,
    title: "Attack Path Explorer",
    description: "Visualize the roads attackers use and track progress as you harden.",
    image: "/screenshots/attack_path_management.png",
    alt: "Attack path management preview",
  },
];

const timelineSteps = [
  {
    time: "T+00",
    title: "Plug In",
    icon: PlugZap,
    bullets: [
      "Connect NeoDynamics to your Identity Providers",
      "Read-only access",
      "No agents required",
      "Minimal setup effort",
    ],
  },
  {
    time: "T+45",
    title: "Map & Analyze",
    icon: Search,
    bullets: [
      "Build the internal identity graph",
      "Identify attack paths to critical assets",
      "Analyze and summarize risk",
    ],
  },
  {
    time: "T+60",
    title: "Your Report",
    icon: FileText,
    bullets: [
      "Receive a clear, visual report",
      "See paths from low-privileged users to crown jewels",
      "Get prioritized remediation guidance",
    ],
  },
] as const;

export const AuditDeliverables = () => {
  return (
    <section id="deliverables" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-[90rem]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Total Internal Visibility.<br className="hidden md:block" />{" "}
            <span className="text-gradient">Mapped. Visual.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A ground-truth identity graph, paths to crown jewels, and an impact-aware hardening plan you can execute quickly.
          </p>
        </div>

        <Card className="mb-14 bg-gradient-card border-primary/25">
          <CardHeader className="space-y-3">
            <CardTitle className="text-2xl md:text-3xl">1-hour Assessment Timeline</CardTitle>
            <p className="text-muted-foreground">
              Book a 1-hour assessment. In one session, NeoDynamics maps your identity roads and shows the smallest changes that stop lateral movement.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {timelineSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.time}
                    className="rounded-2xl border border-border bg-background/30 p-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {step.time}
                          </p>
                          <p className="text-lg font-bold text-foreground">{step.title}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                        {step.time === "T+60" ? "Deliver" : "Run"}
                      </span>
                    </div>
                    <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
                      {step.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-5 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Book a 1-hour Assessment.</p>
                <p className="text-sm text-muted-foreground">T+60: get a visual report and prioritized remediation guidance.</p>
              </div>
              <ScheduleDemoButton variant="hero" className="w-full md:w-auto">
                Book a 1-hour Assessment
              </ScheduleDemoButton>
            </div>
          </CardContent>
        </Card>

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

        <div className="mt-8 md:hidden space-y-4 text-sm text-muted-foreground">
          <p>
            Each assessment includes the identity graph, paths to crown jewels, and a prioritized fix plan to dead-end attackers.
          </p>
          <p>
            We map the identity relationships (groups, permissions, roles, sessions) that create the roads attackers use.
          </p>
        </div>
      </div>
    </section>
  );
};
