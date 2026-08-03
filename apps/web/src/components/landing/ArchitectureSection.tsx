import BackendHealthCard from "@/components/system/BackendHealthCard";
import SectionHeading from "@/components/ui/SectionHeading";

const layers = [
  ["Next.js", "Public website and future dashboard"],
  ["Spring Boot", "REST APIs and business rules"],
  ["PostgreSQL", "Permanent relational data"],
  ["Supporting services", "Redis, RabbitMQ, and object storage"],
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-shell scroll-mt-24">
      <div className="site-container">
        <SectionHeading
          eyebrow="Current architecture"
          title="A modular platform that remains understandable while it grows."
          description="Supporting services are introduced only when they solve a real persistence, performance, or reliability problem."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {layers.map(([name, detail]) => (
            <article key={name} className="glass-card p-5">
              <h3 className="font-bold text-slate-950">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>

        <div id="live-status" className="mt-8 scroll-mt-28">
          <BackendHealthCard />
        </div>
      </div>
    </section>
  );
}
