import axios from "axios";

export default function useClima() {
  const obtenerClima = async ({ ciudad, pais }) => {
    // Importar el API KEY
    const key = import.meta.env.VITE_API_KEY;

    try {
      // Obtener la latitud y longitud
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios.get(url);

      const { lat, lon } = data[0];

      // Obtener el clima
    } catch (error) {
      console.log(error);
    }
  };
  return {
    obtenerClima,
  };
}
