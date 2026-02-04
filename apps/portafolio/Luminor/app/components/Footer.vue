<template>
  <!-- Footer -->
  <footer id="footer" class="footer-st-1 footer-bg" data-aos="fade-up">
    <div class="tf-container">
      <div class="row py_80">
        <div class="col-lg-3 col-md-6">
          <div class="footer-box footer-about mb-lg-0 mb_50">
            <div class="footer-logo mb_30">
              <img src="/images/logo/logo.svg" alt="logo-footer">
            </div>
            <p class="description mb_30">{{ WebsiteName || 'Tu aliado confiable en el mercado inmobiliario. Encuentra tu hogar ideal con nosotros.' }}</p>
            <ul class="footer-contact">
              <li v-if="email"><span>Email:</span> {{ email }}</li>
              <li v-else><span>Email:</span> contacto@luminor.com</li>
              <li v-if="telefono"><span>Teléfono:</span> {{ telefono }}</li>
              <li v-else><span>Teléfono:</span> +1 234 567 8900</li>
              <li v-if="direccion" v-html="direccion"></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-6">
          <div class="footer-box mb_50 mb-lg-0">
            <h6 class="title text_white fw-5 mb_25">Enlaces Rápidos</h6>
            <ul class="footer-menu">
              <li><NuxtLink to="/">Inicio</NuxtLink></li>
              <li><NuxtLink to="/site/nosotros">Nosotros</NuxtLink></li>
              <li><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
              <li><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-6">
          <div class="footer-box mb_50 mb-lg-0">
            <h6 class="title text_white fw-5 mb_25">Servicios</h6>
            <ul class="footer-menu">
              <li><NuxtLink to="/site/servicios">Venta</NuxtLink></li>
              <li><NuxtLink to="/site/servicios">Arriendo</NuxtLink></li>
              <li><NuxtLink to="/site/servicios">Asesoría</NuxtLink></li>
              <li><NuxtLink to="/site/ofrece">Ofrece tu Propiedad</NuxtLink></li>
              <li><NuxtLink to="/site/contacto">Contacto</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-6">
          <div class="footer-box mb_50 mb-lg-0">
            <h6 class="title text_white fw-5 mb_25">Legal</h6>
            <ul class="footer-menu">
              <li><NuxtLink to="/site/legal">Aviso Legal</NuxtLink></li>
              <li><NuxtLink to="/site/privacidad">Privacidad</NuxtLink></li>
              <li><NuxtLink to="/site/condiciones">Términos y Condiciones</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="footer-box mb-lg-0">
            <h6 class="title text_white fw-5 mb_25">Síguenos</h6>
            <ul class="social-list d-flex gap_12 mb_30">
              <li><a href="#" class="social-item"><i class="icon icon-facebook"></i></a></li>
              <li><a href="#" class="social-item"><i class="icon icon-instagram"></i></a></li>
              <li><a href="#" class="social-item"><i class="icon icon-twitter"></i></a></li>
              <li><a href="#" class="social-item"><i class="icon icon-linkedin"></i></a></li>
            </ul>
            <h6 class="title text_white fw-5 mb_20">Newsletter</h6>
            <p class="text-body-2 text_white mb_20">Recibe nuestras últimas noticias</p>
            <form @submit.prevent="handleNewsletterSubmit" class="newsletter-form">
              <input 
                v-model="newsletterEmail" 
                type="email" 
                placeholder="Tu email" 
                class="newsletter-input"
                required
              />
              <button type="submit" class="newsletter-btn">
                <i class="icon-PaperPlane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="footer-bottom text-center py_30">
            <p class="text_white mb-0">© {{ anio }} {{ companyName || 'Luminor' }}. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll To Top -->
  <div class="progress-wrap" @click="scrollToTop">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { onMounted, ref } from 'vue'

const { $psweb, $inmostore, $geografico, $demografico } = useNuxtApp()

const companyName = ref('')
const WebsiteName = ref('')
const anio = ref(new Date().getFullYear())
const apiVersion = ref('')
const direccion = ref('')
const telefono = ref('')
const email = ref('')
const newsletterEmail = ref('')

