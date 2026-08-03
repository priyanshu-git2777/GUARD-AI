import Link from "next/link";
import { GitBranch } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/45">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            TraceDefend AI is an educational, production-oriented project. It is
            not a replacement for professional incident response.
          </p>
        </div>

        <Link
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950"
        >
          <GitBranch aria-hidden="true" className="size-4" />
          View source code
        </Link>
      </div>
    </footer>
  );
}
