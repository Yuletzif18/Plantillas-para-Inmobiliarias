<template>
  <div id="wrapper">
    <div class="contact-map margin-bottom-55">
      <div class="google-map-container">
        <div id="propertyMap" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
        <a href="#" id="streetView">Vista de calle</a>
      </div>
      <div class="address-box-container">
        <div class="address-container" data-background-image="/img/our-office.jpg">
          <div class="office-address">
            <h3>Nuestra oficina</h3>
            <ul>
              <li>45 Park Avenue, Apt. 303</li>
              <li>New York, NY 10016</li>
              <li>Teléfono (123) 123-456</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4 class="headline margin-bottom-30">Encuéntranos aquí</h4>
          <div class="sidebar-textbox">
            <p>Administramos canales de forma colaborativa. Ofrecemos servicios proactivos de comercio electrónico escalables.</p>
            <ul class="contact-details">
              <li><i class="im im-icon-Phone-2"></i> <strong>Teléfono:</strong> <span>(123) 123-456</span></li>
              <li><i class="im im-icon-Fax"></i> <strong>Fax:</strong> <span>(123) 123-456</span></li>
              <li><i class="im im-icon-Globe"></i> <strong>Web:</strong> <span><a href="#">www.ejemplo.com</a></span></li>
              <li><i class="im im-icon-Envelope"></i> <strong>Email:</strong> <span><a href="#">oficina@ejemplo.com</a></span></li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <section id="contact">
            <h4 class="headline margin-bottom-35">Formulario de contacto</h4>
            <div id="contact-message"></div>
            <form method="post" action="/api/contacto" name="contactform" id="contactform" autocomplete="on">
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <input name="name" type="text" id="name" placeholder="Tu nombre" required="required" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <input name="email" type="email" id="email" placeholder="Correo electrónico" required="required" />
                  </div>
                </div>
              </div>
              <div>
                <input name="subject" type="text" id="subject" placeholder="Asunto" required="required" />
              </div>
              <div>
                <textarea name="comments" cols="40" rows="3" id="comments" placeholder="Mensaje" spellcheck="true" required="required"></textarea>
              </div>
              <input type="submit" class="submit button" id="submit" value="Enviar mensaje" />
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Página de contacto
</script>
