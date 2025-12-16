import { DollarSign, Shield, TrendingUp } from "lucide-react";

export const MarketContext = () => {
  const stats = [
    {
      icon: Shield,
      value: "95%",
      label: "of breaches involve identity",
    },
    {
      icon: DollarSign,
      value: "1/100th",
      label: "The Cost of a Manual Red Team",
    },
    {
      icon: TrendingUp,
      value: "24/7",
      label: "Continuous Coverage",
    },
  ];

  return (
    <section id="market" className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            The Perimeter Is <span className="text-gradient">Dead</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The old network edge is gone. Cloud sprawl, automation, and AI services have dissolved it.
            Attackers don't break in anymore; they log in.
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
            <h3 className="text-2xl font-bold">The Problem: Manual Red Teams Are Too Slow & Expensive</h3>
            <p className="text-muted-foreground leading-relaxed">
              They provide a snapshot in time, cover a fraction of your estate, and cost a fortune. By the time you get the report, it's outdated.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-gradient-card border border-primary/30 space-y-4">
            <h3 className="text-2xl font-bold">The Solution: Automated, Continuous Red Teaming</h3>
            <p className="text-muted-foreground leading-relaxed">
              NeoDynamics gives you the full power of a red team, running 24/7 across your entire organization, for a fraction of the price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
