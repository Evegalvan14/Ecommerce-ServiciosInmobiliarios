import { ShoppingCart } from "@mui/icons-material"
import { Badge, Container, Tooltip } from "@mui/material"

const CartWidget = () => {
  return (
    <Container>
      <Tooltip title="Mis Compras">
        <Badge badgeContent={1} color="primary">
        <ShoppingCart color="action" />
      </Badge>
        </Tooltip>
    </Container>
  )
}

export default CartWidget