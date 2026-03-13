"use client";

import { useState, useEffect } from "react";

interface LessonProgress {
  id: string;
  isCompleted: boolean;
  completedAt?: string;
}

interface ModuleProgress {
  id: string;
  title: string;
  lessons: string[];
  completedLessons: number;
  totalLessons: number;
  percentage: number;
  isCompleted: boolean;
}

interface CourseProgress {
  totalLessons: number;
  completedLessons: number;
  percentage: number;
  isCompleted: boolean;
  modules: ModuleProgress[];
  lastAccessedLesson?: string;
  startedAt?: string;
  completedAt?: string;
}

export function useCourseProgress(courseId: string, lessons: { id: string; title: string }[], modules: { id: string; title: string; lessonIds: string[] }[]) {
  const [progress, setProgress] = useState<CourseProgress>({
    totalLessons: lessons.length,
    completedLessons: 0,
    percentage: 0,
    isCompleted: false,
    modules: []
  });

  // Cargar progreso desde localStorage al iniciar
  useEffect(() => {
    loadProgress();
  }, [courseId]);

  const loadProgress = () => {
    try {
      const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setProgress(parsed);
      } else {
        // Inicializar progreso si no existe
        initializeProgress();
      }
    } catch (error) {
      console.error('Error loading progress:', error);
      initializeProgress();
    }
  };

  const initializeProgress = () => {
    const moduleProgress: ModuleProgress[] = modules.map(module => ({
      id: module.id,
      title: module.title,
      lessons: module.lessonIds,
      completedLessons: 0,
      totalLessons: module.lessonIds.length,
      percentage: 0,
      isCompleted: false
    }));

    const initialProgress: CourseProgress = {
      totalLessons: lessons.length,
      completedLessons: 0,
      percentage: 0,
      isCompleted: false,
      modules: moduleProgress,
      startedAt: new Date().toISOString()
    };

    setProgress(initialProgress);
    saveProgress(initialProgress);
  };

  const saveProgress = (newProgress: CourseProgress) => {
    try {
      localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(newProgress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const markLessonCompleted = (lessonId: string) => {
    setProgress(prevProgress => {
      // Verificar si ya está completada
      const lessonKey = `lesson-${lessonId}`;
      const isAlreadyCompleted = localStorage.getItem(lessonKey) === 'completed';
      
      if (isAlreadyCompleted) {
        return prevProgress; // No hacer nada si ya está completada
      }

      // Marcar lección como completada en localStorage
      localStorage.setItem(lessonKey, 'completed');

      // Calcular nuevo progreso
      const newModules = prevProgress.modules.map(module => {
        if (module.lessons.includes(lessonId)) {
          const newCompletedLessons = module.completedLessons + 1;
          const newPercentage = Math.round((newCompletedLessons / module.totalLessons) * 100);
          const isCompleted = newPercentage === 100;

          return {
            ...module,
            completedLessons: newCompletedLessons,
            percentage: newPercentage,
            isCompleted
          };
        }
        return module;
      });

      const newCompletedLessons = prevProgress.completedLessons + 1;
      const newPercentage = Math.round((newCompletedLessons / prevProgress.totalLessons) * 100);
      const isCompleted = newPercentage === 100;

      const newProgress: CourseProgress = {
        ...prevProgress,
        completedLessons: newCompletedLessons,
        percentage: newPercentage,
        isCompleted,
        modules: newModules,
        lastAccessedLesson: lessonId,
        completedAt: isCompleted ? new Date().toISOString() : prevProgress.completedAt
      };

      saveProgress(newProgress);
      return newProgress;
    });
  };

  const getLessonStatus = (lessonId: string): boolean => {
    return localStorage.getItem(`lesson-${lessonId}`) === 'completed';
  };

  const getModuleStatus = (moduleId: string): boolean => {
    const module = progress.modules.find(m => m.id === moduleId);
    return module?.isCompleted || false;
  };

  const getNextUncompletedLesson = () => {
    for (const module of progress.modules) {
      for (const lessonId of module.lessons) {
        if (!getLessonStatus(lessonId)) {
          return lessonId;
        }
      }
    }
    return null;
  };

  const resetProgress = () => {
    // Limpiar localStorage de este curso
    lessons.forEach(lesson => {
      localStorage.removeItem(`lesson-${lesson.id}`);
    });
    localStorage.removeItem(`course-progress-${courseId}`);
    
    // Reinicializar
    initializeProgress();
  };

  return {
    progress,
    markLessonCompleted,
    getLessonStatus,
    getModuleStatus,
    getNextUncompletedLesson,
    resetProgress,
    isLoading: progress.modules.length === 0
  };
}
