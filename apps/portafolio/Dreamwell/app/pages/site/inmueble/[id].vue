<template>
  <div>
    <!-- Start Property Details Header -->
    <section>
      <div class="cs_height_50 cs_height_lg_50"></div>
      <div class="container">
        <ol class="breadcrumb cs_mb_37">
          <li class="breadcrumb-item"><NuxtLink to="/site">Inicio</NuxtLink></li>
          <li class="breadcrumb-item"><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
          <li class="breadcrumb-item active">{{ property.titulo || 'Detalle del Inmueble' }}</li>
        </ol>

        <div v-if="loading" class="text-center py-5">
          <p>Cargando información del inmueble...</p>
        </div>

        <div v-else-if="!property.id" class="text-center py-5">
          <h2>Inmueble no encontrado</h2>
          <NuxtLink to="/site/inmuebles" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_fs_15 cs_radius_7 cs_mt_30">
            <span class="cs_btn_text">Ver todos los inmuebles</span>
          </NuxtLink>
        </div>

        <template v-else>
          <div class="cs_property_details_header">
            <div class="cs_property_details_header_left">
              <h1 class="cs_fs_36 cs_semibold cs_mb_12">{{ property.titulo }}</h1>
              <p class="cs_property_location cs_mb_20">
                <i class="fa-solid fa-location-dot"></i>{{ property.ubicacion }}
              </p>
              <ul class="cs_property_meta_list">
                <li v-if="property.habitaciones">
                  <i class="fa-solid fa-bed"></i>{{ property.habitaciones }} Habitaciones
                </li>
                <li v-if="property.banos">
                  <i class="fa-solid fa-bath"></i>{{ property.banos }} Baños
                </li>
                <li v-if="property.area">
                  <i class="fa-solid fa-chart-area"></i>{{ property.area }} m²
                </li>
                <li v-if="property.parqueaderos">
                  <i class="fa-solid fa-car"></i>{{ property.parqueaderos }} Parqueaderos
                </li>
              </ul>
            </div>
            <div class="cs_property_details_header_right">
              <h3 class="cs_fs_36 cs_semibold cs_accent_color cs_mb_5">
                ${{ property.precio?.toLocaleString() }}
              </h3>
              <p class="cs_property_type">{{ property.operacion }}</p>
            </div>
          </div>

          <div class="cs_height_40 cs_height_lg_30"></div>

          <!-- Property Images Gallery -->
          <div class="cs_property_gallery">
            <div class="cs_property_main_image cs_radius_15 overflow-hidden">
              <img 
                :src="property.imagenPrincipal || property.imagen || '/img/card_img_1.jpg'" 
                :alt="property.titulo"
                style="width: 100%; height: 500px; object-fit: cover;"
              >
            </div>
            <div v-if="property.imagenes && property.imagenes.length > 0" class="cs_property_thumbnail_gallery cs_mt_20">
              <div class="row cs_gap_y_20">
                <div v-for="(img, index) in property.imagenes.slice(0, 4)" :key="index" class="col-lg-3 col-md-4 col-6">
                  <div class="cs_property_thumbnail cs_radius_10 overflow-hidden">
                    <img :src="img" :alt="`${property.titulo} - Imagen ${index + 1}`" style="width: 100%; height: 200px; object-fit: cover;">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cs_height_60 cs_height_lg_40"></div>

          <div class="row cs_gap_y_40">
            <!-- Property Description -->
            <div class="col-lg-8">
              <div class="cs_property_details_content">
                <h2 class="cs_fs_28 cs_semibold cs_mb_25">Descripción</h2>
                <div v-html="property.descripcion || 'No hay descripción disponible para esta propiedad.'"></div>

                <div class="cs_height_40 cs_height_lg_30"></div>

                <h3 class="cs_fs_24 cs_semibold cs_mb_20">Características</h3>
                <ul class="cs_features_list">
                  <li v-if="property.anoConstructruction">
                    <strong>Año de Construcción:</strong> {{ property.anoConstructruction }}
                  </li>
                  <li v-if="property.estrato">
                    <strong>Estrato:</strong> {{ property.estrato }}
                  </li>
                  <li v-if="property.administracion">
                    <strong>Administración:</strong> ${{ property.administracion.toLocaleString() }}
                  </li>
                  <li v-if="property.estado">
                    <strong>Estado:</strong> {{ property.estado }}
                  </li>
                </ul>

                <div v-if="property.caracteristicas && property.caracteristicas.length > 0" class="cs_height_30 cs_height_lg_20"></div>
                
                <div v-if="property.caracteristicas && property.caracteristicas.length > 0" class="row">
                  <div class="col-lg-6">
                    <ul class="cs_amenities_list">
                      <li v-for="caracteristica in property.caracteristicas.slice(0, Math.ceil(property.caracteristicas.length / 2))" :key="caracteristica">
                        <i class="fa-solid fa-check cs_accent_color"></i>{{ caracteristica }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="cs_amenities_list">
                      <li v-for="caracteristica in property.caracteristicas.slice(Math.ceil(property.caracteristicas.length / 2))" :key="caracteristica">
                        <i class="fa-solid fa-check cs_accent_color"></i>{{ caracteristica }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="cs_height_40 cs_height_lg_30"></div>

                <h3 class="cs_fs_24 cs_semibold cs_mb_20">Ubicación</h3>
                <div class="cs_map cs_radius_15 overflow-hidden" style="height: 400px; position: relative;">
                  <div v-if="!mapLoaded" class="d-flex align-items-center justify-content-center h-100" style="background: #f0f0f0;">
                    <p>Cargando mapa...</p>
                  </div>
                  <div ref="mapContainer" id="propertyMap" style="width: 100%; height: 100%;"></div>
                </div>
              </div>
            </div>

            <!-- Contact Form Sidebar -->
            <div class="col-lg-4">
              <div class="cs_property_sidebar cs_white_bg cs_radius_15 cs_p_30">
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

                <div class="cs_height_30 cs_height_lg_20"></div>

                <div class="cs_agent_info cs_p_20 cs_light_gray_bg cs_radius_10">
                  <h4 class="cs_fs_18 cs_semibold cs_mb_15">Asesor Asignado</h4>
                  <p v-if="property.asesor" class="mb-0">
                    <strong>{{ property.asesor.nombre }}</strong><br>
                    <a :href="`tel:${property.asesor.telefono}`">{{ property.asesor.telefono }}</a><br>
                    <a :href="`mailto:${property.asesor.email}`">{{ property.asesor.email }}</a>
                  </p>
                  <p v-else class="mb-0">Información no disponible</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="cs_height_130 cs_height_lg_80"></div>
    </section>
    <!-- End Property Details -->
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const loading = ref(true)
const property = ref({})

const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: `Estoy interesado en el inmueble con ID: ${id}`
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const mapContainer = ref(null)
const mapLoaded = ref(false)
let map = null

// Cargar detalles del inmueble
const loadProperty = async () => {
  loading.value = true
  try {
    // Aquí se haría la llamada a la API
    // const response = await $fetch(`/api/inmuebles/${id}`)
    // property.value = response.data

    // Datos de ejemplo
    property.value = {
      id,
      titulo: 'Villa Moderna con Vista al Mar',
      ubicacion: 'Cartagena, Colombia',
      latitud: 10.3910485,
      longitud: -75.4794257,
      precio: 1250000000,
      operacion: 'Venta',
      habitaciones: 4,
      banos: 3,
      area: 350,
      parqueaderos: 2,
      descripcion: '<p>Hermosa villa moderna ubicada frente al mar con acabados de lujo y amplios espacios. Perfecta para familias que buscan confort y exclusividad.</p><p>La propiedad cuenta con excelente iluminación natural, terrazas amplias y acceso privado a la playa.</p>',
      caracteristicas: ['Vista al mar', 'Terraza amplia', 'Cocina integral', 'Zona BBQ', 'Aire acondicionado', 'Piscina privada', 'Cerca a restaurantes', 'Zona de servicio'],
      imagenPrincipal: '/img/card_img_1.jpg',
      imagenes: ['/img/slider_nav_1.jpg', '/img/slider_nav_2.jpg', '/img/slider_nav_3.jpg', '/img/slider_nav_4.jpg'],
      anoConstructruction: 2020,
      estrato: 6,
      administracion: 800000,
      estado: 'Nuevo',
      asesor: {
        nombre: 'Carlos Rodríguez',
        telefono: '+57 300 123 4567',
        email: 'carlos.rodriguez@inmobiliaria.com'
      }
    }
    
    // Inicializar mapa después de cargar la propiedad
    nextTick(() => {
      initMap()
    })
  } catch (error) {
    console.error('Error cargando inmueble:', error)
    property.value = {}
  } finally {
    loading.value = false
  }
}

const handleContactSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Aquí se implementaría el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitMessage.value = 'Consulta enviada exitosamente. Nos pondremos en contacto pronto.'
    submitSuccess.value = true
    
    contactForm.value = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: `Estoy interesado en el inmueble con ID: ${id}`
    }
  } catch (error) {
    submitMessage.value = 'Error al enviar la consulta. Por favor, intente nuevamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

const initMap = () => {
  if (!property.value.latitud || !property.value.longitud) return
  
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
    const lat = property.value.latitud
    const lng = property.value.longitud
    
    map = window.L.map('propertyMap').setView([lat, lng], 15)
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map)
    
    const marker = window.L.marker([lat, lng]).addTo(map)
    marker.bindPopup(`<b>${property.value.titulo}</b><br>${property.value.ubicacion}`).openPopup()
    
    mapLoaded.value = true
  } catch (error) {
    console.error('Error al inicializar el mapa:', error)
  }
}

onMounted(() => {
  loadProperty()
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})

useHead({
  title: () => property.value.titulo ? `${property.value.titulo} - Detalle del Inmueble` : 'Detalle del Inmueble',
  meta: [
    { 
      name: 'description', 
      content: () => property.value.descripcion ? property.value.descripcion.substring(0, 160) : 'Detalles de la propiedad'
    }
  ]
})
</script>
