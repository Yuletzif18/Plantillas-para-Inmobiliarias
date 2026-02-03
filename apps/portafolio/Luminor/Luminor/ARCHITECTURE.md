# Arquitectura del Proyecto Luminor Real Estate

## 📋 Descripción General

Luminor es una aplicación web moderna construida con **Nuxt 3** y **Vue 3** para un portafolio inmobiliario profesional. El proyecto sigue patrones de desarrollo moderno y mejores prácticas de frontend.

## 🏗️ Estructura del Proyecto

```
luminor/
├── app/
│   ├── components/          # Componentes reutilizables globales
│   │   ├── Navbar.vue       # Navegación principal
│   │   └── Footer.vue       # Pie de página
│   ├── layouts/
│   │   └── default.vue      # Layout principal con Navbar y Footer
│   ├── pages/               # Rutas automáticas de Nuxt
│   │   ├── index.vue        # Página de inicio
│   │   ├── tour.vue         # Tour virtual 3D
│   │   ├── proyecto/        # Proyectos por subdominio
│   │   └── site/            # Sección principal del sitio
│   │       ├── blog.vue                    # Listado de artículos
│   │       ├── contacto.vue                # Formulario de contacto
│   │       ├── condiciones.vue             # Términos y condiciones
│   │       ├── inmuebles.vue               # Listado de propiedades
│   │       ├── inicío.vue                  # Página de bienvenida
│   │       ├── legal.vue                   # Aviso legal
│   │       ├── nosotros.vue                # Acerca de la empresa
│   │       ├── ofrece.vue                  # Formulario para ofrecer propiedades
│   │       ├── privacidad.vue              # Política de privacidad
│   │       ├── proyectos.vue               # Listado de proyectos
│   │       ├── servicios.vue               # Servicios disponibles
│   │       ├── inmueble/[id].vue           # Detalle de propiedad
│   │       ├── proyecto/[id]/[canonico].vue     # Detalle de proyecto
│   │       ├── servicio/[id]/[canonico].vue     # Detalle de servicio
│   │       ├── ver/[id]/[canonico].vue          # Página personalizada
│   │       ├── proyectoLegal/[id]/[canonico].vue
│   │       ├── proyectoPublicidad/[id]/[canonico].vue
│   │       └── proyectoTerminos/[id]/[canonico].vue
│   └── plugins/             # Plugins de Nuxt (no activos actualmente)
│       ├── psweb.client.js
│       ├── psweb.server.js
│       ├── inmostore.client.js
│       └── matomo.client.js
├── public/                  # Archivos estáticos
│   ├── css/                # Estilos globales
│   │   ├── styles.css      # Estilos principales
│   │   ├── bootstrap.css   # Framework Bootstrap
│   │   └── (otros estilos)
│   ├── js/                 # JavaScript de terceros
│   ├── font/               # Fuentes personalizadas
│   ├── icons/              # Iconos
│   └── images/             # Imágenes estáticas
├── nuxt.config.ts          # Configuración de Nuxt
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación principal
```

## 🎯 Tecnologías Principales

- **Framework**: Nuxt 3.20.0
- **Runtime**: Vue 3.5.23
- **Build Tool**: Vite 7.2.1
- **Styling**: CSS con clases de utilidad personalizado
- **UI Framework**: Bootstrap CSS (utilities)
- **Language**: TypeScript / JavaScript
- **Node**: v20+

## 🎨 Estructura de Estilos

### Sistema de Utilidades

El proyecto utiliza un sistema de clases de utilidad CSS para espaciado y diseño:

- **Padding**: `p_10`, `p_20`, `p_30`, `p_40`, `p_50`, `p_80` (y más)
- **Margin**: `m_10`, `m_20`, `mb_10`, `mb_20`, `mt_10`, etc.
- **Display**: `mb-4`, `d-flex`, `justify-content-center`, `align-items-center`
- **Gap**: `gap_4`, `gap_15`, `gap_20`, etc.

### Estructura de Colors

Colores definidos en CSS variables (`:root`):

```css
--Primary: #e4e95b (Amarillo)
--Secondary: #eb4d4d (Rojo)
--Text-primary: #111111 (Negro)
--Text-secondary: #5c6368 (Gris)
--Bg-light: #f8f7f3 (Beige)
```

