import "./Nav.css";
import logo from "../../img/aragonaio1.png";

const Nav = () => {
  return (
    <nav className="side-nav">
      <img src={logo}></img>
      <h4>Tasks</h4>
      <h4>Profiles</h4>
      <h4>Proxies</h4>
    </nav>
  );
};

export default Nav;
