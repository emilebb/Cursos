import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/lib/courses";

export function generateStaticParams() {
  return Object.keys(courses).map((id) => ({ id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses[id as keyof typeof courses];

  if (!course) return notFound();

  const objectives = "objectives" in course ? course.objectives : [];
  const modules = "modules" in course ? course.modules : [];

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
      <p className="text-[#94a3b8] mb-8">{course.description}</p>

      {/* Objetivos */}
      {objectives.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Qué aprenderás</h2>
          <ul className="space-y-2">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-[#e2e8f0]">
                <span className="text-[#6366f1] mt-0.5">✓</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Temario detallado (módulos y lecciones) */}
      {modules.length > 0 ? (
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Temario</h2>
          <div className="space-y-6">
            {modules.map((mod, i) => (
              <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                <div className="bg-[#1e293b]/80 px-4 py-3 font-medium text-white">
                  Módulo {i + 1}: {mod.title}
                </div>
                <ul className="divide-y divide-white/5">
                  {mod.lessonIds.map((lessonId) => {
                    const lesson = course.lessons.find((l) => l.id === lessonId);
                    if (!lesson) return null;
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/courses/${id}/lesson/${lesson.id}`}
                          className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#1e293b]/50 hover:text-white transition"
                        >
                          <span className="text-[#6366f1] text-sm">▶</span>
                          {lesson.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Sin módulos: listado plano de lecciones */
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Lecciones</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson) => (
              <li key={lesson.id}>
                <Link
                  href={`/courses/${id}/lesson/${lesson.id}`}
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition"
                >
                  <span className="text-[#6366f1]">▶</span>
                  {lesson.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
