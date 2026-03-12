import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos descargables | SkillVerse",
  description: "PDFs, plantillas y cheatsheets para complementar los cursos de SkillVerse.",
};

const RECURSOS = [
  { title: "Cheatsheet JavaScript", desc: "Sintaxis y métodos más usados en un vistazo.", type: "PDF" },
  { title: "Plantilla presupuesto personal", desc: "Hoja de cálculo para llevar tu presupuesto.", type: "Plantilla" },
  { title: "Guía rápida SEO", desc: "Checklist básico para optimizar tu web.", type: "PDF" },
  { title: "Glosario de IA", desc: "Términos clave de inteligencia artificial.", type: "PDF" },
];

export default function RecursosPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Recursos descargables</h1>
        <p className="text-[#94a3b8] mb-10">
          PDFs, plantillas y cheatsheets que complementan los cursos.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {RECURSOS.map((r, i) => (
            <div key={i} className="curso-card p-5">
              <span className="text-xs font-medium text-[#6366f1] uppercase">{r.type}</span>
              <h2 className="text-lg font-semibold text-white mt-1 mb-2">{r.title}</h2>
              <p className="text-[#94a3b8] text-sm mb-4">{r.desc}</p>
              <button
                type="button"
                className="text-sm font-medium text-[#6366f1] hover:underline cursor-not-allowed"
                disabled
                title="Próximamente"
              >
                Descargar (próximamente)
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-[#94a3b8] mt-8 text-sm">
          Estamos preparando estos recursos. Avísanos en Contacto si te interesa alguno en concreto.
        </p>
      </div>
    </main>
  );
}
