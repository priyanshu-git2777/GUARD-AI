import { ShieldCheck } from "lucide-react";

export default function Logo() {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-2xl border border-white/80 bg-white/75 shadow-lg shadow-indigo-950/10 backdrop-blur-xl">
        <ShieldCheck aria-hidden="true" className="size-5 text-indigo-600" />
      </span>
      <span className="text-base font-bold tracking-tight text-slate-950">
        TraceDefend AI
      </span>
    </div>
  );
}
