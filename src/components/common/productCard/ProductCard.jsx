
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card sx={{ width: 345, margin: 2, padding: 2 }}>
      <CardMedia
        component="img"
        alt={elemento.title}
        height="250"
        image={elemento.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;