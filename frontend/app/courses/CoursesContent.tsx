"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getCourses, CourseListItem } from "@/lib/courses";

const CATEGORIES: Record<string, string[]> = {
  Todos: [],
  Programación: ["javascript", "python_fullstack", "react", "html", "css", "typescript", "node", "python"],
  IA: ["ai"],
  Marketing: ["marketing"],
  Productividad: ["excel"],
  Idiomas: ["ingles"],
  Diseño: ["ux"],
  Creativo: ["fotografia"],
  Finanzas: ["finanzas"],
  Herramientas: ["github"],
  "Bases de Datos": ["sql"],
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
const NEW_SLUGS = ["ux", "fotografia", "finanzas", "ingles", "html", "css", "node", "typescript"];

function CourseCard({ course }: { course: CourseListItem }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex-shrink-0 w-60 bg-[#1e293b] rounded-xl overflow-hidden border border-white/10 hover:border-[#6366f1]/60 hover:shadow-lg hover:shadow-[#6366f1]/10 transition-all duration-200 hover:-translate-y-1 no-underline flex flex-col"
    >
      {/* Thumbnail */}
      {course.thumbnail ? (
        <div className="h-32 w-full overflow-hidden bg-[#0f172a]">
           <img src={`/${course.thumbnail}`} alt={course.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
        </div>
      ) : (
        <div className="h-32 w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#334155] to-[#0f172a] border-b border-white/5 relative overflow-hidden">
          {/* Decorative pattern for placeholder */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, #1e293b 0, #1e293b 2px, transparent 2px, transparent 8px)" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent"></div>
          <span className="text-4xl relative z-10 opacity-80 drop-shadow-md">
            {EMOJI_BY_SLUG[course.id] ?? "�"}
          </span>
          <span className="text-[10px] text-[#94a3b8] uppercase tracking-widest mt-2 font-semibold relative z-10 bg-[#0f172a]/50 px-2 py-0.5 rounded">
            Curso Disponible
          </span>
        </div>
      )}
      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-[#a5b4fc] transition">
          {course.title}
        </h3>
        <p className="text-[#64748b] text-xs leading-relaxed line-clamp-2 flex-1">
          {course.description}
        </p>
        <span className="mt-3 inline-block text-[#6366f1] text-xs font-medium">
          Ver curso →
        </span>
      </div>
    </Link>
  );
}

function CourseRow({ slugs, allCourses }: { slugs: string[], allCourses: CourseListItem[] }) {
  const rowCourses = slugs
    .map((slug) => allCourses.find((c) => c.id === slug))
    .filter((c): c is CourseListItem => !!c);

  if (rowCourses.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#334155] scrollbar-track-transparent">
      {rowCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(initialQ);
  const [category, setCategory] = useState("Todos");
  
  const [allCourses, setAllCourses] = useState<CourseListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getCourses().then(data => {
      if (mounted) {
        setAllCourses(data);
        setIsLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const isSearching = search.trim() !== "" || category !== "Todos";

  const filtered = useMemo(() => {
    let list = [...allCourses];
    
    // 1. Filtrar por categoría
    const slugsInCategory = category === "Todos" ? null : CATEGORIES[category];
    if (slugsInCategory) {
      list = list.filter((c) => slugsInCategory.includes(c.id));
    }
    
    // 2. Filtrar por búsqueda
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      );
    }
    
    // 3. Excluir cursos destacados de la cuadrícula general si no estamos buscando
    if (!isSearching) {
      const featuredSlugs = new Set([...POPULAR_SLUGS, ...NEW_SLUGS]);
      list = list.filter((c) => !featuredSlugs.has(c.id));
    }
    
    return list;
  }, [allCourses, search, category, isSearching]);

  if (isLoading) {
    return <div className="text-center py-20 text-[#94a3b8] animate-pulse">Cargando catálogo intergaláctico...</div>;
  }

  return (
    <>
      {/* ── Netflix rows — only show when not filtering ── */}
      {!isSearching && (
        <div className="mb-12 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔥 <span>Cursos populares</span>
            </h2>
            <CourseRow slugs={POPULAR_SLUGS} allCourses={allCourses} />
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🆕 <span>Nuevos cursos</span>
            </h2>
            <CourseRow slugs={NEW_SLUGS} allCourses={allCourses} />
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
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
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
