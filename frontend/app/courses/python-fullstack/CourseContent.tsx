"use client";

import { useState } from "react";
import { courses } from "@/lib/courses";
import QuizComponent from "@/components/QuizComponent";
import CertificateComponent from "@/components/CertificateComponent";
import { lessons } from "@/lib/courses";

export default function CourseContent() {
  const course = courses.python_fullstack;
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [showQuiz, setShowQuiz] = useState<number | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const handleQuizComplete = (moduleId: number, score: number, passed: boolean) => {
    setQuizScores(prev => ({ ...prev, [moduleId]: score }));
    if (passed) {
      // Marcar el módulo como completado
      const moduleLessons = course.modules[moduleId - 1].lessonIds;
      moduleLessons.forEach(lessonId => {
        markLessonComplete(lessonId);
      });
    }
    setShowQuiz(null);
  };

  const calculateProgress = () => {
    const totalLessons = course.lessons.length;
    const completedCount = completedLessons.size;
    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
  };

  const progress = calculateProgress();
  const allQuizzesCompleted = course.modules.every((module, index) => quizScores[index + 1] !== undefined);

  return (
    <div className="space-y-6">
      {/* Barra de Progreso */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Tu Progreso</h3>
          <span className="text-sm text-gray-400">{progress.toFixed(1)}% completado</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {completedLessons.size} de {course.lessons.length} lecciones completadas
        </p>
      </div>

      {/* Sistema de Certificados */}
      {allQuizzesCompleted && progress >= 70 && (
        <div className="mb-6">
          <CertificateComponent courseId="python_fullstack" />
        </div>
      )}

      {/* Módulos del Curso */}
      <div className="space-y-4">
        {course.modules.map((module, moduleIndex) => {
          const moduleId = moduleIndex + 1;
          const isExpanded = expandedModules.includes(moduleId);
          const moduleProgress = module.lessonIds.filter(id => completedLessons.has(id)).length;
          const quizScore = quizScores[moduleId];
          
          return (
            <div key={moduleId} className="bg-gray-800 rounded-lg overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => toggleModule(moduleId)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Módulo {moduleId}: {module.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{module.lessonIds.length} lecciones</span>
                      <span>{moduleProgress} completadas</span>
                      {quizScore && (
                        <span className={`px-2 py-1 rounded ${
                          quizScore >= 70 ? 'bg-green-600' : 'bg-red-600'
                        } text-white`}>
                          Quiz: {quizScore}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <svg className="transform -rotate-90 w-16 h-16">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-gray-600"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${(moduleProgress / module.lessonIds.length) * 176} 176`}
                          className="text-blue-500 transition-all duration-500"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm">
                        {Math.round((moduleProgress / module.lessonIds.length) * 100)}%
                      </span>
                    </div>
                    <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-gray-700">
                  {/* Lecciones del Módulo */}
                  <div className="p-6 space-y-3">
                    {module.lessonIds.map((lessonId) => {
                      const lesson = course.lessons.find(l => l.id === lessonId);
                      const lessonData = lessons[lessonId];
                      const isCompleted = completedLessons.has(lessonId);
                      
                      if (!lesson || !lessonData) return null;
                      
                      return (
                        <div key={lessonId} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              isCompleted ? 'bg-green-600' : 'bg-gray-600'
                            }`}>
                              {isCompleted && (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{lesson.label}</h4>
                              <p className="text-sm text-gray-400">Video • 45-90 min</p>
                            </div>
                          </div>
                          <button
                            onClick={() => window.open(`/lesson/${lessonId}`, '_blank')}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            {isCompleted ? 'Repasar' : 'Comenzar'}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quiz del Módulo */}
                  <div className="border-t border-gray-700 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Quiz del Módulo {moduleId}</h4>
                        <p className="text-sm text-gray-400">
                          Evalúa tu conocimiento de este módulo (70% para aprobar)
                        </p>
                      </div>
                      {!quizScore && (
                        <button
                          onClick={() => setShowQuiz(moduleId)}
                          disabled={moduleProgress < module.lessonIds.length}
                          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {moduleProgress < module.lessonIds.length 
                            ? 'Completa todas las lecciones' 
                            : 'Comenzar Quiz'
                          }
                        </button>
                      )}
                    </div>
                    
                    {quizScore && (
                      <div className={`p-4 rounded-lg ${
                        quizScore >= 70 ? 'bg-green-600/20 border border-green-600' : 'bg-red-600/20 border border-red-600'
                      }`}>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className={`font-semibold ${quizScore >= 70 ? 'text-green-400' : 'text-red-400'}`}>
                              {quizScore >= 70 ? '✓ Aprobado' : '✗ Necesitas mejorar'}
                            </p>
                            <p className="text-sm text-gray-400">Puntuación: {quizScore}%</p>
                          </div>
                          <button
                            onClick={() => setShowQuiz(moduleId)}
                            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                          >
                            Reintentar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Quiz Módulo {showQuiz}
                </h3>
                <button
                  onClick={() => setShowQuiz(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <QuizComponent
                courseId="python_fullstack"
                moduleId={showQuiz}
                onComplete={(score, passed) => handleQuizComplete(showQuiz, score, passed)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
