export const courses = {
  javascript: {
    title: "Aprender JavaScript",
    description: "Desde cero hasta avanzado",
    lessons: [
      { id: "variables", label: "Variables" },
      { id: "functions", label: "Funciones" },
      { id: "arrays", label: "Arrays" },
      { id: "dom", label: "Manipulación del DOM" },
    ],
  },
  ai: {
    title: "Introducción a IA",
    description: "Fundamentos de inteligencia artificial",
    lessons: [
      { id: "ai_intro", label: "¿Qué es la Inteligencia Artificial?" },
      { id: "machine_learning", label: "Machine Learning explicado" },
      { id: "neural_networks", label: "Redes neuronales" },
      { id: "ai_future", label: "El futuro de la IA" },
    ],
  },
  marketing: {
    title: "Marketing Digital",
    description: "Estrategias modernas de marketing",
    lessons: [
      { id: "intro", label: "Introducción al Marketing Digital" },
      { id: "seo", label: "SEO para principiantes" },
      { id: "ads", label: "Publicidad en redes sociales" },
      { id: "funnel", label: "Embudo de ventas" },
    ],
  },
  python: {
    title: "Python desde cero",
    description: "Programación en Python para principiantes",
    lessons: [
      { id: "py_intro", label: "Instalación y primer programa" },
      { id: "py_variables", label: "Variables y tipos de datos" },
      { id: "py_funciones", label: "Funciones y módulos" },
      { id: "py_archivos", label: "Trabajar con archivos" },
    ],
  },
  react: {
    title: "React: componentes y hooks",
    description: "Desarrollo frontend con React",
    lessons: [
      { id: "react_intro", label: "Qué es React y por qué usarlo" },
      { id: "react_jsx", label: "JSX y componentes" },
      { id: "react_state", label: "Estado y hooks (useState)" },
      { id: "react_effects", label: "useEffect y datos externos" },
    ],
  },
  excel: {
    title: "Excel práctico",
    description: "Fórmulas, tablas y gráficos",
    lessons: [
      { id: "excel_basico", label: "Interfaz y datos básicos" },
      { id: "excel_formulas", label: "Fórmulas esenciales" },
      { id: "excel_tablas", label: "Tablas dinámicas" },
      { id: "excel_graficos", label: "Gráficos y dashboards" },
    ],
  },
  ingles: {
    title: "Inglés para el día a día",
    description: "Vocabulario, gramática y conversación",
    lessons: [
      { id: "ingles_saludos", label: "Saludos y presentaciones" },
      { id: "ingles_verbos", label: "Verb to be y tiempos básicos" },
      { id: "ingles_conversacion", label: "Frases para conversar" },
      { id: "ingles_negocio", label: "Inglés en el trabajo" },
    ],
  },
  ux: {
    title: "Diseño UX/UI",
    description: "Interfaces y experiencia de usuario",
    lessons: [
      { id: "ux_intro", label: "Qué es UX y UI" },
      { id: "ux_investigacion", label: "Investigación de usuarios" },
      { id: "ux_wireframes", label: "Wireframes y prototipos" },
      { id: "ux_figma", label: "Diseño en Figma" },
    ],
  },
  fotografia: {
    title: "Fotografía básica",
    description: "Composición, luz y cámara",
    lessons: [
      { id: "foto_composicion", label: "Reglas de composición" },
      { id: "foto_luz", label: "Luz y exposición" },
      { id: "foto_modos", label: "Modos de la cámara" },
      { id: "foto_edicion", label: "Edición básica" },
    ],
  },
  finanzas: {
    title: "Finanzas personales",
    description: "Ahorro, presupuesto e inversión básica",
    lessons: [
      { id: "fin_presupuesto", label: "Armar tu presupuesto" },
      { id: "fin_ahorro", label: "Estrategias de ahorro" },
      { id: "fin_inversion", label: "Introducción a la inversión" },
      { id: "fin_emergencias", label: "Fondo de emergencia" },
    ],
  },
} as const;

