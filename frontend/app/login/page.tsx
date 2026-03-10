"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  async function handleLogin() {
    if (!supabase) {
      alert("Supabase no configurado.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Sesión iniciada correctamente");
      router.replace("/");
    }
  }

  async function handleRegister() {
    if (!supabase) {
      alert("Supabase no configurado.");
      return;
    }

    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH || ""}/auth/callback`
        : undefined;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Cuenta creada. Revisa tu email y haz clic en el enlace para confirmar tu cuenta.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-xl w-96">
        <h1 className="text-2xl font-bold mb-6">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h1>

        <input
          className="w-full mb-4 p-3 bg-gray-800 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 bg-gray-800 rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isRegister ? (
          <>
            <button
              onClick={handleRegister}
              className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 mb-2"
            >
              Registrarse
            </button>
            <p className="text-gray-400 text-xs text-center">
              Te enviaremos un enlace a tu email para verificar la cuenta.
            </p>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 mb-4"
          >
            Iniciar sesión
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="w-full text-gray-400 hover:text-white text-sm mt-4"
        >
          {isRegister
            ? "¿Ya tienes cuenta? Iniciar sesión"
            : "¿No tienes cuenta? Registrarse"}
        </button>
      </div>
    </main>
  );
}
