<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/img/png/logo.png" alt="RentUP" height="40" class="d-inline-block align-text-top">
        </NuxtLink>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/site/inmuebles" class="nav-link">Inmuebles</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/site/proyectos" class="nav-link">Proyectos</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/site/servicios" class="nav-link">Servicios</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/site/nosotros" class="nav-link">Nosotros</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/site/contacto" class="nav-link">Contacto</NuxtLink>
            </li>
          </ul>
          
          <div class="navbar-nav">
            <button class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
              Iniciar Sesión
            </button>
            <button class="btn btn-primary">
              Publicar Inmueble
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand img {
  max-height: 40px;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #27ae60 !important;
}
</style>