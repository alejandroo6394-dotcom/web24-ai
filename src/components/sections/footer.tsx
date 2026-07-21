import { Logo } from "@/components/shared/logo";

const LINKS = [
  {
    title: "Producto",
    items: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Configurador", href: "#configurador" },
      { label: "Ejemplos", href: "#ejemplos" },
      { label: "Opiniones", href: "#opiniones" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacto", href: "#contacto" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Aviso legal", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Términos", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Páginas web premium creadas por inteligencia artificial. Diseño
              exclusivo entregado en menos de 24 horas.
            </p>
          </div>

          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} WEB24 AI. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con IA y mucho cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