## 📊 Estructura de Datos

### Datos Estáticos

El proyecto utiliza datos estáticos embebidos en los componentes Vue como fallback cuando la API no está disponible:

- **Blog**: Array de artículos con imágenes
- **Servicios**: Objeto con 6 servicios disponibles
- **Propiedades**: Array de propiedades inmobiliarias
- **Proyectos**: Array de proyectos en desarrollo

### Rutas Dinámicas

- `[id]` - ID dinámico de recurso
- `[canonico]` - Slug amigable para SEO
- `[abreviado]` - Referencia corta de proyecto

## 🔧 Componentes Principales

### Navbar.vue
- Navegación principal responsive
- Logo dinámico
- Links de navegación
- Menú móvil

### Footer.vue
- Información de contacto
- Links rápidos
- Redes sociales
- Newsletter subscription
- Botón scroll to top

## 📄 Páginas Principales

### Public Pages
- **Inicio** (`index.vue`): Landing page con hero section
- **Blog** (`site/blog.vue`): Artículos con paginación
- **Servicios** (`site/servicios.vue`): Listado de servicios disponibles
- **Contacto** (`site/contacto.vue`): Formulario de contacto y ubicación
- **Nosotros** (`site/nosotros.vue`): Información de la empresa

### Dynamic Pages
- **Detalle de Propiedad** (`site/inmueble/[id].vue`)
- **Detalle de Servicio** (`site/servicio/[id]/[canonico].vue`)
- **Detalle de Proyecto** (`site/proyecto/[id]/[canonico].vue`)
- **Página Legal** (`site/proyectoLegal/[id]/[canonico].vue`)

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev        # Inicia servidor de desarrollo (puerto 3001)

# Producción
npm run build      # Construir para producción
npm run preview    # Preview de la build
```

## 📱 Características Principales

### Responsive Design
- Mobile-first approach
- Breakpoints: 575px, 767px, 991px, 1199px
- Grid flexible con Bootstrap

### Optimización
- NuxtImg para imágenes optimizadas
- Lazy loading de componentes
- SSR-safe data initialization

### SEO
- Meta dinámicos por página
- Titles y descriptions únicos
- Open Graph ready

### Accesibilidad
- Semántica HTML correcta
- ARIA labels donde aplica
- Contraste de colores WCAG AA

## 🔐 Consideraciones de Seguridad

- Validación de formularios en cliente
- Sanitización de contenido HTML dinámico
- CORS headers apropiados
- No hay datos sensibles en el cliente

## 📦 Dependencias Principales

Ver `package.json` para lista completa. Principales:

- `nuxt`: Framework
- `vue`: Framework de UI
- `@nuxt/image`: Optimización de imágenes
- Bootstrap: Utilidades CSS

## 🎓 Convenciones de Código

### Naming
- Componentes: PascalCase (`Navbar.vue`)
- Variables: camelCase (`isSubmitting`)
- Clases CSS: kebab-case (`.contact-info-card`)
- Constantes: UPPER_SNAKE_CASE (cuando aplica)

### Comentarios
- Comentarios solo para lógica compleja
- Nombres de variables autodescriptivos
- Documentación JSDoc para funciones públicas

### Estructura de Componentes
```vue
<template>
  <!-- HTML structure -->
</template>

<script setup>
// Imports
// Props/Emits
// Reactive state
// Computed properties
// Methods
// Lifecycle hooks
</script>

<style scoped>
/* Scoped styles */
</style>
```

## 🔄 Flujo de Desarrollo

1. **Desarrollo Local**: `npm run dev`
2. **Testing**: Validar en navegador
3. **Build**: `npm run build`
4. **Deploy**: Copiar archivos generados a servidor

## 📝 Versionado

- Versión Actual: 1.0.0
- Node.js: v20+
- Nuxt: 3.20.0

## 🤝 Contribución

Para mantener la calidad del código:

1. Seguir la estructura existente
2. Escribir código legible con nombres descriptivos
3. Evitar código duplicado
4. Probar en múltiples navegadores
5. Validar responsive design

## 📞 Contacto

Para soporte o preguntas sobre la estructura del proyecto, contactar al equipo de desarrollo.

---

**Última actualización**: Febrero 2026
