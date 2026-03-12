import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

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
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
