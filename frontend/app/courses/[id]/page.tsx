import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";

export function generateStaticParams() {
  return Object.keys(courses).map((id) => ({ id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = courses[id as keyof typeof courses];

  if (!course) return notFound();

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-400">{course.description}</p>
    </>
  );
}
