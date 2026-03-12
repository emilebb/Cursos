"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string } | null | undefined>(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!supabase) {
      setUser(null);
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    if (supabase) await supabase.auth.signOut();
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) router.push(`/courses?q=${encodeURIComponent(search.trim())}`);
  }

  return (
    <nav className="w-full bg-[#0f172a] border-b border-white/10 flex items-center justify-between px-6 md:px-12 py-4 text-white">
      <Link href="/" className="text-xl font-bold text-white hover:text-[#a5b4fc] transition">
        SkillVerse
      </Link>

      <ul className="hidden md:flex gap-6 list-none m-0 p-0 text-sm">
        <li>
          <Link href="/" className="text-[#e2e8f0] hover:text-white no-underline transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/courses" className="text-[#e2e8f0] hover:text-white no-underline transition">
            Cursos
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-[#e2e8f0] hover:text-white no-underline transition">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-[#e2e8f0] hover:text-white no-underline transition">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-[#e2e8f0] hover:text-white no-underline transition">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="text-[#e2e8f0] hover:text-white no-underline transition">
            Contacto
          </Link>
        </li>
      </ul>

      <form onSubmit={handleSearch} className="hidden sm:block flex-1 max-w-xs mx-4">
        <input
          type="search"
          placeholder="Buscar cursos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#1e293b] px-4 py-2 rounded-lg text-sm text-white border border-white/10 focus:border-[#6366f1] focus:outline-none"
        />
      </form>

      {user === undefined ? (
        <div className="w-36 h-10 bg-[#1e293b] rounded-lg animate-pulse" />
      ) : user ? (
        <div className="flex items-center gap-3 pl-4 py-2 pr-2 rounded-full bg-[#1e293b]/80 border border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#6366f1] flex items-center justify-center text-white text-sm font-semibold shrink-0">
            {user.email?.[0]?.toUpperCase() ?? "?"}
          </div>
          <span className="text-[#e2e8f0] text-sm max-w-[140px] truncate" title={user.email}>
            {user.email}
          </span>
          <span className="text-white/30">|</span>
          <Link href="/profile" className="text-[#94a3b8] hover:text-white text-sm font-medium transition no-underline">
            Perfil
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-[#94a3b8] hover:text-red-400 text-sm font-medium transition px-2 py-1 rounded hover:bg-white/5"
          >
            Salir
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium px-4 py-2 rounded-lg transition no-underline"
        >
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
}
