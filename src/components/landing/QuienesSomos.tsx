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
    <section className="relative min-h-[820px] overflow-hidden border-y border-white/60 px-6 py-20 lg:min-h-[860px] lg:px-8 lg:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-[center_right_38%]"
        style={{
          backgroundImage:
            "url('/images/personas_adultas_mayores_sonriendo_y_caminando.png')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(248,250,252,0.88)_30%,rgba(248,250,252,0.32)_58%,rgba(248,250,252,0.06)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.96),transparent_28%),radial-gradient(circle_at_42%_82%,rgba(226,232,240,0.42),transparent_38%)]"
      />
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-between">
        <div ref={ref} className="max-w-xl space-y-7 pt-24 lg:pt-32">
          <div className="space-y-2">
            {["Te conectamos con el", "Segmento Silver"].map((line, i) => (
              <div key={line} className="relative inline-block w-full">
                <motion.p
                  className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-[2.35rem]"
                  style={{ color: i === 1 ? "var(--foreground)" : "oklch(0.42 0.010 260)" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5, ease }}
                >
                  {i === 1 ? <strong>{line}</strong> : line}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.55, ease }}
          >
            <p className="text-xl font-semibold leading-[1.45] text-foreground/85 sm:text-2xl">
              Articulamos aprendizaje, empleo, bienestar y cultura para personas mayores de 50 años en América Latina.
            </p>
            <p className="text-lg font-normal leading-[1.45] text-slate-600 sm:text-xl">
              y convertimos ese alcance en oportunidades concretas para las
              organizaciones que trabajan con nosotros.
            </p>
          </motion.div>
        </div>

        <div ref={refR} className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-0">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={inViewR ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.45, ease }}
                className="group relative flex min-h-[170px] flex-col gap-4 overflow-hidden rounded-2xl border border-white/45 bg-white/[0.075] p-5 text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-24px_48px_rgba(255,255,255,0.08),0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-[22px] transition-all duration-250 hover:-translate-y-1 hover:bg-white/[0.12]"
              >
                <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/18 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/45 bg-white/[0.12] text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
                  <Icon size={18} />
                </div>
                <div className="relative">
                  <p className="mb-1.5 text-sm font-semibold text-foreground">{p.label}</p>
                  <p className="text-xs leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

