import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            Accueil
          </NavLink>
          <NavLink to="/History" activeClassName="selected">
            History
          </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/History" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
