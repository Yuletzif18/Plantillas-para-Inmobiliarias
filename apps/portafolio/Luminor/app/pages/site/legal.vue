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
                <h3>{{ pag.Titulo || 'Aviso Legal' }}</h3>
                <div class="breadcrumbs">
                  <NuxtLink to="/" class="hover-underline-link">Inicio</NuxtLink>
                  <i class="icon-CaretRight"></i>
                  <span>{{ pag.Titulo || 'Aviso Legal' }}</span>
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
                <div v-if="pag.Contenido" class="legal-content-html" v-html="pag.Contenido"></div>

                <!-- Fallback Content (if no API content) -->
                <div v-else>
                  <div class="legal-header mb_40">
                    <p class="text-caption text_secondary-color mb_10">Última actualización: 6 de Noviembre de 2025</p>
                    <h2 class="mb_20">Aviso Legal y Declaración de Responsabilidad</h2>
                    <p class="text-body-1 text_secondary-color">
                      Este aviso legal regula el uso del sitio web {{ WebsiteName }} (en adelante, "el Sitio") 
                      operado por {{ WebsiteName }}.
                    </p>
                  </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">1. Identificación del Titular</h4>
                <div class="company-info p_25 bg-surface rounded">
                  <ul class="info-list">
                    <li>
                      <strong>Razón Social:</strong> Luminor Real Estate S.A.S.
                    </li>
                    <li>
                      <strong>NIT:</strong> 900.123.456-7
                    </li>
                    <li>
                      <strong>Domicilio:</strong> Calle 123 #45-67, Bogotá D.C., Colombia
                    </li>
                    <li>
                      <strong>Correo Electrónico:</strong> legal@luminor.com
                    </li>
                    <li>
                      <strong>Teléfono:</strong> +57 315 666 6688
                    </li>
                    <li>
                      <strong>Registro Mercantil:</strong> Cámara de Comercio de Bogotá
                    </li>
                    <li>
                      <strong>Actividad:</strong> Servicios de intermediación inmobiliaria
                    </li>
                  </ul>
                </div>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">2. Objeto del Sitio Web</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  El Sitio tiene como finalidad proporcionar información sobre los servicios de intermediación 
                  inmobiliaria que ofrece Luminor Real Estate, incluyendo:
                </p>
                <ul class="legal-list mb_15">
                  <li>Compra, venta y arrendamiento de bienes inmuebles</li>
                  <li>Asesoría en transacciones inmobiliarias</li>
                  <li>Avalúos comerciales y técnicos</li>
                  <li>Administración de propiedades</li>
                  <li>Consultoría en inversión inmobiliaria</li>
                </ul>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">3. Condiciones de Acceso y Uso</h4>
                <h6 class="mb_15">3.1 Acceso Gratuito</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  El acceso y navegación por el Sitio es gratuito. Sin embargo, algunos servicios específicos 
                  pueden requerir registro y/o contratación mediante el pago de tarifas establecidas.
                </p>
                <h6 class="mb_15">3.2 Uso Adecuado</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  El usuario se compromete a utilizar el Sitio de conformidad con la ley, estos términos legales, 
                  la moral y buenas costumbres. El usuario se abstendrá de:
                </p>
                <ul class="legal-list mb_15">
                  <li>Utilizar el Sitio con fines ilícitos o contrarios a lo establecido</li>
                  <li>Provocar daños en los sistemas de Luminor Real Estate o terceros</li>
                  <li>Introducir o difundir virus informáticos o sistemas que causen daños</li>
                  <li>Intentar acceder a áreas restringidas del Sitio</li>
                  <li>Utilizar el contenido con fines comerciales sin autorización</li>
                </ul>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">4. Propiedad Intelectual e Industrial</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  Todos los contenidos del Sitio, incluyendo pero no limitándose a textos, fotografías, 
                  gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente y demás 
                  elementos, son propiedad intelectual de Luminor Real Estate o de terceros que han autorizado 
                  su uso.
                </p>
                <p class="text-body-2 text_secondary-color mb_15">
                  Están protegidos por las leyes colombianas e internacionales sobre propiedad intelectual. 
                  Queda prohibida la reproducción, distribución, comunicación pública o transformación de dichos 
                  contenidos sin autorización expresa y por escrito del titular.
                </p>
                <h6 class="mb_15 mt_30">4.1 Marcas Registradas</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  "Luminor Real Estate" y su logotipo son marcas registradas. Su uso no autorizado constituye 
                  una infracción de los derechos de propiedad industrial.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">5. Información de Propiedades</h4>
                <h6 class="mb_15">5.1 Exactitud de la Información</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  La información sobre propiedades publicada en el Sitio se proporciona de buena fe y se 
                  actualiza regularmente. Sin embargo:
                </p>
                <ul class="legal-list mb_15">
                  <li>No garantizamos la exactitud absoluta de toda la información</li>
                  <li>Las características pueden cambiar sin previo aviso</li>
                  <li>Los precios son orientativos y sujetos a negociación</li>
                  <li>Las fotografías pueden no corresponder exactamente a la propiedad actual</li>
                  <li>Es responsabilidad del interesado verificar la información antes de tomar decisiones</li>
                </ul>

                <h6 class="mb_15 mt_30">5.2 Disponibilidad</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Las propiedades publicadas pueden haber sido vendidas o arrendadas sin que la información 
                  se haya actualizado en tiempo real. Recomendamos contactar directamente con nuestros asesores 
                  para confirmar disponibilidad.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">6. Exclusión de Garantías y Responsabilidad</h4>
                <h6 class="mb_15">6.1 Disponibilidad del Sitio</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Luminor Real Estate no garantiza la disponibilidad y continuidad del funcionamiento del Sitio. 
                  Realizaremos nuestros mejores esfuerzos para garantizar el servicio, pero no seremos 
                  responsables por:
                </p>
                <ul class="legal-list mb_15">
                  <li>Interrupciones por mantenimiento técnico</li>
                  <li>Fallos en el sistema o en las conexiones</li>
                  <li>Ataques informáticos o problemas de seguridad</li>
                  <li>Causas de fuerza mayor o caso fortuito</li>
                </ul>

                <h6 class="mb_15 mt_30">6.2 Contenido y Servicios</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Luminor Real Estate no se hace responsable de:
                </p>
                <ul class="legal-list mb_15">
                  <li>Errores u omisiones en el contenido del Sitio</li>
                  <li>Información proporcionada por propietarios o terceros</li>
                  <li>Decisiones tomadas basándose únicamente en la información del Sitio</li>
                  <li>Daños derivados del uso indebido del Sitio</li>
                  <li>Enlaces a sitios web de terceros</li>
                </ul>

                <h6 class="mb_15 mt_30">6.3 Virus y Software Malicioso</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Aunque implementamos medidas de seguridad, no podemos garantizar la ausencia absoluta de 
                  virus u otros elementos lesivos. Es responsabilidad del usuario contar con herramientas 
                  adecuadas de protección.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">7. Enlaces a Terceros</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan 
                  únicamente para conveniencia del usuario. Luminor Real Estate:
                </p>
                <ul class="legal-list mb_15">
                  <li>No controla ni revisa el contenido de sitios enlazados</li>
                  <li>No asume responsabilidad por el contenido, políticas o prácticas de terceros</li>
                  <li>No garantiza la disponibilidad de sitios enlazados</li>
                  <li>No respalda necesariamente los productos o servicios de terceros</li>
                </ul>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">8. Protección de Datos Personales</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  El tratamiento de datos personales se rige por nuestra 
                  <NuxtLink to="/site/privacidad" class="text_primary-color">Política de Privacidad</NuxtLink>, 
                  en cumplimiento de la Ley 1581 de 2012 y demás normativa aplicable en Colombia.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">9. Cookies</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  El Sitio utiliza cookies para mejorar la experiencia del usuario. Al navegar por el Sitio, 
                  el usuario acepta el uso de cookies de acuerdo con nuestra política. Para más información, 
                  consulte nuestra 
                  <NuxtLink to="/site/privacidad" class="text_primary-color">Política de Privacidad</NuxtLink>.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">10. Legislación Aplicable y Jurisdicción</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  Este aviso legal se rige por la legislación colombiana. Para cualquier controversia derivada 
                  del uso del Sitio, las partes se someten expresamente a los juzgados y tribunales de Bogotá D.C., 
                  Colombia, renunciando a cualquier otro fuero que pudiera corresponderles.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">11. Modificaciones</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  Luminor Real Estate se reserva el derecho de modificar este aviso legal en cualquier momento. 
                  Los cambios serán efectivos desde su publicación en el Sitio. Se recomienda revisar 
                  periódicamente este documento.
                </p>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">12. Regulación Inmobiliaria</h4>
                <h6 class="mb_15">12.1 Autorización Legal</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Luminor Real Estate S.A.S. está debidamente autorizada para ejercer actividades de 
                  intermediación inmobiliaria en Colombia, cumpliendo con toda la normativa aplicable del sector.
                </p>
                <h6 class="mb_15">12.2 Normativa Aplicable</h6>
                <p class="text-body-2 text_secondary-color mb_15">
                  Nuestras operaciones se realizan en cumplimiento de:
                </p>
                <ul class="legal-list mb_15">
                  <li>Ley 820 de 2003 (Régimen de arrendamiento de vivienda urbana)</li>
                  <li>Código Civil Colombiano</li>
                  <li>Código de Comercio</li>
                  <li>Ley 1581 de 2012 (Protección de datos personales)</li>
                  <li>Normativa antilavado de activos</li>
                  <li>Demás disposiciones aplicables al sector inmobiliario</li>
                </ul>
              </div>

              <div class="legal-section mb_40">
                <h4 class="mb_20">13. Contacto Legal</h4>
                <p class="text-body-2 text_secondary-color mb_15">
                  Para cualquier consulta relacionada con este aviso legal, puede contactarnos:
                </p>
                <div class="contact-box p_25 bg-surface rounded">
                  <ul class="contact-info">
                    <li>
                      <i class="icon-Envelope"></i>
                      <span>Email: legal@luminor.com</span>
                    </li>
                    <li>
                      <i class="icon-Phone"></i>
                      <span>Teléfono: +57 315 666 6688</span>
                    </li>
                    <li>
                      <i class="icon-MapPin"></i>
                      <span>Dirección: Calle 123 #45-67, Bogotá D.C., Colombia</span>
                    </li>
                    <li>
                      <i class="icon-Clock"></i>
                      <span>Horario: Lunes a Viernes, 8:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="legal-footer p_30 bg-surface rounded text-center">
                <p class="text-body-2 text_secondary-color mb_15">
                  Al acceder y utilizar este sitio web, usted reconoce haber leído, comprendido y aceptado 
                  los términos de este aviso legal.
                </p>
                <div class="d-flex gap_15 justify-content-center flex-wrap">
                  <NuxtLink to="/site/condiciones" class="tf-btn btn-outline">
                    <span>Términos y Condiciones</span>
                  </NuxtLink>
                  <NuxtLink to="/site/privacidad" class="tf-btn btn-outline">
                    <span>Política de Privacidad</span>
                  </NuxtLink>
                  <NuxtLink to="/site/contacto" class="tf-btn btn-bg-primary">
                    <span>Contacto Legal</span>
                  </NuxtLink>
                </div>
              </div>
                </div>
                <!-- End Fallback Content -->
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-3 offset-lg-1 d-none d-lg-block">
            <div class="sidebar-legal sticky-top" style="top: 100px;">
              <h6 class="mb_20">Documentos Legales</h6>
              <ul class="legal-links">
                <li>
                  <NuxtLink to="/site/condiciones">
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
                  <NuxtLink to="/site/legal" class="active">
                    <i class="icon-Scales"></i>
                    <span>Aviso Legal</span>
                  </NuxtLink>
                </li>
              </ul>

              <div class="compliance-badge p_20 bg-surface rounded mt_30 text-center">
                <i class="icon-Certificate" style="font-size: 40px; color: var(--primary-color); margin-bottom: 15px;"></i>
                <h6 class="mb_10">Cumplimiento Legal</h6>
                <p class="text-caption text_secondary-color mb-0">
                  Operamos en pleno cumplimiento de la normativa colombiana
                </p>
              </div>

              <div class="certifications p_20 bg-white rounded mt_30">
                <h6 class="mb_15">Certificaciones</h6>
                <ul class="cert-list">
                  <li>
                    <i class="icon-CheckCircle"></i>
                    <span>Cámara de Comercio</span>
                  </li>
                  <li>
                    <i class="icon-CheckCircle"></i>
                    <span>Registro Mercantil</span>
                  </li>
                  <li>
                    <i class="icon-CheckCircle"></i>
                    <span>Habeas Data</span>
                  </li>
                </ul>
              </div>

              <div class="help-box p_20 bg-surface rounded mt_30">
                <i class="icon-Question"></i>
                <h6 class="mb_10">Asesoría Legal</h6>
                <p class="text-caption text_secondary-color mb_15">
                  ¿Necesitas asesoría sobre aspectos legales?
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
 * Declaración Legal de la Inmobiliaria
 * Plantilla: Luminor
 */
