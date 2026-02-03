# 🏗️ Luminor - Arquitectura Premium

> Plantilla arquitectónica profesional para proyectos inmobiliarios de alta gama, construida con Nuxt.js 3 y Vue 3.

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 📋 Descripción

**Luminor** es una plantilla premium especializada en proyectos arquitectónicos e inmobiliarios de lujo. Diseñada para desarrolladores inmobiliarios, estudios de arquitectura y empresas constructoras que buscan presentar sus proyectos con un diseño sofisticado y animaciones modernas.

## ✨ Características Principales

- ✅ **Diseño Arquitectónico** enfocado en proyectos premium
- ✅ **Animaciones GSAP** suaves y profesionales
- ✅ **Galerías Avanzadas** para showcases de proyectos
- ✅ **Planos Interactivos** para visualización de distribución
- ✅ **Swiper Carousels** modernos y táctiles
- ✅ **Parallax Effects** para profundidad visual
- ✅ **Split Text Animations** con GSAP
- ✅ **Isotope Filtering** para galerías filtradas
- ✅ **Mapas Interactivos** de ubicación
- ✅ **Blog Integrado** para noticias y actualizaciones
- ✅ **Múltiples Layouts** para propiedades y proyectos
- ✅ **SEO Optimizado** y Performance
- ✅ **TypeScript** para código robusto
- ✅ **Código Limpio** con documentación

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
│   ├── app.vue                  # Componente raíz
│   ├── components/              # Componentes Vue
│   │   ├── Footer.vue           # Footer del sitio
│   │   └── Navbar.vue           # Navegación principal
│   ├── layouts/
│   │   └── default.vue          # Layout principal
│   ├── pages/                   # Páginas del sitio
│   │   ├── index.vue            # Redirección a /site
│   │   ├── tour.vue             # Tour virtual
│   │   ├── proyecto/
│   │   │   └── [abreviado].vue  # Redirector de proyectos
│   │   └── site/
│   │       ├── index.vue        # Home
│   │       ├── inicio.vue       # Página de inicio alternativa
│   │       ├── nosotros.vue     # Acerca de
│   │       ├── contacto.vue     # Contacto
│   │       ├── blog.vue         # Blog/Noticias
│   │       ├── inmuebles.vue    # Listado de propiedades
│   │       ├── inmueble/
│   │       │   └── [id].vue     # Detalle de propiedad
│   │       ├── proyectos.vue    # Listado de proyectos
│   │       ├── proyecto/
│   │       │   └── [id]/[canonico].vue  # Detalle de proyecto
│   │       ├── servicios.vue    # Servicios
│   │       ├── servicio/
│   │       │   └── [id]/[canonico].vue  # Detalle de servicio
│   │       ├── ofrece.vue       # Ofrecer propiedad
│   │       ├── legal.vue        # Información legal
│   │       ├── privacidad.vue   # Privacidad
│   │       ├── condiciones.vue  # Términos
│   │       └── ver/
│   │           └── [id]/[canonico].vue  # Páginas custom
├── public/                      # Archivos estáticos
│   ├── css/                     # Estilos CSS
│   │   ├── styles.css           # Estilos principales
│   │   ├── bootstrap.css        # Bootstrap
│   │   ├── swiper-bundle.min.css # Swiper
│   │   ├── animate.min.css      # Animaciones
│   │   └── ...                  # Más estilos
│   ├── js/                      # Scripts JavaScript
│   │   ├── main.js              # Script principal
│   │   ├── gsap.min.js          # GSAP
│   │   ├── ScrollTrigger.min.js # GSAP ScrollTrigger
│   │   ├── handleGsap.js        # Configuración GSAP
│   │   ├── carousel.js          # Carruseles
│   │   └── ...                  # Más scripts
│   ├── icons/                   # Iconos e íconos fonts
│   ├── images/                  # Imágenes del sitio
│   └── font/                    # Fuentes tipográficas
├── .env.example                 # Ejemplo de variables de entorno
├── .eslintrc.json               # Configuración ESLint
├── .prettierrc                  # Configuración Prettier
├── nuxt.config.ts               # Configuración de Nuxt
├── tsconfig.json                # Configuración de TypeScript
├── ARCHITECTURE.md              # Documentación de arquitectura
├── CODE_STYLE_GUIDE.md          # Guía de estilo de código
├── CALIDAD_CODIGO.md            # Estándares de calidad
└── package.json                 # Dependencias
```

## 🎨 Páginas Disponibles

### Páginas Principales
- **/** - Redirección a /site
- **/site** - Página de inicio (Home)
- **/site/inicio** - Variante de inicio
- **/site/nosotros** - Información corporativa
- **/site/contacto** - Formulario de contacto
- **/site/blog** - Blog y noticias
- **/tour** - Tour virtual 360°

### Propiedades
- **/site/inmuebles** - Listado de propiedades
- **/site/inmueble/[id]** - Detalle de propiedad
- **/site/ver/[id]/[canonico]** - Vista de propiedad SEO

### Proyectos
- **/site/proyectos** - Listado de proyectos
- **/site/proyecto/[id]/[canonico]** - Detalle de proyecto
- **/site/proyectoLegal/[id]/[canonico]** - Legal del proyecto
- **/site/proyectoPublicidad/[id]/[canonico]** - Publicidad del proyecto
- **/site/proyectoTerminos/[id]/[canonico]** - Términos del proyecto

### Servicios
- **/site/servicios** - Listado de servicios
- **/site/servicio/[id]/[canonico]** - Detalle de servicio

### Formularios
- **/site/ofrece** - Formulario para ofrecer propiedad

### Legales
- **/site/legal** - Declaración legal
- **/site/privacidad** - Política de privacidad
- **/site/condiciones** - Términos y condiciones

## 🚀 Tecnologías Utilizadas

### Core
- **Nuxt.js 3** - Framework Vue.js SSR/SSG
- **Vue.js 3** - Framework JavaScript progresivo
- **TypeScript** - Tipado estático

### Estilos
- **Bootstrap 5** - Framework CSS
- **Custom CSS** - Estilos personalizados
- **Animate.css** - Animaciones CSS

### Animaciones y Efectos
- **GSAP** - Librería de animaciones profesional
- **ScrollTrigger** - Animaciones al scroll
- **SplitText** - Animación de texto
- **ScrollSmooth** - Scroll suave

### UI Components
- **Swiper.js** - Carruseles modernos y táctiles
- **Isotope** - Filtrado y ordenamiento de grillas
- **Masonry** - Layout de grilla
- **Fancybox** - Lightbox de imágenes
- **Magnific Popup** - Popups y galerías
- **Parallaxie** - Efectos parallax
- **Nice Select** - Selectores mejorados
- **Odometer** - Contadores animados

### Mapas
- **Google Maps API** - Mapas interactivos
- **Custom Map Styles** - Estilos personalizados

### Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Hint** - Mejores prácticas

## 🎨 Personalización

### Variables de Entorno
Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

Configura:
- URL base de la API
- Google Maps API Key
- Información de contacto
- Redes sociales

### Estilos y Colores
Los estilos principales están en `/public/css/styles.css`:
- Variables CSS de colores
- Tipografías
- Espaciados
- Componentes personalizados

### Animaciones GSAP
Personaliza las animaciones en `/public/js/handleGsap.js`:
- Timing de animaciones
- Efectos de entrada
- Animaciones al scroll
- Transiciones de página

## 🔌 Integración con API

La plantilla está preparada para conectarse con una API REST. Puntos de integración:

- **Propiedades**: CRUD de inmuebles
- **Proyectos**: Gestión de desarrollos
- **Blog**: Publicación de noticias
- **Contacto**: Envío de formularios
- **Servicios**: Catálogo de servicios

## 📦 Deployment

### Vercel (Recomendado)

```bash
npm i -g vercel
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
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## 📚 Documentación Adicional

