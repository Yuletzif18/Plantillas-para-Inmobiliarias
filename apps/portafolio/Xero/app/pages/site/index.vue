<template>
  <div>
    <div class="preloader" v-if="isLoading">
      <div class="preloader-inner">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>

    <div id="main-wrapper" v-show="!isLoading">
      <div class="image-cover hero_banner" style="background:url(/img/png/banner-home.png) no-repeat;" data-overlay="4">
        <div class="container">
          <h1 class="big-header-capt mb-0">Busca Tu Próximo Hogar</h1>
          <p class="text-center">Encuentra propiedades nuevas y destacadas ubicadas en tu ciudad local.</p>

          <div class="row justify-content-center mt-5">
            <div class="col-xl-10 col-lg-11 col-md-12">
              <div class="full_search_box nexio_search lightanic_search hero_search-radius modern">
                <div class="search_hero_wrapping">
                  <form @submit.prevent="handleSearch">
                    <div class="row">
                      <div class="col-lg-4 col-md-3 col-sm-12">
                        <div class="form-group">
                          <label>Ciudad/Ubicación</label>
                          <div class="input-with-icon">
                            <select v-model="searchForm.city" class="form-control">
                              <option value="">Selecciona una ciudad</option>
                              <option value="madrid">Madrid</option>
                              <option value="barcelona">Barcelona</option>
                              <option value="valencia">Valencia</option>
                              <option value="sevilla">Sevilla</option>
                              <option value="bilbao">Bilbao</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3 col-md-3 col-sm-12">
                        <div class="form-group">
                          <label>Tipo de Propiedad</label>
                          <div class="input-with-icon">
                            <select v-model="searchForm.type" class="form-control">
                              <option value="">Todos los tipos</option>
                              <option value="apartment">Apartamento</option>
                              <option value="house">Casa</option>
                              <option value="villa">Villa</option>
                              <option value="commercial">Comercial</option>
                              <option value="office">Oficina</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="form-group none">
                          <label>Rango de Precio</label>
                          <div class="input-with-icon">
                            <select v-model="searchForm.priceRange" class="form-control">
                              <option value="">Cualquier precio</option>
                              <option value="0-100000">Hasta €100,000</option>
                              <option value="100000-300000">€100,000 - €300,000</option>
                              <option value="300000-500000">€300,000 - €500,000</option>
                              <option value="500000-1000000">€500,000 - €1,000,000</option>
                              <option value="1000000+">Más de €1,000,000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div class="col-lg-1 col-md-2 col-sm-12 small-padd">
                        <div class="form-group none">
                          <button type="submit" class="btn btn-danger full-width">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Banner End -->
      
      <!-- Our Awards Start -->
      <section class="p-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-11 col-lg-11 col-md-12">
              <div class="_awards_group">	
                <ul class="_awards_lists">
                  <!-- single list -->
                  <li>
                    <div class="_awards_list_wrap">
                      <div class="d-flex align-items-center">
                        <div class="rats-thumb">
                          <img src="/img/svg/verified.svg" class="img-fluid" width="70" alt="Trust">
                        </div>
                        <div class="ploi ps-3">
                          <div class="d-flex align-items-center">
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning"></i>
                          </div>
                          <div class="explio mt-1">
                            <p class="m-0 text-muted">3612 Total Reviews</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- single list -->
                  <li>
                    <div class="_awards_list_wrap">
                      <div class="d-flex align-items-center">
                        <div class="rats-thumb">
                          <img src="/img/svg/verified.svg" class="img-fluid" width="70" alt="Cap">
                        </div>
                        <div class="ploi ps-3">
                          <div class="d-flex align-items-center">
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning"></i>
                          </div>
                          <div class="explio mt-1">
                            <p class="m-0 text-muted">4589 Total Reviews</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- single list -->
                  <li>
                    <div class="_awards_list_wrap">
                      <div class="d-flex align-items-center">
                        <div class="rats-thumb">
                          <img src="/img/svg/verified.svg" class="img-fluid" width="70" alt="Clutch">
                        </div>
                        <div class="ploi ps-3">
                          <div class="d-flex align-items-center">
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning me-1"></i>
                            <i class="fas fa-star text-warning"></i>
                          </div>
                          <div class="explio mt-1">
                            <p class="m-0 text-muted">3625 Total Reviews</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Our Awards End -->
      
      <!-- Property Category Start -->
      <section class="min">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Elige Tu Categoría</h2>
                <p>Descubre la amplia variedad de propiedades que tenemos disponibles para ti. Desde apartamentos modernos hasta casas familiares, encuentra exactamente lo que buscas.</p>
              </div>
            </div>
          </div>
          
          <div class="row justify-content-center mt-4">
            <!-- Single Category -->
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="category in propertyCategories" :key="category.id">
              <div class="_category_box">
                <NuxtLink :to="category.link">
                  <div class="_category_elio">
                    <div class="_category_thumb">
                      <img :src="category.icon" class="img-fluid" alt="">
                    </div>
                    <div class="_category_caption">
                      <h4>{{ category.name }}</h4>
                      <span>{{ category.count }} Propiedades</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>	
        </div>
      </section>
      <!-- Property Category End -->
      
      <!-- Featured Properties Start -->
      <section class="pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Propiedades Destacadas</h2>
                <p>Explora nuestra selección de propiedades premium cuidadosamente seleccionadas. Cada una ofrece características únicas y ubicaciones privilegiadas para tu comodidad.</p>
              </div>
            </div>
          </div>
          
          <div class="row g-4 justify-content-center">
            <!-- Single Property -->
            <div 
              v-for="property in featuredProperties" 
              :key="property.id"
              class="col-lg-4 col-md-6 col-sm-12"
            >
              <div class="property-listing property-2 h-100">
                <div class="listing-img-wrapper">
                  <div class="_exlio_125">{{ property.status }}</div>
                  <div class="list-img-slide">
                    <div class="click">
                      <div>
                        <NuxtImg 
                          :src="property.image" 
                          :alt="property.title"
                          class="img-fluid mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="listing-detail-wrapper">
                  <div class="listing-short-detail-wrap">
                    <div class="_card_list_flex mb-2">
                      <div class="_card_list_left">
                        <div class="_card_list_rent">
                          <span>{{ property.type }}</span>
                        </div>
                      </div>
                      <div class="_card_list_right">
                        <div class="_card_list_price">
                          <span>€{{ formatPrice(property.price) }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="_card_list_flex">
                      <h4 class="listing-name verified">
                        <NuxtLink :to="`/site/inmueble/${property.id}`">
                          {{ property.title }}
                        </NuxtLink>
                      </h4>
                    </div>
                  </div>
                </div>
                
                <div class="price-features-wrapper">
                  <div class="list-fx-features">
                    <div class="listing-card-info-icon">
                      <div class="inc-fleat-icon"><img src="/img/svg/bed.svg" width="13" alt="" /></div>{{ property.bedrooms }} Habitaciones
                    </div>
                    <div class="listing-card-info-icon">
                      <div class="inc-fleat-icon"><img src="/img/svg/bathtub.svg" width="13" alt="" /></div>{{ property.bathrooms }} Baños
                    </div>
                    <div class="listing-card-info-icon">
                      <div class="inc-fleat-icon"><img src="/img/svg/move.svg" width="13" alt="" /></div>{{ property.area }} m²
                    </div>
                  </div>
                </div>
                
                <div class="listing-detail-footer">
                  <div class="footer-first">
                    <div class="foot-location"><i class="ti-location-pin me-2"></i>{{ property.location }}</div>
                  </div>
                  <div class="footer-flex">
                    <ul class="selio_style">
                      <li>
                        <div class="drio_wrap">
                          <div class="drio_profile">
                            <!-- Imagen de avatar removida por petición; se muestra un icono genérico -->
                            <i class="fa fa-user-circle fa-2x text-muted" aria-hidden="true"></i>
                          </div>
                          <div class="drio_wrap_caption">
                            <h6>{{ property.agent }}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="stress_link">
                          <button type="button" class="btn btn-link p-0 me-2" aria-label="Enviar mensaje" data-bs-toggle="modal" data-bs-target="#autho-message">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                          </button>
                          <button type="button" class="btn btn-link p-0" aria-label="Llamar">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>	
        </div>
      </section>
      <!-- Featured Properties End -->
      
      <!-- Top Agents Start -->
      <section class="image-cover" style="background:#0f161a; padding: 80px 0;">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center light">
                <h2>Nuestros Agentes Destacados</h2>
                <p>Conoce a nuestro equipo de profesionales inmobiliarios altamente capacitados. Con años de experiencia, te ayudarán a encontrar la propiedad perfecta.</p>
              </div>
            </div>
          </div>
          
          <div class="row g-4 justify-content-center mt-4">
            <!-- Single Agent -->
            <div v-for="agent in featuredAgents" :key="agent.id" class="col-lg-3 col-md-4 col-sm-6">
              <div class="agent-card">
                <div class="agent-card-inner">
                  <div class="agent-avatar-section">
                    <div class="agent-avatar-initials">{{ agent.name.split(' ').map(n => n[0]).join('') }}</div>
                  </div>
                  <div class="agent-info-section">
                    <h4 class="agent-name">{{ agent.name }}</h4>
                    <span class="agent-title">{{ agent.title }}</span>
                    <div class="agent-property-counter">
                      <span>{{ agent.properties }} Propiedades</span>
                    </div>
                  </div>
                  <div class="agent-actions-section">
                    <div class="d-flex gap-2 justify-content-center">
                      <button type="button" class="btn btn-outline-light btn-sm agent-btn" aria-label="Enviar mensaje">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-outline-light btn-sm agent-btn" aria-label="Llamar">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Top Agents End -->
      
      <!-- Property By Location Start -->
      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Principales Destinos Inmobiliarios</h2>
                <p>Descubre las ubicaciones más populares y con mayor demanda. Estas ciudades ofrecen las mejores oportunidades de inversión y calidad de vida.</p>
              </div>
            </div>
          </div>
          
          <div class="row justify-content-center g-4">
            <div v-for="location in topLocations" :key="location.id" :class="location.class">
              <NuxtLink :to="location.link" class="img-wrap">
                <div class="location_wrap_content visible">
                  <div class="location_wrap_content_first">
                    <h4>{{ location.name }}</h4>
                    <span>{{ location.properties }} Propiedades</span>
                  </div>
                  <div class="location_btn"><i class="fa fa-arrow-right"></i></div>
                </div>
                <div class="img-wrap-background" :style="`background-image: url(${location.image});`"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <!-- Property By Location End -->
      
      <!-- Smart Testimonials Start -->
      <section class="gray-simple">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Excelentes Reseñas de Clientes</h2>
                <p>Lee las experiencias de nuestros clientes satisfechos. Sus testimonios reflejan nuestro compromiso con la excelencia en el servicio inmobiliario.</p>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="item-slide space">
                <!-- Single Testimonial -->
                <div v-for="testimonial in testimonials" :key="testimonial.id" class="single_items">
                  <div class="_testimonial_wrios">
                    <div class="_testimonial_flex">
                      <div class="_testimonial_flex_first">
                        <div class="_tsl_flex_thumb">
                          <!-- Avatar reemplazado por iniciales del nombre -->
                          <div class="avatar-initials">{{ testimonial.name.split(' ').map(n => n[0]).join('') }}</div>
                        </div>
                        <div class="_tsl_flex_caption">
                          <h4>{{ testimonial.name }}</h4>
                          <span>{{ testimonial.role }}</span>
                          <div class="_ovr_posts"><span>{{ testimonial.rating }}.0</span></div>
                        </div>
                      </div>
                      <div class="_testimonial_flex_last">
                        <div class="_testimonial_flex_rat">
                          <i v-for="i in 5" :key="i" 
                             :class="i <= testimonial.rating ? 'fa fa-star' : 'fa fa-star-o'"></i>
                        </div>
                      </div>
                    </div>
                    <div class="_testimonial_caption">
                      <p>{{ testimonial.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Smart Testimonials End -->
      
      <!-- Article Start -->
      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Últimas Noticias y Artículos</h2>
                <p>Mantente informado sobre las tendencias del mercado inmobiliario, consejos de inversión y novedades del sector que te ayudarán a tomar mejores decisiones.</p>
              </div>
            </div>
          </div>
          
          <div class="row justify-content-center g-4">
            <!-- Single blog Grid -->
            <div v-for="post in blogPosts" :key="post.id" class="col-lg-4 col-md-4">
              <div class="grid_blog_box h-100">
                <div class="gtid_blog_thumb">
                  <NuxtLink :to="post.link">
                    <img :src="post.image" class="img-fluid" alt="" />
                  </NuxtLink>
                  <div class="gtid_blog_info">
                    <span>{{ post.day }}</span>{{ post.month }} {{ post.year }}
                  </div>
                </div>								
                
                <div class="blog-body">
                  <h4 class="bl-title">
                    <NuxtLink :to="post.link">{{ post.title }}</NuxtLink>
                    <span :class="`latest_new_post ${post.tag.toLowerCase()}`">{{ post.tag }}</span>
                  </h4>
                  <p>{{ post.excerpt }}</p>
                </div>
                
                <div class="modern_property_footer">
                  <div class="property-author">
                    <!-- Avatar del autor reemplazado por iniciales -->
                    <div class="author-initials">{{ post.author.split(' ').map(n => n[0]).join('') }}</div>
                    <span>{{ post.author }}</span>
                  </div>
                  <span class="article-pulish-date">
                    <i class="ti-comment-alt me-2"></i>{{ post.comments }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="clearfix"></div>
      <!-- Article End -->
      
      <!-- Contact Section Start -->
      <section class="gray-simple">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="sec-heading center">
                <h2>Contáctanos</h2>
                <p>Estamos aquí para ayudarte con todas tus necesidades inmobiliarias. Ponte en contacto con nosotros y descubre cómo podemos ayudarte a encontrar tu hogar ideal.</p>
              </div>
            </div>
          </div>
          
          <div class="row">
            <!-- Contact Info Cards -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="contact-info-card">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center p-4">
                    <div class="contact-icon mb-3">
                      <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
                    </div>
                    <h5 class="card-title">Nuestra Oficina</h5>
                    <p class="card-text">
                      Av. Reforma 123, Piso 15<br>
                      Col. Centro, Ciudad de México<br>
                      C.P. 06040
                    </p>
                    <p class="text-muted">
                      <small>Lun-Vie: 9:00-19:00 | Sáb: 9:00-15:00</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="contact-info-card">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center p-4">
                    <div class="contact-icon mb-3">
                      <i class="fas fa-phone fa-2x text-success"></i>
                    </div>
                    <h5 class="card-title">Teléfono</h5>
                    <p class="card-text">
                      <a href="tel:+525512345678" class="text-decoration-none">
                        +52 55 1234-5678
                      </a>
                    </p>
                    <p class="card-text">
                      <a 
                        href="https://wa.me/525512345678?text=Hola, me interesa obtener información sobre sus servicios inmobiliarios" 
                        class="text-decoration-none text-success"
                        target="_blank"
                      >
                        <i class="fab fa-whatsapp me-1"></i>WhatsApp
                      </a>
                    </p>
                    <p class="text-muted">
                      <small>Disponible 24/7 para emergencias</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="contact-info-card">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-body text-center p-4">
                    <div class="contact-icon mb-3">
                      <i class="fas fa-envelope fa-2x text-warning"></i>
                    </div>
                    <h5 class="card-title">Email</h5>
                    <p class="card-text">
                      <a href="mailto:info@rentup.com" class="text-decoration-none">
                        info@rentup.com
                      </a>
                    </p>
                    <p class="card-text">
                      <a href="mailto:ventas@rentup.com" class="text-decoration-none">
                        ventas@rentup.com
                      </a>
                    </p>
                    <p class="text-muted">
                      <small>Respuesta en menos de 2 horas</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Contact Form -->
          <div class="row justify-content-center mt-5">
            <div class="col-lg-8">
              <div class="quick-contact-form">
                <div class="card border-0 shadow">
                  <div class="card-header bg-primary text-white text-center">
                    <h4 class="mb-0">Envíanos un Mensaje Rápido</h4>
                  </div>
                  <div class="card-body p-4">
                    <form @submit.prevent="handleQuickContact">
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Nombre completo"
                            v-model="quickContactForm.name"
                            required
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input 
                            type="email" 
                            class="form-control" 
                            placeholder="Email"
                            v-model="quickContactForm.email"
                            required
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <input 
                            type="tel" 
                            class="form-control" 
                            placeholder="Teléfono"
                            v-model="quickContactForm.phone"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <select class="form-control" v-model="quickContactForm.subject" required>
                            <option value="">Selecciona un asunto</option>
                            <option value="compra">Interés en Compra</option>
                            <option value="venta">Quiero Vender</option>
                            <option value="alquiler">Busco Alquiler</option>
                            <option value="valoracion">Valoración de Propiedad</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3">
                        <textarea 
                          class="form-control" 
                          rows="4" 
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                          v-model="quickContactForm.message"
                          required
                        ></textarea>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-lg px-5">
                          <i class="fas fa-paper-plane me-2"></i>Enviar Mensaje
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Section End -->
      
      <!-- Contact Boxes Section Start -->
      <section class="pt-0">
        <div class="container">
          <div class="row">
            <!-- Contact Support Box -->
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="contact-box">
                <div class="contact-box-icon">
                  <i class="ti-headphone-alt text-danger"></i>
                </div>
                <div class="contact-box-content">
                  <h4>Soporte Técnico</h4>
                  <p class="mb-1">soporte@rentup.com</p>
                  <span class="contact-phone">+52 55 1234-5679</span>
                </div>
              </div>
            </div>
            
            <!-- Contact Sales Box -->
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="contact-box">
                <div class="contact-box-icon">
                  <i class="ti-user text-danger"></i>
                </div>
                <div class="contact-box-content">
                  <h4>Contactar Ventas</h4>
                  <p class="mb-1">ventas@rentup.com</p>
                  <span class="contact-phone">+52 55 1234-5678</span>
                </div>
              </div>
            </div>
            
            <!-- Live Chat Box -->
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="contact-box">
                <div class="contact-box-icon">
                  <i class="ti-comment-alt text-danger"></i>
                </div>
                <div class="contact-box-content">
                  <h4>Chat en Vivo</h4>
                  <span class="contact-phone">+52 55 1234-5678</span>
                  <a 
                    href="https://wa.me/525512345678?text=Hola, necesito ayuda con..." 
                    class="live-chat-btn"
                    target="_blank"
                  >
                    Iniciar Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Map and Additional Contact Form Section -->
      <section class="gray-simple">
        <div class="container">
          <div class="row">
            <!-- Contact Form -->
            <div class="col-lg-8 col-md-7">
              <div class="property_block_wrap">
                <div class="property_block_wrap_header">
                  <h4 class="property_block_title">Completa el Formulario</h4>
                  <p class="text-muted">Envíanos tu consulta y te responderemos en la brevedad</p>
                </div>
                
                <div class="block-body">
                  <form @submit.prevent="handleDetailedContact">
                    <div class="row">
                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Nombre Completo *</label>
                          <input 
                            type="text" 
                            class="form-control simple"
                            v-model="detailedContactForm.name"
                            placeholder="Tu nombre completo"
                            required
                          >
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Email *</label>
                          <input 
                            type="email" 
                            class="form-control simple"
                            v-model="detailedContactForm.email"
                            placeholder="tu@email.com"
                            required
                          >
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Teléfono</label>
                          <input 
                            type="tel" 
                            class="form-control simple"
                            v-model="detailedContactForm.phone"
                            placeholder="+52 55 0000-0000"
                          >
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Tipo de Consulta *</label>
                          <select 
                            class="form-control simple"
                            v-model="detailedContactForm.consultType"
                            required
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="compra">Comprar Propiedad</option>
                            <option value="venta">Vender Propiedad</option>
                            <option value="alquiler">Alquilar Propiedad</option>
                            <option value="inversion">Oportunidades de Inversión</option>
                            <option value="valoracion">Valoración de Propiedad</option>
                            <option value="otro">Otra Consulta</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group">
                      <label>Asunto *</label>
                      <input 
                        type="text" 
                        class="form-control simple"
                        v-model="detailedContactForm.subject"
                        placeholder="Asunto de tu mensaje"
                        required
                      >
                    </div>
                    
                    <div class="form-group">
                      <label>Mensaje *</label>
                      <textarea 
                        class="form-control simple" 
                        rows="6"
                        v-model="detailedContactForm.message"
                        placeholder="Describe tu consulta en detalle..."
                        required
                      ></textarea>
                    </div>
                    
                    <div class="form-group">
                      <div class="form-check mb-3">
                        <input 
                          class="form-check-input" 
                          type="checkbox" 
                          id="acceptTerms"
                          v-model="detailedContactForm.acceptTerms"
                          required
                        >
                        <label class="form-check-label" for="acceptTerms">
                          Acepto los <NuxtLink to="/site/legal" target="_blank">términos y condiciones</NuxtLink> y la <NuxtLink to="/site/privacidad" target="_blank">política de privacidad</NuxtLink>
                        </label>
                      </div>
                      <button 
                        class="btn btn-danger btn-lg px-4" 
                        type="submit"
                        :disabled="submittingDetailed"
                      >
                        <span v-if="submittingDetailed" class="spinner-border spinner-border-sm me-2"></span>
                        {{ submittingDetailed ? 'Enviando...' : 'Enviar Consulta' }}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <!-- Map and Office Info -->
            <div class="col-lg-4 col-md-5">
              <div class="contact-map-section">
                <div class="office-location-card mb-4">
                  <h5 class="mb-3">Visítanos</h5>
                  <div class="office-info">
                    <p class="mb-2">
                      <i class="fas fa-map-marker-alt me-2 text-danger"></i>
                      <strong>Dirección:</strong><br>
                      Av. Reforma 123, Piso 15<br>
                      Col. Centro, Ciudad de México<br>
                      C.P. 06040
                    </p>
                    <p class="mb-2">
                      <i class="fas fa-clock me-2 text-danger"></i>
                      <strong>Horarios:</strong><br>
                      Lunes a Viernes: 9:00 - 19:00<br>
                      Sábados: 9:00 - 15:00<br>
                      Domingos: Cerrado
                    </p>
                    <p class="mb-3">
                      <i class="fas fa-parking me-2 text-danger"></i>
                      Estacionamiento disponible
                    </p>
                  </div>
                </div>
                
                <!-- Google Maps Embed -->
                <div class="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.625179311465!2d-99.16617368549317!3d19.42690798688446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f9c5f8b7d%3A0x8b1f4c7b1c1e8b7d!2sAv.%20Reforma%2C%20Cuauht%C3%A9moc%2C%2006040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1699277423847!5m2!1ses!2smx"
                    width="100%" 
                    height="350" 
                    style="border:0; border-radius: 10px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact Boxes Section End -->
      
      <!-- Call To Action Start -->
      <section class="bg-danger call_action_wrap-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="call_action_wrap">
                <div class="call_action_wrap-head">
                  <h3>¿Tienes Preguntas?</h3>
                  <span>Te ayudaremos a crecer y alcanzar tus objetivos inmobiliarios.</span>
                </div>
                <NuxtLink to="/site/contacto" class="btn btn-call_action_wrap">Contáctanos Hoy</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Call To Action End -->
    </div>
  </div>
</template>

<script setup>
// Meta información de la página
useHead({
  title: 'RentUP - Portal Inmobiliario Premium',
  meta: [
    { name: 'description', content: 'Encuentra propiedades nuevas y destacadas en tu ciudad. Busca tu próximo hogar con RentUP, el portal inmobiliario líder.' },
    { name: 'keywords', content: 'inmobiliaria, propiedades, alquiler, venta, casas, apartamentos, villas, inmuebles' },
    { name: 'author', content: 'RentUP Team' },
    { property: 'og:title', content: 'RentUP - Portal Inmobiliario Premium' },
    { property: 'og:description', content: 'Encuentra propiedades nuevas y destacadas en tu ciudad local' }
  ]
})

// Data reactiva
const searchForm = ref({
  type: '',
  operation: '',
  city: '',
  priceRange: ''
})

const featuredProperties = ref([])
const testimonials = ref([])
const blogPosts = ref([])
const featuredAgents = ref([])
const topLocations = ref([])
const propertyCategories = ref([])

const statistics = ref({
  totalProperties: 1250,
  happyClients: 3400,
  citiesCovered: 25,
  experienceYears: 8
})

const quickContactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const detailedContactForm = ref({
  name: '',
  email: '',
  phone: '',
  consultType: '',
  subject: '',
  message: '',
  acceptTerms: false
})

const submittingDetailed = ref(false)
const isLoading = ref(true)

// Métodos
const loadFeaturedProperties = async () => {
  try {
    featuredProperties.value = [
      {
        id: 1,
        title: 'Casa Familiar de Lujo',
        price: 450000,
        type: 'Apartamento',
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        location: 'Madrid, España',
        image: '/img/png/p-1.png',
        status: 'En Alquiler',
        agent: 'Carlos Mendoza'
      },
      {
        id: 2,
        title: 'Hermosa Villa con Vista',
        price: 850000,
        type: 'Villa',
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        location: 'Barcelona, España',
        image: '/img/png/p-2.png',
        status: 'En Venta',
        agent: 'María García'
      },
      {
        id: 3,
        title: 'Palacete en Alquiler',
        price: 1200000,
        type: 'Casa',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        location: 'Valencia, España',
        image: '/img/png/p-3.png',
        status: 'En Alquiler',
        agent: 'Antonio López'
      }
    ]
  } catch (error) {
    console.error('Error loading featured properties:', error)
  }
}

const loadPropertyCategories = async () => {
  try {
    propertyCategories.value = [
      {
        id: 1,
        name: 'Apartamentos',
        count: 507,
        icon: '/img/png/c-1.png',
        link: '/site/inmuebles?type=apartment'
      },
      {
        id: 2,
        name: 'Casas',
        count: 234,
        icon: '/img/png/c-2.png',
        link: '/site/inmuebles?type=house'
      },
      {
        id: 3,
        name: 'Villas',
        count: 156,
        icon: '/img/png/c-6.png',
        link: '/site/inmuebles?type=villa'
      },
      {
        id: 4,
        name: 'Comercial',
        count: 89,
        icon: '/img/png/c-1.png',
        link: '/site/inmuebles?type=commercial'
      },
      {
        id: 5,
        name: 'Oficinas',
        count: 178,
        icon: '/img/png/c-2.png',
        link: '/site/inmuebles?type=office'
      },
      {
        id: 6,
        name: 'Garajes',
        count: 67,
        icon: '/img/png/c-6.png',
        link: '/site/inmuebles?type=garage'
      },
      {
        id: 7,
        name: 'Industrial',
        count: 45,
        icon: '/img/png/c-1.png',
        link: '/site/inmuebles?type=industrial'
      },
      {
        id: 8,
        name: 'Terrenos',
        count: 123,
        icon: '/img/png/c-2.png',
        link: '/site/inmuebles?type=land'
      }
    ]
  } catch (error) {
    console.error('Error loading property categories:', error)
  }
}

const loadFeaturedAgents = async () => {
  try {
    featuredAgents.value = [
      {
        id: 1,
        name: 'Carlos Mendoza',
        title: 'Corredor Inmobiliario',
        properties: 47,
        image: '/img/jpg/team-1.jpg'
      },
      {
        id: 2,
        name: 'María García',
        title: 'Agente Inmobiliario',
        properties: 32,
        image: '/img/jpg/team-2.jpg'
      },
      {
        id: 3,
        name: 'Antonio López',
        title: 'Gestor de Propiedades',
        properties: 28,
        image: '/img/jpg/team-3.jpg'
      },
      {
        id: 4,
        name: 'Isabel Rodríguez',
        title: 'Ejecutiva de Ventas',
        properties: 25,
        image: '/img/jpg/team-4.jpg'
      },
      {
        id: 5,
        name: 'Roberto Fernández',
        title: 'Consultor Inmobiliario',
        properties: 19,
        image: '/img/jpg/team-5.jpg'
      }
    ]
  } catch (error) {
    console.error('Error loading featured agents:', error)
  }
}

const loadTopLocations = async () => {
  try {
    topLocations.value = [
      {
        id: 1,
        name: 'Madrid',
        properties: 216,
        image: '/img/png/city-3.png',
        link: '/site/inmuebles?city=madrid',
        class: 'col-lg-4 col-md-4 col-sm-6'
      },
      {
        id: 2,
        name: 'Barcelona',
        properties: 185,
        image: '/img/png/city-4.png',
        link: '/site/inmuebles?city=barcelona',
        class: 'col-lg-4 col-md-4 col-sm-6'
      },
      {
        id: 3,
        name: 'Valencia',
        properties: 142,
        image: '/img/png/city-5.png',
        link: '/site/inmuebles?city=valencia',
        class: 'col-lg-4 col-md-4 col-sm-6'
      },
      {
        id: 4,
        name: 'Sevilla',
        properties: 95,
        image: '/img/png/city-3.png',
        link: '/site/inmuebles?city=sevilla',
        class: 'col-lg-6 col-md-6 col-sm-6'
      },
      {
        id: 5,
        name: 'Bilbao',
        properties: 78,
        image: '/img/png/city-4.png',
        link: '/site/inmuebles?city=bilbao',
        class: 'col-lg-6 col-md-6 col-sm-6'
      }
    ]
  } catch (error) {
    console.error('Error loading top locations:', error)
  }
}

const handleSearch = () => {
  const query = new URLSearchParams()
  
  if (searchForm.value.type) query.append('type', searchForm.value.type)
  if (searchForm.value.operation) query.append('operation', searchForm.value.operation)
  if (searchForm.value.city) query.append('city', searchForm.value.city)
  if (searchForm.value.priceRange) query.append('priceRange', searchForm.value.priceRange)
  
  navigateTo(`/site/inmuebles?${query.toString()}`)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const handleQuickContact = async () => {
  try {
    // Aquí podrías integrar con una API de contacto
    console.log('Formulario de contacto enviado:', quickContactForm.value)
    
    // Mostrar mensaje de éxito (puedes usar una librería de notificaciones)
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.')
    
    // Limpiar formulario
    quickContactForm.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
  } catch (error) {
    console.error('Error enviando formulario:', error)
    alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
  }
}

const handleDetailedContact = async () => {
  try {
    submittingDetailed.value = true
    
    // Validación adicional
    if (!detailedContactForm.value.acceptTerms) {
      alert('Debes aceptar los términos y condiciones para continuar.')
      return
    }
    
    // Aquí podrías integrar con una API de contacto más detallada
    console.log('Formulario detallado enviado:', detailedContactForm.value)
    
    // Simular envío (puedes reemplazar con una llamada real a API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mostrar mensaje de éxito
    alert('¡Consulta enviada exitosamente! Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.')
    
    // Limpiar formulario
    detailedContactForm.value = {
      name: '',
      email: '',
      phone: '',
      consultType: '',
      subject: '',
      message: '',
      acceptTerms: false
    }
    
  } catch (error) {
    console.error('Error enviando formulario detallado:', error)
    alert('Hubo un error al enviar la consulta. Por favor, intenta nuevamente.')
  } finally {
    submittingDetailed.value = false
  }
}

const loadTestimonials = async () => {
  try {
    testimonials.value = [
      {
        id: 1,
        name: 'Ana Martínez',
        role: 'Cliente',
        content: 'Excelente servicio y atención personalizada. Encontré la casa de mis sueños gracias a su equipo profesional y dedicado.',
        rating: 5,
        avatar: null // Avatar removido, se usan iniciales
      },
      {
        id: 2,
        name: 'David González',
        role: 'Cliente',
        content: 'Proceso muy transparente y eficiente. Me ayudaron en cada paso de la compra de mi primera vivienda. Altamente recomendados.',
        rating: 5,
        avatar: null // Avatar removido, se usan iniciales
      },
      {
        id: 3,
        name: 'Carmen López',
        role: 'Cliente',
        content: 'Profesionales de confianza que realmente entienden las necesidades del cliente. Muy satisfecha con el resultado.',
        rating: 4,
        avatar: null // Avatar removido, se usan iniciales
      },
      {
        id: 4,
        name: 'Miguel Rodríguez',
        role: 'Cliente',
        content: 'La mejor experiencia inmobiliaria que he tenido. Rápidos, eficaces y siempre dispuestos a ayudar.',
        rating: 5,
        avatar: null // Avatar removido, se usan iniciales
      },
      {
        id: 5,
        name: 'Laura Fernández',
        role: 'Cliente',
        content: 'Servicio excepcional desde el primer contacto hasta la entrega de llaves. Totalmente recomendable.',
        rating: 5,
        avatar: null // Avatar removido, se usan iniciales
      }
    ]
  } catch (error) {
    console.error('Error loading testimonials:', error)
  }
}

const loadBlogPosts = async () => {
  try {
    blogPosts.value = [
      {
        id: 1,
        title: 'Tendencias en Diseño Interior 2024',
        excerpt: 'Descubre las últimas tendencias en diseño de interiores que están transformando los hogares modernos.',
        image: '/img/png/p-4.png',
        day: '12',
        month: 'Nov',
        year: '2024',
        author: 'Elena Vargas',
        authorImage: null, // Avatar removido, se usan iniciales
        comments: 45,
        tag: 'Nuevo',
        link: '/site/blog/tendencias-diseno-interior'
      },
      {
        id: 2,
        title: 'Guía de Inversión Inmobiliaria',
        excerpt: 'Consejos esenciales para invertir en propiedades y maximizar tu rentabilidad en el mercado actual.',
        image: '/img/png/p-5.png',
        day: '08',
        month: 'Nov',
        year: '2024',
        author: 'Carlos Mendoza',
        authorImage: null, // Avatar removido, se usan iniciales
        comments: 67,
        tag: 'Popular',
        link: '/site/blog/guia-inversion-inmobiliaria'
      },
      {
        id: 3,
        title: 'Mercado Inmobiliario en España',
        excerpt: 'Análisis completo del estado actual del mercado inmobiliario español y perspectivas futuras.',
        image: '/img/png/p-6.png',
        day: '05',
        month: 'Nov',
        year: '2024',
        author: 'María García',
        authorImage: null, // Avatar removido, se usan iniciales
        comments: 89,
        tag: 'Nuevo',
        link: '/site/blog/mercado-inmobiliario-espana'
      }
    ]
  } catch (error) {
    console.error('Error loading blog posts:', error)
  }
}

// Lifecycle
onMounted(async () => {
  isLoading.value = true
  // Cargar todos los datos en paralelo para mejor rendimiento
  await Promise.all([
    loadFeaturedProperties(),
    loadPropertyCategories(),
    loadFeaturedAgents(),
    loadTopLocations(),
    loadTestimonials(),
    loadBlogPosts()
  ])
  isLoading.value = false
})

// SEO dinámico - JSON-LD Schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'RentUP',
        description: 'Residence & Real Estate Template',
        url: 'https://shreethemes.net/rentup-demo/rentup/',
        logo: '/img/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'customer service'
        }
      })
    }
  ]
})
</script>

