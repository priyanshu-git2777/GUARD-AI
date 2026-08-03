import {
  Activity,
  Bot,
  FileCode2,
  FileWarning,
  History,
  ShieldAlert,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  ["Developer Error Analyzer", "Classify supported stack traces and extract useful frames.", FileCode2],
  ["Defensive Log Analyzer", "Apply evidence-based rules to supported security logs.", ShieldAlert],
  ["Guarded AI Explanation", "Use redacted evidence and validated structured output.", Bot],
  ["Investigation History", "Keep findings, notes, and status changes organised.", History],
  ["Failure-Aware Workflows", "Show queued, processing, completed, and failed states.", FileWarning],
  ["Observable Platform", "Use health checks, request IDs, and automated tests.", Activity],
] as const;

export default function FeatureSection() {
  return (
    <section id="features" className="section-shell scroll-mt-24">
      <div className="site-container">
        <SectionHeading
          eyebrow="Core capabilities"
          title="A focused product, not disconnected AI buttons."
          description="The first public version stays limited to supported errors, defensive logs, evidence-backed findings, and investigation workflows."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(([title, description, Icon]) => (
            <article key={title} className="glass-card p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
