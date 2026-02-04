<template>
  <div id="wrapper">
    <div id="titlebar" class="listing-titlebar">
      <div class="listing-titlebar-title">
        <h2>Resultados de búsqueda <span class="showing-results">Se muestran 1-12 de 66 resultados</span></h2>
      </div>
    </div>
    <div class="container">
      <div class="sort-by">
        <span>Ordenar por:</span>
        <select class="chosen-select-no-single">
          <option>Orden por defecto</option>
          <option>Precio más bajo</option>
          <option>Precio más alto</option>
          <option>Más reciente</option>
          <option>Más antiguo</option>
        </select>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="i in 12" :key="i">
          <div class="listing-item">
            <NuxtLink :to="`/site/inmueble/${i}`" class="listing-img-container">
              <div class="listing-badges"><span>En venta</span></div>
              <div class="listing-img-content">
                <span class="listing-price">${{ (350000 + i * 25000).toLocaleString() }} <i>$850/mes</i></span>
              </div>
              <img :src="`/img/listing-0${((i-1)%6)+1}.jpg`" :alt="`Propiedad ${i}`">
            </NuxtLink>
            <div class="listing-content">
              <div class="listing-title">
                <h4><NuxtLink :to="`/site/inmueble/${i}`">Eagle Apartments</NuxtLink></h4>
                <NuxtLink to="#" class="listing-address"><i class="fa fa-map-marker"></i> 9364 School St. Lynchburg, NY</NuxtLink>
              </div>
              <ul class="listing-features">
                <li>Área <span>{{ 480 + i * 10 }} m²</span></li>
                <li>Habitaciones <span>{{ 2 + (i % 2) }}</span></li>
                <li>Baños <span>{{ 1 + (i % 2) }}</span></li>
              </ul>
              <div class="listing-footer">
                <a href="#"><i class="fa fa-user"></i> David Strozier</a>
                <span><i class="fa fa-calendar-o"></i> {{ Math.max(1, 30 - i * 2) }} días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-container margin-top-20">
        <nav class="pagination">
          <ul>
            <li><a href="#" class="current-page">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </nav>
        <nav class="pagination-next-prev">
          <ul>
            <li><a href="#" class="prev"><i class="fa fa-chevron-left"></i></a></li>
            <li><a href="#" class="next"><i class="fa fa-chevron-right"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup>
// Listado de inmuebles
</script>
