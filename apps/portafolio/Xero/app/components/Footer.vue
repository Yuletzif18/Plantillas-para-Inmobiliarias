<template>
  <footer class="footer bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <h5>RentUP</h5>
          <p>Portal inmobiliario líder para compra, venta y alquiler de propiedades.</p>
          <div class="social-links">
            <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
            <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="me-3"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6>Navegación</h6>
          <ul class="list-unstyled">
            <li><NuxtLink to="/" class="text-light text-decoration-none">Inicio</NuxtLink></li>
            <li><NuxtLink to="/site/inmuebles" class="text-light text-decoration-none">Inmuebles</NuxtLink></li>
            <li><NuxtLink to="/site/proyectos" class="text-light text-decoration-none">Proyectos</NuxtLink></li>
            <li><NuxtLink to="/site/servicios" class="text-light text-decoration-none">Servicios</NuxtLink></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6>Empresa</h6>
          <ul class="list-unstyled">
            <li><NuxtLink to="/site/nosotros" class="text-light text-decoration-none">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/site/contacto" class="text-light text-decoration-none">Contacto</NuxtLink></li>
            <li><NuxtLink to="/site/blog" class="text-light text-decoration-none">Blog</NuxtLink></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6>Legal</h6>
          <ul class="list-unstyled">
            <li><NuxtLink to="/site/legal" class="text-light text-decoration-none">Términos Legales</NuxtLink></li>
            <li><NuxtLink to="/site/privacidad" class="text-light text-decoration-none">Privacidad</NuxtLink></li>
            <li><NuxtLink to="/site/condiciones" class="text-light text-decoration-none">Condiciones</NuxtLink></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6>Contacto</h6>
          <p class="mb-1"><i class="fas fa-phone me-2"></i>+1 234 567 890</p>
          <p class="mb-1"><i class="fas fa-envelope me-2"></i>contacto@rentup.com</p>
          <p><i class="fas fa-map-marker-alt me-2"></i>Ciudad, País</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No se requieren lógica adicional
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.social-links a {
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #27ae60;
}

.footer ul li {
  margin-bottom: 0.5rem;
}

.footer ul li a:hover {
  color: #27ae60 !important;
}

.footer h6 {
  color: #fa2c5a;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>