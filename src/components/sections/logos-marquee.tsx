import { CLIENT_LOGOS } from "@/lib/data";
import { Reveal } from "@/components/shared/reveal";

export function LogosMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-y border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground">
            Más de{" "}
            <span className="font-semibold text-foreground">2.500 empresas</span>{" "}
            ya han confiado en WEB24 AI
          </p>
        </Reveal>

        <div className="mask-fade-r mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {row.map((name, i) => (
              <span
                key={i}
                className="select-none whitespace-nowrap text-xl font-semibold tracking-tight text-foreground/35 transition-colors hover:text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
