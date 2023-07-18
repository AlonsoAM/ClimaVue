<script setup>
import Clima from "./components/Clima.vue";
import Formulario from "./components/Formulario.vue";
import useClima from "./composables/useClima";
import Loader from "./components/Loader.vue";
import Alerta from "./components/Alerta.vue";
const { obtenerClima, clima, mostrarClima, cargand, error } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Loader v-if="cargand" />
    <Alerta v-if="error">{{ error }}</Alerta>
    <Clima v-if="mostrarClima" :clima="clima" />
  </div>
</template>

<style scoped></style>
