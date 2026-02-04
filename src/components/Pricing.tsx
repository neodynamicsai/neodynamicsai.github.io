import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const neoTiers = [
  {
    name: "1-hour Assessment",
    price: "Book now",
    priceNote: "1-hour session",
    description: "Plug in, map, and get a clear path-to-crown-jewels walkthrough with prioritized remediation guidance.",
    bullets: [
      "Read-only, agentless ingest",
      "Ground-truth identity graph (AD + Entra)",
      "Paths to crown jewels, explained",
      "Surgical fix plan to create dead ends",
    ],
    ctaLabel: "Book Assessment",
  },
  {
    name: "Continuous Mapping",
    price: "€499",
    priceNote: "per domain / month",
    description: "Always-on visibility as identity roads change over time.",
    bullets: [
      "Continuous path mapping to crown jewels",
      "Alerts on new risky relationships",
      "Retests and progress tracking",
    ],
    highlighted: true,
    ctaLabel: "Talk to Us",
  },
  {
    name: "Multi-Domain Pack",
    price: "€1,299",
    priceNote: "per month (up to 3 domains)",
    description: "Discounted bundle for multi-domain environments and recurring hardening.",
    bullets: [
      "Everything in Continuous Mapping",
      "Designed for multi-domain visibility",
      "Best value for larger orgs and service providers",
    ],
    ctaLabel: "Talk to Us",
  },
  {
    name: "Enterprise / MSSP",
    price: "Contact us",
    priceNote: "volume pricing",
    description: "For large environments, custom terms, and enterprise workflows.",
    bullets: [
      "Custom packages for complex identity environments",
      "Tailored onboarding and rollout support",
      "Security review and enterprise support",
    ],
    ctaLabel: "Contact Sales",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a 1-hour assessment, move to continuous mapping, and scale with multi-domain bundles or enterprise terms.
          </p>
          <p className="text-sm text-muted-foreground">
            European company with GDPR-first practices and privacy standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {neoTiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                (tier.highlighted
                  ? "bg-gradient-card border-primary/40 shadow-card"
                  : "bg-card border-border") + " h-full"
              }
            >
              <div className="flex h-full flex-col">
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  </div>
                  <div className="flex flex-wrap items-end gap-2">
                    <div className="text-3xl font-bold">{tier.price}</div>
                    <div className="text-sm text-muted-foreground">{tier.priceNote}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <ScheduleDemoButton className="w-full" variant="hero">
                      {tier.ctaLabel}
                    </ScheduleDemoButton>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
