"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

const PHASES = [
  { label: "Analizando tu negocio", color: "#7c5cff" },
  { label: "Generando el layout", color: "#22d3ee" },
  { label: "Aplicando la paleta", color: "#ec4899" },
  { label: "Redactando los textos", color: "#f59e0b" },
  { label: "Optimizando el SEO", color: "#10b981" },
  { label: "Publicando tu web", color: "#7c5cff" },
];

const PALETTES = [
  ["#7c5cff", "#22d3ee", "#0b0b12", "#f5f5fa"],
  ["#10b981", "#06b6d4", "#07120f", "#f0fdf9"],
  ["#f59e0b", "#ef4444", "#140f0a", "#fff8f0"],
  ["#ec4899", "#8b5cf6", "#140a11", "#fff0f8"],
];

const CODE_LINES = [
  "<section class=\"hero\">",
  "  <h1>{brand.name}</h1>",
  "  <Cta>Empezar ahora</Cta>",
  "</section>",
  "export const theme = {",
  "  primary: '#7c5cff',",
  "  radius: '1rem',",
  "}",
];

export function AISimulation() {
  const [phase, setPhase] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p + 1) % PHASES.length);
      setTick((t) => t + 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const palette = PALETTES[tick % PALETTES.length];
  const built = phase; // cuántos bloques mostrar

  return (
    <div className="relative">
      {/* Halo */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-violet/25 via-transparent to-brand-cyan/20 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong overflow-hidden rounded-3xl shadow-card"
        style={{ perspective: 1000 }}
      >
        {/* Barra de ventana */}
        <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/50">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            web24.ai/tu-negocio
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2 py-1 text-[10px] font-medium text-brand-violet">
            <Sparkles className="size-3" />
            IA
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 p-4">
          {/* Preview en construcción */}
          <div className="col-span-3 space-y-2.5">
            {/* navbar preview */}
            <motion.div
              layout
              className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
            >
              <div
                className="h-2.5 w-14 rounded-full"
                style={{ background: palette[0] }}
              />
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-1.5 w-6 rounded-full bg-white/15" />
                ))}
              </div>
            </motion.div>

            {/* hero block */}
            <AnimatePresence mode="popLayout">
              {built >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg p-3"
                  style={{
                    background: `linear-gradient(120deg, ${palette[0]}22, ${palette[1]}18)`,
                  }}
                >
                  <div
                    className="h-3 w-3/4 rounded-full"
                    style={{ background: palette[3] + "cc" }}
                  />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" />
                  <div
                    className="mt-3 h-5 w-20 rounded-md"
                    style={{ background: palette[0] }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* cards grid */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <AnimatePresence key={i} mode="popLayout">
                  {built >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="space-y-1.5 rounded-lg bg-white/5 p-2"
                    >
                      <div
                        className="h-6 w-6 rounded-md"
                        style={{ background: palette[1] + "cc" }}
                      />
                      <div className="h-1.5 w-full rounded-full bg-white/15" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* footer bar */}
            <AnimatePresence mode="popLayout">
              {built >= 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                >
                  <div className="h-1.5 w-16 rounded-full bg-white/15" />
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                    <Check className="size-3" /> SEO 100
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Panel de código + paleta */}
          <div className="col-span-2 space-y-3">
            <div className="rounded-lg bg-black/40 p-3 font-mono text-[10px] leading-relaxed">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0.15 }}
                  animate={{
                    opacity: i <= (tick * 2 + phase) % (CODE_LINES.length + 2) ? 1 : 0.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className="truncate text-brand-cyan/80"
                >
                  <span className="mr-2 text-white/20">{i + 1}</span>
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Paleta */}
            <div className="rounded-lg bg-white/5 p-2.5">
              <div className="mb-2 text-[9px] uppercase tracking-wider text-foreground/40">
                Paleta
              </div>
              <div className="flex gap-1.5">
                {palette.map((c, i) => (
                  <motion.div
                    key={c + i}
                    layout
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="h-6 flex-1 rounded-md ring-1 ring-white/10"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra de estado */}
        <div className="border-t border-white/5 px-4 py-3">
          <div className="flex items-center justify-between text-xs">
            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 font-medium"
                style={{ color: PHASES[phase].color }}
              >
                <span className="relative flex size-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ background: PHASES[phase].color }}
                  />
                  <span
                    className="relative inline-flex size-2 rounded-full"
                    style={{ background: PHASES[phase].color }}
                  />
                </span>
                {PHASES[phase].label}…
              </motion.span>
            </AnimatePresence>
            <span className="text-foreground/40">
              {Math.round(((phase + 1) / PHASES.length) * 100)}%
            </span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #7c5cff, #22d3ee)",
              }}
              animate={{ width: `${((phase + 1) / PHASES.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Badges flotantes */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-20 hidden items-center gap-2 rounded-full glass px-3 py-2 text-xs font-medium shadow-lg sm:flex"
      >
        <span className="size-2 rounded-full bg-emerald-400" /> Entrega 24 h
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-3 bottom-24 hidden items-center gap-2 rounded-full glass px-3 py-2 text-xs font-medium shadow-lg sm:flex"
      >
        <Sparkles className="size-3.5 text-brand-violet" /> Diseño único
      </motion.div>
    </div>
  );
}
