<template>
  <div id="wrapper">
    <NuxtLoadingIndicator />
    
    <!-- Header -->
    <header id="header-container" class="fullwidth modern-header">
      <div id="header" class="not-sticky">
        <div class="container-fluid">
          <div class="header-wrapper">
            <!-- Logo -->
            <div class="logo-container">
              <NuxtLink to="/site" class="logo-link">
                <img src="/img/logo.png" alt="Logo" class="logo-image" data-sticky-logo="/img/logo.png">
              </NuxtLink>
            </div>

            <!-- Navigation -->
            <nav class="navigation-modern">
              <ul class="nav-list">
                <li><NuxtLink to="/site" class="nav-link active">Inicio</NuxtLink></li>
                <li><NuxtLink to="/site/inmuebles" class="nav-link">Inmuebles</NuxtLink></li>
                <li><NuxtLink to="/site/proyectos" class="nav-link">Proyectos</NuxtLink></li>
                <li><NuxtLink to="/site/blog" class="nav-link">Blog</NuxtLink></li>
                <li><NuxtLink to="/site/nosotros" class="nav-link">Empresa</NuxtLink></li>
              </ul>
            </nav>

            <!-- CTA Button -->
            <div class="header-actions">
              <NuxtLink to="/site/ofrece" class="btn-publish">
                <i class="sl sl-icon-plus"></i>
                <span>Publicar Propiedad</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <NuxtPage />

    <!-- Footer -->
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6">
            <img class="footer-logo" src="/img/logo.png" alt="Logo">
            <br><br>
            <p>Tu solución inmobiliaria de confianza. Encuentra tu hogar ideal con nosotros.</p>
          </div>

          <div class="col-md-4 col-sm-6">
            <h4>Enlaces útiles</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/site">Inicio</NuxtLink></li>
              <li><NuxtLink to="/site/inmuebles">Inmuebles</NuxtLink></li>
              <li><NuxtLink to="/site/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/site/nosotros">Nosotros</NuxtLink></li>
              <li><NuxtLink to="/site/contacto">Contacto</NuxtLink></li>
            </ul>

            <ul class="footer-links">
              <li><NuxtLink to="/site/legal">Aviso Legal</NuxtLink></li>
              <li><NuxtLink to="/site/privacidad">Privacidad</NuxtLink></li>
              <li><NuxtLink to="/site/condiciones">Términos y Condiciones</NuxtLink></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="col-md-3 col-sm-12">
            <h4>Contacto</h4>
            <div class="text-widget">
              <span>Calle Principal 123</span> <br>
              Ciudad, País <br>
              <span>Teléfono: (123) 456-7890</span><br>
              <span>Email: <a href="mailto:info@ejemplo.com">info@ejemplo.com</a></span><br>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="copyrights">© {{ new Date().getFullYear() }} Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer / End -->
  </div>
</template>
<script setup>
useHead({
  link: [
    { rel: 'stylesheet', href: '/css/bootstrap.css' },
    { rel: 'stylesheet', href: '/css/icons.css' },
    { rel: 'stylesheet', href: '/css/color.css' },
    { rel: 'stylesheet', href: '/css/style.css' }
  ]
})

// Cargar scripts dinámicamente en el cliente
onMounted(() => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }
  
  // Cargar scripts en orden secuencial
  loadScript('/js/jquery-3.4.1.min.js')
    .then(() => loadScript('/js/jquery-migrate-3.1.0.min.js'))
    .then(() => loadScript('/js/mmenu.min.js'))
    .then(() => loadScript('/js/owl.carousel.min.js'))
    .then(() => loadScript('/js/magnific-popup.min.js'))
    .then(() => loadScript('/js/masonry.min.js'))
    .then(() => loadScript('/js/slick.min.js'))
    .then(() => loadScript('/js/custom.js'))
    .catch(err => console.error('Error loading scripts:', err))
})
</script>
<style scoped>
/* Modern Header Styles */

#header-container.modern-header {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

#header-container.modern-header #header {
  padding: 16px 0;
}

/* Header Wrapper */
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
}

/* Logo Container */
.logo-container {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
  filter: brightness(0.95);
}

.logo-image {
  height: 50px;
  width: auto;
  display: block;
  object-fit: contain;
}

/* Navigation */
.navigation-modern {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
  align-items: center;
}

.nav-list li {
  position: relative;
}

.nav-link {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 2px;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #ff6b35;
}

.nav-link:hover::after {
  width: 40%;
}

.nav-link.active {
  color: #ff6b35;
}

.nav-link.active::after {
  width: 40%;
}

/* Header Actions */
.header-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Publish Button */
.btn-publish {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  white-space: nowrap;
  border: none;
  cursor: pointer;
}

.btn-publish:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);
}

.btn-publish:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
}

.btn-publish i {
  font-size: 16px;
  display: flex;
  align-items: center;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .header-wrapper {
    gap: 30px;
  }

  .nav-link {
    padding: 10px 16px;
    font-size: 13px;
  }
}

@media (max-width: 992px) {
  .header-wrapper {
    gap: 20px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 12px;
  }

  .btn-publish {
    padding: 10px 20px;
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .header-wrapper {
    flex-wrap: wrap;
    gap: 15px;
  }

  .logo-container {
    flex-basis: auto;
  }

  .navigation-modern {
    flex-basis: 100%;
    order: 3;
    justify-content: flex-start;
  }

  .nav-list {
    flex-wrap: wrap;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 11px;
  }

  .header-actions {
    flex-basis: auto;
  }

  .btn-publish {
    padding: 8px 16px;
    font-size: 11px;
  }

  .btn-publish span {
    display: none;
  }

  .btn-publish i {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  #header-container.modern-header #header {
    padding: 12px 0;
  }

  .header-wrapper {
    gap: 10px;
  }

  .logo-image {
    height: 40px;
  }

  .nav-link {
    padding: 6px 8px;
    font-size: 10px;
  }

  .nav-link::after {
    bottom: 6px;
  }

  .btn-publish {
    padding: 6px 12px;
  }
}

/* Sticky Header Effect (if needed) */
#header-container.modern-header.sticky {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}
</style>