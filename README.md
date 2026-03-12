# SkillVerse

SkillVerse es una plataforma de aprendizaje donde los usuarios pueden interactuar con cursos y lecciones. Cuenta con autenticación de usuarios y seguimiento de progreso utilizando Supabase, e interfaz de usuario moderna construida con Next.js.

## Características Principales

- **Dashboard de Usuario**: Visualización de los cursos y el progreso.
- **Autenticación Segura**: Login con Magic Link vía Supabase.
- **Progreso de Lecciones**: Guardado automático de lecciones completadas.

## Requisitos Previos

- Node.js (v18 o superior recomendado)
- Cuenta en [Supabase](https://supabase.com/)

## Instalación y Configuración Local

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd skillverse
   ```

2. **Configurar el Frontend**
   Ir a la carpeta `frontend` y configurar las variables de entorno.
   ```bash
   cd frontend
   cp .env.example .env.local
   ```
   Rellena las variables `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` con los datos de tu proyecto de Supabase.

3. **Configurar la Base de Datos (Supabase)**
   - Ejecuta el contenido de `frontend/supabase-schema.sql` en el SQL Editor de tu proyecto en Supabase para crear las tablas necesarias (por ejemplo, la tabla `progress`).

4. **Instalar dependencias y ejecutar**
   ```bash
   npm install
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

## Despliegue

Este proyecto está configurado para poder ser desplegado fácilmente en plataformas como Vercel o GitHub Pages mediante GitHub Actions, una vez configurados los secretos correctamente.
