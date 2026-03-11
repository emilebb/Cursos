import Link from "next/link";
import { courses } from "@/lib/courses";

const FEATURED_SLUGS = ["javascript", "ai", "marketing"] as const;

const BENEFITS = [
  {
    title: "Cursos en video",
    description: "Lecciones en video paso a paso para que aprendas a tu ritmo.",
  },
  {
    title: "Contenido práctico",
    description: "Ejemplos y ejercicios para aplicar lo que aprendes.",
  },
  {
    title: "Seguimiento de progreso",
    description: "Marca lecciones completadas y revisa tu avance en el dashboard.",
  },
];

const TESTIMONIALS = [
  { quote: "Los cursos están muy bien explicados. Perfecto para empezar desde cero.", author: "María G." },
  { quote: "La plataforma es clara y el progreso por curso me motiva a seguir.", author: "Carlos R." },
  { quote: "Encontré cursos de programación, IA y marketing en un solo lugar.", author: "Ana L." },
];

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) => ({ slug, ...courses[slug] })).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Aprende tecnología gratis</h1>
        <p>
          Cursos completos de programación, marketing digital e inteligencia artificial. Con lecciones en video y contenido paso a paso.
        </p>
        <Link href="/courses#cursos" className="btn">
          Ver cursos
        </Link>
      </section>

      {/* Cursos destacados */}
      <section className="py-16 px-4 bg-[#0f172a]" id="cursos">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Cursos destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(({ slug, title, description }) => (
              <div key={slug} className="curso-card">
                <div className="curso-card-placeholder">📚</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/courses/${slug}`} className="btn-curso">
                  Ver curso
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="button-primary inline-block">
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué aprender aquí */}
      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Por qué aprender aquí</h2>
          <div className="benefits-grid">
            {BENEFITS.map((item, i) => (
              <div key={i} className="curso-card">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Lo que dicen los estudiantes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-[#e2e8f0] italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#94a3b8] text-sm mt-3">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
