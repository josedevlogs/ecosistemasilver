"use client";

import { motion } from "framer-motion";
import { MovingBorderButton } from "@/components/ui/moving-border";

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative py-28 lg:py-36 px-6 flex items-center justify-center overflow-hidden border-t border-border bg-card"
    >
      {/* Silver dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: "radial-gradient(oklch(0.66 0.020 242 / 0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_65%_at_50%_50%,transparent_35%,oklch(1_0_0)_100%)]" />
      {/* Top silver shimmer */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--silver), transparent)" }}
      />

      <div className="max-w-2xl mx-auto text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0, 0.15, 1] }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            La economía plateada no espera a que el mercado{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--silver) 0%, var(--gold) 100%)",
              }}
            >
              la descubra.
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            Si tu organización quiere ser parte de lo que ya está pasando, es buen momento para hablar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.4 }}
        >
          <MovingBorderButton
            href="mailto:hola@ecosistemasilver.com"
            innerClassName="px-9 py-3 text-sm font-semibold"
          >
            Hablemos →
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
}
