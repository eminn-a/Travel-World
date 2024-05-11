import { useState } from "react";
import "./NavbarStyles.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const activeMenu = () => {
    setMobileMenu((state) => (state = !mobileMenu));
  };

  return (
    <>
      <nav className="navbarItems">
        <div className="logo">
          <h1 className="navbarLogo">
            Travel-World
            <i class="fa-solid fa-umbrella-beach"></i>
          </h1>
        </div>

        <div className="menuIcons">
          <i
            className={mobileMenu ? "fas fa-bars" : "fas fa-times"}
            onClick={activeMenu}
          ></i>
        </div>

        <ul className={mobileMenu ? "navMenu" : "navMenu active"}>
          <li className="navLinks">
            <i className="fa-solid fa-house"></i>Home
          </li>
          <li className="navLinks">
            <i class="fa-solid fa-map-location-dot"></i>Destinations
          </li>
          <li className="navLinks">
            <i className="fa-solid fa-circle-info"></i>About
          </li>
          <li className="navLinks">
            <i className="fa-solid fa-address-book"></i>Contacts
          </li>
          <li className="navLinksMobile">Sign Up</li>
          <button className="navbarBtn">Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
