import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Search,
  Wand2,
  Rocket,
  Palette,
  Gauge,
  ShieldCheck,
  Globe,
  Server,
  Smartphone,
  BrainCircuit,
  BadgeCheck,
  Store,
  Utensils,
  Dumbbell,
  Scale,
  Stethoscope,
  Camera,
  Building2,
  GraduationCap,
} from "lucide-react";

/* ============================ Cómo funciona ============================ */
export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    icon: Search,
    title: "Cuéntanos tu negocio",
    description:
      "Respondes unas preguntas rápidas sobre tu marca, tu sector y tus objetivos. Menos de 3 minutos.",
  },
  {
    icon: BrainCircuit,
    title: "Nuestra IA analiza tu proyecto",
    description:
      "El motor de WEB24 estudia tu sector, tu competencia y tu público para definir la estrategia ideal.",
  },
  {
    icon: Wand2,
    title: "Generamos una propuesta personalizada",
    description:
      "Diseño exclusivo, estructura, textos y paleta de color hechos a la medida de tu negocio.",
  },
  {
    icon: Rocket,
    title: "Publicamos tu web en 24 horas",
    description:
      "Revisamos, pulimos y publicamos con dominio, hosting y SEO. Lista para captar clientes.",
  },
];

/* ============================ Beneficios ============================ */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Palette,
    title: "Diseño exclusivo",
    description:
      "Nada de plantillas. Cada web nace de cero con una identidad única generada para tu marca.",
  },
  {
    icon: Search,
    title: "SEO técnico incluido",
    description:
      "Metadatos, datos estructurados y rendimiento optimizados para posicionar en Google.",
  },
  {
    icon: Gauge,
    title: "Velocidad extrema",
    description:
      "Core Web Vitals en verde. Webs ultrarrápidas que enamoran a usuarios y buscadores.",
  },
  {
    icon: Server,
    title: "Hosting premium",
    description:
      "Infraestructura global con CDN, SSL y copias de seguridad. Sin preocupaciones técnicas.",
  },
  {
    icon: Globe,
    title: "Dominio y correo",
    description:
      "Te ayudamos a conectar tu dominio y a configurar correo profesional con tu marca.",
  },
  {
    icon: Smartphone,
    title: "100% responsive",
    description:
      "Impecable en móvil, tablet y escritorio. Diseño adaptable pixel a pixel.",
  },
  {
    icon: BrainCircuit,
    title: "Optimización con IA",
    description:
      "Mejora continua basada en datos: la IA sugiere cambios para convertir más.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad garantizada",
    description:
      "Certificados SSL, protección anti-spam y buenas prácticas de seguridad por defecto.",
  },
];

/* ============================ Estadísticas ============================ */
export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 2500, suffix: "+", label: "Webs creadas" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 24, suffix: "h", label: "Entrega media" },
  { value: 4.9, suffix: "", label: "Valoración media", decimals: 1 },
];

/* ============================ Logos (empresas ficticias) ============================ */
export const CLIENT_LOGOS: string[] = [
  "Nordvia",
  "Lumen&Co",
  "Aurea",
  "Vertex",
  "Kōra",
  "Bloomly",
  "Sereno",
  "Northpeak",
  "Éclat",
  "Munro",
  "Vivid",
  "Halcyon",
];

/* ============================ Configurador ============================ */
export interface Sector {
  id: string;
  label: string;
  icon: LucideIcon;
  /** palabras de estructura recomendadas */
  pages: string[];
}

export const SECTORS: Sector[] = [
  { id: "ecommerce", label: "E-commerce", icon: Store, pages: ["Inicio", "Tienda", "Producto", "Carrito", "Contacto"] },
  { id: "restaurante", label: "Restaurante", icon: Utensils, pages: ["Inicio", "Carta", "Reservas", "Galería", "Contacto"] },
  { id: "fitness", label: "Fitness & Salud", icon: Dumbbell, pages: ["Inicio", "Clases", "Precios", "Entrenadores", "Contacto"] },
  { id: "legal", label: "Servicios legales", icon: Scale, pages: ["Inicio", "Áreas", "Equipo", "Casos", "Contacto"] },
  { id: "salud", label: "Clínica & Salud", icon: Stethoscope, pages: ["Inicio", "Servicios", "Equipo", "Cita", "Contacto"] },
  { id: "creativo", label: "Creativo & Foto", icon: Camera, pages: ["Inicio", "Portfolio", "Servicios", "Sobre mí", "Contacto"] },
  { id: "inmobiliaria", label: "Inmobiliaria", icon: Building2, pages: ["Inicio", "Propiedades", "Vender", "Equipo", "Contacto"] },
  { id: "educacion", label: "Educación", icon: GraduationCap, pages: ["Inicio", "Cursos", "Profesorado", "Blog", "Contacto"] },
];

