"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Briefcase, Heart, Palette } from "lucide-react";

const PILLARS = [
  { icon: BookOpen, label: "Aprendizaje", desc: "Cursos, bootcamps y formación continua con propósito" },
  { icon: Briefcase, label: "Empleo",      desc: "+2.000 perfiles 50+ listos para incorporarse" },
  { icon: Heart,     label: "Bienestar",   desc: "Propósito de vida, salud emocional y longevidad" },
  { icon: Palette,   label: "Cultura",     desc: "Arte y creación por y para la generación Silver" },
];

const ease = [0.25, 0, 0.15, 1] as const;

export function QuienesSomos() {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-12%" });
  const refR    = useRef<HTMLDivElement>(null);
  const inViewR = useInView(refR, { once: true, margin: "-12%" });

  return (
    <section className="py-24 lg:py-32 px-6 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

          {/* ── Left: editorial typography ── */}
          <div ref={ref} className="space-y-10">

            {/* Intro headline */}
            <div className="space-y-3">
              {["Te conectamos con el", "Segmento Silver"].map((line, i) => (
                <div key={line} className="relative inline-block w-full">
                  <motion.p
                    className="text-3xl sm:text-[2.2rem] font-bold leading-tight"
                    style={{ color: i === 1 ? "var(--foreground)" : "oklch(0.65 0.012 250)" }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.12, duration: 0.5, ease }}
                  >
                    {i === 1 ? <strong>{line}</strong> : line}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="h-px max-w-xs"
              style={{ background: "linear-gradient(90deg, var(--silver), transparent)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.38, duration: 0.55, ease }}
            />

            {/* Positive statement */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.55, ease }}
            >
              <p className="text-2xl sm:text-[1.75rem] font-semibold leading-[1.35] text-foreground">
                Somos la empresa que articula{" "}
                <Chip>aprendizaje</Chip>,{" "}
                <Chip>empleo</Chip>,{" "}
                <Chip>bienestar</Chip> y{" "}
                <Chip>cultura</Chip>{" "}
                para personas mayores de 50 años en América Latina —
              </p>
              <p className="text-xl sm:text-2xl text-muted-foreground font-normal leading-[1.4]">
                y que convierte ese alcance en oportunidades concretas para las
                organizaciones que trabajan con nosotros.
              </p>
            </motion.div>

            {/* Footnote */}
            <motion.p
              className="text-sm text-muted-foreground leading-relaxed max-w-lg border-l-2 pl-4"
              style={{ borderColor: "var(--silver-light)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.62, duration: 0.5 }}
            >
              Operamos a través de siete verticales conectadas, con una
              comunidad que ya existe y una metodología que ya funciona.
            </motion.p>
          </div>

          {/* ── Right: pillar cards ── */}
          <div ref={refR} className="grid grid-cols-2 gap-3 lg:pt-2">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={inViewR ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.45, ease }}
                  className="group rounded-2xl border border-border bg-background p-5 flex flex-col gap-3 hover:border-[color:var(--gold)]/40 hover:shadow-sm transition-all duration-250"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.50 0.24 262 / 0.10)" }}
                  >
                    <Icon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{p.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  {/* Bottom accent on hover */}
                  <div
                    className="h-px w-0 group-hover:w-full rounded-full transition-all duration-300"
                    style={{ background: "var(--gold)" }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

/** Inline blue highlight chip */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-2 py-0.5 text-[0.9em] font-semibold mx-0.5"
      style={{
        background: "oklch(0.50 0.24 262 / 0.10)",
        color: "var(--gold)",
      }}
    >
      {children}
    </span>
  );
}
