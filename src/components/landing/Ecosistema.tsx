"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const VERTICALS = [
  { num: "01", name: "Nación Silver",      action: "Donde las personas 50+ se activan, se conectan y construyen su identidad digital.", color: "oklch(0.66 0.020 242)" },
  { num: "02", name: "Aula Silver",        action: "Formación estructurada: cursos, bootcamps y programas con propósito.",              color: "oklch(0.50 0.24 262)"  },
  { num: "03", name: "Microaula",          action: "Aprendizaje en pequeñas dosis, accesible desde cualquier dispositivo.",             color: "oklch(0.52 0.120 162)" },
  { num: "04", name: "Talentos Silver",    action: "El banco de talento humano con más de 2.000 perfiles 50+ listos para trabajar.",   color: "oklch(0.48 0.140 255)" },
  { num: "05", name: "Quiosco Silver",     action: "Emprendimientos digitales sin código, sin barreras.",                               color: "oklch(0.58 0.140 32)"  },
  { num: "06", name: "Bienestar Silver",   action: "Acompañamiento emocional, propósito de vida y adaptación a la longevidad.",        color: "oklch(0.56 0.120 320)" },
  { num: "07", name: "Cuidadores Silver",  action: "Certificación profesional en cuidado de adultos mayores.",                         color: "oklch(0.52 0.115 195)" },
  { num: "08", name: "Creadores Silver",   action: "Arte y cultura creada por y para personas 50+.",                                   color: "oklch(0.62 0.125 58)"  },
];

function Card({ v, index }: { v: typeof VERTICALS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.25, 0, 0.15, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative p-5 rounded-xl border border-border bg-card hover:border-[color:var(--col)] hover:shadow-sm transition-all duration-250 cursor-default overflow-hidden"
      style={{ "--col": v.color } as React.CSSProperties}
    >
      {/* Subtle tint on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ background: `${v.color}08` }}
      />

      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: v.color }}>
            {v.num}
          </span>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={13} className="text-muted-foreground" />
          </motion.div>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug">{v.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{v.action}</p>
        {/* Bottom accent */}
        <motion.div
          className="h-px rounded-full"
          style={{ background: v.color }}
          animate={{ scaleX: hovered ? 1 : 0, originX: 0 }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </motion.div>
  );
}

export function Ecosistema() {
  return (
    <section id="ecosistema" className="py-24 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-12 space-y-3">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            El ecosistema
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.25, 0, 0.15, 1] }}
          >
            Varias líneas.{" "}
            <span className="text-muted-foreground font-normal">Un solo recorrido.</span>
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            Cada vertical resuelve una necesidad real. Juntas, forman el camino completo de la nueva longevidad.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {VERTICALS.map((v, i) => <Card key={v.num} v={v} index={i} />)}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <Link
            href="#para-quien"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Explora cada vertical
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
