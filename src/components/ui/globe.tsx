"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const SPRING_CONFIG = { stiffness: 280, damping: 40, mass: 1 };

const BASE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 1.1,        // centered on LATAM at start
  theta: 0.15,
  dark: 0,          // light mode
  diffuse: 1.8,
  mapSamples: 20000,
  mapBrightness: 5,
  baseColor:   [0.88, 0.90, 0.94],   // silver-blue land
  markerColor: [0.18, 0.48, 0.95],   // executive blue markers
  glowColor:   [0.82, 0.88, 0.98],   // soft blue glow
  scale: 1,
  offset: [0, 0],
  markers: [
    { location: [10.48,  -66.88], size: 0.09 },  // Venezuela — Caracas ★
    { location: [-16.50, -68.15], size: 0.09 },  // Bolivia — La Paz ★
    { location: [4.71,  -74.07],  size: 0.04 },  // Bogotá
    { location: [-12.05,-77.04],  size: 0.04 },  // Lima
    { location: [-23.55,-46.63],  size: 0.04 },  // São Paulo
    { location: [-34.61,-58.38],  size: 0.04 },  // Buenos Aires
    { location: [19.43, -99.13],  size: 0.04 },  // CDMX
    { location: [-33.45,-70.67],  size: 0.04 },  // Santiago
    { location: [-0.23, -78.52],  size: 0.04 },  // Quito
    { location: [-17.78,-63.18],  size: 0.04 },  // Santa Cruz
  ],
};

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const globeRef     = useRef<ReturnType<typeof createGlobe> | null>(null);
  const rafRef       = useRef<number | null>(null);
  const phiRef       = useRef(BASE_CONFIG.phi);
  const pointerDown  = useRef<number | null>(null);
  const pointerDelta = useRef(0);

  const r       = useMotionValue(0);
  const rSpring = useSpring(r, SPRING_CONFIG);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = () => canvas.offsetWidth;

    globeRef.current = createGlobe(canvas, {
      ...BASE_CONFIG,
      width:  size() * 2,
      height: size() * 2,
    });

    // Animation loop
    const tick = () => {
      if (pointerDown.current === null) phiRef.current += 0.003;

      globeRef.current?.update({
        phi:    phiRef.current + rSpring.get(),
        width:  size() * 2,
        height: size() * 2,
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // Fade in
    requestAnimationFrame(() => { canvas.style.opacity = "1"; });

    const onResize = () => {
      globeRef.current?.update({ width: size() * 2, height: size() * 2 });
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      globeRef.current?.destroy();
      window.removeEventListener("resize", onResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("relative w-full aspect-square", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-700"
        style={{ cursor: "grab" }}
        onPointerDown={(e) => {
          pointerDown.current = e.clientX - pointerDelta.current;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          (e.target as HTMLElement).style.cursor = "grabbing";
        }}
        onPointerUp={(e) => {
          pointerDown.current = null;
          (e.target as HTMLElement).style.cursor = "grab";
        }}
        onPointerOut={(e) => {
          pointerDown.current = null;
          (e.target as HTMLElement).style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerDown.current === null) return;
          const delta = e.clientX - pointerDown.current;
          pointerDelta.current = delta;
          r.set(delta / 200);
        }}
      />
    </div>
  );
}
