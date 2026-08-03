import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  ["Private by default", "Uploaded files will use private object storage."],
  ["Redact before AI", "Secrets and unnecessary personal data must be masked."],
  ["Human-reviewed actions", "The model will not automatically modify cloud resources."],
  ["Workspace isolation", "Every protected record must be checked against its workspace."],
  ["Honest limitations", "Accuracy claims will apply only to documented categories."],
];

export default function SecuritySection() {
  return (
    <section id="security" className="section-shell scroll-mt-24">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Security principles"
          title="AI support without dangerous authority."
          description="Security shapes file handling, authorization, AI boundaries, user messaging, testing, and deployment."
        />

        <div className="grid gap-4">
          {principles.map(([title, description]) => (
            <article key={title} className="glass-card p-6">
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
