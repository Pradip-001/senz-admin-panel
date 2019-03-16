import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { fetchDevices } from "../../actions/devices/deviceActions";
import Project from "./Project";

class ProjectsList extends Component {
  state = {};

  projectClick(projectid) {
    this.props.fetchDevices(projectid, this.props.user.user.id);
    //window.location = "/devices";
  }
  render() {
    const { user, projects } = this.props;

    return projects.map(project => (
      // <Project
      //   key={project._id}
      //   data={project}
      //   onClick={() => this.projectClick(project._id)}
      // />
      <Project key={project._id} project={project} user={user} />
    ));

    // var currentprojects = [];
    // for (var i = 0; i < projects.length; i++) {
    //   currentprojects.push(
    //     <div key={i}>
    //       <Project
    //         key={i}
    //         data={projects[i]}
    //         onClick={() => this.projectClick(data._id)}
    //       />
    //     </div>
    //   );
    // }
    // return currentprojects;
  }
}

const mapStateToProps = state => ({
  user: state.auth,
  projects: state.projects.projects
});

export default compose(
  connect(
    mapStateToProps,
    { fetchDevices }
  )
)(ProjectsList);
