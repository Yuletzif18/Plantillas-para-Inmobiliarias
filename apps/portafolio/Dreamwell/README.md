# Dreamwell - Plantilla Inmobiliaria Nuxt.js

Plantilla moderna para sitios web inmobiliarios construida con Nuxt.js 3, basada en el diseño Dreamwell.

## 🚀 Características

- ✅ Nuxt.js 3 con Vue 3
- ✅ Diseño responsive y moderno
- ✅ Páginas para inmuebles, proyectos y servicios
- ✅ Sistema de rutas dinámicas
- ✅ Formularios de contacto integrados
- ✅ SEO optimizado
- ✅ Fácil personalización

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

## 🤝 Soporte

Para soporte o consultas, contacta a tu equipo de desarrollo.

## 📄 Licencia

Este proyecto es privado y de uso exclusivo según los términos acordados.
