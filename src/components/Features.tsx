import { Bot, Lock, Network, TrendingUp, Users, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Network,
      title: "Automated Red Teaming",
      description: "Continuous, automated red teaming that finds attack paths before they can be exploited.",
    },
    {
      icon: Users,
      title: "AD & Entra ID Integration",
      description: "Seamlessly integrates with Active Directory and Entra ID environments.",
    },
    {
      icon: Bot,
      title: "AI & Bot Security",
      description: "Track and secure AI-driven accounts and automation identities.",
    },
    {
      icon: TrendingUp,
      title: "Attack Path Simulation",
      description: "Simulate real-world attack scenarios to expose exploitable paths.",
    },
    {
      icon: Lock,
      title: "Continuous Compliance",
      description: "Maintain compliance with automated monitoring and reporting.",
    },
    {
      icon: Zap,
      title: "Cost Reduction",
      description: "Achieve better coverage than a manual red team for a fraction of the cost.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Enterprise-Grade <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for the complexity of modern enterprise identity ecosystems.
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
