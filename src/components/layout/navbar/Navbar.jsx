import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link className={"categories-link"} to="/">
            <h4>TH SERVICIOS</h4>
          </Link>

          <ul className="categories">
            <Link className={"categories-link"} to="/">
              TODAS
            </Link>
            <Link className={"categories-link"} to="/category/casas">
              CASAS
            </Link>
            <Link className={"categories-link"} to="/category/duplex">
              DÚPLEX
            </Link>
            <Link className={"categories-link"} to="/category/departamentos">
              DEPARTAMENTOS
            </Link>
          </ul>

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
