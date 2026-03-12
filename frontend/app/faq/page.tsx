import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | SkillVerse",
  description: "Respuestas a las dudas más habituales sobre SkillVerse: cursos, cuenta, progreso y más.",
};

const FAQ_ITEMS = [
  {
    q: "¿Los cursos son realmente gratis?",
    a: "Sí. Puedes acceder a todos los cursos y lecciones en video sin coste. Solo necesitas crear una cuenta para guardar tu progreso.",
  },
  {
    q: "¿Necesito tener conocimientos previos?",
    a: "Depende del curso. Tenemos cursos desde nivel principiante (por ejemplo JavaScript o Python desde cero) hasta temas más específicos. En la descripción de cada curso se indica el nivel recomendado.",
  },
  {
    q: "¿Cómo guardo mi progreso?",
    a: "Al iniciar sesión, tu avance se guarda automáticamente cuando marcas lecciones como completadas. Puedes ver el resumen en tu Dashboard.",
  },
  {
    q: "¿Puedo obtener un certificado?",
    a: "Al completar un curso al 100 % verás una insignia en tu perfil y en el Dashboard. Estamos trabajando en certificados descargables.",
  },
  {
    q: "¿Qué hago si un video no se reproduce?",
    a: "Los vídeos están alojados en YouTube. Si hay problemas, comprueba tu conexión o prueba otro navegador. Si el fallo continúa, usa la página de Contacto para reportarlo.",
  },
  {
    q: "¿Puedo sugerir un curso nuevo?",
    a: "Sí. Nos encanta recibir ideas. Escríbenos desde la página de Contacto con tu sugerencia.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Preguntas frecuentes</h1>
        <p className="text-[#94a3b8] mb-10">
          Resolvemos las dudas más habituales sobre la plataforma.
        </p>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="curso-card p-5">
              <h2 className="text-lg font-semibold text-white mb-2">{item.q}</h2>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
