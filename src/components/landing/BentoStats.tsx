"use client";

import { motion } from "framer-motion";
import {
  Users,
  Star,
  Clock,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Section background — must be a solid color so
   the inverted-corner circles blend seamlessly.
───────────────────────────────────────────── */
const SECTION_BG = "oklch(0.13 0.025 255)";
const RADIUS = 32; // matches rounded-[32px] on each cell

/* ─────────────────────────────────────────────
   Inverted corner helper
   Paints a circle in SECTION_BG on top of the
   card corner, creating a concave/bite effect.
───────────────────────────────────────────── */
type Corner = "tl" | "tr" | "bl" | "br";

function IC({ c }: { c: Corner }) {
  const pos: Record<Corner, React.CSSProperties> = {
    tl: { top: 0, left: 0 },
    tr: { top: 0, right: 0 },
    bl: { bottom: 0, left: 0 },
    br: { bottom: 0, right: 0 },
  };
  return (
    <div
      aria-hidden
      className="absolute pointer-events-none z-10"
      style={{
        width: RADIUS,
        height: RADIUS,
        borderRadius: "50%",
        background: SECTION_BG,
        ...pos[c],
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Entrance animation wrapper
───────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function BentoStats() {
  return (
    <section
      id="estadisticas"
      className="py-20 lg:py-28"
      style={{ background: SECTION_BG }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <FadeIn className="text-center">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
            En números
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Una comunidad que crece cada día
          </h2>
        </FadeIn>

        {/* ── Bento grid ── */}
        {/*
          Layout (3-col):
          ┌─────────────────────┬──────────────┐
          │  A  Members (col-2) │  B  98% sat  │  row-1
          ├───────────┬─────────┴──────────────┤
          │  C  +50   │  D  24/7 supp (col-2)  │  row-2
          └───────────┴────────────────────────┘
          ┌─────────────────────────────────────┐
          │  E  Full-width quote / highlight     │  row-3
          └─────────────────────────────────────┘
        */}

        <div className="grid grid-cols-3 gap-3">

          {/* ── A: Members ─── col-span-2, row-1 */}
          <FadeIn delay={0.05} className="col-span-3 sm:col-span-2 relative overflow-visible">
            <div
              className="relative overflow-hidden bg-white h-full min-h-[220px] p-8 flex flex-col justify-between"
              style={{ borderRadius: RADIUS }}
            >
              {/* Inverted corners: only where adjacent cells share an edge */}
              <IC c="br" />

              {/* Background deco */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/60 pointer-events-none" />

              <div className="relative z-[1]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Miembros activos
                  </span>
                </div>
                <p className="text-6xl font-bold text-foreground tracking-tight mt-4">
                  12,847
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  personas confían en Ecosistema Silver
                </p>
              </div>

              <div className="relative z-[1] mt-6 flex items-end gap-1.5">
                {[40, 55, 45, 62, 58, 72, 68, 80, 76, 88, 84, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20"
                    style={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.05 * i + 0.3,
                      duration: 0.5,
                      ease: [0.25, 0, 0.2, 1],
                    }}
                  >
                    <div
                      className="w-full rounded-sm bg-primary"
                      style={{ height: "30%" }}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="relative z-[1] text-xs text-muted-foreground mt-2">
                Crecimiento mensual — últimos 12 meses
              </p>
            </div>
          </FadeIn>

          {/* ── B: Satisfaction ─── col-span-1, row-1 */}
          <FadeIn delay={0.1} className="col-span-3 sm:col-span-1 relative overflow-visible">
            <div
              className="relative overflow-hidden bg-primary h-full min-h-[220px] p-8 flex flex-col justify-between"
              style={{ borderRadius: RADIUS }}
            >
              <IC c="bl" />

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Star size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/70">
                  Satisfacción
                </span>
              </div>

              <div>
                <p className="text-7xl font-bold text-white tracking-tight">
                  98
                  <span className="text-4xl opacity-70">%</span>
                </p>
                <p className="text-sm text-white/60 mt-2 leading-relaxed">
                  de nuestros miembros recomendarían la plataforma
                </p>
              </div>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.4 }}
                  >
                    <Star
                      size={16}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── C: Services ─── col-span-1, row-2 */}
          <FadeIn delay={0.15} className="col-span-3 sm:col-span-1 relative overflow-visible">
            <div
              className="relative overflow-hidden bg-[oklch(0.95_0.012_240)] h-full min-h-[180px] p-8 flex flex-col justify-between"
              style={{ borderRadius: RADIUS }}
            >
              <IC c="tr" />
              <IC c="br" />

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Servicios
                </span>
              </div>

              <div>
                <p className="text-6xl font-bold text-foreground tracking-tight">
                  +50
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  disponibles en la plataforma
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── D: 24/7 ─── col-span-2, row-2 */}
          <FadeIn delay={0.2} className="col-span-3 sm:col-span-2 relative overflow-visible">
            <div
              className="relative overflow-hidden h-full min-h-[180px] p-8 flex flex-col justify-between"
              style={{
                borderRadius: RADIUS,
                background:
                  "linear-gradient(135deg, oklch(0.30 0.09 255), oklch(0.22 0.07 255))",
              }}
            >
              <IC c="tl" />

              {/* Glow effect */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: "oklch(0.65 0.18 240)" }}
              />

              <div className="flex items-center gap-2 relative z-[1]">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/70">
                  Soporte
                </span>
              </div>

              <div className="relative z-[1]">
                <p className="text-6xl font-bold text-white tracking-tight">
                  24/7
                </p>
                <p className="text-sm text-white/60 mt-2">
                  Siempre disponibles, en cualquier momento del día
                </p>
              </div>

              <div className="relative z-[1] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                <span className="text-xs text-white/50">Agentes en línea ahora</span>
              </div>
            </div>
          </FadeIn>

          {/* ── E: Full-width highlight ─── row-3 */}
          <FadeIn delay={0.25} className="col-span-3 relative overflow-visible">
            <div
              className="relative overflow-hidden p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{
                borderRadius: RADIUS,
                background:
                  "linear-gradient(110deg, oklch(0.78 0.12 75 / 0.12), oklch(0.65 0.10 210 / 0.08))",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <IC c="tr" />
              <IC c="tl" />

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.78 0.12 75 / 0.2)" }}
                >
                  <TrendingUp size={24} className="text-[oklch(0.78_0.12_75)]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">
                    Crecimiento year-over-year
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">
                    La comunidad Silver creció un{" "}
                    <span className="text-[oklch(0.78_0.12_75)] font-semibold">
                      +340%
                    </span>{" "}
                    en 2024, consolidándose como la plataforma de referencia
                    para la generación de mayores de 50.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.9</p>
                  <p className="text-xs text-white/40 mt-1">App Store</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.8</p>
                  <p className="text-xs text-white/40 mt-1">Google Play</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-green-400" />
                  <p className="text-xs text-white/50">ISO 27001 Certified</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
