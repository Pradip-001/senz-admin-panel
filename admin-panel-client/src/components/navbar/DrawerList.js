import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StackPlus from "@material-ui/icons/AddBox";
import ManageIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AboutIcon from "@material-ui/icons/Info";
import LoginIcon from "@material-ui/icons/Person";
import RegisterIcon from "@material-ui/icons/PersonAdd";
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
  toolbar: {
    height: "65px"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing.unit * 3
  }
});

function DrawerList(props) {
  const { isLoggedIn, classes } = props;
  if (isLoggedIn) {
    return (
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
          <ListItem button key="Create Project" component={Link} to="/projects">
            <ListItemIcon>
              <StackPlus />
            </ListItemIcon>
            <ListItemText primary="Create Project" />
          </ListItem>

          <ListItem
            button
            key="Manage Projects"
            component={Link}
            to="/projects"
          >
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
    );
  } else {
    return (
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
          <ListItem button key="LogIn" component={Link} to="/login">
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="LogIn" />
          </ListItem>

          <ListItem button key="SignUp" component={Link} to="/register">
            <ListItemIcon>
              <RegisterIcon />
            </ListItemIcon>
            <ListItemText primary="SignUp" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Settings" component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button key="About" component={Link} to="/about">
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.object.isRequired
};
export default withStyles(styles)(DrawerList);