export interface Palette {
  id: string;
  label: string;
  from: string;
  to: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
}

export const PALETTES: Palette[] = [
  { id: "violeta", label: "Violeta nocturno", from: "#7c5cff", to: "#22d3ee", accent: "#7c5cff", bg: "#0b0b12", surface: "#15151f", text: "#f5f5fa", muted: "#a5a3b8" },
  { id: "esmeralda", label: "Esmeralda", from: "#10b981", to: "#06b6d4", accent: "#10b981", bg: "#07120f", surface: "#0f1d19", text: "#f0fdf9", muted: "#93b8ad" },
  { id: "ambar", label: "Ámbar cálido", from: "#f59e0b", to: "#ef4444", accent: "#f59e0b", bg: "#140f0a", surface: "#211812", text: "#fff8f0", muted: "#c2ad97" },
  { id: "azul", label: "Azul corporativo", from: "#3b82f6", to: "#8b5cf6", accent: "#3b82f6", bg: "#0a0f1a", surface: "#121a2b", text: "#f2f6ff", muted: "#9db0cc" },
  { id: "rosa", label: "Fucsia", from: "#ec4899", to: "#8b5cf6", accent: "#ec4899", bg: "#140a11", surface: "#22121d", text: "#fff0f8", muted: "#c99cb5" },
  { id: "claro", label: "Minimal claro", from: "#111827", to: "#4b5563", accent: "#111827", bg: "#f7f7f9", surface: "#ffffff", text: "#0f172a", muted: "#64748b" },
];

export interface StyleOption {
  id: string;
  label: string;
  description: string;
  radius: string;
  font: string;
}

export const STYLES: StyleOption[] = [
  { id: "minimal", label: "Minimalista", description: "Limpio, mucho espacio, sobrio.", radius: "0.5rem", font: "Inter, sans-serif" },
  { id: "moderno", label: "Moderno", description: "Gradientes, tarjetas, dinámico.", radius: "1rem", font: "Inter, sans-serif" },
  { id: "audaz", label: "Audaz", description: "Tipografías grandes, alto contraste.", radius: "0.25rem", font: "Inter, sans-serif" },
  { id: "elegante", label: "Elegante", description: "Serif, detalles finos, premium.", radius: "1.25rem", font: "Georgia, serif" },
];

export const GOALS = [
  "Captar clientes",
  "Vender online",
  "Reservas y citas",
  "Mostrar portfolio",
  "Generar autoridad",
] as const;

export const AUDIENCES = ["Particulares", "Empresas (B2B)", "Ambos"] as const;

export const PAGE_COUNTS = [1, 3, 5, 8] as const;

