<script setup>
/**
 * Información Legal del Proyecto
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

// Variables para configuración del proyecto
const imgPortada = ref('')
const imgLogotipo = ref('')
const avisoLegal = ref('')
const socialLinks = ref({
  facebook: '',
  instagram: '',
  youtube: '',
  whatsapp: '',
  correo: ''
})

// Imagenes demo locales si no hay backend
const demoImgPortada = `/img/card_img_${parseInt(proyectoId) % 12 + 1}.jpg`
const demoImgLogotipo = '/img/logo_demo.png'

// Nombre del proyecto obtenido de la URL o datos locales
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

// Función para limpiar tags innecesarios (similar a Core.RemoveUnnecesaryTags)
const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  // Básicamente, devolvemos el HTML tal cual o lo limpiamos si es necesario
  return html
}

const cargarDatosProyecto = async () => {
  loading.value = true
  // Actualizar los valores de los parámetros
  const idParam = route.params.id
  const canonicoParam = route.params.canonico
  // Imágenes del proyecto desde carpeta local
  const demoImgPortadaActual = `/img/card_img_${parseInt(idParam) % 12 + 1}.jpg`
  const demoImgLogotipoActual = '/img/logo_demo.png'

  if ($psweb && $inmostore && idParam) {
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

      imgPortada.value = await getProyectoSetting('ImgPortada') || demoImgPortadaActual
      imgLogotipo.value = await getProyectoSetting('ImgLogotipo') || demoImgLogotipoActual
      avisoLegal.value = removeUnnecesaryTags(await getProyectoSetting('AvisoLegal'))
      socialLinks.value = {
        facebook: await getProyectoSetting('AdicionalFacebook'),
        instagram: await getProyectoSetting('AdicionalInstagram'),
        youtube: await getProyectoSetting('AdicionalYoutube'),
        whatsapp: await getProyectoSetting('AdicionalWhatsApp'),
        correo: await getProyectoSetting('AdicionalCorreo')
      }
      useHead({
        title: prj.value.nombreProyecto + ' - Legal - ' + WebsiteName.value
      })
      projectName.value = prj.value.nombreProyecto || 'Proyecto'
    } catch (error) {
      console.error('Error cargando información legal del proyecto:', error)
      await navigateTo('/site/proyectos')
    }
  } else {
    imgPortada.value = demoImgPortadaActual
    imgLogotipo.value = demoImgLogotipoActual
    avisoLegal.value = ''
    projectName.value = 'Proyecto Demo'
    WebsiteName.value = 'Sitio Demo'
  }
  loading.value = false
}

onMounted(cargarDatosProyecto)

// Recargar datos cuando cambian los parámetros de la ruta
watch(() => [route.params.id, route.params.canonico], cargarDatosProyecto)

// Fallback para el título si no hay datos del backend
useHead({
  title: () => `Declaración Legal - ${projectName.value}`,
  meta: [{ name: 'description', content: 'Información legal del proyecto inmobiliario.' }]
})
</script>

<template>
  <!-- Loading State -->
  <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
    <div class="spinner text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt_20">Cargando información legal...</p>
    </div>
  </div>

  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Información Legal - {{ projectName }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/proyectos" class="hover-underline-link">Proyectos</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ projectName }}</span>
                <i class="icon-CaretRight"></i>
                <span>Información Legal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="legal-content py_90">
      <div class="tf-container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <!-- Logo y Portada -->
            <div class="legal-header mb_40 p_40 bg-white rounded" v-if="imgLogotipo || imgPortada">
              <div class="text-center mb_30" v-if="imgLogotipo">
                <img :src="imgLogotipo" :alt="projectName" class="logo-legal" style="max-height: 100px; margin-bottom: 20px;">
              </div>
              <div class="portada-image mb_30" v-if="imgPortada">
                <img :src="imgPortada" :alt="projectName" class="rounded" width="100%" style="max-height: 400px; object-fit: cover;">
              </div>
            </div>

            <!-- Legal Text -->
            <div class="legal-text p_40 bg-white rounded">
              <h2 class="mb_30">Declaración Legal</h2>
              
              <div v-if="avisoLegal" class="legal-body" v-html="avisoLegal"></div>
              
              <div v-else class="alert alert-info">
                <p class="mb-0">La información legal de este proyecto está siendo actualizada. Por favor, contáctenos para más detalles.</p>
              </div>

              <!-- Default Content if No Legal Info -->
              <div v-if="!avisoLegal" class="default-legal-content mt_40">
                <h3 class="mb_20">Información Importante</h3>
                <p class="mb_20">
                  {{ projectName }} es un proyecto inmobiliario desarrollado por {{ prj.nombreDesarrollador || 'nuestro equipo' }}.
                </p>
                <p class="mb_20">
                  Para información legal específica, regulaciones locales y detalles de la propiedad, 
                  por favor comuníquese directamente con nuestro equipo de ventas.
                </p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Project Info Card -->
            <div class="project-legal-card p_30 bg-white rounded mb_30 sticky-top" style="top: 100px;">
              <h5 class="mb_20">Información del Proyecto</h5>
              
              <div class="info-item mb_20 pb_20 border-bottom">
                <p class="text-caption text_secondary-color mb_5">Nombre</p>
                <p class="fw-6">{{ projectName }}</p>
              </div>

              <div class="info-item mb_20 pb_20 border-bottom" v-if="prj.ubicacion">
                <p class="text-caption text_secondary-color mb_5">Ubicación</p>
                <p class="fw-6">{{ prj.ubicacion }}</p>
              </div>

              <div class="info-item mb_20 pb_20 border-bottom" v-if="prj.nombreDesarrollador">
                <p class="text-caption text_secondary-color mb_5">Desarrollador</p>
                <p class="fw-6">{{ prj.nombreDesarrollador }}</p>
              </div>

              <div class="info-item mb_20 pb_20 border-bottom" v-if="prj.estado">
                <p class="text-caption text_secondary-color mb_5">Estado</p>
                <p class="fw-6">{{ prj.estado }}</p>
              </div>

              <div class="info-item" v-if="WebsiteName">
                <p class="text-caption text_secondary-color mb_5">Publicado por</p>
                <p class="fw-6">{{ WebsiteName }}</p>
              </div>
            </div>

            <!-- Contact Card -->
            <div class="contact-legal-card p_30 bg-white rounded mb_30">
              <h5 class="mb_20">Contacto</h5>
              
              <div class="contact-options">
                <a v-if="socialLinks.correo" :href="`mailto:${socialLinks.correo}`" class="contact-link d-flex align-items-center gap_10 mb_15">
                  <i class="icon-EnvelopeOpen"></i>
                  <span>{{ socialLinks.correo }}</span>
                </a>

                <a v-if="socialLinks.whatsapp" :href="`https://wa.me/${socialLinks.whatsapp}`" target="_blank" rel="noopener" class="contact-link d-flex align-items-center gap_10 mb_15">
                  <i class="icon-WhatsappLogo"></i>
                  <span>WhatsApp</span>
                </a>

                <a v-if="socialLinks.facebook" :href="socialLinks.facebook" target="_blank" rel="noopener" class="contact-link d-flex align-items-center gap_10 mb_15">
                  <i class="icon-FacebookLogo"></i>
                  <span>Facebook</span>
                </a>

                <a v-if="socialLinks.instagram" :href="socialLinks.instagram" target="_blank" rel="noopener" class="contact-link d-flex align-items-center gap_10 mb_15">
                  <i class="icon-InstagramLogo"></i>
                  <span>Instagram</span>
                </a>

                <a v-if="socialLinks.youtube" :href="socialLinks.youtube" target="_blank" rel="noopener" class="contact-link d-flex align-items-center gap_10 mb-0">
                  <i class="icon-YoutubeLogo"></i>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            <!-- Navigation Card -->
            <div class="navigation-legal-card p_30 bg-surface rounded">
              <h5 class="mb_20">Regresar</h5>
              <NuxtLink :to="`/site/proyecto/${proyectoId}/${abreviado}`" class="tf-btn btn-bg-primary w-100">
                <span>Ver Proyecto Completo</span>
              </NuxtLink>
              <NuxtLink to="/site/proyectos" class="tf-btn btn-outline w-100 mt_15">
                <span>Ver Todos los Proyectos</span>
              </NuxtLink>
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

.spinner {
  text-align: center;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.legal-header {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
}

.logo-legal {
  display: inline-block;
}

.portada-image {
  overflow: hidden;
  border-radius: 8px;
}

.legal-text {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.legal-body {
  line-height: 1.8;
  color: var(--text-color);
}

.legal-body h1,
.legal-body h2,
.legal-body h3,
.legal-body h4,
.legal-body h5,
.legal-body h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--heading-color);
}

.legal-body p {
  margin-bottom: 15px;
}

.legal-body ul,
.legal-body ol {
  margin-bottom: 15px;
  margin-left: 20px;
}

.legal-body li {
  margin-bottom: 8px;
}

.default-legal-content {
  padding: 30px;
  background: var(--surface-color);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.project-legal-card,
.contact-legal-card,
.navigation-legal-card {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.info-item {
  word-break: break-word;
}

.contact-link {
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
}

.contact-link:hover {
  background: var(--surface-color);
  color: var(--primary-color);
}

.contact-link i {
  font-size: 20px;
  color: var(--primary-color);
  min-width: 24px;
  text-align: center;
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

@media (max-width: 768px) {
  .project-legal-card,
  .contact-legal-card,
  .navigation-legal-card {
    position: static !important;
    top: auto !important;
    margin-bottom: 20px;
  }

  .legal-header,
  .legal-text {
    padding: 20px !important;
  }
}
</style>
