<template>
  <div id="wrapper">
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Planes y precios</h2>
            <nav id="breadcrumbs">
              <ul>
                <li><NuxtLink to="/site">Inicio</NuxtLink></li>
                <li>Planes y precios</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pricing-container margin-top-30">
            <div class="plan">
              <div class="plan-price">
                <h3>Básico</h3>
                <span class="value">Gratis</span>
                <span class="period">Un listado estándar activo gratis por 30 días</span>
              </div>
              <div class="plan-features">
                <ul>
                  <li>Un listado</li>
                  <li>30 días de disponibilidad</li>
                  <li>Listado estándar</li>
                  <li>Soporte limitado</li>
                </ul>
                <a class="button border" href="#">Comenzar</a>
              </div>
            </div>
            <div class="plan featured">
              <div class="listing-badges"><span class="featured">Destacado</span></div>
              <div class="plan-price">
                <h3>Extendido</h3>
                <span class="value">$9.99</span>
                <span class="period">Tarifa única para un listado, destacado en los resultados de búsqueda</span>
              </div>
              <div class="plan-features">
                <ul>
                  <li>Tarifa única</li>
                  <li>Un listado</li>
                  <li>90 días de disponibilidad</li>
                  <li>Destacado en resultados de búsqueda</li>
                  <li>Soporte 24/7</li>
                </ul>
                <a class="button" href="#">Comenzar</a>
              </div>
            </div>
            <div class="plan">
              <div class="plan-price">
                <h3>Profesional</h3>
                <span class="value">$19.99</span>
                <span class="period">Suscripción mensual para listados ilimitados y disponibilidad</span>
              </div>
              <div class="plan-features">
                <ul>
                  <li>Listados ilimitados</li>
                  <li>Disponibilidad ilimitada</li>
                  <li>Destacado en resultados de búsqueda</li>
                  <li>Soporte 24/7</li>
                </ul>
                <a class="button border" href="#">Comenzar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Planes y precios
</script>
