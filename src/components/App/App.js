import "./App.css";

import { useState } from "react";
import Nav from "../Nav/Nav.js";
import Dash from "../Dashboard/Dashboard.js";
import Tasks from "../Tasks/Tasks.js";
import Profiles from "../Profiles/Profiles.js";
import { Route, Switch } from "react-router";
import Proxies from "../Proxies/Proxies";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    tasks: [],
    profiles: [],
  });

  return (
    <>
      <Nav className="navnav" />
      <Switch className="switcharoo">
        <Route exact path="/">
          <Dash />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route eaxct path="/profiles">
          <Profiles />
        </Route>
        <Route exact path="/proxies">
          <Proxies />
        </Route>
      </Switch>
    </>
  );
};

export default App;
