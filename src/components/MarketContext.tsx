import { TrendingUp, DollarSign, Shield } from "lucide-react";

export const MarketContext = () => {
  const stats = [
    {
      icon: Shield,
      value: "95%",
      label: "of breaches involve identity",
    },
    {
      icon: DollarSign,
      value: "$200B",
      label: "IAM + ITDR market by 2035",
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "growth in identity threats",
    },
  ];

  return (
    <section id="market" className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Identity Is the <span className="text-gradient">New Perimeter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identity is now the primary attack vector. Cloud sprawl, automation, and AI services have dissolved the
            traditional network edge.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-card border border-border text-center space-y-4 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-gradient">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Context Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg bg-gradient-card border border-border space-y-4">
            <h3 className="text-2xl font-bold">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">
              Traditional IAM tooling wasn&apos;t built for machine and AI identities moving at cloud speed. Teams can&apos;t
              manually keep every relationship and entitlement in check.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-gradient-card border border-primary/30 space-y-4">
            <h3 className="text-2xl font-bold">The NeoDynamics Advantage</h3>
            <p className="text-muted-foreground leading-relaxed">
              NeoDynamics automatically simulates attack paths and remediates exposed access so your posture hardens in
              real time—without adding headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
