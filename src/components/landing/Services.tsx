"use client";

import { CardStack } from "@/components/ui/card-stack";
import {
  Heart,
  Wallet,
  Users,
  GraduationCap,
  Plane,
  MessageCircle,
  Shield,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: Wallet,
    title: "Gestión Financiera",
    description:
      "Planificación de jubilación, inversiones seguras y asesoría económica personalizada para maximizar tu patrimonio.",
    badge: "Más popular",
    badgeColor: "bg-blue-100 text-blue-700",
    accent: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: Heart,
    title: "Salud & Bienestar",
    description:
      "Seguimiento de salud, telemedicina, recordatorios de medicamentos y conexión con especialistas de confianza.",
    badge: "Nuevo",
    badgeColor: "bg-green-100 text-green-700",
    accent: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    icon: Users,
    title: "Comunidad Silver",
    description:
      "Conecta con personas de tu generación, participa en grupos de interés y comparte experiencias de vida.",
    badge: null,
    badgeColor: "",
    accent: "from-violet-50 to-purple-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Formación Continua",
    description:
      "Cursos online, talleres presenciales y programas de capacitación digital adaptados a tu ritmo.",
    badge: null,
    badgeColor: "",
    accent: "from-amber-50 to-yellow-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 5,
    icon: Plane,
    title: "Viajes & Experiencias",
    description:
      "Paquetes de viaje exclusivos para mayores de 50, con guías especializados y servicios adaptados.",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-700",
    accent: "from-sky-50 to-cyan-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    id: 6,
    icon: MessageCircle,
    title: "Asesoría Legal",
    description:
      "Consultas jurídicas sobre herencias, pensiones, seguros y trámites administrativos con expertos.",
    badge: null,
    badgeColor: "",
    accent: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 7,
    icon: Shield,
    title: "Seguridad Digital",
    description:
      "Protección ante fraudes, privacidad en línea y soporte técnico disponible las 24 horas del día.",
    badge: null,
    badgeColor: "",
    accent: "from-slate-50 to-gray-50",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  {
    id: 8,
    icon: Smartphone,
    title: "App Accesible",
    description:
      "Diseño intuitivo con letra grande, alto contraste y asistente de voz para una experiencia sin barreras.",
    badge: null,
    badgeColor: "",
    accent: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const cardItems = services.map((s) => ({
  id: s.id,
  content: (
    <div
      key={s.id}
      className={`bg-gradient-to-br ${s.accent} p-7 h-full min-h-[220px] flex flex-col justify-between`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
            <s.icon size={24} className={s.iconColor} />
          </div>
          {s.badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
              {s.badge}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-4">
        <span className="text-xs font-medium text-muted-foreground">
          {s.id} / {services.length}
        </span>
        <div className="flex gap-1 ml-2">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === s.id - 1 ? "w-4 bg-primary" : "w-1 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ),
}));

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas en un solo ecosistema
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Diseñado específicamente para acompañarte en esta etapa de vida con
            servicios de alta calidad y accesibilidad total.
          </p>
        </motion.div>

        {/* Card Stack layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stack */}
          <motion.div
            className="max-w-md mx-auto w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CardStack items={cardItems} interval={3500} depth={3} />
            <p className="text-center text-xs text-muted-foreground mt-8">
              Las tarjetas rotan automáticamente · 8 servicios disponibles
            </p>
          </motion.div>

          {/* Right: service list */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className={`w-9 h-9 rounded-lg ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <s.icon size={18} className={s.iconColor} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {s.title}
                    </p>
                    {s.badge && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