const handleNewsletterSubmit = async () => {
  if (!newsletterEmail.value) {
    console.warn('Por favor ingresa un correo electrónico')
    return
  }
  try {
    // Implementa aquí la suscripción real si tienes el método
    // await $inmostore.addNewsletter?.(newsletterEmail.value)
    console.log('Suscripción enviada:', newsletterEmail.value)
    newsletterEmail.value = ''
  } catch (error) {
    console.error('Error al suscribirse:', error)
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  if ($psweb && $inmostore) {
    try {
      let res = await $inmostore.getEmpresa?.()
      if (res?.operacion?.codigo == 1) {
        console.error('API: ' + res.operacion.mensaje)
      }
      const empresa = res?.resultado || res?.Resultado || {}
      companyName.value = empresa.razonSocial || empresa.RazonSocial || '---'

      res = await $inmostore.getSetting?.('websitename')
      WebsiteName.value = res?.resultado || res?.Resultado || '---'
      apiVersion.value = $inmostore.apiVersion || 'N/A'

      if ($demografico && empresa.iswaDireccionId) {
        try {
          const dir = await $demografico.getDireccion?.(empresa.iswaDireccionId)
          const dirInfo = dir?.info || dir?.Info || {}
          if ($geografico && dirInfo.ciudad && dirInfo.estado && dirInfo.pais) {
            const ciudad = await $geografico.getInfoCiudad?.(dirInfo.ciudad)
            const estado = await $geografico.getInfoEstado?.(dirInfo.estado)
            const pais = await $geografico.getInfoPais?.(dirInfo.pais)
            const ciudadNombre = ciudad?.info?.ciudad || ciudad?.Info?.Ciudad || dirInfo.ciudad
            const estadoNombre = estado?.info?.estado || estado?.Info?.Estado || dirInfo.estado
            const paisNombre = pais?.info?.pais || pais?.Info?.Pais || dirInfo.pais
            direccion.value = `${dirInfo.direccion || dirInfo.Direccion || ''}<br />${ciudadNombre}, ${estadoNombre}, ${paisNombre}`
            telefono.value = dirInfo.telefono1 || dirInfo.Telefono1 || ''
            email.value = dirInfo.correo || dirInfo.Correo || ''
          }
        } catch (error) {
          console.warn('Error cargando dirección de la empresa:', error)
        }
      }
    } catch (error) {
      console.error('Error cargando información del footer:', error)
    }
  } else {
    console.error('Los plugins PSWeb o InmoStore no están disponibles.')
  }
})
</script>

<style scoped>
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  margin-bottom: 12px;
  color: #333333;
  font-size: 15px;
  line-height: 1.7;
  font-weight: 500;
}

.footer-contact span {
  font-weight: 700;
  margin-right: 8px;
  color: #111111;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-bottom: 12px;
}

.footer-menu a {
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.7;
  transition: all 0.3s;
  display: inline-block;
}

.footer-menu a:hover {
  color: var(--primary-color);
  transform: translateX(4px);
}

.social-list {
  list-style: none;
  padding: 0;
}

.social-item {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s;
}

.social-item:hover {
  background: var(--primary-color);
  transform: translateY(-4px);
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 0;
}

.newsletter-input {
  flex: 1;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 14px;
  transition: all 0.3s;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(228, 233, 91, 0.1);
}

.newsletter-btn {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background: var(--primary-color);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 18px;
}

.newsletter-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(235, 77, 77, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-wrap {
  cursor: pointer;
}

.footer-about .description {
  color: #555555 !important;
  font-size: 15px !important;
  line-height: 1.7 !important;
  font-weight: 500 !important;
}

.footer-box .title {
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 1.6 !important;
  letter-spacing: 0.5px;
  color: #111111 !important;
}

.footer-box .text-body-2 {
  color: #555555 !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  line-height: 1.7 !important;
}

.footer-bottom p {
  font-size: 15px !important;
  font-weight: 500 !important;
  line-height: 1.6 !important;
  color: #333333 !important;
}

.footer-logo img {
  max-height: 50px;
  width: auto;
}

@media (max-width: 768px) {
  .footer-contact li,
  .footer-menu li {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .footer-box .title {
    font-size: 15px !important;
  }
}
</style>