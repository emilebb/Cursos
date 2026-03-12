"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/courses";

const CATEGORIES: Record<string, string[]> = {
  Todos: [],
  Programación: ["javascript", "python_fullstack", "react"],
  IA: ["ai"],
  Marketing: ["marketing"],
  Productividad: ["excel"],
  Idiomas: ["ingles"],
  Diseño: ["ux"],
  Creativo: ["fotografia"],
  Finanzas: ["finanzas"],
};

const EMOJI_BY_SLUG: Record<string, string> = {
  javascript: "🟨",
  ai: "🤖",
  marketing: "📣",
  python_fullstack: "🚀",
  react: "⚛️",
  excel: "📊",
  ingles: "🇬🇧",
  ux: "🎨",
  fotografia: "📷",
  finanzas: "💰",
};

export default function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(initialQ);
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    let list = Object.entries(courses);
    const slugsInCategory = category === "Todos" ? null : CATEGORIES[category];
    if (slugsInCategory) {
      list = list.filter(([slug]) => slugsInCategory.includes(slug));
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        ([, c]) =>
          c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, category]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <input
          type="search"
          placeholder="Buscar por título o descripción..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-[#1e293b] px-4 py-3 rounded-lg border border-white/10 focus:border-[#6366f1] focus:outline-none text-white"
        />
        <div className="flex flex-wrap gap-2">
          {Object.keys(CATEGORIES).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                category === cat
                  ? "bg-[#6366f1] text-white"
                  : "bg-[#1e293b] text-[#e2e8f0] hover:bg-[#334155]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="cursos">
        {filtered.map(([slug, course]) => (
          <div key={slug} className="curso-card">
            <div className="curso-card-placeholder">
              {EMOJI_BY_SLUG[slug] ?? "📚"}
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link href={`/courses/${slug}`} className="btn-curso">
              Ver curso
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#94a3b8] py-12">
          No hay cursos que coincidan con tu búsqueda o categoría.
        </p>
      )}
    </>
  );
}
