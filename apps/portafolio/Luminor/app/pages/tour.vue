<template>
    <lnc />
</template>

<script setup>
/**
 * Recorrido 3D - Virtual Tour
 * Plantilla: Luminor
 */
import { useNuxtApp } from '#app';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { $psweb, $inmostore } = useNuxtApp();
const route = useRoute();

const pagId = route.params.id;
const WebsiteName = ref('');
const pag = ref({});
const children = ref([]);

onMounted(async () => {
    if ($psweb) {
        let res = await $inmostore.getSetting("websitename");
        if (res.operacion.codigo == 1) console.error("API: " + res.operacion.mensaje);
        WebsiteName.value = res.resultado || '---';

        res = await $psweb.getPagina(pagId);
        pag.value = res.Resultado;

        res = await $psweb.getPaginaChilds(paginaId, 3);
        children.value = res.Items;

        useHead({
            title: pag.value.Titulo + ' - ' + WebsiteName.value
        });
    } else {
        console.error("El plugin PSWeb no está disponible.");
    }
});
</script>
