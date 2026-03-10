"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Confirmando tu cuenta...");

  useEffect(() => {
    const code = searchParams.get("code");
    const hashParams =
      typeof window !== "undefined" ? window.location.hash : "";

    async function handleCallback() {
      try {
        const { supabase } = await import("@/lib/supabase");
        if (!supabase) {
          setMessage("Supabase no configurado.");
          return;
        }
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            setMessage("Error: " + error.message);
            return;
          }
          setMessage("¡Sesión iniciada! Redirigiendo...");
          router.replace("/");
          return;
        }
        if (hashParams) {
          setMessage("¡Sesión iniciada! Redirigiendo...");
          setTimeout(() => router.replace("/"), 1000);
          return;
        }
        setMessage("Enlace no válido o ya usado. Ve a Iniciar sesión.");
      } catch {
        setMessage("Algo salió mal. Intenta iniciar sesión.");
      }
    }

    handleCallback();
  }, [searchParams, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-lg">{message}</p>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-black text-white">
          <p className="text-lg">Confirmando tu cuenta...</p>
        </main>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
