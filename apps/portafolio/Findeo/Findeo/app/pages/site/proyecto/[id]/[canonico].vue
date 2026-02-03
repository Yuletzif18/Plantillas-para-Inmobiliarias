<template>
  <div id="wrapper">
    <!-- Título del Proyecto -->
    <div id="titlebar" class="gradient margin-bottom-0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>{{ proyectoData.nombre }}</h2>
            <span><i class="fa fa-map-marker"></i> {{ proyectoData.ubicacion }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Galería -->
    <div class="container margin-top-30">
      <div class="row">
        <div class="col-md-12">
          <div class="property-slider" style="background: #f5f5f5; height: 400px; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
              <i class="im im-icon-Camera" style="font-size: 64px; color: #ccc;"></i>
              <p>Galería del proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="container margin-top-65">
      <div class="row">
        <div class="col-lg-8 col-md-7">
          <div class="property-description">
            <h3 class="desc-headline">Sobre el Proyecto</h3>
            <p>{{ proyectoData.descripcionCorta }}</p>
            <p>{{ proyectoData.descripcionLarga }}</p>
          </div>

          <div class="property-features margin-top-50">
            <h3 class="desc-headline">Características</h3>
            <div class="features-grid">
              <div class="feature-card">
                <i class="im im-icon-Home"></i>
                <h4>{{ proyectoData.totalUnidades }}</h4>
                <span>Unidades</span>
              </div>
              <div class="feature-card">
                <i class="im im-icon-Calendar"></i>
                <h4>{{ proyectoData.entrega }}</h4>
                <span>Entrega</span>
              </div>
              <div class="feature-card">
                <i class="im im-icon-Area-Chart"></i>
                <h4>{{ proyectoData.areaTotal }}</h4>
                <span>Área Total</span>
              </div>
            </div>
          </div>

          <div class="margin-top-50">
            <h3 class="desc-headline">Amenidades</h3>
            <div class="row">
              <div class="col-md-6">
                <ul style="list-style: none; padding: 0;">
                  <li v-for="(amenidad, i) in proyectoData.amenidades.slice(0, 7)" :key="i" style="padding: 8px 0; border-bottom: 1px solid #eee;">
                    <i class="fa fa-check-circle" style="color: #28a745; margin-right: 10px;"></i>{{ amenidad }}
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul style="list-style: none; padding: 0;">
                  <li v-for="(amenidad, i) in proyectoData.amenidades.slice(7)" :key="i" style="padding: 8px 0; border-bottom: 1px solid #eee;">
                    <i class="fa fa-check-circle" style="color: #28a745; margin-right: 10px;"></i>{{ amenidad }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="margin-top-50">
            <h3 class="desc-headline">Tipos de Unidades</h3>
            <div class="row">
              <div v-for="(tipo, i) in proyectoData.tiposUnidades" :key="i" class="col-md-6 margin-bottom-30">
                <div style="border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px;">
                  <h4 style="margin-bottom: 10px;">{{ tipo.nombre }}</h4>
                  <p style="color: #274abb; font-size: 20px; font-weight: 700;">{{ formatPrice(tipo.precioDesde) }}</p>
                  <p><i class="fa fa-arrows-alt"></i> {{ tipo.area }} | <i class="fa fa-bed"></i> {{ tipo.habitaciones }} hab | <i class="fa fa-bath"></i> {{ tipo.banos }} baños</p>
                  <p style="color: #666; font-size: 14px;">{{ tipo.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-5">
          <div class="sidebar">
            <div class="widget margin-bottom-40">
              <div style="background: #f9f9f9; padding: 25px; border-radius: 4px;">
                <h3>Información</h3>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                  <li style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <span>Estado:</span><strong>{{ proyectoData.estado }}</strong>
                  </li>
                  <li style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <span>Desde:</span><strong>{{ formatPrice(proyectoData.precioDesde) }}</strong>
                  </li>
                  <li style="display: flex; justify-content: space-between; padding: 12px 0;">
                    <span>Disponibles:</span><strong>{{ proyectoData.unidadesDisponibles }}</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div class="widget">
              <h3>Contacto</h3>
              <form @submit.prevent="enviarConsulta">
                <input v-model="form.nombre" type="text" placeholder="Nombre" required>
                <input v-model="form.email" type="email" placeholder="Email" required>
                <input v-model="form.telefono" type="tel" placeholder="Teléfono">
                <textarea v-model="form.mensaje" rows="4" placeholder="Mensaje"></textarea>
                <button type="submit" class="button fullwidth margin-top-10">
                  <i class="fa fa-envelope"></i> Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()

const proyectoData = ref({
  nombre: 'Residencial Los Álamos',
  ubicacion: 'Zona Norte, Ciudad',
  descripcionCorta: 'Un proyecto innovador que combina diseño contemporáneo con funcionalidad moderna.',
  descripcionLarga: 'Con amplias zonas verdes, amenidades de primer nivel y acabados de alta calidad.',
  estado: 'En Construcción',
  precioDesde: 180000,
  totalUnidades: 120,
  unidadesDisponibles: 85,
  entrega: '2026',
  areaTotal: '15,000 m²',
  amenidades: ['Piscina', 'Gimnasio', 'Salón social', 'Zona BBQ', 'Parque infantil', 'Cancha múltiple', 'Coworking', 'Seguridad 24/7', 'CCTV', 'Portería', 'Estacionamiento', 'Áreas verdes', 'Pet-friendly'],
  tiposUnidades: [
    { nombre: 'Apto 1 Hab', precioDesde: 180000, area: '55-65 m²', habitaciones: 1, banos: 1, descripcion: 'Ideal para personas solas o parejas.' },
    { nombre: 'Apto 2 Hab', precioDesde: 220000, area: '75-85 m²', habitaciones: 2, banos: 2, descripcion: 'Perfecto para familias pequeñas.' },
    { nombre: 'Apto 3 Hab', precioDesde: 280000, area: '95-110 m²', habitaciones: 3, banos: 2, descripcion: 'Espacioso para familias.' },
    { nombre: 'Penthouse', precioDesde: 380000, area: '140-160 m²', habitaciones: 3, banos: 3, descripcion: 'Exclusivo con terraza privada.' }
  ]
})

const form = ref({ nombre: '', email: '', telefono: '', mensaje: '' })

const formatPrice = (price) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)

const enviarConsulta = () => {
  alert('Gracias por tu interés.')
  form.value = { nombre: '', email: '', telefono: '', mensaje: '' }
}
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  text-align: center;
  padding: 30px 15px;
  background: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #ececec;
}

.feature-card i {
  font-size: 44px;
  color: #274abb;
  margin-bottom: 12px;
}

.feature-card h4 {
  font-size: 30px;
  font-weight: 700;
  margin: 8px 0;
}

.feature-card span {
  color: #888;
  font-size: 14px;
}
</style>
