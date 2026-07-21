"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title={
            <>
              De una idea a tu web en{" "}
              <span className="text-gradient">4 pasos</span>
            </>
          }
          description="Un proceso guiado por inteligencia artificial, sin fricción y sin conocimientos técnicos."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Línea vertical */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-violet/60 via-brand-cyan/40 to-transparent md:left-1/2" />

          <div className="space-y-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={step.title}>
                  <Reveal direction={isLeft ? "right" : "left"}>
                    <div
                      className={`relative flex items-start gap-5 md:w-1/2 ${
                        isLeft ? "md:pr-10" : "md:ml-auto md:flex-row-reverse md:pl-10 md:text-right"
                      }`}
                    >
                      {/* Nodo */}
                      <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-background shadow-glow md:absolute md:top-1 md:size-14"
                        style={
                          isLeft
                            ? { right: "-28px", left: "auto" }
                            : { left: "-28px", right: "auto" }
                        }
                      >
                        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/10" />
                        <Icon className="relative size-6 text-brand-violet" />
                      </div>

                      <div className="glass rounded-2xl p-5 md:flex-1">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                          Paso {i + 1}
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center py-1 md:hidden">
                      <ArrowDown className="size-5 text-brand-violet/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
