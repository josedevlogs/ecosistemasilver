"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, PenTool, Rocket } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = [
  { word: "Conversamos", description: "Entendemos tu contexto y tus objetivos", icon: MessageCircle },
  { word: "Diseñamos",   description: "Identificamos qué verticales activan tu propósito", icon: PenTool },
  { word: "Ejecutamos",  description: "Acompañamos con metodología, plataforma y comunidad", icon: Rocket },
];

export function ComoTrabajamos() {
  return (
    <section id="soluciones" className="py-24 lg:py-28 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start mb-14 lg:mb-16">
          <div className="space-y-4 max-w-2xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              Soluciones personalizadas
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15]"
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.5, ease: [0.25, 0, 0.15, 1] }}
            >
              No recibes un catálogo.{" "}
              <span className="block text-muted-foreground font-normal">Recibes una propuesta.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-sm sm:text-base text-muted-foreground leading-relaxed lg:pt-8 max-w-xl"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            Partimos de los objetivos y del contexto real de tu organización para definir una ruta clara.
            Seleccionamos las verticales del ecosistema que generan mayor valor para tu caso, implementamos con
            acompañamiento cercano y medimos resultados en cada etapa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-border" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.word}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.45, ease: [0.25, 0, 0.15, 1] }}
              className="flex flex-col gap-4 md:px-4 md:first:pl-0 md:last:pr-0"
            >
              {/* Step icon */}
              <div className="relative w-10 h-10 flex-shrink-0 rounded-full border border-border bg-background flex items-center justify-center">
                <motion.div
                  className="rounded-full p-1.5"
                  style={{ background: "linear-gradient(135deg, var(--silver), var(--gold))" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.25, duration: 0.35 }}
                >
                  <step.icon size={14} className="text-background" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.word}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <Link
            href="#contacto"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-7 h-auto py-2.5 text-sm font-semibold border-border gap-2",
              "hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-200"
            )}
          >
            Empecemos <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
