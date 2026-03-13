"use client";

import { useState } from "react";
import LessonPlayer from "./LessonPlayer";
import ProgressBar from "./ProgressBar";
import { useCourseProgress } from "@/hooks/useCourseProgress";

interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  duration?: string;
}

interface Module {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

interface CoursePlayerProps {
  courseId: string;
  title: string;
  description: string;
  modules: Module[];
  onCertificateAvailable?: () => void;
}

export default function CoursePlayer({
  courseId,
  title,
  description,
  modules,
  onCertificateAvailable
}: CoursePlayerProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const { progress, markLessonCompleted, getLessonStatus, getModuleStatus, isLoading } = useCourseProgress(
    courseId,
    modules.flatMap(m => m.lessons),
    modules.map(m => ({ id: m.id, title: m.title, lessonIds: m.lessons.map(l => l.id) }))
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleLessonComplete = (lessonId: string) => {
    markLessonCompleted(lessonId);
    
    // Disparar evento de certificado disponible si se completó todo
    if (progress.isCompleted && onCertificateAvailable) {
      setTimeout(() => onCertificateAvailable(), 1000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-400 text-lg">{description}</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-6">
          <ProgressBar
            percentage={progress.percentage}
            size="large"
            showModules={true}
            modules={progress.modules}
          />
        </div>

        {/* Certificate Button (only when course is completed) */}
        {progress.isCompleted && (
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-green-400 font-semibold text-lg mb-1">¡Curso Completado!</h3>
                <p className="text-green-300">Has completado todas las lecciones. Ahora puedes generar tu certificado.</p>
              </div>
              <button
                onClick={onCertificateAvailable}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
              >
                Generar Certificado 🏆
              </button>
            </div>
          </div>
        )}

        {/* Course Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Contenido del Curso</h2>
          
          {modules.map((module, moduleIndex) => {
            const isModuleExpanded = expandedModules.includes(module.id);
            const isModuleCompleted = getModuleStatus(module.id);
            const moduleProgress = progress.modules.find(m => m.id === module.id);
            
            return (
              <div
                key={module.id}
                className="bg-[#1e293b] rounded-xl border border-white/10 overflow-hidden"
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isModuleCompleted
                        ? 'bg-green-500 shadow-lg shadow-green-500/30'
                        : 'bg-blue-500 shadow-lg shadow-blue-500/30'
                    }`}>
                      {isModuleCompleted ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-white font-bold">{moduleIndex + 1}</span>
                      )}
                    </div>
                    
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-white">{module.title}</h3>
                      {module.description && (
                        <p className="text-gray-400 text-sm mt-1">{module.description}</p>
                      )}
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <span>{module.lessons.length} lecciones</span>
                        {moduleProgress && (
                          <span className="text-blue-400">
                            {moduleProgress.completedLessons}/{moduleProgress.totalLessons} completadas
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {moduleProgress && (
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-400">
                          {moduleProgress.percentage}%
                        </div>
                        <div className="w-20 bg-gray-700 rounded-full h-2 mt-1">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${moduleProgress.percentage}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className={`transform transition-transform duration-200 ${
                      isModuleExpanded ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Module Lessons */}
                {isModuleExpanded && (
                  <div className="border-t border-white/10 p-6 space-y-4">
                    {module.lessons.map((lesson) => (
                      <LessonPlayer
                        key={lesson.id}
                        lessonId={lesson.id}
                        title={lesson.title}
                        videoUrl={lesson.videoUrl}
                        isCompleted={getLessonStatus(lesson.id)}
                        onComplete={handleLessonComplete}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Course Stats */}
        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-4">Estadísticas del Curso</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{modules.length}</div>
              <div className="text-sm text-gray-400">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {modules.reduce((total, module) => total + module.lessons.length, 0)}
              </div>
              <div className="text-sm text-gray-400">Lecciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{progress.completedLessons}</div>
              <div className="text-sm text-gray-400">Completadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">
                {modules.reduce((total, module) => total + module.lessons.length, 0) - progress.completedLessons}
              </div>
              <div className="text-sm text-gray-400">Restantes</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
