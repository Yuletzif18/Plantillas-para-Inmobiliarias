<template>
  <div>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>{{ project?.nombre }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/proyectos" class="hover-underline-link">Proyectos</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ project?.nombre }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Hero -->
    <section class="project-hero py_60" v-if="project">
      <div class="tf-container">
        <div class="row">
          <div class="col-lg-8">
            <!-- Main Gallery -->
            <div class="project-gallery mb_30">
              <div class="main-image position-relative">
                <img :src="mainImage" :alt="project.nombre" class="rounded" width="100%">
                <div class="gallery-controls">
                  <button @click="prevImage" class="gallery-btn">
                    <i class="icon-CaretLeft"></i>
                  </button>
                  <button @click="nextImage" class="gallery-btn">
                    <i class="icon-CaretRight"></i>
                  </button>
                </div>
                <div class="image-counter">{{ currentImageIndex + 1 }} / {{ project.imagenes?.length }}</div>
              </div>
              <div class="thumbnail-grid mt_20">
                <div 
                  v-for="(image, index) in project.imagenes" 
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="['thumbnail-item', { active: currentImageIndex === index }]"
                >
                  <img :src="image" :alt="`${project.nombre} ${index + 1}`">
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div class="project-info-box p_40 bg-white rounded mb_30">
              <div class="d-flex justify-content-between align-items-start mb_30">
                <div>
                  <h2 class="mb_15">{{ project.nombre }}</h2>
                  <div class="project-location mb_15">
                    <i class="icon-MapPin"></i>
                    <span>{{ project.ubicacion }}</span>
                  </div>
                  <span :class="`badge badge-${getStatusColor(project.estado)}`">
                    {{ project.tipo }}
                  </span>
                </div>
                <div class="text-end">
                  <p class="text-caption text_secondary-color mb_5">Desde</p>
                  <h3 class="text_primary-color mb_15">{{ formatPrice(project.precioDesde) }}</h3>
                  <p class="text-caption text_secondary-color">{{ project.totalUnidades }} unidades</p>
                </div>
              </div>

              <!-- Key Features -->
              <div class="key-features mb_30">
                <div class="row g-3">
                  <div class="col-6 col-md-3">
                    <div class="feature-box text-center p_20 bg-surface rounded">
                      <i class="icon-Buildings mb_10"></i>
                      <p class="text-caption text_secondary-color mb_5">Unidades</p>
                      <h6>{{ project.totalUnidades }}</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-3">
                    <div class="feature-box text-center p_20 bg-surface rounded">
                      <i class="icon-CalendarBlank mb_10"></i>
                      <p class="text-caption text_secondary-color mb_5">Entrega</p>
                      <h6>{{ project.fechaEntrega }}</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-3">
                    <div class="feature-box text-center p_20 bg-surface rounded">
                      <i class="icon-House mb_10"></i>
                      <p class="text-caption text_secondary-color mb_5">Tipo</p>
                      <h6>{{ project.tipo }}</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-3">
                    <div class="feature-box text-center p_20 bg-surface rounded">
                      <i class="icon-ChartBar mb_10"></i>
                      <p class="text-caption text_secondary-color mb_5">Vendido</p>
                      <h6>{{ project.progreso }}%</h6>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="project-description mb_30" v-if="project.descripcion">
                <h4 class="mb_20">Descripción del Proyecto</h4>
                <p class="text-body-2 text_secondary-color mb_15">{{ project.descripcion }}</p>
                <p class="text-body-2 text_secondary-color" v-if="project.descripcionLarga">{{ project.descripcionLarga }}</p>
              </div>

              <!-- Amenities -->
              <div class="project-amenities mb_30" v-if="project.amenidades && project.amenidades.length > 0">
                <h4 class="mb_20">Amenidades y Características</h4>
                <div class="row g-3">
                  <div v-for="amenidad in project.amenidades" :key="amenidad" class="col-md-4 col-6">
                    <div class="amenity-item">
                      <i class="icon-Check"></i>
                      <span>{{ amenidad }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floor Plans -->
              <div class="floor-plans mb_30" v-if="project.planos && project.planos.length > 0">
                <h4 class="mb_20">Planos y Modelos</h4>
                <div class="row g-3">
                  <div v-for="plano in project.planos" :key="plano.nombre" class="col-md-6">
                    <div class="plan-card p_20 bg-surface rounded">
                      <h6 class="mb_15">{{ plano.nombre }}</h6>
                      <div class="plan-features mb_15">
                        <span><i class="icon-Bed"></i> {{ plano.dormitorios }} hab</span>
                        <span><i class="icon-Bathtub"></i> {{ plano.baños }} baños</span>
                        <span><i class="icon-Ruler"></i> {{ plano.area }} m²</span>
                      </div>
                      <p class="text-body-2 text_secondary-color mb_15">{{ formatPrice(plano.precio) }}</p>
                      <button class="tf-btn btn-outline w-100">Ver Plano</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="project-location-section" v-if="project.ubicacion">
                <h4 class="mb_20">Ubicación</h4>
                <div class="location-map bg-surface rounded" style="height: 400px;">
                  <div class="map-placeholder d-flex align-items-center justify-content-center h-100">
                    <div class="text-center">
                      <i class="icon-MapPin" style="font-size: 48px; color: var(--primary-color);"></i>
                      <p class="text-body-2 text_secondary-color mt_15">{{ project.ubicacion }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Contact Form -->
            <div class="contact-form-box p_30 bg-white rounded mb_30 sticky-top" style="top: 100px;">
              <h5 class="mb_20">Solicita Información</h5>
              <form @submit.prevent="handleContactSubmit">
                <div class="mb_15">
                  <input 
                    v-model="contactForm.nombre" 
                    type="text" 
                    class="form-control" 
                    placeholder="Nombre completo *"
                    required
                  >
                </div>
                <div class="mb_15">
                  <input 
                    v-model="contactForm.email" 
                    type="email" 
                    class="form-control" 
                    placeholder="Email *"
                    required
                  >
                </div>
                <div class="mb_15">
                  <input 
                    v-model="contactForm.telefono" 
                    type="tel" 
                    class="form-control" 
                    placeholder="Teléfono *"
                    required
                  >
                </div>
                <div class="mb_20">
                  <textarea 
                    v-model="contactForm.mensaje" 
                    class="form-control" 
                    rows="3"
                    placeholder="Mensaje (opcional)"
                  ></textarea>
                </div>
                <div v-if="submitMessage" class="alert mb_20" :class="submitSuccess ? 'alert-success' : 'alert-danger'">
                  {{ submitMessage }}
                </div>
                <button 
                  type="submit" 
                  class="tf-btn btn-bg-primary w-100"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Enviar Solicitud</span>
                  <span v-else>Enviando...</span>
                </button>
                <p class="text-caption text_secondary-color text-center mt_15 mb-0">
                  Respuesta en menos de 24 horas
                </p>
              </form>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions-box p_25 bg-surface rounded mb_30">
              <h6 class="mb_20">Acciones Rápidas</h6>
              <div class="d-grid gap_10">
                <button class="tf-btn btn-outline w-100">
                  <i class="icon-Phone"></i>
                  <span>Llamar Ahora</span>
                </button>
                <button class="tf-btn btn-outline w-100">
                  <i class="icon-WhatsappLogo"></i>
                  <span>WhatsApp</span>
                </button>
                <button class="tf-btn btn-outline w-100" @click="shareProject">
                  <i class="icon-ShareNetwork"></i>
                  <span>Compartir</span>
                </button>
                <button class="tf-btn btn-outline w-100" @click="toggleFavorite">
                  <i :class="isFavorite ? 'icon-HeartFill' : 'icon-Heart'"></i>
                  <span>{{ isFavorite ? 'Guardado' : 'Guardar' }}</span>
                </button>
              </div>
            </div>

            <!-- Developer Info -->
            <div class="developer-box p_25 bg-white rounded" v-if="project.desarrollador">
              <h6 class="mb_20">Desarrollador</h6>
              <div class="d-flex gap_15 mb_15">
                <img :src="project.desarrollador.logo" alt="Logo" class="developer-logo">
                <div>
                  <h6 class="mb_5">{{ project.desarrollador.nombre }}</h6>
                  <p class="text-caption text_secondary-color mb-0">
                    {{ project.desarrollador.proyectos }} proyectos
                  </p>
                </div>
              </div>
              <p class="text-body-2 text_secondary-color mb_15">
                {{ project.desarrollador.descripcion }}
              </p>
              <NuxtLink to="#" class="text_primary-color">Ver más proyectos →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-icon success">
          <i class="icon-CheckCircle"></i>
        </div>
        <h4 class="mb_15">¡Solicitud Enviada!</h4>
        <p class="text-body-2 text_secondary-color mb_30">
          {{ submitMessage }}
        </p>
        <button @click="closeModal" class="tf-btn btn-bg-primary w-100">
          <span>Entendido</span>
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando detalles del proyecto...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useHead } from '#app'

const route = useRoute()
const router = useRouter()
const id = ref(route.params.id)
const canonico = ref(route.params.canonico)

const loading = ref(true)
const project = ref({})
const currentImageIndex = ref(0)
const isFavorite = ref(false)
const showSuccessModal = ref(false)

const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: `Estoy interesado en el proyecto: ${canonico.value}`
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const loadProject = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch(`/api/proyectos/${id.value}`)
    // project.value = response.data
    project.value = {
      id: id.value,
      canonico: canonico.value,
      nombre: 'Torres del Parque',
      ubicacion: 'Laureles, Medellín',
      precioDesde: 350000000,
      descripcion: 'Conjunto residencial con apartamentos de 2 y 3 habitaciones, zonas verdes, gimnasio y piscina. Ubicado cerca de centros comerciales y vías principales.',
      descripcionLarga: 'Este exclusivo proyecto combina diseño contemporáneo con funcionalidad superior. Ubicado en una de las zonas más valoradas, ofrece acceso inmediato a centros comerciales, colegios, universidades y vías principales.',
      imagenes: [
        '/images/section/project-1.jpg',
        '/images/section/project-2.jpg',
        '/images/section/project-3.jpg',
        '/images/section/project-4.jpg',
        '/images/section/project-5.jpg',
        '/images/section/project-6.jpg'
      ],
      estado: 'venta',
      tipo: 'Apartamentos',
      totalUnidades: 120,
      unidadesDisponibles: 24,
      areaDesde: 65,
      fechaEntrega: 'Q4 2026',
      progreso: 65,
      amenidades: ['Piscina', 'Gimnasio', 'Parque infantil', 'Portería 24/7', 'Zona BBQ', 'Salón social'],
      planos: [
        { nombre: 'Tipo A', dormitorios: 2, baños: 2, area: 65, precio: 350000000 },
        { nombre: 'Tipo B', dormitorios: 3, baños: 2, area: 85, precio: 450000000 },
        { nombre: 'Tipo C', dormitorios: 3, baños: 3, area: 105, precio: 580000000 }
      ],
      desarrollador: {
        nombre: 'Constructora Nacional',
        logo: '/images/logo/developer.jpg',
        proyectos: 15,
        descripcion: 'Con más de 20 años de experiencia en el sector constructor.'
      }
    }
  } catch (error) {
    console.error('Error cargando proyecto:', error)
    project.value = {}
  } finally {
    loading.value = false
  }
}

const handleContactSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Consulta enviada exitosamente.'
    submitSuccess.value = true
    showSuccessModal.value = true
    contactForm.value = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: `Estoy interesado en el proyecto: ${canonico.value}`
    }
  } catch (error) {
    console.error('Error enviando formulario:', error)
    submitMessage.value = 'Error al enviar la consulta.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)
}

const getStatusColor = (status) => {
  const colors = { 'venta': 'success', 'construccion': 'warning', 'entrega': 'info', 'agotado': 'secondary' }
  return colors[status] || 'primary'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % project.value.imagenes.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? project.value.imagenes.length - 1 : currentImageIndex.value - 1
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const shareProject = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: project.value.nombre,
        text: project.value.descripcion,
        url: window.location.href
      })
    } catch (error) {
      console.log('Error sharing:', error)
    }
  } else {
    alert('Funcionalidad de compartir no disponible en este navegador')
  }
}

const closeModal = () => {
  showSuccessModal.value = false
}

const mainImage = computed(() => {
  return project.value.imagenes?.[currentImageIndex.value] || ''
})

onMounted(() => {
  loadProject()
})

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.id !== from.params.id || to.params.canonico !== from.params.canonico) {
    id.value = to.params.id
    canonico.value = to.params.canonico
    loadProject()
  }
  next()
})

