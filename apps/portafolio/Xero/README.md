# ⚡ Xero - Plantilla Inmobiliaria Minimalista

> Plantilla ultra-ligera y rápida para negocios inmobiliarios modernos, construida con Nuxt.js 3 y Vue 3.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org)
[![Performance](https://img.shields.io/badge/Performance-⚡_Fast-brightgreen)]()

## 📋 Descripción

**Xero** es una plantilla minimalista diseñada para startups inmobiliarias y agencias que buscan una solución rápida, ligera y eficiente. Con enfoque en performance y UX, ofrece todas las funcionalidades esenciales sin sacrificar velocidad.

## ✨ Características Principales

- ⚡ **Ultra Rápido** - Carga en menos de 2 segundos
- 🎯 **Diseño Minimalista** - Clean y profesional
- 📱 **Mobile-First** - Diseñado primero para móviles
- 🚀 **Optimización Extrema** - Code splitting y lazy loading
- 🔍 **SEO Perfecto** - Puntuación alta en Lighthouse
- 📦 **Bundle Pequeño** - Assets optimizados
- 🎨 **Personalizable** - Fácil modificación de estilos
- ♿ **Accesible** - Buenas prácticas de accesibilidad
- 🔐 **Seguro** - Headers de seguridad configurados
- 💨 **PWA Ready** - Instalable como app nativa

## 📋 Requisitos Previos

- Node.js 18+ 
- npm 9+ / pnpm / yarn / bun

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo (puerto 3000)
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview

# Generar sitio estático
npm run generate
```

Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
xero/
├── app/
│   ├── layouts/
│   │   └── default.vue          # Layout minimalista
│   ├── pages/                   # Páginas del sitio
│   │   ├── index.vue            # Página de inicio
│   │   ├── properties/          # Propiedades
│   │   │   ├── index.vue        # Listado
│   │   │   └── [id].vue         # Detalle
│   │   ├── about.vue            # Acerca de
│   │   ├── contact.vue          # Contacto
│   │   └── services.vue         # Servicios
│   └── components/              # Componentes Vue
├── public/                      # Archivos estáticos
│   ├── css/                     # Estilos mínimos
│   ├── js/                      # Scripts esenciales
│   └── img/                     # Imágenes optimizadas
├── nuxt.config.ts               # Configuración Nuxt
├── package.json                 # Dependencias
├── STRUCTURE.md                 # Documentación de estructura
└── README.md                    # Este archivo
```

## 🎨 Páginas Disponibles

### Core
- **/** - Landing page minimalista con buscador
- **/properties** - Listado de propiedades con filtros
- **/properties/[id]** - Detalle de propiedad
- **/about** - Información de la empresa
- **/contact** - Formulario de contacto
- **/services** - Servicios ofrecidos

### Adicionales (opcionales)
- **/blog** - Blog inmobiliario
- **/agents** - Equipo de agentes
- **/faq** - Preguntas frecuentes

## 🚀 Tecnologías Utilizadas

### Core
- **Nuxt.js 3** - Framework Vue.js moderno
- **Vue.js 3** - Composition API
- **JavaScript/TypeScript** - Lenguaje de programación

### Estilos
- **CSS Puro** - Sin frameworks pesados
- **CSS Variables** - Fácil personalización
- **Mobile-First** - Responsive design

### Optimizaciones
- **Vite** - Build tool ultrarrápido
- **Image Optimization** - Compresión automática
- **Code Splitting** - Carga bajo demanda
- **Tree Shaking** - Elimina código no usado
- **Lazy Loading** - Carga diferida de recursos

### SEO
- **Meta Tags** - Dinámicos por página
- **Structured Data** - JSON-LD para propiedades
- **Sitemap XML** - Generación automática
- **Robots.txt** - Configurado

## 🎨 Personalización

### Colores y Tema

Edita las variables CSS en tu archivo de estilos principal:

```css
:root {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
  --text-color: #333333;
  --bg-color: #ffffff;
  --gray-light: #f8f9fa;
}
```

### Tipografía

Cambia las fuentes en `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
        }
      ]
    }
  }
})
```

### Contenido

Reemplaza los datos de ejemplo con llamadas a tu API:

```vue
<script setup>
// Usar datos de API
const { data: properties } = await useFetch('/api/properties')
</script>
```

## 🔌 Integración con Backend

### API REST

```typescript
// composables/useProperties.ts
export const useProperties = () => {
  const config = useRuntimeConfig()
  
  const getAll = () => $fetch(`${config.public.apiBase}/properties`)
  const getById = (id: string) => $fetch(`${config.public.apiBase}/properties/${id}`)
  const search = (filters: object) => $fetch(`${config.public.apiBase}/properties/search`, {
    method: 'POST',
    body: filters
  })
  
  return { getAll, getById, search }
}
```

### Variables de Entorno

Crea `.env`:

```bash
NUXT_PUBLIC_API_BASE=https://api.tusitio.com
NUXT_PUBLIC_SITE_NAME=Xero Inmobiliaria
NUXT_PUBLIC_CONTACT_EMAIL=info@xero.com
NUXT_PUBLIC_PHONE=+1234567890
```

## 📦 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

Build settings:
- Build command: `npm run build`
- Publish directory: `.output/public`

### Cloudflare Pages

```bash
# Build command
npm run build

# Build output directory
.output/public
```

### Static Hosting (SSG)

```bash
# Generar sitio estático
npm run generate

# Deploy la carpeta .output/public a:
# - GitHub Pages
# - AWS S3
# - Firebase Hosting
# - Cualquier hosting estático
```

## ⚡ Performance

### Optimizaciones Implementadas

- ✅ **Critical CSS** - Estilos críticos inline
- ✅ **Preload** - Recursos críticos
- ✅ **Defer JS** - Scripts no bloqueantes
- ✅ **Lazy Loading** - Imágenes y componentes
- ✅ **Compression** - Gzip/Brotli
- ✅ **CDN Ready** - Assets optimizados
- ✅ **HTTP/2** - Protocolo moderno

### Lighthouse Score Objetivo

- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

## 🛠️ Scripts Disponibles

```bash
npm run dev         # Desarrollo (hot reload)
npm run build       # Build de producción
npm run generate    # Generar sitio estático (SSG)
npm run preview     # Preview del build
npm run lint        # Linter de código
```

## 🔒 Seguridad

### Headers Configurados

- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy

### Mejores Prácticas

- Sanitización de inputs en formularios
- Validación en frontend y backend
- Rate limiting en formularios
- HTTPS obligatorio en producción

## 📚 Recursos

- [Documentación de Nuxt 3](https://nuxt.com/docs)
- [Vue 3 Guide](https://vuejs.org/guide/)
- [Performance Best Practices](https://web.dev/fast/)
- [SEO para Inmobiliarias](https://developers.google.com/search/docs/advanced/structured-data/property)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request en el repositorio principal.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Yuletzif**
- GitHub: [@Yuletzif18](https://github.com/Yuletzif18)

## 💡 Inspiración

Xero se inspira en los principios de:
- Minimalismo funcional
- Performance-first development
- Mobile-first design
- Progressive enhancement

---

⭐ Si te gusta esta plantilla minimalista, ¡dale una estrella en GitHub!

**Nota**: Xero es perfecta para startups que necesitan lanzar rápido sin sacrificar calidad.


