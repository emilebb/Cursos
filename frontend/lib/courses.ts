import { supabase } from "./supabase";

export type CourseModule = { title: string; lessonIds: string[] };

export type CourseListItem = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

export async function getCourses(): Promise<CourseListItem[]> {
  // Base local courses
  const localCoursesMap = new Map<string, CourseListItem>();
  Object.entries(courses).forEach(([slug, c]) => {
    localCoursesMap.set(slug, {
      id: slug,
      title: c.title,
      description: c.description,
    });
  });

  // Try to fetch from external sources to add/override
  let externalCourses: CourseListItem[] = [];

  try {
    const baseUrl =
      typeof window !== "undefined"
        ? ""
        : process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/cursos.json`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.courses)) {
        externalCourses = json.courses;
      }
    }
  } catch {
    // Ignore fetch errors
  }

  if (externalCourses.length === 0 && supabase) {
    try {
      const { data, error } = await supabase.from("courses").select("*");
      if (!error && data) {
        externalCourses = data as CourseListItem[];
      }
    } catch {
      // Ignore supabase errors
    }
  }

  // Merge external courses into local courses map
  externalCourses.forEach(course => {
    if (course && course.id) {
      localCoursesMap.set(course.id, {
        ...localCoursesMap.get(course.id),
        ...course,
      });
    }
  });

  return Array.from(localCoursesMap.values());
}


export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type CourseQuiz = {
  id: string;
  title: string;
  moduleId: number;
  questions: QuizQuestion[];
  passingScore: number;
};

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
  python_fullstack: {
    title: "Desarrollo Web Full Stack con Python",
    description: "Crea aplicaciones web completas desde cero",
    objectives: [
      "Dominar Python fundamentals para desarrollo web",
      "Construir aplicaciones web con Flask",
      "Diseñar y gestionar bases de datos SQL",
      "Crear APIs RESTful profesionales",
      "Desplegar aplicaciones en producción",
    ],
    modules: [
      { title: "Fundamentos de Python", lessonIds: ["pyfs_intro", "pyfs_variables", "pyfs_control", "pyfs_functions"] },
      { title: "Desarrollo Web con Flask", lessonIds: ["pyfs_flask_intro", "pyfs_routes", "pyfs_forms", "pyfs_auth"] },
      { title: "Bases de Datos con SQL", lessonIds: ["pyfs_db_intro", "pyfs_sqlalchemy", "pyfs_crud", "pyfs_relations"] },
      { title: "Frontend Moderno", lessonIds: ["pyfs_html_css", "pyfs_js", "pyfs_bootstrap", "pyfs_integration"] },
      { title: "APIs REST", lessonIds: ["pyfs_api_intro", "pyfs_endpoints", "pyfs_jwt", "pyfs_testing"] },
      { title: "Despliegue y Producción", lessonIds: ["pyfs_production", "pyfs_docker", "pyfs_deploy", "pyfs_monitoring"] },
    ] as CourseModule[],
    lessons: [
      { id: "pyfs_intro", label: "Introducción a Python y configuración" },
      { id: "pyfs_variables", label: "Variables, tipos de datos y operadores" },
      { id: "pyfs_control", label: "Estructuras de control" },
      { id: "pyfs_functions", label: "Funciones y módulos" },
      { id: "pyfs_flask_intro", label: "Introducción a Flask" },
      { id: "pyfs_routes", label: "Rutas y templates" },
      { id: "pyfs_forms", label: "Formularios y manejo de datos" },
      { id: "pyfs_auth", label: "Sesiones y autenticación" },
      { id: "pyfs_db_intro", label: "Fundamentos de bases de datos" },
      { id: "pyfs_sqlalchemy", label: "SQLite y SQLAlchemy" },
      { id: "pyfs_crud", label: "CRUD operations" },
      { id: "pyfs_relations", label: "Relaciones entre tablas" },
      { id: "pyfs_html_css", label: "HTML5 y CSS3 responsive" },
      { id: "pyfs_js", label: "JavaScript fundamentals" },
      { id: "pyfs_bootstrap", label: "Bootstrap y componentes UI" },
      { id: "pyfs_integration", label: "Integración frontend-backend" },
      { id: "pyfs_api_intro", label: "Conceptos de APIs y REST" },
      { id: "pyfs_endpoints", label: "Creando endpoints" },
      { id: "pyfs_jwt", label: "Autenticación con JWT" },
      { id: "pyfs_testing", label: "Testing y documentación" },
      { id: "pyfs_production", label: "Configuración de producción" },
      { id: "pyfs_docker", label: "Docker básico" },
      { id: "pyfs_deploy", label: "Despliegue en la nube" },
      { id: "pyfs_monitoring", label: "Monitoreo y mantenimiento" },
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
  // Python Full Stack - Core Python (Mosh Hamedani)
  pyfs_intro: {
    title: "Introducción a Python y configuración",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=0",
    content: "Qué es Python, instalación y primer programa. Configuración del entorno de desarrollo.",
  },
  pyfs_variables: {
    title: "Variables, tipos de datos y operadores",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=900",
    content: "Variables, números, strings, booleanos y operadores aritméticos y de comparación.",
  },
  pyfs_control: {
    title: "Estructuras de control",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=1800",
    content: "Condicionales if/else, bucles for y while, control de flujo.",
  },
  pyfs_functions: {
    title: "Funciones y módulos",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc?start=2700",
    content: "Definir funciones, parámetros, retorno, importar módulos y organizar código.",
  },
  // Flask - Corey Schafer Flask tutorials
  pyfs_flask_intro: {
    title: "Introducción a Flask",
    video: "https://www.youtube.com/embed/mwltHaWc9H8?start=0",
    content: "Qué es Flask, conceptos web basics, instalar Flask y crear primera app.",
  },
  pyfs_routes: {
    title: "Rutas y templates",
    video: "https://www.youtube.com/embed/mwltHaWc9H8?start=600",
    content: "Definir rutas, renderizar templates HTML, pasar variables a templates.",
  },
  pyfs_forms: {
    title: "Formularios y manejo de datos",
    video: "https://www.youtube.com/embed/mwltHaWc9H8?start=1200",
    content: "Crear formularios HTML, procesar datos POST, validación básica.",
  },
  pyfs_auth: {
    title: "Sesiones y autenticación",
    video: "https://www.youtube.com/embed/mwltHaWc9H8?start=1800",
    content: "Gestionar sesiones de usuario, login/logout, proteger rutas.",
  },
  // Database - Mike Kennedy SQLAlchemy
  pyfs_db_intro: {
    title: "Fundamentos de bases de datos",
    video: "https://www.youtube.com/embed/FR4QIeZaPeM?start=0",
    content: "Qué es una base de datos relacional, conceptos SQL básicos, normalización.",
  },
  pyfs_sqlalchemy: {
    title: "SQLite y SQLAlchemy",
    video: "https://www.youtube.com/embed/FR4QIeZaPeM?start=500",
    content: "Instalar SQLAlchemy, definir modelos, conectar SQLite, crear tablas.",
  },
  pyfs_crud: {
    title: "CRUD operations",
    video: "https://www.youtube.com/embed/FR4QIeZaPeM?start=1000",
    content: "Create, Read, Update, Delete. Operaciones básicas con SQLAlchemy.",
  },
  pyfs_relations: {
    title: "Relaciones entre tablas",
    video: "https://www.youtube.com/embed/FR4QIeZaPeM?start=1500",
    content: "One-to-many, many-to-many, foreign keys, joins.",
  },
  // Frontend - Traversy Media HTML/CSS/JS crash course
  pyfs_html_css: {
    title: "HTML5 y CSS3 responsive",
    video: "https://www.youtube.com/embed/mU6anWqZJcc?start=0",
    content: "Estructura HTML5, estilos CSS3, media queries, diseño responsive.",
  },
  pyfs_js: {
    title: "JavaScript fundamentals",
    video: "https://www.youtube.com/embed/mU6anWqZJcc?start=1800",
    content: "Variables, funciones, DOM manipulation, event listeners en JavaScript.",
  },
  pyfs_bootstrap: {
    title: "Bootstrap y componentes UI",
    video: "https://www.youtube.com/embed/mU6anWqZJcc?start=3600",
    content: "Integrar Bootstrap, grid system, componentes, personalización.",
  },
  pyfs_integration: {
    title: "Integración frontend-backend",
    video: "https://www.youtube.com/embed/mU6anWqZJcc?start=5400",
    content: "Conectar frontend con Flask APIs, fetch API, JSON data.",
  },
  // REST APIs - freeCodeCamp REST API course
  pyfs_api_intro: {
    title: "Conceptos de APIs y REST",
    video: "https://www.youtube.com/embed/-MTSQjI5dFU?start=0",
    content: "Qué es una API, principios REST, HTTP methods, status codes.",
  },
  pyfs_endpoints: {
    title: "Creando endpoints",
    video: "https://www.youtube.com/embed/-MTSQjI5dFU?start=600",
    content: "Construir endpoints RESTful con Flask-RESTful, serialización.",
  },
  pyfs_jwt: {
    title: "Autenticación con JWT",
    video: "https://www.youtube.com/embed/-MTSQjI5dFU?start=1200",
    content: "JSON Web Tokens, login seguro, proteger APIs, middleware.",
  },
  pyfs_testing: {
    title: "Testing y documentación",
    video: "https://www.youtube.com/embed/-MTSQjI5dFU?start=1800",
    content: "Unit tests, integration tests, Postman, Swagger documentation.",
  },
  // Deployment - freeCodeCamp Docker and deployment
  pyfs_production: {
    title: "Configuración de producción",
    video: "https://www.youtube.com/embed/9zUHQgHYv48?start=0",
    content: "Environment variables, logging, error handling, performance.",
  },
  pyfs_docker: {
    title: "Docker básico",
    video: "https://www.youtube.com/embed/9zUHQgHYv48?start=600",
    content: "Crear Dockerfile, construir imágenes, docker-compose.",
  },
  pyfs_deploy: {
    title: "Despliegue en la nube",
    video: "https://www.youtube.com/embed/9zUHQgHYv48?start=1200",
    content: "Heroku, Vercel, AWS basics, CI/CD pipeline.",
  },
  pyfs_monitoring: {
    title: "Monitoreo y mantenimiento",
    video: "https://www.youtube.com/embed/9zUHQgHYv48?start=1800",
    content: "Monitoring, logging, backups, scaling basics.",
  },
};
