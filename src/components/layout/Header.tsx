"use client";

import { useState, useEffect } from "react";
import { cn, focusRing } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const mobileNavLinks = [
  { href: "#sobre",        label: "Sobre" },
  { href: "#stack",        label: "Stack" },
  { href: "#projetos",     label: "Projetos" },
  { href: "#servicos",     label: "Serviços" },
  { href: "#processo",     label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato",      label: "Contato" },
];

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

          {/* Desktop (≥lg): apenas o CTA */}
          <a
            href="#contato"
            className={cn("hidden items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong lg:inline-flex", focusRing)}
          >
            Fale comigo
          </a>

          {/* Mobile (<lg): hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className={cn("text-muted transition-colors hover:text-foreground lg:hidden", focusRing)}
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

        {/* Mobile nav — todas as seções */}
        {menuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            {mobileNavLinks.map((link) => (
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
              className={cn("mt-4 block rounded-full border border-border px-5 py-3 text-center text-sm font-medium text-foreground transition-all hover:border-border-strong", focusRing)}
            >
              Fale comigo
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
