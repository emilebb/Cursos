import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comunidad | SkillVerse",
  description: "Únete a la comunidad de SkillVerse. Comparte dudas, proyectos y experiencias.",
};

export default function ComunidadPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Comunidad</h1>
        <p className="text-[#94a3b8] text-lg mb-10">
          Un espacio para que estudiantes de SkillVerse se apoyen, compartan dudas y proyectos.
        </p>

        <div className="curso-card p-8">
          <div className="text-5xl mb-4">👋</div>
          <h2 className="text-xl font-semibold text-white mb-2">Próximamente</h2>
          <p className="text-[#94a3b8] mb-6">
            Estamos preparando un foro o canal de comunidad (por ejemplo Discord o un foro integrado). Si quieres que te avisemos cuando esté listo, escríbenos desde <Link href="/contacto" className="text-[#6366f1] hover:underline">Contacto</Link>.
          </p>
          <p className="text-[#94a3b8] text-sm">
            Mientras tanto, puedes usar el Dashboard para ver tu progreso y seguir con los cursos.
          </p>
        </div>
      </div>
    </main>
  );
}
