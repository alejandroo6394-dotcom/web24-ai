import { cn } from "@/lib/utils";

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center">
        <svg
          viewBox="0 0 32 32"
          className="size-8"
          aria-hidden="true"
          fill="none"
        >
          <defs>
            <linearGradient id="w24grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect
            x="1.25"
            y="1.25"
            width="29.5"
            height="29.5"
            rx="9"
            stroke="url(#w24grad)"
            strokeWidth="1.5"
          />
          <path
            d="M8 11.5l2.6 9 2.9-9 2.5 9 2.6-9"
            stroke="url(#w24grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23.5" cy="12" r="1.6" fill="#22d3ee" />
        </svg>
      </span>
      {withWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          WEB24<span className="text-gradient"> AI</span>
        </span>
      )}
    </span>
  );
}
