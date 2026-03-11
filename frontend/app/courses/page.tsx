import { Suspense } from "react";
import Link from "next/link";
import CoursesContent from "./CoursesContent";

export default function CoursesPage() {
  return (
    <main className="min-h-screen text-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Cursos disponibles</h1>
        <p className="text-[#94a3b8] mb-8">Elige un curso y empieza a aprender.</p>

        <Suspense fallback={<div className="text-[#94a3b8]">Cargando cursos...</div>}>
          <CoursesContent />
        </Suspense>
      </div>
    </main>
  );
}
