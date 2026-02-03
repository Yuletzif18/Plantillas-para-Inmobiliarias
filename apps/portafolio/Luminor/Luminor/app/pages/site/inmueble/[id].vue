<template>
  <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
    <div class="spinner">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt_20">Cargando detalles del inmueble...</p>
    </div>
  </div>

  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>{{ property.titulo || 'Detalle del Inmueble' }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/inmuebles" class="hover-underline-link">Inmuebles</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ property.titulo || 'Detalle' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Property Details -->
    <section class="property-details py_90">
      <div class="tf-container">
        <div class="row">
          <div class="col-lg-8">
            <!-- Gallery -->
            <div class="property-gallery mb_40" v-if="imagenes.length > 0">
              <img :src="imagenes[0]?.rutaImagen" :alt="property.titulo" width="100%" height="500" class="main-image rounded">
              <div class="gallery-thumbs mt_20 d-flex gap_10">
                <img v-for="(image, index) in imagenes" :key="index" :src="image.rutaImagen" :alt="`Gallery ${index + 1}`" width="150" height="100" class="thumb-image rounded">
              </div>
            </div>

            <!-- Property Info -->
            <div class="property-info-section mb_40">
              <div class="d-flex justify-content-between align-items-start mb_30">
                <div>
                  <h2 class="mb_15">{{ property.titulo }}</h2>
                  <div class="property-location d-flex align-items-center gap_10 text_secondary-color" v-if="property.descripcion">
                    <i class="icon-MapPin"></i>
                    <span>{{ property.direccion }}</span>
                  </div>
                </div>
                <div class="property-price text-end">
                  <span class="price h2 text_primary-color">{{ formatearPrecio(property.precio) }}</span>
                  <span v-if="tipoOperacionDescr" class="period text_secondary-color">{{ tipoOperacionDescr }}</span>
                </div>
              </div>

              <!-- Main Features -->
              <div class="property-features-main d-flex gap_30 flex-wrap p_30 bg-surface rounded mb_40">
                <div class="feature-main-item" v-if="c.dormitorios">
                  <i class="icon-Bed feature-icon"></i>
                  <div>
                    <div class="feature-value">{{ c.dormitorios }}</div>
                    <div class="feature-label text_secondary-color">Habitaciones</div>
                  </div>
                </div>
                <div class="feature-main-item" v-if="c.baños">
                  <i class="icon-Bathtub feature-icon"></i>
                  <div>
                    <div class="feature-value">{{ c.baños }}</div>
                    <div class="feature-label text_secondary-color">Baños</div>
                  </div>
                </div>
                <div class="feature-main-item" v-if="c.areaTotal">
                  <i class="icon-Ruler feature-icon"></i>
                  <div>
                    <div class="feature-value">{{ c.areaTotal }}m²</div>
                    <div class="feature-label text_secondary-color">Área</div>
                  </div>
                </div>
                <div class="feature-main-item" v-if="c.parqueaderos">
                  <i class="icon-Car feature-icon"></i>
                  <div>
                    <div class="feature-value">{{ c.parqueaderos }}</div>
                    <div class="feature-label text_secondary-color">Parqueaderos</div>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="property-description mb_40" v-if="property.descripcion">
                <h4 class="mb_20">Descripción</h4>
                <p class="text-body-1 text_secondary-color">{{ property.descripcion }}</p>
              </div>

              <!-- Characteristics Section -->
              <div class="property-characteristics mb_40" v-if="tipoInmuebleDescr || tipoPisoDescr || tipoTechoDescr || estadoActualDescr">
                <h4 class="mb_20">Características</h4>
                <div class="row g-3">
                  <div class="col-md-6" v-if="tipoInmuebleDescr">
                    <div class="characteristic-item d-flex align-items-center gap_10">
                      <i class="icon-Check text_primary-color"></i>
                      <span><strong>Tipo:</strong> {{ tipoInmuebleDescr }}</span>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="tipoPisoDescr">
                    <div class="characteristic-item d-flex align-items-center gap_10">
                      <i class="icon-Check text_primary-color"></i>
                      <span><strong>Piso:</strong> {{ tipoPisoDescr }}</span>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="tipoTechoDescr">
                    <div class="characteristic-item d-flex align-items-center gap_10">
                      <i class="icon-Check text_primary-color"></i>
                      <span><strong>Techo:</strong> {{ tipoTechoDescr }}</span>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="estadoActualDescr">
                    <div class="characteristic-item d-flex align-items-center gap_10">
                      <i class="icon-Check text_primary-color"></i>
                      <span><strong>Estado:</strong> {{ estadoActualDescr }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Services/Amenities -->
              <div class="property-services mb_40" v-if="servicios.length > 0">
                <h4 class="mb_20">Servicios</h4>
                <div class="row g-3">
                  <div class="col-md-6" v-for="(servicio, index) in servicios" :key="index">
                    <div class="service-item d-flex align-items-center gap_10">
                      <i class="icon-Check text_primary-color"></i>
                      <span>{{ servicio.nombre }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 3D View -->
              <div class="property-3d-view mb_40" v-if="show3dView">
                <h4 class="mb_20">Vista 3D</h4>
                <div class="view-3d-container rounded" style="height: 400px; background: #e0e0e0; display: flex; align-items: center; justify-content: center;">
                  <p class="text_secondary-color">Visualización 3D disponible</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Contact Form -->
            <div class="contact-form-card mb_30 p_30 bg-surface rounded">
              <h5 class="mb_20">Contactar Sobre este Inmueble</h5>
              
              <form @submit.prevent="handleContactSubmit">
                <div class="form-group mb_15">
                  <label class="form-label mb_8">Nombre *</label>
                  <input v-model="contactForm.nombre" type="text" class="form-control" placeholder="Tu nombre" required>
                </div>
                <div class="form-group mb_15">
                  <label class="form-label mb_8">Email *</label>
                  <input v-model="contactForm.email" type="email" class="form-control" placeholder="Tu email" required>
                </div>
                <div class="form-group mb_15">
                  <label class="form-label mb_8">Teléfono *</label>
                  <input v-model="contactForm.telefono" type="tel" class="form-control" placeholder="Tu teléfono" required>
                </div>
                <div class="form-group mb_20">
                  <label class="form-label mb_8">Mensaje</label>
                  <textarea v-model="contactForm.mensaje" class="form-control" rows="4" placeholder="Tu mensaje"></textarea>
                </div>

                <div v-if="submitMessage" class="alert mb_20" :class="submitSuccess ? 'alert-success' : 'alert-danger'">
                  {{ submitMessage }}
                </div>

                <button type="submit" class="tf-btn btn-bg-primary w-100" :disabled="isSubmitting">
                  <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Consulta' }}</span>
                  <span class="bg-effect"></span>
                </button>
              </form>
            </div>

            <!-- Property Info Card -->
            <div class="property-info-card mb_30 p_30 bg-surface rounded">
              <h5 class="mb_20">Información del Inmueble</h5>
              <div class="info-item mb_15 pb_15 border-bottom">
                <p class="text_secondary-color text-caption">ID del Inmueble</p>
                <p class="fw-6">{{ id }}</p>
              </div>
              <div class="info-item mb_15 pb_15 border-bottom" v-if="tipoInmuebleDescr">
                <p class="text_secondary-color text-caption">Tipo de Inmueble</p>
                <p class="fw-6">{{ tipoInmuebleDescr }}</p>
              </div>
              <div class="info-item mb_15 pb_15 border-bottom" v-if="estadoActualDescr">
                <p class="text_secondary-color text-caption">Estado</p>
                <p class="fw-6">{{ estadoActualDescr }}</p>
              </div>
              <div class="info-item" v-if="WebsiteName">
                <p class="text_secondary-color text-caption">Publicado por</p>
                <p class="fw-6">{{ WebsiteName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * Detalle del inmueble.
 * Basado en lógica avanzada con plugins y datos reales.
 */
import { useNuxtApp } from '#app'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

const { $psweb, $inmostore, $geografico } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const id = ref(route.params.id)

// Datos principales
const WebsiteName = ref('')
const simbolo = ref('')
const property = ref({})
const tipoInmuebleDescr = ref('Cargando...')
const tipoOperacionDescr = ref('...')
const c = ref({})
const tipoPisoDescr = ref('...')
const tipoTechoDescr = ref('...')
const estadoActualDescr = ref('...')
const servicios = ref([])
const ambientes = ref([])
const imagenes = ref([])
const show3dView = ref(false)

// Formulario de contacto
const loading = ref(true)
const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: `Estoy interesado en el inmueble con ID: ${id.value}`
})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Formatear precio
const formatearPrecio = (precio) => {
  if (typeof precio !== 'number' || isNaN(precio)) {
    return `${simbolo.value} 0`
  }
  const locale = 'es-ES'
  const options = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
  const formattedPrice = new Intl.NumberFormat(locale, options).format(precio)
  return `${simbolo.value} ${formattedPrice}`
}

const toSiNo = (value) => {
  return value ? 'Sí' : 'No'
}

const handleContactSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  try {
    // Aquí se implementaría el envío real del formulario a la API
    // await $fetch('/api/contacto', { method: 'POST', body: contactForm.value })
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Consulta enviada exitosamente. Nos pondremos en contacto pronto.'
    submitSuccess.value = true
    contactForm.value = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: `Estoy interesado en el inmueble con ID: ${id.value}`
    }
  } catch (error) {
    console.error('Error enviando formulario:', error)
    submitMessage.value = 'Error al enviar la consulta. Por favor, intente nuevamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

const cargarDatosInmueble = async (nuevoId) => {
  loading.value = true
  if ($psweb && $inmostore && $geografico) {
    try {
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) console.error('API: ' + res.operacion.mensaje)
      WebsiteName.value = res.resultado || '---'

      // Obtener datos del inmueble
      res = await $inmostore.getInmueble(nuevoId)
      property.value = res.resultado || {}

      if (property.value.tipoInmueble) {
        res = await $inmostore.getElemento(property.value.tipoInmueble)
        tipoInmuebleDescr.value = (res && typeof res === 'object' && res.resultado && typeof res.resultado === 'object' && typeof res.resultado.nombre === 'string') ? res.resultado.nombre : ''
      }

      if (property.value.tipoOperacion) {
        res = await $inmostore.getElemento(property.value.tipoOperacion)
        tipoOperacionDescr.value = 'En ' + ((res && typeof res === 'object' && res.resultado && typeof res.resultado === 'object' && typeof res.resultado.nombre === 'string') ? res.resultado.nombre : '')
      }

      if (property.value.precioMoneda) {
        res = await $geografico.getInfoPais(property.value.precioMoneda)
        simbolo.value = res.info?.monedaSimbolo || ''
      }

      res = await $inmostore.getCaracteristicas(nuevoId)
      c.value = res.resultado || {}

      if (c.value.tipoPiso) {
        res = await $inmostore.getElemento(c.value.tipoPiso)
        tipoPisoDescr.value = (res && typeof res === 'object' && res.resultado && typeof res.resultado === 'object' && typeof res.resultado.nombre === 'string') ? res.resultado.nombre : ''
      }
      if (c.value.tipoTecho) {
        res = await $inmostore.getElemento(c.value.tipoTecho)
        tipoTechoDescr.value = (res && typeof res === 'object' && res.resultado && typeof res.resultado === 'object' && typeof res.resultado.nombre === 'string') ? res.resultado.nombre : ''
      }
      if (c.value.estadoActual) {
        res = await $inmostore.getElemento(c.value.estadoActual)
        estadoActualDescr.value = (res && typeof res === 'object' && res.resultado && typeof res.resultado === 'object' && typeof res.resultado.nombre === 'string') ? res.resultado.nombre : ''
      }

      res = await $inmostore.listPropiedadesInmueble(nuevoId, 1)
      servicios.value = res.items || []

      res = await $inmostore.listPropiedadesInmueble(nuevoId, 0)
      ambientes.value = res.items || []

      res = await $inmostore.listImagenes(0, nuevoId)
      imagenes.value = res.items || []

      res = await $inmostore.listEscenas(0, nuevoId)
      show3dView.value = (res.items && res.items.length > 0)

      useHead({
        title: property.value?.titulo ? property.value.titulo + ' - ' + WebsiteName.value : 'Detalle del Inmueble',
        meta: [
          {
            name: 'description',
            content: property.value?.descripcion ? property.value.descripcion.substring(0, 160) : 'Detalles de la propiedad'
          }
        ]
      })
    } catch (error) {
      console.error('Error cargando inmueble:', error)
    } finally {
      loading.value = false
    }
  } else {
    console.error('El plugin PSWeb, $inmostore o $geografico no está disponible.')
    loading.value = false
  }
}

onMounted(() => {
  cargarDatosInmueble(id.value)
})

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.id !== from.params.id) {
    id.value = to.params.id
    cargarDatosInmueble(id.value)
  }
  next()
})
</script>

<style scoped>
.loading-container {
  background: white;
}

.spinner {
  text-align: center;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.feature-main-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.feature-icon {
  font-size: 32px;
  color: var(--primary-color);
}

.feature-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.characteristic-item i,
.service-item i {
  font-size: 20px;
}

.property-info-card {
  position: sticky;
  top: 100px;
}

.contact-form-card {
  position: sticky;
  top: 100px;
}
</style>
