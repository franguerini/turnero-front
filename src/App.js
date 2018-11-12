import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createStoreInitial } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import Doctors from "./screens/Doctors";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NewAppointment from "./screens/NewAppointment";
import ROUTES from "./constants/routes";

class App extends Component {
  render() {
    const store = createStoreInitial(this.props);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.HOME()} component={Home} />
            <Route exact path={ROUTES.DOCTORS()} component={Doctors} />
            <Route exact path={ROUTES.LOGIN()} component={Login} />
            <Route exact path={ROUTES.REGISTER()} component={Register} />
            <Route
              exact
              path={ROUTES.NEWAPPOINTMENT(":id")}
              component={NewAppointment}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
