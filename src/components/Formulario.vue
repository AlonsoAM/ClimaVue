<script setup>
import { reactive, ref } from "vue";
import Alerta from "./Alerta.vue";

const busqueda = reactive({
  ciudad: "",
  pais: "",
});
const error = ref("");

const emit = defineEmits(["obtener-clima"]);

const paises = [
  { codigo: "US", nombre: "Estados Unidos" },
  { codigo: "MX", nombre: "México" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "España" },
  { codigo: "PE", nombre: "Perú" },
];

const consultarClima = () => {
  if (Object.values(busqueda).includes("")) {
    error.value = "Todos los campos son obligatorios";
    return;
  }
  error.value = "";

  // Si pasa la validación, consultar el clima
  emit("obtener-clima", busqueda);
};
</script>
<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <Alerta v-if="error">{{ error }}</Alerta>
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
        v-model="busqueda.ciudad"
        type="text"
        id="ciudad"
        placeholder="Ej: Lima"
      />
    </div>
    <div class="campo">
      <label for="pais">País</label>
      <select v-model="busqueda.pais" id="pais">
        <option value="">Selecciona un país</option>
        <option v-for="p in paises" :key="p.codigo" :value="p.codigo">
          {{ p.nombre }}
        </option>
      </select>
    </div>
    <input type="submit" value="Consultar Clima" />
  </form>
</template>

<style scoped></style>
