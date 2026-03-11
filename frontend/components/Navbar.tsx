"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [user, setUser] = useState<{ email?: string } | null | undefined>(undefined);

  useEffect(() => {
    if (!supabase) {
      setUser(null);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    if (supabase) await supabase.auth.signOut();
  }

  return (
    <nav className="w-full bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          SkillVerse 🚀
        </Link>

        <div className="flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Cursos
          </Link>
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
        </div>

        <input
          type="text"
          placeholder="Buscar cursos..."
          className="bg-gray-900 px-4 py-2 rounded-lg text-sm outline-none border border-gray-700 focus:border-blue-500"
        />

        {user === undefined ? (
          <div className="w-36 h-10 bg-gray-800/50 rounded-full animate-pulse" />
        ) : user ? (
          <div className="flex items-center gap-3 pl-4 py-2 pr-2 rounded-full bg-gray-800/40 border border-gray-700/50">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
              {user.email?.[0]?.toUpperCase() ?? "?"}
            </div>
            <span className="text-gray-300 text-sm max-w-[140px] truncate" title={user.email}>
              {user.email}
            </span>
            <span className="text-gray-600">|</span>
            <Link
              href="/profile"
              className="text-gray-400 hover:text-white text-sm font-medium transition"
            >
              Perfil
            </Link>
            <button
              onClick={handleSignOut}
              className="text-gray-400 hover:text-red-400 text-sm font-medium transition px-2 py-1 rounded hover:bg-gray-700/50"
            >
              Salir
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Perfil
            </Link>
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
