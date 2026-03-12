import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | SkillVerse",
  description: "Contacta con SkillVerse. Consultas, soporte y sugerencias.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contacto</h1>
        <p className="text-[#94a3b8] mb-10">
          ¿Tienes dudas, sugerencias o quieres colaborar? Escríbenos.
        </p>

        <div className="curso-card p-6 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Correo electrónico</h2>
            <p className="text-[#e2e8f0]">
              Para consultas generales, soporte o propuestas:{" "}
              <a href="mailto:contacto@skillverse.com" className="text-[#6366f1] hover:underline">
                contacto@skillverse.com
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Tiempo de respuesta</h2>
            <p className="text-[#94a3b8] text-sm">
              Intentamos responder en un plazo de 24–48 horas laborables.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Otros enlaces</h2>
            <ul className="text-[#e2e8f0] space-y-1">
              <li>
                <Link href="/faq" className="text-[#6366f1] hover:underline">Preguntas frecuentes (FAQ)</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-[#6366f1] hover:underline">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-[#6366f1] hover:underline">Política de privacidad</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
