export type CourseModule = { title: string; lessonIds: string[] };

export const courses = {
  javascript: {
    title: "Aprender JavaScript",
    description: "Desde cero hasta avanzado",
    objectives: [
      "Usar variables, tipos de datos y operadores con soltura",
      "Escribir funciones reutilizables y entender el alcance",
      "Trabajar con arrays y objetos para estructurar datos",
      "Manipular el DOM para crear páginas interactivas",
    ],
    modules: [
      { title: "Fundamentos", lessonIds: ["variables", "functions"] },
      { title: "Estructuras de datos", lessonIds: ["arrays"] },
      { title: "Interactividad en el navegador", lessonIds: ["dom"] },
    ] as CourseModule[],
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
    objectives: [
      "Definir qué es la IA y sus aplicaciones actuales",
      "Comprender los conceptos básicos de Machine Learning",
      "Entender cómo funcionan las redes neuronales",
      "Reflexionar sobre el futuro y la ética de la IA",
    ],
    modules: [
      { title: "¿Qué es la IA?", lessonIds: ["ai_intro"] },
      { title: "Aprendizaje automático", lessonIds: ["machine_learning", "neural_networks"] },
      { title: "Perspectivas", lessonIds: ["ai_future"] },
    ] as CourseModule[],
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
    objectives: [
      "Entender el ecosistema del marketing digital",
      "Aplicar bases de SEO para posicionar en buscadores",
      "Diseñar campañas en redes sociales",
      "Construir y optimizar embudos de ventas",
    ],
    modules: [
      { title: "Introducción", lessonIds: ["intro"] },
      { title: "Tráfico orgánico y pago", lessonIds: ["seo", "ads"] },
      { title: "Conversión", lessonIds: ["funnel"] },
    ] as CourseModule[],
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
    objectives: [
      "Instalar Python y escribir tu primer programa",
      "Usar variables, tipos y estructuras básicas",
      "Crear funciones y organizar código en módulos",
      "Leer y escribir archivos de texto y CSV",
    ],
    modules: [
      { title: "Configuración y primeros pasos", lessonIds: ["py_intro"] },
      { title: "Fundamentos del lenguaje", lessonIds: ["py_variables", "py_funciones"] },
      { title: "Trabajo con datos", lessonIds: ["py_archivos"] },
    ] as CourseModule[],
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
    objectives: [
      "Entender el modelo de componentes y el ecosistema React",
      "Crear interfaces con JSX y componentes reutilizables",
      "Gestionar estado con useState y efectos con useEffect",
      "Consumir APIs y datos externos en componentes",
    ],
    modules: [
      { title: "Introducción a React", lessonIds: ["react_intro", "react_jsx"] },
      { title: "Estado y efectos", lessonIds: ["react_state", "react_effects"] },
    ] as CourseModule[],
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
    objectives: [
      "Manejar la interfaz de Excel y introducir datos correctamente",
      "Aplicar fórmulas esenciales (SUMAR, PROMEDIO, SI, etc.)",
      "Crear tablas dinámicas para analizar datos",
      "Elaborar gráficos y dashboards visuales",
    ],
    modules: [
      { title: "Primeros pasos", lessonIds: ["excel_basico"] },
      { title: "Fórmulas y análisis", lessonIds: ["excel_formulas", "excel_tablas"] },
      { title: "Visualización", lessonIds: ["excel_graficos"] },
    ] as CourseModule[],
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
    objectives: [
      "Saludar, presentarte y hacer preguntas básicas",
      "Usar el verb to be y los tiempos presente simple y continuo",
      "Mantener conversaciones sencillas en situaciones cotidianas",
      "Expresarte en contextos laborales básicos",
    ],
    modules: [
      { title: "Comunicación básica", lessonIds: ["ingles_saludos", "ingles_verbos"] },
      { title: "Conversación y trabajo", lessonIds: ["ingles_conversacion", "ingles_negocio"] },
    ] as CourseModule[],
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
    objectives: [
      "Diferenciar UX y UI y su impacto en el producto",
      "Realizar investigación de usuarios (entrevistas, encuestas)",
      "Crear wireframes y prototipos de baja y media fidelidad",
      "Trabajar con Figma para diseño y colaboración",
    ],
    modules: [
      { title: "Conceptos y investigación", lessonIds: ["ux_intro", "ux_investigacion"] },
      { title: "Diseño y herramientas", lessonIds: ["ux_wireframes", "ux_figma"] },
    ] as CourseModule[],
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
    objectives: [
      "Aplicar reglas de composición (tercios, encuadre)",
      "Controlar luz, exposición, ISO, apertura y velocidad",
      "Usar modos automático, prioridad y manual de la cámara",
      "Realizar edición básica de luz, color y recorte",
    ],
    modules: [
      { title: "Composición y luz", lessonIds: ["foto_composicion", "foto_luz"] },
      { title: "Cámara y edición", lessonIds: ["foto_modos", "foto_edicion"] },
    ] as CourseModule[],
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
    objectives: [
      "Elaborar y mantener un presupuesto personal",
      "Aplicar estrategias de ahorro (p. ej. regla 50/30/20)",
      "Conocer conceptos básicos de inversión",
      "Constituir y mantener un fondo de emergencia",
    ],
    modules: [
      { title: "Presupuesto y ahorro", lessonIds: ["fin_presupuesto", "fin_ahorro"] },
      { title: "Inversión y seguridad", lessonIds: ["fin_inversion", "fin_emergencias"] },
    ] as CourseModule[],
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
  // JavaScript - Programming with Mosh (vídeo estable)
  variables: {
    title: "Variables en JavaScript",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk?start=0",
    content: "Aprenderás cómo funcionan las variables.",
  },
  functions: {
    title: "Funciones en JavaScript",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk?start=900",
    content: "Las funciones permiten reutilizar código.",
  },
  arrays: {
    title: "Arrays en JavaScript",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk?start=1800",
    content: "Los arrays permiten guardar múltiples valores.",
  },
  dom: {
    title: "Manipulación del DOM",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk?start=2700",
    content: "Aprende a modificar elementos de una página web.",
  },
  // Marketing - mismo vídeo estable con distintos momentos
  intro: {
    title: "Introducción al Marketing Digital",
    video: "https://www.youtube.com/embed/bixR-KIJKYM?start=0",
    content: "Aprenderás qué es el marketing digital.",
  },
  seo: {
    title: "SEO para principiantes",
    video: "https://www.youtube.com/embed/bixR-KIJKYM?start=400",
    content: "Cómo posicionar tu web en Google.",
  },
  ads: {
    title: "Publicidad en redes sociales",
    video: "https://www.youtube.com/embed/bixR-KIJKYM?start=800",
    content: "Cómo hacer campañas publicitarias.",
  },
  funnel: {
    title: "Embudo de ventas",
    video: "https://www.youtube.com/embed/bixR-KIJKYM?start=1200",
    content: "Cómo convertir visitantes en clientes.",
  },
  // IA - Google / 3Blue1Brown / canales estables
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
  // Python - Mosh (1h, muy estable)
  py_intro: {
    title: "Instalación y primer programa",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=0",
    content: "Instala Python y escribe tu primer programa.",
  },
  py_variables: {
    title: "Variables y tipos de datos",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=900",
    content: "Variables, números, cadenas y booleanos en Python.",
  },
  py_funciones: {
    title: "Funciones y módulos",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=1800",
    content: "Define funciones y organiza código en módulos.",
  },
  py_archivos: {
    title: "Trabajar con archivos",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=2700",
    content: "Leer y escribir archivos de texto y CSV.",
  },
  // React - freeCodeCamp React full course
  react_intro: {
    title: "Qué es React y por qué usarlo",
    video: "https://www.youtube.com/embed/bMknfKXIFA8?start=0",
    content: "Introducción a React y al ecosistema moderno.",
  },
  react_jsx: {
    title: "JSX y componentes",
    video: "https://www.youtube.com/embed/bMknfKXIFA8?start=1800",
    content: "JSX, componentes funcionales y props.",
  },
  react_state: {
    title: "Estado y hooks (useState)",
    video: "https://www.youtube.com/embed/bMknfKXIFA8?start=3600",
    content: "Manejo del estado con el hook useState.",
  },
  react_effects: {
    title: "useEffect y datos externos",
    video: "https://www.youtube.com/embed/bMknfKXIFA8?start=5400",
    content: "Efectos secundarios y llamadas a APIs.",
  },
  // Excel - tutorial estable, mismo vídeo con start
  excel_basico: {
    title: "Interfaz y datos básicos",
    video: "https://www.youtube.com/embed/rwbho0CgEAE?start=0",
    content: "Conoce la interfaz de Excel y entra datos.",
  },
  excel_formulas: {
    title: "Fórmulas esenciales",
    video: "https://www.youtube.com/embed/rwbho0CgEAE?start=600",
    content: "SUMAR, PROMEDIO, SI y más fórmulas útiles.",
  },
  excel_tablas: {
    title: "Tablas dinámicas",
    video: "https://www.youtube.com/embed/rwbho0CgEAE?start=1200",
    content: "Crea tablas dinámicas para analizar datos.",
  },
  excel_graficos: {
    title: "Gráficos y dashboards",
    video: "https://www.youtube.com/embed/rwbho0CgEAE?start=1800",
    content: "Gráficos y paneles visuales en Excel.",
  },
  // Inglés - canal estable (Learn English with EnglishClass101)
  ingles_saludos: {
    title: "Saludos y presentaciones",
    video: "https://www.youtube.com/embed/L0LQMhO0VYk?start=0",
    content: "Saludos, presentarte y preguntas básicas.",
  },
  ingles_verbos: {
    title: "Verb to be y tiempos básicos",
    video: "https://www.youtube.com/embed/L0LQMhO0VYk?start=300",
    content: "Verbo to be, presente simple y continuo.",
  },
  ingles_conversacion: {
    title: "Frases para conversar",
    video: "https://www.youtube.com/embed/L0LQMhO0VYk?start=600",
    content: "Frases útiles para mantener una conversación.",
  },
  ingles_negocio: {
    title: "Inglés en el trabajo",
    video: "https://www.youtube.com/embed/L0LQMhO0VYk?start=900",
    content: "Vocabulario y expresiones para el ámbito laboral.",
  },
  // UX/UI - Google / Design course estable
  ux_intro: {
    title: "Qué es UX y UI",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU?start=0",
    content: "Diferencias entre UX y UI y por qué importan.",
  },
  ux_investigacion: {
    title: "Investigación de usuarios",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU?start=400",
    content: "Entrevistas, encuestas y hallazgos.",
  },
  ux_wireframes: {
    title: "Wireframes y prototipos",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU?start=800",
    content: "De la idea al wireframe y al prototipo.",
  },
  ux_figma: {
    title: "Diseño en Figma",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU?start=1200",
    content: "Herramientas y flujo de diseño en Figma.",
  },
  // Fotografía - canal estable (Tony & Chelsea Northrup / freeCodeCamp photo)
  foto_composicion: {
    title: "Reglas de composición",
    video: "https://www.youtube.com/embed/7ZVyNjK5bIw?start=0",
    content: "Regla de tercios, encuadre y equilibrio.",
  },
  foto_luz: {
    title: "Luz y exposición",
    video: "https://www.youtube.com/embed/7ZVyNjK5bIw?start=600",
    content: "ISO, apertura, velocidad y medición de luz.",
  },
  foto_modos: {
    title: "Modos de la cámara",
    video: "https://www.youtube.com/embed/7ZVyNjK5bIw?start=1200",
    content: "Automático, prioridad y modo manual.",
  },
  foto_edicion: {
    title: "Edición básica",
    video: "https://www.youtube.com/embed/7ZVyNjK5bIw?start=1800",
    content: "Ajustes básicos de luz, color y recorte.",
  },
  // Finanzas - canal estable
  fin_presupuesto: {
    title: "Armar tu presupuesto",
    video: "https://www.youtube.com/embed/mT3Hf2Nmmlw?start=0",
    content: "Ingresos, gastos y categorías.",
  },
  fin_ahorro: {
    title: "Estrategias de ahorro",
    video: "https://www.youtube.com/embed/mT3Hf2Nmmlw?start=500",
    content: "Regla 50/30/20 y hábitos de ahorro.",
  },
  fin_inversion: {
    title: "Introducción a la inversión",
    video: "https://www.youtube.com/embed/mT3Hf2Nmmlw?start=1000",
    content: "Conceptos básicos antes de invertir.",
  },
  fin_emergencias: {
    title: "Fondo de emergencia",
    video: "https://www.youtube.com/embed/mT3Hf2Nmmlw?start=1500",
    content: "Cuánto ahorrar y dónde guardarlo.",
  },
};
