<template>
  <div id="wrapper">
    <div id="titlebar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Nuestro equipo</h2>
            <span>Conoce a nuestros agentes</span>
            <nav id="breadcrumbs">
              <ul>
                <li><NuxtLink to="/site">Inicio</NuxtLink></li>
                <li>Nuestro equipo</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-search-input margin-bottom-40">
            <input type="text" class="ico-01" placeholder="Busca un agente por nombre o ubicación" value=""/>
            <button class="button">Buscar</button>
          </div>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="agents-grid-container">
              <div class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="i in 4" :key="i">
                <div class="agent">
                  <div class="agent-avatar">
                    <a href="#">
                      <img :src="`/img/agent-0${i}.jpg`" alt="">
                      <span class="view-profile-btn">Ver perfil</span>
                    </a>
                  </div>
                  <div class="agent-content">
                    <div class="agent-name">
                      <h4><a href="#">Agente {{ i }}</a></h4>
                      <span>Agente inmobiliario</span>
                    </div>
                    <ul class="agent-contact-details">
                      <li><i class="sl sl-icon-call-in"></i>(123) 123-456</li>
                      <li><i class="fa fa-envelope-o"></i><a href="#">agente{{ i }}@ejemplo.com</a></li>
                    </ul>
                    <ul class="social-icons">
                      <li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
                      <li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Información corporativa con agentes
</script>
