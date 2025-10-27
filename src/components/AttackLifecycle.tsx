import { AlertTriangle, ArrowRight } from "lucide-react";
import attackLifecycle from "@/assets/attack-lifecycle.jpg";

export const AttackLifecycle = () => {
  const stages = [
    { stage: "1. Phishing", description: "Initial compromise via email or social engineering" },
    { stage: "2. Lateral Movement", description: "Attacker moves through your network undetected" },
    { stage: "3. Privilege Escalation", description: "Exploiting misconfigurations to gain admin access" },
    { stage: "4. Crown Jewel Compromise", description: "Critical systems and data are breached" },
  ];

  return (
    <section id="attack-lifecycle" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Attack Lifecycle</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            95% of Breaches Involve <span className="text-gradient">Identity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Today's attackers exploit identity misconfigurations faster than teams can track them. 
            See how one mistake creates an exploitable path to your most critical assets.
          </p>
        </div>

        {/* Visual + Stages */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Attack Visualization */}
          <div className="relative">
            <img 
              src={attackLifecycle} 
              alt="Attack lifecycle visualization" 
              className="rounded-lg shadow-card w-full border border-border"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Attack Stages */}
          <div className="space-y-6">
            {stages.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold">{item.stage}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}

            {/* Call Out */}
            <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary/30">
              <p className="text-foreground font-semibold">
                NeoDynamics simulates these attack paths continuously, exposing exploitable relationships 
                across users, groups, and systems—before attackers find them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
