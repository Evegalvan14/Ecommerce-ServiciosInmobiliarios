import { useState } from "react";
import Counter from "./Counter";
import { ToastContainer, toast } from 'react-toastify'

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : toast.error('Cantidad máxima superada', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (<div><Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  <ToastContainer />
  </div> 
  )
}

export default CounterContainer;