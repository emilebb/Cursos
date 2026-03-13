"use client";

import { useState } from "react";
import CoursePlayer from "@/components/CoursePlayer";

const courseData = {
  courseId: "javascript-basico",
  title: "JavaScript Básico - De Cero a Desarrollador",
  description: "Aprende JavaScript desde los fundamentos hasta crear aplicaciones web interactivas. Un curso completo para principiantes.",
  modules: [
    {
      id: "module-1",
      title: "Módulo 1: Fundamentos de JavaScript",
      description: "Aprende los conceptos básicos y la sintaxis de JavaScript",
      lessons: [
        {
          id: "lesson-1",
          title: "Introducción a JavaScript",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "45 min"
        },
        {
          id: "lesson-2", 
          title: "Variables y Tipos de Datos",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "55 min"
        },
        {
          id: "lesson-3",
          title: "Operadores y Expresiones",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "40 min"
        }
      ]
    },
    {
      id: "module-2",
      title: "Módulo 2: Estructuras de Control",
      description: "Domina el flujo de ejecución y toma de decisiones",
      lessons: [
        {
          id: "lesson-4",
          title: "Condicionales: if, else, switch",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "50 min"
        },
        {
          id: "lesson-5",
          title: "Bucles: for, while, do-while",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "60 min"
        },
        {
          id: "lesson-6",
          title: "Manejo de Errores: try-catch",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "35 min"
        }
      ]
    },
    {
      id: "module-3",
      title: "Módulo 3: Funciones y Alcance",
      description: "Aprende a crear código reutilizable y modular",
      lessons: [
        {
          id: "lesson-7",
          title: "Declaración de Funciones",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "45 min"
        },
        {
          id: "lesson-8",
          title: "Funciones Flecha y Expresiones",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "40 min"
        },
        {
          id: "lesson-9",
          title: "Alcance y Closures",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "55 min"
        }
      ]
    },
    {
      id: "module-4",
      title: "Módulo 4: Arrays y Objetos",
      description: "Trabaja con estructuras de datos complejas",
      lessons: [
        {
          id: "lesson-10",
          title: "Arrays: Métodos y Manipulación",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "60 min"
        },
        {
          id: "lesson-11",
          title: "Objetos y Propiedades",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "50 min"
        },
        {
          id: "lesson-12",
          title: "Destructuring y Spread Operator",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          duration: "45 min"
        }
      ]
    }
  ]
};

export default function CoursePlayerDemo() {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleCertificateAvailable = () => {
    setShowCertificate(true);
  };

  return (
    <div>
      <CoursePlayer
        courseId={courseData.courseId}
        title={courseData.title}
        description={courseData.description}
        modules={courseData.modules}
        onCertificateAvailable={handleCertificateAvailable}
      />

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] rounded-xl border border-white/10 max-w-2xl w-full p-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">¡Felicidades!</h2>
                <p className="text-gray-400">Has completado exitosamente el curso</p>
                <p className="text-xl font-semibold text-blue-400 mt-2">{courseData.title}</p>
              </div>

              <div className="bg-[#1e293b] rounded-lg p-6 border border-white/10">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <span className="text-gray-400">Fecha de finalización:</span>
                    <p className="text-white font-medium">{new Date().toLocaleDateString('es-ES')}</p>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400">Duración total:</span>
                    <p className="text-white font-medium">12 horas</p>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400">Lecciones completadas:</span>
                    <p className="text-white font-medium">12/12</p>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400">Calificación:</span>
                    <p className="text-white font-medium">Excelente</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setShowCertificate(false)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    alert('Certificado descargado (simulación)');
                    setShowCertificate(false);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
                >
                  Descargar Certificado 🏆
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
