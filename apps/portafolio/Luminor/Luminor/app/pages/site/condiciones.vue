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
                <h3>{{ pag.titulo || 'Términos y Condiciones' }}</h3>
                <div class="breadcrumbs">
                  <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <span>{{ pag.titulo || 'Términos y Condiciones' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="legal-content py_90">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="legal-box p_40 bg-white rounded">
                <!-- Dynamic Content from API -->
                <div v-if="pag.contenido" class="legal-content-html" v-html="pag.contenido"></div>

                <!-- Fallback Content (if no API content) -->
                <div v-else>
                  <div class="legal-header mb_40">
                    <p class="text-caption text_secondary-color mb_10">Última actualización: 6 de Noviembre de 2025</p>
                    <h2 class="mb_20">Términos y Condiciones de Uso</h2>
                    <p class="text-body-1 text_secondary-color">
                      Bienvenido a {{ WebsiteName }}. Estos términos y condiciones describen las reglas y 
                      regulaciones para el uso de nuestro sitio web y servicios.
                    </p>
                  </div>

                  <div class="legal-section mb_40">
                    <h4 class="mb_20">1. Aceptación de los Términos</h4>
                    <p class="text-body-2 text_secondary-color mb_15">
                      Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones 
                      de uso. Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio web.
                    </p>
                    <p class="text-body-2 text_secondary-color">
                      Nos reservamos el derecho de actualizar estos términos en cualquier momento sin previo aviso. 
                      Es su responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.
                    </p>
                  </div>

                  <div class="legal-section mb_40">
                    <h4 class="mb_20">2. Ley Aplicable</h4>
                    <p class="text-body-2 text_secondary-color mb_15">
                      Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia.
                    </p>
                  </div>
                </div>

                <div class="legal-footer p_30 bg-surface rounded text-center">
                  <p class="text-body-2 text_secondary-color mb_15">
                    Al utilizar nuestros servicios, usted reconoce que ha leído y comprendido estos términos 
                    y acepta estar legalmente obligado por los mismos.
                  </p>
                  <NuxtLink to="/site/contacto" class="tf-btn btn-bg-primary">
                    <span>Contactar con Soporte</span>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-3 offset-lg-1 d-none d-lg-block">
              <div class="sidebar-legal sticky-top" style="top: 100px;">
                <h6 class="mb_20">Documentos Relacionados</h6>
                <ul class="legal-links">
                  <li>
                    <NuxtLink to="/site/condiciones" class="active">
                      <i class="icon-FileText"></i>
                      <span>Términos y Condiciones</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/site/privacidad">
                      <i class="icon-Shield"></i>
                      <span>Política de Privacidad</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/site/legal">
                      <i class="icon-Scales"></i>
                      <span>Aviso Legal</span>
                    </NuxtLink>
                  </li>
                </ul>

                <div class="help-box p_20 bg-surface rounded mt_30">
                  <i class="icon-Question"></i>
                  <h6 class="mb_10">¿Necesitas Ayuda?</h6>
                  <p class="text-caption text_secondary-color mb_15">
                    Nuestro equipo está disponible para resolver tus dudas
                  </p>
                  <NuxtLink to="/site/contacto" class="tf-btn btn-outline w-100">
                    <span>Contactar</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
/**
 * Términos y Condiciones de Servicio
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()

// De acuerdo al código original, la página de condiciones tiene ID fijo (9683)
// pero podría venir como parámetro
const pagId = route.params.id || 9683

// State
const WebsiteName = ref('')
const pag = ref({})
const children = ref([])
const loading = ref(true)

// Helper functions
const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  return html
}

// Load page data
const cargarDatos = async () => {
  loading.value = true
  try {
    // Get website name
    let res = await $inmostore.getSetting('websitename')
    if (res.operacion && res.operacion.codigo == 1) {
      console.error('API: ' + res.operacion.mensaje)
    }
    WebsiteName.value = res.resultado || '---'

    // Get conditions page data (id 9683 by default)
    res = await $psweb.getPagina(pagId)
    const raw = res.Resultado || res.resultado || {}
    pag.value = {
      id: raw.Id || raw.id || pagId,
      titulo: raw.Titulo || raw.titulo || 'Términos y Condiciones',
      contenido: removeUnnecesaryTags(raw.Contenido || raw.contenido || ''),
      descripcion: raw.Encabezado || raw.descripcion || '',
      creado: raw.Creado || raw.creado || null
    }

    // Get related pages/children
    res = await $psweb.getPaginaChilds?.(pagId, 3) || {}
    children.value = res.Items || res.items || []

    // Set SEO
    useHead({
      title: pag.value.titulo ? `${pag.value.titulo} - ${WebsiteName.value}` : `Términos y Condiciones - ${WebsiteName.value}`,
      meta: [
        { name: 'description', content: pag.value.descripcion || 'Términos y condiciones de uso del sitio web.' },
        { name: 'robots', content: 'index, follow' }
      ]
    })
  } catch (error) {
    console.error('Error cargando condiciones:', error)
    // Set default SEO on error
    useHead({
      title: `Términos y Condiciones - ${WebsiteName.value}`,
      meta: [
        { name: 'description', content: 'Términos y condiciones de uso del sitio web.' }
      ]
    })
  } finally {
    loading.value = false
  }
}

// Lifecycle
onMounted(cargarDatos)
</script>

<style scoped>
.loading-container {
  background: white;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.legal-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.legal-content-html {
  line-height: 1.8;
}

.legal-content-html h2,
.legal-content-html h3,
.legal-content-html h4,
.legal-content-html h5 {
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--text-color);
}

.legal-content-html p {
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.legal-content-html ul,
.legal-content-html ol {
  margin-bottom: 15px;
  margin-left: 30px;
}

.legal-content-html li {
  margin-bottom: 8px;
  color: var(--secondary-color);
}

.legal-section {
  border-bottom: 1px solid var(--border-color);
}

.legal-section:last-of-type {
  border-bottom: none;
}

.legal-list {
  padding-left: 20px;
  list-style: none;
}

.legal-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.legal-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.contact-info li i {
  color: var(--primary-color);
  font-size: 18px;
}

.legal-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.legal-links li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.legal-links li a:hover,
.legal-links li a.active {
  background: var(--primary-color);
  color: white;
}

.legal-links li a i {
  font-size: 18px;
}

.help-box {
  text-align: center;
}

.help-box i {
  font-size: 40px;
  color: var(--primary-color);
  margin-bottom: 15px;
}

@media (max-width: 991px) {
  .legal-box {
    padding: 25px !important;
  }
}
</style>
