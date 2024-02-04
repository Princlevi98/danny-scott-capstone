import "./Header.scss";
import logo from "../../assets/images/every-step.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMouseEnter = () => {
    setMenu(true);
  };

  const handleMouseLeave = () => {
    setMenu(false);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Charity logo" />
      </Link>
      <nav className="header__nav">
        <div className="header__link-container">
          <NavLink className="header__link" to="#">
            Login
          </NavLink>
        </div>
        <div></div>
        <div
          className="header__link-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="header__link" to="#">
            Menu
          </NavLink>
          {menu && (
            <div className="header__dropdown-menu">
              <NavLink className="header__link--sub" to="/stock">
                Stock
              </NavLink>
              <NavLink className="header__link--sub" to="/stock/1">
                Order
              </NavLink>
              <NavLink className="header__link--sub" to="/about">
                About
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
