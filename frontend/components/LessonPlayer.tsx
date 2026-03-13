"use client";

import { useState, useEffect } from "react";

interface LessonPlayerProps {
  lessonId: string;
  title: string;
  videoUrl: string;
  isCompleted: boolean;
  onComplete: (lessonId: string) => void;
}

export default function LessonPlayer({ 
  lessonId, 
  title, 
  videoUrl, 
  isCompleted, 
  onComplete 
}: LessonPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);

  useEffect(() => {
    // Cargar estado de completado desde localStorage
    const savedState = localStorage.getItem(`lesson-${lessonId}`);
    if (savedState === 'completed') {
      setIsVideoCompleted(true);
    }
  }, [lessonId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMarkCompleted = async () => {
    setIsMarkingComplete(true);
    
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Guardar en localStorage
    localStorage.setItem(`lesson-${lessonId}`, 'completed');
    
    // Actualizar estado
    setIsVideoCompleted(true);
    onComplete(lessonId);
    
    setIsMarkingComplete(false);
    handleCloseModal();
  };

  const getVideoEmbedUrl = (url: string) => {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    
    return url;
  };

  return (
    <>
      {/* Lesson Item */}
      <div className="flex items-center justify-between p-4 bg-[#1e293b] rounded-lg border border-white/10 hover:border-[#6366f1]/30 transition-all duration-200">
        <div className="flex items-center space-x-4">
          {/* Status Circle */}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isVideoCompleted 
              ? 'bg-green-500 shadow-lg shadow-green-500/30' 
              : 'bg-gray-600'
          }`}>
            {isVideoCompleted && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          
          <div className="flex-1">
            <h4 className="font-medium text-white">{title}</h4>
            <p className="text-sm text-gray-400">Video • 45-90 min</p>
          </div>
        </div>
        
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white rounded-lg hover:from-[#7c3aed] hover:to-[#6366f1] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/30 font-medium text-sm"
        >
          {isVideoCompleted ? 'Repasar' : 'Comenzar'}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#0f172a] rounded-xl border border-white/10 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={getVideoEmbedUrl(videoUrl)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {isVideoCompleted ? (
                    <span className="flex items-center text-green-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lección completada
                    </span>
                  ) : (
                    "Marca esta lección como completada cuando termines"
                  )}
                </div>
                
                <button
                  onClick={handleMarkCompleted}
                  disabled={isMarkingComplete || isVideoCompleted}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isVideoCompleted
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed'
                      : isMarkingComplete
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
                  }`}
                >
                  {isMarkingComplete ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Marcando...
                    </span>
                  ) : isVideoCompleted ? (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Completado
                    </span>
                  ) : (
                    'Marcar como completado'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
