# Arreglar "No se pudo acceder a este sitio" (enlace mágico)

Cuando haces clic en el enlace del correo y sale **"No se pudo acceder a este sitio"**, es porque Supabase no tiene permitida la URL de tu app. Hay que configurarla:

## Pasos en Supabase

1. Entra en **https://supabase.com** e inicia sesión.
2. Abre tu **proyecto**.
3. En el menú izquierdo: **Authentication** (Autenticación).
4. Ve a **URL Configuration** (Configuración de URL).
5. Rellena así:
   - **Site URL:** `http://localhost:3000`  
     (Si ya tienes la app en internet, pon esa URL, por ejemplo `https://tudominio.com`.)
   - **Redirect URLs:** haz clic en "Add URL" y añade **una por una**:
     - `http://localhost:3000/auth/callback`
     - `http://localhost:3000/**`
6. Pulsa **Save** (Guardar).

## Comprobar que la app está abierta

- Tu app debe estar corriendo en el ordenador (en la terminal: `npm run dev`).
- Abre el navegador en **http://localhost:3000**.
- El enlace del correo debe abrir **http://localhost:3000/auth/callback?...** y desde ahí te redirigirá a la página principal ya con la sesión iniciada.

## Si sigues sin poder acceder

- Asegúrate de hacer clic en el enlace **en el mismo ordenador** donde tienes abierto `http://localhost:3000`. Si abres el enlace en el móvil u otro PC, "localhost" no existirá ahí.
- Si usas otra URL (por ejemplo en producción), añádela también en **Redirect URLs** en Supabase.
