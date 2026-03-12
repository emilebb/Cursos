import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | SkillVerse",
  description: "Tips de programación, IA y marketing. Artículos y recursos para seguir aprendiendo.",
};

const POSTS = [
  {
    slug: "javascript-primeros-pasos",
    title: "JavaScript: primeros pasos para principiantes",
    excerpt: "Consejos para empezar con JavaScript sin morir en el intento. Variables, consola y tu primer script.",
    date: "Mar 2026",
  },
  {
    slug: "ia-en-el-dia-a-dia",
    title: "Cómo la IA está cambiando el día a día",
    excerpt: "Usos prácticos de la inteligencia artificial en trabajo y estudio. Herramientas que puedes usar ya.",
    date: "Mar 2026",
  },
  {
    slug: "seo-basico-para-tu-web",
    title: "SEO básico para tu web o blog",
    excerpt: "Claves para que Google encuentre tu contenido. Palabras clave, títulos y meta descripciones.",
    date: "Feb 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-[#94a3b8] mb-10">
          Tips de programación, IA y marketing para seguir aprendiendo.
        </p>

        <ul className="space-y-6">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <article className="curso-card p-5">
                <p className="text-[#6366f1] text-sm font-medium mb-1">{post.date}</p>
                <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                <p className="text-[#94a3b8] text-sm mb-4">{post.excerpt}</p>
                <span className="text-[#6366f1] text-sm font-medium hover:underline">
                  Leer más →
                </span>
              </article>
            </li>
          ))}
        </ul>
        <p className="text-center text-[#94a3b8] mt-10 text-sm">
          Próximamente más artículos. Sigue atento a la plataforma.
        </p>
      </div>
    </main>
  );
}
