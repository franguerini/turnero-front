import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import ROUTES from "./constants/routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.HOME()} component={Home} />
          <Route path={ROUTES.PROFILE(12)} component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
