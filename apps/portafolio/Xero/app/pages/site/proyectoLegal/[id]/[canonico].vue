<template>
  <div class="proyecto-legal-page">
    <!-- Hero Section -->
    <section class="legal-hero bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 mb-4">Declaración Legal del Proyecto</h1>
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
                  Marco Legal
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido Legal -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="legal-content">
              <h2 class="section-title">Marco Legal del Proyecto</h2>
              
              <!-- Información del Proyecto -->
              <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0">Información Legal del Proyecto</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <p><strong>Nombre del Proyecto:</strong> {{ proyecto.nombre }}</p>
                      <p><strong>Desarrollador:</strong> {{ proyecto.desarrollador }}</p>
                      <p><strong>Registro:</strong> {{ proyecto.registro }}</p>
                      <p><strong>Licencia de Construcción:</strong> {{ proyecto.licencia }}</p>
                    </div>
                    <div class="col-md-6">
                      <p><strong>Ubicación:</strong> {{ proyecto.ubicacion }}</p>
                      <p><strong>Etapa:</strong> {{ proyecto.etapa }}</p>
                      <p><strong>Fecha de Inicio:</strong> {{ proyecto.fechaInicio }}</p>
                      <p><strong>Fecha Estimada de Entrega:</strong> {{ proyecto.fechaEntrega }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Declaración Legal -->
              <div class="legal-declarations">
                <h3>Declaraciones Legales</h3>
                
                <div class="declaration-item">
                  <h4>1. Legitimidad del Proyecto</h4>
                  <p>
                    El presente proyecto inmobiliario cuenta con todas las autorizaciones, 
                    permisos y licencias requeridas por las autoridades competentes para 
                    su desarrollo y comercialización.
                  </p>
                </div>

                <div class="declaration-item">
                  <h4>2. Cumplimiento Normativo</h4>
                  <p>
                    El proyecto cumple con todas las regulaciones municipales, estatales 
                    y federales aplicables, incluyendo normativas de construcción, 
                    uso de suelo y protección ambiental.
                  </p>
                </div>

                <div class="declaration-item">
                  <h4>3. Derechos de Propiedad</h4>
                  <p>
                    El desarrollador cuenta con la titularidad legal del terreno y 
                    todos los derechos necesarios para el desarrollo del proyecto.
                  </p>
                </div>

                <div class="declaration-item">
                  <h4>4. Garantías Ofrecidas</h4>
                  <p>
                    Se ofrecen las garantías establecidas por la Ley de Vivienda y 
                    la Procuraduría Federal del Consumidor (PROFECO).
                  </p>
                </div>

                <div class="declaration-item">
                  <h4>5. Responsabilidades</h4>
                  <p>
                    El desarrollador se compromete a entregar las unidades conforme 
                    a las especificaciones acordadas y en los plazos establecidos.
                  </p>
                </div>
              </div>

              <!-- Documentos Legales -->
              <div class="legal-documents mt-5">
                <h3>Documentos Legales Disponibles</h3>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Licencia de Construcción
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Registro de Obras
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Certificado de Zonificación
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Estudio de Impacto Ambiental
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Escritura del Terreno
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Registro ante PROFECO
                        <span class="badge bg-success rounded-pill">Disponible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Contacto Legal -->
              <div class="legal-contact mt-5">
                <div class="alert alert-info">
                  <h5><i class="fas fa-info-circle me-2"></i>Información Legal</h5>
                  <p class="mb-0">
                    Para consultas específicas sobre aspectos legales del proyecto, 
                    contacte con nuestro departamento legal en 
                    <strong>legal@rentup.mx</strong> o al teléfono 
                    <strong>+52 (55) 1234-5678 ext. 101</strong>
                  </p>
                </div>
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
  registro: 'REG-CDMX-2024-001',
  licencia: 'LC-CDMX-2024-456',
  ubicacion: 'Polanco, Ciudad de México',
  etapa: 'En Construcción',
  fechaInicio: 'Enero 2024',
  fechaEntrega: 'Junio 2025'
})

useHead({
  title: `Marco Legal - ${proyecto.value.nombre} - RentUP`,
  meta: [
    { 
      name: 'description', 
      content: `Información legal y declaraciones del proyecto ${proyecto.value.nombre}. Documentos legales, permisos y cumplimiento normativo.` 
    },
    { 
      name: 'keywords', 
      content: `marco legal, ${proyecto.value.nombre}, documentos legales, permisos construcción` 
    },
    { property: 'og:title', content: `Marco Legal - ${proyecto.value.nombre}` },
    { 
      property: 'og:description', 
      content: `Información legal completa del proyecto ${proyecto.value.nombre}` 
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

.declaration-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #007bff;
}

.declaration-item h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.legal-documents .list-group-item {
  border: none;
  background: #f8f9fa;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .declaration-item {
    padding: 1rem;
  }
}
</style>