/* ============================ Portfolio ============================ */
export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  from: string;
  to: string;
  accent: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "nordvia",
    name: "Nordvia",
    category: "E-commerce",
    tagline: "Moda escandinava minimalista",
    description:
      "Tienda online con catálogo dinámico, checkout optimizado y una estética limpia que multiplicó la conversión.",
    from: "#7c5cff",
    to: "#22d3ee",
    accent: "#7c5cff",
    tags: ["E-commerce", "Branding", "SEO"],
    metrics: [
      { label: "Conversión", value: "+38%" },
      { label: "Entrega", value: "22 h" },
      { label: "PageSpeed", value: "99" },
    ],
  },
  {
    id: "aurea",
    name: "Áurea Estudio",
    category: "Creativo",
    tagline: "Portfolio de fotografía de autor",
    description:
      "Galería inmersiva con transiciones fluidas y carga instantánea que pone el foco en la imagen.",
    from: "#f59e0b",
    to: "#ef4444",
    accent: "#f59e0b",
    tags: ["Portfolio", "Animación", "Diseño"],
    metrics: [
      { label: "Rebote", value: "-41%" },
      { label: "Entrega", value: "19 h" },
      { label: "PageSpeed", value: "100" },
    ],
  },
  {
    id: "sereno",
    name: "Sereno Clinic",
    category: "Salud",
    tagline: "Clínica de bienestar y estética",
    description:
      "Web de confianza con reserva de cita online, equipo médico y una experiencia calmada y profesional.",
    from: "#10b981",
    to: "#06b6d4",
    accent: "#10b981",
    tags: ["Salud", "Reservas", "SEO"],
    metrics: [
      { label: "Citas", value: "+64%" },
      { label: "Entrega", value: "24 h" },
      { label: "PageSpeed", value: "98" },
    ],
  },
  {
    id: "vertex",
    name: "Vertex Legal",
    category: "Legal",
    tagline: "Despacho de abogados premium",
    description:
      "Imagen de autoridad y credibilidad, con áreas de práctica claras y captación de leads cualificados.",
    from: "#3b82f6",
    to: "#8b5cf6",
    accent: "#3b82f6",
    tags: ["Legal", "B2B", "Leads"],
    metrics: [
      { label: "Leads", value: "+52%" },
      { label: "Entrega", value: "23 h" },
      { label: "PageSpeed", value: "99" },
    ],
  },
  {
    id: "bloomly",
    name: "Bloomly",
    category: "Restaurante",
    tagline: "Restaurante de autor",
    description:
      "Carta digital, reservas integradas y una galería apetecible que llena mesas cada noche.",
    from: "#ec4899",
    to: "#f59e0b",
    accent: "#ec4899",
    tags: ["Restaurante", "Reservas", "Branding"],
    metrics: [
      { label: "Reservas", value: "+47%" },
      { label: "Entrega", value: "20 h" },
      { label: "PageSpeed", value: "97" },
    ],
  },
  {
    id: "northpeak",
    name: "Northpeak",
    category: "Fitness",
    tagline: "Estudio de entrenamiento",
    description:
      "Landing de alta conversión con planes, horarios y captación de nuevos socios en piloto automático.",
    from: "#22d3ee",
    to: "#7c5cff",
    accent: "#22d3ee",
    tags: ["Fitness", "Conversión", "SEO"],
    metrics: [
      { label: "Altas", value: "+58%" },
      { label: "Entrega", value: "21 h" },
      { label: "PageSpeed", value: "100" },
    ],
  },
];

/* ============================ FAQ ============================ */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "¿De verdad entregáis la web en menos de 24 horas?",
    a: "Sí. En cuanto completas el configurador y confirmas tu reserva, nuestra IA genera la propuesta y nuestro equipo la pule y publica en menos de 24 horas laborables. Proyectos muy grandes pueden requerir algo más, siempre acordado contigo.",
  },
  {
    q: "¿La web es realmente única o usáis plantillas?",
    a: "Cada web se genera desde cero a partir de tu marca, tu sector y tus objetivos. No usamos plantillas: la IA crea una estructura, una paleta y unos textos exclusivos para ti.",
  },
  {
    q: "¿Puedo pedir cambios después de recibirla?",
    a: "Por supuesto. Todas las entregas incluyen rondas de ajustes para que el resultado sea exactamente lo que necesitas. Además, la optimización con IA sigue mejorando la web con el tiempo.",
  },
  {
    q: "¿Incluye dominio, hosting y SEO?",
    a: "Sí. Nos encargamos del hosting premium con CDN y SSL, te ayudamos a conectar tu dominio y entregamos la web con SEO técnico implementado para que posiciones desde el primer día.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Ninguno. Solo respondes unas preguntas. Del resto —diseño, desarrollo, publicación y mantenimiento— nos ocupamos nosotros.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El precio depende del alcance del proyecto. El configurador te muestra una estimación al instante y, tras reservar, recibes un presupuesto cerrado sin sorpresas.",
  },
];

