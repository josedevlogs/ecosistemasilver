"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.25, 0, 0.15, 1] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-end pt-10 overflow-hidden"
    >
      {/* ── Dot grid — visible only at the edges, fades to invisible at center ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.55 0.018 242 / 0.55) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 88% 88% at 50% 50%, transparent 28%, black 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 88% 88% at 50% 50%, transparent 28%, black 72%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 lg:pt-8 pb-0 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">

          {/* ── Left: copy ── */}
          <div className="space-y-7 w-full max-w-xl justify-self-center self-center lg:-translate-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--gold)" }}
                />
                Economía plateada · América Latina
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[2.25rem] sm:text-[2.75rem] lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            >
              América Latina tiene{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--silver) 0%, var(--gold) 100%)",
                }}
              >
                más de 50 millones
              </span>{" "}
              de adultos mayores.
              <span className="block mt-2 text-muted-foreground font-normal text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] leading-snug">
                La mayoría del mercado las ignora.{" "}
                <span className="font-bold" style={{ color: "var(--navy)" }}>
                  Nosotros no.
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
            >
              Somos Ecosistema Silver. Trabajamos con empresas, instituciones e
              inversionistas que quieren estar presentes en la economía plateada
              — con metodología, comunidad activa y presencia real en la región.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease }}
            >
              <Link
                href="#ecosistema"
                className={cn(
                  buttonVariants(),
                  "rounded-full px-7 h-auto py-2.5 text-sm font-semibold",
                  "bg-[var(--navy)] text-white hover:opacity-90 transition-opacity"
                )}
              >
                Conoce lo que hacemos
              </Link>
              <Link
                href="#contacto"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full px-7 h-auto py-2.5 text-sm font-semibold gap-1.5 border-border"
                )}
              >
                Agenda una conversación
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* ── Right: executive image ── */}
          <motion.div
            className="relative flex items-end justify-center lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
          >
            {/*
              mix-blend-mode: multiply makes white pixels transparent
              against the light silver background.
              Replace the src with a proper transparent-bg PNG for best results.
            */}
            <div
              className="relative w-full max-w-lg select-none"
              style={{ mixBlendMode: "multiply" }}
            >
              <Image
                src="/images/heroman.png"
                alt="Consultor senior escribiendo sobre un portapapeles"
                width={800}
                height={900}
                priority
                className="w-full h-auto object-contain drop-shadow-xl"
                style={{ userSelect: "none" }}
              />
            </div>

            {/* Floating badge — bottom left of image */}
            <motion.div
              className="absolute bottom-8 -left-2 lg:-left-8 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
              initial={{ opacity: 0, y: 12, x: -8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.7, duration: 0.45, ease }}
            >
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--silver-light), var(--gold))" }}
              >
                <span className="text-white text-xs font-bold">ES</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground leading-none mb-0.5">
                  +2.000 perfiles Silver
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Talento 50+ listo para trabajar
                </p>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute top-12 -right-2 lg:-right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45, ease }}
            >
              <p className="text-[10px] text-muted-foreground mb-0.5">Satisfacción</p>
              <p className="text-lg font-bold text-foreground leading-none">98%</p>
              <div className="mt-1.5 h-1 w-16 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--silver), var(--gold))" }}
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ delay: 1.1, duration: 0.8, ease }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
