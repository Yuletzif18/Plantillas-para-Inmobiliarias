<template>
  <div>
    <!-- Breadcrumb Section -->
    <section class="cs_page_heading cs_bg_filed cs_center" data-src="/img/page_heading_bg.svg">
      <div class="container">
        <div class="cs_page_heading_in">
          <h1 class="cs_page_title cs_fs_48 cs_semibold">{{ article?.titulo || 'Blog' }}</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><NuxtLink to="/site/index">Inicio</NuxtLink></li>
            <li class="breadcrumb-item"><NuxtLink to="/site/blog">Blog</NuxtLink></li>
            <li class="breadcrumb-item active">{{ article?.titulo || 'Artículo' }}</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Article Detail Section -->
    <section class="cs_gray_bg_1" style="padding: 80px 0;">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <div class="cs_card cs_white_bg cs_radius_15" style="padding: 40px;">
              <!-- Article Header -->
              <div class="cs_article_header" style="margin-bottom: 30px;">
                <img :src="article?.imagen || '/img/post_img_1.jpg'" :alt="article?.titulo" style="width: 100%; height: 450px; object-fit: cover; border-radius: 15px; margin-bottom: 30px;">
                
                <div class="cs_article_meta" style="display: flex; gap: 25px; margin-bottom: 20px; flex-wrap: wrap; color: #666;">
                  <span><i class="fa-solid fa-calendar-days" style="margin-right: 8px; color: #ff5a3c;"></i>{{ formatDate(article?.fecha) }}</span>
                  <span v-if="article?.autor"><i class="fa-solid fa-user" style="margin-right: 8px; color: #ff5a3c;"></i>{{ article.autor }}</span>
                  <span v-if="article?.categoria"><i class="fa-solid fa-folder" style="margin-right: 8px; color: #ff5a3c;"></i>{{ article.categoria }}</span>
                  <span v-if="article?.tiempo_lectura"><i class="fa-solid fa-clock" style="margin-right: 8px; color: #ff5a3c;"></i>{{ article.tiempo_lectura }}</span>
                </div>

                <h1 class="cs_fs_40 cs_semibold" style="margin-bottom: 20px;">{{ article?.titulo }}</h1>
              </div>

              <!-- Article Content -->
              <div class="cs_article_content" v-if="article">
                <div v-html="article.contenido" class="article-body"></div>
              </div>

              <!-- Tags -->
              <div class="cs_article_tags" style="margin-top: 50px; padding-top: 30px; border-top: 1px solid #e0e0e0;" v-if="article?.tags && article.tags.length > 0">
                <h4 class="cs_fs_18 cs_semibold" style="margin-bottom: 15px;">Etiquetas:</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <span v-for="tag in article.tags" :key="tag" class="cs_tag" style="background: #f5f5f5; padding: 8px 15px; border-radius: 5px; font-size: 14px;">
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Social Share -->
              <div class="cs_article_share" style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
                <h4 class="cs_fs_18 cs_semibold" style="margin-bottom: 15px;">Compartir:</h4>
                <div style="display: flex; gap: 15px;">
                  <a href="#" class="cs_social_link" style="width: 40px; height: 40px; border-radius: 50%; background: #1877f2; display: flex; align-items: center; justify-content: center; color: white;">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" class="cs_social_link" style="width: 40px; height: 40px; border-radius: 50%; background: #1da1f2; display: flex; align-items: center; justify-content: center; color: white;">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" class="cs_social_link" style="width: 40px; height: 40px; border-radius: 50%; background: #0077b5; display: flex; align-items: center; justify-content: center; color: white;">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="cs_social_link" style="width: 40px; height: 40px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; color: white;">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Recent Posts -->
            <div class="cs_sidebar_widget cs_white_bg cs_radius_15" style="padding: 30px; margin-bottom: 30px;">
              <h3 class="cs_sidebar_widget_title cs_fs_24 cs_semibold" style="margin-bottom: 25px;">Artículos Recientes</h3>
              <div class="cs_recent_posts">
                <div v-for="recent in recentPosts" :key="recent.id" class="cs_recent_post" style="display: flex; gap: 15px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0;">
                  <NuxtLink :to="`/site/blog/${recent.id}`" style="flex: 0 0 80px;">
                    <img :src="recent.imagen" :alt="recent.titulo" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                  </NuxtLink>
                  <div style="flex: 1;">
                    <h4 class="cs_fs_16 cs_semibold" style="margin-bottom: 8px; line-height: 1.4;">
                      <NuxtLink :to="`/site/blog/${recent.id}`">{{ recent.titulo }}</NuxtLink>
                    </h4>
                    <span style="font-size: 13px; color: #999;">
                      <i class="fa-solid fa-calendar-days" style="margin-right: 5px;"></i>{{ formatDate(recent.fecha) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Categories -->
            <div class="cs_sidebar_widget cs_white_bg cs_radius_15" style="padding: 30px;">
              <h3 class="cs_sidebar_widget_title cs_fs_24 cs_semibold" style="margin-bottom: 25px;">Categorías</h3>
              <ul class="cs_categories_list" style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 12px;">
                  <NuxtLink to="/site/blog" style="display: flex; justify-content: space-between; padding: 10px; background: #f8f8f8; border-radius: 8px;">
                    <span>Guías</span>
                    <span class="cs_accent_color">2</span>
                  </NuxtLink>
                </li>
                <li style="margin-bottom: 12px;">
                  <NuxtLink to="/site/blog" style="display: flex; justify-content: space-between; padding: 10px; background: #f8f8f8; border-radius: 8px;">
                    <span>Inversión</span>
                    <span class="cs_accent_color">1</span>
                  </NuxtLink>
                </li>
                <li style="margin-bottom: 12px;">
                  <NuxtLink to="/site/blog" style="display: flex; justify-content: space-between; padding: 10px; background: #f8f8f8; border-radius: 8px;">
                    <span>Mercado</span>
                    <span class="cs_accent_color">1</span>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref(null)
const recentPosts = ref([])

// Función para formatear fechas
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('es-ES', options)
}

onMounted(() => {
  // Base de datos de artículos con contenido completo
  const articles = {
    1: {
      id: 1,
      titulo: 'Consejos para comprar tu primera vivienda en Colombia',
      resumen: 'Comprar tu primera vivienda es una de las decisiones más importantes de tu vida. Descubre los aspectos clave que debes considerar.',
      fecha: '2026-01-15',
      categoria: 'Guías',
      imagen: '/img/post_img_1.jpg',
      autor: 'María González',
      tiempo_lectura: '8 min',
      tags: ['PrimeraVivienda', 'Consejos', 'Colombia', 'Financiación'],
      contenido: `
        <p class="lead" style="font-size: 1.2em; margin-bottom: 25px;">Comprar tu primera vivienda es un momento emocionante pero también puede ser abrumador. Esta guía te ayudará a navegar el proceso con confianza.</p>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">1. Define tu presupuesto realista</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Antes de comenzar a buscar, es fundamental saber cuánto puedes gastar. Considera no solo el precio de la vivienda, sino también:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Cuota inicial (generalmente 20-30% del valor)</li>
          <li>Gastos notariales y de escrituración (aproximadamente 3-5%)</li>
          <li>Impuestos de registro y beneficencia</li>
          <li>Costos de avalúo y estudio de títulos</li>
          <li>Seguro de incendio y terremoto</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">2. Ubicación, ubicación, ubicación</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">La ubicación determina no solo tu calidad de vida, sino también el valor futuro de tu inversión. Evalúa:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Proximidad a tu lugar de trabajo</li>
          <li>Acceso a transporte público</li>
          <li>Cercanía a colegios, hospitales y centros comerciales</li>
          <li>Seguridad del sector</li>
          <li>Potencial de valorización</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">3. Opciones de financiación</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">En Colombia existen varias alternativas para financiar tu vivienda:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li><strong>Crédito hipotecario tradicional:</strong> Bancos y entidades financieras ofrecen tasas competitivas</li>
          <li><strong>Subsidios de vivienda:</strong> Programas gubernamentales para familias de bajos y medianos ingresos</li>
          <li><strong>Leasing habitacional:</strong> Alternativa con beneficios tributarios</li>
          <li><strong>Cesantías:</strong> Puedes utilizarlas para cuota inicial o amortización</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">4. Inspección exhaustiva</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">No te dejes llevar solo por la primera impresión. Verifica minuciosamente:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Estado de instalaciones eléctricas y sanitarias</li>
          <li>Humedad en paredes y techos</li>
          <li>Funcionamiento de ventanas y puertas</li>
          <li>Estado del edificio si es apartamento (zonas comunes, ascensores)</li>
          <li>Documentación legal al día (paz y salvo de administración, impuestos)</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">5. Documentación necesaria</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Para solicitar un crédito hipotecario necesitarás:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Certificado laboral con antigüedad mínima de 1 año</li>
          <li>Extractos bancarios de los últimos 6 meses</li>
          <li>Declaración de renta si aplica</li>
          <li>Referencias personales y comerciales</li>
          <li>Cédula y libreta militar al día</li>
        </ul>

        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-top: 40px; border-left: 4px solid #ff5a3c;">
          <h3 style="margin-bottom: 15px; font-size: 1.4em;">Consejo final</h3>
          <p style="line-height: 1.8; margin: 0;">No te apresures. Comprar una vivienda es probablemente la inversión más grande de tu vida. Tómate el tiempo necesario para evaluar todas tus opciones, compara precios en diferentes zonas y asesórate con profesionales del sector inmobiliario.</p>
        </div>
      `
    },
    2: {
      id: 2,
      titulo: 'Inversión en bienes raíces: guía completa para el 2026',
      resumen: 'El mercado inmobiliario sigue siendo una de las mejores opciones de inversión a largo plazo. Aprende todo lo que necesitas saber para invertir con éxito.',
      fecha: '2026-01-10',
      categoria: 'Inversión',
      imagen: '/img/post_img_5.jpg',
      autor: 'Carlos Rodríguez',
      tiempo_lectura: '12 min',
      tags: ['Inversión', 'BienesRaíces', 'Rentabilidad', 'Estrategias'],
      contenido: `
        <p class="lead" style="font-size: 1.2em; margin-bottom: 25px;">La inversión en bienes raíces continúa siendo uno de los vehículos más confiables para construir riqueza a largo plazo. En esta guía completa te mostramos cómo hacerlo correctamente en 2026.</p>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">¿Por qué invertir en bienes raíces?</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Los bienes raíces ofrecen múltiples ventajas sobre otras formas de inversión:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li><strong>Flujo de caja constante:</strong> Los arriendos generan ingresos mensuales predecibles</li>
          <li><strong>Valorización:</strong> Las propiedades tienden a aumentar su valor con el tiempo</li>
          <li><strong>Apalancamiento:</strong> Puedes invertir usando créditos bancarios</li>
          <li><strong>Beneficios tributarios:</strong> Deducciones por intereses e impuestos</li>
          <li><strong>Activo tangible:</strong> A diferencia de acciones, es un bien físico</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Estrategias de inversión inmobiliaria</h2>
        
        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">1. Compra para arrendar (Buy & Hold)</h3>
        <p style="line-height: 1.8; margin-bottom: 20px;">La estrategia clásica. Compras una propiedad y la arriendas para generar ingresos pasivos. Ideal para:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Inversionistas que buscan estabilidad a largo plazo</li>
          <li>Generación de flujo de caja mensual</li>
          <li>Construir patrimonio progresivamente</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">2. Fix & Flip (Comprar, renovar, vender)</h3>
        <p style="line-height: 1.8; margin-bottom: 20px;">Compras propiedades en mal estado, las renuevas y las vendes con ganancia. Requiere:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Capital disponible para renovaciones</li>
          <li>Conocimiento del mercado local</li>
          <li>Red de contratistas confiables</li>
          <li>Capacidad de gestión de proyectos</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">3. Inversión en preventa</h3>
        <p style="line-height: 1.8; margin-bottom: 20px;">Compras durante la etapa de construcción a precio preferencial. Ventajas:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Precios hasta 20-30% más bajos que el valor final</li>
          <li>Facilidades de pago durante construcción</li>
          <li>Posibilidad de vender antes de la entrega</li>
          <li>Inmuebles nuevos con garantía</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Análisis de rentabilidad</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Antes de invertir, calcula estos indicadores clave:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
          <h4 style="margin-bottom: 15px;">Rentabilidad por arriendo</h4>
          <p style="line-height: 1.8; margin-bottom: 10px;"><strong>Fórmula:</strong> (Arriendo mensual × 12 / Valor de compra) × 100</p>
          <p style="line-height: 1.8; margin: 0;">Objetivo mínimo: 5-7% anual en ciudades principales</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
          <h4 style="margin-bottom: 15px;">Flujo de caja neto</h4>
          <p style="line-height: 1.8; margin: 0;">Ingresos por arriendo - (Cuota crédito + Administración + Impuestos + Mantenimiento)</p>
        </div>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Dónde invertir en Colombia 2026</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Las zonas con mayor potencial según análisis de mercado:</p>
        
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li><strong>Bogotá:</strong> Suba, Engativá, Kennedy (estratos 3-4) - Alta demanda de arriendo</li>
          <li><strong>Medellín:</strong> Envigado, Sabaneta, Bello - Valorización sostenida</li>
          <li><strong>Cartagena:</strong> Zonas turísticas - Rentas vacacionales</li>
          <li><strong>Barranquilla:</strong> Norte y centro - Crecimiento industrial</li>
          <li><strong>Ciudades intermedias:</strong> Pereira, Manizales, Bucaramanga - Mejor relación precio/renta</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Errores comunes a evitar</h2>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>No hacer análisis financiero detallado</li>
          <li>Sobreestimar ingresos por arriendo</li>
          <li>Subestimar costos de mantenimiento</li>
          <li>Comprar en zonas sin investigar el mercado local</li>
          <li>No diversificar inversiones</li>
          <li>Dejarse llevar por emociones en lugar de números</li>
        </ul>

        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-top: 40px; color: white;">
          <h3 style="margin-bottom: 15px; font-size: 1.4em; color: white;">Comienza con el pie derecho</h3>
          <p style="line-height: 1.8; margin: 0;">La inversión en bienes raíces requiere paciencia, investigación y capital. Empieza con propiedades asequibles, aprende del proceso, y escala gradualmente. El éxito en este negocio se construye con experiencia y decisiones informadas.</p>
        </div>
      `
    },
    3: {
      id: 3,
      titulo: 'Tendencias del mercado inmobiliario colombiano 2026',
      resumen: 'Análisis completo de las proyecciones y oportunidades del sector inmobiliario en Colombia.',
      fecha: '2026-01-05',
      categoria: 'Mercado',
      imagen: '/img/post_img_4.jpg',
      autor: 'Ana Martínez',
      tiempo_lectura: '10 min',
      tags: ['Mercado', 'Tendencias', 'Colombia', 'Proyecciones'],
      contenido: `
        <p class="lead" style="font-size: 1.2em; margin-bottom: 25px;">El mercado inmobiliario colombiano entra al 2026 con perspectivas optimistas. Conoce las tendencias que marcarán el sector este año y cómo aprovecharlas.</p>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Panorama general del mercado</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">El sector de la construcción en Colombia muestra señales de recuperación tras los ajustes del 2024-2025. Las proyecciones indican:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Crecimiento del 4.5% en lanzamiento de nuevos proyectos</li>
          <li>Aumento del 3.2% en ventas de vivienda nueva</li>
          <li>Tasas de interés estabilizándose en niveles más favorables</li>
          <li>Mayor disponibilidad de subsidios de vivienda</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Tendencia #1: Construcción sostenible</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">La sostenibilidad ya no es opcional, es una exigencia del mercado. Los proyectos inmobiliarios están adoptando:</p>
        
        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">Certificaciones verdes</h3>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>LEED (Leadership in Energy and Environmental Design)</li>
          <li>EDGE (Excellence in Design for Greater Efficiencies)</li>
          <li>CASA Colombia (certificación local)</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">Características eco-amigables</h3>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Paneles solares para áreas comunes</li>
          <li>Sistemas de recolección de aguas lluvias</li>
          <li>Materiales de construcción reciclados</li>
          <li>Espacios verdes amplios y jardines verticales</li>
          <li>Iluminación LED y sistemas de ahorro energético</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Tendencia #2: Transformación digital</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">La tecnología está revolucionando cómo compramos y vendemos propiedades:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
          <h4 style="margin-bottom: 15px;">Tours virtuales y realidad aumentada</h4>
          <p style="line-height: 1.8; margin: 0;">Recorre propiedades desde tu celular con tecnología 360°, ahorrando tiempo y facilitando decisiones informadas.</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
          <h4 style="margin-bottom: 15px;">Inteligencia artificial</h4>
          <p style="line-height: 1.8; margin: 0;">Sistemas que analizan el mercado y recomiendan propiedades según tus preferencias y presupuesto.</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
          <h4 style="margin-bottom: 15px;">Blockchain en transacciones</h4>
          <p style="line-height: 1.8; margin: 0;">Contratos inteligentes que agilizan y aseguran las transacciones inmobiliarias.</p>
        </div>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Tendencia #3: Espacios flexibles</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">La pandemia cambió permanentemente cómo usamos nuestros hogares. Ahora se buscan:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Oficinas en casa o espacios multifuncionales</li>
          <li>Áreas sociales al aire libre</li>
          <li>Gimnasios y zonas de wellness en el edificio</li>
          <li>Coworkings y salas de reuniones compartidas</li>
          <li>Terrazas y balcones amplios</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Tendencia #4: Ubicaciones emergentes</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Nuevas zonas están ganando popularidad por su mejor relación calidad-precio:</p>
        
        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">Bogotá</h3>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Fontibón - Cercanía al aeropuerto y desarrollo comercial</li>
          <li>Modelia - Proyectos de renovación urbana</li>
          <li>Tintal - Expansión hacia el sur-occidente</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 15px; font-size: 1.4em;">Medellín</h3>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Rionegro - Hub tecnológico y empresarial</li>
          <li>La Estrella - Precios competitivos con buena ubicación</li>
          <li>Calasanz - Desarrollo de infraestructura</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Tendencia #5: Vivienda asequible</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">El gobierno está impulsando proyectos VIS y VIP con:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Subsidios de hasta $24 millones para clase media</li>
          <li>Tasas preferenciales desde 8.5% anual</li>
          <li>Mayor oferta de proyectos entre $150M - $300M</li>
          <li>Facilidades de pago y cuotas iniciales reducidas</li>
        </ul>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Proyecciones de precios</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Según análisis de CAMACOL y Coordenada Urbana:</p>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #ffc107;">
          <p style="line-height: 1.8; margin-bottom: 10px;"><strong>Vivienda nueva:</strong> Incremento promedio del 4-6% anual</p>
          <p style="line-height: 1.8; margin-bottom: 10px;"><strong>Vivienda usada:</strong> Estabilidad con variaciones del 2-3%</p>
          <p style="line-height: 1.8; margin: 0;"><strong>Arriendos:</strong> Aumento esperado del 5-7% en zonas de alta demanda</p>
        </div>

        <h2 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.8em;">Oportunidades para inversionistas</h2>
        <p style="line-height: 1.8; margin-bottom: 20px;">Este es un buen momento para:</p>
        <ul style="line-height: 1.8; margin-bottom: 25px; padding-left: 30px;">
          <li>Comprar en preventa en zonas emergentes</li>
          <li>Invertir en proyectos sostenibles (mayor valorización)</li>
          <li>Aprovechar subsidios y tasas preferenciales</li>
          <li>Diversificar en ciudades intermedias</li>
          <li>Considerar renta vacacional en zonas turísticas</li>
        </ul>

        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; border-radius: 10px; margin-top: 40px; color: white;">
          <h3 style="margin-bottom: 15px; font-size: 1.4em; color: white;">El momento es ahora</h3>
          <p style="line-height: 1.8; margin: 0;">El 2026 presenta condiciones favorables para entrar al mercado inmobiliario colombiano. Con tasas estabilizándose, mayor oferta de subsidios y nuevas zonas en desarrollo, las oportunidades están a la vista. La clave está en investigar, planificar y actuar con asesoría profesional.</p>
        </div>
      `
    }
  }

  // Cargar el artículo según el ID de la ruta
  const articleId = parseInt(route.params.id)
  article.value = articles[articleId]

  // Cargar artículos recientes (los otros 2 artículos)
  recentPosts.value = Object.values(articles).filter(a => a.id !== articleId)
})
</script>

<style scoped>
.article-body {
  color: #333;
  line-height: 1.8;
}

.article-body h2 {
  color: #1a1a1a;
  font-weight: 600;
}

.article-body h3 {
  color: #333;
  font-weight: 600;
}

.article-body h4 {
  color: #333;
  font-weight: 600;
}

.article-body p {
  margin-bottom: 20px;
}

.article-body ul {
  margin-bottom: 25px;
}

.article-body strong {
  color: #ff5a3c;
  font-weight: 600;
}

.cs_social_link:hover {
  transform: translateY(-3px);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.cs_tag {
  transition: all 0.3s ease;
}

.cs_tag:hover {
  background: #ff5a3c !important;
  color: white;
  transform: translateY(-2px);
}
</style>
