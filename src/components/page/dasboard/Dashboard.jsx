import { dataBase } from "../../../firebaseConfig"
import { products } from "../../../productsMock"
import {addDoc, collection} from "firebase/firestore"

const Dashboard = () => {
  const rellenar = ()=>{

    products.forEach( (product)=> {
        let refCollection = collection( dataBase , "products")
        addDoc(refCollection, product )
    })

}

  return (
    <div>
      <button onClick={rellenar}>Rellenar base de datos</button>
    </div>
  )
}

export default Dashboard