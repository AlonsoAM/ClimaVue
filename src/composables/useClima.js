import axios from "axios";
import { computed, ref } from "vue";

export default function useClima() {
  const clima = ref({});
  const cargand = ref(false);
  const error = ref("");

  const obtenerClima = async ({ ciudad, pais }) => {
    // Importar el API KEY
    const key = import.meta.env.VITE_API_KEY;
    cargand.value = true;
    clima.value = {};
    error.value = "";

    try {
      // Obtener la latitud y longitud
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios.get(url);

      const { lat, lon } = data[0];

      // Obtener el clima
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: resp } = await axios.get(url2);

      clima.value = resp;
    } catch {
      error.value = "Ciudad no encontrada";
    } finally {
      cargand.value = false;
    }
  };

  const formatearTemperatura = (temperatura) => parseInt(temperatura - 273.15);

  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  return {
    obtenerClima,
    clima,
    mostrarClima,
    formatearTemperatura,
    cargand,
    error,
  };
}
