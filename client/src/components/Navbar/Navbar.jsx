import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavbarStyles.module.css";
import toast from "react-hot-toast";
import AuthModal from "../Modal/AuthModal";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [modal, setModal] = useState(false);

  let user = false;
  let isAdmin = true;

  const closeModal = () => {
    setModal((state) => (state = false));
  };
  const openModal = () => {
    setModal((state) => (state = true));
  };

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

          {isAdmin ? (
            <>
              <Link to={"create"} onClick={closeMenu}>
                <li className={styles.navLinks}>
                  <i className="fa-solid fa-folder-plus"></i>Add Destination
                </li>
              </Link>
              <Link to={"create"} onClick={closeMenu}>
                <li className={styles.navLinks}>
                  <i className="fa-solid fa-folder-plus"></i>Add Blog
                </li>
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
          {user ? (
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                <i className="fa-solid fa-circle-user"></i> My Profile
              </button>
              <div className={styles.dropdownContent}>
                <button
                  onClick={() => {
                    toast.success("check out");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i> CheckOut
                </button>
                <button
                  onClick={() => {
                    toast.success("loged out");
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </button>
              </div>
            </div>
          ) : (
            <button className={styles.navbarBtn} onClick={openModal}>
              Sign Up
            </button>
          )}

          {!user && (
            <li className={styles.navLinksMobile} onClick={openModal}>
              Sign Up
            </li>
          )}
        </ul>
      </nav>
      <AuthModal show={modal} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
