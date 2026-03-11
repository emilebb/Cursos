# Progreso de cursos en Supabase

Para que el botón **"Marcar como completada"** y el **Dashboard** funcionen, debes crear la tabla de progreso en Supabase.

## 1. Ejecutar el SQL

1. Entra en tu proyecto en [Supabase](https://supabase.com/dashboard).
2. Ve a **SQL Editor**.
3. Crea una nueva query y pega el contenido del archivo `frontend/supabase-schema.sql`.
4. Ejecuta la query (Run).

Eso crea la tabla `progress` y las políticas RLS para que cada usuario solo vea y guarde su propio progreso.

## 2. Estructura de la tabla

| Columna      | Tipo    | Descripción                          |
|-------------|---------|--------------------------------------|
| id          | UUID    | Clave primaria                       |
| user_id     | UUID    | Usuario (auth.users)                 |
| course_slug | TEXT    | Identificador del curso (ej: javascript) |
| lesson_slug | TEXT    | Identificador de la lección (ej: variables) |
| completed   | BOOLEAN | Siempre true al marcar completada    |
| created_at  | TIMESTAMPTZ | Fecha de registro                 |

Una fila por lección completada por usuario. El porcentaje del dashboard se calcula como: (lecciones completadas del curso / total de lecciones del curso) × 100.

---

## Cursos dinámicos (opcional)

En `supabase-schema.sql` hay un bloque comentado con las tablas `courses` e `lessons` para guardar cursos y lecciones en la base de datos. Cuando quieras migrar de los datos en código (`lib/courses.ts`) a Supabase, descomenta ese bloque, ejecútalo en el SQL Editor y luego adapta la app para leer cursos y lecciones desde Supabase en lugar de `lib/courses.ts`.
