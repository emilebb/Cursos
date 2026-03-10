"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"choose" | "email" | "code" | "password">("choose");
  const [isRegister, setIsRegister] = useState(false);

  async function handleSendCode() {
    if (!supabase) {
      alert("Supabase no configurado. Añade las variables de entorno.");
      return;
    }
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback`
        : undefined;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true, emailRedirectTo: redirectTo },
    });

    if (error) {
      alert(error.message);
    } else {
      setStep("code");
      alert("Revisa tu email. Te enviamos un código de 6 dígitos.");
    }
  }

  async function handleVerifyCode() {
    if (!supabase) {
      alert("Supabase no configurado.");
      return;
    }
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code.trim(),
      type: "email",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Cuenta verificada. Sesión iniciada.");
      router.replace("/");
    }
  }

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
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      alert(signUpError.message);
      return;
    }

    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback`
        : undefined;

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: false, emailRedirectTo: redirectTo },
    });

    if (otpError) {
      alert("Cuenta creada. " + otpError.message);
      return;
    }

    setStep("code");
    setCode("");
    alert("Cuenta creada. Revisa tu email: te enviamos un código de 6 dígitos para verificar.");
  }

  if (step === "code") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-900 p-8 rounded-xl w-96">
          <h1 className="text-2xl font-bold mb-2">Código de verificación</h1>
          <p className="text-gray-400 text-sm mb-6">
            Introduce el código de 6 dígitos que te enviamos a {email}
          </p>

          <input
            className="w-full mb-6 p-3 bg-gray-800 rounded text-center text-xl tracking-[0.5em]"
            placeholder="000000"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          />

          <button
            onClick={handleVerifyCode}
            disabled={code.length !== 6}
            className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            Verificar
          </button>

          <button
            type="button"
            onClick={() => setStep("email")}
            className="w-full text-gray-400 hover:text-white text-sm"
          >
            Usar otro email
          </button>
        </div>
      </main>
    );
  }

  if (step === "email") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-900 p-8 rounded-xl w-96">
          <h1 className="text-2xl font-bold mb-6">Iniciar sesión con código</h1>
          <p className="text-gray-400 text-sm mb-4">
            Te enviaremos un código a tu email. No necesitas contraseña.
          </p>

          <input
            className="w-full mb-6 p-3 bg-gray-800 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSendCode}
            className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 mb-4"
          >
            Enviar código
          </button>

          <button
            type="button"
            onClick={() => setStep("choose")}
            className="w-full text-gray-400 hover:text-white text-sm"
          >
            Volver
          </button>
        </div>
      </main>
    );
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
            <p className="text-gray-400 text-xs mb-4 text-center">
              Tras registrarte te enviaremos un código al email para verificar.
            </p>
          </>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500 mb-4"
            >
              Iniciar sesión con contraseña
            </button>
            <button
              type="button"
              onClick={() => setStep("email")}
              className="w-full text-gray-400 hover:text-white text-sm mb-4"
            >
              Iniciar sesión con código por email
            </button>
          </>
        )}

        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="w-full text-gray-400 hover:text-white text-sm"
        >
          {isRegister
            ? "¿Ya tienes cuenta? Iniciar sesión"
            : "¿No tienes cuenta? Registrarse"}
        </button>
      </div>
    </main>
  );
}
