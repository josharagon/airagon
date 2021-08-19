import "./App.css";

import { useState } from "react";
import Nav from "../Nav/Nav.js";
import Dash from "../Dashboard/Dashboard.js";
import Tasks from "../Tasks/Tasks.js";
import Profiles from "../Profiles/Profiles.js";
import { Route, Switch } from "react-router";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    tasks: [],
    profiles: [],
  });

  return (
    <>
      <Nav />
      <Switch>
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
          <h1>proxie</h1>
        </Route>
      </Switch>
    </>
  );
};

export default App;
