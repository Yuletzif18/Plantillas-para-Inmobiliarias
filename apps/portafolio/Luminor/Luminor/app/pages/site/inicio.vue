<template>
  <div>
    <!-- Hero Section -->
    <section class="page-title style-2 sw-layout">
      <div class="swiper effect-content-slide" data-autoplay="true">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="slide-inner">
              <div class="thumbs effect-img-zoom">
                <img class="img-zoom" loading="eager" decoding="async"
                  src="/images/page-title/page-title-4.jpg" width="1920" height="720" alt="Hero" />
              </div>
              <div class="content">
                <div class="tf-container">
                  <div class="row">
                    <div class="col-lg-7">
                      <h1 class="title text_white mb_24 fw-5 effect-item effect-1 effect-up">
                        Encuentra Tu Hogar Perfecto
                      </h1>
                      <p class="h6 text_white effect-item effect-2 effect-left">
                        Desde acogedoras habitaciones hasta espacios de concepto abierto,
                        ofrecemos propiedades diseñadas para adaptarse a tu estilo de vida y sueños.
                      </p>
                      <div class="wrap-btn d-flex effect-item effect-3 effect-right">
                        <NuxtLink to="/site/inmuebles" class="tf-btn btn-bg-1 btn-px-32">
                          <span>Ver Propiedades</span>
                          <span class="bg-effect"></span>
                        </NuxtLink>
                        <NuxtLink to="/site/contacto" class="tf-btn btn-bg-white btn-px-32">
                          <span>Contáctanos</span>
                          <span class="bg-effect"></span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Form -->
      <div class="flat-tab flat-tab-form">
        <div class="tf-container">
          <ul class="nav-tab-form style-1 justify-content-center" role="tablist">
            <li class="nav-tab-item text-title fw-6" role="presentation">
              <a href="#forRent" class="nav-link-item active" data-bs-toggle="tab">En Arriendo</a>
            </li>
            <li class="nav-tab-item text-title fw-6" role="presentation">
              <a href="#forSale" class="nav-link-item" data-bs-toggle="tab">En Venta</a>
            </li>
          </ul>
          <div class="wg-filter">
            <div class="widget-content-inner active">
              <div class="form-title">
                <div class="wrap-fill tf-grid-layout lg-col-4 md-col-2">
                  <form class="w-full" @submit.prevent="buscarInmuebles">
                    <label for="lookingFor" class="text-button text_primary-color mb_8">¿Qué buscas?</label>
                    <fieldset>
                      <input v-model="busqueda.ubicacion" type="text" placeholder="Buscar ubicación..." id="lookingFor">
                    </fieldset>
                  </form>
                  <div>
                    <div class="text-button text_primary-color mb_8">Ubicación</div>
                    <select v-model="busqueda.ubicacion" class="nice-select">
                      <option value="">Todas las ciudades</option>
                      <option value="bogota">Bogotá</option>
                      <option value="medellin">Medellín</option>
                      <option value="cali">Cali</option>
                      <option value="barranquilla">Barranquilla</option>
                    </select>
                  </div>
                  <div>
                    <div class="text-button text_primary-color mb_8">Tipo de Propiedad</div>
                    <select v-model="busqueda.tipo" class="nice-select">
                      <option value="">Todos los tipos</option>
                      <option value="apartamento">Apartamento</option>
                      <option value="casa">Casa</option>
                      <option value="oficina">Oficina</option>
                      <option value="local">Local Comercial</option>
                    </select>
                  </div>
                  <button @click="buscarInmuebles" class="tf-btn btn-bg-primary btn-px-32 w-100">
                    <span>Buscar Ahora</span>
                    <span class="bg-effect"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties Section -->
    <section class="featured-properties py_90">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12">
            <div class="heading-section text-center">
              <h2 class="mb_20">Propiedades Destacadas</h2>
              <p class="text-body-1 text_secondary-color">Descubre nuestras mejores propiedades seleccionadas para ti</p>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="propiedad in propiedades" :key="propiedad.id">
            <div class="property-card">
              <div class="property-image">
                <img :src="propiedad.imagen" :alt="propiedad.titulo" width="100%" height="250" />
                <span class="property-status">{{ propiedad.estado }}</span>
                <button @click="toggleFavorite(propiedad.id)" class="btn-favorite" :class="{ active: propiedad.esFavorito }">
                  <i :class="propiedad.esFavorito ? 'icon-HeartFill' : 'icon-Heart'"></i>
                </button>
              </div>
              <div class="property-content p_25">
                <div class="property-price mb_15">
                  <span class="price">{{ formatearPrecio(propiedad.precio) }}</span>
                  <span v-if="propiedad.operacion === 'arriendo'" class="period">/mes</span>
                </div>
                <h4 class="property-title mb_15">
                  <NuxtLink :to="`/site/inmueble/${propiedad.id}`">{{ propiedad.titulo }}</NuxtLink>
                </h4>
                <div class="property-location mb_20">
                  <i class="icon-MapPin"></i>
                  <span>{{ propiedad.ubicacion }}</span>
                </div>
                <div class="property-features d-flex justify-content-between">
                  <div class="feature-item">
                    <i class="icon-Bed"></i>
                    <span>{{ propiedad.habitaciones }}</span>
                  </div>
                  <div class="feature-item">
                    <i class="icon-Bathtub"></i>
                    <span>{{ propiedad.banos }}</span>
                  </div>
                  <div class="feature-item">
                    <i class="icon-Ruler"></i>
                    <span>{{ propiedad.area }}m²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt_40">
          <div class="col-12 text-center">
            <NuxtLink to="/site/inmuebles" class="tf-btn btn-bg-primary btn-px-40">
              <span>Ver Todas las Propiedades</span>
              <span class="bg-effect"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-projects py_90 bg-surface">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12">
            <div class="heading-section text-center">
              <h2 class="mb_20">Proyectos Destacados</h2>
              <p class="text-body-1 text_secondary-color">Conoce nuestros desarrollos inmobiliarios más recientes</p>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="proyecto in proyectosDestacados" :key="proyecto.id">
            <div class="project-card">
              <div class="project-image">
                <img :src="proyecto.imagen" :alt="proyecto.nombre" width="100%" height="300" />
                <span class="project-badge">{{ proyecto.estado }}</span>
              </div>
              <div class="project-content p_30">
                <h4 class="project-title mb_15">
                  <NuxtLink :to="`/site/proyecto/${proyecto.id}/${proyecto.canonico}`">{{ proyecto.nombre }}</NuxtLink>
                </h4>
                <div class="project-location mb_20">
                  <i class="icon-MapPin"></i>
                  <span>{{ proyecto.ubicacion }}</span>
                </div>
                <p class="project-description mb_20">{{ proyecto.descripcionCorta }}</p>
                <div class="project-info d-flex justify-content-between">
                  <div class="info-item">
                    <span class="label">Unidades:</span>
                    <span class="value">{{ proyecto.unidades }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Desde:</span>
                    <span class="value">{{ formatearPrecio(proyecto.precioDesde) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt_40">
          <div class="col-12 text-center">
            <NuxtLink to="/site/proyectos" class="tf-btn btn-outline-primary btn-px-40">
              <span>Ver Todos los Proyectos</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section py_90">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12">
            <div class="heading-section text-center">
              <h2 class="mb_20">Nuestros Servicios</h2>
              <p class="text-body-1 text_secondary-color">Soluciones integrales para todas tus necesidades inmobiliarias</p>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="servicio in servicios" :key="servicio.id">
            <div class="service-card text-center p_30">
              <div class="service-icon mb_20">
                <i :class="servicio.icono"></i>
              </div>
              <h5 class="service-title mb_15">{{ servicio.nombre }}</h5>
              <p class="service-description text-body-2 mb_20">{{ servicio.descripcionCorta }}</p>
              <NuxtLink :to="`/site/servicio/${servicio.id}/${servicio.canonico}`" class="btn-link text-button text_primary-color">
                Ver Más <i class="icon-ArrowRight ms-2"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py_90 bg-primary text-white">
      <div class="tf-container">
        <div class="row g-4 text-center">
          <div class="col-lg-3 col-md-6" v-for="estadistica in estadisticas" :key="estadistica.etiqueta">
            <div class="stat-item">
              <div class="stat-icon mb_20">
                <i :class="estadistica.icono"></i>
              </div>
              <h2 class="stat-value mb_10">{{ estadistica.valor }}</h2>
              <p class="stat-label mb-0">{{ estadistica.etiqueta }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section py_90">
      <div class="tf-container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="about-image">
              <img src="/images/section/section-about.jpg" alt="Sobre nosotros" width="100%" height="auto" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content ps-lg-4">
              <h2 class="mb_20">¿Por Qué Elegirnos?</h2>
              <p class="text-body-1 text_secondary-color mb_30">
                Somos líderes en el mercado inmobiliario con años de experiencia ayudando a personas
                y familias a encontrar su hogar ideal o la mejor inversión.
              </p>
              <div class="features-list mb_30">
                <div class="feature-item d-flex gap_15 mb_20" v-for="caracteristica in caracteristicasNosotros" :key="caracteristica.nombre">
                  <div class="feature-icon">
                    <i :class="caracteristica.icono"></i>
                  </div>
                  <div class="feature-content">
                    <h6 class="mb_10">{{ caracteristica.nombre }}</h6>
                    <p class="text-body-2 text_secondary-color mb-0">{{ caracteristica.descripcionCorta }}</p>
                  </div>
                </div>
              </div>
              <NuxtLink to="/site/nosotros" class="tf-btn btn-bg-primary btn-px-40">
                <span>Conocer Más</span>
                <span class="bg-effect"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog-section py_90 bg-surface">
      <div class="tf-container">
        <div class="row mb_50">
          <div class="col-12">
            <div class="heading-section text-center">
              <h2 class="mb_20">Últimas Noticias</h2>
              <p class="text-body-1 text_secondary-color">Mantente informado con nuestras últimas publicaciones</p>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="articulo in articulosBlog" :key="articulo.id">
            <div class="blog-card">
              <div class="blog-image">
                <img :src="articulo.imagen" :alt="articulo.titulo" width="100%" height="250" />
              </div>
              <div class="blog-content p_25">
                <div class="blog-meta mb_15">
                  <span class="date"><i class="icon-Calendar me-1"></i>{{ articulo.fecha }}</span>
                </div>
                <h5 class="blog-title mb_15">
                  <a href="#">{{ articulo.titulo }}</a>
                </h5>
                <p class="blog-excerpt text-body-2 mb_20">{{ articulo.extracto }}</p>
                <a href="#" class="btn-link text-button text_primary-color">
                  Leer Más <i class="icon-ArrowRight ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt_40">
          <div class="col-12 text-center">
            <NuxtLink to="/site/blog" class="tf-btn btn-outline-primary btn-px-40">
              <span>Ver Todas las Noticias</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO and Meta
useHead({
  title: 'Inicio - Encuentra tu Hogar Perfecto',
  meta: [
    { name: 'description', content: 'Encuentra las mejores propiedades en venta y arriendo. Proyectos inmobiliarios, casas, apartamentos y más.' },
    { name: 'keywords', content: 'inmuebles, propiedades, venta, arriendo, proyectos inmobiliarios' }
  ]
})

// Estado de la búsqueda (propiedades en español)
const busqueda = ref({
  ubicacion: '',
  tipo: '',
  operacion: 'arriendo',
  precioMin: '',
  precioMax: '',
  areaMin: '',
  areaMax: '',
  habitaciones: '',
  banos: '',
  parqueaderos: '',
  antiguedad: ''
})

const mostrarFiltrosAvanzados = ref(false)

// Propiedades destacadas (propiedades en español)
const propiedades = ref([
  {
    id: 1,
    titulo: 'Moderno Apartamento Familiar',
    ubicacion: 'Bogotá, Colombia',
    precio: 450000000,
    tipo: 'apartamento',
    operacion: 'venta',
    estado: 'En Venta',
    habitaciones: 3,
    banos: 2,
    area: 120,
    imagen: '/images/section/features-properties-1.jpg',
    esFavorito: false
  },
  {
    id: 2,
    titulo: 'Casa Campestre con Piscina',
    ubicacion: 'Medellín, Colombia',
    precio: 3500000,
    tipo: 'casa',
    operacion: 'arriendo',
    estado: 'En Arriendo',
    habitaciones: 4,
    banos: 3,
    area: 250,
    imagen: '/images/section/features-properties-2.jpg',
    esFavorito: false
  },
  {
    id: 3,
    titulo: 'Oficina Ejecutiva Centro',
    ubicacion: 'Cali, Colombia',
    precio: 280000000,
    tipo: 'oficina',
    operacion: 'venta',
    estado: 'En Venta',
    habitaciones: 0,
    banos: 2,
    area: 80,
    imagen: '/images/section/features-properties-3.jpg',
    esFavorito: false
  }
])

// Proyectos destacados (propiedades en español)
const proyectosDestacados = ref([
  {
    id: 1,
    nombre: 'Reserva del Bosque',
    canonico: 'reserva-del-bosque',
    ubicacion: 'Chía, Cundinamarca',
    descripcionCorta: 'Exclusivo proyecto de vivienda campestre con amplias zonas verdes',
    estado: 'En Construcción',
    unidades: 45,
    precioDesde: 350000000,
    imagen: '/images/home/home-list-1.jpg'
  },
  {
    id: 2,
    nombre: 'Torres del Parque',
    canonico: 'torres-del-parque',
    ubicacion: 'Bogotá D.C.',
    descripcionCorta: 'Modernos apartamentos con vista panorámica de la ciudad',
    estado: 'Preventa',
    unidades: 120,
    precioDesde: 280000000,
    imagen: '/images/home/home-list-2.jpg'
  },
  {
    id: 3,
    nombre: 'Hacienda La Palma',
    canonico: 'hacienda-la-palma',
    ubicacion: 'Rionegro, Antioquia',
    descripcionCorta: 'Lotes campestres con excelente ubicación y servicios',
    estado: 'Disponible',
    unidades: 30,
    precioDesde: 150000000,
    imagen: '/images/home/home-list-3.jpg'
  }
])

// Servicios (propiedades en español)
const servicios = ref([
  {
    id: 1,
    canonico: 'venta-propiedades',
    nombre: 'Venta de Propiedades',
    descripcionCorta: 'Asesoría especializada para vender tu propiedad al mejor precio',
    icono: 'icon-House'
  },
  {
    id: 2,
    canonico: 'arriendo-propiedades',
    nombre: 'Arriendo',
    descripcionCorta: 'Encuentra el inmueble perfecto para arrendar',
    icono: 'icon-Key'
  },
  {
    id: 3,
    canonico: 'asesoria-legal',
    nombre: 'Asesoría Legal',
    descripcionCorta: 'Acompañamiento legal en todos tus trámites inmobiliarios',
    icono: 'icon-Shield'
  },
  {
    id: 4,
    canonico: 'avaluo-propiedades',
    nombre: 'Avalúos',
    descripcionCorta: 'Valoración profesional de propiedades',
    icono: 'icon-ChartLine'
  }
])

const estadisticas = ref([
  { icono: 'icon-House', valor: '2,500+', etiqueta: 'Propiedades' },
  { icono: 'icon-Users', valor: '5,000+', etiqueta: 'Clientes Satisfechos' },
  { icono: 'icon-Buildings', valor: '150+', etiqueta: 'Proyectos' },
  { icono: 'icon-Trophy', valor: '15+', etiqueta: 'Años de Experiencia' }
])

const caracteristicasNosotros = ref([
  {
    icono: 'icon-Shield',
    nombre: 'Transparencia Total',
    descripcionCorta: 'Operamos con total transparencia y honestidad en cada transacción'
  },
  {
    icono: 'icon-Users',
    nombre: 'Equipo Experto',
    descripcionCorta: 'Profesionales capacitados y certificados en el sector inmobiliario'
  },
  {
    icono: 'icon-Handshake',
    nombre: 'Mejor Servicio',
    descripcionCorta: 'Atención personalizada y seguimiento en cada etapa del proceso'
  }
])

const articulosBlog = ref([
  {
    id: 1,
    titulo: 'Guía para Comprar tu Primera Vivienda',
    extracto: 'Todo lo que necesitas saber antes de dar el gran paso...',
    fecha: '15 Nov 2025',
    imagen: '/images/blog/blog-item-1.jpg'
  },
  {
    id: 2,
    titulo: 'Tendencias del Mercado Inmobiliario 2025',
    extracto: 'Análisis del comportamiento del mercado este año...',
    fecha: '10 Nov 2025',
    imagen: '/images/blog/blog-item-2.jpg'
  },
  {
    id: 3,
    titulo: 'Inversión en Bienes Raíces: ¿Vale la Pena?',
    extracto: 'Descubre las ventajas de invertir en propiedades...',
    fecha: '5 Nov 2025',
    imagen: '/images/blog/blog-item-3.jpg'
  }
])

// Computed para filtrar propiedades
const propiedadesFiltradas = computed(() => {
  return propiedades.value.filter(p => {
    if (busqueda.value.ubicacion && !p.ubicacion.toLowerCase().includes(busqueda.value.ubicacion.toLowerCase())) return false
    if (busqueda.value.tipo && p.tipo !== busqueda.value.tipo) return false
    if (busqueda.value.precioMin && p.precio < Number(busqueda.value.precioMin)) return false
    if (busqueda.value.precioMax && p.precio > Number(busqueda.value.precioMax)) return false
    return true
  })
})

// Formatear precio en formato COP
const formatearPrecio = (precio) => {
  if (typeof precio !== 'number' || isNaN(precio)) return '$ 0'
  return '$ ' + precio.toLocaleString('es-CO')
}

// Métodos
const toggleFavorite = (id) => {
  const propiedad = propiedades.value.find(p => p.id === id)
  if (propiedad) {
    propiedad.esFavorito = !propiedad.esFavorito
  }
}

const buscarInmuebles = () => {
  // Construir query params
  const params = new URLSearchParams()
  Object.entries(busqueda.value).forEach(([key, value]) => {
    if (value) {
      params.append(key, value)
    }
  })
  // Navegar a la página de resultados
  navigateTo(`/site/inmuebles?${params.toString()}`)
}
</script>

<style scoped>
.property-card,
.project-card,
.service-card,
.blog-card {
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.property-card:hover,
.project-card:hover,
.service-card:hover,
.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.property-image,
.project-image,
.blog-image {
  position: relative;
  overflow: hidden;
}

.property-image img,
.project-image img,
.blog-image img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.property-card:hover .property-image img,
.project-card:hover .project-image img,
.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon i {
  font-size: 40px;
  color: white;
}

.stat-item {
  padding: 30px;
}

.stat-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 36px;
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon i {
  font-size: 24px;
  color: white;
}

.property-status,
.project-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--primary-color);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  z-index: 2;
}

.btn-favorite {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.btn-favorite:hover {
  background: white;
  color: var(--primary-color);
}

.btn-favorite.active {
  background: var(--primary-color);
  color: white;
}

.btn-favorite i {
  font-size: 18px;
}
</style>
