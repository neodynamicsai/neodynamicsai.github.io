import { FileText, Network, ShieldCheck, SlidersHorizontal, Sparkles, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Report-Ready Findings",
      description: "Structured findings with evidence and impact, ready to export.",
    },
    {
      icon: ShieldCheck,
      title: "Posture & Hygiene Coverage",
      description: "Surface common AD/Entra issues at scale (stale accounts, privilege sprawl, hygiene gaps).",
    },
    {
      icon: Network,
      title: "Attack Path Management",
      description: "Map and explain privilege escalation paths with evidence you can share.",
    },
    {
      icon: SlidersHorizontal,
      title: "Fix Prioritization",
      description: "Prioritize remediation by impact and blast radius, with concrete fix suggestions.",
    },
    {
      icon: Sparkles,
      title: "Stakeholder-Friendly Narrative",
      description: "Clear “why it matters” explanations for technical and non-technical stakeholders.",
    },
    {
      icon: Zap,
      title: "Less Manual Work",
      description: "Reduce time spent triaging and writing reports to move faster from data to remediation.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient">Security Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Repeatable AD and Entra assessments, without the reporting grind.
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
