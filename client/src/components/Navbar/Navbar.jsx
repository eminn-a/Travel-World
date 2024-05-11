import { useState } from "react";
import styles from "./NavbarStyles.module.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const activeMenu = () => {
    setMobileMenu((state) => (state = !mobileMenu));
  };

  return (
    <>
      <nav className={styles.navbarItems}>
        <div className={styles.logo}>
          <h1 className={styles.navbarLogo}>
            Travel-World
            <i className="fa-solid fa-umbrella-beach"></i>
          </h1>
        </div>

        <div className={styles.menuIcons}>
          <i
            className={mobileMenu ? "fas fa-bars" : "fas fa-times"}
            onClick={activeMenu}
          ></i>
        </div>

        <ul
          className={
            mobileMenu ? styles.navMenu : `${styles.navMenu} ${styles.active}`
          }
        >
          <li className={styles.navLinks}>
            <i className="fa-solid fa-house"></i>Home
          </li>
          <li className={styles.navLinks}>
            <i className="fa-solid fa-map-location-dot"></i>Destinations
          </li>
          <li className={styles.navLinks}>
            <i className="fa-solid fa-circle-info"></i>About
          </li>
          <li className={styles.navLinks}>
            <i className="fa-solid fa-address-book"></i>Contacts
          </li>
          <li className={styles.navLinksMobile}>Sign Up</li>
          <button className={styles.navbarBtn}>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