<style scoped>
/* Estilos específicos de la página de inicio usando las clases del tema original */
.hero_banner {
  min-height: 100vh;
  background-size: cover !important;
  background-position: center !important;
}

.big-header-capt {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

._awards_group {
  padding: 40px 0;
}

._awards_lists {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 40px;
}

._awards_lists li {
  flex: 0 0 auto;
}

._awards_list_wrap {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

._category_box {
  background: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid #eee;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

._category_box:hover {
  border-color: #fa2c5a;
  transform: translateY(-5px);
}

._category_box_icon {
  font-size: 3rem;
  color: #fa2c5a;
  margin-bottom: 20px;
}

._category_box_content h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

._category_box_content span {
  color: #7c8ba1;
  font-size: 0.9rem;
}

.property-listing {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  margin-bottom: 30px;
}

.property-listing:hover {
  transform: translateY(-5px);
}

.stats-counter {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fa2c5a;
}

.achievement-wrap {
  text-align: center;
  padding: 30px 20px;
}

.ach-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.call-action-wrap {
  background: linear-gradient(135deg, #fa2c5a 0%, #fd7e14 100%);
  padding: 80px 0;
  color: #fff;
}

.full-width {
  width: 100%;
}

/* Override para que use las clases del tema original */
.btn-danger {
  background-color: #fa2c5a;
  border-color: #fa2c5a;
}

.btn-danger:hover {
  background-color: #e91e47;
  border-color: #e91e47;
}

/* Estilos para avatares con iniciales */
.avatar-initials {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 auto;
}

.agent-avatar-initials {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0 auto 15px;
  box-shadow: 0 4px 15px rgba(250, 44, 90, 0.3);
}

.author-initials {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-right: 10px;
}

/* Estilos para la sección de contacto */
.contact-info-card {
  transition: transform 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(250, 44, 90, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.quick-contact-form {
  margin-top: 2rem;
}

.quick-contact-form .card {
  border-radius: 15px;
  overflow: hidden;
}

.quick-contact-form .card-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, #fa2c5a, #fd7e14) !important;
}

.quick-contact-form .form-control {
  border-radius: 8px;
  border: 2px solid #eee;
  padding: 12px 15px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.quick-contact-form .form-control:focus {
  border-color: #fa2c5a;
  box-shadow: 0 0 0 0.2rem rgba(250, 44, 90, 0.25);
}

.quick-contact-form .btn-primary {
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quick-contact-form .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(250, 44, 90, 0.4);
}

/* Estilos para las cajas de contacto */
.contact-box {
  background: #fff;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.contact-box:hover {
  transform: translateY(-5px);
  border-color: #fa2c5a;
  box-shadow: 0 10px 30px rgba(250, 44, 90, 0.15);
}

.contact-box-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(250, 44, 90, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.contact-box-icon i {
  font-size: 2rem;
}

.contact-box-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
}

.contact-box-content p {
  color: #7c8ba1;
  margin-bottom: 8px;
}

.contact-phone {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fa2c5a;
  display: block;
  margin-bottom: 10px;
}

.live-chat-btn {
  display: inline-block;
  background: #25d366;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.live-chat-btn:hover {
  background: #128c7e;
  color: white;
  transform: translateY(-2px);
}

/* Estilos para el formulario detallado */
.property_block_wrap {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 30px;
}

.property_block_wrap_header {
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  color: white;
  padding: 25px 30px;
}

.property_block_title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.block-body {
  padding: 30px;
}

.form-control.simple {
  border: 2px solid #eee;
  border-radius: 8px;
  padding: 12px 15px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-control.simple:focus {
  border-color: #fa2c5a;
  box-shadow: 0 0 0 0.2rem rgba(250, 44, 90, 0.25);
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  display: block;
}

/* Estilos para la sección del mapa */
.contact-map-section {
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.1);
  height: fit-content;
}

.office-location-card h5 {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 2px solid #fa2c5a;
  padding-bottom: 10px;
}

.office-info p {
  color: #7c8ba1;
  line-height: 1.6;
}

.office-info i {
  width: 20px;
}

.map-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

.btn-danger.btn-lg {
  background: linear-gradient(135deg, #fa2c5a, #fd7e14);
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-danger.btn-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(250, 44, 90, 0.4);
}

@media (max-width: 768px) {
  .contact-box {
    margin-bottom: 20px;
  }
  
  .property_block_wrap_header {
    padding: 20px;
  }
  
  .block-body {
    padding: 20px;
  }
  
  .contact-map-section {
    margin-top: 30px;
  }
}

/* Preloader styles */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-inner {
  text-align: center;
}

.preloader .spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3rem;
}
</style>
