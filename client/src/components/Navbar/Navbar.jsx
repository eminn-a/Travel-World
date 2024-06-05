import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavbarStyles.module.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  let user = true;
  let isAdmin = false;

  const activeMenu = () => {
    setMobileMenu((state) => (state = !mobileMenu));
  };

  const closeMenu = () => {
    setMobileMenu((state) => (state = true));
  };

  return (
    <>
      <nav className={styles.navbarItems}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <h1 className={styles.navbarLogo}>
              Travel-World
              <i className="fa-solid fa-umbrella-beach"></i>
            </h1>
          </Link>
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
          <Link to={"/"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-house"></i>Home
            </li>
          </Link>
          <Link to={"catalog"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-map-location-dot"></i>Destinations
            </li>
          </Link>
          <Link to={"about"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-circle-info"></i>About
            </li>
          </Link>
          <Link to={"contacts"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-address-book"></i>Contacts
            </li>
          </Link>
          <Link to={"create"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-folder-plus"></i>Create Destination
            </li>
          </Link>
          {user ? (
            <div class={styles.dropdown}>
              <button class={styles.dropbtn}>
                <i class="fa-solid fa-circle-user"></i> My Profile
              </button>
              <div class={styles.dropdownContent}>
                <button
                  onClick={() => {
                    toast.success("check out");
                  }}
                >
                  <i class="fa-solid fa-cart-shopping"></i> CheckOut
                </button>
                <button
                  onClick={() => {
                    toast.success("loged out");
                  }}
                >
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
                </button>
              </div>
            </div>
          ) : (
            <button className={styles.navbarBtn}>Sign Up</button>
          )}

          {!user && <li className={styles.navLinksMobile}>Sign Up</li>}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
