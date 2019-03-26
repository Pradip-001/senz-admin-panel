import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#37474F",
    height: "65px"
  },
  username: {
    marginLeft: "100px"
  },
  navbaritem: {
    margin: "20px"
  }
});

class NavBarTop extends Component {
  render() {
    const { classes, username, authenticated } = this.props;

    if (authenticated) {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar class="mynavbar">
              <Typography
                variant="h6"
                color="inherit"
                className={classes.navbaritem}
              >
                Senz admin-panel
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.navbaritem}
              >
                Welcome, {username} !
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar class="mynavbar">
              <Typography
                variant="h6"
                color="inherit"
                className={classes.navbaritem}
              >
                Senz admin-panel
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

NavBarTop.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  username: state.auth.user.name
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(NavBarTop);

// export default compose(withStyles(styles))(NavBarTop);
