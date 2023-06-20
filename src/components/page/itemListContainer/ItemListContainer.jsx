import { Box, Button, Typography } from "@mui/material";

const ItemListContainer = ({ greeting, cambiarSaludo }) => {

  return (
    <Box sx={{textAlign:"center"}}>
      <Typography sx={{fontSize: "20px"}}>{greeting}</Typography>
      <Button variant="outlined" size="small" onClick={() => cambiarSaludo("Esta página web se encuentra en desarrollo...")}>Cambiar saludo</Button>

    </Box>
  );
};

export default ItemListContainer;
