import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import ProjectsList from "./ProjectsList";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import {
  fetchProjects,
  unmountProjects
} from "../../actions/projects/projectActions";
class Projects extends Component {
  state = {};
  loadProjects() {
    if (this.props.loading) {
      console.log(this.props.user);
      this.props.fetchProjects(this.props.user.user.id);
    }
  }

  addProject() {
    console.log(this.state.input + " project is creeated");
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }
  componentWillUnmount() {
    this.props.unmountProjects();
  }

  render() {
    const { loading, projects } = this.props;
    this.loadProjects();
    if (loading) {
      return (
        <div>
          <h1>Projects loading...</h1>
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <Button
            type="button"
            onClick={() => this.addProject(this.input.value)}
          >
            Add Project
          </Button>
        </div>
      );
    } else if (loading == false && projects.length == 0) {
      return (
        <div>
          <h1>No projects found</h1>
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <Button
            type="button"
            onClick={() => this.addProject(this.input.value)}
          >
            Add Project
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <ProjectsList />
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <Button
            type="button"
            onClick={() => this.addProject(this.input.value)}
          >
            Add Project
          </Button>
        </div>
      );
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
    { fetchProjects, unmountProjects }
  )
)(Projects);

// export default ProjectList;
