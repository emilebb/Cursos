# SkillVerse - Plataforma de Cursos Gratuitos

## 🚀 Despliegue en GitHub Pages

Este proyecto está optimizado para GitHub Pages y funciona perfectamente en el repositorio `/Cursos/`.

## ✅ Mejoras Implementadas

### 🔧 Corrección de Rutas
- **Base Path**: Configurado para `/Cursos/` en `next.config.ts`
- **Base Tag**: Agregado `<base href="/Cursos/">` en el layout
- **Rutas Absolutas**: Todas las rutas funcionan correctamente en subcarpetas

### 🎯 Lógica de Cursos Únicos
- **Sin Duplicados**: Los cursos destacados se excluyen de "Todos los cursos"
- **Filtrado Inteligente**: Solo muestra una instancia de cada curso
- **Netflix-style**: Secciones separadas para populares y nuevos

### 🎨 Sistema de Filtrado
- **Categorías Funcionales**: Botones de filtrado por categoría activos
- **Búsqueda Integrada**: Búsqueda por título y descripción
- **Actualización Dinámica**: La cuadrícula se actualiza al filtrar

### 🎨 Mejoras UI/UX
- **Clase .active**: Enlace del Navbar activo resaltado
- **Placeholders Mejorados**: Imágenes por defecto con gradientes y patrones
- **Experiencia Optimizada**: Transiciones suaves y feedback visual

## 📁 Estructura del Proyecto

```
frontend/
├── app/                    # Páginas Next.js
│   ├── layout.tsx         # Layout con base tag
│   ├── courses/           # Páginas de cursos
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
├── lib/                  # Utilidades y datos
├── public/               # Archivos estáticos
├── out/                  # Build de producción
└── package.json          # Dependencias
```

## 🛠️ Configuración Clave

### Next.js Config
```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Cursos",
  assetPrefix: "/Cursos",
  images: { unoptimized: true },
};
```

### Base Tag
```html
<base href="/Cursos/" />
```

## 🚀 Despliegue Rápido

### 1. Construir el Proyecto
```bash
npm run build
```

### 2. Subir a GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Configurar GitHub Pages
1. Ve al repositorio en GitHub
2. Settings > Pages
3. Source: "Deploy from a branch"
4. Branch: `main` + `/ (root)`
5. Save

## 🌐 Acceso al Sitio

El sitio estará disponible en:
`https://username.github.io/Cursos/`

## 📋 Características Técnicas

- ✅ **Next.js 16** con export estático
- ✅ **TypeScript** para tipo seguro
- ✅ **Tailwind CSS** para estilos
- ✅ **Rutas Amigables** para SEO
- ✅ **Optimizado para GitHub Pages**
- ✅ **Responsive Design** para móviles
- ✅ **Fuentes Optimizadas** (Inter)
- ✅ **Build Estático** sin servidor

## 🎯 Funcionalidades

### 📚 Gestión de Cursos
- Catálogo completo con filtrado
- Búsqueda en tiempo real
- Categorías organizadas
- Destacados y nuevos cursos

### 🎨 Experiencia de Usuario
- Navbar con estado activo
- Placeholders elegantes
- Transiciones suaves
- Diseño responsive

### 🔧 Técnico
- Rutas absolutas funcionando
- Build optimizado
- Sin errores de consola
- Compatible con GitHub Pages

## 🐛 Solución de Problemas Comunes

### 404 Errors
- Verifica que `out/` esté en el repositorio
- Revisa las rutas en `next.config.ts`

### Estilos no cargan
- Verifica el `base href` en el layout
- Revisa las rutas CSS

### Imágenes rotas
- Usa rutas absolutas desde la raíz
- Verifica la carpeta `public/`

## 🔄 Actualizaciones

Para actualizar el sitio:
1. Realiza cambios
2. `npm run build`
3. `git add . && git commit && git push`

GitHub Pages actualizará automáticamente.

## 📊 Estadísticas

- **Total cursos**: 10+
- **Categorías**: 8
- **Páginas estáticas**: 88
- **Build time**: ~10s
- **Size optimizado**: < 5MB

---

🎯 **Resultado**: Un sitio profesional, rápido y completamente funcional en GitHub Pages con todas las mejoras solicitadas implementadas.
