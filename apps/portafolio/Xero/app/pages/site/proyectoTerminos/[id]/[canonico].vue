<template>
  <div class="proyecto-terminos-page">
    <!-- Hero Section -->
    <section class="terminos-hero bg-warning text-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 mb-4">Términos y Condiciones</h1>
            <p class="lead">{{ proyecto.nombre }}</p>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center bg-transparent">
                <li class="breadcrumb-item">
                  <NuxtLink to="/site/" class="text-dark">Inicio</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/site/proyectos" class="text-dark">Proyectos</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink :to="`/site/proyecto/${proyecto.id}/${proyecto.canonico}`" class="text-dark">
                    {{ proyecto.nombre }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-primary" aria-current="page">
                  Términos y Condiciones
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenido de Términos -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="terminos-content">
              <h2 class="section-title">Términos y Condiciones del Proyecto</h2>
              
              <!-- Información del Proyecto -->
              <div class="card mb-4">
                <div class="card-header bg-warning text-dark">
                  <h5 class="mb-0">Información del Proyecto</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <p><strong>Proyecto:</strong> {{ proyecto.nombre }}</p>
                      <p><strong>Desarrollador:</strong> {{ proyecto.desarrollador }}</p>
                      <p><strong>Ubicación:</strong> {{ proyecto.ubicacion }}</p>
                    </div>
                    <div class="col-md-6">
                      <p><strong>Tipo:</strong> {{ proyecto.tipo }}</p>
                      <p><strong>Vigencia:</strong> {{ proyecto.vigencia }}</p>
                      <p><strong>Versión:</strong> {{ proyecto.version }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Términos y Condiciones -->
              <div class="terminos-sections">
                <div class="termino-item">
                  <h3>1. Objeto del Contrato</h3>
                  <p>
                    El presente documento establece los términos y condiciones que regirán 
                    la adquisición de unidades habitacionales dentro del proyecto 
                    <strong>{{ proyecto.nombre }}</strong>.
                  </p>
                </div>

                <div class="termino-item">
                  <h3>2. Precio y Forma de Pago</h3>
                  <h4>2.1 Precio</h4>
                  <p>
                    El precio de cada unidad será el vigente al momento de la firma del 
                    contrato de compraventa. Los precios pueden estar sujetos a cambios 
                    sin previo aviso hasta la formalización del contrato.
                  </p>
                  <h4>2.2 Formas de Pago</h4>
                  <ul>
                    <li>Pago de contado con descuento especial</li>
                    <li>Financiamiento directo con el desarrollador</li>
                    <li>Crédito hipotecario con instituciones bancarias</li>
                    <li>Crédito INFONAVIT o FOVISSSTE</li>
                  </ul>
                </div>

                <div class="termino-item">
                  <h3>3. Plazos de Entrega</h3>
                  <p>
                    La fecha estimada de entrega es <strong>{{ proyecto.fechaEntregaEstimada }}</strong>. 
                    Esta fecha puede variar por causas de fuerza mayor, incluyendo pero no 
                    limitándose a:
                  </p>
                  <ul>
                    <li>Condiciones climáticas adversas</li>
                    <li>Retrasos en permisos gubernamentales</li>
                    <li>Caso fortuito o fuerza mayor</li>
                    <li>Modificaciones solicitadas por autoridades</li>
                  </ul>
                </div>

                <div class="termino-item">
                  <h3>4. Especificaciones y Acabados</h3>
                  <p>
                    Las especificaciones y acabados serán los establecidos en el catálogo 
                    de acabados vigente. El desarrollador se reserva el derecho de realizar 
                    cambios por equivalencia manteniendo o mejorando la calidad.
                  </p>
                </div>

                <div class="termino-item">
                  <h3>5. Garantías</h3>
                  <h4>5.1 Garantía Estructural</h4>
                  <p>5 años contra defectos estructurales</p>
                  <h4>5.2 Garantía de Construcción</h4>
                  <p>2 años contra defectos de construcción</p>
                  <h4>5.3 Garantía de Instalaciones</h4>
                  <p>1 año contra defectos en instalaciones eléctricas, hidráulicas y sanitarias</p>
                </div>

                <div class="termino-item">
                  <h3>6. Obligaciones del Comprador</h3>
                  <ul>
                    <li>Realizar los pagos en las fechas convenidas</li>
                    <li>Proporcionar documentación completa y veraz</li>
                    <li>Cumplir con el reglamento interno del desarrollo</li>
                    <li>Pagar gastos de escrituración e impuestos correspondientes</li>
                  </ul>
                </div>

                <div class="termino-item">
                  <h3>7. Penalizaciones</h3>
                  <h4>7.1 Por Mora en Pagos</h4>
                  <p>
                    En caso de retraso en los pagos, se aplicará una tasa de interés 
                    moratorio del 2% mensual sobre saldos vencidos.
                  </p>
                  <h4>7.2 Por Incumplimiento del Comprador</h4>
                  <p>
                    El incumplimiento grave por parte del comprador puede resultar 
                    en la rescisión del contrato con pérdida de pagos realizados.
                  </p>
                </div>

                <div class="termino-item">
                  <h3>8. Modificaciones y Cambios</h3>
                  <p>
                    Cualquier modificación a estos términos deberá ser acordada por 
                    escrito entre las partes. Las modificaciones menores por mejoras 
                    al proyecto no requerirán consentimiento del comprador.
                  </p>
                </div>

                <div class="termino-item">
                  <h3>9. Jurisdicción</h3>
                  <p>
                    Para la interpretación y cumplimiento de este contrato, las partes 
                    se someten a la jurisdicción de los tribunales de la Ciudad de México, 
                    renunciando a cualquier otro fuero que pudiera corresponderles.
                  </p>
                </div>

                <div class="termino-item">
                  <h3>10. Aceptación de Términos</h3>
                  <p>
                    La firma del contrato de compraventa implica la aceptación completa 
                    de estos términos y condiciones sin reserva alguna.
                  </p>
                </div>
              </div>

              <!-- Información Adicional -->
              <div class="additional-info mt-5">
                <div class="alert alert-info">
                  <h5><i class="fas fa-info-circle me-2"></i>Información Importante</h5>
                  <p>
                    Estos términos y condiciones están sujetos a las disposiciones 
                    del Código Civil, Ley Federal de Protección al Consumidor y 
                    demás normativas aplicables.
                  </p>
                  <p class="mb-0">
                    Para consultas específicas, contacte a nuestro departamento legal 
                    en <strong>legal@rentup.mx</strong>
                  </p>
                </div>
              </div>

              <!-- Fecha de Vigencia -->
              <div class="vigencia-info mt-4">
                <p class="text-muted text-center">
                  <small>
                    <i class="fas fa-calendar me-2"></i>
                    Vigencia: {{ proyecto.vigencia }} | 
                    Versión: {{ proyecto.version }} | 
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
  ubicacion: 'Polanco, Ciudad de México',
  tipo: 'Desarrollo Residencial',
  vigencia: 'Diciembre 2025',
  version: '2.1',
  fechaEntregaEstimada: 'Junio 2025'
})

const fechaActualizacion = ref('Octubre 2024')

useHead({
  title: `Términos y Condiciones - ${proyecto.value.nombre} - RentUP`,
  meta: [
    { 
      name: 'description', 
      content: `Términos y condiciones del proyecto ${proyecto.value.nombre}. Condiciones de compra, garantías y obligaciones.` 
    },
    { 
      name: 'keywords', 
      content: `términos condiciones, ${proyecto.value.nombre}, contrato compraventa, garantías` 
    },
    { property: 'og:title', content: `Términos y Condiciones - ${proyecto.value.nombre}` },
    { 
      property: 'og:description', 
      content: `Términos y condiciones completos del proyecto ${proyecto.value.nombre}` 
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

.termino-item {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #ffc107;
}

.termino-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.termino-item h4 {
  color: #495057;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
  font-size: 1.2rem;
}

.termino-item ul {
  margin-left: 1rem;
}

.termino-item ul li {
  margin-bottom: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .termino-item {
    padding: 1rem;
  }
  
  .termino-item h3 {
    font-size: 1.3rem;
  }
}
</style>