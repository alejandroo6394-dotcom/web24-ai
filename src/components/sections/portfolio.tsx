"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/** Mockup de web generado con la paleta del proyecto. */
function ProjectMock({ project }: { project: Project }) {
  return (
    <div
      className="h-full w-full p-4"
      style={{
        background: `linear-gradient(135deg, ${project.from}22, ${project.to}18), #0b0b12`,
      }}
    >
      <div className="flex items-center justify-between rounded-md bg-white/10 px-2.5 py-1.5 backdrop-blur">
        <span className="text-[10px] font-bold text-white">{project.name}</span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1 w-3 rounded-full bg-white/30" />
          ))}
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-2.5 w-2/3 rounded-full" style={{ background: project.from }} />
        <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
        <div
          className="mt-2 h-6 w-20 rounded-md"
          style={{ background: project.accent }}
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md bg-white/10 p-1.5">
            <div
              className="mb-1 h-3 w-3 rounded"
              style={{ background: i === 1 ? project.to : "rgba(255,255,255,0.3)" }}
            />
            <div className="h-1 w-full rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group block w-full text-left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectMock project={project} />
            </motion.div>
            <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">Ver proyecto</span>
              <span className="grid size-8 place-items-center rounded-full bg-white text-neutral-950">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.tagline}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground/60">
              {project.category}
            </span>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent>
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
          <ProjectMock project={project} />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription className="mt-1">
                {project.tagline}
              </DialogDescription>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
              {project.category}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-white/[0.03] p-3 text-center">
                <div className="text-lg font-bold text-gradient">{m.value}</div>
                <div className="text-[11px] text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>

          <Button asChild className="mt-6 w-full">
            <a href="#configurador">Quiero una web así</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Portfolio() {
  return (
    <section id="ejemplos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Ejemplos"
          title={
            <>
              Webs que ya están{" "}
              <span className="text-gradient">generando resultados</span>
            </>
          }
          description="Una muestra de proyectos creados con WEB24 AI. Pasa el ratón y ábrelos para ver el detalle."
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {PROJECTS.map((p, i) => (
            <RevealItem key={p.id}>
              <ProjectCard project={p} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
