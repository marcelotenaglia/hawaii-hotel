import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer-container">
        <div className="brand-container">
        </div>
        <div className="social-container">
            <p> 
                © Hawaii Hotel - Mar del Plata
                Reserva telefónica<br></br>
                0223/475-9208<br></br>
                0223/475-3875
            </p>
        
            <Link
                to="https://www.facebook.com/people/Hotel-Hawaii-Mar-del-Plata/100063838342262/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Facebook
            </Link>
            <Link
                to="https://www.instagram.com/hotelhawaiimdp/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </Link>
            <Link to="/newsletter">Reserva</Link>
      </div>
    </div>
  );
};
