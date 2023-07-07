import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { productos } from "../../productos";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? productos : productosFiltrados);

    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));

  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
