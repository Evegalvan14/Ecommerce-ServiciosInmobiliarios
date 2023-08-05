import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: 'Estás seguro de que quieres vaciar tu carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, vaciar carrito'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire(
          'Completado!',
          'Tu carrito está vacío.',
          'success'
        )
      }
    })
  };

  return (
    <div>
      <h1>Resúmen de compra:</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{ border: "2px solid black", display:"flex", flexWrap: "wrap", alignItems:"center", margin: "20" }}>
            <div>
                <img src={elemento.img} alt={elemento.title} style={{width: "200px", height: "200px", objectFit: "cover",  border: "1px solid #ddd", borderRadius:"5px", borderRight:"20px"}} />
            </div>
            <div style={{flex:"1", margin:"10px", padding:"20px"}}> 
                <h4 style={{fontSize:"18px", fontWeight:"bold", marginBottom:"10px"}}>{elemento.title}</h4>
                <h5 style={{fontSize:"18px", fontWeight:"bold"}}>${elemento.price}</h5>
                <h5 style={{marginBottom:"20px"}}>Cantidad:{elemento.quantity}</h5>
                <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteById(elemento.id)} style={{fontSize:"10px"}} size="small">
                  Eliminar producto
                </Button>
            </div>
            
          </div>
        );
      })}

      {cart.length > 0 && <Button variant="contained" style={{fontSize:"10px", margin:"10px"}} startIcon={<DeleteIcon fontSize="small"/>} onClick={limpiar} >Vaciar carrito</Button> }
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2 style={{margin:"10px"}}>Importe total: ${total}</h2>
        <Link to="/checkout" underline="hover" style={{padding:"20px", margin:"20px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", transition:"background-color 0.2s"}}>FINALIZAR COMPRA</Link>
      </div>

    </div>
  )
}


export default CartContainer;