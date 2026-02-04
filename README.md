# 🏘️ Plantillas para Inmobiliarias

> Colección profesional de plantillas web modernas para negocios inmobiliarios, desarrolladas con Nuxt.js 3 y Vue 3.

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 **[Ver Portafolio Completo en GitHub Pages](https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/)**

## 📋 Descripción

Este repositorio contiene una colección de **5 plantillas profesionales** diseñadas específicamente para el sector inmobiliario. Cada plantilla ofrece un diseño único y moderno, completamente responsive y optimizada para SEO, construida con las últimas tecnologías web.

## 🎨 Plantillas Disponibles

### ✅ Desplegadas en Vercel

#### 1. **Dreamwell** - Elegancia Moderna
Plantilla con diseño minimalista y elegante, ideal para inmobiliarias de lujo y propiedades premium.
- 🎯 Diseño limpio y sofisticado
- 📱 Totalmente responsive
- 🔍 Búsqueda avanzada de propiedades
- 📧 Formularios de contacto integrados
- 🌐 [Demo en Vivo](https://plantillas-para-inmobiliarias-dreamwell.vercel.app/)

#### 2. **Luminor** - Arquitectura Premium
Diseño arquitectónico profesional enfocado en proyectos de alta gama.
- 🏗️ Showcases de proyectos
- 🖼️ Galerías de imágenes avanzadas
- 📐 Planos interactivos
- 🎨 Animaciones suaves con GSAP
- 🌐 [Demo en Vivo](https://plantillas-para-inmobiliarias-lumin.vercel.app/)

### 🔄 En Desarrollo (No Desplegadas)

#### 3. **Findeo** - Portal Completo
Portal inmobiliario completo con múltiples layouts y funcionalidades avanzadas.
- 🏢 Listados de agencias y agentes
- 🗺️ Integración con mapas interactivos
- 📊 Comparador de propiedades
- 💼 Panel de usuario

#### 4. **RentUP** - Solución de Alquiler
Especializada en propiedades de alquiler y gestión de arrendamientos.
- 🏠 Sistema de reservas
- 📅 Calendario de disponibilidad
- 💰 Calculadora de rentas
- ✅ Gestión de solicitudes

#### 5. **Xero** - Minimalista y Rápido
Plantilla ultra-ligera y rápida, perfecta para startups inmobiliarias.
- ⚡ Carga ultrarrápida
- 🎯 Diseño minimalista
- 📱 Mobile-first approach
- 🚀 Optimización extrema

## 🚀 Características Generales

- ✨ **Framework Moderno**: Nuxt.js 3 con Vue 3 Composition API
- 📱 **Diseño Responsive**: Perfecta visualización en todos los dispositivos
- 🎨 **Componentes Reutilizables**: Sistema de componentes compartidos
- 🔍 **SEO Optimizado**: Meta tags, sitemap y robots.txt configurados
- ⚡ **Performance**: Lazy loading, code splitting y optimización de imágenes
- 🎯 **TypeScript**: Tipado fuerte para mayor robustez
- 🎨 **Estilos Modernos**: CSS3, animaciones y transiciones suaves
- 📦 **Fácil Deployment**: Configuración para Vercel, Netlify y otras plataformas

## 📁 Estructura del Proyecto

```
plantillas-inmobiliarias/
├── 📁 apps/
│   └── portafolio/
│       ├── dreamwell/        → Plantilla Dreamwell
│       ├── findeo/           → Plantilla Findeo
│       ├── luminor/          → Plantilla Luminor
│       ├── rentup/           → Plantilla RentUP
│       └── xero/             → Plantilla Xero
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: Nuxt.js 3
- **Frontend**: Vue.js 3
- **Lenguaje**: TypeScript / JavaScript
- **Estilos**: CSS3, Bootstrap (algunas plantillas)
- **Animaciones**: GSAP, Animate.css
- **Mapas**: Google Maps API / Leaflet
- **Carruseles**: Swiper.js, Slick
- **Iconos**: FontAwesome, Icon Fonts personalizados

## 📦 Instalación

### Requisitos Previos

- Node.js 18+ 
- npm 9+ / yarn / pnpm

### Instalación General

```bash
# Clonar el repositorio
git clone https://github.com/Yuletzif18/Plantillas-para-Inmobiliarias.git

# Navegar al directorio
cd Plantillas-para-Inmobiliarias
```

### Instalación de una Plantilla Específica

```bash
# Navegar a la plantilla deseada (ejemplo: Dreamwell)
cd apps/portafolio/Dreamwell

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Genera build de producción
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta linter
npm run lint:fix     # Corrige problemas de linting
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

```bash
# Build command
npm run build

# Publish directory
.output/public
```

### Otros Proveedores

Las plantillas son compatibles con cualquier hosting que soporte Node.js:
- AWS Amplify
- Firebase Hosting
- Cloudflare Pages
- Railway
- Render

## 🎯 Uso y Personalización

Cada plantilla incluye:
- **Componentes modulares** fáciles de personalizar
- **Configuración centralizada** en `nuxt.config.ts`
- **Variables de estilo** en archivos CSS separados
- **Datos de ejemplo** que puedes reemplazar con tu contenido

### Personalización Rápida

1. **Colores y estilos**: Edita los archivos CSS en `/public/css/`
2. **Contenido**: Modifica los componentes Vue en `/app/pages/` y `/app/components/`
3. **Configuración**: Ajusta `nuxt.config.ts` para SEO, meta tags, etc.
4. **Imágenes**: Reemplaza las imágenes en `/public/img/` o `/public/images/`

## 📸 Demos en Vivo

### 🌐 Portafolio Principal
- **GitHub Pages**: [https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/](https://yuletzif18.github.io/Plantillas-para-Inmobiliarias/)

### ✅ Desplegadas
- **Dreamwell**: [https://plantillas-para-inmobiliarias-dreamwell.vercel.app/](https://plantillas-para-inmobiliarias-dreamwell.vercel.app/)
- **Luminor**: [https://plantillas-para-inmobiliarias-lumin.vercel.app/](https://plantillas-para-inmobiliarias-lumin.vercel.app/)

### 🔄 Próximamente (En Desarrollo)
- **Findeo**: Portal completo de búsqueda inmobiliaria
- **RentUP**: Solución especializada en alquiler
- **Xero**: Plantilla minimalista y ultrarrápida

> 💡 Las demos desplegadas están completamente funcionales y optimizadas para producción

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar alguna plantilla:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Yuletzif**
- GitHub: [@Yuletzif18](https://github.com/Yuletzif18)
- Portfolio: [Tu Portfolio]

## 🌟 Agradecimientos

- Diseños originales inspirados en las mejores prácticas del sector inmobiliario
- Comunidad de Nuxt.js y Vue.js
- Todos los contribuidores de código abierto

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:
- Abre un [Issue](https://github.com/Yuletzif18/Plantillas-para-Inmobiliarias/issues)
- Contacta al autor

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!
