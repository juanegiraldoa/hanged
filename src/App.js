import { useState } from "react";
import { letras, palabras } from "./letras";

const App = () => {
  const [letrasUtilizadas, setLetrasUtilizadas] = useState([]);
  const [palabra, setPalabra] = useState("");
  const [palabraCensurada, setPalabraCensurada] = useState("");
  const [errores, setErrores] = useState(0);
  const [palabrasUtilizadas, setPalabrasUtilizadas] = useState([]);

  const siguientePalabra = () => {
    const palabraSeleccionada = palabras[Math.round(Math.random() * (palabras.length - 1 - palabrasUtilizadas.length))];
    if (!palabrasUtilizadas.find((pl) => pl === palabraSeleccionada)) {
      setPalabra(palabraSeleccionada);
      setPalabraCensurada("_".repeat(palabraSeleccionada.length).split("").join(" "));
      setPalabrasUtilizadas((p) => [...p, palabraSeleccionada]);
    } else siguientePalabra();
  };

  const addUtilizada = (letra) => {
    if (!letrasUtilizadas.find((l) => l === letra)) {
      setLetrasUtilizadas((usadas) => [...usadas, letra]);
      let palabraArray = palabra.split("");
      let palabraCensuradaArray = palabraCensurada.split(" ");
      if (palabraArray.find((letraArray) => letraArray === letra)) {
        remplazarLetras(palabraArray, palabraCensuradaArray, letra);
        validarFinPalabraCorrecta(palabraCensuradaArray);
      } else validarErrores();
    }
  };

  const validarErrores = () => {
    const intentosMalos = errores + 1;
    setErrores(intentosMalos);
    if (intentosMalos >= 10) reiniciar();
  };

  const remplazarLetras = (palabraArray, palabraCensuradaArray, letra) => {
    const vecesLetra = palabraArray.filter((letraArray) => letraArray === letra).length;
    for (let i = 0; i < vecesLetra; i++) {
      const indexLetra = palabraArray.findIndex((l) => l === letra);
      palabraArray[indexLetra] = "_";
      palabraCensuradaArray[indexLetra] = letra;
    }
    setPalabraCensurada(palabraCensuradaArray.join(" "));
  };

  const validarFinPalabraCorrecta = (palabraCensuradaArray) => {
    if (!palabraCensuradaArray.find((l) => l === "_")) reiniciar();
  };

  const reiniciar = () => {
    setLetrasUtilizadas([]);
    siguientePalabra();
    setErrores(0);
  };

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "pink" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>{palabraCensurada}</h1>
        <h1>{errores}</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {letras.map(({ letra }, key) => (
          <button
            key={key}
            disabled={letrasUtilizadas.find((utilizada) => utilizada === letra)}
            onClick={() => addUtilizada(letra)}
            style={{ width: "65px", height: "65px" }}
          >
            {letra}
          </button>
        ))}
      </div>
      <button onClick={reiniciar}>Siguiente</button>
    </div>
  );
};

export default App;
