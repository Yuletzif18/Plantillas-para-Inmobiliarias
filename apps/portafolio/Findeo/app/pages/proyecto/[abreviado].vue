<template>
  <div id="wrapper">
    <div class="container margin-top-75">
      <div class="row">
        <div class="col-md-12">
          <div class="notification notice">
            <p>Redirigiendo proyecto...</p>
            <p>Estamos preparando la información del proyecto: <strong>{{ route.params.abreviado }}</strong></p>
          </div>

          <div class="margin-top-40">
            <h2 class="headline">Proyecto {{ route.params.abreviado.toUpperCase() }}</h2>
            <div class="row">
              <div class="col-md-8">
                <div class="property-description">
                  <h3 class="margin-top-30">Descripción del Proyecto</h3>
                  <p>Este es un proyecto inmobiliario exclusivo que ofrece propiedades de alta calidad en una ubicación privilegiada. El proyecto incluye amenidades modernas, espacios verdes y toda la infraestructura necesaria para una vida cómoda y funcional.</p>
                  <p>Diseñado pensando en las necesidades de las familias modernas, combina innovación arquitectónica con sostenibilidad ambiental.</p>

                  <h3 class="margin-top-40">Características Principales</h3>
                  <ul class="list-2">
                    <li><i class="fa fa-check"></i> Ubicación estratégica cerca de servicios</li>
                    <li><i class="fa fa-check"></i> Diseño arquitectónico moderno y funcional</li>
                    <li><i class="fa fa-check"></i> Áreas comunes recreativas y deportivas</li>
                    <li><i class="fa fa-check"></i> Seguridad 24/7 con circuito cerrado</li>
                    <li><i class="fa fa-check"></i> Estacionamiento privado cubierto</li>
                    <li><i class="fa fa-check"></i> Amplias zonas verdes y jardines</li>
                    <li><i class="fa fa-check"></i> Gimnasio y salón de eventos</li>
                    <li><i class="fa fa-check"></i> Administración profesional</li>
                  </ul>

                  <h3 class="margin-top-40">Tipos de Inmuebles Disponibles</h3>
                  <p>El proyecto ofrece diferentes opciones de vivienda para adaptarse a las necesidades de cada familia:</p>
                  <div class="row margin-top-20">
                    <div class="col-md-6">
                      <h4>Apartamentos</h4>
                      <ul>
                        <li>Estudios desde 35 m²</li>
                        <li>1 habitación: 45-60 m²</li>
                        <li>2 habitaciones: 65-85 m²</li>
                        <li>3 habitaciones: 90-120 m²</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <h4>Unidades Premium</h4>
                      <ul>
                        <li>Penthouses con terraza privada</li>
                        <li>Apartamentos con jardín</li>
                        <li>Dúplex de 2 niveles</li>
                        <li>Locales comerciales en planta baja</li>
                      </ul>
                    </div>
                  </div>

                  <h3 class="margin-top-40">Amenidades</h3>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="amenity-item">
                        <i class="im im-icon-Car-Wheel"></i>
                        <p>Estacionamiento</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="amenity-item">
                        <i class="im im-icon-Dumbbell"></i>
                        <p>Gimnasio</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="amenity-item">
                        <i class="im im-icon-Shield-Check"></i>
                        <p>Seguridad 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="sidebar">
                  <div class="widget">
                    <h3>Información de Contacto</h3>
                    <div class="agent-widget">
                      <div class="agent-contact-info">
                        <p><i class="fa fa-phone"></i> (123) 456-7890</p>
                        <p><i class="fa fa-envelope"></i> proyectos@ejemplo.com</p>
                        <p><i class="fa fa-map-marker"></i> Calle Principal 123</p>
                      </div>
                      <NuxtLink to="/site/contacto" class="button fullwidth margin-top-20">
                        Solicitar Información
                      </NuxtLink>
                    </div>
                  </div>

                  <div class="widget margin-top-30">
                    <h3>Estado del Proyecto</h3>
                    <ul class="list-1">
                      <li><i class="fa fa-check-circle"></i> En construcción</li>
                      <li><i class="fa fa-calendar"></i> Entrega estimada: 2026</li>
                      <li><i class="fa fa-building"></i> Unidades totales: 120</li>
                      <li><i class="fa fa-home"></i> Unidades disponibles: Consultar</li>
                    </ul>
                  </div>

                  <div class="widget margin-top-30">
                    <h3>Financiación</h3>
                    <p>Ofrecemos planes de financiación flexibles con las mejores entidades bancarias del país.</p>
                    <ul class="list-2">
                      <li>Crédito hipotecario</li>
                      <li>Planes de pago</li>
                      <li>Asesoría financiera</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="margin-top-50 margin-bottom-50">
              <NuxtLink to="/site/inmuebles" class="button border margin-right-10">
                <i class="fa fa-search"></i> Ver Todas las Propiedades
              </NuxtLink>
              <NuxtLink to="/site/contacto" class="button">
                <i class="fa fa-envelope"></i> Contactar
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const router = useRouter()
// Placeholder: redirige a /site/proyecto/[id]/[canonico] si aplica
onMounted(() => {
  // Implementa lógica de redirección aquí según tu modelo
})
</script>
