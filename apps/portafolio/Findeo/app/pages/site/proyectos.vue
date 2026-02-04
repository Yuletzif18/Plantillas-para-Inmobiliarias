<template>
  <div id="wrapper">
    <!-- Título de Página -->
    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Proyectos Inmobiliarios</h2>
            <span>Descubre nuestros desarrollos exclusivos</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="container margin-top-65">
      <div class="row">
        <!-- Proyectos Grid -->
        <div class="col-md-12">
          <div class="row">
            <!-- Proyecto 1 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/1/residencial-los-alamos`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-01.jpg" alt="Proyecto 1">
                  
                  <div class="listing-badge now-open">En Construcción</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="4.5">4.5</div>
                    
                    <h3>Residencial Los Álamos</h3>
                    <span>Zona Norte, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>120 Unidades</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entrega 2026</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Check"></i>
                      <span>Disponibles</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$180,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Proyecto 2 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/2/torres-del-parque`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-02.jpg" alt="Proyecto 2">
                  
                  <div class="listing-badge now-open">Preventa</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="4.8">4.8</div>
                    
                    <h3>Torres del Parque</h3>
                    <span>Centro, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>85 Unidades</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entrega 2025</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Check"></i>
                      <span>Pocas unidades</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$220,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Proyecto 3 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/3/villa-campestre`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-03.jpg" alt="Proyecto 3">
                  
                  <div class="listing-badge sold-out">Agotado</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="5.0">5.0</div>
                    
                    <h3>Villa Campestre</h3>
                    <span>Zona Sur, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>45 Casas</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entregado</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Close"></i>
                      <span>Agotado</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$350,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Proyecto 4 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/4/urban-living`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-04.jpg" alt="Proyecto 4">
                  
                  <div class="listing-badge now-open">En Construcción</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="4.6">4.6</div>
                    
                    <h3>Urban Living</h3>
                    <span>Zona Este, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>200 Unidades</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entrega 2027</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Check"></i>
                      <span>Disponibles</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$155,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Proyecto 5 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/5/green-park-residences`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-05.jpg" alt="Proyecto 5">
                  
                  <div class="listing-badge now-open">Preventa</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="4.7">4.7</div>
                    
                    <h3>Green Park Residences</h3>
                    <span>Zona Oeste, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>150 Unidades</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entrega 2026</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Check"></i>
                      <span>Disponibles</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$195,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Proyecto 6 -->
            <div class="col-lg-4 col-md-6">
              <NuxtLink :to="`/site/proyecto/6/skyline-tower`" class="listing-item-container compact">
                <div class="listing-item">
                  <img src="/img/listing-06.jpg" alt="Proyecto 6">
                  
                  <div class="listing-badge now-open">En Construcción</div>
                  
                  <div class="listing-item-content">
                    <div class="numerical-rating high" data-rating="4.9">4.9</div>
                    
                    <h3>Skyline Tower</h3>
                    <span>Centro Financiero, Ciudad</span>
                  </div>
                  
                  <div class="listing-item-details">
                    <div class="listing-detail-item">
                      <i class="im im-icon-Home"></i>
                      <span>180 Unidades</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Calendar"></i>
                      <span>Entrega 2028</span>
                    </div>
                    <div class="listing-detail-item">
                      <i class="im im-icon-Check"></i>
                      <span>Disponibles</span>
                    </div>
                  </div>
                  
                  <div class="listing-item-info">
                    <div class="listing-item-price">
                      <span class="price-from">Desde</span>
                      <span class="price">$280,000</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Info adicional -->
      <div class="row margin-top-65">
        <div class="col-md-12">
          <div class="style-2">
            <div class="notification notice large">
              <h3><i class="fa fa-info-circle"></i> ¿Buscas información personalizada?</h3>
              <p>Nuestro equipo está disponible para brindarte asesoría especializada sobre cada proyecto. Contáctanos y te ayudaremos a encontrar la opción perfecta para ti.</p>
              <NuxtLink to="/site/contacto" class="button margin-top-15">Contactar Ahora</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Página de proyectos inmobiliarios
</script>

<style scoped>
.listing-badge.sold-out {
  background-color: #dc3545;
}

.listing-badge.now-open {
  background-color: #28a745;
}

.listing-item-price .price-from {
  display: block;
  font-size: 13px;
  color: #888;
  margin-bottom: 5px;
}

.listing-item-details {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-top: 1px solid #eee;
}

.listing-detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
}

.listing-detail-item i {
  font-size: 18px;
  margin-bottom: 5px;
  color: #666;
}
</style>
