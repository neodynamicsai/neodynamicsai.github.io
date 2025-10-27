import { Puzzle } from "lucide-react";

export const Integrations = () => {
  const integrations = [
    { name: "Splunk", category: "SIEM" },
    { name: "Microsoft Sentinel", category: "SIEM" },
    { name: "JIRA", category: "Ticketing" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Active Directory", category: "Identity" },
    { name: "Entra ID", category: "Identity" },
    { name: "PagerDuty", category: "Alerting" },
    { name: "Slack", category: "Communication" },
  ];

  return (
    <section id="integrations" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Puzzle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Seamless Integration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Works With Your <span className="text-gradient">Existing Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NeoDynamics integrates seamlessly with your existing security infrastructure, 
            SIEM solutions, and ticketing systems.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group text-center space-y-2"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <Puzzle className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="font-bold">{integration.name}</div>
                <div className="text-sm text-muted-foreground">{integration.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* API Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Plus comprehensive REST API for custom integrations
          </p>
        </div>
      </div>
    </section>
  );
};
