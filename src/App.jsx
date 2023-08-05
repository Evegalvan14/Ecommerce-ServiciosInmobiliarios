import { BrowserRouter } from "react-router-dom"
import CartContextComponent from "./context/CartContext"

import AppRouter from "./routes/AppRouter"


const App = () => {

  return (

    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent> 
    </BrowserRouter>
    
  )
}

export default App