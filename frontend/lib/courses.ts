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
};
