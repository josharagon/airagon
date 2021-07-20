import "./App.css";

import Nav from "../Nav/Nav.js";
import Dash from "../Dashboard/Dashboard.js";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Dash />
        </Route>
        <Route eaxct path="/profiles">
          <h1>profiles</h1>
        </Route>
        <Route exact path="/proxies">
          <h1>proxie</h1>
        </Route>
      </Switch>
    </>
  );
};

export default App;
