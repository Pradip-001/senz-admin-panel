import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import ProjectsList from "./ProjectsList";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
    this.state.value = "";
  }

  render() {
    const { loading, projects, user, errors } = this.props;

    this.loadProjects();
    if (!user.authenticated) {
      return <h1>Please login to view your projects...</h1>;
    } else {
      if (loading) {
        return (
          <div class="card-container">
            <h1>Projects loading...</h1>
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        );
      } else if (loading == false && projects.length == 0) {
        return (
          <div class="card-container">
            <h1>No projects found</h1>
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        );
      } else {
        return (
          <div class="card-container">
            <ProjectsList />
            <form onSubmit={this.handleSubmit} class="custom-card">
              <label>
                New Project:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <label class="error-class">{this.props.errors.error}</label>
              <Button type="submit">Submit</Button>
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
  loading: state.projects.loading,
  errors: state.errors
});

export default compose(
  connect(
    mapStateToProps,
    { fetchProjects, unmountProjects, createProject }
  )
)(Projects);

// export default ProjectList;
