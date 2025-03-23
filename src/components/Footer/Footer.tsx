import "./Footer.css";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";


export const Footer = () => {
    return (
        <div className="footer-container">
        <div className="brand-container">
            <p> 
                © Hawaii Hotel - Mar del Plata
            </p>
            <p>    
                Reserva telefónica<br></br>
                0223/475-9208<br></br>
                0223/475-3875
            </p>
        </div>
        <div className="social-container">
            <Link
                to="https://www.facebook.com/people/Hotel-Hawaii-Mar-del-Plata/100063838342262/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaSquareFacebook />
            </Link>
            <Link
                to="https://www.instagram.com/hotelhawaiimdp/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaSquareInstagram/>
            </Link>
            <Link to="/newsletter">
                <FaSquareWhatsapp />
            </Link>
      </div>
    </div>
  );
};
