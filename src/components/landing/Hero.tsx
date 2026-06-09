"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Heart } from "lucide-react";
import { useRef } from "react";
import { Globe } from "@/components/ui/globe";

const ease = [0.25, 0, 0.15, 1] as const;

const GLASS_CARDS = [
  {
    icon: GraduationCap,
    title: "Formación",
    copy: "+160 cursos especializados",
    className: "right-[12rem] top-[22%]",
  },
  {
    icon: BadgeCheck,
    title: "Pasaporte Silver",
    copy: "Beneficios para vivir mejor",
    className: "right-0 top-[22%]",
  },
  {
    icon: Heart,
    title: "Bienestar",
    copy: "Cuerpo, mente y propósito",
    className: "right-0 top-[calc(22%+102px)]",
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const globeOpacity = useTransform(scrollYProgress, [0, 0.75], [0.74, 0.18]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-[100svh] overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf2f7_52%,#f8fafc_100%)] px-6 pt-12 lg:px-8 lg:pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 62% 34%, oklch(0.78 0.012 242 / 0.34) 0%, oklch(0.92 0.006 242 / 0.22) 28%, transparent 58%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.055] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, black 0.7px, transparent 0.8px), radial-gradient(circle at 70% 60%, black 0.6px, transparent 0.75px)",
          backgroundPosition: "0 0, 13px 17px",
          backgroundSize: "26px 26px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%+50px)] top-[15%] z-0 hidden w-[min(620px,58vw)] -translate-x-1/2 lg:block"
        style={{
          opacity: globeOpacity,
          maskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
        }}
      >
        <Globe
          interactive={false}
          markers={[]}
          rotationSpeed={0.00075}
          mapBrightness={7}
          diffuse={1.35}
          baseColor={[0.9, 0.92, 0.96]}
          glowColor={[0.94, 0.94, 0.96]}
          className="drop-shadow-[0_0_42px_rgba(255,255,255,0.8)]"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, transparent 36%, black 48%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 36%, black 48%, black 100%)",
        }}
      >
        <Image
          src="/images/hero_img.png"
          alt="Personas silver usando tecnología y leyendo"
          width={1920}
          height={1080}
          priority
          draggable={false}
          className="h-auto w-full select-none object-contain"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl">
        <div className="relative">
          <div className="max-w-[29rem] space-y-6 pt-10 sm:pt-12 lg:pt-14">
            <motion.h1
              className="text-[2.32rem] font-bold leading-[1.05] tracking-[-0.055em] text-slate-500 sm:text-[2.9rem] lg:text-[3.22rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            >
              América Latina tiene{" "}
              <span className="text-slate-950">
                más de 50 millones
              </span>{" "}
              de adultos mayores.
              <span className="block mt-2 text-muted-foreground font-normal text-[1.6rem] sm:text-[1.9rem] lg:text-[2.1rem] leading-snug">
                La mayoría del mercado las ignora.{" "}
                <span className="font-bold text-foreground">
                  Nosotros no.
                </span>
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-3 pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease }}
            >
              <Link
                href="#ecosistema"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/80 bg-slate-950 px-5 py-3 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_42px_rgba(15,23,42,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_22px_48px_rgba(15,23,42,0.28)]"
              >
                Conoce lo que hacemos
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {GLASS_CARDS.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={`absolute ${card.className} flex h-[86px] w-44 items-start gap-3 rounded-2xl border border-white/70 bg-white/16 p-4 text-foreground/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + index * 0.08, duration: 0.55, ease }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/55 bg-white/20 text-foreground/50">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="space-y-1">
                    <span className="block text-xs font-semibold text-foreground/75">{card.title}</span>
                    <span className="block text-[10px] leading-snug text-foreground/45">{card.copy}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
