# Desplegar SkillVerse en GitHub Pages

## 1. Subir el proyecto a GitHub

En la carpeta del proyecto (skillverse), ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/emilebb/Cursos.git
git push -u origin main
```

## 2. Configurar GitHub Pages

1. En el repo de GitHub: **Settings** → **Pages**.
2. En **Build and deployment**, **Source** elige **GitHub Actions**.

## 3. Añadir secretos (Supabase)

Para que login y registro funcionen en producción:

1. En el repo: **Settings** → **Secrets and variables** → **Actions**.
2. Crea estos secretos:
   - `NEXT_PUBLIC_SUPABASE_URL` → tu Project URL de Supabase.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → tu anon public key de Supabase.

## 4. Despliegue

- Cada **push a la rama `main`** ejecutará el workflow y desplegará en GitHub Pages.
- La URL será: **`https://emilebb.github.io/Cursos/`**

## 5. Supabase en producción

En el dashboard de Supabase (**Authentication** → **URL Configuration**):

- **Site URL:** `https://emilebb.github.io`
- **Redirect URLs:** añade:
  - `https://emilebb.github.io/Cursos/auth/callback`
  - `https://emilebb.github.io/Cursos/**`

Así el enlace mágico y el login funcionarán en la versión publicada.
