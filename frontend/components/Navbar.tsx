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
        </div>

        <input
          type="text"
          placeholder="Buscar cursos..."
          className="bg-gray-900 px-4 py-2 rounded-lg text-sm outline-none border border-gray-700 focus:border-blue-500"
        />

        {user === undefined ? (
          <div className="w-32 h-9 bg-gray-800 rounded-lg animate-pulse" />
        ) : user ? (
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Perfil
              </button>
            </Link>
            <span className="text-gray-400 text-sm truncate max-w-[120px]">
              {user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <button className="text-gray-300 hover:text-white px-3 py-2 transition">
                Perfil
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Iniciar sesión
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
