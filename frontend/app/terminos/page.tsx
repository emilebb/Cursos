import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de uso | SkillVerse",
  description: "Términos y condiciones de uso de la plataforma SkillVerse.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Términos de uso</h1>
        <p className="text-[#94a3b8] text-sm mb-8">Última actualización: 2026</p>

        <div className="space-y-8 text-[#e2e8f0]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Aceptación</h2>
            <p className="leading-relaxed">
              Al acceder y utilizar SkillVerse aceptas estos términos. Si no estás de acuerdo, no uses la plataforma.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Uso del servicio</h2>
            <p className="leading-relaxed mb-2">
              SkillVerse ofrece cursos y materiales educativos en formato digital. Te comprometes a:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#94a3b8]">
              <li>Usar la plataforma de forma lícita y respetuosa</li>
              <li>No compartir tu cuenta ni suplantar a otros usuarios</li>
              <li>No extraer ni reutilizar masivamente el contenido sin autorización</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Contenido y propiedad</h2>
            <p className="leading-relaxed">
              Los textos, vídeos y materiales didácticos de SkillVerse son propiedad de la plataforma o de sus licenciantes. El contenido embebido (por ejemplo vídeos de YouTube) está sujeto a las políticas de sus respectivos proveedores.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Limitación de responsabilidad</h2>
            <p className="leading-relaxed">
              La plataforma se ofrece &quot;tal cual&quot;. No garantizamos resultados formativos concretos. No nos hacemos responsables de daños indirectos derivados del uso del servicio.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Modificaciones</h2>
            <p className="leading-relaxed">
              Nos reservamos el derecho de modificar estos términos. Los cambios se publicarán en esta página. El uso continuado de SkillVerse tras los cambios implica la aceptación de los nuevos términos.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
