import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  className,
  size = 16,
}: {
  rating?: number;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`${rating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-white/20"
          }
        />
      ))}
    </div>
  );
}
