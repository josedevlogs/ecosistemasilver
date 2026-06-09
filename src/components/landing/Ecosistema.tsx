"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  MonitorPlay,
  Palette,
  ShieldCheck,
  Users,
} from "lucide-react";

const VERTICALS = [
  { num: "01", name: "Nación Silver",      action: "Donde las personas 50+ se activan, se conectan y construyen su identidad digital.", color: "oklch(0.58 0.010 260)", icon: Users, image: "/images/personas_adultas_mayores_sonriendo_y_caminando.png" },
  { num: "02", name: "Aula Silver",        action: "Formación estructurada: cursos, bootcamps y programas con propósito.",              color: "oklch(0.48 0.012 260)", icon: GraduationCap, image: "/images/hero_img.png" },
  { num: "03", name: "Microaula",          action: "Aprendizaje en pequeñas dosis, accesible desde cualquier dispositivo.",             color: "oklch(0.54 0.011 260)", icon: BookOpen, image: "/images/heroimg.png" },
  { num: "04", name: "Talentos Silver",    action: "El banco de talento humano con más de 2.000 perfiles 50+ listos para trabajar.",   color: "oklch(0.44 0.012 260)", icon: BriefcaseBusiness, image: "/images/hero-silver-consultor.png" },
  { num: "05", name: "Quiosco Silver",     action: "Emprendimientos digitales sin código, sin barreras.",                               color: "oklch(0.56 0.010 260)", icon: MonitorPlay, image: "/images/personas_adultas_mayores_sonriendo_y_caminando.png" },
  { num: "06", name: "Bienestar Silver",   action: "Acompañamiento emocional, propósito de vida y adaptación a la longevidad.",        color: "oklch(0.52 0.011 260)", icon: Heart, image: "/images/heroimg.png" },
  { num: "07", name: "Cuidadores Silver",  action: "Certificación profesional en cuidado de adultos mayores.",                         color: "oklch(0.50 0.011 260)", icon: ShieldCheck, image: "/images/heroman.png" },
  { num: "08", name: "Creadores Silver",   action: "Arte y cultura creada por y para personas 50+.",                                   color: "oklch(0.60 0.010 260)", icon: Palette, image: "/images/personas_adultas_mayores_sonriendo_y_caminando.png" },
];

const cardFade = { duration: 0.45, ease: [0.25, 0, 0.15, 1] } as const;

export function Ecosistema() {
  const [active, setActive] = useState(0);
  const total = VERTICALS.length;

  const activeVertical = VERTICALS[active];
  const ActiveIcon = activeVertical.icon;

  const goTo = (index: number) => {
    setActive((index + total) % total);
  };

  const goNext = () => goTo(active + 1);
  const goPrev = () => goTo(active - 1);

  return (
    <section
      id="ecosistema"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf2f7_52%,#f8fafc_100%)] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_42%_72%,rgba(203,213,225,0.22),transparent_35%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            El ecosistema
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Varias líneas.{" "}
            <span className="font-normal text-slate-500">Un solo recorrido.</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Cada vertical activa una necesidad distinta. Juntas forman un camino diseñado para impulsar el potencial del segmento Silver.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Verticales del ecosistema"
          className="flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:justify-center lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {VERTICALS.map((vertical, index) => {
            const Icon = vertical.icon;
            const selected = index === active;

            return (
              <button
                key={vertical.num}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="ecosistema-panel"
                id={`ecosistema-tab-${vertical.num}`}
                onClick={() => goTo(index)}
                className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 transition ${
                  selected
                    ? "border-white/80 bg-white/70 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_28px_rgba(15,23,42,0.08)]"
                    : "border-white/50 bg-white/30 text-slate-600 hover:bg-white/50"
                }`}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/70 bg-white/50"
                  style={{ color: vertical.color }}
                >
                  <Icon size={15} />
                </span>
                <span className="whitespace-nowrap text-xs font-semibold">{vertical.name}</span>
              </button>
            );
          })}
        </div>

        <article
          id="ecosistema-panel"
          role="tabpanel"
          aria-labelledby={`ecosistema-tab-${activeVertical.num}`}
          className="relative w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_32px_90px_rgba(15,23,42,0.12)]"
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[21/9] lg:min-h-[380px]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeVertical.num}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={cardFade}
                className="absolute inset-0"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${activeVertical.image}')` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.38)_0%,rgba(248,250,252,0.12)_40%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(255,255,255,0.55),transparent_30%)]" />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-widest text-white/90">
                      {activeVertical.num} / {String(total).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/55 bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]">
                      <ActiveIcon size={19} />
                    </span>
                  </div>

                  <div className="max-w-2xl space-y-4 text-white">
                    <div className="h-px w-20 bg-white/70" />
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                      {activeVertical.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/85 sm:text-base lg:max-w-xl">
                      {activeVertical.action}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/55 bg-white/16 px-4 py-2.5 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition hover:bg-white/24"
                    >
                      Explorar
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </article>

        <nav
          aria-label="Navegación del ecosistema"
          className="flex flex-col gap-4 rounded-2xl border border-white/70 bg-white/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4"
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Vertical anterior"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/50 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:bg-white/70 sm:justify-start"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>

          <div className="flex flex-1 flex-col items-center gap-3 px-2">
            <div className="flex w-full max-w-md items-center gap-1">
              {VERTICALS.map((vertical, index) => {
                const selected = index === active;
                return (
                  <button
                    key={vertical.num}
                    type="button"
                    aria-label={`Ir a ${vertical.name}`}
                    aria-current={selected ? "step" : undefined}
                    onClick={() => goTo(index)}
                    className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200/80 transition"
                  >
                    <span
                      className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-300"
                      style={{
                        width: selected ? "100%" : "0%",
                        background: vertical.color,
                      }}
                    />
                    <span
                      className={`absolute inset-0 rounded-full transition-opacity ${
                        selected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                      }`}
                      style={{ background: vertical.color }}
                    />
                  </button>
                );
              })}
            </div>
            <p className="text-center font-mono text-[11px] font-semibold tracking-widest text-slate-500">
              <span style={{ color: activeVertical.color }}>{activeVertical.name}</span>
              {" · "}
              {activeVertical.num} / {String(total).padStart(2, "0")}
            </p>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Vertical siguiente"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/50 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:bg-white/70 sm:justify-end"
          >
            Siguiente
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </section>
  );
}
