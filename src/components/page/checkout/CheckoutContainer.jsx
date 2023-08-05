import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import * as Yup from "yup"
import { dataBase } from "../../../firebaseConfig"
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Button, Grid, TextField } from "@mui/material"
import { useFormik } from "formik"


const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("") //

  const { cart, getTotalPrice, clearCart } = useContext(CartContext) //

  let total = getTotalPrice()

    // VACIAR CARRITO DESPUÉS DE COMPRAR
    const ClearCartSubmit = ()=>{
      clearCart()
      Swal.fire({
       position: 'top-center',
       icon: 'success',
       title: 'Compra realizada con éxito',
       showConfirmButton: false,
       timer: 1500
     })
   } 

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
    },
    onSubmit: (data)=>{
        let order = {
            buyer: data,
            items: cart,
            totalPrice: total,
            date: serverTimestamp()
    };

    //Crear orden de compra en Firebase
    const orderCollection = collection(dataBase, "orders");
    addDoc(orderCollection, order).then( res => setOrderId(res.id));

    // Modificar el stock en Firebase cuando se hace una compra
    cart.forEach((product)=>{
        updateDoc(doc(dataBase, "products", product.id) , {
            stock: product.stock - product.quantity,
        });
    })

    // Vaciar carrito
    ClearCartSubmit ()

    },
    

    validationSchema: Yup.object({
        name: Yup.string()
            .required("Este campo es obligatorio"),
        email: Yup.string()
            .email("No es un formato de email válido")
            .required("Este campo es obligatorio"),
        address: Yup.string()
            .required("Este campo es obligatorio"),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Algo parece incorrecto en el número de teléfono')
            .max(12, "Número de teléfono demasiado largo")
            .required("Este campo es obligatorio"),
    }),
    validateOnChange: false,

    
})



  return (
    <div>
    

    {orderId ? (
      <div style={{textAlign:"center"}}>
        <h2>Gracias por su compra.</h2>
        <h4>Su número de seguimiento es: {orderId}</h4>
        <Link to="/">Volver a comprar</Link>
      </div>
    ) : (
      <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <h1>Completa los siguientes datos para continuar:</h1>
      <Grid container spacing={2} style={{textAlign:"center", width:"80%", marginLeft:"50px"}}>
        <Grid item xs={12}>
          <TextField
          type="text"
          label="Ingrese su Nombre"
          variant="outlined"
          fullWidth
          name="name"
          className="checkout-input"
          error={errors.name ? true : false} 
                helperText={errors.name} 
                onChange={handleChange} 
        />
        </Grid>

        <Grid item xs={12}>
          <TextField
          type="phoneNumber"
          label="Ingrese un número de teléfono"
          variant="outlined"
          className="checkout-input"
          fullWidth
          name="phoneNumber" 
          error={errors.phoneNumber ? true : false} 
                helperText={errors.phoneNumber} 
                onChange={handleChange}
        />
        </Grid>

        <Grid item xs={12}>
          <TextField
            type="text"
            label="Ingrese su Email"
            variant="outlined"
            className="checkout-input"
            fullWidth
            name="email"
            error={errors.email ? true : false} 
            helperText={errors.email} 
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
            <TextField
            type="address"
            label="Ingrese la dirección de envío"
            variant="outlined"
            className="checkout-input"
            fullWidth
            name="address"
            error={errors.address ? true : false} 
            helperText={errors.address} 
            onChange={handleChange}
            />
        </Grid>
        <p style={{margin:"20px", color:"red"}}>Los campos con * son obligatorios</p>


        <Grid item xs={12}>
            <Button variant="contained" type="submit">Comprar</Button>
        </Grid>
      
      </Grid>
    </form>
    )}
  </div>
) 
}

export default CheckoutContainer;