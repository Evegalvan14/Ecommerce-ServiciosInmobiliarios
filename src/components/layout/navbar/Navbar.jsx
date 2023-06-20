
import { Box, Container, Link, Typography } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";


const Navbar = () => {
  const preventDefault = (event) => event.preventDefault()

  return (
    <Container>

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", marginTop:"30px"}}>
        <Typography >LOGO</Typography>
        <Typography sx={{ minWidth: 200 }}><Link href="#" underline="hover" onClick={preventDefault}>HOME</Link></Typography>
        <Typography sx={{ minWidth: 200 }}><Link href="#" underline="hover" onClick={preventDefault}>CASAS EN VENTA</Link></Typography>
        <Typography sx={{ minWidth: 200 }}><Link href="#" underline="hover" onClick={preventDefault}>ALQUILERES</Link></Typography>
        <Typography sx={{ minWidth: 200 }}><Link href="#" underline="hover" onClick={preventDefault}>LOTES</Link></Typography>
        <CartWidget />
      </Box>

    </Container>
  );
};

export default Navbar;
