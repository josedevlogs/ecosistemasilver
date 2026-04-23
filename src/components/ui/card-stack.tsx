"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CardStackItem = {
  id: number;
  content: React.ReactNode;
};

interface CardStackProps {
  items: CardStackItem[];
  /** ms between auto-flips, 0 to disable */
  interval?: number;
  /** visible cards behind the top one */
  depth?: number;
}

export function CardStack({ items, interval = 4000, depth = 3 }: CardStackProps) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    if (interval === 0) return;
    const timer = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const visible = cards.slice(-depth).reverse(); // bottom → top

  return (
    <div className="relative w-full" style={{ height: "260px" }}>
      {visible.map((card, idx) => {
        const isTop = idx === visible.length - 1;
        const offset = (visible.length - 1 - idx) * 10;
        const scale = 1 - (visible.length - 1 - idx) * 0.04;

        return (
          <motion.div
            key={card.id}
            className="absolute inset-x-0"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: offset,
              scale,
              zIndex: idx,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div
              className={`rounded-2xl border bg-white shadow-md overflow-hidden transition-shadow duration-300 ${
                isTop ? "shadow-xl" : ""
              }`}
            >
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
