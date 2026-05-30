import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-foreground text-background hover:bg-foreground/90",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:border-muted hover:bg-card",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
