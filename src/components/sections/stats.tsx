import { STATS } from "@/lib/data";
import { Counter } from "@/components/shared/counter";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Stats() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-dots radial-fade opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[600px] max-w-full -translate-x-1/2 rounded-full bg-brand-violet/15 blur-[80px]" />

          <RevealGroup className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight md:text-5xl">
                  <span className="text-gradient">
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      prefix={s.prefix}
                      decimals={s.decimals}
                    />
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
