<template>
  <div id="wrapper">
    <div id="listing-slider" class="slick-slider-carousel">
      <div class="item"><img src="/img/single-property-01.jpg" alt=""><div class="listing-badge for-sale"><i class="fa fa-tag"></i> En venta</div></div>
      <div class="item"><img src="/img/single-property-02.jpg" alt=""></div>
      <div class="item"><img src="/img/single-property-03.jpg" alt=""></div>
      <div class="item"><img src="/img/single-property-04.jpg" alt=""></div>
    </div>
    <div class="container">
      <div class="row sticky-wrapper">
        <div class="col-lg-8 col-md-8 padding-right-30">
          <div class="property-description">
            <div class="listing-title">
              <div class="listing-title-name">
                <h3>Eagle Apartments <span class="property-badge">En venta</span></h3>
                <p><i class="fa fa-map-marker"></i> 9364 School St. Lynchburg, NY</p>
              </div>
              <div class="listing-title-price"><div class="price">$420,000 <span class="price-details">$850 / mes</span></div></div>
            </div>
            <h3 class="desc-headline">Descripción</h3>
            <div id="description-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <h3 class="desc-headline">Detalles</h3>
            <ul class="property-features margin-top-0">
              <li>ID de la propiedad: <span>HZ48</span></li>
              <li>Habitaciones: <span>2</span></li>
              <li>Baños: <span>3</span></li>
              <li>Área: <span>1450 m²</span></li>
              <li>Precio: <span>$420,000</span></li>
              <li>Tipo de propiedad: <span>Apartamento</span></li>
              <li>Estado: <span>En venta</span></li>
              <li>Garaje: <span>1</span></li>
            </ul>
            <h3 class="desc-headline no-border">Ubicación</h3>
            <div id="propertyMap-container">
              <div id="propertyMap" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
              <a href="#" id="streetView">Vista de calle</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 margin-top-75 sticky">
          <div class="verified-badge with-tip"><i class="sl sl-icon-check"></i> Verificado</div>
          <div class="agent-widget">
            <div class="agent-title">
              <div class="agent-photo"><img src="/img/agent-02.jpg" alt=""></div>
              <div class="agent-details"><h4><a href="#">Tom Wilson</a></h4><span>Agente de bienes raíces</span></div>
              <div class="clearfix"></div>
            </div>
            <input type="text" placeholder="Tu email">
            <input type="text" placeholder="Tu teléfono">
            <textarea>Estoy interesado en esta propiedad, ID [HZ48]...</textarea>
            <button class="button fullwidth margin-top-5">Enviar mensaje</button>
          </div>
          <div class="sidebar-widget margin-top-30">
            <h3>Calculadora de hipoteca</h3>
            <div class="payment-calculator">
              <label>Precio total $</label><input class="margin-bottom-15" type="text" value="420000">
              <label>Pago inicial $</label><input class="margin-bottom-15" type="text" value="100000">
              <label>Plazo del préstamo (años)</label><input class="margin-bottom-15" type="text" value="25">
              <label>Tasa de interés %</label><input class="margin-bottom-20" type="text" value="4.5">
              <button class="calculate-button button fullwidth">Calcular</button>
              <div class="payment">Tu pago mensual: <span>$0</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.params.id
</script>
