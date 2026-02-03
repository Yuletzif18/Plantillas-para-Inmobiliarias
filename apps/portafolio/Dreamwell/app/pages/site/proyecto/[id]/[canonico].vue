<template>
  <div>
    <section>
      <div class="cs_height_50 cs_height_lg_50"></div>
      <div class="container">
        <ol class="breadcrumb cs_mb_37">
          <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
          <li class="breadcrumb-item"><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
          <li class="breadcrumb-item active">{{ project.nombre || 'Detalle del Proyecto' }}</li>
        </ol>

        <div v-if="loading" class="text-center py-5">
          <p>Cargando información del proyecto...</p>
        </div>

        <div v-else-if="!project.id" class="text-center py-5">
          <h2>Proyecto no encontrado</h2>
          <NuxtLink to="/site/proyectos" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 cs_mt_30">
            <span class="cs_btn_text">Ver todos los proyectos</span>
          </NuxtLink>
        </div>

        <template v-else>
          <!-- Project Hero -->
          <div class="cs_project_hero cs_radius_20 overflow-hidden cs_mb_30">
            <img :src="project.imagenPrincipal || '/img/card_img_7.jpg'" :alt="project.nombre" class="w-100" style="height: 500px; object-fit: cover;">
          </div>
          
          <!-- Project Gallery -->
          <div v-if="project.galeria && project.galeria.length > 0" class="cs_project_gallery cs_mb_50">
            <div class="row cs_gap_y_20">
              <div v-for="(img, index) in project.galeria.slice(0, 4)" :key="index" class="col-lg-3 col-md-4 col-6">
                <div class="cs_gallery_item cs_radius_10 overflow-hidden">
                  <img :src="img" :alt="`${project.nombre} - Imagen ${index + 1}`" style="width: 100%; height: 200px; object-fit: cover;">
                </div>
              </div>
            </div>
          </div>

          <!-- Project Header -->
          <div class="cs_project_header cs_mb_50">
            <div class="row align-items-end">
              <div class="col-lg-8">
                <h1 class="cs_fs_48 cs_semibold cs_mb_20">{{ project.nombre }}</h1>
                <p class="cs_project_location cs_fs_20">
                  <i class="fa-solid fa-location-dot"></i>{{ project.ubicacion }}
                </p>
              </div>
              <div class="col-lg-4 text-lg-end">
                <div class="cs_project_price">
                  <p class="mb-0 cs_fs_16">Desde</p>
                  <h3 class="cs_fs_36 cs_semibold cs_accent_color">
                    ${{ project.precioDesde?.toLocaleString() }}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="row cs_gap_y_50">
            <div class="col-lg-8">
              <div class="cs_project_content">
                <h2 class="cs_fs_32 cs_semibold cs_mb_30">Descripción del Proyecto</h2>
                <div v-html="project.descripcion"></div>

                <div class="cs_height_40 cs_height_lg_30"></div>

                <h3 class="cs_fs_28 cs_semibold cs_mb_25">Características del Proyecto</h3>
                <div class="row">
                  <div class="col-md-6" v-if="project.totalUnidades">
                    <div class="cs_iconbox cs_style_3 cs_mb_30">
                      <div class="cs_iconbox_icon">
                        <i class="fa-solid fa-building"></i>
                      </div>
                      <div class="cs_iconbox_content">
                        <h4 class="cs_fs_18 cs_semibold">Total Unidades</h4>
                        <p class="mb-0">{{ project.totalUnidades }} unidades</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="project.unidadesDisponibles">
                    <div class="cs_iconbox cs_style_3 cs_mb_30">
                      <div class="cs_iconbox_icon">
                        <i class="fa-solid fa-check-circle"></i>
                      </div>
                      <div class="cs_iconbox_content">
                        <h4 class="cs_fs_18 cs_semibold">Disponibles</h4>
                        <p class="mb-0">{{ project.unidadesDisponibles }} unidades</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="project.areaDesde">
                    <div class="cs_iconbox cs_style_3 cs_mb_30">
                      <div class="cs_iconbox_icon">
                        <i class="fa-solid fa-chart-area"></i>
                      </div>
                      <div class="cs_iconbox_content">
                        <h4 class="cs_fs_18 cs_semibold">Áreas desde</h4>
                        <p class="mb-0">{{ project.areaDesde }} m²</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="project.fechaEntrega">
                    <div class="cs_iconbox cs_style_3 cs_mb_30">
                      <div class="cs_iconbox_icon">
                        <i class="fa-solid fa-calendar"></i>
                      </div>
                      <div class="cs_iconbox_content">
                        <h4 class="cs_fs_18 cs_semibold">Fecha de Entrega</h4>
                        <p class="mb-0">{{ project.fechaEntrega }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="cs_height_40 cs_height_lg_30"></div>

                <h3 class="cs_fs_28 cs_semibold cs_mb_25">Amenidades</h3>
                <div v-if="project.amenidades && project.amenidades.length > 0" class="row">
                  <div class="col-md-6">
                    <ul class="cs_amenities_list">
                      <li v-for="amenidad in project.amenidades.slice(0, Math.ceil(project.amenidades.length / 2))" :key="amenidad">
                        <i class="fa-solid fa-check cs_accent_color"></i>{{ amenidad }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="cs_amenities_list">
                      <li v-for="amenidad in project.amenidades.slice(Math.ceil(project.amenidades.length / 2))" :key="amenidad">
                        <i class="fa-solid fa-check cs_accent_color"></i>{{ amenidad }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="cs_height_40 cs_height_lg_30"></div>

                <h3 class="cs_fs_28 cs_semibold cs_mb_25">Ubicación</h3>
                <div class="cs_map cs_radius_15 overflow-hidden" style="height: 400px; position: relative;">
                  <div v-if="!mapLoaded" class="d-flex align-items-center justify-content-center h-100" style="background: #f0f0f0;">
                    <p>Cargando mapa...</p>
                  </div>
                  <div ref="mapContainer" id="projectMap" style="width: 100%; height: 100%;"></div>
                </div>
              </div>
            </div>

            <!-- Contact Sidebar -->
            <div class="col-lg-4">
              <div class="cs_project_sidebar cs_white_bg cs_radius_15 cs_p_30">
                <h3 class="cs_fs_24 cs_semibold cs_mb_25">Solicitar Información</h3>
                <form @submit.prevent="handleContactSubmit" class="cs_contact_form">
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.nombre" 
                      type="text" 
                      class="cs_form_field" 
                      placeholder="Nombre *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.email" 
                      type="email" 
                      class="cs_form_field" 
                      placeholder="Email *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <input 
                      v-model="contactForm.telefono" 
                      type="tel" 
                      class="cs_form_field" 
                      placeholder="Teléfono *"
                      required
                    >
                  </div>
                  <div class="cs_mb_20">
                    <textarea 
                      v-model="contactForm.mensaje" 
                      class="cs_form_field" 
                      placeholder="Mensaje" 
                      rows="4"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 w-100"
                    :disabled="isSubmitting"
                  >
                    <span class="cs_btn_text">{{ isSubmitting ? 'Enviando...' : 'Enviar Consulta' }}</span>
                  </button>
                </form>
                <div v-if="submitMessage" class="cs_mt_20" :class="submitSuccess ? 'text-success' : 'text-danger'">
                  {{ submitMessage }}
                </div>

                <!-- Legal Links -->
                <div class="cs_height_30 cs_height_lg_20"></div>
                <div class="cs_project_legal_links">
                  <ul class="cs_mp_0">
                    <li>
                      <NuxtLink :to="`/site/proyectoLegal/${id}/${canonico}`">
                        <i class="fa-solid fa-file-lines"></i>Legal del Proyecto
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/site/proyectoPublicidad/${id}/${canonico}`">
                        <i class="fa-solid fa-bullhorn"></i>Política de Publicidad
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/site/proyectoTerminos/${id}/${canonico}`">
                        <i class="fa-solid fa-scroll"></i>Términos del Proyecto
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const canonico = route.params.canonico

const loading = ref(true)
const project = ref({})

const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: `Estoy interesado en el proyecto: ${canonico}`
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const mapContainer = ref(null)
const mapLoaded = ref(false)
let map = null

const loadProject = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch(`/api/proyectos/${id}`)
    // project.value = response.data
    
    project.value = {
      id,
      canonico,
      nombre: 'Torres del Parque',
      ubicacion: 'Laureles, Medellín',
      latitud: 6.2476,
      longitud: -75.5658,
      precioDesde: 350000000,
      descripcion: '<p>Conjunto residencial con apartamentos de 2 y 3 habitaciones, zonas verdes, gimnasio y piscina. Ubicado cerca de centros comerciales y vías principales.</p><p>El proyecto cuenta con acabados de primera calidad, espacios amplios y excelente iluminación natural. Diseñado para ofrecer confort y calidad de vida a las familias.</p>',
      amenidades: ['Piscina', 'Gimnasio', 'Parque infantil', 'Portería 24/7', 'Salón social', 'BBQ', 'Parqueadero visitantes', 'Zona Pet-friendly'],
      totalUnidades: 120,
      unidadesDisponibles: 24,
      areaDesde: 65,
      fechaEntrega: 'Q4 2026',
      imagenPrincipal: '/img/card_img_7.jpg',
      galeria: ['/img/card_img_8.jpg', '/img/card_img_9.jpg', '/img/card_img_10.jpg', '/img/card_img_11.jpg']
    }
    
    // Inicializar mapa después de cargar el proyecto
    nextTick(() => {
      initMap()
    })
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
    contactForm.value = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: `Estoy interesado en el proyecto: ${canonico}`
    }
  } catch (error) {
    submitMessage.value = 'Error al enviar la consulta.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

const initMap = () => {
  if (!project.value.latitud || !project.value.longitud) return
  
  // Cargar Leaflet CSS y JS dinámicamente
  if (!document.getElementById('leaflet-css')) {
    const link = document.createElement('link')
    link.id = 'leaflet-css'
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)
  }
  
  if (!window.L) {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => createMap()
    document.head.appendChild(script)
  } else {
    createMap()
  }
}

const createMap = () => {
  if (!mapContainer.value || map) return
  
  try {
    const lat = project.value.latitud
    const lng = project.value.longitud
    
    map = window.L.map('projectMap').setView([lat, lng], 15)
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map)
    
    const marker = window.L.marker([lat, lng]).addTo(map)
    marker.bindPopup(`<b>${project.value.nombre}</b><br>${project.value.ubicacion}`).openPopup()
    
    mapLoaded.value = true
  } catch (error) {
    console.error('Error al inicializar el mapa:', error)
  }
}

onMounted(() => {
  loadProject()
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})

useHead({
  title: () => project.value.nombre ? `${project.value.nombre} - Proyecto Inmobiliario` : 'Proyecto Inmobiliario',
  meta: [
    { name: 'description', content: () => project.value.descripcion || 'Detalles del proyecto inmobiliario' }
  ]
})
</script>
