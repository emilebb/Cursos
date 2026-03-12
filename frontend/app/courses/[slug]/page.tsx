import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { courses } from "@/lib/courses";
import GenericCourseContent from "@/components/GenericCourseContent";

interface CoursePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = courses[params.slug as keyof typeof courses];
  
  if (!course) {
    return {
      title: "Curso no encontrado",
      description: "El curso que buscas no existe",
    };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export async function generateStaticParams() {
  const courseSlugs = Object.keys(courses);
  return courseSlugs.map((slug) => ({
    slug,
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses[params.slug as keyof typeof courses];

  if (!course) {
    return (
      <main className="min-h-screen text-white py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
          <p className="text-xl text-gray-400 mb-8">
            El curso que buscas no existe o ha sido eliminado.
          </p>
          <Link 
            href="/courses" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Volver a Cursos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/courses" 
            className="text-blue-400 hover:text-blue-300 mb-4 inline-block flex items-center"
          >
            ← Volver a Cursos
          </Link>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl mb-6 text-blue-100">{course.description}</p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{course.modules.length}</div>
                <div className="text-sm text-blue-100">Módulos</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{course.lessons.length}</div>
                <div className="text-sm text-blue-100">Lecciones</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4-8 Semanas</div>
                <div className="text-sm text-blue-100">Duración</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm text-blue-100">Certificado</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Objetivos del curso:</h3>
              <ul className="space-y-2">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-blue-100">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="text-center py-8">Cargando contenido del curso...</div>}>
          <GenericCourseContent courseId={params.slug} />
        </Suspense>
      </div>
    </main>
  );
}
