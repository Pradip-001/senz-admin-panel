import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Drawer from "./components/navbar/Drawer";
import theme from "./theme/theme";
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Drawer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
