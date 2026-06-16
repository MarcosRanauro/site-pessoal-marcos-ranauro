"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/data/navigation";

const ctaPrimary = cn(
  "inline-flex items-center justify-center rounded-full",
  "bg-accent px-5 py-2 text-sm font-medium text-background",
  "transition-opacity hover:opacity-90",
  focusRing,
);

const ctaPrimaryCompact = cn(
  "inline-flex shrink-0 items-center justify-center rounded-full",
  "bg-accent px-2.5 py-1.5 text-[11px] font-medium leading-tight text-background",
  "transition-opacity hover:opacity-90",
  "sm:px-4 sm:py-2 sm:text-sm",
  focusRing,
);

const ctaSecondary = cn(
  "inline-flex items-center justify-center rounded-full",
  "border border-border bg-transparent px-5 py-2 text-sm font-medium text-foreground",
  "transition-colors hover:border-border-strong hover:bg-surface/50",
  focusRing,
);

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 animate-fade-in-down transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo MR_ */}
          <Logo />

          {/* Desktop (≥lg): CTAs — primário + secundário */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contato" className={ctaSecondary}>
              Fale comigo
            </a>
            <Link href="/formulario" className={ctaPrimary}>
              Solicitar orçamento
            </Link>
          </div>

          {/* Mobile (<lg): CTA primário visível + hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <Link href="/formulario" className={ctaPrimaryCompact}>
              Solicitar orçamento
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className={cn(
                "flex min-h-11 min-w-11 shrink-0 items-center justify-center",
                "text-muted transition-colors hover:text-foreground",
                focusRing,
              )}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav — todas as seções */}
        {menuOpen && (
          <nav className={cn(
            "border-t border-border py-4 lg:hidden transition-all duration-300",
            !scrolled && "bg-background/92 backdrop-blur-2xl"
          )}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn("block py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground", focusRing)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className={cn("mt-4 block text-center", ctaSecondary, "px-5 py-3")}
            >
              Fale comigo
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
