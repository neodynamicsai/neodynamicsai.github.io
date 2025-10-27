import { Users, Server, Bot, Cpu, ShieldCheck, Globe } from "lucide-react";

const nodes = [
  { icon: Users, label: "Employees" },
  { icon: Server, label: "Servers" },
  { icon: Bot, label: "RPA & Bots" },
  { icon: Cpu, label: "AI Agents" },
  { icon: Globe, label: "Partners" },
];

export const EnterprisePerimeter = () => {
  return (
    <section id="enterprise" className="py-24 px-6 bg-gradient-to-b from-secondary/20 via-background to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Identity Surfaces Multiply. Our Coverage Grows With Them.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Users, machines, service accounts, and autonomous agents now share the same access fabric. NeoDynamics
            keeps every identity mapped, monitored, and enforced so the enterprise perimeter follows wherever work happens.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="relative p-10 rounded-3xl bg-gradient-card border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))/0.35,_transparent_60%)]" />
            <div className="relative z-10 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold tracking-wide">Unified Identity Intelligence</span>
              </div>
              <h3 className="text-3xl font-semibold">
                One operating picture for every human and non-human identity touching your estate.
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Continuous relationship graph linking users, workloads, and privileged paths.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Automated policy enforcement that seals risky access before attackers pivot.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Evidence-ready reporting for security, compliance, and executive teams.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center gap-6">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-primary/15 border border-primary/30 shadow-glow">
                <div className="text-center px-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Enterprise Core</p>
                  <p className="text-base text-muted-foreground">Identity Threat Detection & Response</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full">
                {nodes.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/80 px-6 py-5 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

