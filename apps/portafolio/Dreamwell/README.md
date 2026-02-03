# 🏡 Dreamwell - Plantilla Inmobiliaria Premium

> Plantilla elegante y moderna para sitios web inmobiliarios de lujo, construida con Nuxt.js 3 y Vue 3.

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)

## 📋 Descripción

**Dreamwell** es una plantilla profesional diseñada específicamente para inmobiliarias de alto nivel que buscan destacar sus propiedades premium con un diseño sofisticado y elegante. Perfecto para agencias inmobiliarias, desarrolladores de proyectos residenciales y corredores de propiedades de lujo.

## ✨ Características Principales

- ✅ **Nuxt.js 3** con Vue 3 Composition API
- ✅ **Diseño Responsive** optimizado para todos los dispositivos
- ✅ **Páginas Dinámicas** para inmuebles, proyectos y servicios
- ✅ **Sistema de Rutas** dinámico y SEO-friendly
- ✅ **Formularios de Contacto** integrados y funcionales
- ✅ **SEO Optimizado** con meta tags y structured data
- ✅ **Animaciones Suaves** con Animate.css y WOW.js
- ✅ **Carruseles Modernos** con Slick Slider
- ✅ **Galerías de Imágenes** con LightGallery
- ✅ **Fácil Personalización** de colores y estilos

## 📋 Requisitos Previos

- Node.js 18+ 
- npm 9+ o yarn

## 🛠️ Instalación

1. Clonar el repositorio o descargar los archivos

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Editar el archivo `.env` con tu configuración

## 🏃 Desarrollo

Iniciar servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Construcción para Producción

Generar build de producción:
```bash
npm run build
```

Previsualizar build de producción:
```bash
npm run preview
```

Generar sitio estático:
```bash
npm run generate
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layouts/
│   │   └── default.vue          # Layout principal
│   ├── pages/
│   │   ├── proyecto/
│   │   │   └── [abreviado].vue  # Redirector de proyectos
│   │   └── site/
│   │       ├── index.vue        # Página de inicio
│   │       ├── nosotros.vue     # Acerca de
│   │       ├── contacto.vue     # Contacto
│   │       ├── blog.vue         # Listado de noticias
│   │       ├── inmuebles.vue    # Listado de inmuebles
│   │       ├── inmueble/
│   │       │   └── [id].vue     # Detalle de inmueble
│   │       ├── proyectos.vue    # Listado de proyectos
│   │       ├── proyecto/
│   │       │   └── [id]/[canonico].vue  # Detalle de proyecto
│   │       ├── servicios.vue    # Listado de servicios
│   │       ├── servicio/
│   │       │   └── [id]/[canonico].vue  # Detalle de servicio
│   │       ├── ofrece.vue       # Formulario ofrecer inmueble
│   │       ├── legal.vue        # Declaración legal
│   │       ├── privacidad.vue   # Política de privacidad
│   │       ├── condiciones.vue  # Términos y condiciones
│   │       └── ver/
│   │           └── [id]/[canonico].vue  # Páginas personalizadas
│   └── plugins/                 # Plugins de LNC
├── public/
│   ├── css/                     # Estilos
│   ├── js/                      # Scripts
│   ├── fonts/                   # Fuentes
│   ├── img/                     # Imágenes
│   └── favicon.ico              # Icono del sitio
├── .env                         # Variables de entorno
├── nuxt.config.ts               # Configuración de Nuxt
└── package.json                 # Dependencias
```

## 🎨 Personalización

### Colores y Estilos
Los estilos principales se encuentran en `/public/css/style.css`. Puedes personalizar:
- Colores principales (accent color)
- Tipografías
- Espaciados
- Componentes

### Contenido
Edita las páginas en `/app/pages/site/` para modificar el contenido de cada sección.

### Variables de Entorno
Configura las variables en `.env`:
- URL de la API
- Información de contacto
- Redes sociales
- Configuraciones de terceros (Google Maps, Analytics, etc.)

## 🔌 Integración con API

Las páginas están preparadas para conectarse con una API backend. Los puntos de integración están comentados en el código con:

```javascript
// Aquí se haría la llamada a la API
// const response = await $fetch('/api/endpoint')
```

## 📱 Páginas Disponibles

- **/** - Página de inicio
- **/site/nosotros** - Información corporativa
- **/site/contacto** - Formulario de contacto
- **/site/blog** - Listado de noticias
- **/site/inmuebles** - Listado de propiedades
- **/site/inmueble/[id]** - Detalle de propiedad
- **/site/proyectos** - Listado de proyectos
- **/site/proyecto/[id]/[canonico]** - Detalle de proyecto
- **/site/servicios** - Listado de servicios
- **/site/servicio/[id]/[canonico]** - Detalle de servicio
- **/site/ofrece** - Formulario para ofrecer inmueble
- **/site/legal** - Declaración legal
- **/site/privacidad** - Política de privacidad
- **/site/condiciones** - Términos y condiciones
- **/site/ver/[id]/[canonico]** - Páginas personalizadas

## 🚀 Tecnologías Utilizadas

- **Nuxt.js 3** - Framework Vue.js para producción
- **Vue.js 3** - Framework JavaScript progresivo
- **Bootstrap 5** - Framework CSS
- **jQuery** - Librería JavaScript
- **Slick Slider** - Carruseles
- **LightGallery** - Galerías de imágenes
- **Animate.css** - Animaciones CSS
- **WOW.js** - Animaciones al scroll
- **Odometer** - Contador animado
- **FontAwesome** - Iconos

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

### Otros Hosts

Esta plantilla puede desplegarse en cualquier servicio que soporte Node.js:
- AWS Amplify
- Firebase Hosting
- Cloudflare Pages
- Railway

## 🛠️ Soporte y Mantenimiento

Para reportar bugs o solicitar nuevas características, por favor abre un issue en el repositorio principal.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Yuletzif**
- GitHub: [@Yuletzif18](https://github.com/Yuletzif18)

---

⭐ Si te gusta esta plantilla, ¡considera darle una estrella en GitHub!


## 🤝 Soporte

Para soporte o consultas, contacta a tu equipo de desarrollo.

## 📄 Licencia

Este proyecto es privado y de uso exclusivo según los términos acordados.
