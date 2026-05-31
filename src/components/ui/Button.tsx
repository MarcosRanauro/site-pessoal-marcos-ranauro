import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
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
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 font-sans",
        variant === "primary" &&
          "bg-foreground text-background hover:opacity-90",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:border-border-strong",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
