import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
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
  bloodhound: CellValue;
  pingcastle: CellValue;
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
    capability: "Reduces operational load (less manual triage & reporting)",
    bloodhound: { kind: "no" },
    pingcastle: { kind: "partial", label: "Partially" },
    neo: { kind: "yes" },
  },
  {
    capability: "Business-aware prioritization (what to fix first)",
    bloodhound: { kind: "no" },
    pingcastle: { kind: "no" },
    neo: { kind: "yes" },
  },
  {
    capability: "Explains “why” a risk exists (client-friendly narrative)",
    bloodhound: { kind: "no" },
    pingcastle: { kind: "partial", label: "Partially" },
    neo: { kind: "yes" },
  },
  {
    capability: "Concrete defenses / fix suggestions",
    bloodhound: { kind: "no" },
    pingcastle: { kind: "partial", label: "Static guidance" },
    neo: { kind: "yes", label: "Context-aware" },
  },
  {
    capability: "Automated structured reporting (organized & concise)",
    bloodhound: { kind: "no" },
    pingcastle: { kind: "yes", label: "Large report" },
    neo: { kind: "yes", label: "Consultant-ready" },
  },
  {
    capability: "Attack paths / attack dynamics",
    bloodhound: { kind: "yes" },
    pingcastle: { kind: "no" },
    neo: { kind: "yes" },
  },
];

const mobileTabs = [
  { id: "bloodhound", label: "BloodHound" },
  { id: "pingcastle", label: "PingCastle" },
  { id: "neo", label: "NeoDynamics" },
] as const;

type MobileTabId = (typeof mobileTabs)[number]["id"];

export const Comparison = () => {
  const [mobileTab, setMobileTab] = useState<MobileTabId>("neo");

  const mobileContent = useMemo(() => {
    switch (mobileTab) {
      case "bloodhound":
        return {
          bestFor: "Exploring attack paths with graph-based analysis.",
          gaps: [
            "Less “what to fix first” prioritization for stakeholders",
            "Not focused on structured, client-ready reporting",
          ],
          highlight: false,
        };
      case "pingcastle":
        return {
          bestFor: "Posture reporting and AD health checks with broad coverage.",
          gaps: [
            "Limited attack-path dynamics and client explainability",
            "Guidance is often static and requires more consultant interpretation",
          ],
          highlight: false,
        };
      case "neo":
        return {
          bestFor: "Consultants and auditors who need faster, repeatable AD/Entra audit delivery.",
          gaps: [
            "Business-aware prioritization + concrete, context-aware fixes",
            "Attack paths packaged into client-ready findings with explanations",
            "Structured reporting built for engagement delivery and retests",
          ],
          highlight: true,
        };
    }
  }, [mobileTab]);

  return (
    <section id="comparison" className="py-20 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-gradient">NeoDynamics</span> Wins for Consulting Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BloodHound excels at attack-path graphing. PingCastle excels at posture reporting. NeoDynamics combines both and adds the missing pieces: prioritization, explainability, and repeatable client-ready output.
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
                        "h-10 rounded-lg text-sm font-medium transition-all " +
                        (isActive
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground")
                      }
                    >
                      {tab.label}
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
                  {mobileTab === "neo" ? "Why it wins" : "Gaps for consulting delivery"}
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
                    <TableHead className="w-[18%]">BloodHound</TableHead>
                    <TableHead className="w-[18%]">PingCastle</TableHead>
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
                          {cellIcon(row.bloodhound)}
                          <span className="text-muted-foreground">{cellText(row.bloodhound)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {cellIcon(row.pingcastle)}
                          <span className="text-muted-foreground">{cellText(row.pingcastle)}</span>
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
                <TableCaption>
                  High-level, consultant-focused comparison for positioning (not an exhaustive checklist).
                </TableCaption>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-card border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">The “Why We Win” Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-base">
              <div className="space-y-2">
                <p className="font-semibold text-foreground">NeoDynamics is built for services delivery.</p>
                <p>
                  It reduces non-billable work (collection, triage, report writing), improves consistency across consultants, and makes retests and iteration faster.
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
                Run AD/Entra audits routinely and want to ship faster.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                Need consistent findings and report quality across a small team.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                Want to differentiate with clearer remediation and “why it matters”.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
