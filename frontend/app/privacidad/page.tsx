import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad | SkillVerse",
  description: "Política de privacidad de SkillVerse. Cómo tratamos tus datos personales y tu privacidad.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Política de privacidad</h1>
        <p className="text-[#94a3b8] text-sm mb-8">Última actualización: 2026</p>

        <div className="space-y-8 text-[#e2e8f0]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Responsable del tratamiento</h2>
            <p className="leading-relaxed">
              SkillVerse es la plataforma que gestiona los datos que nos facilitas al registrarte y usar los cursos. Los datos de autenticación se gestionan de forma segura a través de servicios externos (por ejemplo Supabase) que cumplen con normativas de protección de datos.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Datos que recogemos</h2>
            <p className="leading-relaxed mb-2">
              Podemos recoger y tratar, según el uso que hagas de la plataforma:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#94a3b8]">
              <li>Correo electrónico y datos de cuenta (registro e inicio de sesión)</li>
              <li>Progreso en cursos (lecciones completadas)</li>
              <li>Datos técnicos (dirección IP, tipo de navegador) para el correcto funcionamiento del sitio</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Finalidad del tratamiento</h2>
            <p className="leading-relaxed">
              Utilizamos tus datos para darte acceso a la plataforma, guardar tu progreso en los cursos, mejorar el servicio y, si lo autorizas, enviarte información relevante sobre nuevos cursos o novedades.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Tus derechos</h2>
            <p className="leading-relaxed">
              Puedes acceder, rectificar o solicitar la eliminación de tus datos personales. Para ejercer estos derechos o cualquier consulta sobre privacidad, utiliza la página de <Link href="/contacto" className="text-[#6366f1] hover:underline">Contacto</Link>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Cookies y tecnologías similares</h2>
            <p className="leading-relaxed">
              La plataforma puede utilizar cookies o almacenamiento local para mantener tu sesión y preferencias. No usamos cookies con fines publicitarios de terceros sin tu consentimiento.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
