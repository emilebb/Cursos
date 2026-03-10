import Link from "next/link";

export default function Courses() {
  return (
    <main className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Cursos disponibles 📚
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card">
          <h2 className="text-xl font-bold mb-2">JavaScript</h2>
          <p className="text-gray-400 mb-4">
            Aprende JavaScript desde cero.
          </p>
          <Link href="/courses/javascript">
            <button className="button-primary">Ver curso</button>
          </Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-2">IA</h2>
          <p className="text-gray-400 mb-4">
            Introducción a la inteligencia artificial.
          </p>
          <Link href="/courses/ai">
            <button className="button-primary">Ver curso</button>
          </Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-2">Marketing</h2>
          <p className="text-gray-400 mb-4">
            Estrategias modernas de marketing digital.
          </p>
          <Link href="/courses/marketing">
            <button className="button-primary">Ver curso</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
