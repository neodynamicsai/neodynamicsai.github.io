import {
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Headset,
  Scale,
  Server,
  ShieldCheck,
  Skull,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  { step: 0, caption: "Everyday changes compound into risk." },
  { step: 1, caption: "New helpdesk user created" },
  { step: 2, caption: "Cross-team access granted for compliance reasons" },
  { step: 3, caption: "One small change opens a route to crown jewels" },
];

const MAX_STEP = Math.max(...stepCaptions.map((entry) => entry.step));

const timelineEntries = [
  {
    step: 1,
    title: "New helpdesk user joins",
    description: "Joel is a new hire and joins the Helpdesk Team.",
  },
  {
    step: 2,
    title: "Compliance needs access privileged SERVER-01",
    description: "Compliance now shares access to SERVER-01, where Domain Admin has a session.",
  },
  {
    step: 3,
    title: "Re-org connects the dots",
    description: "A single change links Joel's directly to a Domain Admin.",
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
  { id: "joel-compliance", label: "Added to Compliance", visibleFrom: 3 },
  { id: "compliance-pci", label: "Is admin", visibleFrom: 2 },
  { id: "pci-domain", label: "Has session", visibleFrom: 0 },
];

interface AttackPathAnimationProps {
  step: number;
}

const AttackPathAnimation = ({ step }: AttackPathAnimationProps) => {
  const isCompromised = step >= MAX_STEP;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-6 shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))/0.25,_transparent_70%)] opacity-30" />
        <div className="relative space-y-6">
          <div className="flex items-stretch gap-6 overflow-x-auto pb-4 md:justify-between md:overflow-visible">
          {diagramNodes.map((node, index) => {
            const isActive = step >= node.activeFrom;
            const connector = connectors[index];
            const isTerminal = node.id === "domain";
            const showCompromised = isCompromised && isTerminal;
            const Icon = showCompromised ? Skull : node.icon;

            return (
              <Fragment key={node.id}>
                <div
                  className={`relative flex flex-1 flex-col items-center gap-4 rounded-3xl border px-4 py-6 text-center transition-all duration-300 ${
                    isActive
                      ? showCompromised
                        ? "border-destructive/70 bg-gradient-to-b from-destructive/35 via-destructive/20 to-background/10 text-destructive shadow-[0_0_55px_rgba(225,29,72,0.85)] ring-2 ring-destructive/60 ring-offset-2 ring-offset-background animate-pulse [animation-duration:2s]"
                        : "border-primary/60 bg-primary/10 text-foreground shadow-card"
                      : "border-border bg-card/70 text-muted-foreground"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? showCompromised
                          ? "border-destructive bg-destructive/30 text-destructive shadow-[0_0_35px_rgba(225,29,72,0.65)] animate-pulse [animation-duration:2s]"
                          : "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground/70"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      isActive
                        ? showCompromised
                          ? "text-destructive"
                          : "text-foreground"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {node.title}
                  </p>
                </div>

                {connector && (
                  <div
                    key={connector.id}
                    className="grid pt-12 min-h-[170px] min-w-[4.5rem] max-w-[5rem] grid-rows-[auto,1fr] justify-items-center gap-2"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        step >= connector.visibleFrom
                          ? "border-primary/70 bg-primary/15 text-primary opacity-100 scale-100"
                          : "border-border bg-card text-muted-foreground/60 opacity-30 scale-90"
                      }`}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <span
                      className={`mt-2 w-full self-start text-center text-[11px] font-medium uppercase tracking-wide transition-all duration-300 ${
                        step >= connector.visibleFrom
                          ? "text-primary opacity-100"
                          : "text-muted-foreground/60 opacity-0"
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
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasMountedRef = useRef(false);
  const prevInViewRef = useRef(false);
  const carouselSteps = useMemo(() => [0, ...timelineEntries.map((entry) => entry.step)], []);

  const handleStepSelect = useCallback((step: number) => {
    setCurrentStep(step);
    setIsAutoplay(false);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setIsAutoplay(isInView);
  }, [isInView]);

  const currentIndex = carouselSteps.indexOf(currentStep);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < carouselSteps.length - 1;

  const goPrev = useCallback(() => {
    if (!canGoPrev) {
      return;
    }
    const previousStep = carouselSteps[currentIndex - 1];
    handleStepSelect(previousStep);
  }, [canGoPrev, carouselSteps, currentIndex, handleStepSelect]);

  const goNext = useCallback(() => {
    if (!canGoNext) {
      return;
    }
    const nextStep = carouselSteps[currentIndex + 1];
    handleStepSelect(nextStep);
  }, [canGoNext, carouselSteps, currentIndex, handleStepSelect]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.55 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (isInView && !prevInViewRef.current) {
      setCurrentStep(0);
      setIsAutoplay(true);
    }

    if (!isInView) {
      setIsAutoplay(false);
    }

    prevInViewRef.current = isInView;
  }, [isInView]);

  useEffect(() => {
    if (!isAutoplay) {
      return;
    }

    if (currentStep >= MAX_STEP) {
      setIsAutoplay(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, MAX_STEP));
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [currentStep, isAutoplay]);

  const activeEntry = timelineEntries.find((entry) => entry.step === currentStep);
  const displayedEntry =
    activeEntry ?? {
      step: 0,
      title: "Baseline posture",
      description: "No risky relationships linked yet. Watch how identity changes enable an attack.",
    };
  const isBaselineCard = displayedEntry.step === 0;
  const carouselCardClasses = isBaselineCard
    ? "border-border bg-card/70 text-muted-foreground"
    : "border-primary/60 bg-primary/10 text-foreground shadow-card";

  return (
    <section ref={sectionRef} id="attack-lifecycle" className="px-6 py-20">
      <div className="container mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Attack Path Example</span>
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">
              This is What Your AD/Entra Audit Needs to Explain.<br className="hidden md:block" />{" "}
              <span className="text-gradient">Generate It Automatically.</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              NeoDynamics maps the path, attaches evidence, and turns it into a clear finding with remediation guidance your client can act on.
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <AttackPathAnimation step={currentStep} />
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                  <button
                  type="button"
                  onClick={handleReset}
                  className={"text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary/80" + (currentStep === 0 ? " opacity-30 cursor-not-allowed" : "")}
                  >
                    Reset to starting point
                  </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div
                  className={`w-full max-w-2xl rounded-3xl border p-8 text-left transition-all duration-300 ${carouselCardClasses}`}
                >
                    <div className="flex items-start gap-4">
                      <div
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        isBaselineCard
                          ? "bg-muted"
                          : "bg-primary"
                      }`}
                    />
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Step {displayedEntry.step.toString().padStart(2, "0")}
                      </p>
                      <h3 className={`${isBaselineCard ? "text-foreground" : "text-foreground"} text-xl font-bold`}>{displayedEntry.title}</h3>
                      <p className="text-sm text-muted-foreground">{displayedEntry.description}</p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canGoNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next step"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex justify-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {currentIndex + 1} / {carouselSteps.length}
              </div>

              <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-6">
                <p className="font-semibold text-foreground text-center ">
                  NeoDynamics continuously maps these permutations and packages them into audit-ready findings with prioritized fixes.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
