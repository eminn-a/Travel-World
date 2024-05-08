import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItems">
        <h1 className="navbarLogo">Travel-World</h1>
        <ul className="navMenu">
          <li>
            <a href="">
              <i className="fa-solid fa-house"></i>Home
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-circle-info"></i>About
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-address-book"></i>Contacts
            </a>
          </li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
