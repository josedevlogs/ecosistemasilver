import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const ECOSISTEMA_LINKS = [
  { label: "El ecosistema", href: "#ecosistema" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Presencia LATAM", href: "#presencia" },
];

const EMPRESA_LINKS = [
  { label: "Quiénes somos", href: "#inicio" },
  { label: "Contacto", href: "#contacto" },
  { label: "Prensa", href: "#contacto" },
  { label: "Alianzas", href: "#contacto" },
];

const LEGAL_LINKS = [
  { label: "Privacidad", href: "#" },
  { label: "Términos de uso", href: "#" },
  { label: "Cookies", href: "#" },
];

const SOCIAL = [{ label: "LinkedIn", href: "#" }];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-white/68 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[oklch(0.14_0.01_260)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/8 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                <span className="text-xs font-bold tracking-tight text-white">ES</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-white">
                  Ecosistema Silver
                </p>
                <p className="text-[11px] text-white/45">Economía plateada · LATAM</p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/58">
              Plataforma integral que articula aprendizaje, empleo, bienestar y cultura para
              personas 50+ y las organizaciones que quieren conectar con el segmento Silver.
            </p>

            <div className="space-y-2.5 text-sm text-white/58">
              <a
                href="mailto:hola@ecosistemasilver.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={14} className="text-white/40" />
                hola@ecosistemasilver.com
              </a>
              <p className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-white/40" />
                Venezuela · Bolivia · Expansión regional
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
            <FooterColumn title="Ecosistema" links={ECOSISTEMA_LINKS} />
            <FooterColumn title="Empresa" links={EMPRESA_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Síguenos
              </p>
              <ul className="space-y-2.5">
                {SOCIAL.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/14 bg-white/6 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Hablemos con el equipo
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[11px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ecosistema Silver. Todos los derechos reservados.</p>
          <p className="max-w-md sm:text-right">
            Construyendo el mercado de la nueva longevidad en América Latina.
          </p>
        </div>
      </div>
    </footer>
  );
}
