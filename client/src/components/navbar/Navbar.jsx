import { useState } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

const Navbar = () => {
  const [navBarStat, setnavBarStat] = useState(false);

  const navStatClickHandler = () => {
    setnavBarStat((navBarStat) => !navBarStat);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        EminApp <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={navStatClickHandler}>
        <i className={navBarStat ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navBarStat ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((x, index) => (
          <li key={index}>
            <a href={x.url} className={x.className}>
              <i className={x.icon}></i>
              {x.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;