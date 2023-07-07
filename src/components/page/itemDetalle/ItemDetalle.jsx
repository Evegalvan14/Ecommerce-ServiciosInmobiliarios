import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productos";
import ContadorContainer from "../contador/ContadorContainer";

const ItemDetalle = () => {
    const [producto, setProducto] = useState({});

    const {id} = useParams()
  
  
    useEffect(() => {
      let productoSeleccionado = productos.find((elemento) => elemento.id === +id);
      const tarea = new Promise((res, rej) => {
        res(productoSeleccionado)
      });
      tarea.then(res => setProducto(res) )
  
    }, [id]);
  
    const onAdd = (cantidad) => {
      console.log(producto);
      console.log(cantidad);
    };
  
    return (
      <div>
        <h2>{producto.title}</h2>
        <h4>{producto.price}</h4>
  
        <ContadorContainer stock={producto.stock} onAdd={onAdd} />
      </div>
    );
  };


export default ItemDetalle