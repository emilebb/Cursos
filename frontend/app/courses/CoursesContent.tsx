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

const POPULAR_SLUGS = ["javascript", "python_fullstack", "react", "ai"];
const NEW_SLUGS = ["ux", "fotografia", "finanzas", "ingles"];

type CourseEntry = [string, (typeof courses)[keyof typeof courses]];

function CourseCard({ slug, course }: { slug: string; course: CourseEntry[1] }) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="group flex-shrink-0 w-60 bg-[#1e293b] rounded-xl overflow-hidden border border-white/10 hover:border-[#6366f1]/60 hover:shadow-lg hover:shadow-[#6366f1]/10 transition-all duration-200 hover:-translate-y-1 no-underline"
    >
      {/* Thumbnail */}
      <div className="h-32 flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-5xl">
        {EMOJI_BY_SLUG[slug] ?? "📚"}
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-[#a5b4fc] transition">
          {course.title}
        </h3>
        <p className="text-[#64748b] text-xs leading-relaxed line-clamp-2">
          {course.description}
        </p>
        <span className="mt-3 inline-block text-[#6366f1] text-xs font-medium">
          Ver curso →
        </span>
      </div>
    </Link>
  );
}

function CourseRow({ slugs }: { slugs: string[] }) {
  const entries = slugs
    .map((s) => [s, courses[s as keyof typeof courses]] as CourseEntry)
    .filter(([, c]) => !!c);

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#334155] scrollbar-track-transparent">
      {entries.map(([slug, course]) => (
        <CourseCard key={slug} slug={slug} course={course} />
      ))}
    </div>
  );
}

export default function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(initialQ);
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    let list = Object.entries(courses) as CourseEntry[];
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

  const isSearching = search.trim() !== "" || category !== "Todos";

  return (
    <>
      {/* ── Netflix rows — only show when not filtering ── */}
      {!isSearching && (
        <div className="mb-12 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔥 <span>Cursos populares</span>
            </h2>
            <CourseRow slugs={POPULAR_SLUGS} />
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🆕 <span>Nuevos cursos</span>
            </h2>
            <CourseRow slugs={NEW_SLUGS} />
          </section>

          <div className="border-t border-white/10 pt-10">
            <h2 className="text-xl font-bold text-white mb-6">📚 Todos los cursos</h2>
          </div>
        </div>
      )}

      {/* ── Search + filter bar ── */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

      {/* ── Full grid ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="cursos">
        {filtered.map(([slug, course]) => (
          <div key={slug} className="curso-card">
            <div className="curso-card-placeholder">{EMOJI_BY_SLUG[slug] ?? "📚"}</div>
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
