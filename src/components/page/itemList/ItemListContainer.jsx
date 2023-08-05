import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = () => {

  const [items, setItems] = useState([]);
 

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(dataBase, "products")
    let consulta
    if(categoryName){
      consulta = query( productsCollection, where("category", "==", categoryName))
    }else{
      consulta = productsCollection
    }

    getDocs(consulta).then((res)=>{
      let productos = res.docs.map( doc => {
        return {...doc.data(), id: doc.id}
      } )
      
      setItems(productos)
    })

  }, [categoryName]);

  return <ItemList items={items} />
};

export default ItemListContainer