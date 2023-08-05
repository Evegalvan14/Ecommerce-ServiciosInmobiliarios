import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import { CartContext } from "../../../context/CartContext"
import { dataBase } from "../../../firebaseConfig"
import { getDoc, collection, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ItemDetail = () => {
  const { addToCart } = useContext(CartContext)

  const [producto, setProducto] = useState({})

  const { id } = useParams()


  useEffect(() => {
    let productsCollection = collection(dataBase, "products")
    let productRef = doc(productsCollection, id)
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id })
    })
  }, [id])

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad }
    addToCart(productCart)
     
    toast.success('Se agregó este producto a tu carrito', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      }) 

      
  }

  return (
    <div style={{display:"flex", flexWrap: "wrap", alignItems:"center", margin: "20"}}>
      <div>
        <img src={producto.img} alt={producto.title} style={{width: "300px", height: "300px", objectFit: "cover",  border: "1px solid #ddd", borderRadius:"5px", borderRight:"20px"}}/>
      </div>
      <div style={{flex:"1", margin:"10px", padding:"20px"}}>
        <h2 style={{fontSize:"24px", fontWeight:"bold", marginBottom:"10px"}}>{producto.title}</h2>
        <p style={{fontSize:"20px", fontWeight:"bold", color:"#f00"}}>${producto.price}</p>
        <p style={{marginBottom:"20px"}}>{producto.description} </p>
        <CounterContainer stock={producto.stock} onAdd={onAdd} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default ItemDetail