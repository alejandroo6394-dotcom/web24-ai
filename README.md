# WEB24 AI

Landing oficial de **WEB24 AI** — páginas web premium creadas por inteligencia
artificial y entregadas en menos de 24 horas.

Web de producción construida con **Next.js (App Router) + TypeScript + Tailwind
CSS + Framer Motion + Radix UI + Lucide**, con estética premium en modo oscuro,
glassmorphism, microanimaciones y un **configurador interactivo** con preview en
vivo.

![WEB24 AI](public/og.svg)

## ✨ Características

- **Hero con simulación de IA** construyendo una web en tiempo real (código, wireframes, paleta y progreso animados).
- **Configurador interactivo**: el usuario elige sector, paleta, estilo, objetivo, público y nº de páginas, y la preview se actualiza al instante con precio y tiempo estimados.
- **Portfolio** de 6 proyectos con mockups por paleta y modal de detalle.
- **Muro de testimonios** (40 opiniones, estilo Trustpilot) con doble marquesina.
- Cómo funciona (timeline), beneficios, estadísticas animadas, FAQ (acordeón) y CTA final con formulario validado.
- **SEO técnico**: metadatos, Open Graph, Twitter Cards, Schema.org, `robots.txt` y `sitemap.xml` dinámicos.
- **100% responsive** y accesible, optimizado para Core Web Vitals.
- Animaciones con Framer Motion que respetan `prefers-reduced-motion`.

## 🧱 Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animación | Framer Motion |
| UI primitives | Radix UI (estilo shadcn/ui) |
| Iconos | lucide-react |
| Fuente | Inter (`next/font`) |

## 🚀 Puesta en marcha

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo → http://localhost:3000
npm run build     # build de producción
npm start         # servir el build
```

## ☁️ Despliegue

Optimizado para desplegar sin configuración adicional en **Vercel**, **Netlify**
o **Cloudflare Pages**:

1. Conecta este repositorio a Vercel.
2. Framework detectado automáticamente: **Next.js** (sin ajustes extra).
3. Deploy → conecta tu dominio.

## 🗂️ Estructura

```
src/
├── app/
│   ├── layout.tsx        # SEO, fuente, JSON-LD
│   ├── page.tsx          # ensamblado de secciones
│   ├── globals.css       # design system (tokens, glass, utilidades)
│   ├── icon.svg          # favicon
│   ├── robots.ts · sitemap.ts
├── components/
│   ├── ui/               # button, card, badge, accordion, dialog (shadcn-style)
│   ├── shared/           # reveal, counter, avatar, stars, logo, section-heading
│   └── sections/         # header, hero, ai-simulation, configurator, portfolio…
└── lib/
    ├── data.ts           # CONTENIDO editable (sectores, paletas, portfolio, FAQ, 40 testimonios)
    └── utils.ts          # helper cn()
```

## ✏️ Personalización

- **Contenido**: edita `src/lib/data.ts` (opciones del configurador, proyectos, FAQ, testimonios).
- **Colores de marca**: variables en `src/app/globals.css` (`:root`) y `tailwind.config.ts`.
- **Formulario de contacto**: en `src/components/sections/final-cta.tsx`, la función `onSubmit` está preparada para conectar con tu backend/CRM (actualmente en modo demostración).
- **Dominio y metadatos**: actualiza `SITE_URL` en `src/app/layout.tsx`.

---

© WEB24 AI. Todos los derechos reservados.
