import { ScheduleDemoButton } from "@/components/ScheduleDemoButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const neoTiers = [
  {
    name: "One-Off Report Pack",
    price: "€1,900",
    priceNote: "per domain",
    description: "A report pack for a single assessment on one domain.",
    bullets: [
      "Structured findings + evidence",
      "Attack paths with explanations",
      "Prioritized remediation guidance",
    ],
  },
  {
    name: "Continuous Monitoring",
    price: "€499",
    priceNote: "per domain / month",
    description: "Always-on analysis with a 12-month minimum commitment.",
    bullets: [
      "Everything in One-Off Report Pack",
      "Continuous re-scans and progress tracking",
      "Built for retests and ongoing hardening",
    ],
    highlighted: true,
  },
  {
    name: "Multi-Domain Pack",
    price: "€1,299",
    priceNote: "per month (up to 3 domains)",
    description: "Discounted bundle for multi-domain environments and recurring delivery.",
    bullets: [
      "Everything in Continuous Monitoring",
      "Designed for multi-domain reporting",
      "Best value for MSPs and larger internal teams",
    ],
  },
  {
    name: "Enterprise / MSSP",
    price: "Contact us",
    priceNote: "volume pricing",
    description: "For higher volumes, custom terms, and enterprise workflows.",
    bullets: [
      "Volume discounts for service providers and security teams",
      "Custom packages for multi-domain portfolios",
      "Tailored onboarding and rollout support",
    ],
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
            Start with a one-off report pack, move to continuous monitoring, and scale with multi-domain bundles or enterprise pricing.
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
                tier.highlighted
                  ? "bg-gradient-card border-primary/40 shadow-card"
                  : "bg-card border-border"
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
                <CardContent className="flex h-full flex-col space-y-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <ScheduleDemoButton className="w-full" variant={tier.highlighted ? "hero" : "outline"}>
                      {tier.price === "Contact us" ? "Contact Sales" : "Talk Pricing + Demo"}
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
