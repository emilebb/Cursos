import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";

export function generateStaticParams() {
  return Object.keys(courses).map((id) => ({ id }));
}

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses[id as keyof typeof courses];

  if (!course) return notFound();

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* SIDEBAR - Temario por módulos */}
      <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">📚 Temario</h2>

        {"modules" in course && course.modules.length > 0 ? (
          <div className="space-y-5">
            {course.modules.map((mod, i) => (
              <div key={i}>
                <p className="text-xs font-semibold text-[#6366f1] uppercase tracking-wide mb-2">
                  Módulo {i + 1}: {mod.title}
                </p>
                <ul className="space-y-1 text-gray-300">
                  {mod.lessonIds.map((lessonId) => {
                    const lesson = course.lessons.find((l) => l.id === lessonId);
                    if (!lesson) return null;
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/courses/${id}/lesson/${lesson.id}`}
                          className="block p-2 rounded-lg bg-gray-800/80 hover:bg-[#6366f1]/20 hover:text-white transition text-sm"
                        >
                          {lesson.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2 text-gray-300">
            {course.lessons.map((lesson) => (
              <li key={lesson.id}>
                <Link
                  href={`/courses/${id}/lesson/${lesson.id}`}
                  className="block p-3 rounded-lg bg-gray-800 hover:bg-[#6366f1]/20 transition"
                >
                  {lesson.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
