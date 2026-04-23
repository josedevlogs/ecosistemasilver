import Link from "next/link";

const NAV = [
  { label: "El ecosistema", href: "#ecosistema" },
  { label: "Soluciones",    href: "#soluciones"  },
  { label: "Contacto",      href: "#contacto"    },
];

const SOCIAL = [
  { label: "LinkedIn",  href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X",         href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 rounded-md overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, var(--silver-light), var(--gold))" }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-[oklch(0.14_0.028_255)] text-[10px] font-bold"
              >
                ES
              </span>
            </div>
            <span className="font-semibold text-sm text-foreground">Ecosistema Silver</span>
          </Link>

          <nav className="flex flex-wrap gap-5">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {SOCIAL.map((s) => (
              <Link key={s.label} href={s.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(90deg, transparent, var(--silver-light), transparent)" }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-muted-foreground/60">
          <p>© 2026 Ecosistema Silver. Todos los derechos reservados.</p>
          <p className="italic">Construyendo el mercado de la nueva longevidad en América Latina.</p>
        </div>
      </div>
    </footer>
  );
}