import { useNuxtApp, useHead } from '#app'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { $psweb, $inmostore } = useNuxtApp()
const route = useRoute()

// Variables principales
const pagId = 9685 // ID fijo para la página legal
const loading = ref(true)
const WebsiteName = ref('')
const pag = ref({
  Titulo: '',
  Contenido: ''
})
const children = ref([])

// Función helper para remover tags innecesarios (solo uso interno)
const removeUnnecesaryTags = (html) => {
  if (!html) return ''
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  clean = clean.replace(/<!--[\s\S]*?-->/g, '')
  return clean
}

// Equivalente a Page_Load
onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      // Obtener nombre del sitio web
      let res = await $inmostore.getSetting('websitename')
      if (res.operacion && res.operacion.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      WebsiteName.value = res.resultado || '---'

      // Obtener página legal (GetPagina(9685))
      res = await $psweb.getPagina(pagId)
      const pageData = res.Resultado || res.resultado || {}
      
      pag.value = {
        Titulo: pageData.Titulo || pageData.titulo || 'Aviso Legal',
        Contenido: removeUnnecesaryTags(pageData.Contenido || pageData.contenido || '')
      }

      // Obtener página secundaria con hijos (getPaginaChilds equivalente)
      res = await $psweb.getPaginaChilds?.(pagId, 3)
      // Limpiar contenido de los hijos aquí
      children.value = (res.Items || res.items || []).map(child => ({
        ...child,
        Contenido: removeUnnecesaryTags(child.Contenido || child.contenido || '')
      }))

      // Equivalente a Page.Title = Core.GetTitle(me.Titulo)
      useHead({
        title: `${pag.value.Titulo} - ${WebsiteName.value}`,
        meta: [
          { 
            name: 'description', 
            content: 'Aviso legal y declaración de responsabilidad de la inmobiliaria.' 
          },
          { name: 'robots', content: 'index, follow' }
        ]
      })
    } catch (error) {
      console.error('Error cargando declaración legal:', error)
      useHead({
        title: `Aviso Legal - ${WebsiteName.value}`
      })
    } finally {
      loading.value = false
    }
  } else {
    console.error('El plugin PSWeb o InmoStore no está disponible.')
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

.company-info,
.contact-box {
  border-left: 4px solid var(--primary-color);
}

.info-list,
.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  margin-bottom: 12px;
  color: var(--text-color);
}

.info-list li strong {
  color: var(--primary-color);
  display: inline-block;
  min-width: 150px;
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

.cert-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cert-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
}

.cert-list li i {
  color: var(--success-color);
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
