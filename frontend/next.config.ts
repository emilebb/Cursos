import type { NextConfig } from "next";

// Si estamos construyendo en GitHub Actions y el proyecto está en un subdirectorio,
// Next.js necesita saber el nombre del repo para agregarlo al inicio de la URL.
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = "Cursos"; // Nombre exacto del repositorio en GitHub

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
};

export default nextConfig;
