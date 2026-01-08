import { FileText, Network, ShieldCheck, SlidersHorizontal, Sparkles, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Report-Ready Findings",
      description: "Generate structured findings with evidence, impact, and customer-friendly explanations, ready for delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Misconfiguration Coverage",
      description: "Surface common AD/Entra posture issues (inactive users, over-privilege, stale credentials, and more) at scale.",
    },
    {
      icon: Network,
      title: "Attack Path Management",
      description: "Map and explain privilege escalation paths so your team can prove risk, not just list settings.",
    },
    {
      icon: SlidersHorizontal,
      title: "Fix Prioritization",
      description: "Prioritize remediation by risk and blast radius, with concrete fix suggestions to reduce back-and-forth.",
    },
    {
      icon: Sparkles,
      title: "Explainability On Demand",
      description: "Go from “what’s wrong” to “why it matters” with deeper explanations for technical and non-technical stakeholders.",
    },
    {
      icon: Zap,
      title: "More Audits Per Team",
      description: "Reduce manual effort so small teams can deliver more engagements with consistent quality.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient">Consultants & Auditors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to deliver repeatable AD and Entra assessments without drowning in manual analysis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
