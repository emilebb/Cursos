import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto">
        <p className="font-semibold text-white">© 2026 SkillVerse</p>
        <p className="text-[#94a3b8]">Aprende programación, marketing, IA y más — gratis</p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/sobre" className="text-[#94a3b8] hover:text-white transition">
            Quiénes somos
          </Link>
          <Link href="/courses" className="text-[#94a3b8] hover:text-white transition">
            Cursos
          </Link>
          <Link href="/blog" className="text-[#94a3b8] hover:text-white transition">
            Blog
          </Link>
          <Link href="/recursos" className="text-[#94a3b8] hover:text-white transition">
            Recursos
          </Link>
          <Link href="/comunidad" className="text-[#94a3b8] hover:text-white transition">
            Comunidad
          </Link>
          <Link href="/faq" className="text-[#94a3b8] hover:text-white transition">
            FAQ
          </Link>
          <Link href="/contacto" className="text-[#94a3b8] hover:text-white transition">
            Contacto
          </Link>
          <Link href="/privacidad" className="text-[#94a3b8] hover:text-white transition">
            Privacidad
          </Link>
          <Link href="/terminos" className="text-[#94a3b8] hover:text-white transition">
            Términos
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
