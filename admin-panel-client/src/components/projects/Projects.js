import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { projectActions } from "../../actions/projects/projectActions";

class Projects extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return <h1>{user.id}</h1>;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default compose(
  connect(
    mapStateToProps,
    { projectActions }
  )
)(Projects);
