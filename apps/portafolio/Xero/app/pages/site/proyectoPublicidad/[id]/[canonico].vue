<template>
  <div class="proyecto-publicidad-page">
    <!-- Hero Section -->
    <section class="publicidad-hero bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 mb-4">Política de Publicidad</h1>
            <p class="lead">{{ proyecto.nombre }}</p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center bg-transparent">
                <li class="breadcrumb-item">
                  <NuxtLink to="/site/" class="text-light">Inicio</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/site/proyectos" class="text-light">Proyectos</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink :to="`/site/proyecto/${proyecto.id}/${proyecto.canonico}`" class="text-light">
                    {{ proyecto.nombre }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-warning" aria-current="page">
                  Política de Publicidad
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido de Política de Publicidad -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="publicidad-content">
              <h2 class="section-title">Política de Publicidad del Proyecto</h2>
              
              <!-- Información del Proyecto -->
              <div class="card mb-4">
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0">Información del Proyecto</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <p><strong>Proyecto:</strong> {{ proyecto.nombre }}</p>
                      <p><strong>Desarrollador:</strong> {{ proyecto.desarrollador }}</p>
                      <p><strong>Registro PROFECO:</strong> {{ proyecto.registroProfeco }}</p>
                    </div>
                    <div class="col-md-6">
                      <p><strong>Ubicación:</strong> {{ proyecto.ubicacion }}</p>
                      <p><strong>Tipo:</strong> {{ proyecto.tipo }}</p>
                      <p><strong>Fecha de Registro:</strong> {{ proyecto.fechaRegistro }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Políticas de Publicidad -->
              <div class="publicidad-policies">
                <h3>Lineamientos de Publicidad</h3>
                
                <div class="policy-item">
                  <h4>1. Veracidad en la Información</h4>
                  <p>
                    Toda la información publicitaria del proyecto se basa en datos reales 
                    y verificables. Las imágenes, planos y especificaciones corresponden 
                    al proyecto real o son representaciones fieles del mismo.
                  </p>
                </div>

                <div class="policy-item">
                  <h4>2. Precios y Condiciones</h4>
                  <p>
                    Los precios publicados son vigentes a la fecha de publicación y 
                    pueden estar sujetos a cambios sin previo aviso. Las condiciones 
                    de financiamiento se especifican claramente en cada promoción.
                  </p>
                </div>

                <div class="policy-item">
                  <h4>3. Especificaciones Técnicas</h4>
                  <p>
                    Las especificaciones técnicas, materiales y acabados pueden variar 
                    según el avance de la obra y disponibilidad de materiales, siempre 
                    manteniendo o mejorando la calidad anunciada.
                  </p>
                </div>

                <div class="policy-item">
                  <h4>4. Fechas de Entrega</h4>
                  <p>
                    Las fechas de entrega son estimadas y pueden variar por causas 
                    de fuerza mayor, climáticas o regulatorias. Se notificará 
                    oportunamente cualquier cambio a los compradores.
                  </p>
                </div>

                <div class="policy-item">
                  <h4>5. Amenidades y Servicios</h4>
                  <p>
                    Las amenidades mostradas en publicidad forman parte del proyecto 
                    y serán entregadas conforme al cronograma establecido. Algunas 
                    pueden requerir cuotas adicionales de mantenimiento.
                  </p>
                </div>

                <div class="policy-item">
                  <h4>6. Imágenes y Renders</h4>
                  <p>
                    Las imágenes y renders son representaciones artísticas que pueden 
                    diferir de la realidad final. Los muebles y decoración mostrados 
                    no están incluidos en la venta, salvo que se especifique lo contrario.
                  </p>
                </div>
              </div>

              <!-- Compromisos Publicitarios -->
              <div class="advertising-commitments mt-5">
                <h3>Nuestros Compromisos</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="commitment-card">
                      <div class="card h-100">
                        <div class="card-body">
                          <div class="commitment-icon mb-3">
                            <i class="fas fa-shield-alt text-success"></i>
                          </div>
                          <h5>Transparencia Total</h5>
                          <p>Información clara, completa y verificable en toda nuestra comunicación.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="commitment-card">
                      <div class="card h-100">
                        <div class="card-body">
                          <div class="commitment-icon mb-3">
                            <i class="fas fa-handshake text-success"></i>
                          </div>
                          <h5>Cumplimiento</h5>
                          <p>Respeto a todos los compromisos adquiridos en nuestra publicidad.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="commitment-card">
                      <div class="card h-100">
                        <div class="card-body">
                          <div class="commitment-icon mb-3">
                            <i class="fas fa-balance-scale text-success"></i>
                          </div>
                          <h5>Legalidad</h5>
                          <p>Cumplimiento estricto de la normativa publicitaria vigente.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="commitment-card">
                      <div class="card h-100">
                        <div class="card-body">
                          <div class="commitment-icon mb-3">
                            <i class="fas fa-comments text-success"></i>
                          </div>
                          <h5>Comunicación</h5>
                          <p>Canales abiertos para aclaraciones y consultas sobre publicidad.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contacto para Quejas -->
              <div class="complaint-contact mt-5">
                <div class="alert alert-warning">
                  <h5><i class="fas fa-exclamation-triangle me-2"></i>Quejas sobre Publicidad</h5>
                  <p>
                    Si considera que algún elemento de nuestra publicidad no es preciso o 
                    tiene alguna queja al respecto, puede contactarnos:
                  </p>
                  <ul class="mb-0">
                    <li><strong>Email:</strong> quejas@rentup.mx</li>
                    <li><strong>Teléfono:</strong> +52 (55) 1234-5678 ext. 200</li>
                    <li><strong>PROFECO:</strong> www.profeco.gob.mx</li>
                  </ul>
                </div>
              </div>

              <!-- Última Actualización -->
              <div class="update-info mt-4">
                <p class="text-muted text-center">
                  <small>
                    <i class="fas fa-calendar me-2"></i>
                    Última actualización: {{ fechaActualizacion }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Obtener parámetros de la ruta
const route = useRoute()
const proyectoId = route.params.id
const canonico = route.params.canonico

// Datos del proyecto (esto vendría de una API)
const proyecto = ref({
  id: proyectoId,
  nombre: 'Torres del Bosque Residencial',
  canonico: canonico,
  desarrollador: 'Grupo Inmobiliario Premier S.A. de C.V.',
  registroProfeco: 'PFC-2024-001',
  ubicacion: 'Polanco, Ciudad de México',
  tipo: 'Desarrollo Residencial',
  fechaRegistro: 'Marzo 2024'
})

const fechaActualizacion = ref('Octubre 2024')

useHead({
  title: `Política de Publicidad - ${proyecto.value.nombre} - RentUP`,
  meta: [
    { 
      name: 'description', 
      content: `Política de publicidad del proyecto ${proyecto.value.nombre}. Lineamientos, compromisos y transparencia en la comunicación.` 
    },
    { 
      name: 'keywords', 
      content: `política publicidad, ${proyecto.value.nombre}, transparencia, PROFECO` 
    },
    { property: 'og:title', content: `Política de Publicidad - ${proyecto.value.nombre}` },
    { 
      property: 'og:description', 
      content: `Lineamientos de publicidad del proyecto ${proyecto.value.nombre}` 
    }
  ]
})
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.policy-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #28a745;
}

.policy-item h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.commitment-card .card {
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.commitment-card:hover .card {
  transform: translateY(-5px);
}

.commitment-icon {
  font-size: 3rem;
  text-align: center;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .policy-item {
    padding: 1rem;
  }
  
  .commitment-icon {
    font-size: 2.5rem;
  }
}
</style>