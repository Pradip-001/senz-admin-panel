import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import ProjectsList from "./ProjectsList";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import {
  fetchProjects,
  unmountProjects,
  createProject
} from "../../actions/projects/projectActions";
class Projects extends Component {
  //state = {};

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadProjects() {
    if (this.props.loading) {
      console.log(this.props.user);
      this.props.fetchProjects(this.props.user.user.id);
    }
  }
  componentWillUnmount() {
    this.props.unmountProjects();
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProject(this.state.value, this.props.user.user.id);
  }

  render() {
    const { loading, projects, user } = this.props;
    this.loadProjects();
    if (!user.authenticated) {
      return <h1>Please login to view your projects...</h1>;
    } else {
      if (loading) {
        return (
          <div>
            <h1>Projects loading...</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      } else if (loading == false && projects.length == 0) {
        return (
          <div>
            <h1>No projects found</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      } else {
        return (
          <div>
            <ProjectsList />
            <form onSubmit={this.handleSubmit}>
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }
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
    { fetchProjects, unmountProjects, createProject }
  )
)(Projects);

// export default ProjectList;
