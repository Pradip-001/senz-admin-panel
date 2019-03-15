import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Projects from "./Projects";
import { fetchProjects } from "../../actions/projects/projectActions";
class ProjectList extends Component {
  state = {};
  loadProjects() {
    if (this.props.loading) {
      console.log(this.props.user);
      this.props.fetchProjects(this.props.user.user.id);
    }
  }
  render() {
    const { loading } = this.props;
    this.loadProjects();
    if (loading) {
      return <h1>Projects loading ...</h1>;
    } else {
      return <Projects />;
    }
  }
}

const mapStateToProps = state => ({
  user: state.auth,
  projects: state.projects.projects,
  loading: state.projects.loading
});
export default compose(
  connect(
    mapStateToProps,
    { fetchProjects }
  )
)(ProjectList);

// export default ProjectList;
