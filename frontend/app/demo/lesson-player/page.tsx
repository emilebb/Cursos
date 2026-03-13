"use client";

import { useState } from "react";
import LessonPlayer from "@/components/LessonPlayer";

interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  isCompleted: boolean;
}

export default function LessonPlayerDemo() {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: "lesson-1",
      title: "Introducción a JavaScript",
      videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      isCompleted: false
    },
    {
      id: "lesson-2", 
      title: "Variables y Tipos de Datos",
      videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      isCompleted: false
    },
    {
      id: "lesson-3",
      title: "Funciones y Alcance",
      videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      isCompleted: false
    },
    {
      id: "lesson-4",
      title: "Arrays y Objetos",
      videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      isCompleted: false
    }
  ]);

  const handleLessonComplete = (lessonId: string) => {
    setLessons(prev => 
      prev.map(lesson => 
        lesson.id === lessonId 
          ? { ...lesson, isCompleted: true }
          : lesson
      )
    );
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Demo: Reproductor de Lecciones</h1>
          <p className="text-gray-400">
            Haz clic en los botones "Comenzar" para ver el modal de video y el sistema de progreso
          </p>
        </div>

        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Curso: JavaScript Básico</h2>
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <LessonPlayer
                key={lesson.id}
                lessonId={lesson.id}
                title={lesson.title}
                videoUrl={lesson.videoUrl}
                isCompleted={lesson.isCompleted}
                onComplete={handleLessonComplete}
              />
            ))}
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-3 text-green-400">✅ Características Implementadas:</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Modal oscuro con backdrop blur
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Video responsivo de YouTube/Vimeo
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Botón "Marcar como completado" con efectos hover
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Sistema de progreso persistente (localStorage)
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Círculo gris → check verde al completar
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              Diseño minimalista con colores oscuros
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
