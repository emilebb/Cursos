"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    async function getUser() {
      if (!supabase) {
        setUser(null);
        return;
      }
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  if (user === undefined) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-black">
        Cargando perfil...
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-black">
        <div className="bg-gray-900 p-10 rounded-xl w-96 text-center">
          <p className="text-gray-400 mb-6">Inicia sesión para ver tu perfil.</p>
          <Link href="/login">
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-gray-900 p-10 rounded-xl w-96 text-center">
        {/* Avatar */}
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
          {user.email?.[0]?.toUpperCase() ?? "👤"}
        </div>

        <h1 className="text-2xl font-bold mb-2">Perfil</h1>

        <p className="text-gray-400 mb-6 break-all">📧 {user.email}</p>

        <p className="text-gray-500 text-sm">📚 Cursos en progreso — próximamente</p>
      </div>
    </main>
  );
}
