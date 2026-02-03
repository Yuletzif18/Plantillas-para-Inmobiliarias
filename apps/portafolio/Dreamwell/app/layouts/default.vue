<template>
  <div>
    <!-- Start Preloader -->
    <div class="cs_preloader cs_center">
      <div class="cs_preloader_in cs_center cs_radius_50">
        <span class="cs_center cs_white_bg cs_accent_color">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 7.96075V21.317C23.9993 22.0283 23.7181 22.7104 23.2182 23.2134C22.7182 23.7164 22.0404 23.9993 21.3333 24H16.8889C16.4174 24 15.9652 23.8115 15.6318 23.4761C15.2984 23.1407 15.1111 22.6857 15.1111 22.2113V17.2924C15.1111 17.0552 15.0175 16.8277 14.8508 16.66C14.6841 16.4923 14.458 16.398 14.2222 16.398H9.77778C9.54203 16.398 9.31594 16.4923 9.14924 16.66C8.98254 16.8277 8.88889 17.0552 8.88889 17.2924V22.2113C8.88889 22.6857 8.70159 23.1407 8.36819 23.4761C8.03479 23.8115 7.58261 24 7.11111 24H2.66667C1.95964 23.9993 1.28177 23.7164 0.781828 23.2134C0.281884 22.7104 0.000705969 22.0283 0 21.317V7.96075C0.000665148 7.65188 0.0804379 7.34839 0.231621 7.07957C0.382805 6.81075 0.600296 6.58567 0.863111 6.42605L11.0853 0.255041C11.3617 0.0881572 11.6779 0 12.0002 0C12.3225 0 12.6388 0.0881572 12.9151 0.255041L23.1373 6.42605C23.4001 6.58573 23.6175 6.81083 23.7686 7.07965C23.9197 7.34846 23.9994 7.65192 24 7.96075Z" fill="currentColor"/>
          </svg>
        </span>
      </div>
    </div>
    <!-- End Preloader -->

    <!-- Start Header Section -->
    <header class="cs_site_header cs_style_1 cs_sticky_header">
      <div class="cs_main_header">
        <div class="container">
          <div class="cs_main_header_in">
            <div class="cs_main_header_left">
              <NuxtLink class="cs_site_branding" to="/site" aria-label="Click to visit home page">
                <i class="fa-solid fa-house cs_accent_color" style="font-size: 24px;"></i>
              </NuxtLink>
              <nav class="cs_nav cs_heading_color">
                <ul class="cs_nav_list">
                  <li>
                    <NuxtLink to="/site" aria-label="Home">Inicio</NuxtLink>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" aria-label="Inmuebles">Inmuebles</a>
                    <ul>
                      <li><NuxtLink to="/site/inmuebles" aria-label="Ver todos los inmuebles">Todos los inmuebles</NuxtLink></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#" aria-label="Proyectos">Proyectos</a>
                    <ul>
                      <li><NuxtLink to="/site/proyectos" aria-label="Ver todos los proyectos">Todos los proyectos</NuxtLink></li>
                    </ul>
                  </li>
                  <li><NuxtLink to="/site/nosotros" aria-label="Acerca de nosotros">Nosotros</NuxtLink></li>
                  <li><NuxtLink to="/site/contacto" aria-label="Contacto">Contacto</NuxtLink></li>
                  <li class="menu-item-has-children">
                    <a href="#" aria-label="Blog">Blog</a>
                    <ul>
                      <li><NuxtLink to="/site/blog" aria-label="Ver todas las noticias">Noticias</NuxtLink></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="cs_main_header_right">
              <NuxtLink to="/site/ofrece" aria-label="Ofrecer Inmueble" class="cs_btn cs_style_1 cs_type_1 cs_accent_color cs_fs_15 cs_medium cs_radius_7">
                <span class="cs_btn_icon"><i class="fa-solid fa-circle-plus"></i></span>
                <span class="cs_btn_text">Ofrecer Inmueble</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="cs_height_116 cs_height_lg_110"></div>
    <!-- End Header Section -->

    <!-- Page Content -->
    <slot />
    
    <!-- Start Footer Section -->
    <footer class="cs_footer cs_style_1 cs_heading_bg cs_gray_color">
      <div class="container">
        <div class="cs_footer_row">
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <div class="cs_footer_widget">
                <h2 class="cs_footer_widget_title cs_fs_18 cs_white_color cs_semibold wow fadeInDown">Propiedades Inmobiliarias</h2>
                <ul class="cs_footer_widget_address cs_mp_0">
                  <li><i class="fa-solid fa-location-dot"></i>Dirección de oficina<br>Ciudad, País</li>
                  <li><a href="tel:+123456789" aria-label="Phone Link"><i class="fa-solid fa-phone"></i>+123 456 789</a></li>
                  <li><a href="mailto:info@inmobiliaria.com" aria-label="Email Link"><i class="fa-solid fa-envelope"></i>info@inmobiliaria.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h2 class="cs_footer_widget_title cs_fs_18 cs_white_color cs_semibold">Enlaces Rápidos</h2>
              <ul class="cs_footer_widget_menu">
                <li><NuxtLink to="/site/nosotros" aria-label="Page Link">Nosotros</NuxtLink></li>
                <li><NuxtLink to="/site/condiciones" aria-label="Page Link">Términos y Condiciones</NuxtLink></li>
                <li><NuxtLink to="/site/legal" aria-label="Page Link">Legal</NuxtLink></li>
                <li><NuxtLink to="/site/blog" aria-label="Page Link">Blog</NuxtLink></li>
                <li><NuxtLink to="/site/contacto" aria-label="Page Link">Contacto</NuxtLink></li>
                <li><NuxtLink to="/site/privacidad" aria-label="Page Link">Política de Privacidad</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_footer_widget">
              <h2 class="cs_footer_widget_title cs_fs_18 cs_white_color cs_semibold">Servicios</h2>
              <ul class="cs_footer_widget_menu">
                <li><NuxtLink to="/site/servicios">Nuestros Servicios</NuxtLink></li>
                <li><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
                <li><NuxtLink to="/site/proyectos">Proyectos</NuxtLink></li>
                <li><NuxtLink to="/site/ofrece">Ofrecer Inmueble</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="cs_footer_col">
            <div class="cs_newsletter cs_style_1">
              <h2 class="cs_newsletter_title cs_fs_24 cs_semibold cs_white_color cs_mb_53 cs_mb_lg_30 wow fadeInDown">Recibe las últimas noticias</h2>
              <form action="#" class="cs_newsletter_form cs_radius_10 wow fadeInUp" @submit.prevent="handleNewsletterSubmit">
                <input type="email" v-model="newsletterEmail" name="email" autocomplete="email" class="cs_newsletter_input cs_radius_7" placeholder="Ingresa tu correo">
                <button type="submit" aria-label="Subscribe Button" class="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_medium cs_radius_7">
                  <span class="cs_btn_text">Suscribirse</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_footer_bottom">
        <div class="container">
          <div class="cs_footer_bottom_in">
            <div class="cs_socials_wrapper">
              <h3 class="cs_fs_16 cs_white_color cs_normal mb-0">Síguenos</h3>
              <div class="cs_social_btns cs_style_1">
                <a href="#" aria-label="Facebook" class="cs_center cs_radius_50 cs_gray_bg">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="YouTube" class="cs_center cs_radius_50 cs_gray_bg">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#" aria-label="LinkedIn" class="cs_center cs_radius_50 cs_gray_bg">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter" class="cs_center cs_radius_50 cs_gray_bg">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" class="cs_center cs_radius_50 cs_gray_bg">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <ul class="cs_footer_widget_menu">
              <li><NuxtLink to="/site/privacidad" aria-label="Privacy & Policy">Política de Privacidad</NuxtLink></li>
              <li><NuxtLink to="/site/condiciones" aria-label="Terms & Condition">Términos y Condiciones</NuxtLink></li>
              <li><NuxtLink to="/site/legal" aria-label="Legal">Legal</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Section -->

    <!-- Start Scroll To Top Button -->
    <button type="button" class="cs_scrolltop_btn cs_center cs_radius_50 cs_white_bg cs_accent_color" @click="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
        <path fill="currentColor" fill-rule="evenodd" d="M7.146 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708z" clip-rule="evenodd"/>
      </svg>
    </button>
    <!-- End Scroll To Top Button -->
  </div>
</template>

<script setup>
const newsletterEmail = ref('')
const route = useRoute()

const handleNewsletterSubmit = () => {
  // Implementar lógica de suscripción al newsletter
  console.log('Newsletter email:', newsletterEmail.value)
  newsletterEmail.value = ''
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const applyBackgroundImages = () => {
  // Aplicar imágenes de fondo dinámicamente
  const elements = document.querySelectorAll('[data-src]')
  elements.forEach((element) => {
    const src = element.getAttribute('data-src')
    if (src) {
      element.style.backgroundImage = `url(${src})`
    }
  })
}

onMounted(() => {
  applyBackgroundImages()
})

onUpdated(() => {
  applyBackgroundImages()
})

// Observar cambios de ruta
watch(() => route.path, () => {
  nextTick(() => {
    applyBackgroundImages()
  })
})
</script>

<style>
/* Estilos específicos del layout (si se requieren) */
</style>
