"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

const STATS = [
  { value: "2",      label: "países activos" },
  { value: "+2.000", label: "perfiles Silver" },
  { value: "7",      label: "verticales conectadas" },
  { value: "LATAM",  label: "visión regional" },
];

const LOCATIONS = [
  { name: "Venezuela", flag: "🇻🇪" },
  { name: "Bolivia",   flag: "🇧🇴" },
];

export function Presencia() {
  return (
    <section id="presencia" className="py-24 lg:py-28 px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">

          {/* ── Globe ── */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0.15, 1] }}
          >
            {/* Glow underneath */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 50% 55%, oklch(0.66 0.020 242 / 0.18) 0%, transparent 70%)",
              }}
            />

            <div className="w-full max-w-[520px]">
              <Globe />
            </div>

            {/* Active country badges */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card/90 backdrop-blur-sm px-3 py-1.5 shadow-sm"
                >
                  <span className="text-sm leading-none">{loc.flag}</span>
                  <span className="text-xs font-semibold text-foreground">{loc.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                </motion.div>
              ))}
            </div>

            {/* Drag hint */}
            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 select-none pointer-events-none">
              Arrastra para rotar
            </p>
          </motion.div>

          {/* ── Text ── */}
          <div className="space-y-7 order-1 lg:order-2">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.25, 0, 0.15, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Presencia
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                Estamos donde el segmento ya existe.
              </h2>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Nacimos en Venezuela y crecemos en América Latina. Actualmente
              operamos en{" "}
              <span className="font-semibold" style={{ color: "var(--gold)" }}>
                Venezuela
              </span>{" "}
              y{" "}
              <span className="font-semibold" style={{ color: "var(--gold)" }}>
                Bolivia
              </span>
              , con expansión activa hacia nuevos mercados. Nuestra comunidad
              no es una promesa — ya está funcionando.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Expansion note */}
            <motion.div
              className="flex items-center gap-2 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
            >
              <span className="flex -space-x-1">
                {["🇻🇪", "🇧🇴"].map((f) => (
                  <span key={f} className="text-base">{f}</span>
                ))}
              </span>
              <span>Operando · Expandiéndonos activamente en LATAM</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
