"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Building2, Landmark, TrendingUp } from "lucide-react";

const ease = [0.25, 0, 0.15, 1] as const;

const PROFILES = [
  {
    icon: Building2,
    label: "Si eres empresa",
    accentColor: "var(--silver)",
    accentOklch: "oklch(0.58 0.010 260)",
    text: "Tienes un producto, un servicio o un equipo que debería estar hablando con personas mayores de 50 años — y no sabes cómo hacerlo sin sonar condescendiente.",
    highlight: "Nosotros sí sabemos. Y tenemos la comunidad para probarlo.",
    arcClass: "lg:translate-y-10 lg:-translate-x-1",
  },
  {
    icon: Landmark,
    label: "Si eres institución u organismo",
    accentColor: "var(--accent)",
    accentOklch: "oklch(0.48 0.012 260)",
    text: "Tienes un mandato de inclusión, empleabilidad o desarrollo social y necesitas un operador que ya esté en terreno. Ecosistema Silver tiene metodología, plataforma y comunidad activa. No empezamos de cero.",
    arcClass: "lg:-translate-y-8",
  },
  {
    icon: TrendingUp,
    label: "Si buscas invertir o aliarte",
    accentColor: "var(--silver)",
    accentOklch: "oklch(0.54 0.010 260)",
    text: "La economía plateada es el mercado más grande y menos atendido de la región. Estamos construyendo la empresa que lo articula.",
    highlight: "Si quieres crecer con nosotros, hay conversación que tener.",
    arcClass: "lg:translate-y-10 lg:translate-x-1",
  },
];

function ConcentricArcs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-1/2 h-[min(72vw,680px)] w-screen max-w-none -translate-x-1/2"
      viewBox="0 0 1440 680"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
    >
      {[220, 320, 420, 520, 620, 720].map((r, i) => (
        <circle
          key={r}
          cx="720"
          cy="680"
          r={r}
          stroke="white"
          strokeWidth={1.6 - i * 0.1}
          opacity={0.58 - i * 0.06}
        />
      ))}
      {[
        [420, 470],
        [560, 370],
        [720, 310],
        [880, 370],
        [1020, 470],
        [320, 560],
        [1120, 560],
      ].map(([cx, cy], i) => (
        <circle key={`dot-${i}`} cx={cx} cy={cy} r="3.5" fill="white" opacity={0.52 + (i % 3) * 0.12} />
      ))}
    </svg>
  );
}

function ProfileCard({
  profile,
  index,
}: {
  profile: (typeof PROFILES)[0];
  index: number;
}) {
  const Icon = profile.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease }}
      className={`relative mx-auto w-full max-w-[300px] ${profile.arcClass}`}
    >
      <div
        className="absolute -top-5 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/75 bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.9)]"
        style={{ color: profile.accentColor }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <div className="relative flex min-h-[260px] flex-col rounded-[1.35rem] border border-white/70 bg-white/45 px-6 pb-8 pt-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-md">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${profile.accentOklch}, transparent)` }}
        />

        <p
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: profile.accentColor }}
        >
          {profile.label}
        </p>

        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          {profile.text}
          {profile.highlight ? (
            <>
              {" "}
              <span className="font-semibold" style={{ color: profile.accentColor }}>
                {profile.highlight}
              </span>
            </>
          ) : null}
        </p>

        <div
          className="absolute -bottom-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-white/65 shadow-[0_0_18px_rgba(255,255,255,0.55),inset_0_1px_0_rgba(255,255,255,0.85)]"
          style={{ color: profile.accentColor }}
        >
          <ArrowDown size={15} strokeWidth={2.2} />
        </div>
      </div>
    </motion.article>
  );
}

export function ParaQuien() {
  return (
    <section
      id="para-quien"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf2f7_52%,#f8fafc_100%)] px-6 pt-24 pb-0 lg:px-8 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.92),transparent_42%),radial-gradient(circle_at_18%_20%,rgba(203,213,225,0.2),transparent_35%)]" />
      <ConcentricArcs />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center lg:mb-16">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Para quién
          </motion.p>
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease }}
          >
            ¿Tu organización tiene algo que decirle a este segmento?
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            Sea cual sea tu rol, tenemos el camino para que generes impacto, te conectes con las
            personas 50+ y formes parte de la economía plateada.
          </motion.p>
        </div>

        <div className="relative mx-auto min-h-[560px] max-w-6xl pb-[min(16vw,127px)] sm:min-h-[620px] sm:pb-[min(15vw,138px)] lg:min-h-[680px] lg:pb-[min(14vw,161px)]">
          <div className="relative z-10 flex flex-col items-center gap-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:px-4 lg:pt-2">
            {PROFILES.map((profile, index) => (
              <ProfileCard key={profile.label} profile={profile} index={index} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.2, duration: 0.6, ease }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[5] aspect-[2/1] w-[57.5vw] max-w-none -translate-x-1/2 overflow-hidden"
        aria-hidden
      >
        <div className="absolute bottom-0 left-1/2 aspect-square w-full -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-[3px] border-white/85 shadow-[0_0_32px_rgba(255,255,255,0.62),inset_0_1px_0_rgba(255,255,255,0.82)]">
          <Image
            src="/images/personas_adultas_mayores_sonriendo_y_caminando.png"
            alt=""
            fill
            className="object-cover object-[center_22%]"
            sizes="58vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),transparent_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.08)_0%,rgba(248,250,252,0.22)_100%)]" />
        </div>
      </motion.div>
    </section>
  );
}
