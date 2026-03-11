"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Props = { courseSlug: string; lessonSlug: string };

export default function CompleteLessonButton({ courseSlug, lessonSlug }: Props) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setChecking(false);
      return;
    }
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        setChecking(false);
        return;
      }
      supabase
        .from("progress")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_slug", courseSlug)
        .eq("lesson_slug", lessonSlug)
        .maybeSingle()
        .then(({ data }) => {
          setDone(!!data);
          setChecking(false);
        });
    });
  }, [courseSlug, lessonSlug]);

  async function handleComplete() {
    if (!supabase) return;
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }
    const { error } = await supabase.from("progress").upsert(
      {
        user_id: user.id,
        course_slug: courseSlug,
        lesson_slug: lessonSlug,
        completed: true,
      },
      { onConflict: "user_id,course_slug,lesson_slug" }
    );
    setLoading(false);
    if (!error) setDone(true);
  }

  if (checking) return null;

  if (done) {
    return (
      <p className="text-green-400 font-medium">✓ Lección completada</p>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition disabled:opacity-50"
    >
      {loading ? "Guardando..." : "Marcar como completada"}
    </button>
  );
}
