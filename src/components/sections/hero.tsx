"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/shared/stars";
import { AISimulation } from "./ai-simulation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Fondos */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid radial-fade opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-brand-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[5%] top-[30%] -z-10 h-[360px] w-[360px] rounded-full bg-brand-cyan/15 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        {/* Columna de texto */}
        <div className="text-center lg:text-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground/80">
              <Sparkles className="size-3.5 text-brand-violet" />
              Páginas web premium generadas por IA
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Tu nueva página web creada por{" "}
            <span className="text-gradient">IA en menos de 24 horas</span>.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Responde unas preguntas y recibe una propuesta personalizada con un
            diseño exclusivo adaptado a tu negocio.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#configurador">
                Crear mi propuesta
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href="#ejemplos">
                <Play className="fill-current" />
                Ver ejemplos
              </a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <Stars rating={5} />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">4,9/5</strong> · +2.500 clientes
              </span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="text-sm text-muted-foreground">
              Sin conocimientos técnicos
            </span>
          </motion.div>
        </div>

        {/* Columna de simulación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <AISimulation />
        </motion.div>
      </div>
    </section>
  );
}
