"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, TrendingUp } from "lucide-react";

const PROFILES = [
  {
    icon: Building2,
    label: "Si eres empresa",
    accentColor: "var(--silver)",
    accentOklch: "oklch(0.66 0.020 242)",
    text: "Tienes un producto, un servicio o un equipo que debería estar hablando con personas mayores de 50 años — y no sabes cómo hacerlo sin sonar condescendiente. Nosotros sí sabemos. Y tenemos la comunidad para probarlo.",
  },
  {
    icon: Landmark,
    label: "Si eres institución u organismo",
    accentColor: "var(--gold)",
    accentOklch: "oklch(0.50 0.24 262)",
    text: "Tienes un mandato de inclusión, empleabilidad o desarrollo social y necesitas un operador que ya esté en terreno. Ecosistema Silver tiene metodología, plataforma y comunidad activa. No empezamos de cero.",
  },
  {
    icon: TrendingUp,
    label: "Si buscas invertir o aliarte",
    accentColor: "oklch(0.48 0.140 255)",
    accentOklch: "oklch(0.48 0.140 255)",
    text: "La economía plateada es el mercado más grande y menos atendido de la región. Estamos construyendo la empresa que lo articula. Si quieres crecer con nosotros, hay conversación que tener.",
  },
];

function ProfileCard({ profile, index }: { profile: typeof PROFILES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const Icon = profile.icon;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mouseX.set((e.clientX - r.left) / r.width - 0.5);
        mouseY.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0, 0.15, 1] }}
      className="relative rounded-2xl border border-border bg-card p-7 flex flex-col gap-5 cursor-default shadow-sm"
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, ${profile.accentOklch}, transparent)` }}
      />

      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: `color-mix(in oklch, ${profile.accentOklch} 14%, transparent)` }}
      >
        <Icon size={18} style={{ color: profile.accentColor }} />
      </div>

      <div className="space-y-2.5 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: profile.accentColor }}>
          {profile.label}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">{profile.text}</p>
      </div>
    </motion.div>
  );
}

export function ParaQuien() {
  return (
    <section id="para-quien" className="py-24 lg:py-28 px-6 bg-secondary/40">
      {/* Subtle square grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(oklch(0.66 0.020 242 / 0.08) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.66 0.020 242 / 0.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-xl mb-12 space-y-3">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Para quién
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.25, 0, 0.15, 1] }}
          >
            ¿Tu organización tiene algo que decirle a este segmento?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {PROFILES.map((p, i) => <ProfileCard key={p.label} profile={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