useHead({
  title: () => project.value.nombre ? `${project.value.nombre} - Proyecto Inmobiliario` : 'Proyecto Inmobiliario',
  meta: [
    { name: 'description', content: () => project.value.descripcion || 'Detalles del proyecto inmobiliario' }
  ]
})
</script>

<style scoped>
.project-gallery {
  position: relative;
}

.main-image {
  overflow: hidden;
  border-radius: 12px;
  height: 500px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.gallery-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-btn:hover {
  background: white;
  transform: scale(1.1);
}

.gallery-btn i {
  font-size: 20px;
}

.image-counter {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.thumbnail-item {
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
}

.thumbnail-item.active {
  border-color: var(--primary-color);
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.feature-box i {
  font-size: 32px;
  color: var(--primary-color);
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: var(--surface-color);
  border-radius: 8px;
}

.amenity-item i {
  color: var(--primary-color);
  font-size: 18px;
}

.plan-card {
  border: 1px solid var(--border-color);
}

.plan-features {
  display: flex;
  gap: 15px;
  font-size: 14px;
}

.plan-features span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.plan-features i {
  color: var(--primary-color);
}

.contact-form-box,
.quick-actions-box,
.developer-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.developer-logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.project-image {
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-badges {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
}

.badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-success {
  background: #10b981;
  color: white;
}

.badge-warning {
  background: #f59e0b;
  color: white;
}

.badge-info {
  background: #3b82f6;
  color: white;
}

.project-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary-color);
  font-size: 14px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.modal-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-icon.success {
  background: var(--success-color);
}

.modal-icon i {
  font-size: 40px;
  color: white;
}

@media (max-width: 768px) {
  .thumbnail-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .main-image {
    height: 300px;
  }
}
</style>
