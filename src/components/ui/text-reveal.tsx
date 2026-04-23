"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** "words" | "chars" */
  by?: "words" | "chars";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  by = "words",
}: TextRevealProps) {
  const tokens = by === "words" ? text.split(" ") : text.split("");
  const joinChar = by === "words" ? " " : "";

  return (
    <span className={cn("inline", className)}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: by === "words" ? "0.25em" : 0 }}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: delay + i * 0.035,
            duration: 0.45,
            ease: [0.25, 0, 0.15, 1],
          }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  );
}
