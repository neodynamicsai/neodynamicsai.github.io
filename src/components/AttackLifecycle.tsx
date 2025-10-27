import { AlertTriangle, ArrowRight, Headset, Scale, Server, ShieldCheck, UserRound, type LucideIcon } from "lucide-react";
import { Fragment, useCallback, useState } from "react";

type DiagramNode = {
  id: string;
  title: string;
  icon: LucideIcon;
  activeFrom: number;
};

type Connector = {
  id: string;
  label: string;
  visibleFrom: number;
};

const stepCaptions = [
  { step: 0, caption: "Human error compounds over time." },
  { step: 1, caption: "New helpdesk user created" },
  { step: 2, caption: "Cross-team access granted for compliance reasons" },
  { step: 3, caption: "Organizational change creates a shortcut" },
  { step: 4, caption: "One admin click can open a route to crown jewels" },
];

const timelineEntries = [
  {
    step: 1,
    title: "New helpdesk user joins",
    description: "Joel inherits a live PCI server session the moment he joins the Helpdesk Team.",
  },
  {
    step: 2,
    title: "Compliance access layered on",
    description: "Cross-team membership grants Joel admin rights to PCI-SERVER-01 in the name of reporting.",
  },
  {
    step: 3,
    title: "Re-org connects the dots",
    description: "A single change links helpdesk and compliance workflows, extending reach toward Domain Admin.",
  },
  {
    step: 4,
    title: "Full attack path formed",
    description: "Joel now has a continuous path to Domain Admin and the crown jewels—no attacker required.",
  },
];

const diagramNodes: DiagramNode[] = [
  {
    id: "joel",
    title: "Joel",
    icon: UserRound,
    activeFrom: 1,
  },
  {
    id: "helpdesk",
    title: "Helpdesk Team",
    icon: Headset,
    activeFrom: 1,
  },
  {
    id: "compliance",
    title: "Compliance Team",
    icon: Scale,
    activeFrom: 2,
  },
  {
    id: "pci",
    title: "SERVER-01",
    icon: Server,
    activeFrom: 0,
  },
  {
    id: "domain",
    title: "Domain Admin",
    icon: ShieldCheck,
    activeFrom: 0,
  },
];

const connectors: Connector[] = [
  { id: "helpdesk-joel", label: "Joins Helpdesk", visibleFrom: 1 },
  { id: "joel-compliance", label: "Added to compliance", visibleFrom: 2 },
  { id: "compliance-pci", label: "Has admin on PCI", visibleFrom: 3 },
  { id: "pci-domain", label: "Has session", visibleFrom: 0 },
];

interface AttackPathAnimationProps {
  step: number;
}

const AttackPathAnimation = ({ step }: AttackPathAnimationProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-6 shadow-card">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))/0.25,_transparent_70%)]" />
        <div className="relative space-y-6">
          <div className="flex justify-between overflow-x-auto pb-2 md:overflow-visible">
          {diagramNodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = step >= node.activeFrom;
            const connector = connectors[index];

            return (
              <Fragment key={node.id}>
                <div
                  className={`flex w-32 align-middle flex-col rounded-2xl border bg-card/80 px-1 py-2 text-center transition-colors duration-200 ${
                    isActive ? "border-primary/60 bg-primary/10 shadow-card" : "border-border"
                  }`}
                >
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border ${isActive ? "border-primary bg-primary/10" : "border-border bg-card"}`}>
                    <Icon className={`h-6 w-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <p className="text-sm mt-5 font-semibold text-foreground">{node.title}</p>
                </div>

                {connector && (
                  <div key={connector.id} className="flex shrink-0 flex-col items-center justify-center gap-2">
                    <div className={`flex h-12 w-full items-center justify-center transition-opacity duration-300 ${step >= connector.visibleFrom ? "opacity-100" : "opacity-0"}`}>
                      <ArrowRight className={`h-6 w-6 ${step >= connector.visibleFrom ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span
                      className={`text-[11px] font-medium uppercase tracking-wide transition-opacity duration-300 ${
                        step >= connector.visibleFrom ? "opacity-100 text-primary" : "opacity-0 text-muted-foreground"
                      }`}
                    >
                      {connector.label}
                    </span>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export const AttackLifecycle = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepSelect = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  const currentCaption = stepCaptions.find((entry) => entry.step === currentStep)?.caption ?? stepCaptions[0].caption;

  return (
    <section id="attack-lifecycle" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Attack Lifecycle</span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            95% of Breaches Involve <span className="text-gradient">Identity</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Small admin changes stack into live attack paths. Track how everyday permissions compound until Domain Admin and the crown jewels are one hop away.
          </p>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <AttackPathAnimation step={currentStep} />
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">{currentCaption}</p>
              {currentStep !== 0 && (
                <button
                  type="button"
                  onClick={() => handleStepSelect(0)}
                  className="text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary/80"
                >
                  Reset to starting point
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {timelineEntries.map((entry) => {
              const isComplete = currentStep > entry.step;
              const isCurrent = currentStep === entry.step;

              return (
                <button
                  key={entry.step}
                  type="button"
                  onClick={() => handleStepSelect(entry.step)}
                  className={`w-full rounded-2xl border p-6 text-left transition-all duration-200 ${
                    isCurrent
                      ? "border-primary/60 bg-primary/10 shadow-card"
                      : isComplete
                        ? "border-primary/30 bg-card/80"
                        : "border-border bg-card/60 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 h-2.5 w-2.5 rounded-full ${isCurrent || isComplete ? "bg-primary" : "bg-muted"}`} />
                    <div className="space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Step {entry.step}</p>
                      <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-6">
              <p className="font-semibold text-foreground">
                NeoDynamics continuously simulates these permutations, closing risky relationships before attackers can chain them into an exploit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
