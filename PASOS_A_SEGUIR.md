# Lo que tienes que hacer – SkillVerse

Lista clara de pasos para tener la plataforma funcionando (y opcionalmente la automatización con IA).

---

## 1. Supabase – Tabla de progreso

Para que funcione **“Marcar como completada”** y el **Dashboard**:

1. Entra en [Supabase](https://supabase.com/dashboard) y abre tu proyecto.
2. Ve a **SQL Editor** → **New query**.
3. Pega y ejecuta el SQL que está en **`frontend/supabase-schema.sql`** (solo la parte de la tabla `progress`, sin el bloque comentado de cursos/lecciones).
4. Pulsa **Run**.

Con eso ya se guarda el progreso de lecciones por usuario.

---

## 2. Variables de entorno (local)

En la carpeta **`frontend`** crea o edita **`.env.local`** con:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

(Sustituye por la URL y la anon key de tu proyecto en Supabase → Settings → API.)

---

## 3. Supabase – Auth (login y magic link)

Para que el **login** y el **enlace mágico** funcionen en producción:

1. En Supabase: **Authentication** → **URL Configuration**.
2. **Site URL**: la URL de tu sitio (ej: `https://emilebb.github.io/Cursos/` si usas GitHub Pages).
3. **Redirect URLs**: añade la misma base + callback, ej:  
   `https://emilebb.github.io/Cursos/auth/callback`

Guarda los cambios.

---

## 4. GitHub Pages (si despliegas ahí)

1. Sube el repo a GitHub (ya lo tienes en `emilebb/Cursos`).
2. **Settings** del repo → **Pages** → **Source**: elige **GitHub Actions**.
3. En **Secrets and variables** → **Actions** añade:
   - `NEXT_PUBLIC_SUPABASE_URL` = URL de tu proyecto Supabase  
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon key de Supabase  
4. Cada vez que hagas push a `main`, se desplegará solo.

---

## 5. Resumen rápido

| Qué quieres | Dónde | Qué hacer |
|-------------|--------|------------|
| Progreso de lecciones y dashboard | Supabase | Ejecutar SQL de `progress` (paso 1). |
| Login en local | Frontend | Tener `.env.local` con Supabase (paso 2). |
| Login en la web publicada | Supabase | Configurar Site URL y Redirect URLs (paso 3). |
| Que se actualice la web al hacer push | GitHub | Pages con GitHub Actions y secrets (paso 4). |

---

## 6. Automatización con Make (opcional)

Si más adelante quieres que **Make (Integromat)** + IA creen cursos y lecciones solos:

1. En Supabase, ejecutar también el SQL de las tablas **`courses`** y **`lessons`** (está comentado en `frontend/supabase-schema.sql`; tendrías que descomentarlo y ejecutarlo).
2. Cambiar la app para que lea cursos y lecciones desde Supabase en vez de `lib/courses.ts`.
3. En Make, montar un escenario que:
   - Use OpenAI (u otra IA) para generar título del curso, descripción y títulos de lecciones.
   - Busque videos (p. ej. YouTube API o IA).
   - Inserte en Supabase (con la **service_role key** en un secreto de Make) las filas en `courses` y `lessons`.

Cuando quieras hacer este paso, se puede detallar el escenario de Make y el formato exacto de las tablas.

---

**Orden recomendado:** haz primero los pasos 1, 2 y 3. Luego 4 si usas GitHub Pages. El paso 6 es para cuando quieras automatizar la creación de cursos con IA.