- [ARCHITECTURE.md](ARCHITECTURE.md) - Arquitectura del proyecto
- [CODE_STYLE_GUIDE.md](CODE_STYLE_GUIDE.md) - Guía de estilo
- [CALIDAD_CODIGO.md](CALIDAD_CODIGO.md) - Estándares de calidad

## 🛠️ Scripts Disponibles

```bash
npm run dev         # Servidor de desarrollo
npm run build       # Build de producción
npm run generate    # Generación de sitio estático
npm run preview     # Preview del build
npm run lint        # Ejecutar linter
npm run lint:fix    # Corregir problemas de linting
```

## 🔍 SEO y Performance

### Optimizaciones Implementadas
- ✅ Server-Side Rendering (SSR)
- ✅ Meta tags dinámicos
- ✅ Sitemap automático
- ✅ Robots.txt configurado
- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ Preload de recursos críticos
- ✅ Compresión de assets

### Mejores Prácticas
- Schema.org markup para propiedades
- Open Graph para redes sociales
- Twitter Cards configuradas
- URLs semánticas y limpias

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Sigue la guía de estilo del proyecto
4. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Yuletzif**
- GitHub: [@Yuletzif18](https://github.com/Yuletzif18)

## 🌟 Agradecimientos

- Diseño inspirado en las mejores prácticas arquitectónicas
- Comunidad de Nuxt.js y Vue.js
- GreenSock (GSAP) por las increíbles herramientas de animación

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
