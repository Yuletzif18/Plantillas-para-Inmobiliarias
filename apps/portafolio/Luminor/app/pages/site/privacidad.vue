<template>
  <!-- Loading State -->
  <div v-if="loading" class="loading-container d-flex align-items-center justify-content-center" style="min-height: 60vh;">
    <div class="spinner text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt_20">Cargando página...</p>
    </div>
  </div>

  <!-- Main Content -->
  <div v-else>
    <!-- Page Title -->
    <section class="page-title">
      <div class="tf-container w-xxl">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h3>{{ pag.Titulo || 'Política de Privacidad' }}</h3>
              <div class="breadcrumbs">
                <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                <i class="icon-CaretRight"></i>
                <span>{{ pag.Titulo || 'Política de Privacidad' }}</span>
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
              <!-- Dynamic Content -->
              <template v-if="pag.Contenido" >
                <div v-html="pag.Contenido"></div>
              </template>

              <!-- Fallback Content -->
              <template v-else>
                <div class="legal-header mb_40">
                  <p class="text-caption text_secondary-color mb_10">Última actualización: 6 de Noviembre de 2025</p>
                  <h2 class="mb_20">Política de Privacidad y Protección de Datos</h2>
                  <p class="text-body-1 text_secondary-color">
                    En Luminor Real Estate, nos comprometemos a proteger su privacidad y garantizar la seguridad 
                    de sus datos personales de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
                  </p>
                </div>

                <div class="legal-section mb_40">
                  <h4 class="mb_20">1. Información que Recopilamos</h4>
                  <h6 class="mb_15">1.1 Datos Personales</h6>
                  <p class="text-body-2 text_secondary-color mb_15">
                    Recopilamos información personal que usted nos proporciona voluntariamente cuando:
                  </p>
                  <ul class="legal-list mb_15">
                    <li>Se registra en nuestro sitio web</li>
                    <li>Solicita información sobre propiedades</li>
                    <li>Contrata nuestros servicios inmobiliarios</li>
                    <li>Suscribe a nuestro boletín informativo</li>
                    <li>Participa en encuestas o promociones</li>
                    <li>Se comunica con nuestro servicio de atención al cliente</li>
                  </ul>
                </div>

                <div class="legal-section mb_40">
                  <h4 class="mb_20">2. Uso de la Información</h4>
                  <p class="text-body-2 text_secondary-color mb_15">
                    Utilizamos su información personal para los siguientes propósitos:
                  </p>
                  <ul class="legal-list mb_15">
                    <li>Procesar y gestionar sus solicitudes de servicios inmobiliarios</li>
                    <li>Facilitar transacciones de compra, venta o arriendo</li>
                    <li>Brindar asesoría personalizada según sus necesidades</li>
                  </ul>
                </div>

                <div class="legal-section mb_40">
                  <h4 class="mb_20">3. Seguridad de los Datos</h4>
                  <p class="text-body-2 text_secondary-color mb_15">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
                  </p>
                  <ul class="legal-list mb_15">
                    <li>Cifrado SSL/TLS para transmisión de datos</li>
                    <li>Almacenamiento seguro en servidores protegidos</li>
                    <li>Control de acceso estricto a información personal</li>
                  </ul>
                </div>

                <div class="legal-section mb_40">
                  <h4 class="mb_20">4. Sus Derechos</h4>
                  <p class="text-body-2 text_secondary-color mb_15">
                    De acuerdo con la legislación colombiana, usted tiene los siguientes derechos:
                  </p>
                  <ul class="legal-list mb_15">
                    <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                    <li><strong>Actualización:</strong> Solicitar la actualización de sus datos</li>
                    <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                  </ul>
                </div>

                <div class="legal-footer p_30 bg-surface rounded text-center">
                  <p class="text-body-2 text_secondary-color mb_15">
                    Su privacidad es importante para nosotros.
                  </p>
                  <button class="tf-btn btn-outline" @click="downloadPolicy">
                    <i class="icon-Download"></i>
                    <span>Descargar PDF</span>
                  </button>
                </div>
              </template>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-3 offset-lg-1 d-none d-lg-block">
            <div class="sidebar-legal sticky-top" style="top: 100px;">
              <h6 class="mb_20">Documentos Relacionados</h6>
              <ul class="legal-links">
                <li>
                  <NuxtLink to="/site/condiciones">
                    <i class="icon-FileText"></i>
                    <span>Términos y Condiciones</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/site/privacidad" class="active">
                    <i class="icon-Shield"></i>
                    <span>Política de Privacidad</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp, useHead } from '#app'

const loading = ref(true)
const pag = ref({ Titulo: 'Política de Privacidad', Contenido: '' })
const pagId = 9684

const { $psweb } = useNuxtApp()

useHead({
  title: 'Política de Privacidad - Luminor Real Estate',
  meta: [
    { name: 'description', content: 'Conoce cómo Luminor Real Estate protege tus datos personales. Política de privacidad conforme a la Ley 1581 de 2012 de Colombia.' },
    { name: 'robots', content: 'index, follow' }
  ]
})

const downloadPolicy = () => {
  alert('Funcionalidad de descarga en desarrollo. Pronto podrás descargar la política en PDF.')
}

const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
             .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
}

onMounted(async () => {
  try {
    const response = await $psweb.getPagina(pagId)
    if (response && response.Resultado) {
      pag.value = {
        Titulo: response.Resultado.Titulo || 'Política de Privacidad',
        Contenido: removeUnnecesaryTags(response.Resultado.Contenido)
      }
    }
  } catch (error) {
    console.error('Error loading privacy policy:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.loading-container {
  background-color: #f8f9fa;
}

.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.spinner-border {
  width: 50px;
  height: 50px;
  border-width: 4px;
}

.legal-box {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.legal-section {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 30px;
  margin-bottom: 30px;
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

.legal-footer {
  text-align: center;
  margin-top: 40px;
}

.sidebar-legal {
  padding: 20px;
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
</style>
