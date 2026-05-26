import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.28em] text-white/40",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
