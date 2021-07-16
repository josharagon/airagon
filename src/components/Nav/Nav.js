import "./Nav.css";
import logo from "../../img/aragonaio1.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="side-nav">
      <img src={logo}></img>
      <h4>Tasks</h4>
      <h4>Profiles</h4>
      <h4>Proxies</h4>
      <NavLink exact={true} activeClassName="is-active" to="/">
        Tasks
      </NavLink>
      <NavLink activeClassName="is-active" to="/profiles">
        Profiles
      </NavLink>
      <NavLink activeClassName="is-active" to="/about">
        Proxies
      </NavLink>
    </nav>
  );
};

export default Nav;
