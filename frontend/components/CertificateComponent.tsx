"use client";

import { useState, useEffect } from "react";
import { courses } from "@/lib/courses";

interface CertificateData {
  courseId: string;
  studentName: string;
  completionDate: string;
  totalScore: number;
  modulesCompleted: number;
}

interface CertificateComponentProps {
  courseId: string;
  onGenerate?: (certificate: CertificateData) => void;
}

export default function CertificateComponent({ courseId, onGenerate }: CertificateComponentProps) {
  const course = courses[courseId as keyof typeof courses];
  const [studentName, setStudentName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Simular carga de progreso del estudiante
  const [progress, setProgress] = useState({
    totalScore: 85,
    modulesCompleted: 6,
    totalModules: course?.modules.length || 6
  });

  useEffect(() => {
    // Aquí podrías cargar el progreso real desde una API o localStorage
    const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
    if (savedProgress) {
      const data = JSON.parse(savedProgress);
      setProgress(data);
    }
  }, [courseId]);

  const handleGenerateCertificate = () => {
    if (!studentName.trim()) {
      alert("Por favor ingresa tu nombre completo");
      return;
    }

    setIsGenerating(true);

    // Simular generación del certificado
    setTimeout(() => {
      const certificate: CertificateData = {
        courseId,
        studentName,
        completionDate: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        totalScore: progress.totalScore,
        modulesCompleted: progress.modulesCompleted
      };

      setCertificateData(certificate);
      setShowCertificate(true);
      setIsGenerating(false);

      // Guardar certificado
      localStorage.setItem(`certificate-${courseId}`, JSON.stringify(certificate));
      
      if (onGenerate) {
        onGenerate(certificate);
      }
    }, 2000);
  };

  const handleDownloadCertificate = () => {
    if (!certificateData) return;

    // Crear una versión imprimible del certificado
    const printContent = document.getElementById('certificate-content');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Certificado de Finalización</title>
              <style>
                body { 
                  font-family: 'Georgia', serif; 
                  margin: 0; 
                  padding: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  background: #f5f5f5;
                }
                .certificate {
                  width: 800px;
                  height: 600px;
                  background: white;
                  border: 10px solid #gold;
                  border-image: linear-gradient(45deg, #FFD700, #FFA500) 1;
                  padding: 40px;
                  text-align: center;
                  position: relative;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }
                .certificate::before {
                  content: '';
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  right: 10px;
                  bottom: 10px;
                  border: 2px solid #FFD700;
                }
                .header {
                  margin-bottom: 30px;
                }
                .title {
                  font-size: 36px;
                  font-weight: bold;
                  color: #2c3e50;
                  margin-bottom: 10px;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                }
                .subtitle {
                  font-size: 18px;
                  color: #7f8c8d;
                  margin-bottom: 20px;
                }
                .recipient {
                  font-size: 28px;
                  font-weight: bold;
                  color: #2c3e50;
                  margin: 30px 0;
                  padding: 10px;
                  border-bottom: 2px solid #FFD700;
                  display: inline-block;
                }
                .course-name {
                  font-size: 24px;
                  color: #34495e;
                  margin: 20px 0;
                  font-weight: 600;
                }
                .description {
                  font-size: 16px;
                  color: #5d6d7e;
                  line-height: 1.6;
                  margin: 20px 0;
                  max-width: 600px;
                  margin-left: auto;
                  margin-right: auto;
                }
                .date {
                  font-size: 16px;
                  color: #7f8c8d;
                  margin-top: 30px;
                }
                .signature {
                  margin-top: 40px;
                  display: flex;
                  justify-content: space-around;
                }
                .signature-line {
                  width: 200px;
                  border-top: 1px solid #34495e;
                  text-align: center;
                  padding-top: 10px;
                  font-size: 14px;
                  color: #7f8c8d;
                }
                .seal {
                  position: absolute;
                  bottom: 20px;
                  right: 20px;
                  width: 80px;
                  height: 80px;
                  border: 3px solid #FFD700;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 12px;
                  color: #FFD700;
                  font-weight: bold;
                  transform: rotate(-15deg);
                }
                @media print {
                  body { background: white; }
                  .certificate { box-shadow: none; }
                }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const canGenerateCertificate = progress.modulesCompleted === progress.totalModules && progress.totalScore >= 70;

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  if (showCertificate && certificateData) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-bold">¡Felicidades! Has completado el curso</h2>
          </div>
          
          <div id="certificate-content" className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="text-center border-8 border-double border-yellow-600 p-12 bg-white relative">
              <div className="absolute top-4 left-4 text-yellow-600 text-6xl">🏆</div>
              <div className="absolute top-4 right-4 text-yellow-600 text-6xl">🏆</div>
              
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">CERTIFICADO DE FINALIZACIÓN</h1>
                <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
              </div>

              <div className="mb-6">
                <p className="text-lg text-gray-600 mb-2">Se certifica que</p>
                <h2 className="text-3xl font-bold text-blue-600 mb-4 px-8 py-2 border-b-4 border-blue-300 inline-block">
                  {certificateData.studentName}
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">Ha completado exitosamente el curso</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">{course.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{progress.modulesCompleted}</div>
                  <div className="text-sm text-gray-600">Módulos completados</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{certificateData.totalScore}%</div>
                  <div className="text-sm text-gray-600">Puntuación final</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{course.lessons.length}</div>
                  <div className="text-sm text-gray-600">Lecciones totales</div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-600">Fecha de finalización: <span className="font-semibold">{certificateData.completionDate}</span></p>
              </div>

              <div className="flex justify-around items-end">
                <div className="text-center">
                  <div className="border-t-2 border-gray-400 pt-2">
                    <p className="text-sm text-gray-600">Firma del Instructor</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-4 border-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-xs">SKILLVERSE</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-gray-400 pt-2">
                    <p className="text-sm text-gray-600">Sello Oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 flex justify-center space-x-4">
            <button
              onClick={handleDownloadCertificate}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Certificado
            </button>
            <button
              onClick={() => setShowCertificate(false)}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sistema de Certificados</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tu Progreso</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Módulos Completados</span>
              <span className="font-semibold text-gray-800">
                {progress.modulesCompleted} / {progress.totalModules}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Puntuación General</span>
              <span className="font-semibold text-gray-800">{progress.totalScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(progress.modulesCompleted / progress.totalModules) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {canGenerateCertificate ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">¡Felicidades!</h3>
              <p className="text-green-700 mb-6">
                Has completado todos los requisitos para obtener tu certificado.
              </p>
              
              <div className="mb-6">
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Nombre completo como aparecerá en el certificado:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleGenerateCertificate}
                disabled={isGenerating || !studentName.trim()}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generando Certificado...
                  </span>
                ) : (
                  "Generar Certificado"
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Continúa aprendiendo</h3>
              <p className="text-yellow-700">
                Necesitas completar todos los módulos y obtener una puntuación mínima de 70% para generar tu certificado.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
