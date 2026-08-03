import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  ["01", "Submit evidence", "Paste a stack trace or upload a supported text log."],
  ["02", "Parse and classify", "Validate, normalize, and apply deterministic rules."],
  ["03", "Explain safely", "Send only redacted evidence to the AI explanation layer."],
  ["04", "Review and act", "Inspect confidence and evidence before creating an incident."],
];

export default function WorkflowSection() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-24">
      <div className="site-container">
        <SectionHeading
          eyebrow="How it works"
          title="One understandable journey from evidence to a reviewable result."
          description="Each stage has one clear responsibility, and the model receives no direct access to the database, cloud account, or operating system."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <article key={number} className="glass-card p-6">
              <span className="text-xs font-extrabold tracking-[0.18em] text-indigo-600">
                {number}
              </span>
              <h3 className="mt-7 text-lg font-bold text-slate-950">{title}</h3>
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
