/**
 * AI Course Generator
 * ──────────────────
 * Sends a topic to /api/ai-course (server route) and returns a generated
 * course structure. Wire up that route with your LLM provider
 * (OpenAI, Gemini, etc.) to make it work.
 */

export type AILesson = {
  id: string;
  label: string;
};

export type AIModule = {
  title: string;
  lessons: AILesson[];
};

export type AICourse = {
  title: string;
  description: string;
  modules: AIModule[];
};

export async function generateCourse(topic: string): Promise<AICourse | null> {
  try {
    const res = await fetch("/api/ai-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `
          Crea un curso de programación sobre "${topic}" en español.
          Devuelve SOLO JSON con este formato exacto:
          {
            "title": "...",
            "description": "...",
            "modules": [
              {
                "title": "...",
                "lessons": [{ "id": "slug_unico", "label": "Título de lección" }]
              }
            ]
          }
        `,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: AICourse = await res.json();
    return data;
  } catch (err) {
    console.error("generateCourse error:", err);
    return null;
  }
}
