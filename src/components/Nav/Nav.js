import "./Nav.css";
import logo from "../../img/aragonaio1.png";
import stat from "../../img/statbar.png";
import folder from "../../img/folder.png";
import profile from "../../img/profile.png";
import proxy from "../../img/proxy.png";
import settings from "../../img/settings.png";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="side-nav">
      <img className="logo" src={logo}></img>
      <div className="category-holder">
        <p>General</p>
        <NavLink exact to={"/"} activeStyle={{ color: "white" }}>
          <div className="middle">
            <img className="icon-stat" src={stat}></img>
            <p className="button-text">Dashboard</p>
          </div>
        </NavLink>
      </div>
      <div className="category-holder">
        <p>Setup</p>
        <NavLink
          exact
          to={"/Tasks"}
          activeStyle={{ color: "white" }}
          className="multi-button"
        >
          <div className="middle">
            <img className="icon" src={folder}></img>
            <p className="button-text">Tasks</p>
          </div>
        </NavLink>

        <NavLink
          exact
          to={"/profiles"}
          activeStyle={{ color: "white" }}
          className="multi-button"
        >
          <div className="middle">
            <img className="icon-profile" src={profile}></img>
            <p className="button-text">Profiles</p>
          </div>
        </NavLink>
        <NavLink
          exact
          to={"/Proxies"}
          activeStyle={{ color: "white" }}
          className="multi-button"
        >
          <div className="middle">
            <img className="icon-profile" src={proxy}></img>
            <p className="button-text">Proxies</p>
          </div>
        </NavLink>
      </div>
      <div className="category-holder">
        <p>Settings</p>
        <NavLink exact to={"/settings"} activeStyle={{ color: "white" }}>
          <div className="middle">
            <img className="icon-settings" src={settings}></img>
            <p className="button-text">Settings</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
