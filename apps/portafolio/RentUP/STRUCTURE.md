# RentUP - Estructura de Frontend Profesional

## 📋 Descripción General

**RentUP** es un portal inmobiliario moderno desarrollado con **Nuxt 3**, **Vue 3** y **TypeScript**. El proyecto sigue mejores prácticas profesionales de desarrollo frontend con énfasis en limpieza de código, estructura clara y mantenibilidad.

---

## 📁 Estructura de Carpetas

```
RentUP/
├── app/                          # Directorio fuente de Nuxt
│   ├── components/               # Componentes reutilizables
│   │   ├── Header.vue           # Navegación principal
│   │   ├── Footer.vue           # Pie de página
│   │   ├── LoginModal.vue       # Modal de inicio de sesión
│   │   └── ContactModal.vue     # Modal de contacto
│   ├── layouts/
│   │   └── default.vue          # Layout global
│   ├── pages/                    # Rutas automáticas
│   │   ├── index.vue            # Página inicio (redirige a /site)
│   │   └── site/
│   │       ├── index.vue        # Landing page
│   │       ├── inmuebles.vue    # Listado de propiedades
│   │       ├── proyectos.vue    # Proyectos inmobiliarios
│   │       ├── servicios.vue    # Servicios ofrecidos
│   │       ├── nosotros.vue     # Acerca de nosotros
│   │       ├── contacto.vue     # Formulario de contacto
│   │       ├── blog.vue         # Blog
│   │       ├── legal.vue        # Página legal
│   │       ├── privacidad.vue   # Política de privacidad
│   │       ├── condiciones.vue  # Términos y condiciones
│   │       ├── inmueble/
│   │       ├── proyecto/
│   │       ├── servicio/
│   │       └── ver/             # Detalles de propiedades
│   └── plugins/                  # Plugins de Nuxt
│       └── lnc.client.js        # Plugin para cliente
├── public/                        # Archivos estáticos
│   ├── img/                      # Imágenes
│   │   ├── png/                 # Imágenes PNG
│   │   ├── jpg/                 # Imágenes JPG
│   │   ├── svg/                 # Iconos SVG
│   │   └── video/               # Videos
│   ├── css/                      # Hojas de estilo
│   │   └── styles.css           # Estilos principales
│   ├── js/                       # Scripts
│   │   ├── bootstrap.min.js     # Framework Bootstrap
│   │   ├── jquery.min.js        # jQuery
│   │   ├── custom.js            # Scripts personalizados
│   │   └── slick.js             # Carousel
│   ├── fonts/                    # Fuentes personalizadas
│   ├── robots.txt               # SEO - Indicaciones para bots
│   └── humans.txt               # Información de equipo
├── nuxt.config.ts               # Configuración de Nuxt 3
├── package.json                 # Dependencias y scripts
└── README.md                    # Documentación general

```

---

## 🎨 Características Técnicas

### Stack Tecnológico
- **Framework**: Nuxt 3 con SSR habilitado
- **Lenguaje**: Vue 3 con Composition API
- **Tipado**: TypeScript
- **Estilos**: Bootstrap 5.3.3, CSS personalizado
- **Iconos**: FontAwesome 6.4.0
- **Gestión de estado**: Pinia
- **Imágenes**: Nuxt Image para optimización

### Configuración
- **Puerto de desarrollo**: 3000
- **SSR**: Habilitado para mejor SEO
- **Meta tags**: Dinámicos con `useHead()`
- **Compatibilidad de navegadores**: ES2025

---

## 🧩 Componentes Principales

### Header.vue
- Navegación responsiva con Bootstrap navbar
- Logo de RentUP
- Menú con enlaces a secciones principales
- Botones de "Iniciar Sesión" y "Publicar Inmueble"
- Responsive en móvil con navbar collapse

