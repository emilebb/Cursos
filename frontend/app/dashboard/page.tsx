"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { courses } from "@/lib/courses";
import type { User } from "@supabase/supabase-js";

type CourseProgress = { slug: string; title: string; percent: number };

export default function DashboardPage() {
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function load() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data: { user: u } } = await supabase.auth.getUser();
      setUser(u ?? null);
      if (!u) {
        setLoading(false);
        return;
      }
      const { data: rows } = await supabase
        .from("progress")
        .select("course_slug")
        .eq("user_id", u.id)
        .eq("completed", true);
      const countByCourse: Record<string, number> = {};
      if (rows) {
        for (const r of rows) {
          countByCourse[r.course_slug] = (countByCourse[r.course_slug] ?? 0) + 1;
        }
      }
      const list: CourseProgress[] = Object.entries(courses).map(([slug, c]) => {
        const total = c.lessons.length;
        const completed = countByCourse[slug] ?? 0;
        const percent = total ? Math.round((completed / total) * 100) : 0;
        return { slug, title: c.title, percent };
      });
      setProgress(list);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Cargando tu progreso...</p>
      </main>
    );
  }

  if (!user && !loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-gray-900 p-10 rounded-xl w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-400 mb-6">Inicia sesión para ver tu progreso.</p>
          <Link href="/login">
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const completed = progress.filter((p) => p.percent === 100);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-2">Tus cursos</h1>
      <p className="text-gray-400 mb-6">Progreso por curso</p>

      {/* Insignias / Certificados */}
      {completed.length > 0 && (
        <section className="mb-10 max-w-2xl">
          <h2 className="text-xl font-semibold text-white mb-4">🏅 Cursos completados</h2>
          <div className="flex flex-wrap gap-3">
            {completed.map(({ slug, title }) => (
              <div
                key={slug}
                className="flex items-center gap-2 bg-[#1e293b] border border-[#6366f1]/40 rounded-lg px-4 py-2"
                title={`Completado: ${title}`}
              >
                <span className="text-lg">✓</span>
                <span className="text-[#e2e8f0] font-medium">{title}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="space-y-8 max-w-2xl">
        {progress.map(({ slug, title, percent }) => (
          <Link key={slug} href={`/courses/${slug}`}>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-600/50 transition">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-semibold">{title}</span>
                <span className="text-gray-400">{percent}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
