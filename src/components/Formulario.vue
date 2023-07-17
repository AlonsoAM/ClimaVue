<script setup>
const paises = [
  { codigo: "US", nombre: "Estados Unidos" },
  { codigo: "MX", nombre: "México" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "España" },
  { codigo: "PE", nombre: "Perú" },
];
</script>
<template>
  <form class="formulario">
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input type="text" id="ciudad" placeholder="Ej: Lima" />
    </div>
    <div class="campo">
      <label for="pais">País</label>
      <select id="pais">
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
