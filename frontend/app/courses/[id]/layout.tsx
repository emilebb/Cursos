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
      {/* SIDEBAR */}
      <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-8">📚 Lecciones</h2>

        <ul className="space-y-4 text-gray-300">
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/courses/${id}/lesson/${lesson.id}`}
            >
              <li className="p-3 rounded-lg bg-gray-800 hover:bg-blue-600 transition cursor-pointer">
                {lesson.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
