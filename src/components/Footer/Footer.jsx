import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import x from "../../assets/icons/Icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text-container">
        <Link to="/about" className="footer__page-link">
          <p className="footer__text">About us</p>
        </Link>
        <span
          className="footer__text"
          href="mailto:EveryStepOfTheWay@gmail.com"
        >
          EveryStepOfTheWay@gmail.com
        </span>
      </div>
      <div className="footer__icon-container">
        <a href="https://en-gb.facebook.com/">
          <img src={facebook} alt="facebook icon" className="footer__icon" />
        </a>
        <a href="https://www.instagram.com/everystep_ofthewayforyou?igsh=a3ZwOHdydjJheTZ5&utm_source=qr">
          <img src={instagram} alt="instagram icon" className="footer__icon" />
        </a>
        <a href="https://twitter.com/?lang=en">
          <img src={x} alt="x icon" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
