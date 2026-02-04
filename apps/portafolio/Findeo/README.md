# 🏢 Findeo - Portal Inmobiliario Completo

> Portal inmobiliario profesional con funcionalidades avanzadas, construido con Nuxt.js 3 y Vue 3.

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 📋 Descripción

**Findeo** es un portal inmobiliario completo y robusto que ofrece todas las funcionalidades necesarias para una plataforma inmobiliaria profesional. Incluye sistemas de búsqueda avanzada, integración con mapas, perfiles de agentes, comparador de propiedades y mucho más.

## ✨ Características Principales

- ✅ **Portal Completo** con múltiples funcionalidades
- ✅ **Sistema de Búsqueda Avanzado** con filtros múltiples
- ✅ **Integración con Mapas** interactivos
- ✅ **Listados de Agencias y Agentes** con perfiles detallados
- ✅ **Comparador de Propiedades** lado a lado
- ✅ **Sistema de Favoritos** y guardados
- ✅ **Panel de Usuario** con gestión de propiedades
- ✅ **Blog Integrado** para contenido inmobiliario
- ✅ **Múltiples Layouts** de listado (grid, list, map)
- ✅ **Half-Map Layouts** para mejor visualización
- ✅ **Diseño Responsive** completamente adaptable
- ✅ **SEO Optimizado** para mejor posicionamiento
- ✅ **TypeScript** para mayor robustez del código

## 📋 Requisitos Previos

- Node.js 18+ 
- npm 9+ / pnpm / yarn / bun

## 🛠️ Instalación

Instalar dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🏃 Desarrollo

Iniciar servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 🏗️ Construcción para Producción

Compilar la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Previsualizar producción localmente:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── app.vue                  # Componente raíz de la aplicación
│   ├── assets/                  # Assets del proyecto
│   ├── layouts/                 # Layouts de Nuxt
│   └── pages/                   # Páginas del sitio
├── findeo_updated/              # HTML original de referencia
│   ├── index.html               # Página de inicio
│   ├── listings-*.html          # Varias vistas de listados
│   ├── single-property-*.html   # Vistas de propiedades
│   ├── agents-list.html         # Listado de agentes
│   ├── agencies-list.html       # Listado de agencias
│   ├── blog.html                # Blog
│   ├── my-properties.html       # Panel de usuario
│   ├── submit-property.html     # Agregar propiedad
│   └── ...                      # Más páginas HTML
├── public/                      # Archivos públicos estáticos
│   ├── css/                     # Estilos CSS
│   ├── js/                      # Scripts JavaScript
│   ├── fonts/                   # Fuentes tipográficas
│   └── img/                     # Imágenes
├── nuxt.config.ts               # Configuración de Nuxt
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias del proyecto
```

## 🎨 Páginas Disponibles

### Páginas Principales
- **Inicio** - Landing page con buscador destacado
- **Listados** - Múltiples vistas (grid, list, map, half-map)
- **Detalle de Propiedad** - 3 variantes de página de detalle
- **Agentes** - Listado y perfil de agentes
- **Agencias** - Listado y perfil de agencias
- **Blog** - Listado y artículos individuales
- **Comparador** - Comparación de propiedades
- **Contacto** - Formulario de contacto

### Panel de Usuario
- **Mis Propiedades** - Gestión de propiedades
- **Agregar Propiedad** - Formulario de publicación
- **Favoritos** - Propiedades guardadas
- **Mi Perfil** - Edición de perfil
- **Cambiar Contraseña** - Seguridad

### Vistas de Listado
- Grid compacto con sidebar
- Grid estándar con sidebar
- Grid full width
- Grid con mapa integrado
- Lista con sidebar
- Lista full width
- Lista con mapa
- Half-map grid compacto
- Half-map grid estándar
- Half-map lista

## 🚀 Tecnologías Utilizadas

- **Nuxt.js 3** - Framework Vue.js para producción
- **Vue.js 3** - Framework JavaScript progresivo
- **TypeScript** - Tipado estático
- **Bootstrap** - Framework CSS
- **jQuery** - Librería JavaScript
- **Slick Slider** - Carruseles
- **Magnific Popup** - Lightbox
- **Chosen** - Select mejorados
- **mmenu** - Menú mobile
- **Owl Carousel** - Carruseles avanzados
- **Masonry** - Layout de grilla
- **Daterangepicker** - Selector de fechas
- **Ion Range Slider** - Sliders de rango
- **Dropzone** - Upload de archivos
- **Google Maps API** - Mapas interactivos
- **Marker Clusterer** - Agrupación de marcadores
- **Infobox** - Ventanas de información en mapas

## 🎨 Personalización

### Colores y Estilos
Los estilos principales se encuentran en:
- `/public/css/style.css` - Estilos principales
- `/public/css/color.css` - Esquema de colores
- `/public/css/icons.css` - Iconos

### Configuración del Mapa
Edita `/public/js/maps.js` para personalizar:
- Coordenadas iniciales
- Zoom predeterminado
- Estilos del mapa
- Marcadores de propiedades

## 📦 Deployment

### Vercel

```bash
vercel
```

### Netlify

Build settings:
- Build command: `npm run build`
- Publish directory: `.output/public`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", ".output/server/index.mjs"]
```

## 🔌 Integración con Backend

Esta plantilla está lista para integrarse con cualquier API REST. Los puntos de integración incluyen:

- **Búsqueda de propiedades** con filtros
- **Autenticación de usuarios**
- **Gestión de favoritos**
- **Subida de propiedades**
- **Sistema de mensajería**
- **Gestión de perfiles**

## 🛠️ Scripts Disponibles

```bash
npm run dev         # Desarrollo
npm run build       # Build de producción
npm run generate    # Generar sitio estático
npm run preview     # Preview del build
npm run postinstall # Post-instalación de Nuxt
```

## 📚 Documentación

Para más información sobre Nuxt.js, consulta:
- [Documentación de Nuxt 3](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request en el repositorio principal.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Yuletzif**
- GitHub: [@Yuletzif18](https://github.com/Yuletzif18)

---

⭐ Si te gusta esta plantilla, ¡considera darle una estrella en GitHub!

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
