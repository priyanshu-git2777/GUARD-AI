"use client";

import Link from "next/link";
import { GitBranch, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-slate-50/75 backdrop-blur-2xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Link href="/" aria-label="TraceDefend AI home">
          <Logo />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <GitBranch aria-hidden="true" className="size-4" />
            GitHub
          </Link>
          <Link href="#live-status" className="button-primary">
            View live status
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-2xl border border-white/80 bg-white/75 text-slate-800 shadow-sm backdrop-blur-xl lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/60 bg-white/90 px-5 py-5 backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
