interface AmbientOrbProps {
  className?: string;
  size?: number;
  intensity?: "soft" | "medium";
}

export function AmbientOrb({
  className = "",
  size = 320,
  intensity = "soft",
}: AmbientOrbProps) {
  const opacity = intensity === "soft" ? 0.35 : 0.55;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full animate-breathe blur-[60px] select-none -z-10 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(200, 131, 10, ${opacity}) 0%, rgba(200, 131, 10, 0.08) 55%, transparent 75%)`,
      }}
    />
  );
}
