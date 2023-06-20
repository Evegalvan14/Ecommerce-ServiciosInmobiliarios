import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/page/home/home";
import { Box } from "@mui/material"
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import { useState } from "react";


const App = () => {

  const [greeting, setGreeting] = useState("¡Bienvenidos!")

  const cambiarSaludo = ( nuevoSaludo )=>{
    setGreeting( nuevoSaludo )
  }


  return (

    <Box>
      <Navbar />
      <Home nombre={"TH Servicios Inmobiliarios"}/>
      <ItemListContainer greeting={greeting} cambiarSaludo={cambiarSaludo}/>
    </Box> 
  )
}

export default App