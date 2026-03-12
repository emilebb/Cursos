"use client";

import { useState } from "react";
import QuizComponent from "@/components/QuizComponent";
import CertificateComponent from "@/components/CertificateComponent";

interface Props {
  courseId: string;
  moduleId: number;
  courseSlug: string;
  totalLessons: number;
}

export default function LessonQuizSection({ courseId, moduleId, courseSlug, totalLessons }: Props) {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showCert, setShowCert] = useState(false);

  function handleQuizComplete(score: number, passed: boolean) {
    setQuizScore(score);
    setQuizPassed(passed);
  }

  return (
    <div className="mt-8">
      <div className="border-t border-white/10 pt-8 mb-6">
        <h2 className="text-xl font-bold text-white mb-1">🧠 Quiz del módulo</h2>
        <p className="text-[#94a3b8] text-sm mb-6">Pon a prueba lo que aprendiste en esta lección.</p>
        <QuizComponent
          courseId={courseId}
          moduleId={moduleId}
          onComplete={handleQuizComplete}
        />
      </div>

      {/* Certificate zone – shown after passing quiz on last module */}
      {quizPassed && (
        <div className="mt-8 border border-[#6366f1]/40 bg-[#1e293b] rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">🎓 ¿Terminaste el curso?</h3>
              <p className="text-[#94a3b8] text-sm">Si completaste todas las lecciones puedes generar tu certificado.</p>
            </div>
            <button
              onClick={() => setShowCert((v) => !v)}
              className="bg-gradient-to-r from-[#6366f1] to-[#818cf8] hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition"
            >
              {showCert ? "Ocultar" : "Ver certificado"}
            </button>
          </div>

          {showCert && (
            <div className="mt-6">
              <CertificateComponent courseId={courseSlug} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
