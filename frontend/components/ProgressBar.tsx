"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  percentage: number;
  showLabel?: boolean;
  size?: "small" | "medium" | "large";
  animated?: boolean;
  showModules?: boolean;
  modules?: Array<{
    id: string;
    title: string;
    percentage: number;
    isCompleted: boolean;
  }>;
}

export default function ProgressBar({ 
  percentage, 
  showLabel = true, 
  size = "medium", 
  animated = true,
  showModules = false,
  modules = []
}: ProgressBarProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (animated) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayPercentage(percentage);
        setIsAnimating(false);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      setDisplayPercentage(percentage);
    }
  }, [percentage, animated]);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-2";
      case "large":
        return "h-4";
      default:
        return "h-3";
    }
  };

  const getLabelClasses = () => {
    switch (size) {
      case "small":
        return "text-xs";
      case "large":
        return "text-lg";
      default:
        return "text-sm";
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent === 100) return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (percent >= 75) return "bg-gradient-to-r from-blue-500 to-indigo-600";
    if (percent >= 50) return "bg-gradient-to-r from-purple-500 to-pink-600";
    if (percent >= 25) return "bg-gradient-to-r from-orange-500 to-red-600";
    return "bg-gradient-to-r from-red-500 to-rose-600";
  };

  return (
    <div className="w-full">
      {/* Main Progress Bar */}
      <div className="relative">
        {showLabel && (
          <div className="flex justify-between items-center mb-2">
            <span className={`font-medium ${getLabelClasses()} text-gray-300`}>
              Progreso del Curso
            </span>
            <span className={`font-bold ${getLabelClasses()} text-white`}>
              {displayPercentage}%
            </span>
          </div>
        )}
        
        <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${getSizeClasses()}`}>
          <div
            className={`h-full ${getProgressColor(displayPercentage)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${displayPercentage}%` }}
          >
            {/* Animated shimmer effect */}
            {isAnimating && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            )}
            
            {/* Glow effect for high progress */}
            {displayPercentage >= 75 && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            )}
            
            {/* Success indicator */}
            {displayPercentage === 100 && (
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 animate-pulse" />
            )}
          </div>
        </div>

        {/* Milestone markers */}
        <div className="flex justify-between mt-1">
          {[0, 25, 50, 75, 100].map((milestone) => (
            <div
              key={milestone}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                displayPercentage >= milestone
                  ? milestone === 100
                    ? "bg-green-500 shadow-lg shadow-green-500/50"
                    : "bg-blue-500 shadow-sm shadow-blue-500/30"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Module Progress */}
      {showModules && modules.length > 0 && (
        <div className="mt-6 space-y-3">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Progreso por Módulos</h4>
          {modules.map((module, index) => (
            <div key={module.id} className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-600 bg-gray-800">
                {module.isCompleted ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs text-gray-400">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-300">{module.title}</span>
                  <span className="text-xs text-gray-400">{module.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className={`h-full ${getProgressColor(module.percentage)} rounded-full transition-all duration-500`}
                    style={{ width: `${module.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Success Message */}
      {displayPercentage === 100 && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-green-400 font-medium">¡Felicidades! Has completado el curso</p>
              <p className="text-green-300 text-sm">Ahora puedes generar tu certificado</p>
            </div>
          </div>
        </div>
      )}

      {/* Motivational Messages */}
      {displayPercentage > 0 && displayPercentage < 100 && (
        <div className="mt-4 text-center">
          {displayPercentage < 25 && (
            <p className="text-gray-400 text-sm">¡Buen comienzo! Sigue así 🚀</p>
          )}
          {displayPercentage >= 25 && displayPercentage < 50 && (
            <p className="text-blue-400 text-sm">Vas por buen camino, sigue adelante 💪</p>
          )}
          {displayPercentage >= 50 && displayPercentage < 75 && (
            <p className="text-purple-400 text-sm">¡Más de la mitad completado! 🎯</p>
          )}
          {displayPercentage >= 75 && displayPercentage < 100 && (
            <p className="text-orange-400 text-sm">¡Casi terminas! Último esfuerzo 🔥</p>
          )}
        </div>
      )}
    </div>
  );
}