/* ============================ Testimonios (40) ============================ */
export interface Testimonial {
  name: string;
  role: string;
  sector: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Lucía Fernández", role: "Fundadora, Nordvia", sector: "E-commerce", rating: 5, text: "Increíble. En un día tenía una tienda online mejor que la de mi competencia. La conversión se disparó desde la primera semana." },
  { name: "Marc Oliver", role: "CEO, Vertex", sector: "Legal", rating: 5, text: "Pensaba que una web premium tardaría meses. WEB24 AI me la entregó en 24 horas y con un nivel de detalle brutal." },
  { name: "Elena Ruiz", role: "Directora, Sereno Clinic", sector: "Salud", rating: 5, text: "El sistema de reservas y el diseño transmiten muchísima confianza. Las citas online se han multiplicado." },
  { name: "David Santos", role: "Chef, Bloomly", sector: "Restaurante", rating: 5, text: "La carta digital y las fotos quedaron espectaculares. Llenamos mesas cada noche gracias a la nueva web." },
  { name: "Paula Gómez", role: "Fotógrafa", sector: "Creativo", rating: 5, text: "Mi portfolio nunca se había visto tan profesional. Las animaciones son elegantes y todo carga al instante." },
  { name: "Javier Molina", role: "Owner, Northpeak", sector: "Fitness", rating: 5, text: "Landing de conversión pura. Las altas de socios subieron un 58% el primer mes. Impresionante." },
  { name: "Nerea Castro", role: "CMO, Lumen&Co", sector: "SaaS", rating: 5, text: "El nivel de diseño parece de una agencia de 100.000 €, pero a una fracción del precio y del tiempo." },
  { name: "Adrián Vega", role: "Fundador, Aurea", sector: "Creativo", rating: 5, text: "Trabajo impecable. Entendieron mi estética a la primera y la IA acertó con la paleta y la estructura." },
  { name: "Carla Méndez", role: "Directora, Éclat", sector: "Moda", rating: 5, text: "Rápido, bonito y funcional. Recibí propuestas de diseño que ni yo había imaginado para mi marca." },
  { name: "Sergio Ibáñez", role: "CEO, Munro", sector: "Consultoría", rating: 5, text: "El configurador me enganchó. Vi mi web tomando forma en tiempo real y no pude no reservar." },
  { name: "Marta Sánchez", role: "Owner, Vivid", sector: "Eventos", rating: 5, text: "Atención de diez y resultado aún mejor. Mi web se ve premium en cualquier dispositivo." },
  { name: "Pablo Herrera", role: "Fundador, Halcyon", sector: "Tech", rating: 5, text: "La velocidad de la web es de otro nivel. PageSpeed 100 y un diseño que enamora. Repetiré seguro." },
  { name: "Ana Torres", role: "Directora, Bloomly", sector: "Restaurante", rating: 5, text: "Nos ayudaron con dominio, correo y SEO. Todo llave en mano y sin complicaciones técnicas." },
  { name: "Iván Prieto", role: "Agente, Northpeak", sector: "Inmobiliaria", rating: 4, text: "Muy contento con el resultado. Pedí un par de ajustes y los resolvieron rapidísimo." },
  { name: "Sara Navarro", role: "CEO, Kōra", sector: "Bienestar", rating: 5, text: "El diseño transmite exactamente la calma de mi marca. La IA captó la esencia perfectamente." },
  { name: "Rubén Díaz", role: "Fundador, Vertex", sector: "Legal", rating: 5, text: "Credibilidad instantánea. Los leads cualificados aumentaron más de un 50%. Inversión redonda." },
  { name: "Laura Campos", role: "Owner, Sereno", sector: "Salud", rating: 5, text: "Profesionalidad y rapidez. En 24 horas pasé de no tener web a tener una que da gusto enseñar." },
  { name: "Diego Romero", role: "Director, Vivid", sector: "Eventos", rating: 5, text: "El hover del portfolio y las transiciones son una pasada. Se nota el mimo en cada detalle." },
  { name: "Cristina Blanco", role: "CMO, Bloomly", sector: "Restaurante", rating: 5, text: "Subieron las reservas online desde el primer fin de semana. La web vende sola." },
  { name: "Álvaro Gil", role: "Fundador, Aurea", sector: "Creativo", rating: 5, text: "Nunca imaginé tener algo tan cuidado tan rápido. Cada sección tiene personalidad propia." },
  { name: "Natalia Soto", role: "CEO, Éclat", sector: "Moda", rating: 5, text: "El proceso es adictivo: eliges opciones y ves la web cambiar al momento. Magia pura." },
  { name: "Hugo Martín", role: "Owner, Munro", sector: "Consultoría", rating: 5, text: "Resultado de agencia top a precio de startup. Mis clientes alucinan con la nueva imagen." },
  { name: "Rocío Ramos", role: "Directora, Kōra", sector: "Bienestar", rating: 5, text: "Diseño elegante, textos que conectan y una velocidad increíble. No le falta un detalle." },
  { name: "Gonzalo León", role: "Fundador, Halcyon", sector: "Tech", rating: 5, text: "Todo optimizado para Core Web Vitals. Nuestro SEO mejoró notablemente en semanas." },
  { name: "Beatriz Ortega", role: "Owner, Vivid", sector: "Eventos", rating: 5, text: "Comunicación excelente y entrega puntual. La web capta clientes mientras yo duermo." },
  { name: "Óscar Nieto", role: "CEO, Vertex", sector: "Legal", rating: 5, text: "Serios, rápidos y con un gusto exquisito. La mejor decisión para mi despacho este año." },
  { name: "Irene Pardo", role: "Fundadora, Bloomly", sector: "Restaurante", rating: 5, text: "El equipo entendió mi visión al instante. La carta digital es preciosa y funciona de maravilla." },
  { name: "Marcos Rey", role: "Owner, Northpeak", sector: "Fitness", rating: 5, text: "Landing brutal. Convierte visitas en socios como ninguna web anterior que haya tenido." },
  { name: "Alba Cano", role: "Directora, Aurea", sector: "Creativo", rating: 5, text: "Sofisticada y rapidísima. Mis clientes me preguntan quién me hizo la web. Recomendadísimos." },
  { name: "Víctor Peña", role: "CEO, Munro", sector: "Consultoría", rating: 4, text: "Muy buen trabajo global. Alguna revisión menor, resuelta con mucha agilidad por el equipo." },
  { name: "Silvia Marcos", role: "Owner, Kōra", sector: "Bienestar", rating: 5, text: "La paleta que propuso la IA es exactamente la que buscaba. Transmite serenidad y calidad." },
  { name: "Raúl Vargas", role: "Fundador, Vivid", sector: "Eventos", rating: 5, text: "Impecable de principio a fin. Diseño premium, entrega ultrarrápida y trato cercano." },
  { name: "Lorena Cruz", role: "CMO, Éclat", sector: "Moda", rating: 5, text: "Nuestra tasa de rebote cayó en picado. La gente se queda navegando porque la web engancha." },
  { name: "Tomás Aguilar", role: "CEO, Halcyon", sector: "Tech", rating: 5, text: "Escalable, rápida y con un diseño de 2026. Justo la imagen que necesitaba mi startup." },
  { name: "Claudia Reyes", role: "Directora, Sereno", sector: "Salud", rating: 5, text: "El diseño da confianza y la reserva online es comodísima. Pacientes encantados." },
  { name: "Andrés Lozano", role: "Fundador, Vertex", sector: "Legal", rating: 5, text: "Profesionalidad absoluta. La web posiciona bien y transmite autoridad desde el primer vistazo." },
  { name: "Patricia Suárez", role: "Owner, Bloomly", sector: "Restaurante", rating: 5, text: "Rápidos y creativos. La galería de platos es tan buena que da hambre solo de verla." },
  { name: "Jorge Medina", role: "CEO, Northpeak", sector: "Fitness", rating: 5, text: "Cada euro invertido ha vuelto multiplicado. La web es una máquina de captar socios nuevos." },
  { name: "Marina Gallego", role: "Directora, Aurea", sector: "Creativo", rating: 5, text: "Elegancia y velocidad en la misma web. Las microanimaciones están cuidadas al milímetro." },
  { name: "Fernando Cruz", role: "Fundador, Lumen&Co", sector: "SaaS", rating: 5, text: "El mejor onboarding que he vivido. Respondí unas preguntas y al día siguiente tenía mi web publicada." },
];
