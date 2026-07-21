"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

type Status = "idle" | "loading" | "done";

export function FinalCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const next: Record<string, boolean> = {
      name: name.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
    };
    setErrors(next);
    return !next.name && !next.email;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setStatus("loading");
    // Preparado para conectar con backend / CRM. Modo demostración:
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("done");
    form.reset();
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-14 text-center md:px-16 md:py-20">
          {/* Fondos */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid radial-fade opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-brand-violet/25 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[90px]" />

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground/80">
              <Sparkles className="size-3.5 text-brand-violet" />
              Empieza hoy mismo
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Tu próxima web te está{" "}
              <span className="text-gradient">esperando</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Déjanos tus datos y crea tu propuesta personalizada. Recíbela lista
              en menos de 24 horas.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mx-auto mt-10 max-w-xl">
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8"
                  >
                    <div className="grid size-12 place-items-center rounded-full bg-emerald-400/20">
                      <Check className="size-6 text-emerald-400" />
                    </div>
                    <p className="text-lg font-semibold">¡Solicitud recibida!</p>
                    <p className="text-sm text-muted-foreground">
                      Nuestro equipo te enviará tu propuesta personalizada muy pronto.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                    className="flex flex-col gap-3"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="text-left">
                        <input
                          name="name"
                          placeholder="Tu nombre"
                          autoComplete="name"
                          className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-violet/20 ${
                            errors.name
                              ? "border-red-400/60"
                              : "border-white/10 focus:border-brand-violet/60"
                          }`}
                        />
                        {errors.name && (
                          <span className="mt-1 block text-xs text-red-400">
                            Introduce tu nombre.
                          </span>
                        )}
                      </div>
                      <div className="text-left">
                        <input
                          name="email"
                          type="email"
                          placeholder="Tu email"
                          autoComplete="email"
                          className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-violet/20 ${
                            errors.email
                              ? "border-red-400/60"
                              : "border-white/10 focus:border-brand-violet/60"
                          }`}
                        />
                        {errors.email && (
                          <span className="mt-1 block text-xs text-red-400">
                            Introduce un email válido.
                          </span>
                        )}
                      </div>
                    </div>
                    <input
                      name="business"
                      placeholder="¿A qué se dedica tu negocio? (opcional)"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm outline-none transition focus:border-brand-violet/60 focus:ring-2 focus:ring-brand-violet/20"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="mt-1 w-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin" />
                          Creando tu propuesta…
                        </>
                      ) : (
                        <>
                          Crear mi propuesta gratis
                          <ArrowRight />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Sin compromiso · Respuesta en menos de 24 h
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
