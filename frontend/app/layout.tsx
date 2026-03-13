import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SkillVerse — Aprende tecnología gratis",
    template: "%s | SkillVerse",
  },
  description:
    "Cursos completos de programación, marketing digital e inteligencia artificial. Aprende con video, seguimiento de progreso y certificados. Gratis.",
  keywords: [
    "cursos programación",
    "aprender JavaScript",
    "cursos Python",
    "marketing digital",
    "inteligencia artificial",
    "cursos online gratis",
    "SkillVerse",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <base href="/Cursos/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
