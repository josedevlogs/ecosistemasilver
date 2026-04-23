"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "El ecosistema", href: "#ecosistema" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Expansión", href: "#presencia" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--silver)] to-[var(--gold)] opacity-90" />
              <span className="absolute inset-0 flex items-center justify-center text-[oklch(0.08_0.018_258)] text-xs font-bold tracking-tight">
                ES
              </span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-foreground">
              Ecosistema Silver
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <MovingBorderButton href="#contacto">
              Hablemos
            </MovingBorderButton>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 space-y-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">
                <MovingBorderButton href="#contacto">
                  Hablemos
                </MovingBorderButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
