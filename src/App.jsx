import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer"
import Layout from "./components/layout/Layout"
import ItemDetalle from "./components/page/itemDetalle/ItemDetalle"
import CartContainer from "./components/page/cart/CartContainer"


const App = () => {

/*   const [greeting, setGreeting] = useState("¡Bienvenidos!")

  const cambiarSaludo = ( nuevoSaludo )=>{
    setGreeting( nuevoSaludo )
  }
 */

  return (


    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetalle/:id" element={<ItemDetalle />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<h1>Aca el checkout</h1>} />
      </Route>

      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  </BrowserRouter>
    

  )
}

export default App