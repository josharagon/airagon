import "./Nav.css";
import logo from "../../img/aragonaio1.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="side-nav">
      <img className="logo" src={logo}></img>
      <NavLink exact to={"/"} activeStyle={{ color: "white" }}>
        Dashboard
      </NavLink>
      <NavLink exact to={"/profiles"} activeStyle={{ color: "white" }}>
        Profiles
      </NavLink>
      <NavLink exact to={"/about"} activeStyle={{ color: "white" }}>
        Proxies
      </NavLink>
    </nav>
  );
};

export default Nav;
