import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeCheck, CircleMinus, Info, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";

type CellValue =
  | { kind: "yes"; label?: string }
  | { kind: "partial"; label: string }
  | { kind: "no"; label?: string }
  | { kind: "text"; label: string };

type ComparisonRow = {
  capability: string;
  manual: CellValue;
  pointTools: CellValue;
  neo: CellValue;
};

const cellIcon = (value: CellValue) => {
  switch (value.kind) {
    case "yes":
      return <BadgeCheck className="h-4 w-4 text-primary" />;
    case "partial":
      return <TriangleAlert className="h-4 w-4 text-amber-500" />;
    case "no":
      return <CircleMinus className="h-4 w-4 text-muted-foreground" />;
    case "text":
      return <Info className="h-4 w-4 text-muted-foreground" />;
  }
};

const cellText = (value: CellValue) => {
  if (value.kind === "yes") return value.label ?? "Yes";
  if (value.kind === "no") return value.label ?? "No";
  return value.label;
};

const rows: ComparisonRow[] = [
  {
    capability: "Structured report pack (summary + findings + evidence)",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Stitched" },
    neo: { kind: "yes" },
  },
  {
    capability: "Prioritized remediation plan (what to fix first)",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Limited" },
    neo: { kind: "yes" },
  },
  {
    capability: "Attack-path evidence you can explain",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Tool output" },
    neo: { kind: "yes" },
  },
  {
    capability: "Consistency across engagements / teams",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Varies" },
    neo: { kind: "yes", label: "Context-aware" },
  },
  {
    capability: "Retests & progress tracking",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Ad hoc" },
    neo: { kind: "yes", label: "Built-in" },
  },
  {
    capability: "Multi-domain delivery",
    manual: { kind: "no" },
    pointTools: { kind: "partial", label: "Varies" },
    neo: { kind: "yes" },
  },
];

const mobileTabs = [
  { id: "manual", label: "Manual", shortLabel: "Manual" },
  { id: "tools", label: "Standalone Tools", shortLabel: "Tools" },
  { id: "neo", label: "NeoDynamics", shortLabel: "Neo" },
] as const;

type MobileTabId = (typeof mobileTabs)[number]["id"];

export const Comparison = () => {
  const [mobileTab, setMobileTab] = useState<MobileTabId>("neo");

  const mobileContent = useMemo(() => {
    switch (mobileTab) {
      case "manual":
        return {
          bestFor: "Deep one-off analysis when you have time.",
          gaps: [
            "Slow to repeat across domains or customers",
            "Report writing and evidence gathering eats hours",
          ],
          highlight: false,
        };
      case "tools":
        return {
          bestFor: "Standalone scanners/graphs to answer a specific question.",
          gaps: [
            "Output still needs manual packaging into a deliverable",
            "Prioritization and narrative often require analyst interpretation",
          ],
          highlight: false,
        };
      case "neo":
        return {
          bestFor: "Repeatable AD/Entra audit delivery for security teams.",
          gaps: [
            "Structured findings + evidence, ready to export",
            "Prioritized remediation with clear rationale",
            "Attack paths packaged into stakeholder-friendly findings",
            "Built for retests and progress tracking",
          ],
          highlight: true,
        };
    }
  }, [mobileTab]);

  return (
    <section id="comparison" className="py-20 px-4 md:px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-gradient">NeoDynamics</span>
          </h2>
          <p className="hidden md:block text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop stitching together screenshots, spreadsheets, and point tools. NeoDynamics turns assessment data into prioritized findings and a structured report pack you can deliver and retest.
          </p>
          <p className="md:hidden text-sm text-muted-foreground max-w-3xl mx-auto">
            NeoDynamics turns assessment data into prioritized, report-ready output.
          </p>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Decision-Maker Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="md:hidden">
              <div className="grid grid-cols-3 gap-2 rounded-xl bg-muted p-1">
                {mobileTabs.map((tab) => {
                  const isActive = tab.id === mobileTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setMobileTab(tab.id)}
                      className={
                          "h-9 rounded-lg text-[11px] font-semibold transition-all px-1 " +
                          (isActive
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground")
                        }
                    >
                      <span className="sm:hidden">{tab.shortLabel}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div
                className={
                  "mt-4 rounded-2xl border p-5 space-y-3 " +
                  (mobileContent.highlight
                    ? "border-primary/25 bg-primary/5"
                    : "border-border bg-background/30")
                }
              >
                <p className="text-sm font-semibold text-foreground">Best for</p>
                <p className="text-sm text-muted-foreground">{mobileContent.bestFor}</p>
                <p className="text-sm font-semibold text-foreground">
                  {mobileTab === "neo" ? "Why it wins" : "Where time goes"}
                </p>
                <div className="grid gap-2 text-sm text-muted-foreground">
                    {mobileContent.gaps.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            <div className="hidden md:block">
              <Table className="table-fixed">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[46%]">Capability</TableHead>
                    <TableHead className="w-[18%]">Manual</TableHead>
                    <TableHead className="w-[18%]">Standalone Tools</TableHead>
                    <TableHead className="w-[18%] bg-primary/10 border-l border-primary/20">
                      <div className="flex items-center justify-between gap-3">
                        <span>NeoDynamics</span>
                        <span className="my-1.5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          Best for delivery
                        </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.capability}>
                      <TableCell className="font-medium">{row.capability}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {cellIcon(row.manual)}
                          <span className="text-muted-foreground">{cellText(row.manual)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {cellIcon(row.pointTools)}
                          <span className="text-muted-foreground">{cellText(row.pointTools)}</span>
                        </div>
                      </TableCell>
                      <TableCell className="bg-primary/10 border-l border-primary/20">
                        <div className="flex items-center gap-2">
                          {cellIcon(row.neo)}
                          <span className="text-foreground font-semibold">{cellText(row.neo)}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 hidden md:grid gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-card border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">The “Why We Win” Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-base">
              <div className="space-y-2">
                <p className="font-semibold text-foreground">NeoDynamics is built for delivery.</p>
                <p>
                  It reduces hours spent on triage and report writing, improves consistency across analysts, and makes retests and iteration faster.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
                <p className="text-sm">
                  <span className="font-semibold text-foreground">Positioning:</span> Attack paths + posture + prioritized fixes + explainability, packaged into client-ready deliverables.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/25">
            <CardHeader>
              <CardTitle className="text-2xl">Great Fit If You…</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-base text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                Run recurring AD/Entra assessments (internally or for customers).
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                Need consistent findings and reporting across analysts or teams.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                Want to shorten time from data to an actionable remediation plan.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 md:hidden rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
          NeoDynamics turns assessment data into prioritized, report-ready output for faster delivery.
        </div>
      </div>
    </section>
  );
};
