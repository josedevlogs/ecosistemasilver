import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  position?: string;
  variant?: "light" | "dark";
}

export function Spotlight({
  className,
  position = "50% 0%",
  variant = "light",
}: SpotlightProps) {
  const color =
    variant === "light"
      ? "oklch(0.66 0.020 242 / 0.18)"
      : "oklch(0.32 0.09 255 / 0.25)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(ellipse 85% 55% at ${position}, ${color} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
