import Link from "next/link";
import { courses } from "@/lib/courses";

export default function Courses() {
  return (
    <main className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Cursos disponibles 📚
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {Object.entries(courses).map(([slug, course]) => (
          <div key={slug} className="card">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <Link href={`/courses/${slug}`}>
              <button className="button-primary">Ver curso</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
