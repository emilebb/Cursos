"use client";

import { useState } from "react";
import { CourseQuiz, QuizQuestion } from "@/lib/courses";
import { getQuizByModule } from "@/lib/quizzes";

interface QuizComponentProps {
  courseId: string;
  moduleId: number;
  onComplete: (score: number, passed: boolean) => void;
}

export default function QuizComponent({ courseId, moduleId, onComplete }: QuizComponentProps) {
  const quiz = getQuizByModule(courseId, moduleId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">No hay quiz disponible para este módulo.</p>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (submitted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return (correct / quiz.questions.length) * 100;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    onComplete(score, passed);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setSubmitted(false);
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    const correctCount = quiz.questions.filter((q, i) => selectedAnswers[i] === q.correct).length;

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <div className={`text-center p-6 rounded-lg mb-6 ${
          passed ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
        }`}>
          <div className={`text-4xl mb-4 ${passed ? "text-green-600" : "text-red-600"}`}>
            {passed ? "🎉" : "📚"}
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${passed ? "text-green-800" : "text-red-800"}`}>
            {passed ? "¡Felicidades! Has aprobado" : "Necesitas estudiar más"}
          </h3>
          <p className={`text-lg ${passed ? "text-green-700" : "text-red-700"}`}>
            Tu puntuación: {score.toFixed(1)}% ({correctCount}/{quiz.questions.length})
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Puntuación mínima para aprobar: {quiz.passingScore}%
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="font-semibold text-gray-800">Revisión de respuestas:</h4>
          {quiz.questions.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correct;
            return (
              <div key={question.id} className={`p-4 rounded-lg border ${
                isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 mb-2">
                      Pregunta {index + 1}: {question.question}
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className={`font-medium ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                        Tu respuesta: {question.options[selectedAnswers[index]] || "No respondida"}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-700">
                          Respuesta correcta: {question.options[question.correct]}
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{question.explanation}</p>
                  </div>
                  <div className={`ml-4 text-2xl ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {isCorrect ? "✅" : "❌"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reintentar Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{quiz.title}</h3>
          <span className="text-sm text-gray-600">
            Pregunta {currentQuestion + 1} de {quiz.questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-4">{question.question}</h4>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion] === index;
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                } ${submitted ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    isSelected ? "border-blue-500" : "border-gray-300"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-blue-500" />}
                  </div>
                  <span className="text-gray-800">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>

        {currentQuestion === quiz.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers.length !== quiz.questions.length}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enviar Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente →
          </button>
        )}
      </div>

      {selectedAnswers.length !== quiz.questions.length && currentQuestion === quiz.questions.length - 1 && (
        <p className="text-sm text-gray-600 mt-4 text-center">
          Debes responder todas las preguntas antes de enviar el quiz.
        </p>
      )}
    </div>
  );
}
