# RentUP - Portal Inmobiliario Profesional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)

Portal inmobiliario moderno y profesional desarrollado con **Nuxt 3**, **Vue 3** y **TypeScript**. Diseñado para facilitar la búsqueda, compra, venta y alquiler de propiedades con una experiencia de usuario excepcional.

## 🎬 Demo en Vivo

<video width="100%" controls style="border-radius: 8px; margin: 20px 0;">
  <source src="./public/demoVideo/10-05-50.mp4" type="video/mp4">
  Tu navegador no soporta videos HTML5
</video>

**[Ver sitio en vivo →](https://plantillas-para-inmobiliarias-rentu.vercel.app/)**

## ✨ Características Principales

- 🏠 **Gestión de Propiedades**: Sistema completo de listado y detalle de inmuebles
- 🔍 **Búsqueda Avanzada**: Filtros dinámicos por precio, ubicación, tipo, etc.
- 📱 **Responsive Design**: Totalmente optimizado para móvil, tablet y desktop
- ⚡ **Performance**: Carga rápida con optimización de imágenes y lazy loading
- 🔐 **SEO Optimizado**: Meta tags dinámicos, JSON-LD, sitemap y robots.txt
- 🎨 **Diseño Profesional**: UI/UX moderno con Bootstrap 5 y componentes personalizados
- 🌍 **Multiidioma Ready**: Estructura preparada para internacionalización
- 📊 **Datos en Tiempo Real**: Mock data que puede integrarse con API backend

## 🚀 Quick Start

```bash
# Clonar repositorio
git clone https://github.com/rentup/rentup-portal.git
cd rentup-portal

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

## 📋 Requisitos Previos

- **Node.js**: 18.0.0 o superior
- **npm**: 9.0.0 o superior
- **Git**: Para control de versiones

## 🛠️ Tech Stack

| Tecnología | Propósito | Versión |
|-----------|-----------|---------|
| **Nuxt** | Framework meta para Vue.js | ^4.1.3 |
| **Vue.js** | Framework progresivo | 3.x |
| **TypeScript** | Tipado estático | ^5.6.2 |
| **Bootstrap** | Framework CSS | ^5.3.3 |
| **Pinia** | State management | ^2.2.4 |
| **Nuxt Image** | Optimización de imágenes | ^1.11.0 |

## 📁 Estructura del Proyecto

```
rentup-portal/
├── app/
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── LoginModal.vue
│   │   └── ContactModal.vue
│   ├── layouts/
│   │   └── default.vue       # Layout global
│   ├── pages/                # Rutas automáticas (file-based routing)
│   │   ├── index.vue         # Redirección a /site
│   │   └── site/
│   │       ├── index.vue     # Landing page principal
│   │       ├── inmuebles.vue # Listado de propiedades
│   │       ├── contacto.vue  # Contacto
│   │       └── [other pages]/
│   └── plugins/
│       └── lnc.client.js     # Plugins cliente
├── public/
│   ├── img/
│   │   ├── png/              # Imágenes PNG
│   │   ├── jpg/              # Imágenes JPG
│   │   ├── svg/              # Iconos SVG
│   │   └── video/            # Videos
│   ├── css/
│   │   └── styles.css        # Estilos globales
│   ├── js/                   # Scripts
│   ├── robots.txt            # SEO - Robots
│   └── humans.txt            # Información del equipo
├── .env.example              # Variables de entorno plantilla
├── .gitignore               # Archivos ignorados por Git
├── nuxt.config.ts           # Configuración de Nuxt
├── package.json             # Dependencias
├── README.md                # Este archivo
├── STRUCTURE.md             # Documentación de estructura
├── CONTRIBUTING.md          # Guía de contribución
└── LICENSE                  # Licencia MIT
```

## 🎯 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo (puerto 3000)
npm run build        # Build optimizado para producción
npm run preview      # Preview local del build
npm run generate     # Generar sitio estático (SSG)
npm run postinstall  # Preparar Nuxt (automático en npm install)
```

## 🎨 Componentes Principales

### Layout y Navegación
- **Header.vue**: Navegación responsiva con Logo, menú y CTAs
- **Footer.vue**: Footer con links, contacto y redes sociales
- **default.vue**: Layout principal que incluye header y footer

### Modales
- **LoginModal.vue**: Modal para inicio de sesión
- **ContactModal.vue**: Modal para formulario de contacto

### Páginas Destacadas

**site/index.vue** (Landing Page)
- Banner hero con buscador
- Propiedades destacadas
- Agentes inmobiliarios
- Testimonios
- Blog/noticias

**site/inmuebles.vue** (Propiedades)
- Grid responsive de propiedades
- Ordenamiento dinámico (reciente, precio, área)
- Paginación (12 items por página)
- Contador de resultados
- Call-to-action de contacto

## 🔧 Configuración

### Variables de Entorno
```bash
cp .env.example .env
```

Configurar en `.env`:
```env
NUXT_APP_BASE_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE=http://localhost:3000/api
```

### Personalización de Branding
- **Nombre**: Cambiar en `package.json` y `nuxt.config.ts`
- **Colores**: Editar colores en componentes y CSS
- **Dominio**: Actualizar en `nuxt.config.ts` y files públicos

## 📊 Datos y API

El proyecto incluye **mock data** para todas las secciones. Para integrar una API real:

1. Crear endpoints en tu backend
2. Reemplazar `fetch` de mock data con `$fetch` real
3. Ajustar estructura de datos según respuesta

### Estructura de Propiedad (Mock)
```javascript
{
  id: number,
  title: string,
  price: number,
  type: string,           // 'Apartamento', 'Villa', 'Casa'
  bedrooms: number,
  bathrooms: number,
  area: number,          // en m²
  location: string,
  images: string[],
  featured: boolean,
  createdAt: string      // ISO date
}
```

## 🌐 SEO y Meta Tags

El proyecto está totalmente optimizado para SEO:

- ✅ Meta tags dinámicos por página
- ✅ Open Graph para redes sociales
- ✅ JSON-LD structured data
- ✅ Sitemap y robots.txt
- ✅ Semantic HTML
- ✅ Lazy loading de imágenes

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run generate
# Subir carpeta .output/public a Netlify
```

### Servidor Propio
```bash
npm run build
NODE_ENV=production node .output/server/index.mjs
```

## 📖 Documentación Adicional

- **[STRUCTURE.md](STRUCTURE.md)** - Estructura detallada del proyecto
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guía de contribución
- **[LICENSE](LICENSE)** - Licencia MIT

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear rama feature: `git checkout -b feature/nueva-caracteristica`
3. Commit cambios: `git commit -am 'Agregar nueva característica'`
4. Push: `git push origin feature/nueva-caracteristica`
5. Crear Pull Request

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📝 Estándares de Código

El proyecto sigue estándares profesionales:

- ✅ **TypeScript**: Tipado estático obligatorio
- ✅ **Vue 3 Composition API**: Estilo moderno
- ✅ **Nomenclatura**: PascalCase (componentes), camelCase (variables)
- ✅ **Comentarios**: Solo lo específico, sin obviedades
- ✅ **Responsive**: Mobile-first approach
- ✅ **Accesibilidad**: WCAG 2.1 AA

## 🔒 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](LICENSE) para más detalles.

## 📧 Contacto y Soporte

- **Email**: contacto@rentup.com
- **Sitio Web**: https://rentup.com
- **Issues**: Abrir issue en GitHub


