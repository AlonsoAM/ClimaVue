export default function useClima() {
  const obtenerClima = ({ ciudad, pais }) => {
    console.log("COnsultar", ciudad);
    console.log("COnsultar", pais);
  };
  return {
    obtenerClima,
  };
}
