"use client";

import { BENEFITS } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Beneficios"
          title={
            <>
              Todo lo que tu web necesita,{" "}
              <span className="text-gradient">incluido</span>
            </>
          }
          description="Diseño, tecnología y estrategia en un único servicio llave en mano."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <RevealItem key={b.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-brand-violet/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                  <div className="mb-4 grid size-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/10 text-brand-violet transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
