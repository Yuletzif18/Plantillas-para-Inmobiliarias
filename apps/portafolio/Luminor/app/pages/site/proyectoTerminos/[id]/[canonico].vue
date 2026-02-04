<script setup>
/**
 * Términos y Condiciones del Proyecto
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()

// Variables del proyecto
const proyectoId = route.params.id
const abreviado = route.params.canonico
const WebsiteName = ref('')
const prj = ref({})
const terminos = ref('')
const projectName = ref('Proyecto')
const loading = ref(true)

// Función para obtener settings del proyecto
const getProyectoSetting = async (key) => {
  try {
    const res = await $inmostore.getProyectoSetting({
      clave: key,
      proyectoId: proyectoId
    })
    return res.resultado || ''
  } catch (error) {
    console.error(`Error obteniendo setting ${key}:`, error)
    return ''
  }
}

// Función para limpiar tags innecesarios
const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  return html
}

const cargarDatosTerminos = async () => {
  loading.value = true
  const idParam = route.params.id
  
  if ($psweb && idParam) {
    try {
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'

      res = await $inmostore.getProyecto(idParam)
      prj.value = res.resultado || {}

      if (!prj.value.proyectoId || prj.value.proyectoId !== idParam) {
        await navigateTo('/site/proyectos')
        return
      }

      terminos.value = removeUnnecesaryTags(await getProyectoSetting('TerminosCondiciones'))
      projectName.value = prj.value.nombreProyecto || 'Proyecto'
      
      useHead({
        title: prj.value.nombreProyecto + ' - Términos - ' + WebsiteName.value,
        meta: [{ name: 'description', content: 'Términos y condiciones del proyecto ' + prj.value.nombreProyecto }]
      })
    } catch (error) {
      console.error('Error cargando términos del proyecto:', error)
      await navigateTo('/site/proyectos')
    }
  } else {
    terminos.value = ''
    projectName.value = 'Proyecto Demo'
    WebsiteName.value = 'Sitio Demo'
  }
  
  loading.value = false
}

onMounted(cargarDatosTerminos)
watch(
  () => [route.params.id, route.params.canonico],
  cargarDatosTerminos
)

// Fallback para el título si no hay datos del backend
useHead({
  title: `${projectName.value} - Términos - ${WebsiteName.value}`,
  meta: [
    { name: 'description', content: 'Términos y condiciones del proyecto.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <!-- Loading State -->
  <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
    <div class="spinner text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt_20">Cargando términos y condiciones...</p>
    </div>
  </div>

  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Términos y Condiciones - {{ projectName }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/proyectos" class="hover-underline-link">Proyectos</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Términos y Condiciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Términos Content -->
    <section class="terminos-content py_90">
      <div class="tf-container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <div class="terminos-text p_40 bg-white rounded">
              <h2 class="mb_30">Términos y Condiciones del Proyecto</h2>
              
              <div v-if="terminos" class="terminos-body" v-html="terminos"></div>
              
              <div v-else class="alert alert-info">
                <p class="mb-0">No hay términos y condiciones disponibles para este proyecto en este momento.</p>
              </div>

              <!-- Default Content if No Términos -->
              <div v-if="!terminos" class="default-terminos-content mt_40">
                <h3 class="mb_20">Disposiciones Generales</h3>
                <p class="mb_20">
                  Al acceder y utilizar este proyecto inmobiliario y sus servicios, usted acepta estar sujeto a estos términos y condiciones.
                </p>
                <h4 class="mb_20">1. Definiciones</h4>
                <p class="mb_20">
                  "Proyecto" se refiere a {{ projectName }} y a todos los bienes e inmuebles asociados a este desarrollo inmobiliario.
                </p>
                <h4 class="mb_20">2. Aceptación de Términos</h4>
                <p class="mb_20">
                  Al utilizar este sitio web y acceder a información sobre el proyecto, usted reconoce que ha leído, entendido y acepta todos los términos establecidos aquí.
                </p>
                <h4 class="mb_20">3. Uso Autorizado</h4>
                <p class="mb_20">
                  Esta información se proporciona únicamente para fines informativos. Cualquier uso no autorizado de este contenido está prohibido.
                </p>
                <h4 class="mb_20">4. Limitación de Responsabilidad</h4>
                <p class="mb_20">
                  {{ WebsiteName }} no será responsable por daños directos, indirectos o consecuentes que resulten del uso de esta información.
                </p>
              </div>

              <!-- Navigation -->
              <div class="navigation-buttons mt_40 pt_30 border-top d-flex gap_15 flex-wrap">
                <NuxtLink to="/site/proyectos" class="btn btn-outline-primary">
                  <i class="icon-arrow-left"></i>
                  Volver a Proyectos
                </NuxtLink>
                <NuxtLink :to="`/site/proyecto/${proyectoId}/${abreviado}`" class="btn btn-primary">
                  Ver Proyecto Completo
                  <i class="icon-arrow-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Info Card -->
            <div class="info-card p_30 bg-white rounded mb_30 sticky-top" style="top: 100px;">
              <h5 class="mb_20">Información del Proyecto</h5>
              
              <div class="info-item mb_20 pb_20 border-bottom" v-if="projectName">
                <p class="text-caption text_secondary-color mb_5">Nombre</p>
                <p class="fw-6">{{ projectName }}</p>
              </div>

              <div class="info-item mb_20 pb_20 border-bottom" v-if="prj.ubicacion">
                <p class="text-caption text_secondary-color mb_5">Ubicación</p>
                <p class="fw-6">{{ prj.ubicacion }}</p>
              </div>

              <div class="info-item mb_20 pb_20 border-bottom" v-if="prj.totalUnidades">
                <p class="text-caption text_secondary-color mb_5">Total de Unidades</p>
                <p class="fw-6">{{ prj.totalUnidades }}</p>
              </div>

              <div class="info-item">
                <p class="text-caption text_secondary-color mb_5">Website</p>
                <p class="fw-6">{{ WebsiteName }}</p>
              </div>
            </div>

            <!-- Important Notice Card -->
            <div class="notice-card p_30 bg-light rounded">
              <h6 class="mb_20"><i class="icon-info-circle"></i> Aviso Importante</h6>
              <p class="text-sm mb-0">
                Estos términos y condiciones son vinculantes. Por favor, léalos cuidadosamente antes de proceder con cualquier transacción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.terminos-text {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.terminos-body {
  line-height: 1.8;
  color: var(--text-color);
}

.terminos-body h1,
.terminos-body h2,
.terminos-body h3,
.terminos-body h4,
.terminos-body h5,
.terminos-body h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--heading-color);
  font-weight: 600;
}

.terminos-body p {
  margin-bottom: 15px;
}

.terminos-body ul,
.terminos-body ol {
  margin-bottom: 15px;
  margin-left: 20px;
}

.terminos-body li {
  margin-bottom: 8px;
}

.default-terminos-content {
  padding: 30px;
  background: var(--surface-color);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.alert {
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--info-color);
}

.alert-info {
  background: rgba(59, 130, 246, 0.1);
  color: var(--text-color);
}

.info-card,
.notice-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.info-card h5,
.notice-card h6 {
  color: var(--heading-color);
  font-weight: 600;
}

.info-item {
  word-break: break-word;
}

.notice-card {
  background: rgba(59, 130, 246, 0.05) !important;
  border-left: 4px solid var(--primary-color);
}

.notice-card h6 {
  color: var(--primary-color);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.notice-card i {
  font-size: 20px;
}

.navigation-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.navigation-buttons .btn {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.navigation-buttons .btn-outline-primary {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.navigation-buttons .btn-outline-primary:hover {
  background: var(--primary-color);
  color: white;
}

.navigation-buttons .btn-primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.navigation-buttons .btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

@media (max-width: 768px) {
  .info-card,
  .notice-card {
    position: static !important;
    top: auto !important;
    margin-bottom: 20px;
  }

  .terminos-text {
    padding: 20px !important;
  }

  .navigation-buttons {
    flex-direction: column;
  }

  .navigation-buttons .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
