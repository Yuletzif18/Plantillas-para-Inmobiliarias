<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
      <div class="spinner text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt_20">Cargando página...</p>
      </div>
    </div>

    <div v-else>
      <!-- Page Title -->
      <section class="page-title">
        <div class="tf-container w-xxl">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <h3>{{ pag.Titulo || 'Sobre Nosotros' }}</h3>
                <div class="breadcrumbs">
                  <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <span>{{ pag.Titulo || 'Nosotros' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Hero -->
      <section class="about-hero py_120">
        <div class="tf-container">
          <!-- Dynamic Content from API -->
          <div v-if="pag.Contenido" class="about-content-html mb_60" v-html="pag.Contenido"></div>

          <!-- Fallback Static Content -->
          <div v-else class="row align-items-center g-5">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="about-image-wrapper">
                <NuxtImg src="/images/section/section-about.jpg" alt="Sobre Nosotros" class="rounded shadow-lg" width="800" height="500" format="webp" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <span class="text_primary-color text-button mb_25 d-block">SOBRE {{ WebsiteName || 'LUMINOR' }}</span>
                <h2 class="mb_30">Expertos en el Mercado Inmobiliario Desde 2010</h2>
                <p class="text-body-1 text_secondary-color mb_30">
                  En {{ WebsiteName || 'Luminor Real Estate' }}, nos dedicamos a hacer realidad los sueños de nuestros clientes. 
                  Con más de 15 años de experiencia en el mercado inmobiliario colombiano, nos hemos 
                  posicionado como líderes en servicios de compra, venta y arriendo de propiedades.
                </p>
                <p class="text-body-1 text_secondary-color mb_40">
                  Nuestro compromiso es brindar asesoría profesional, transparente y personalizada, 
                  acompañando a cada cliente en cada etapa del proceso inmobiliario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- Mission and Vision -->
    <section class="mission-vision py_120 bg-surface">
      <div class="tf-container">
        <div class="row g-5 mb_60">
          <div class="col-12">
            <div class="text-center">
              <h2 class="mb_20">Nuestra Identidad</h2>
              <p class="h6 text_secondary-color">Misión, Visión y Valores que nos guían</p>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="content-box p_50 bg-white rounded h-100 shadow-sm">
              <div class="mission-icon mb_30">
                <i class="icon-Target"></i>
              </div>
              <h3 class="mb_25">Nuestra Misión</h3>
              <p class="text-body-1 text_secondary-color lh-lg">
                Facilitar el acceso a vivienda digna y propiedades de calidad, brindando servicios 
                inmobiliarios integrales con los más altos estándares de ética y profesionalismo.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-box p_50 bg-white rounded h-100 shadow-sm">
              <div class="vision-icon mb_30">
                <i class="icon-Eye"></i>
              </div>
              <h3 class="mb_25">Nuestra Visión</h3>
              <p class="text-body-1 text_secondary-color lh-lg">
                Ser reconocidos como la empresa inmobiliaria líder en Colombia para 2030, 
                destacándonos por nuestra innovación tecnológica y excelencia en el servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py_120">
      <div class="tf-container">
        <div class="cta-box p_80 bg-primary text-white text-center rounded">
          <h2 class="mb_30">¿Listo para Encontrar tu Propiedad Ideal?</h2>
          <p class="h6 mb_50">Contáctanos hoy y deja que nuestro equipo experto te ayude</p>
          <div class="d-flex gap_20 justify-content-center flex-wrap">
            <NuxtLink to="/site/contacto" class="tf-btn btn-bg-white btn-px-40">
              <span>Contactar Ahora</span>
              <span class="bg-effect"></span>
            </NuxtLink>
            <NuxtLink to="/site/inmuebles" class="tf-btn btn-outline-white btn-px-40">
              <span>Ver Propiedades</span>
              <span class="bg-effect"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      </section>
    </div>
  </div>
</template>

<script setup>
/**
 * Página Acerca De (Nosotros) - Presentación de la empresa
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref } from 'vue'

const { $psweb, $inmostore } = useNuxtApp()

const pagId = 9686 // ID fijo para la página "Nosotros"
const loading = ref(true)
const WebsiteName = ref('')
const pag = ref({
  Titulo: '',
  Contenido: ''
})
const children = ref([])

const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  clean = clean.replace(/<!--[\s\S]*?-->/g, '')
  return clean
}

onMounted(async () => {
  try {
    if ($psweb && $inmostore) {
      // Cargar nombre del sitio web
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'

      // Cargar datos de la página
      res = await $psweb.getPagina(pagId)
      const pageData = res.Resultado || res.resultado || {}
      pag.value = {
        Titulo: pageData.Titulo || pageData.titulo || 'Sobre Nosotros',
        Contenido: removeUnnecesaryTags(pageData.Contenido || pageData.contenido || '')
      }

      // Cargar páginas hijas (si existen)
      res = await $psweb.getPaginaChilds?.(pagId, 3)
      children.value = (res.Items || res.items || []).map(child => ({
        ...child,
        Contenido: removeUnnecesaryTags(child.Contenido || child.contenido || '')
      }))

      // Actualizar SEO dinámicamente
      useHead({
        title: `${pag.value.Titulo} - ${WebsiteName.value}`,
        meta: [
          { 
            name: 'description', 
            content: 'Conoce más sobre nuestra empresa inmobiliaria, nuestra misión, visión y valores.' 
          }
        ]
      })
    } else {
      console.error('El plugin PSWeb o InmoStore no está disponible.')
      useHead({
        title: 'Sobre Nosotros - Luminor Real Estate'
      })
    }
  } catch (error) {
    console.error('Error cargando página Nosotros:', error)
    useHead({
      title: 'Sobre Nosotros'
    })
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.about-content-html {
  line-height: 1.8;
}

.about-content-html :deep(h2),
.about-content-html :deep(h3),
.about-content-html :deep(h4) {
  margin-bottom: 30px;
  margin-top: 40px;
  color: var(--title-color);
}

.about-content-html :deep(h2:first-child) {
  margin-top: 0;
}

.about-content-html :deep(p) {
  margin-bottom: 25px;
  color: var(--secondary-color);
  line-height: 1.8;
}

.about-content-html :deep(ul),
.about-content-html :deep(ol) {
  margin-bottom: 30px;
  padding-left: 30px;
}

.about-content-html :deep(li) {
  margin-bottom: 15px;
  color: var(--secondary-color);
  line-height: 1.8;
}

.about-image-wrapper {
  overflow: hidden;
  border-radius: 12px;
}

.about-content {
  padding: 20px;
}

.content-box {
  transition: all 0.3s ease;
}

.content-box:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
  transform: translateY(-5px);
}

.mission-icon,
.vision-icon {
  font-size: 48px;
  color: var(--primary-color);
}

.btn-outline-white {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline-white:hover {
  background: white;
  color: var(--primary-color);
}

.cta-box {
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .about-content {
    padding: 0;
    margin-top: 40px;
  }
  
  .content-box {
    padding: 35px !important;
  }
  
  .cta-box {
    padding: 50px 30px !important;
  }
}
</style>
