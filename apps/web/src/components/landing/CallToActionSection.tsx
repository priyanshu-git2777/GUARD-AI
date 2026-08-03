import Link from "next/link";
import { GitBranch } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CallToActionSection() {
  return (
    <section className="pb-24 pt-10">
      <div className="site-container">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-300">
            Build in public
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the complete engineering journey from foundation to public
            deployment.
          </h2>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
          >
            <GitBranch className="size-4" />
            View the repository
          </Link>
        </div>
      </div>
    </section>
  );
}
