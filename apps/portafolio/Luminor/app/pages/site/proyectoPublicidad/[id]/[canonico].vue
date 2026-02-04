<script setup>
/**
 * Información de Publicidad del Proyecto
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
const loading = ref(true)

// Variables para configuración del proyecto
const imgPortada = ref('')
const imgLogotipo = ref('')
const publicidad = ref('')
const socialLinks = ref({
  facebook: '',
  instagram: '',
  youtube: '',
  whatsapp: '',
  correo: ''
})

// Nombre del proyecto obtenido de la URL o datos locales
const projectName = ref('Proyecto')

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

const cargarDatosPublicidad = async () => {
  loading.value = true
  const idParam = route.params.id
  // Imágenes del proyecto desde carpeta local
  const demoImgPortadaActual = `/img/card_img_${parseInt(idParam) % 12 + 1}.jpg`
  const demoImgLogotipoActual = '/img/logo_demo.png'

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

      imgPortada.value = (await getProyectoSetting('ImgPortada')) || demoImgPortadaActual
      imgLogotipo.value = (await getProyectoSetting('ImgLogotipo')) || demoImgLogotipoActual
      publicidad.value = removeUnnecesaryTags(await getProyectoSetting('Publicidad'))
      socialLinks.value = {
        facebook: await getProyectoSetting('AdicionalFacebook'),
        instagram: await getProyectoSetting('AdicionalInstagram'),
        youtube: await getProyectoSetting('AdicionalYoutube'),
        whatsapp: await getProyectoSetting('AdicionalWhatsApp'),
        correo: await getProyectoSetting('AdicionalCorreo')
      }

      projectName.value = prj.value.nombreProyecto || 'Proyecto'
      useHead({
        title: prj.value.nombreProyecto + ' - Publicidad - ' + WebsiteName.value,
        meta: [{ name: 'description', content: 'Información de publicidad del proyecto ' + prj.value.nombreProyecto }]
      })
    } catch (error) {
      console.error('Error cargando información de publicidad del proyecto:', error)
      await navigateTo('/site/proyectos')
    }
  } else {
    imgPortada.value = demoImgPortadaActual
    imgLogotipo.value = demoImgLogotipoActual
    publicidad.value = ''
    projectName.value = 'Proyecto Demo'
    WebsiteName.value = 'Sitio Demo'
  }
  
  loading.value = false
}

onMounted(cargarDatosPublicidad)
watch(
  () => [route.params.id, route.params.canonico],
  cargarDatosPublicidad
)

// Fallback para el título si no hay datos del backend
useHead({
  title: `${projectName.value} - Publicidad - ${WebsiteName.value}`,
  meta: [
    { name: 'description', content: 'Información de publicidad del proyecto.' },
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
      <p class="mt_20">Cargando información de publicidad...</p>
    </div>
  </div>

  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>Publicidad - {{ projectName }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <NuxtLink to="/site/proyectos" class="hover-underline-link">Proyectos</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>Publicidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Publicidad Content -->
    <section class="publicidad-content py_90">
      <div class="tf-container">
        <!-- Header Banner -->
        <div class="row mb_50">
          <div class="col-12">
            <div class="publicidad-banner rounded overflow-hidden">
              <img v-if="imgPortada" :src="imgPortada" :alt="projectName" class="w-100" style="object-fit: cover; height: 400px;">
              <div v-else class="placeholder-image d-flex align-items-center justify-content-center" style="height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <p class="text-center">{{ projectName }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Row -->
        <div class="row">
          <!-- Logo and Info -->
          <div class="col-lg-3 mb_40">
            <div class="publicidad-sidebar sticky-top" style="top: 100px;">
              <!-- Logo -->
              <div class="logo-section mb_40 text-center">
                <img v-if="imgLogotipo" :src="imgLogotipo" :alt="projectName + ' logo'" class="img-fluid" style="max-width: 200px; height: auto;">
                <div v-else class="placeholder-logo d-flex align-items-center justify-content-center" style="width: 150px; height: 150px; background: #f0f0f0; border-radius: 8px; margin: 0 auto;">
                  <i class="icon-building" style="font-size: 48px; color: #999;"></i>
                </div>
              </div>

              <!-- Project Info -->
              <div class="project-info p_20 bg-surface rounded mb_30">
                <h5 class="mb_15">{{ projectName }}</h5>
                <div class="info-item mb_15 pb_15 border-bottom" v-if="prj.ubicacion">
                  <p class="text-caption text_secondary-color mb_5">Ubicación</p>
                  <p class="fw-6">{{ prj.ubicacion }}</p>
                </div>
                <div class="info-item mb_15 pb_15 border-bottom" v-if="prj.precioDesde">
                  <p class="text-caption text_secondary-color mb_5">Precio Desde</p>
                  <p class="fw-6">{{ prj.precioDesde }}</p>
                </div>
                <div class="info-item" v-if="prj.totalUnidades">
                  <p class="text-caption text_secondary-color mb_5">Unidades</p>
                  <p class="fw-6">{{ prj.totalUnidades }}</p>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-links-section p_20 bg-surface rounded">
                <h6 class="mb_20">Contáctenos</h6>
                <div class="social-links d-flex flex-column gap_12">
                  <a v-if="socialLinks.facebook" :href="socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="social-link facebook d-flex align-items-center gap_10">
                    <i class="icon-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a v-if="socialLinks.instagram" :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="social-link instagram d-flex align-items-center gap_10">
                    <i class="icon-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a v-if="socialLinks.youtube" :href="socialLinks.youtube" target="_blank" rel="noopener noreferrer" class="social-link youtube d-flex align-items-center gap_10">
                    <i class="icon-youtube"></i>
                    <span>YouTube</span>
                  </a>
                  <a v-if="socialLinks.whatsapp" :href="`https://wa.me/${socialLinks.whatsapp}`" target="_blank" rel="noopener noreferrer" class="social-link whatsapp d-flex align-items-center gap_10">
                    <i class="icon-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a v-if="socialLinks.correo" :href="`mailto:${socialLinks.correo}`" class="social-link email d-flex align-items-center gap_10">
                    <i class="icon-mail"></i>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Publicidad Description -->
          <div class="col-lg-9">
            <div class="publicidad-description p_40 bg-white rounded">
              <h2 class="mb_30">Información de Publicidad</h2>
              
              <div v-if="publicidad" class="publicidad-body" v-html="publicidad"></div>
              
              <div v-else class="alert alert-info">
                <p class="mb-0">No hay información de publicidad disponible para este proyecto en este momento.</p>
              </div>

              <!-- Default Content if No Publicidad -->
              <div v-if="!publicidad" class="default-publicidad-content mt_40">
                <h3 class="mb_20">Oportunidad de Publicidad</h3>
                <p class="mb_20">
                  {{ projectName }} es un proyecto inmobiliario destacado que ofrece excelentes oportunidades de inversión 
                  y residencia en una ubicación privilegiada.
                </p>
                <h4 class="mb_20">Detalles del Proyecto</h4>
                <p class="mb_20">
                  Este proyecto cuenta con características modernas y servicios de alta calidad, diseñado para satisfacer 
                  las necesidades de nuestros clientes más exigentes.
                </p>
                <h4 class="mb_20">¿Interesado en Publicidad?</h4>
                <p class="mb_20">
                  Contáctenos a través de cualquiera de nuestros canales disponibles en el panel lateral para obtener 
                  información sobre oportunidades de publicidad para este proyecto.
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

.publicidad-banner {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.placeholder-image {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.logo-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.placeholder-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-info,
.social-links-section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.project-info h5 {
  color: var(--heading-color);
  font-weight: 600;
}

.info-item {
  word-break: break-word;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-link {
  padding: 10px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateX(4px);
}

.social-link.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
}

.social-link.instagram:hover {
  background: #e4405f;
  border-color: #e4405f;
}

.social-link.youtube:hover {
  background: #ff0000;
  border-color: #ff0000;
}

.social-link.whatsapp:hover {
  background: #25d366;
  border-color: #25d366;
}

.social-link.email:hover {
  background: #ea4335;
  border-color: #ea4335;
}

.social-link i {
  font-size: 18px;
}

.publicidad-description {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.publicidad-body {
  line-height: 1.8;
  color: var(--text-color);
}

.publicidad-body h1,
.publicidad-body h2,
.publicidad-body h3,
.publicidad-body h4,
.publicidad-body h5,
.publicidad-body h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--heading-color);
}

.publicidad-body p {
  margin-bottom: 15px;
}

.publicidad-body ul,
.publicidad-body ol {
  margin-bottom: 15px;
  margin-left: 20px;
}

.publicidad-body li {
  margin-bottom: 8px;
}

.default-publicidad-content {
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
  .publicidad-sidebar {
    position: static !important;
    top: auto !important;
    margin-bottom: 20px;
  }

  .publicidad-description {
    padding: 20px !important;
  }

  .navigation-buttons {
    flex-direction: column;
  }

  .navigation-buttons .btn {
    width: 100%;
    justify-content: center;
  }

  .publicidad-banner {
    height: 250px !important;
  }

  .publicidad-banner img {
    height: 250px !important;
  }
}
</style>
