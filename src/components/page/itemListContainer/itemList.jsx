import CardProductos from "../../common/cardProductos/CardProductos";


const ItemList = ({ items }) => {

  
    return (
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {items.map((elemento) => {
            return <CardProductos key={elemento.id} elemento={elemento} />;
          })}
        </div>
      </div>
    );
  };
  
  export default ItemList;