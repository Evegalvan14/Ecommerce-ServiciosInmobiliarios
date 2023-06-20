import { useState } from "react";

// No se muestra en App //

const ContadorPrueba = () => {

    const [ contador, setContador ] = useState(0)
   

    const sumar = () => {
        setContador ( contador + 1) 
    };
    
  return (
    <><div>ContadorPrueba</div>
    <h3>El contador esta en {contador}</h3>
    <button onClick={() => sumar(15)}>Sumar en 15</button>
    <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
    </>
    
  )
}

export default ContadorPrueba