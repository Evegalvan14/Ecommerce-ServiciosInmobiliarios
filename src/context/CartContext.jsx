import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const existe = isInCart(item.id)

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity }
        } else {
          return elemento
        }
      })

      setCart(newArray)
    } else {
      setCart([...cart, item])
    }
  }

  // VACIAR CARRITO
  const clearCart = () => {
    setCart([])
  }

  // ELIMINAR UN PRODUCTO
  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id)
    setCart(newArray)
  };

  // PARA NO DUPLICAR TARJETAS EN EL CARRITO
  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id)
    return exist
  }

  // CALCULAR EL MONTO TOTAL
  const getTotalPrice = ()=>{
    let total = cart.reduce( (acc, elemento)=>{
      return acc + (elemento.price + elemento.quantity)
    }, 0)
    return total
  }

  // CALCULAR LA CANTIDAD
  const getTotalQuantity = ()=>{
    let total = cart.reduce( (acc, elemento)=>{
      return acc +  elemento.quantity
    }, 0)
    return total
  }

  let data = { cart, addToCart, clearCart, deleteById, getTotalPrice, getTotalQuantity }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};

export default CartContextComponent