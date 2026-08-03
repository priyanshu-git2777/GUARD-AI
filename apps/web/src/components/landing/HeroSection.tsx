import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  FileSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const proofPoints = [
  "Evidence-first findings",
  "Sensitive-data redaction",
  "Human-reviewed actions",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div aria-hidden="true" className="gradient-orb gradient-orb-one" />
      <div aria-hidden="true" className="gradient-orb gradient-orb-two" />
      <div aria-hidden="true" className="gradient-orb gradient-orb-three" />

      <div className="site-container relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 shadow-sm backdrop-blur-xl">
            <Sparkles className="size-4" />
            Production-oriented learning project
          </div>

          <h1 className="hero-title mt-7">
            Understand complex errors and defensive logs with clearer evidence.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            TraceDefend AI is being built to classify supported stack traces,
            review defensive signals, and keep an organised investigation
            history without treating AI as unquestioned truth.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#features" className="button-primary justify-center">
              Explore the product
              <ArrowRight className="size-4" />
            </Link>
            <Link href="#live-status" className="button-secondary justify-center">
              Check the real API
            </Link>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:flex-wrap">
            {proofPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between border-b border-slate-200/70 pb-5">
            <div>
              <p className="text-sm font-bold text-slate-950">Analysis preview</p>
              <p className="mt-1 text-xs text-slate-500">Example data only</p>
            </div>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              High priority
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <Preview icon={Braces} label="Category" value="Authentication failure" />
            <Preview
              icon={FileSearch}
              label="Evidence"
              value="12 failed logins from one source"
            />
            <Preview
              icon={ShieldCheck}
              label="Recommended check"
              value="Review the account, source IP, and MFA history"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type PreviewProps = {
  icon: typeof Braces;
  label: string;
  value: string;
};

function Preview({ icon: Icon, label, value }: PreviewProps) {
  return (
    <div className="flex gap-4 rounded-3xl border border-white/80 bg-white/65 p-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
          {label}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}
