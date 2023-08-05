import { Button} from "@mui/material"
import  RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Counter = ( {contador, sumar, restar, onAdd} ) => {

  return (
    <div style={{ padding: "20px", display:"flex"}}>
        <div style={{display:"flex", margin:"10px"}}>
            <Button>
              <RemoveCircleOutlineIcon  onClick={restar} />
            </Button>
            <h3> {contador}</h3> 
            <Button>
              <AddCircleOutlineIcon  onClick={sumar} />
            </Button>      
        </div>

        <Button variant="contained" onClick={()=>onAdd(contador)} style={{fontSize:"10px"}}>Agregar al carrito</Button>
    </div>
  )
}

export default Counter