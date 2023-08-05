import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
/* import MenuIcon from '@mui/icons-material/Menu' */
import LoginWidget from "../../common/loginWidget/LoginWidget";

const Navbar = () => {
  let userRol = "user" 

  return (

     < section className="navbar-container">
        <section className="navbar">
          {/* Logo */}
          <div className="logo-container">
              {/* <MenuIcon className="icon" /> */}
              <Link to="/"><img src="https://res.cloudinary.com/dr6ivzvpc/image/upload/v1691158204/Logo_circular_floral_negro_ycghko.png" alt="Logo" /></Link>
          </div>

         {/* Categorías */}
          <nav className="subnavbar">
            <ul className="category">
                <Link className="nav-item" to="/"> TODAS |</Link>
                <Link className="nav-item" to="/category/cocina">COCINA |</Link>
                <Link className="nav-item" to="/category/baño">BAÑO |</Link>
                <Link className="nav-item" to="/category/decoracion">DECORACION |</Link>
                <Link className="nav-item" to="/category/organizadores">ORGANIZADORES |</Link>
                <Link className="nav-item" to="/category/textil"> TEXTIL</Link>
            </ul>

            {userRol === "admin" && <Link to="dashboard">ADMIN</Link>}

          </nav>

          {/*Login y  Carrito */}
          <div className="icons-container">
              <LoginWidget />
              <CartWidget />
          </div>        


        </section>
      </section>
  

  )
};

export default Navbar;
