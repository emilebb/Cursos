import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          SkillVerse 🚀
        </Link>

        {/* Menu */}
        <div className="flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Cursos
          </Link>
        </div>

        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="bg-gray-900 px-4 py-2 rounded-lg text-sm outline-none border border-gray-700 focus:border-blue-500"
        />

        {/* Botón */}
        <Link href="/login">
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </nav>
  );
}
