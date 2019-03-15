import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import "./App.css";
import NavBarTop from "./components/navbar/NavBarTop";
import theme from "./theme/theme";
import store from "./store/store";
import Projects from "./components/projects/Projects";
import ProjectList from "./components/projects/ProjectList";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Devices from "./components/devices/Devices";
import About from "./components/about/About";
import CssBaseline from "@material-ui/core/CssBaseline";
import DrawerList from "./components/navbar/DrawerList";

import "./util/setCurrentUser";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <DrawerList />
            <NavBarTop />
            <div className="App">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={ProjectList} />
                <Route exact path="/devices" component={Devices} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
