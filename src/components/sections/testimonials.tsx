"use client";

import { TESTIMONIALS, type Testimonial } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar } from "@/components/shared/avatar";
import { Stars } from "@/components/shared/stars";
import { BadgeCheck } from "lucide-react";

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <figure className="w-[340px] shrink-0 rounded-2xl glass p-5">
      <div className="flex items-center gap-3">
        <Avatar name={t.name} index={index} />
        <div className="min-w-0">
          <figcaption className="flex items-center gap-1 text-sm font-semibold">
            <span className="truncate">{t.name}</span>
            <BadgeCheck className="size-3.5 shrink-0 text-brand-cyan" />
          </figcaption>
          <p className="truncate text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
      <Stars rating={t.rating} size={14} className="mt-3" />
      <blockquote className="mt-2.5 text-sm leading-relaxed text-foreground/85">
        “{t.text}”
      </blockquote>
    </figure>
  );
}

function Row({
  items,
  reverse,
}: {
  items: { t: Testimonial; index: number }[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-r group overflow-hidden py-1">
      <div
        className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} t={item.t} index={item.index} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const withIndex = TESTIMONIALS.map((t, index) => ({ t, index }));
  const mid = Math.ceil(withIndex.length / 2);
  const rowA = withIndex.slice(0, mid);
  const rowB = withIndex.slice(mid);

  return (
    <section id="opiniones" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Opiniones"
          title={
            <>
              Amado por <span className="text-gradient">+2.500 negocios</span>
            </>
          }
          description="Miles de emprendedores y empresas ya han lanzado su web con nosotros."
        />

        {/* Resumen */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-5 rounded-2xl glass px-6 py-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">4,9</div>
            <Stars rating={5} size={14} className="mt-1" />
          </div>
          <div className="h-10 w-px bg-white/10" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Excelente</span> — basado
            en más de <span className="font-semibold text-foreground">2.500</span> reseñas
            verificadas.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
