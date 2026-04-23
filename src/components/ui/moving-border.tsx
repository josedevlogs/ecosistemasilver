"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MovingBorderButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  innerClassName?: string;
  onClick?: () => void;
}

export function MovingBorderButton({
  children,
  href,
  className,
  innerClassName,
  onClick,
}: MovingBorderButtonProps) {
  const content = (
    <span className={cn("relative block overflow-hidden rounded-full p-px", className)}>
      <motion.span
        aria-hidden
        className="absolute inset-[-150%] origin-center rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, var(--silver) 25%, var(--gold) 50%, transparent 75%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <span
        className={cn(
          "relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold",
          "bg-[var(--navy)] text-white",
          innerClassName
        )}
      >
        {children}
      </span>
    </span>
  );

  if (href)
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
