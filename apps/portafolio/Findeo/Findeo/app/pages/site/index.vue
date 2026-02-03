<template>
  <div id="wrapper">
    <!-- Modern Hero Banner -->
    <section class="hero-banner">
      <div class="hero-banner-content">
        <div class="hero-banner-overlay"></div>
        <div class="hero-banner-bg" style="background-image: url('/img/home-parallax.jpg')"></div>
        
        <div class="hero-banner-text">
          <div class="container-fluid">
            <div class="hero-inner">
              <h1 class="hero-title">
                <span class="hero-title-highlight">Encuentra tu hogar</span>
                <span class="hero-title-secondary">en el lugar perfecto</span>
              </h1>
              <p class="hero-subtitle">Accede a miles de propiedades seleccionadas con solo un clic</p>
              
              <div class="hero-features">
                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="sl sl-icon-home"></i>
                  </div>
                  <div class="feature-text">
                    <h4>15,000+</h4>
                    <p>Propiedades</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="sl sl-icon-people"></i>
                  </div>
                  <div class="feature-text">
                    <h4>50,000+</h4>
                    <p>Usuarios Activos</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <i class="sl sl-icon-check"></i>
                  </div>
                  <div class="feature-text">
                    <h4>100%</h4>
                    <p>Verificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="parallax" data-background="/img/home-parallax.jpg" data-color="#000" data-color-opacity="0.35" data-img-width="800" data-img-height="505">
      <div class="parallax-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Encuentra tu hogar ideal</h2>
              <p>Busca entre miles de inmuebles</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 1: Featured Properties with Gallery -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2>Propiedades Destacadas</h2>
          <p>Descubre las mejores propiedades del mes</p>
        </div>

        <div class="featured-gallery">
          <div class="gallery-main">
            <img 
              :src="featuredImages[activeFeaturedIndex].src" 
              :alt="featuredImages[activeFeaturedIndex].title"
              class="main-image"
            >
            <div class="image-counter">{{ activeFeaturedIndex + 1 }} / {{ featuredImages.length }}</div>
            
            <button class="gallery-nav prev" @click="prevFeatured" aria-label="Anterior">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button class="gallery-nav next" @click="nextFeatured" aria-label="Siguiente">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>

          <div class="gallery-info">
            <h3>{{ featuredImages[activeFeaturedIndex].title }}</h3>
            <p class="property-location">
              <i class="sl sl-icon-location"></i>
              {{ featuredImages[activeFeaturedIndex].location }}
            </p>
            <p class="property-description">{{ featuredImages[activeFeaturedIndex].description }}</p>
            
            <div class="property-details">
              <div class="detail-item">
                <span class="detail-label">Precio</span>
                <span class="detail-value">{{ featuredImages[activeFeaturedIndex].price }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Área</span>
                <span class="detail-value">{{ featuredImages[activeFeaturedIndex].area }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Habitaciones</span>
                <span class="detail-value">{{ featuredImages[activeFeaturedIndex].rooms }}</span>
              </div>
            </div>

            <NuxtLink to="/site/inmuebles" class="btn-view-more">
              Ver Más Propiedades <i class="fa fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="gallery-thumbnails">
          <button 
            v-for="(img, index) in featuredImages" 
            :key="index"
            @click="activeFeaturedIndex = index"
            :class="['thumbnail', { active: activeFeaturedIndex === index }]"
            :aria-label="`Imagen ${index + 1}`"
          >
            <img :src="img.thumb" :alt="img.title">
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2: Why Choose Us with Images -->
    <section class="why-us-section">
      <div class="container">
        <div class="section-header">
          <h2>¿Por Qué Elegirnos?</h2>
          <p>Ventajas que nos hacen diferentes</p>
        </div>

        <div class="why-us-content">
          <div class="why-us-image">
            <img 
              :src="whyUsImages[activeWhyUsIndex].src"
              :alt="whyUsImages[activeWhyUsIndex].alt"
              class="content-image"
            >
            <div class="image-dots">
              <button 
                v-for="(img, index) in whyUsImages" 
                :key="index"
                @click="activeWhyUsIndex = index"
                :class="['dot', { active: activeWhyUsIndex === index }]"
                :aria-label="`Ventaja ${index + 1}`"
              ></button>
            </div>
          </div>

          <div class="why-us-text">
            <div class="why-us-item" v-for="(item, index) in whyUsItems" :key="index">
              <div class="item-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="item-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
              <div class="item-icon">
                <i :class="item.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Success Stories with Image Carousel -->
    <section class="success-stories-section">
      <div class="container">
        <div class="section-header">
          <h2>Historias de Éxito</h2>
          <p>Clientes satisfechos que encontraron su hogar perfecto</p>
        </div>

        <div class="stories-carousel">
          <div class="story-card active" v-for="(story, index) in successStories" :key="index" v-show="index === activeStoryIndex">
            <div class="story-image-wrapper">
              <img :src="story.image" :alt="story.name" class="story-image">
              <div class="story-badge">{{ story.type }}</div>
            </div>

            <div class="story-content">
              <div class="story-header">
                <h3>{{ story.name }}</h3>
                <div class="story-stars">
                  <i class="fa fa-star" v-for="n in 5" :key="n"></i>
                </div>
              </div>

              <p class="story-text">{{ story.text }}</p>

              <div class="story-meta">
                <span class="meta-item">
                  <i class="sl sl-icon-location"></i>
                  {{ story.location }}
                </span>
                <span class="meta-item">
                  <i class="sl sl-icon-home"></i>
                  {{ story.propertyType }}
                </span>
              </div>

              <div class="story-date">{{ story.date }}</div>
            </div>
          </div>

          <button class="story-nav prev" @click="prevStory" aria-label="Historia anterior">
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="story-nav next" @click="nextStory" aria-label="Historia siguiente">
            <i class="fa fa-chevron-right"></i>
          </button>

          <div class="story-dots">
            <button 
              v-for="(story, index) in successStories" 
              :key="index"
              @click="activeStoryIndex = index"
              :class="['dot', { active: activeStoryIndex === index }]"
              :aria-label="`Historia ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>
    <!-- Search Section -->
    <div class="container margin-top-65">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-35">
            <strong class="headline-with-separator">Busca tu Propiedad Ideal</strong>
            <span>Filtra por ubicación, tipo, precio y más</span>
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="main-search-container">
            <form @submit.prevent="buscarInmuebles">
              <!-- Búsqueda Principal -->
              <div class="row with-forms">
                <!-- Ubicación -->
                <div class="col-md-4">
                  <div class="input-with-icon">
                    <input 
                      v-model="busqueda.ubicacion" 
                      type="text" 
                      placeholder="Ciudad, barrio o código postal" 
                    />
                    <i class="im im-icon-Map2"></i>
                  </div>
                </div>

                <!-- Tipo de Propiedad -->
                <div class="col-md-3">
                  <select v-model="busqueda.tipo" class="chosen-select-no-single">
                    <option value="">Tipo de propiedad</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="local">Local Comercial</option>
                    <option value="oficina">Oficina</option>
                    <option value="terreno">Terreno</option>
                  </select>
                </div>

                <!-- Operación -->
                <div class="col-md-3">
                  <select v-model="busqueda.operacion" class="chosen-select-no-single">
                    <option value="">Comprar o Alquilar</option>
                    <option value="venta">En Venta</option>
                    <option value="alquiler">En Alquiler</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>

                <!-- Botón de Búsqueda -->
                <div class="col-md-2">
                  <button type="submit" class="button fullwidth">
                    <i class="fa fa-search"></i> Buscar
                  </button>
                </div>
              </div>

              <!-- Filtros Avanzados (Colapsable) -->
              <div class="row with-forms" v-if="mostrarFiltrosAvanzados">
                <div class="col-md-12">
                  <h4 class="margin-top-20 margin-bottom-20">Filtros Avanzados</h4>
                </div>

                <!-- Rango de Precio -->
                <div class="col-md-6">
                  <label>Rango de Precio</label>
                  <div class="row">
                    <div class="col-md-6">
                      <input 
                        v-model="busqueda.precioMin" 
                        type="number" 
                        placeholder="Precio mínimo" 
                      />
                    </div>
                    <div class="col-md-6">
                      <input 
                        v-model="busqueda.precioMax" 
                        type="number" 
                        placeholder="Precio máximo" 
                      />
                    </div>
                  </div>
                </div>

                <!-- Área -->
                <div class="col-md-6">
                  <label>Área (m²)</label>
                  <div class="row">
                    <div class="col-md-6">
                      <input 
                        v-model="busqueda.areaMin" 
                        type="number" 
                        placeholder="Área mínima" 
                      />
                    </div>
                    <div class="col-md-6">
                      <input 
                        v-model="busqueda.areaMax" 
                        type="number" 
                        placeholder="Área máxima" 
                      />
                    </div>
                  </div>
                </div>

                <!-- Habitaciones y Baños -->
                <div class="col-md-3">
                  <label>Habitaciones</label>
                  <select v-model="busqueda.habitaciones" class="chosen-select-no-single">
                    <option value="">Cualquiera</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label>Baños</label>
                  <select v-model="busqueda.banos" class="chosen-select-no-single">
                    <option value="">Cualquiera</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label>Parqueaderos</label>
                  <select v-model="busqueda.parqueaderos" class="chosen-select-no-single">
                    <option value="">Cualquiera</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label>Antigüedad</label>
                  <select v-model="busqueda.antiguedad" class="chosen-select-no-single">
                    <option value="">Cualquiera</option>
                    <option value="nuevo">Nuevo</option>
                    <option value="5">Menos de 5 años</option>
                    <option value="10">Menos de 10 años</option>
                    <option value="20">Menos de 20 años</option>
                  </select>
                </div>
              </div>

              <!-- Toggle Filtros Avanzados -->
              <div class="row">
                <div class="col-md-12 text-center margin-top-20">
                  <a 
                    href="#" 
                    @click.prevent="mostrarFiltrosAvanzados = !mostrarFiltrosAvanzados"
                    class="button border"
                  >
                    <i :class="mostrarFiltrosAvanzados ? 'fa fa-angle-up' : 'fa fa-angle-down'"></i>
                    {{ mostrarFiltrosAvanzados ? 'Ocultar' : 'Mostrar' }} Filtros Avanzados
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row margin-top-20">
        <div class="col-md-4" v-for="i in 6" :key="i">
          <div class="listing-item">
            <img :src="`/img/listing-0${((i-1)%6)+1}.jpg`" :alt="`Propiedad ${i}`">
            <h3>Propiedad {{ i }}</h3>
            <NuxtLink :to="`/site/inmueble/${i}`">Ver detalles</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========== Modern Hero Banner ========== */

.hero-banner {
  position: relative;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-banner-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}

.hero-banner-text {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  width: 100%;
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 20px 0;
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hero-title-highlight {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-title-secondary {
  font-size: 48px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.85);
  margin: 20px 0 50px 0;
  font-weight: 300;
  letter-spacing: 0.5px;
}

/* Features Section */
.hero-features {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 60px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 200px;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transform: translateY(-5px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 28px;
}

.feature-icon i {
  color: white;
}

.feature-text h4 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.feature-text p {
  margin: 5px 0 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 1200px) {
  .hero-banner {
    height: 500px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-title-secondary {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-features {
    gap: 30px;
  }

  .feature-item {
    min-width: 180px;
    padding: 18px 25px;
  }
}

@media (max-width: 992px) {
  .hero-banner {
    height: 450px;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-title-secondary {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-features {
    gap: 25px;
  }

  .feature-item {
    min-width: 160px;
    padding: 16px 20px;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .feature-text h4 {
    font-size: 18px;
  }

  .feature-text p {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: 400px;
  }

  .hero-inner {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 36px;
    gap: 8px;
  }

  .hero-title-secondary {
    font-size: 30px;
  }

  .hero-subtitle {
    font-size: 15px;
    margin: 15px 0 40px 0;
  }

  .hero-features {
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;
  }

  .feature-item {
    width: 100%;
    min-width: unset;
    padding: 15px 20px;
  }

  .feature-icon {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }

  .feature-text h4 {
    font-size: 16px;
  }

  .feature-text p {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    height: 350px;
  }

  .hero-inner {
    padding: 0 15px;
  }

  .hero-title {
    font-size: 28px;
    gap: 6px;
  }

  .hero-title-secondary {
    font-size: 22px;
  }

  .hero-subtitle {
    font-size: 13px;
    margin: 12px 0 30px 0;
  }

  .hero-features {
    gap: 10px;
    margin-top: 30px;
  }

  .feature-item {
    padding: 12px 16px;
    gap: 12px;
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .feature-text h4 {
    font-size: 14px;
  }

  .feature-text p {
    font-size: 10px;
  }
}

/* ========== Featured Properties Section ========== */
.featured-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
}

.section-header p {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.featured-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 40px;
}

.gallery-main {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 500px;
  background: #e0e0e0;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-counter {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 107, 53, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.gallery-nav:hover {
  background: #ff6b35;
  color: white;
}

.gallery-nav.prev {
  left: 15px;
}

.gallery-nav.next {
  right: 15px;
}

.gallery-info h3 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.property-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.property-location i {
  color: #ff6b35;
}

.property-description {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
}

.property-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
}

.detail-item {
  text-align: center;
}

.detail-label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #ff6b35;
}

.btn-view-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-view-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.gallery-thumbnails {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail:hover {
  border-color: #ff6b35;
}

.thumbnail.active {
  border-color: #ff6b35;
  transform: scale(1.1);
}

/* ========== Why Us Section ========== */
.why-us-section {
  padding: 80px 0;
  background: white;
}

.why-us-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.why-us-image {
  position: relative;
}

.content-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: block;
}

.image-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: #ff6b35;
}

.dot.active {
  background: #ff6b35;
  width: 30px;
  border-radius: 6px;
}

.why-us-text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.why-us-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.why-us-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
}

.why-us-item:hover {
  transform: translateX(10px);
  background: #f0f0f0;
}

.item-number {
  font-size: 24px;
  font-weight: 700;
  color: #ff6b35;
  min-width: 40px;
}

.item-content h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #333;
}

.item-content p {
  font-size: 13px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.item-icon {
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #ff6b35;
  opacity: 0.3;
}

/* ========== Success Stories Section ========== */
.success-stories-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
}

.stories-carousel {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.story-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.story-image-wrapper {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.story-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.story-content {
  padding: 30px;
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.story-header h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #333;
}

.story-stars {
  display: flex;
  gap: 2px;
  color: #ffc107;
  font-size: 14px;
}

.story-text {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
  border-left: 3px solid #ff6b35;
  padding-left: 15px;
}

.story-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
}

.meta-item i {
  color: #ff6b35;
  font-size: 14px;
}

.story-date {
  font-size: 12px;
  color: #999;
  font-weight: 500;
}

.story-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.story-nav:hover {
  background: #ff6b35;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.story-nav.prev {
  left: -25px;
}

.story-nav.next {
  right: -25px;
}

.story-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

/* ========== Responsive ========== */
@media (max-width: 992px) {
  .featured-gallery {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .gallery-main {
    height: 350px;
  }

  .gallery-info h3 {
    font-size: 24px;
  }

  .why-us-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .why-us-item {
    gap: 15px;
  }

  .section-header h2 {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .featured-section,
  .why-us-section,
  .success-stories-section {
    padding: 50px 0;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .gallery-main {
    height: 300px;
  }

  .property-details {
    grid-template-columns: 1fr;
  }

  .story-nav {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  .story-nav.prev {
    left: 10px;
  }

  .story-nav.next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .featured-section,
  .why-us-section,
  .success-stories-section {
    padding: 40px 0;
  }

  .section-header h2 {
    font-size: 22px;
  }

  .section-header p {
    font-size: 14px;
  }

  .gallery-thumbnails {
    gap: 10px;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }

  .story-image-wrapper {
    height: 200px;
  }

  .story-content {
    padding: 20px;
  }

  .story-header h3 {
    font-size: 16px;
  }

  .story-text {
    font-size: 13px;
  }
}
</style>

<script setup>
import { ref } from 'vue'

// Estado de la búsqueda
const busqueda = ref({
  ubicacion: '',
  tipo: '',
  operacion: '',
  precioMin: '',
  precioMax: '',
  areaMin: '',
  areaMax: '',
  habitaciones: '',
  banos: '',
  parqueaderos: '',
  antiguedad: ''
})

const mostrarFiltrosAvanzados = ref(false)

// ========== Section 1: Featured Properties Gallery ==========
const activeFeaturedIndex = ref(0)

const featuredImages = ref([
  {
    src: '/img/listing-01.jpg',
    thumb: '/img/listing-01.jpg',
    title: 'Apartamento Lujo Centro',
    location: 'Centro, Capital',
    description: 'Hermoso apartamento en el corazón de la ciudad con vistas panorámicas y acabados de lujo.',
    price: '$450,000',
    area: '150 m²',
    rooms: '3'
  },
  {
    src: '/img/listing-02.jpg',
    thumb: '/img/listing-02.jpg',
    title: 'Casa Moderna con Jardín',
    location: 'Zona Residencial',
    description: 'Casa contemporánea con amplio jardín, piscina y espacios para toda la familia.',
    price: '$580,000',
    area: '250 m²',
    rooms: '4'
  },
  {
    src: '/img/listing-03.jpg',
    thumb: '/img/listing-03.jpg',
    title: 'Penthouse Premium',
    location: 'Sector Exclusivo',
    description: 'Penthouse de lujo con terraza privada, gimnasio y vistas al atardecer.',
    price: '$750,000',
    area: '200 m²',
    rooms: '3'
  }
])

const nextFeatured = () => {
  activeFeaturedIndex.value = (activeFeaturedIndex.value + 1) % featuredImages.value.length
}

const prevFeatured = () => {
  activeFeaturedIndex.value = (activeFeaturedIndex.value - 1 + featuredImages.value.length) % featuredImages.value.length
}

// ========== Section 2: Why Us Gallery ==========
const activeWhyUsIndex = ref(0)

const whyUsImages = ref([
  {
    src: '/img/listing-04.jpg',
    alt: 'Experiencia profesional'
  },
  {
    src: '/img/listing-05.jpg',
    alt: 'Variedad de propiedades'
  },
  {
    src: '/img/listing-06.jpg',
    alt: 'Mejor servicio'
  }
])

const whyUsItems = ref([
  {
    title: 'Experiencia Comprobada',
    description: '20 años ofreciendo soluciones inmobiliarias confiables',
    icon: 'sl sl-icon-trophy'
  },
  {
    title: 'Propiedades Verificadas',
    description: 'Cada inmueble es cuidadosamente revisado y certificado',
    icon: 'sl sl-icon-check'
  },
  {
    title: 'Atención Personalizada',
    description: 'Equipo dedicado a encontrar tu propiedad ideal',
    icon: 'sl sl-icon-people'
  },
  {
    title: 'Mejores Precios',
    description: 'Ofertas competitivas y transparentes sin sorpresas',
    icon: 'sl sl-icon-tag'
  }
])

// ========== Section 3: Success Stories ==========
const activeStoryIndex = ref(0)

const successStories = ref([
  {
    image: '/img/agent-01.jpg',
    name: 'Carlos Rodríguez',
    type: 'Comprador',
    text: 'Encontré mi casa de ensueño gracias al equipo profesional de esta agencia. El proceso fue transparente y sin complicaciones.',
    location: 'Centro Histórico',
    propertyType: 'Casa Familiar',
    date: 'Diciembre 2025',
    stars: 5
  },
  {
    image: '/img/agent-02.jpg',
    name: 'María García',
    type: 'Inversor',
    text: 'Excelente asesoramiento para invertir en bienes raíces. El equipo conoce el mercado a la perfección.',
    location: 'Zona Comercial',
    propertyType: 'Propiedad Comercial',
    date: 'Noviembre 2025',
    stars: 5
  },
  {
    image: '/img/agent-03.jpg',
    name: 'Juan López',
    type: 'Vendedor',
    text: 'Vendieron mi propiedad en menos tiempo del esperado y al mejor precio posible. Muy recomendado.',
    location: 'Barrio Moderno',
    propertyType: 'Apartamento',
    date: 'Octubre 2025',
    stars: 5
  }
])

const nextStory = () => {
  activeStoryIndex.value = (activeStoryIndex.value + 1) % successStories.value.length
}

const prevStory = () => {
  activeStoryIndex.value = (activeStoryIndex.value - 1 + successStories.value.length) % successStories.value.length
}

// Función de búsqueda
const buscarInmuebles = () => {
  // Construir query params
  const params = new URLSearchParams()
  
  Object.entries(busqueda.value).forEach(([key, value]) => {
    if (value) {
      params.append(key, value)
    }
  })
  
  // Navegar a la página de resultados
  navigateTo(`/site/inmuebles?${params.toString()}`)
}
</script>
