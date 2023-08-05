import { Link } from "react-router-dom"
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-logo">
            <img src="https://res.cloudinary.com/dr6ivzvpc/image/upload/v1691158204/Logo_circular_floral_negro_ycghko.png" alt="Logo"  />
        </div>
        <div className="footer-links">
            <ul className="footer-nav">
            <li className="footer-nav-item">
                <Link to="/">Inicio</Link>
            </li>
            <li className="footer-nav-item">
                <Link to="*">Acerca de nosotros</Link>
            </li>
            <li className="footer-nav-item">
                <Link to="*">Contacto</Link>
            </li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
    &copy; 2023 - Creado por <a href="https://www.linkedin.com/in/galvanevelin/" target="_blank" rel="noopener noreferrer">Evelin Galván</a>
    </div>
</footer>

  )
}

export default Footer