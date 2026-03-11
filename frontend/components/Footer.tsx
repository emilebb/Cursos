import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto">
        <p className="font-semibold text-white">© 2026 SkillVerse</p>
        <p>Aprende programación, marketing, IA y más — gratis</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <Link href="/courses" className="text-[#94a3b8] hover:text-white transition">
            Cursos
          </Link>
          <Link href="/dashboard" className="text-[#94a3b8] hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/profile" className="text-[#94a3b8] hover:text-white transition">
            Perfil
          </Link>
        </div>
      </div>
    </footer>
  );
}
