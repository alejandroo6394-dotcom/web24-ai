import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glow";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-white/5 text-foreground/80 border border-white/10",
        variant === "outline" && "border border-white/15 text-foreground/70",
        variant === "glow" &&
          "border border-brand-violet/30 bg-brand-violet/10 text-brand-violet",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
