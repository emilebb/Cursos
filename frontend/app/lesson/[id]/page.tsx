import { lessons, courses } from "@/lib/courses";
import CompleteLessonButton from "@/components/CompleteLessonButton";
import LessonQuizSection from "@/app/lesson/[id]/LessonQuizSection";

export function generateStaticParams() {
  return Object.keys(lessons).map((id) => ({ id }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = lessons[id as keyof typeof lessons];

  if (!lesson) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold">Lección no encontrada</h1>
          <a href="/courses" className="text-[#6366f1] hover:underline mt-4 block">
            ← Volver a cursos
          </a>
        </div>
      </main>
    );
  }

  // Find which course this lesson belongs to
  const courseEntry = Object.entries(courses).find(([, c]) =>
    c.lessons.some((l) => l.id === id)
  );
  const courseSlug = courseEntry?.[0] ?? "unknown";
  const course = courseEntry?.[1];
  const lessonIndex = course?.lessons.findIndex((l) => l.id === id) ?? 0;
  const totalLessons = course?.lessons.length ?? 1;

  // Find current module index for quiz
  const moduleIndex = course?.modules.findIndex((m) =>
    m.lessonIds.includes(id)
  ) ?? 0;

  // Previous / Next lesson
  const prevLesson = course?.lessons[lessonIndex - 1] ?? null;
  const nextLesson = course?.lessons[lessonIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Top bar */}
      <div className="bg-[#1e293b] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <a href={`/courses/${courseSlug}`} className="text-[#94a3b8] hover:text-white text-sm transition">
          ← {course?.title ?? "Curso"}
        </a>
        <span className="text-[#94a3b8] text-sm">
          Lección {lessonIndex + 1} / {totalLessons}
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Video */}
        <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

        <div className="rounded-xl overflow-hidden bg-black mb-8 aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={lesson.video}
            title={lesson.title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Description */}
        <div className="bg-[#1e293b] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Sobre esta lección</h2>
          <p className="text-[#94a3b8] leading-relaxed">{lesson.content}</p>
        </div>

        {/* Progress button */}
        <div className="mb-8">
          <CompleteLessonButton courseSlug={courseSlug} lessonSlug={id} />
        </div>

        {/* Quiz for this lesson's module */}
        <LessonQuizSection
          courseId={courseSlug}
          moduleId={moduleIndex}
          courseSlug={courseSlug}
          totalLessons={totalLessons}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/10">
          {prevLesson ? (
            <a
              href={`/lesson/${prevLesson.id}`}
              className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition"
            >
              ← {prevLesson.label}
            </a>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <a
              href={`/lesson/${nextLesson.id}`}
              className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] px-5 py-2 rounded-lg transition"
            >
              {nextLesson.label} →
            </a>
          ) : (
            <a
              href={`/courses/${courseSlug}`}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-2 rounded-lg transition"
            >
              🎉 Finalizar curso
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
