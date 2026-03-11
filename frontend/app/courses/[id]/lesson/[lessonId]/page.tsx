import { notFound } from "next/navigation";
import { courses, lessons } from "@/lib/courses";
import CompleteLessonButton from "@/components/CompleteLessonButton";

export function generateStaticParams() {
  const params: { id: string; lessonId: string }[] = [];
  for (const id of Object.keys(courses)) {
    const course = courses[id as keyof typeof courses];
    for (const lesson of course.lessons) {
      params.push({ id, lessonId: lesson.id });
    }
  }
  return params;
}

export default async function CourseLessonPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  const { id, lessonId } = await params;

  const course = courses[id as keyof typeof courses];
  const lesson = lessons[lessonId];

  if (!course || !lesson) return notFound();

  const belongsToCourse = course.lessons.some((l) => l.id === lessonId);
  if (!belongsToCourse) return notFound();

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{lesson.title}</h1>

      <iframe
        width="100%"
        height="500"
        src={lesson.video}
        title="video lesson"
        allowFullScreen
        className="rounded-lg mb-8"
      />

      <p className="text-gray-300 text-lg mb-8">{lesson.content}</p>

      <CompleteLessonButton courseSlug={id} lessonSlug={lessonId} />
    </>
  );
}
