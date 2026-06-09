"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.25, 0, 0.15, 1] as const;

const STATS = [
  {
    value: "+4.500",
    title: "Comunidad Silver activa",
    description:
      "Personas 50+ conectadas y participando en el ecosistema, listas para activar programas, pilotos y colaboraciones con tu organización.",
    accentOklch: "oklch(0.58 0.010 260)",
  },
  {
    value: "50M+",
    title: "Presencia en toda LATAM",
    description:
      "Trabajamos en toda la región latinoamericana, donde el segmento Silver representa el mercado más grande y menos atendido.",
    accentOklch: "oklch(0.48 0.012 260)",
    elevated: true,
  },
  {
    value: "8",
    title: "Áreas del ecosistema",
    description:
      "Ocho segmentos conectados — aprendizaje, empleo, bienestar, cultura y más — en un solo operador para reducir fricción en proyectos B2B.",
    accentOklch: "oklch(0.42 0.012 260)",
  },
];

function ConcentricArcs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-[38%]"
      viewBox="0 0 720 720"
      fill="none"
    >
      {[120, 200, 280, 360].map((r, i) => (
        <circle
          key={r}
          cx="360"
          cy="360"
          r={r}
          stroke="white"
          strokeWidth={1.4 - i * 0.15}
          opacity={0.5 - i * 0.08}
        />
      ))}
    </svg>
  );
}

export function Presencia() {
  return (
    <section
      id="presencia"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf2f7_52%,#f8fafc_100%)] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.95),transparent_48%),radial-gradient(circle_at_80%_80%,rgba(203,213,225,0.18),transparent_40%)]" />
      <ConcentricArcs />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center lg:mb-20">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Presencia
          </motion.p>
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease }}
          >
            Estamos donde el segmento ya existe.
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            Nacimos en Venezuela y crecemos en América Latina. Operamos en{" "}
            <span className="font-semibold text-foreground">
              Venezuela
            </span>{" "}
            y{" "}
            <span className="font-semibold text-foreground">
              Bolivia
            </span>
            , con expansión activa hacia nuevos mercados. Nuestra comunidad no es una promesa — ya está
            funcionando.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl items-end gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.article
              key={stat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.12 + i * 0.1, duration: 0.5, ease }}
              className={cn(
                "relative rounded-[1.75rem] border border-white/75 bg-white/55 px-7 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-md",
                stat.elevated && "md:-translate-y-8 lg:-translate-y-10"
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.accentOklch}, transparent)`,
                }}
              />

              <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {stat.title}
              </p>
              <p className="mx-auto mt-4 max-w-[17rem] text-sm leading-relaxed text-slate-600">
                {stat.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
