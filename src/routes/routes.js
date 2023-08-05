
import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import Dashboard from "../components/page/dasboard/Dashboard";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/itemList/ItemListContainer";
import LoginContainer from "../components/page/login/LoginContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
   {
        id:"checkout",
        path: "/checkout",
        Element: CheckoutContainer,
    },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
  {
    id:"login",
    path: "/login",
    Element: LoginContainer,
},
];