"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Type,
  Layout,
  Search,
  Clock,
  BadgeEuro,
  Sparkles,
} from "lucide-react";
import {
  SECTORS,
  PALETTES,
  STYLES,
  GOALS,
  AUDIENCES,
  PAGE_COUNTS,
  type Palette,
  type StyleOption,
  type Sector,
} from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_COPY: Record<string, { headline: string; cta: string }> = {
  "Captar clientes": { headline: "Soluciones a medida para tu negocio", cta: "Solicitar información" },
  "Vender online": { headline: "Descubre nuestra nueva colección", cta: "Comprar ahora" },
  "Reservas y citas": { headline: "Reserva tu cita en segundos", cta: "Reservar cita" },
  "Mostrar portfolio": { headline: "Proyectos que hablan por sí solos", cta: "Ver portfolio" },
  "Generar autoridad": { headline: "Expertos en los que confiar", cta: "Contactar" },
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2.5 block text-sm font-medium text-foreground/80">
      {children}
    </label>
  );
}

export function Configurator() {
  const [name, setName] = useState("");
  const [sector, setSector] = useState<Sector>(SECTORS[0]);
  const [palette, setPalette] = useState<Palette>(PALETTES[0]);
  const [style, setStyle] = useState<StyleOption>(STYLES[1]);
  const [goal, setGoal] = useState<(typeof GOALS)[number]>(GOALS[0]);
  const [audience, setAudience] = useState<(typeof AUDIENCES)[number]>(AUDIENCES[0]);
  const [pages, setPages] = useState<(typeof PAGE_COUNTS)[number]>(3);

  const brand = name.trim() || "Tu Marca";
  const copy = HERO_COPY[goal];

  const result = useMemo(() => {
    const base: Record<number, number> = { 1: 390, 3: 690, 5: 1190, 8: 1990 };
    let price = base[pages] ?? 690;
    if (sector.id === "ecommerce") price += 300;
    if (sector.id === "inmobiliaria") price += 200;
    if (audience === "Empresas (B2B)") price += 120;
    if (style.id === "elegante") price += 150;
    const time: Record<number, string> = { 1: "12 horas", 3: "24 horas", 5: "36 horas", 8: "48 horas" };
    return {
      price,
      time: time[pages] ?? "24 horas",
      recommendedPages: sector.pages.slice(0, Math.min(pages === 1 ? 1 : pages, sector.pages.length)),
      font: style.font.split(",")[0],
    };
  }, [pages, sector, audience, style]);

  return (
    <section id="configurador" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-brand-violet/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Configurador"
          title={
            <>
              Diseña tu web <span className="text-gradient">en tiempo real</span>
            </>
          }
          description="Elige las opciones y observa cómo tu futura web cobra vida al instante. Cuando termines, resérvala."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* ---------------- Controles ---------------- */}
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="space-y-7">
              {/* Nombre */}
              <div>
                <FieldLabel>Nombre de tu empresa</FieldLabel>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej.: Estudio Aurora"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-violet/60 focus:ring-2 focus:ring-brand-violet/20"
                />
              </div>

              {/* Sector */}
              <div>
                <FieldLabel>Sector</FieldLabel>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {SECTORS.map((s) => {
                    const Icon = s.icon;
                    const active = s.id === sector.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSector(s)}
                        className={cn(
                          "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center text-xs transition",
                          active
                            ? "border-brand-violet/60 bg-brand-violet/10 text-foreground"
                            : "border-white/10 bg-white/[0.03] text-foreground/60 hover:border-white/20"
                        )}
                      >
                        <Icon className={cn("size-5", active && "text-brand-violet")} />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Paleta */}
              <div>
                <FieldLabel>Paleta de color</FieldLabel>
                <div className="flex flex-wrap gap-2.5">
                  {PALETTES.map((p) => {
                    const active = p.id === palette.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPalette(p)}
                        title={p.label}
                        className={cn(
                          "relative h-10 w-14 overflow-hidden rounded-lg ring-2 transition",
                          active ? "ring-white/80 scale-105" : "ring-white/10 hover:ring-white/30"
                        )}
                        style={{ background: `linear-gradient(120deg, ${p.from}, ${p.to})` }}
                      >
                        {active && (
                          <Check className="absolute inset-0 m-auto size-4 text-white drop-shadow" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estilo */}
              <div>
                <FieldLabel>Estilo de diseño</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  {STYLES.map((s) => {
                    const active = s.id === style.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setStyle(s)}
                        className={cn(
                          "rounded-xl border p-3 text-left text-sm transition",
                          active
                            ? "border-brand-violet/60 bg-brand-violet/10"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20"
                        )}
                      >
                        <div className="font-medium">{s.label}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          {s.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Objetivo */}
              <div>
                <FieldLabel>Objetivo de la web</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGoal(g)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-xs transition",
                        g === goal
                          ? "border-brand-cyan/60 bg-brand-cyan/10 text-foreground"
                          : "border-white/10 text-foreground/60 hover:border-white/20"
                      )}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Público + páginas */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <FieldLabel>Público objetivo</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {AUDIENCES.map((a) => (
                      <button
                        key={a}
                        onClick={() => setAudience(a)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs transition",
                          a === audience
                            ? "border-brand-cyan/60 bg-brand-cyan/10 text-foreground"
                            : "border-white/10 text-foreground/60 hover:border-white/20"
                        )}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <FieldLabel>Número de páginas</FieldLabel>
                  <div className="flex flex-wrap gap-2">
                    {PAGE_COUNTS.map((n) => (
                      <button
                        key={n}
                        onClick={() => setPages(n)}
                        className={cn(
                          "size-10 rounded-xl border text-sm transition",
                          n === pages
                            ? "border-brand-violet/60 bg-brand-violet/10 text-foreground"
                            : "border-white/10 text-foreground/60 hover:border-white/20"
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Preview + resultado ---------------- */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <LivePreview
              brand={brand}
              palette={palette}
              style={style}
              sector={sector}
              copy={copy}
            />

            <ResultCard result={result} palette={palette} style={style} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ Preview en vivo ============================ */
function LivePreview({
  brand,
  palette,
  style,
  sector,
  copy,
}: {
  brand: string;
  palette: Palette;
  style: StyleOption;
  sector: Sector;
  copy: { headline: string; cta: string };
}) {
  const radius = style.radius;
  const serif = style.id === "elegante";

  return (
    <div className="glass-strong overflow-hidden rounded-3xl">
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <div className="mx-auto rounded-full bg-white/5 px-3 py-0.5 text-[10px] text-foreground/40">
          {brand.toLowerCase().replace(/\s+/g, "")}.com
        </div>
        <span className="flex items-center gap-1 text-[10px] text-brand-violet">
          <Sparkles className="size-3" /> live
        </span>
      </div>

      {/* Web simulada */}
      <div
        className="p-4 transition-colors duration-500"
        style={{ background: palette.bg, fontFamily: style.font }}
      >
        <motion.div
          key={palette.id + style.id}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* navbar */}
          <div
            className="flex items-center justify-between px-3 py-2"
            style={{ background: palette.surface, borderRadius: radius }}
          >
            <span
              className="text-sm font-bold"
              style={{ color: palette.text, fontFamily: style.font }}
            >
              {brand}
            </span>
            <div className="hidden gap-3 sm:flex">
              {sector.pages.slice(0, 4).map((p) => (
                <span key={p} className="text-[10px]" style={{ color: palette.muted }}>
                  {p}
                </span>
              ))}
            </div>
            <span
              className="px-2.5 py-1 text-[10px] font-medium text-white"
              style={{ background: palette.accent, borderRadius: radius }}
            >
              {copy.cta}
            </span>
          </div>

          {/* hero */}
          <div
            className="mt-3 overflow-hidden p-5"
            style={{
              borderRadius: radius,
              background: `linear-gradient(135deg, ${palette.from}22, ${palette.to}14)`,
            }}
          >
            <div
              className="text-[10px] font-medium"
              style={{ color: palette.accent }}
            >
              {sector.label}
            </div>
            <h3
              className={cn("mt-1.5 text-lg font-bold leading-tight", serif && "italic")}
              style={{ color: palette.text, fontFamily: style.font }}
            >
              {copy.headline}
            </h3>
            <p className="mt-1.5 max-w-[85%] text-[10px]" style={{ color: palette.muted }}>
              {brand} — la mejor elección para {sector.label.toLowerCase()}. Calidad y
              confianza en cada detalle.
            </p>
            <div className="mt-3 flex gap-2">
              <span
                className="px-3 py-1.5 text-[10px] font-semibold text-white"
                style={{ background: palette.accent, borderRadius: radius }}
              >
                {copy.cta}
              </span>
              <span
                className="px-3 py-1.5 text-[10px] font-medium"
                style={{
                  border: `1px solid ${palette.muted}55`,
                  color: palette.text,
                  borderRadius: radius,
                }}
              >
                Saber más
              </span>
            </div>
          </div>

          {/* cards */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="p-2.5"
                style={{ background: palette.surface, borderRadius: radius }}
              >
                <div
                  className="mb-2 h-5 w-5"
                  style={{
                    background: i === 1 ? palette.accent : `${palette.from}66`,
                    borderRadius: `calc(${radius} / 1.5)`,
                  }}
                />
                <div className="h-1.5 w-full rounded-full" style={{ background: `${palette.muted}55` }} />
                <div className="mt-1 h-1.5 w-2/3 rounded-full" style={{ background: `${palette.muted}33` }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================ Resultado ============================ */
function ResultCard({
  result,
  palette,
  style,
}: {
  result: {
    price: number;
    time: string;
    recommendedPages: string[];
    font: string;
  };
  palette: Palette;
  style: StyleOption;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-4 rounded-3xl border-gradient p-5 md:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="grid size-8 place-items-center rounded-lg bg-brand-violet/15">
          <Check className="size-4 text-brand-violet" />
        </div>
        <div>
          <div className="text-sm font-semibold">Tu propuesta está lista</div>
          <div className="text-xs text-muted-foreground">Generada por WEB24 AI</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <ResultRow icon={<Layout className="size-4" />} label="Estructura">
          {result.recommendedPages.length} páginas
        </ResultRow>
        <ResultRow icon={<Type className="size-4" />} label="Tipografía">
          {result.font}
        </ResultRow>
        <ResultRow icon={<Search className="size-4" />} label="SEO">
          Incluido
        </ResultRow>
        <ResultRow icon={<Clock className="size-4" />} label="Entrega">
          {result.time}
        </ResultRow>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {result.recommendedPages.map((p) => (
          <span
            key={p}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground/70"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <div className="text-xs text-muted-foreground">Precio estimado</div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">
              {result.price.toLocaleString("es-ES")} €
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-emerald-400">
          <BadgeEuro className="size-4" /> Sin sorpresas
        </div>
      </div>

      <Button asChild size="lg" className="mt-4 w-full">
        <a href="#contacto">
          Reservar mi web
          <ArrowRight />
        </a>
      </Button>
    </motion.div>
  );
}

function ResultRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2.5">
      <span className="text-brand-cyan">{icon}</span>
      <div className="min-w-0">
        <div className="text-[11px] text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}
