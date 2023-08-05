import { Skeleton} from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div>
      <div style={{textAlign:"center", margin:"10px", fontSize:"30px"}}>
      <h1> ~ Decolove TH ~</h1>
      <h4>Todo para tu hogar</h4>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
          {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={200} height={200} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} height={80} />
                  <Skeleton variant="text" width={210} height={50} />
                </div>
              )
        })}
      </div>
    </div>
  );
};

export default ItemList;