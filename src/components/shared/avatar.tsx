import { cn } from "@/lib/utils";

const GRADIENTS = [
  ["#7c5cff", "#22d3ee"],
  ["#f59e0b", "#ef4444"],
  ["#10b981", "#06b6d4"],
  ["#ec4899", "#8b5cf6"],
  ["#3b82f6", "#8b5cf6"],
  ["#f43f5e", "#f59e0b"],
  ["#14b8a6", "#6366f1"],
  ["#a855f7", "#ec4899"],
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Avatar generado (persona ficticia) a partir de las iniciales. */
export function Avatar({
  name,
  index = 0,
  className,
}: {
  name: string;
  index?: number;
  className?: string;
}) {
  const [from, to] = GRADIENTS[index % GRADIENTS.length];
  return (
    <span
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-white",
        className
      )}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}