### Footer.vue
- Secciones: Navegación, Empresa, Legal, Contacto
- Enlaces a redes sociales
- Información de contacto
- Estilos profesionales con color de marca (#fa2c5a)

### LoginModal.vue
- Modal de Bootstrap para inicio de sesión
- Campos para email y contraseña
- Enlace "Olvidé contraseña"

### ContactModal.vue
- Modal para formulario de contacto
- Campos: nombre, email, mensaje
- Validación básica

---

## 📄 Páginas Principales

### index.vue (Inicio redirigido)
Redirige automáticamente a `/site/` sin espera (`navigateTo('/site')`)

### site/index.vue (Landing Page)
**Contenido**:
- Banner hero con buscador de propiedades
- Sección de premios/reconocimientos
- Propiedades destacadas (3 items)
- Categorías de propiedades (8 items)
- Agentes inmobiliarios (5 items)
- Ubicaciones principales (5 items)
- Testimonios de clientes (5 items)
- Blog/Noticias (3 posts)
- Sección de ofertas especiales

**Funcionalidades**:
- Carga paralela de datos con `Promise.all()`
- Preloader spinner durante carga
- Meta tags dinámicos para SEO
- JSON-LD schema para RealEstateAgent
- Preformato de precios con `formatPrice()`

### site/inmuebles.vue (Listado de Propiedades)
**Contenido**:
- 9 propiedades mock con datos completos
- Grid responsivo 4-6-12 columnas
- Tarjetas con: imagen, precio, tipo, habitaciones, baños, área, ubicación
- Indicador de "Destacado" o "Disponible"
- Selector de ordenamiento (reciente, precio, área)

**Funcionalidades**:
- Paginación (12 items por página)
- Ordenamiento dinámico
- Contador de resultados
- Mensajes de estado (cargando, sin resultados)
- Enlace a detalle de propiedad

---

## 🔧 Estándares de Código

### Principios Aplicados

1. **Comentarios Limpios**
   - Solo comentarios que expliquen lógica compleja
   - Sin comentarios obvios como `<!-- Header -->`
   - Documentar WHY, no HOW

2. **Estructura Ordenada**
   ```vue
   <template>
     <!-- HTML limpio y semántico -->
   </template>

   <script setup>
   // Imports
   import { ref, computed } from 'vue'

   // Meta tags
   useHead({ /* ... */ })

   // Estado reactivo
   const prop = ref(value)

   // Computed properties
   const computed = computed(() => { /* ... */ })

   // Methods
   const method = () => { /* ... */ }

   // Hooks
   onMounted(() => { /* ... */ })
   </script>

   <style scoped>
   /* Estilos específicos del componente */
   </style>
   ```

3. **Nomenclatura**
   - Componentes: PascalCase (Header.vue, LoginModal.vue)
   - Variables/funciones: camelCase (isLoading, handleClick)
   - Clases CSS: kebab-case (.nav-link, .card-wrapper)
   - Rutas dinámicas: [param].vue ([id].vue, [canonico].vue)

4. **Performance**
   - Lazy loading de componentes
   - Datos paralelos con `Promise.all()`
   - Computed properties para datos derivados
   - `v-if` para no renderizar, `v-show` para ocultar visualmente

---

## 🚀 Cómo Ejecutar el Proyecto

### Instalación
```bash
# Instalar dependencias
npm install

# Instalar Nuxt
npx nuxi@latest

# Configurar el proyecto
npm run postinstall
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo (puerto 3000)
npm run dev

# Acceder a http://localhost:3000
```

### Build
```bash
# Generar versión de producción
npm run build

# Preview de producción localmente
npm run preview

# Generar sitio estático
npm run generate
```

---

## 📝 Datos Mock

El proyecto usa datos mock para demostración. La estructura es:

### Propiedades
```javascript
{
  id: number,
  title: string,
  price: number,
  type: string, // 'Apartamento', 'Villa', 'Casa'
  bedrooms: number,
  bathrooms: number,
  area: number, // m²
  location: string,
  images: string[], // array de rutas
  featured: boolean,
  createdAt: string // ISO date
}
```

### Agentes
```javascript
{
  id: number,
  name: string,
  email: string,
  phone: string,
  avatar: string,
  specialties: string[]
}
```

---

## 🔐 Branding

- **Nombre**: RentUP
- **Dominio**: rentup.mx
- **Email**: contacto@rentup.com
- **Color Primario**: #27ae60 (verde)
- **Color Secundario**: #fa2c5a (rosa)
- **Tipografía**: Inter (Google Fonts)

---


