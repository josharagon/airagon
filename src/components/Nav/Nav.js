import "./Nav.css";
import logo from "../../img/aragonaio1.png";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="side-nav">
      <img src={logo}></img>
      <NavLink
        exact
        to={"/"}
        activeStyle={{ color: "white" }}
        activeClassName="active"
      >
        Tasks
      </NavLink>
      <NavLink
        activeStyle={{ color: "white" }}
        to="/profiles"
      >
        Profiles
      </NavLink>
      <NavLink
        activeStyle={{ color: "white" }}
        to="/about"
      >
        Proxies
      </NavLink>
    </nav>
  );
};

export default Nav;
