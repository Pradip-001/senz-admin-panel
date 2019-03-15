import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
//import { fetchProjects } from "../../actions/projects/projectActions";
import InfiniteScroll from "react-infinite-scroller";

class Projects extends Component {
  state = {};
  // componentDidMount() {
  //   // If logged in and user navigates to Login page, should redirect them to dashboard
  //   if (this.props.user.authenticated) {
  //     this.props.history.push("/login");
  //   }
  // }

  render() {
    const { user, projects } = this.props;
    // // const projects = ["ITO", "CLOUD"];
    // // return <h1>{user.id}</h1>;

    var currentprojects = [];
    for (var i = 0; i < projects.length; i++) {
      currentprojects.push(
        <div key={i}>
          <h1 key={i}>{projects[i].title}</h1>
        </div>
      );
    }
    return currentprojects;
    // return ["IOT", "cloud"].map((item, index) => (
    //   <span key={index}>{item.title}</span>
    // ));
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
    {}
  )
)(Projects);
