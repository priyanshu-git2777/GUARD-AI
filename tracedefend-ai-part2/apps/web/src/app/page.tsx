import BackendHealthCard from "@/components/system/BackendHealthCard";

const services = [
  {
    name: "PostgreSQL",
    purpose: "Permanent users, workspaces, findings and incidents",
  },
  {
    name: "Redis",
    purpose: "Sessions, caching and rate-limit state",
  },
  {
    name: "RabbitMQ",
    purpose: "Background analysis jobs that survive slow requests",
  },
  {
    name: "MinIO",
    purpose: "Private S3-compatible file storage for local development",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div aria-hidden="true" className="gradient-orb gradient-orb-one" />
      <div aria-hidden="true" className="gradient-orb gradient-orb-two" />
      <div aria-hidden="true" className="gradient-orb gradient-orb-three" />

      <div className="relative mx-auto max-w-6xl">
        <header className="glass-card p-7 sm:p-10">
          <p className="eyebrow">Part 2 · Real development environment</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            TraceDefend AI now has a real frontend, backend and local
            infrastructure.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This page proves that the browser can communicate with the Spring
            Boot API while PostgreSQL, Redis, RabbitMQ and object storage run
            through Docker.
          </p>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <BackendHealthCard />

          <article className="glass-card p-6">
            <p className="eyebrow">Current milestone</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              Foundation before features
            </h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>✓ Environment variables stay outside committed code.</li>
              <li>✓ Database schema changes will use Flyway migrations.</li>
              <li>✓ Slow analysis will later run through RabbitMQ workers.</li>
              <li>✓ Uploaded files will later use private object storage.</li>
            </ul>
          </article>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.name} className="glass-card p-5">
              <h2 className="font-semibold text-slate-950">{service.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.purpose}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
