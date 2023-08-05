import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getTotalQuantity} = useContext(CartContext)

  let total = getTotalQuantity()

  return (
    <>
      <Link to="/cart" style={{marginLeft:"200px"}}>
        <Badge badgeContent={total} color="warning" sx={{ marginRight: 5 }} showZero>
          <ShoppingCartIcon color="main"  fontSize="medium"  />
        </Badge>
      </Link>
     
    </>
  );
};

export default CartWidget;
