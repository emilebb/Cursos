-- Tabla de progreso: una fila por usuario + lección completada
CREATE TABLE IF NOT EXISTS progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  completed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, course_slug, lesson_slug)
);

-- Índices para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_course ON progress(user_id, course_slug);

-- RLS: cada usuario solo ve y modifica su propio progreso
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own progress" ON progress;
CREATE POLICY "Users can read own progress" ON progress
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own progress" ON progress;
CREATE POLICY "Users can insert own progress" ON progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON progress;
CREATE POLICY "Users can update own progress" ON progress
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================================
-- OPCIONAL: Cursos y lecciones en base de datos (cursos dinámicos)
-- Descomenta y ejecuta cuando quieras migrar de lib/courses.ts
-- ============================================================
/*
CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT
);

CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  video_url TEXT,
  content TEXT,
  UNIQUE(course_id, slug)
);

CREATE INDEX IF NOT EXISTS idx_lessons_course ON lessons(course_id);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lessons are public" ON lessons FOR SELECT USING (true);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Courses are public" ON courses FOR SELECT USING (true);
*/
