import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros | SkillVerse",
  description: "Conoce la misión y visión de SkillVerse. Plataforma de cursos en video para aprender programación, IA y marketing.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Quiénes somos</h1>
        <p className="text-[#94a3b8] text-lg mb-8">
          SkillVerse es una plataforma de aprendizaje en línea creada para que cualquier persona pueda aprender tecnología de forma gratuita y a su ritmo.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Nuestra misión</h2>
          <p className="text-[#e2e8f0] leading-relaxed">
            Democratizar el acceso a la educación tecnológica. Queremos que programación, inteligencia artificial, marketing digital y otras habilidades estén al alcance de todos, con cursos en video claros y prácticos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Nuestra visión</h2>
          <p className="text-[#e2e8f0] leading-relaxed">
            Ser un referente en formación online en español: cursos de calidad, seguimiento de progreso y una comunidad de estudiantes que se apoyan mutuamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Qué ofrecemos</h2>
          <ul className="space-y-2 text-[#e2e8f0]">
            <li className="flex items-start gap-2">
              <span className="text-[#6366f1]">•</span>
              Cursos en video con lecciones paso a paso
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6366f1]">•</span>
              Seguimiento de tu progreso por curso
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6366f1]">•</span>
              Contenido de programación, IA, marketing, diseño y más
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6366f1]">•</span>
              Acceso gratuito para que el precio no sea una barrera
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
