import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StackPlus from "@material-ui/icons/AddBox";
import ManageIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AboutIcon from "@material-ui/icons/Info";
import Projects from "../projects/Projects";
import Login from "../login/Login";
import Register from "../register/Register";
import Devices from "../devices/Devices";
import About from "../about/About";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#37474F"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#ffffff"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3
  }
});

function PermanentDrawerLeft(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Senz admin-panel
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="Create Project">
            <ListItemIcon>
              <StackPlus />
            </ListItemIcon>
            <ListItemText primary="Create Project" />
          </ListItem>

          <ListItem button key="Manage Projects">
            <ListItemIcon>
              <ManageIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Projects" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button key="About">
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button key="Logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
          <div className="App">
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/devices" component={Devices} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </main>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawerLeft);