export const lessons: Record<
  string,
  { title: string; video: string; content: string }
> = {
  variables: {
    title: "Variables en JavaScript",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
    content: "Aprenderás cómo funcionan las variables.",
  },
  functions: {
    title: "Funciones en JavaScript",
    video: "https://www.youtube.com/embed/N8ap4k_1QEQ",
    content: "Las funciones permiten reutilizar código.",
  },
  arrays: {
    title: "Arrays en JavaScript",
    video: "https://www.youtube.com/embed/oigfaZ5ApsM",
    content: "Los arrays permiten guardar múltiples valores.",
  },
  dom: {
    title: "Manipulación del DOM",
    video: "https://www.youtube.com/embed/0ik6X4DJKCc",
    content: "Aprende a modificar elementos de una página web.",
  },
  intro: {
    title: "Introducción al Marketing Digital",
    video: "https://www.youtube.com/embed/bixR-KIJKYM",
    content: "Aprenderás qué es el marketing digital.",
  },
  seo: {
    title: "SEO para principiantes",
    video: "https://www.youtube.com/embed/DvwS7cV9GmQ",
    content: "Cómo posicionar tu web en Google.",
  },
  ads: {
    title: "Publicidad en redes sociales",
    video: "https://www.youtube.com/embed/lz0Jd1u0gG8",
    content: "Cómo hacer campañas publicitarias.",
  },
  funnel: {
    title: "Embudo de ventas",
    video: "https://www.youtube.com/embed/Y4WvYq4kH7I",
    content: "Cómo convertir visitantes en clientes.",
  },
  ai_intro: {
    title: "¿Qué es la Inteligencia Artificial?",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    content: "Introducción a la inteligencia artificial.",
  },
  machine_learning: {
    title: "Machine Learning explicado",
    video: "https://www.youtube.com/embed/ukzFI9rgwfU",
    content: "Cómo las máquinas aprenden.",
  },
  neural_networks: {
    title: "Redes neuronales",
    video: "https://www.youtube.com/embed/aircAruvnKk",
    content: "Cómo funcionan las redes neuronales.",
  },
  ai_future: {
    title: "El futuro de la IA",
    video: "https://www.youtube.com/embed/ad79nYk2keg",
    content: "Impacto de la IA en el mundo.",
  },
  // Python
  py_intro: {
    title: "Instalación y primer programa",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    content: "Instala Python y escribe tu primer programa.",
  },
  py_variables: {
    title: "Variables y tipos de datos",
    video: "https://www.youtube.com/embed/kqtD5dpnl9c",
    content: "Variables, números, cadenas y booleanos en Python.",
  },
  py_funciones: {
    title: "Funciones y módulos",
    video: "https://www.youtube.com/embed/9Os0o3wzS_I",
    content: "Define funciones y organiza código en módulos.",
  },
  py_archivos: {
    title: "Trabajar con archivos",
    video: "https://www.youtube.com/embed/Uh2ebFW8OYM",
    content: "Leer y escribir archivos de texto y CSV.",
  },
  // React
  react_intro: {
    title: "Qué es React y por qué usarlo",
    video: "https://www.youtube.com/embed/SqcY0GlETpg",
    content: "Introducción a React y al ecosistema moderno.",
  },
  react_jsx: {
    title: "JSX y componentes",
    video: "https://www.youtube.com/embed/1wZoGFF_oi4",
    content: "JSX, componentes funcionales y props.",
  },
  react_state: {
    title: "Estado y hooks (useState)",
    video: "https://www.youtube.com/embed/O6P86uwfdR0",
    content: "Manejo del estado con el hook useState.",
  },
  react_effects: {
    title: "useEffect y datos externos",
    video: "https://www.youtube.com/embed/0ZJgIjIuY7U",
    content: "Efectos secundarios y llamadas a APIs.",
  },
  // Excel
  excel_basico: {
    title: "Interfaz y datos básicos",
    video: "https://www.youtube.com/embed/rwbho0CgEAE",
    content: "Conoce la interfaz de Excel y entra datos.",
  },
  excel_formulas: {
    title: "Fórmulas esenciales",
    video: "https://www.youtube.com/embed/pll9FphQb-c",
    content: "SUMAR, PROMEDIO, SI y más fórmulas útiles.",
  },
  excel_tablas: {
    title: "Tablas dinámicas",
    video: "https://www.youtube.com/embed/m0wI61ahfLc",
    content: "Crea tablas dinámicas para analizar datos.",
  },
  excel_graficos: {
    title: "Gráficos y dashboards",
    video: "https://www.youtube.com/embed/gdMsd2tE2FE",
    content: "Gráficos y paneles visuales en Excel.",
  },
  // Inglés
  ingles_saludos: {
    title: "Saludos y presentaciones",
    video: "https://www.youtube.com/embed/L0LQMhO0VYk",
    content: "Saludos, presentarte y preguntas básicas.",
  },
  ingles_verbos: {
    title: "Verb to be y tiempos básicos",
    video: "https://www.youtube.com/embed/o8bVwCvqQqU",
    content: "Verbo to be, presente simple y continuo.",
  },
  ingles_conversacion: {
    title: "Frases para conversar",
    video: "https://www.youtube.com/embed/4U8vU9gQq3M",
    content: "Frases útiles para mantener una conversación.",
  },
  ingles_negocio: {
    title: "Inglés en el trabajo",
    video: "https://www.youtube.com/embed/8CkEGvW7m6c",
    content: "Vocabulario y expresiones para el ámbito laboral.",
  },
  // UX/UI
  ux_intro: {
    title: "Qué es UX y UI",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    content: "Diferencias entre UX y UI y por qué importan.",
  },
  ux_investigacion: {
    title: "Investigación de usuarios",
    video: "https://www.youtube.com/embed/taJovYB2GjM",
    content: "Entrevistas, encuestas y hallazgos.",
  },
  ux_wireframes: {
    title: "Wireframes y prototipos",
    video: "https://www.youtube.com/embed/qpH7-KFWZig",
    content: "De la idea al wireframe y al prototipo.",
  },
  ux_figma: {
    title: "Diseño en Figma",
    video: "https://www.youtube.com/embed/FTFaQWZBqQ8",
    content: "Herramientas y flujo de diseño en Figma.",
  },
  // Fotografía
  foto_composicion: {
    title: "Reglas de composición",
    video: "https://www.youtube.com/embed/7ZVyNjK5bIw",
    content: "Regla de tercios, encuadre y equilibrio.",
  },
  foto_luz: {
    title: "Luz y exposición",
    video: "https://www.youtube.com/embed/h6c6Hf2bRig",
    content: "ISO, apertura, velocidad y medición de luz.",
  },
  foto_modos: {
    title: "Modos de la cámara",
    video: "https://www.youtube.com/embed/F8t2sMQa_nM",
    content: "Automático, prioridad y modo manual.",
  },
  foto_edicion: {
    title: "Edición básica",
    video: "https://www.youtube.com/embed/D4omQbPcLVY",
    content: "Ajustes básicos de luz, color y recorte.",
  },
  // Finanzas
  fin_presupuesto: {
    title: "Armar tu presupuesto",
    video: "https://www.youtube.com/embed/mT3Hf2Nmmlw",
    content: "Ingresos, gastos y categorías.",
  },
  fin_ahorro: {
    title: "Estrategias de ahorro",
    video: "https://www.youtube.com/embed/GsTEhLX0_MA",
    content: "Regla 50/30/20 y hábitos de ahorro.",
  },
  fin_inversion: {
    title: "Introducción a la inversión",
    video: "https://www.youtube.com/embed/EP7mFb7dTyo",
    content: "Conceptos básicos antes de invertir.",
  },
  fin_emergencias: {
    title: "Fondo de emergencia",
    video: "https://www.youtube.com/embed/4L0eJ3Vxx-s",
    content: "Cuánto ahorrar y dónde guardarlo.",
  },
};
