<template>
  <div id="wrapper">
    <div id="titlebar" class="submit-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2><i class="fa fa-plus-circle"></i> Agregar propiedad</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="submit-page">
            <div class="notification notice large margin-bottom-55">
              <h4>¿No tienes una cuenta?</h4>
              <p>Si no tienes una cuenta, puedes crear una ingresando tu dirección de correo electrónico en la sección de detalles de contacto. Se te enviará automáticamente una contraseña por correo.</p>
            </div>
            <h3>Información básica</h3>
            <div class="submit-section">
              <div class="form">
                <h5>Título de la propiedad</h5>
                <input class="search-field" type="text" value=""/>
              </div>
              <div class="row with-forms">
                <div class="col-md-6">
                  <h5>Estado</h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>En venta</option>
                    <option>En alquiler</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <h5>Tipo</h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>Apartamento</option>
                    <option>Casa</option>
                    <option>Comercial</option>
                    <option>Garaje</option>
                    <option>Lote</option>
                  </select>
                </div>
              </div>
              <div class="row with-forms">
                <div class="col-md-4">
                  <h5>Precio</h5>
                  <div class="select-input disabled-first-option">
                    <input type="text" data-unit="USD">
                  </div>
                </div>
                <div class="col-md-4">
                  <h5>Área</h5>
                  <div class="select-input disabled-first-option">
                    <input type="text" data-unit="m²">
                  </div>
                </div>
                <div class="col-md-4">
                  <h5>Habitaciones</h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>Más de 5</option>
                  </select>
                </div>
              </div>
            </div>
            <h3>Galería</h3>
            <div class="submit-section">
              <form action="/api/file-upload" class="dropzone"></form>
            </div>
            <h3>Ubicación</h3>
            <div class="submit-section">
              <div class="row with-forms">
                <div class="col-md-6">
                  <h5>Dirección</h5>
                  <input type="text">
                </div>
                <div class="col-md-6">
                  <h5>Ciudad</h5>
                  <input type="text">
                </div>
                <div class="col-md-6">
                  <h5>Estado</h5>
                  <input type="text">
                </div>
                <div class="col-md-6">
                  <h5>Código postal</h5>
                  <input type="text">
                </div>
              </div>
            </div>
            <h3>Información detallada</h3>
            <div class="submit-section">
              <div class="form">
                <h5>Descripción</h5>
                <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
              </div>
              <div class="row with-forms">
                <div class="col-md-4">
                  <h5>Edad del edificio <span>(opcional)</span></h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>0 - 1 Años</option>
                    <option>0 - 5 Años</option>
                    <option>0 - 10 Años</option>
                    <option>0 - 20 Años</option>
                    <option>0 - 50 Años</option>
                    <option>50 + Años</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <h5>Dormitorios <span>(opcional)</span></h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <h5>Baños <span>(opcional)</span></h5>
                  <select class="chosen-select-no-single">
                    <option label="blank"></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <br>
              <button type="submit" class="button preview">Vista previa <i class="fa fa-arrow-circle-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Formulario para ofrecer un inmueble
</script>
