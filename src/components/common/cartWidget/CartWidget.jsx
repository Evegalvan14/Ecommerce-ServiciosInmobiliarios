import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart" >
        <Badge badgeContent={1} color="warning" sx={{ marginRight: 5 }}>
          <ShoppingCartIcon color="main" fontSize="medium"  />
        </Badge>
      </Link>
     
    </>
  );
};

export default CartWidget;
