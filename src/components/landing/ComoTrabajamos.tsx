"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, PenTool, Rocket } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.25, 0, 0.15, 1] as const;

const STEPS = [
  {
    word: "Conversamos",
    description: "Entendemos tu contexto y tus objetivos",
    icon: MessageCircle,
    accentOklch: "oklch(0.58 0.010 260)",
  },
  {
    word: "Diseñamos",
    description: "Identificamos qué verticales activan tu propósito",
    icon: PenTool,
    accentOklch: "oklch(0.48 0.012 260)",
  },
  {
    word: "Ejecutamos",
    description: "Acompañamos con metodología, plataforma y comunidad",
    icon: Rocket,
    accentOklch: "oklch(0.42 0.012 260)",
  },
];

function TimelineCard({
  step,
  index,
  side,
}: {
  step: (typeof STEPS)[0];
  index: number;
  side: "left" | "right";
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -18 : 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.45, ease }}
      className={cn(
        "relative rounded-[1.25rem] border border-white/70 bg-white/45 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-md",
        side === "left" ? "mr-auto text-left" : "ml-auto text-left"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${step.accentOklch}, transparent)`,
        }}
      />

      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/70 bg-white/55"
          style={{ color: step.accentOklch }}
        >
          <Icon size={15} strokeWidth={1.8} />
        </span>
        <h3 className="text-base font-semibold text-foreground">{step.word}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
    </motion.div>
  );
}

export function ComoTrabajamos() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf2f7_52%,#f8fafc_100%)] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.92),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(203,213,225,0.18),transparent_38%)]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="space-y-6 lg:sticky lg:top-28 lg:max-w-lg">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Soluciones personalizadas
          </motion.p>
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease }}
          >
            No recibes un catálogo.{" "}
            <span className="font-normal text-slate-500">Recibes una propuesta.</span>
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            Partimos de los objetivos y del contexto real de tu organización para definir una ruta clara.
            Seleccionamos las verticales del ecosistema que generan mayor valor para tu caso, implementamos con
            acompañamiento cercano y medimos resultados en cada etapa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <Link
              href="#contacto"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex h-auto items-center gap-2 rounded-xl border border-white/80 bg-white/50 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:bg-white/70 hover:text-slate-900"
              )}
            >
              Empecemos <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="relative px-2 py-12 sm:px-4 sm:py-16">
          <div
            aria-hidden
            className="absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300/70 to-transparent"
            style={{
              top: "-4rem",
              bottom: "-4rem",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />

          <ol className="relative space-y-12 sm:space-y-14">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <li key={step.word} className="relative flex min-h-[92px] items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.35, ease }}
                    className="absolute left-1/2 top-1/2 z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/75 font-mono text-[11px] font-semibold tracking-widest text-slate-500 shadow-[0_0_18px_rgba(255,255,255,0.6),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>

                  <div
                    className={cn(
                      "relative z-10 w-[calc(50%-1.35rem)] max-w-[240px] sm:max-w-[260px]",
                      isLeft ? "mr-auto pr-2 sm:pr-4" : "ml-auto pl-2 sm:pl-4"
                    )}
                  >
                    <TimelineCard step={step} index={i} side={isLeft ? "left" : "right"} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
