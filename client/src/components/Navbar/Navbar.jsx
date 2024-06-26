import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

import styles from "./NavbarStyles.module.css";
import { UserContext } from "../../contexts/authContext";
import { logout } from "../../services/authServices";
import { clearUserData } from "../../utils/utils";

import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [modal, setModal] = useState(false);

  const { userData, setUserData, isAdmin } = useContext(UserContext);
  let user = userData?.email;

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
          <Link to={"blogs"} onClick={closeMenu}>
            <li className={styles.navLinks}>
              <i className="fa-solid fa-pen-to-square"></i>Blogs
            </li>
          </Link>

          {isAdmin ? (
            <>
              <Link to={"createDestination"} onClick={closeMenu}>
                <li className={styles.navLinks}>
                  <i className="fa-solid fa-folder-plus"></i>Destination
                </li>
              </Link>
              <Link to={"createBlog"} onClick={closeMenu}>
                <li className={styles.navLinks}>
                  <i className="fa-solid fa-folder-plus"></i>Blog
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
                <span className={styles.userSpan}>{user}</span>
                <button
                  onClick={() => {
                    toast.success("check out");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i> CheckOut
                </button>
                <button
                  onClick={() => {
                    logout();
                    setUserData(null);
                    clearUserData();
                    closeMenu();
                    toast.success(`Goodbye! ${user}`);
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </button>
              </div>
            </div>
          ) : (
            <button className={styles.navbarBtn} onClick={openModal}>
              Sign In
            </button>
          )}

          {!user && (
            <li className={styles.navLinksMobile} onClick={openModal}>
              Sign In
            </li>
          )}
        </ul>
      </nav>
      <AuthModal show={modal} closeModal={closeModal} setUser={setUserData} />
    </>
  );
};

export default Navbar;
