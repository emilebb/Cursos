import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { courses } from "@/lib/courses";
import QuizComponent from "@/components/QuizComponent";
import CertificateComponent from "@/components/CertificateComponent";
import CourseContent from "./CourseContent";

export const metadata: Metadata = {
  title: "Desarrollo Web Full Stack con Python",
  description: "Crea aplicaciones web completas desde cero utilizando Python como lenguaje principal",
};

export default function PythonFullStackPage() {
  const course = courses.python_fullstack;

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
            <h1 className="text-4xl font-bold mb-4">🚀 {course.title}</h1>
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
                <div className="text-2xl font-bold">8 Semanas</div>
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
          <CourseContent />
        </Suspense>
      </div>
    </main>
  );
}
