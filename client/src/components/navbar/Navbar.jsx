import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItems">
        <div className="logo">
          <h1 className="navbarLogo">
            Travel-World
            <i class="fa-solid fa-umbrella-beach"></i>
          </h1>
        </div>
        <ul className="navMenu">
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
          <li className="navLinksMobile">mobile</li>
          <button className="navbarBtn">Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
